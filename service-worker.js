!function(){"use strict";const e=["client/about.b61b7a63.js","client/[slug].45c38ba9.js","client/client.b8faaf55.js","client/index.eb09eeed.js","client/client.6087e83c.js"].concat(["service-worker-index.html","favicon.png","global.css"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1592664373306").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1592664373306"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1592664373306").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const c=await t.match(e.request);if(c)return c;throw s}}))))})}();
