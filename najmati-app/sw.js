const C='najmati-v13',A=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','config.js','qr.js','fonts/aref-ruqaa-700.woff2','fonts/reem-kufi-700.woff2','html2canvas.min.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))).then(()=>clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!='GET')return;e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(C).then(ch=>ch.put(e.request,c));return r}).catch(()=>caches.match(e.request).then(m=>m||caches.match('index.html'))))});
