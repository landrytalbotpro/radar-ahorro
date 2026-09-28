/* Radar : fonctionne hors ligne une fois ouvert. Rien n'est envoyé : ce fichier ne fait que garder une copie du site. */
const VERSION = "radar-v7";
const CORE = ["./","index.html","app.js","config.js","manifest.webmanifest","privacidad.html",
  "icons/icon.svg","icons/landry.jpg","icons/icon-32.png","icons/icon-180.png","icons/icon-192.png","icons/icon-512.png",
  "fonts/bricolage-grotesque-latin-500-normal.woff2","fonts/bricolage-grotesque-latin-700-normal.woff2","fonts/bricolage-grotesque-latin-800-normal.woff2",
  "fonts/atkinson-hyperlegible-latin-400-normal.woff2","fonts/atkinson-hyperlegible-latin-700-normal.woff2",
  "vendor/pdf.min.js","vendor/pdf.worker.min.js","vendor/xlsx.full.min.js"]; // pour que le mode avion marche aussi avec PDF et Excel
self.addEventListener("install", e=>{ e.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())); });
self.addEventListener("activate", e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener("fetch", e=>{
  const req = e.request;
  if(req.method!=="GET" || new URL(req.url).origin!==location.origin) return;
  const fresh = req.mode==="navigate" || /\/(app|config)\.js$/.test(req.url);
  if(fresh){ // réseau d'abord : les mises à jour arrivent tout de suite
    e.respondWith(fetch(req).then(r=>{ const c=r.clone(); caches.open(VERSION).then(x=>x.put(req,c)); return r; }).catch(()=>caches.match(req).then(r=>r||caches.match("index.html"))));
  } else { // cache d'abord : polices, icônes, bibliothèques
    e.respondWith(caches.match(req).then(r=>r||fetch(req).then(res=>{ if(res.ok){ const c=res.clone(); caches.open(VERSION).then(x=>x.put(req,c)); } return res; })));
  }
});
