"use strict";var precacheConfig=[["/index.html","c478dba78fc97d3543dde3309171f2f9"],["/static/js/main.4146dfa8.js","9615fdbb6d2f8109e24ae22632abc221"],["/static/media/_common.e4455dc6.scss","e4455dc6b52ad2acef3ff9ee978ae3e0"],["/static/media/_navigation.32a12ee4.scss","32a12ee47deea686ce6cf2f277e7ef26"],["/static/media/_products.ded2ceed.scss","ded2ceedccc4a523f3b070c391ceb749"],["/static/media/_slider.7977bb0a.scss","7977bb0a01d0f1ca9f09b3b835c3bc42"],["/static/media/about.ad24e33b.jpg","ad24e33b19ea2a3f1a46dcbaf9e3c9e2"],["/static/media/avater-1.ffa6ae94.jpg","ffa6ae9436dfd88d5c3057bf820d772c"],["/static/media/category-1.ecffb7c8.jpg","ecffb7c805e2af5e4fb442f79b8b43a1"],["/static/media/category-2.a92d3d90.jpg","a92d3d90cbc2ff7c55f170242bd23469"],["/static/media/category-3.e719820b.jpg","e719820b7c54a6804bc5f48ed1e3e6ed"],["/static/media/home.480d1fa5.scss","480d1fa5ca27c2c4f025a01569407a25"],["/static/media/modal-product.9725ff71.jpg","9725ff71ada2a9d949753349ea719b45"],["/static/media/product-1.5b4a44ee.jpg","5b4a44eeffacd47775bdb5a16ed202d4"],["/static/media/product-1.5dbf09cc.jpg","5dbf09cc4e2319909382ec6448f5fd92"],["/static/media/product-2.df6f4225.jpg","df6f4225219fd4ef22bedc68bc8a2ab5"],["/static/media/product-3.67c9fe6e.jpg","67c9fe6e3a9b52461f0cb3698df19c0c"],["/static/media/product-4.546a159d.jpg","546a159d0b0f6b3dba02e0e18e711225"],["/static/media/product-5.73294011.jpg","73294011b1870c0a34e4a589b0e7afc7"],["/static/media/product-6.1200f043.jpg","1200f043efccb2b8fb4af0b92af6750e"],["/static/media/slider-3.b8545735.jpg","b8545735e2fe2c92694b01f6f80730f9"],["/static/media/style.1cbab782.scss","1cbab782bf09b02ebe5d27ad869caf4c"],["/static/media/team-1.c33f04dc.jpg","c33f04dcd1dcca7f9b9aead4064bef05"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var n="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});