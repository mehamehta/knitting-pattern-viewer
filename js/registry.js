// Page registry — pages register themselves before shell.js initializes.
// Each page calls PageRegistry.register(id, config) from its own script.
window.PageRegistry = {
  _pages: {},

  register(id, config) {
    this._pages[id] = config;
  },

  getAll() {
    return Object.values(this._pages);
  },

  get(id) {
    return this._pages[id];
  },
};
