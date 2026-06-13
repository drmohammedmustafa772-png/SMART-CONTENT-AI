
// عند تثبيت الـ Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('smartcontent-cache').then(cache => {
      return cache.addAll([
        '/',          // الصفحة الرئيسية
        '/index.html' // ملف الموقع الأساسي
      ]);
    })
  );
});

// عند طلب أي ملف من الموقع
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // إذا الملف موجود في الكاش، يعرضه
      // إذا غير موجود، يجلبه من الإنترنت
      return response || fetch(event.request);
    })
  );
}); 
