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
    localStorage.setItem("knitting_last_page", id);
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
    let count = 0;
    PageRegistry.getAll().forEach(p => {
      if (p.getHistEntries) count += p.getHistEntries().length;
    });
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

    // Build merged history across all pages, sorted newest first
    const allEntries = [];
    PageRegistry.getAll().forEach(p => {
      if (!p.getHistEntries) return;
      p.getHistEntries().forEach((entry, origIdx) => {
        allEntries.push({ ...entry, _pageId: p.id, _pageTitle: p.title, _origIdx: origIdx });
      });
    });
    allEntries.sort((a, b) => b.ts - a.ts);

    if (allEntries.length === 0) {
      list.innerHTML = `<div id="sb-empty">No history yet.<br><br>Your position saves automatically. Come back tomorrow and you'll pick up right where you left off.</div>`;
      return;
    }

    let currentDate = null;
    allEntries.forEach(entry => {
      const dateStr = fmtDate(entry.ts);
      if (dateStr !== currentDate) {
        currentDate = dateStr;
        const hdr = document.createElement("div");
        hdr.className   = "hist-date-hdr";
        hdr.textContent = dateStr;
        list.appendChild(hdr);
      }

      const entryPage = PageRegistry.get(entry._pageId);
      const fmt_entry = entryPage.formatHistEntry(entry);
      const isCurrent = fmt_entry.isCurrent && (entry._pageId === currentPageId);

      const row = document.createElement("div");
      row.className = "hist-entry" + (isCurrent ? " is-current" : "");

      // Page tag — 2-letter abbreviation derived from page id segments
      const pageTagEl = document.createElement("span");
      pageTagEl.className   = "hist-page-tag hist-page-" + entry._pageId;
      pageTagEl.textContent = entry._pageId.split("-").map(w => w[0].toUpperCase()).join("");
      row.appendChild(pageTagEl);

      const labelSpan = document.createElement("span");
      labelSpan.className = "hist-ridge" + (fmt_entry.labelClass ? " " + fmt_entry.labelClass : "");
      labelSpan.textContent = fmt_entry.label;
      labelSpan.title       = `${entry._pageTitle}: ${fmt_entry.label}`;
      row.appendChild(labelSpan);

      const timeEl = document.createElement("span");
      timeEl.className   = "hist-time";
      timeEl.textContent = fmt(entry.ts);
      row.appendChild(timeEl);

      const delEl = document.createElement("span");
      delEl.className   = "hist-del";
      delEl.textContent = "✕";
      delEl.title       = "Remove";
      row.appendChild(delEl);

      row.addEventListener("click", e => {
        if (e.target === delEl) {
          e.stopPropagation();
          entryPage.deleteHistEntry(entry._origIdx);
          refreshSidebar();
          updateHistBadge();
        } else {
          if (entry._pageId !== currentPageId) navigateTo(entry._pageId);
          PageRegistry.get(entry._pageId).navigateToHistEntry(entry);
        }
      });

      list.appendChild(row);
    });
  }

  document.getElementById("btn-history").addEventListener("click", toggleSidebar);
  document.getElementById("btn-sidebar-close").addEventListener("click", toggleSidebar);

  document.getElementById("btn-clear-hist").addEventListener("click", () => {
    if (confirm("Clear all history entries?")) {
      PageRegistry.getAll().forEach(p => { if (p.clearHistory) p.clearHistory(); });
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

  // ── Boot: navigate to last visited page (or first registered) ───────────────
  const savedPageId = localStorage.getItem("knitting_last_page");
  const bootPageId  = (savedPageId && PageRegistry.get(savedPageId)) ? savedPageId
                    : (PageRegistry.getAll()[0] || {}).id;
  if (bootPageId) navigateTo(bootPageId);
})();
