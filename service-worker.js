if(!self.define){let e,r={};const c=(c,i)=>(c=new URL(c+".js",i).href,r[c]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=r,document.head.appendChild(e)}else e=c,importScripts(c),r()})).then((()=>{let e=r[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,s)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(r[t])return;let n={};const o=e=>c(e,t),l={module:{uri:t},exports:n,require:o};r[t]=Promise.all(i.map((e=>l[e]||o(e)))).then((e=>(s(...e),n)))}}define(["./workbox-4f586afe"],(function(e){"use strict";e.setCacheNameDetails({prefix:"creatic2"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/creatic2/css/app.cf71b751.css",revision:null},{url:"/creatic2/index.html",revision:"2863fabf5ebfe384c1ecd4b18d41187d"},{url:"/creatic2/js/about.c6da6a8f.js",revision:null},{url:"/creatic2/js/app.44fac3dc.js",revision:null},{url:"/creatic2/js/chunk-vendors.4ac3225a.js",revision:null},{url:"/creatic2/manifest.json",revision:"531b46f30b874927ddddb023038ad787"},{url:"/creatic2/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
