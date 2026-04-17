self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// REQUIRED: must handle fetch in a meaningful way
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
