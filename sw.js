if(!self.define){let s,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>n(s,r),t={module:{uri:r},exports:a,require:u};e[r]=Promise.all(l.map((s=>t[s]||u(s)))).then((s=>(i(...s),a)))}}define(["./workbox-b3e22772"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AnimatedRouterView.2f094d31.css",revision:null},{url:"assets/AnimatedRouterView.e5a1cdf5.js",revision:null},{url:"assets/AsyncComponent.3b0a880b.css",revision:null},{url:"assets/AsyncComponent.ae201cf8.js",revision:null},{url:"assets/BudgetPane.3fbdef26.css",revision:null},{url:"assets/BudgetPane.f7b53d00.js",revision:null},{url:"assets/budgets.8c854936.js",revision:null},{url:"assets/Button.560273df.css",revision:null},{url:"assets/Button.9a7ee7a9.js",revision:null},{url:"assets/ChartPlaceholder.75f7fbcf.css",revision:null},{url:"assets/ChartPlaceholder.b07a64a3.js",revision:null},{url:"assets/Currency.vue_vue_type_script_setup_true_lang.8f1ccace.js",revision:null},{url:"assets/Dashboard.42c89af7.js",revision:null},{url:"assets/Dashboard.45cca764.css",revision:null},{url:"assets/DevelopmentChart.9027881f.js",revision:null},{url:"assets/DevelopmentChart.b8e4c158.css",revision:null},{url:"assets/DistributionChart.83182264.css",revision:null},{url:"assets/DistributionChart.f24d85ae.js",revision:null},{url:"assets/Expenses.9e397278.js",revision:null},{url:"assets/Frame.67f8e871.css",revision:null},{url:"assets/Frame.ea5fb3e3.js",revision:null},{url:"assets/Icon.0306f63c.js",revision:null},{url:"assets/Icon.ada9874b.css",revision:null},{url:"assets/Income.2da6e552.js",revision:null},{url:"assets/index.4fceed64.css",revision:null},{url:"assets/index.95bc1d2e.js",revision:null},{url:"assets/installSVGRenderer.6cdce41a.js",revision:null},{url:"assets/Link.c58aaec4.js",revision:null},{url:"assets/Link.fc4def73.css",revision:null},{url:"assets/Overview.1eccd876.css",revision:null},{url:"assets/Overview.494af108.js",revision:null},{url:"assets/Pane.41aa4036.css",revision:null},{url:"assets/Pane.5d42dfa7.js",revision:null},{url:"assets/Summary.984ecf09.js",revision:null},{url:"assets/Summary.d8c21805.css",revision:null},{url:"assets/useMonthNames.1bfa3dd1.js",revision:null},{url:"assets/useResizeObserver.b4c3a0bc.js",revision:null},{url:"assets/useThemeStyles.5d038b1b.js",revision:null},{url:"index.html",revision:"0d8ef95225741cd75f120a46fa4cbe28"},{url:"images/icon-maskable-192x192.png",revision:"6f7776c00ea4989bfe9f596a862874ae"},{url:"images/icon-maskable-256x256.png",revision:"edc41cd303465aa068a0883e6c80aaec"},{url:"images/icon-maskable-512x512.png",revision:"219d10726cb1fe2ec4d82ee792cc9171"},{url:"images/icon-maskable-1024x1024.png",revision:"8eafbf60e614f60e20368cecacd6b1dd"},{url:"images/icon-192x192.png",revision:"3f1c9737c3ea2218d437239ed852bd8d"},{url:"images/icon-512x512.png",revision:"8377a3bb55077554423bbbf6ef2df394"},{url:"images/icon-1024x1024.png",revision:"e0256998bec2278de5c61376a4aae7e1"},{url:"manifest.webmanifest",revision:"4a814bd4f2ed2afb3d55d1d072a1f2d5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
