function addToCache(request, response) {
  caches.open('reservations-app').then((cache) => {
    cache.put(request, response);
  });
}

self.addEventListener('fetch', (event) => {
  if (event.request.url.indexOf('http') !== 0) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        addToCache(event.request, response.clone());
        return response;
      })
      .catch(() => caches.match(event.request)),
  );
});


self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});
