// Syncs all knitting localStorage keys to/from the server.
// Loaded before shell.js. Exposes window.KnittingSync.init() which shell.js
// awaits before booting, so server state is in localStorage by first page load.

window.KnittingSync = (() => {
  const KEYS = [
    'knitting_last_page',
    'bea-blouse-step',
    'bea-blouse-sleeves',
    'bea-blouse-history',
    'srajans-sweater-step',
    'srajans-sweater-sleeves',
    'srajans-sweater-history',
    'srajans-sweater-stripes',
    'srajans-sweater-sleeve-stripe-seed',
    'knitting_pearl_earring_state',
    'knitting_pearl_earring_history',
    'knitting_pearl_earring_stitch_guide',
  ];

  // Keep references to the original methods before monkey-patching
  const _setItem = localStorage.setItem.bind(localStorage);
  const _getItem = localStorage.getItem.bind(localStorage);

  let dirty    = false;
  let pushTimer = null;

  // Intercept writes to known keys so we know when to push
  localStorage.setItem = function (key, value) {
    const old = _getItem(key);
    _setItem(key, value);
    if (KEYS.includes(key) && value !== old) {
      dirty = true;
      schedulePush();
    }
  };

  function schedulePush() {
    clearTimeout(pushTimer);
    pushTimer = setTimeout(push, 3000);
  }

  async function push() {
    if (!dirty) return;
    const data = {};
    KEYS.forEach(k => {
      const v = _getItem(k);
      if (v !== null) data[k] = v;
    });
    try {
      const resp = await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (resp.ok) dirty = false;
    } catch { /* retry on next change */ }
  }

  // Flush immediately on page close via sendBeacon (cookies are included automatically)
  window.addEventListener('beforeunload', () => {
    if (!dirty) return;
    const data = {};
    KEYS.forEach(k => {
      const v = _getItem(k);
      if (v !== null) data[k] = v;
    });
    navigator.sendBeacon('/api/progress',
      new Blob([JSON.stringify(data)], { type: 'application/json' })
    );
  });

  async function init() {
    try {
      const resp = await fetch('/api/progress');

      if (resp.status === 401) {
        window.location.href = '/login.html';
        // Return a promise that never resolves so the redirect can happen
        return new Promise(() => {});
      }

      if (!resp.ok) return;

      const serverData = await resp.json();
      const serverEmpty = Object.keys(serverData).length === 0;
      const localHasData = KEYS.some(k => _getItem(k) !== null);

      if (serverEmpty && localHasData) {
        // First time using this device with the server — migrate local data up
        dirty = true;
        await push();
      } else if (!serverEmpty) {
        // Write server state into localStorage (server is the source of truth)
        KEYS.forEach(k => {
          if (serverData[k] !== undefined) _setItem(k, serverData[k]);
        });
      }
    } catch {
      // Network error — continue with whatever is in localStorage
    }
  }

  return { init, push };
})();
