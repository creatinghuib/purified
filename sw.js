// v2: gebundelde build. Nieuwe CACHE_NAME t.o.v. v1 zorgt ervoor dat elke
// browser die de oude (kapotte) versie ooit gecachet had, gegarandeerd
// overschakelt naar deze nieuwe versie i.p.v. voor altijd de oude, stuk-
// gecachete bestanden te blijven serveren.
const CACHE_NAME = "purified-v2-bundle";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./app.bundle.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network-first voor eigen bestanden (zodat een nieuwe upload naar GitHub
// altijd meteen zichtbaar is, i.p.v. dat een oude cache in de weg zit) —
// met een cache-fallback puur voor als je echt geen internet hebt.
self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);
  const isCore = url.origin === self.location.origin;

  if (isCore) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
          return res;
        })
        .catch(() => caches.match(req))
    );
  } else {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
          return res;
        })
        .catch(() => caches.match(req))
    );
  }
});
