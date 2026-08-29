const CACHE = 'knitting-v2';
const STATIC = [
  '/',
  '/index.html',
  '/styles.css',
  '/manifest.json',
  '/icon.svg',
  '/js/registry.js',
  '/js/sync.js',
  '/js/shell.js',
  '/pages/bea-blouse/page.js',
  '/pages/baby-booties/page.js',
  '/pages/pearl-earring/page.js',
  '/pages/pearl-earring/pattern-data.js',
  '/pages/moon-set-polo/page.js',
  '/pages/ciro-sweater/page.js',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(STATIC)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Never intercept API calls — they need fresh responses and cookies
  if (new URL(e.request.url).pathname.startsWith('/api/')) return;

  // Network-first: always try to get the latest, fall back to cache when offline
  e.respondWith(
    fetch(e.request)
      .then(resp => {
        if (resp.ok) {
          caches.open(CACHE).then(c => c.put(e.request, resp.clone()));
        }
        return resp;
      })
      .catch(() => caches.match(e.request))
  );
});
