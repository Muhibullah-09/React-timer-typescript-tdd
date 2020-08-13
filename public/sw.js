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


