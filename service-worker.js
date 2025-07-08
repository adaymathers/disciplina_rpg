const CACHE_NAME = 'rpg-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './css/styles.css',
  './js/firebase-config.js',
  './js/auth.js',
  './js/actividades.js',
  './js/misiones.js',
  './js/iu.js',
  './icon-192.png',
  './icon-512.png',
  'https://fonts.googleapis.com/css2?family=Orbitron:wght@500&family=Share+Tech+Mono&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request);
    })
  );
});
