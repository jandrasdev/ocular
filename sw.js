if(!self.define){let s,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>n(s,r),o={module:{uri:r},exports:a,require:u};e[r]=Promise.all(l.map((s=>o[s]||u(s)))).then((s=>(i(...s),a)))}}define(["./workbox-b3e22772"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AnimatedRouterView.4611d1d8.js",revision:null},{url:"assets/AnimatedRouterView.6cd1f563.css",revision:null},{url:"assets/AsyncComponent.475af74a.css",revision:null},{url:"assets/AsyncComponent.54375fbf.js",revision:null},{url:"assets/BudgetPane.04ab5306.css",revision:null},{url:"assets/BudgetPane.b9a9a53c.js",revision:null},{url:"assets/budgets.8c854936.js",revision:null},{url:"assets/Button.1f78b67a.css",revision:null},{url:"assets/Button.a33f3f49.js",revision:null},{url:"assets/ChartPlaceholder.0bfec122.css",revision:null},{url:"assets/ChartPlaceholder.51f5f735.js",revision:null},{url:"assets/Currency.446f315f.js",revision:null},{url:"assets/Dashboard.4838e610.css",revision:null},{url:"assets/Dashboard.c040fd9c.js",revision:null},{url:"assets/DevelopmentChart.088a2bbb.css",revision:null},{url:"assets/DevelopmentChart.7a2c5cd7.js",revision:null},{url:"assets/DistributionChart.5f76cc7f.css",revision:null},{url:"assets/DistributionChart.d89ca2ea.js",revision:null},{url:"assets/Expenses.42403ef9.js",revision:null},{url:"assets/Frame.00fd0c94.css",revision:null},{url:"assets/Frame.dc22d9fb.js",revision:null},{url:"assets/Icon.ccfc92d6.js",revision:null},{url:"assets/Icon.d4fda347.css",revision:null},{url:"assets/Income.8d17d770.js",revision:null},{url:"assets/index.323e4281.js",revision:null},{url:"assets/index.43afcb6a.css",revision:null},{url:"assets/installSVGRenderer.29233f6d.js",revision:null},{url:"assets/Link.926ff5dd.js",revision:null},{url:"assets/Link.e19d1776.css",revision:null},{url:"assets/Overview.3fb6f0ef.css",revision:null},{url:"assets/Overview.b583bc56.js",revision:null},{url:"assets/Pane.25a52ddb.css",revision:null},{url:"assets/Pane.99a441d1.js",revision:null},{url:"assets/Summary.a00c98e8.js",revision:null},{url:"assets/Summary.a5520475.css",revision:null},{url:"assets/useMonthNames.401da3b6.js",revision:null},{url:"assets/useResizeObserver.5994cafa.js",revision:null},{url:"assets/useThemeStyles.1ed670f7.js",revision:null},{url:"index.html",revision:"288adf52fc94febe0737da87bde5b4eb"},{url:"images/icon-maskable-192x192.png",revision:"6f7776c00ea4989bfe9f596a862874ae"},{url:"images/icon-maskable-256x256.png",revision:"edc41cd303465aa068a0883e6c80aaec"},{url:"images/icon-maskable-512x512.png",revision:"219d10726cb1fe2ec4d82ee792cc9171"},{url:"images/icon-maskable-1024x1024.png",revision:"8eafbf60e614f60e20368cecacd6b1dd"},{url:"images/icon-192x192.png",revision:"3f1c9737c3ea2218d437239ed852bd8d"},{url:"images/icon-512x512.png",revision:"8377a3bb55077554423bbbf6ef2df394"},{url:"images/icon-1024x1024.png",revision:"e0256998bec2278de5c61376a4aae7e1"},{url:"manifest.webmanifest",revision:"4a814bd4f2ed2afb3d55d1d072a1f2d5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));