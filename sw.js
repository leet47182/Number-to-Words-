const CACHE_NAME = "ntw-converter-v1";

const FILES_TO_CACHE = [
  "/Number-to-Words-/",
  "/Number-to-Words-/index.html",
  "/Number-to-Words-/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
