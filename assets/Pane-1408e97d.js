import{C as i}from"./Currency-c0f418d3.js";import{Q as m,d as y,x as u,c as f,o as d,a as p,b as r,n as l,E as n,t as h,F as v,l as $,p as k,_ as P}from"./index-b8f8bbf8.js";const b=(c,o,t,a=5)=>{m(()=>{var e;const s=c.value;s&&s.style.removeProperty("box-shadow"),(e=o.value)==null||e.addEventListener("scroll",()=>{s&&o.value&&(o.value.scrollTop>a?s.style.setProperty("box-shadow",t):s.style.removeProperty("box-shadow"))})})},w={key:1},C=r("span",null," - ",-1),_=y({__name:"Pane",props:{class:{},title:{},amount:{}},setup(c){const o=c,t=u(),a=u(),s=f(()=>o.class);return b(t,a,"var(--app-scroll-box-shadow)"),(e,F)=>(d(),p("div",{class:l(e.$style.pane)},[r("div",{ref_key:"header",ref:t,class:l(e.$style.header)},[r("h1",{class:l(e.$style.title)},[n(e.$slots,"beforeTitle"),e.$slots.title?n(e.$slots,"title",{key:0}):(d(),p("span",w,h(e.title),1)),e.amount?(d(),p(v,{key:2},[C,$(i,{value:e.amount},null,8,["value"])],64)):k("",!0)],2),n(e.$slots,"header")],2),r("div",{ref_key:"content",ref:a,class:l([e.$style.content,s.value])},[n(e.$slots,"default")],2)],2))}}),M="M",N="N",S="O",B="P",E={pane:M,header:N,title:S,content:B},V={$style:E},D=P(_,[["__cssModules",V]]);export{D as P};