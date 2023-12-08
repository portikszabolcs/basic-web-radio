let cacheName = 'radio-cache-v3.4.2';
let urlsToCache = [
    './',
    './text.json',
    './en/',
    './en/text.json',
    './ro/',
    './ro/text.json',
    './style.css',
    './app.min.js',
    './img/main-logo.svg',
    './img/apple-touch.png',
    './img/android-chrome.png',
    './img/maskable-grey.svg',
    './img/star.png',
    './img/star-filled.png',
    './img/website.png',
    './fonts/MaterialIconsOutlined-Regular.otf'
    ];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName)
        .then(function(cache) {
            console.log('Opened cache');
        return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith((async () => {
        const r = await caches.match(e.request);
        if (r) { return r; }
        try{
            const response = await fetch(e.request);
            const cache = await caches.open(cacheName);
            if(e.request.url.includes("/img/stations")){
                cache.put(e.request, response.clone());
            }
            return response;
        }catch (error){
            return null;
        }
    })());
});


self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keyList) => {
    return Promise.all(keyList.map((key) => {
      if (key === cacheName) { return; }
      return caches.delete(key);
    }))
  }));
});

