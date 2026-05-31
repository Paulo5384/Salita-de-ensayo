const CACHE = "salita-v1";
const URLS = ["/Salita-de-ensayo/", "/Salita-de-ensayo/index.html"];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(URLS))));
self.addEventListener("fetch", e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
