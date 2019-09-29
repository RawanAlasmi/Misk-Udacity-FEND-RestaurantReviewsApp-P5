/* self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('restaurant').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/restaurant.html',
          '/css/styles.css',
          '/js/dbhelper.js',
          '/js/main.js',
          '/js/restaurant_info.js',
          '/offline.js',
          '/data/restaurants.json',
          '/img/',
          '/img/1.jpg',
          '/img/2.jpg',
          '/img/3.jpg',
          '/img/4.jpg',
          '/img/5.jpg',
          '/img/6.jpg',
          '/img/7.jpg',
          '/img/8.jpg',
          '/img/9.jpg',
          '/img/10.jpg',
        ]).then(() => {
         console.log('Finished caching all files!');
        }).catch((error) => {
         console.log('Caching threw an error: ', error);
        })
      })
    );
   });
self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.filter(function (cacheName) {
                    return cacheName.startsWith('cache-') &&
                        cacheName != cacheVersion;
                }).map(function (cacheName) {
                    return cache.delete(cacheName);
                })
            );
        })
    );
}); */


var cacheVersion = "cache-V1";

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheVersion).then(function (cache) {
            return cache.addAll([
                "/",
                "/index.html",
                "/restaurant.html",
                "/offline.html",
                "/css/styles.css",
                "/js/dbhelper.js",
                "/js/main.js",
                "/js/restaurant_info.js",
                "/img/1.jpg",
                "/img/2.jpg",
                "/img/3.jpg",
                "/img/4.jpg",
                "/img/5.jpg",
                "/img/6.jpg",
                "/img/7.jpg",
                "/img/8.jpg",
                "/img/9.jpg",
                "/img/10.jpg",
                "/img/1-M.jpeg",
                "/img/2-M.jpeg",
                "/img/3-M.jpeg",
                "/img/4-M.jpeg",
                "/img/5-M.jpeg",
                "/img/6-M.jpeg",
                "/img/7-M.jpeg",
                "/img/8-M.jpeg",
                "/img/9-M.jpeg",
                "/img/10-M.jpeg",
                "/img/1-S.jpeg",
                "/img/2-S.jpeg",
                "/img/3-S.jpeg",
                "/img/4-S.jpeg",
                "/img/5-S.jpeg",
                "/img/6-S.jpeg",
                "/img/7-S.jpeg",
                "/img/8-S.jpeg",
                "/img/9-S.jpeg",
                "/img/10-S.jpeg",
                "/data/restaurants.json",
                "https://unpkg.com/leaflet@1.3.1/dist/leaflet.js",
                "https://unpkg.com/leaflet@1.3.1/dist/leaflet.css",
                "/restaurant.html?id=1",
                "/restaurant.html?id=2",
                "/restaurant.html?id=3",
                "/restaurant.html?id=4",
                "/restaurant.html?id=5",
                "/restaurant.html?id=5",
                "/restaurant.html?id=6",
                "/restaurant.html?id=7",
                "/restaurant.html?id=8",
                "/restaurant.html?id=9",
                "/restaurant.html?id=9",
                "/restaurant.html?id=10"
            ]);
        })
    );
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.filter(function (cacheName) {
                    return cacheName.startsWith('cache-') &&
                        cacheName != cacheVersion;
                }).map(function (cacheName) {
                    return cache.delete(cacheName);
                })
            );
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request, {ignoreSearch: true}).then(function (response) {
            return response || fetch(event.request);
        }).catch(function() {
            return caches.match('/offline.html');
        })
    );
}); 

