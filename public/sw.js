//cache stands for storage of the browser if we load something once
// if we make a request for example if you load a image you dont have to load a image every time
//when you go online you just take it from the cache 'its faster and more effecctive'.
const CACHE_NAME = "StopWatch-1";

const self = this
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
self.addEventListener('fetch', event => {
    console.log('url', event.request.url);
    if (event.request.url === 'http://localhost:3001/static/js/main.chunk.js') {
        event.waitUntil(
            this.registration.showNotification("EebTech", {
                body: 'Hello from Muhibullah Khan Kamali',
                icon: 'https://2vb7j048t3rt461f0o4i5i5f-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/clock-icon.png'
            })
        );

    }
    // Prevent the default, and handle the request ourselves.
    event.respondWith(async function () {
        // Try to get the response from a cache.
        const cachedResponse = await caches.match(event.request);
        // Return it if we found one.
        if (cachedResponse) return cachedResponse;
        // If we didn't find a match in the cache, use the network.
        return fetch(event.request);
    }());
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