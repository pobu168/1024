if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),t={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>t[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-5ffe50d4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...all_-CaVWyUWY.js",revision:null},{url:"assets/_...all_-legacy-BA5p1vvc.js",revision:null},{url:"assets/en-US-Caod6nmH.js",revision:null},{url:"assets/en-US-legacy-CSrHup6S.js",revision:null},{url:"assets/index-B-Q7LsSc.js",revision:null},{url:"assets/index-BfDLt5O5.js",revision:null},{url:"assets/index-BNlSxTlc.js",revision:null},{url:"assets/index-BTJQlUx_.js",revision:null},{url:"assets/index-CAxIOhrc.js",revision:null},{url:"assets/index-CbjJokav.js",revision:null},{url:"assets/index-ceLZlZWH.js",revision:null},{url:"assets/index-CSRQWGRU.js",revision:null},{url:"assets/index-CY0lL-rQ.js",revision:null},{url:"assets/index-D-b52IOJ.js",revision:null},{url:"assets/index-DhyFzqN0.js",revision:null},{url:"assets/index-DSMtWRY2.js",revision:null},{url:"assets/index-legacy--6Irtb0c.js",revision:null},{url:"assets/index-legacy-Bd-TjD4l.js",revision:null},{url:"assets/index-legacy-BKBTd-mz.js",revision:null},{url:"assets/index-legacy-BqqdF92F.js",revision:null},{url:"assets/index-legacy-ButkF8BE.js",revision:null},{url:"assets/index-legacy-BvL-e0PD.js",revision:null},{url:"assets/index-legacy-Bz_9HbH0.js",revision:null},{url:"assets/index-legacy-C07Kg0ZB.js",revision:null},{url:"assets/index-legacy-CICNMLR-.js",revision:null},{url:"assets/index-legacy-CUzNVjHI.js",revision:null},{url:"assets/index-legacy-MfYw2I0x.js",revision:null},{url:"assets/index-legacy-RcsJY-qe.js",revision:null},{url:"assets/index-legacy-SMY54iQs.js",revision:null},{url:"assets/index-legacy-yb5sM4I6.js",revision:null},{url:"assets/index-nTSqMNgz.js",revision:null},{url:"assets/index-s4vYusqI.js",revision:null},{url:"assets/inline-px-to-vw-BmAX3sGO.js",revision:null},{url:"assets/inline-px-to-vw-legacy-B1GdP4SK.js",revision:null},{url:"assets/polyfills-legacy-B8uGJVIC.js",revision:null},{url:"assets/route-block-B_A1xBdJ.js",revision:null},{url:"assets/route-block-legacy-wdPIt6g0.js",revision:null},{url:"assets/style-_FkTNCZR.css",revision:null},{url:"assets/zh-CN-8mEN5y8k.js",revision:null},{url:"assets/zh-CN-legacy-DTuvmf7b.js",revision:null},{url:"index.html",revision:"3c704528e9fb04a44ca16adda8e0e28f"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.svg",revision:"f7b8fe9d9e55ab94d33dc6b8247b7013"},{url:"pwa-192x192.png",revision:"1295b2399a65986b617cf4aafd2e19fb"},{url:"pwa-512x512.png",revision:"cc6117e96c29c8310db089c9363b8ffe"},{url:"safari-pinned-tab.svg",revision:"27da412d8e9cf8f1033912a516c9fb99"},{url:"manifest.webmanifest",revision:"690870e47a230dbb26f382b9044e5098"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));