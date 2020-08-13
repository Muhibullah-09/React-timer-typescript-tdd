//cache stands for storage of the browser if we load something once
// if we make a request for example if you load a image you dont have to load a image every time
//when you go online you just take it from the cache 'its faster and more effecctive'.
const CACHE_NAME = "StopWatch-1";


//Cache Initializer
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            cache.addAll([
                '/static/js/bundle.js',
                '/static/js/0.chunk.js',
                '/static/js/main.chunk.js',
                '/index.html',
                '/',
            ])
        })
    )
})

// Listen for requests
self.addEventListener('fetch', function (event) {
    event.respondWith(
        fetch(event.request).catch(function () {
            return caches.match(event.request);
        })
    );
});

/* This is sample of weather app
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
     return cache.match(event.request).then(response => {
      return response || fetch(event.request)
      .then(response => {
        const responseClone = response.clone();
        cache.put(event.request, responseClone);
        })
      })
    }
 );
});

// Activate the SW
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if (!cacheWhitelist.includes(cacheName)) {//if cacheWhitelist does not include a cacheName then return
                    return caches.delete(cacheName);
                }
            })
        ))

    )
});
*/

//Now we create offline mode


