// ─── Shell: nav sidebar, history sidebar, PiP button, page routing ──────────
// Runs after all page scripts have registered themselves in PageRegistry.

(function () {
  const navSidebar   = document.getElementById("nav-sidebar");
  const navList      = document.getElementById("nav-project-list");
  const btnNav       = document.getElementById("btn-nav");
  const btnNavClose  = document.getElementById("btn-nav-close");
  const toolbarMount = document.getElementById("page-toolbar-mount");
  const bodyMount    = document.getElementById("page-body-mount");
  const statusEl     = document.getElementById("status");

  let currentPageId = null;

  // ── Shell API (passed to pages so they can trigger shell actions) ──────────
  const shellAPI = {
    refreshHistory() { refreshSidebar(); },
    updateHistBadge() { updateHistBadge(); },
    setStatus(text)  { statusEl.textContent = text; },
    isPipActive()    { return document.getElementById("btn-pip").classList.contains("active"); },
    setPipActive(on) { document.getElementById("btn-pip").classList.toggle("active", on); },
  };

  // ── Populate nav list from registry ────────────────────────────────────────
  PageRegistry.getAll().forEach(page => {
    const item = document.createElement("div");
    item.className       = "nav-project-item";
    item.dataset.pageId  = page.id;
    item.innerHTML = `<div class="nav-project-name">${page.title}</div>
                      <div class="nav-project-status">${page.status || ""}</div>`;
    item.addEventListener("click", () => navigateTo(page.id));
    navList.appendChild(item);
  });

  // ── Page routing ────────────────────────────────────────────────────────────
  function navigateTo(id) {
    if (id === currentPageId) {
      navSidebar.classList.remove("open");
      btnNav.classList.remove("active");
      return;
    }

    // Unmount current page
    if (currentPageId) {
      const prev = PageRegistry.get(currentPageId);
      if (prev && prev.unmount) prev.unmount();
    }

    // Clear mounts
    toolbarMount.innerHTML = "";
    bodyMount.innerHTML    = "";

    // Mount new page
    currentPageId = id;
    const page = PageRegistry.get(id);
    if (page && page.mount) page.mount(toolbarMount, bodyMount, shellAPI);

    // Update nav active state
    navList.querySelectorAll(".nav-project-item").forEach(item => {
      item.classList.toggle("active", item.dataset.pageId === id);
    });

    // Update sidebar display
    refreshSidebar();

    // Close nav
    navSidebar.classList.remove("open");
    btnNav.classList.remove("active");
  }

  // ── Nav sidebar toggle ──────────────────────────────────────────────────────
  btnNav.addEventListener("click", () => {
    navSidebar.classList.toggle("open");
    btnNav.classList.toggle("active");
  });
  btnNavClose.addEventListener("click", () => {
    navSidebar.classList.remove("open");
    btnNav.classList.remove("active");
  });

  // ── History sidebar ────────────────────────────────────────────────────────
  let sidebarOpen = false;

  function toggleSidebar() {
    sidebarOpen = !sidebarOpen;
    document.getElementById("sidebar").classList.toggle("open", sidebarOpen);
    if (sidebarOpen) refreshSidebar();
  }

  function updateHistBadge() {
    const page = currentPageId && PageRegistry.get(currentPageId);
    const count = page && page.getHistEntries ? page.getHistEntries().length : 0;
    document.getElementById("hist-count").textContent = count;
  }

  function fmt(ts) {
    const d = new Date(ts);
    return d.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
  }
  function fmtDate(ts) {
    const d = new Date(ts);
    const today     = new Date();
    const yesterday = new Date(today); yesterday.setDate(yesterday.getDate() - 1);
    if (d.toDateString() === today.toDateString())     return "Today";
    if (d.toDateString() === yesterday.toDateString()) return "Yesterday";
    return d.toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric" });
  }

  function refreshSidebar() {
    const page = currentPageId && PageRegistry.get(currentPageId);

    updateHistBadge();

    // Current position display
    const labelEl = document.getElementById("sb-current-ridge");
    const subEl   = document.getElementById("sb-current-sub");
    if (page && page.getCurrentPos) {
      const pos = page.getCurrentPos();
      labelEl.textContent = pos.label;
      subEl.textContent   = pos.sub;
    } else {
      labelEl.textContent = "—";
      subEl.textContent   = "—";
    }

    if (!sidebarOpen) return;

    const list = document.getElementById("sb-list");
    list.innerHTML = "";

    if (!page || !page.getHistEntries) {
      list.innerHTML = `<div id="sb-empty">No history for this page.</div>`;
      return;
    }

    const hist = page.getHistEntries();
    if (hist.length === 0) {
      list.innerHTML = `<div id="sb-empty">No history yet.<br><br>Your position saves automatically. Come back tomorrow and you'll pick up right where you left off.</div>`;
      return;
    }

    let currentDate = null;
    hist.forEach((entry, idx) => {
      const dateStr = fmtDate(entry.ts);
      if (dateStr !== currentDate) {
        currentDate = dateStr;
        const hdr = document.createElement("div");
        hdr.className   = "hist-date-hdr";
        hdr.textContent = dateStr;
        list.appendChild(hdr);
      }

      const fmt_entry = page.formatHistEntry(entry);
      const isCurrent = fmt_entry.isCurrent;

      const row = document.createElement("div");
      row.className = "hist-entry" + (isCurrent ? " is-current" : "");

      const labelSpan = document.createElement("span");
      labelSpan.className = "hist-ridge" + (fmt_entry.labelClass ? " " + fmt_entry.labelClass : "");
      labelSpan.textContent = fmt_entry.label;

      const timeEl = document.createElement("span");
      timeEl.className   = "hist-time";
      timeEl.textContent = fmt(entry.ts);

      const delEl = document.createElement("span");
      delEl.className   = "hist-del";
      delEl.textContent = "✕";
      delEl.title       = "Remove";

      row.appendChild(labelSpan);
      row.appendChild(timeEl);
      row.appendChild(delEl);

      row.addEventListener("click", e => {
        if (e.target === delEl) {
          e.stopPropagation();
          page.deleteHistEntry(idx);
          refreshSidebar();
          updateHistBadge();
        } else {
          page.navigateToHistEntry(entry);
        }
      });

      list.appendChild(row);
    });
  }

  document.getElementById("btn-history").addEventListener("click", toggleSidebar);
  document.getElementById("btn-sidebar-close").addEventListener("click", toggleSidebar);

  document.getElementById("btn-clear-hist").addEventListener("click", () => {
    const page = currentPageId && PageRegistry.get(currentPageId);
    if (!page || !page.clearHistory) return;
    if (confirm("Clear all history entries?")) {
      page.clearHistory();
      refreshSidebar();
      updateHistBadge();
    }
  });

  // ── PiP button (delegates to current page) ─────────────────────────────────
  document.getElementById("btn-pip").addEventListener("click", () => {
    const page = currentPageId && PageRegistry.get(currentPageId);
    if (page && page.togglePip) page.togglePip();
  });

  // ── Keyboard events (delegate to current page) ─────────────────────────────
  document.addEventListener("keydown", e => {
    if (document.activeElement.tagName === "INPUT") return;
    if (e.key === "Escape") {
      // Close any open overlays
      const page = currentPageId && PageRegistry.get(currentPageId);
      if (page && page.handleKey) page.handleKey(e);
      return;
    }
    const page = currentPageId && PageRegistry.get(currentPageId);
    if (page && page.handleKey) page.handleKey(e);
  });

  // ── Boot: navigate to first registered page ─────────────────────────────────
  const firstPage = PageRegistry.getAll()[0];
  if (firstPage) navigateTo(firstPage.id);
})();
