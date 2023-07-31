import{d as g,u as x,c as k,o as u,a as h,b as d,t as b,n as r,F as C,r as W,_ as w,e as Y,f as D,g as I,h as M,i as R,j as V,k as n,w as c,l as t}from"./index-635eac34.js";import{B as _}from"./Button-1ed056c9.js";import{L as $}from"./Link-b21ad2f6.js";import{A as L}from"./AnimatedRouterView-43191cc5.js";import{P as O}from"./Pane-ff6685ec.js";import"./Icon-f54aec6a.js";import"./useThemeStyles-349ce8f2.js";import"./Currency-532cc709.js";const S=g({__name:"TextWheel",props:{values:{},value:{}},setup(v){const l=v;x(e=>({"47c68fd3":o.value}));const o=k(()=>l.values.indexOf(l.value));return(e,p)=>(u(),h("span",{class:r(e.$style.container)},[d("span",{class:r(e.$style.placeholder)},b(e.value),3),d("span",{class:r(e.$style.textWheel)},[(u(!0),h(C,null,W(e.values,i=>(u(),h("span",{key:i,class:r(e.$style.value)},b(i),3))),128))],2)],2))}}),T="k",A="l",F="m",N="n",P={container:T,placeholder:A,textWheel:F,value:N},j={$style:P},z=w(S,[["__cssModules",j]]),E=g({__name:"Dashboard",setup(v){const{t:l}=Y(),{state:o,changeYear:e}=D(),p=I(),i=k(()=>o.years.map(a=>a.year)),f=a=>{const s=i.value,m=(s.indexOf(o.activeYear)+a+s.length)%s.length,B=s[m];e(B)};return(a,s)=>{const y=M("i18n-t");return u(),R(O,{class:r(a.$style.dashboard)},V({title:c(()=>[d("span",null,[t(y,{keypath:"dashboard.header"},{year:c(()=>[t(z,{values:i.value,value:n(o).activeYear},null,8,["values","value"])]),_:1})])]),header:c(()=>[d("div",{class:r(a.$style.viewButtons)},[t($,{tooltip:n(l)("navigation.menu.dashboard"),"tooltip-position":"bottom-end",to:"/dashboard",color:n(p).currentRoute.value.path.endsWith("/dashboard")?"primary":"dimmed",icon:"pi-chart-line"},null,8,["tooltip","color"]),t($,{tooltip:n(l)("dashboard.tableOverview"),"tooltip-position":"bottom-end",to:"/dashboard/summary",color:n(p).currentRoute.value.path.endsWith("/dashboard/summary")?"primary":"dimmed",icon:"grid-line"},null,8,["tooltip","color"])],2)]),default:c(()=>[t(L)]),_:2},[n(o).years.length>1?{name:"beforeTitle",fn:c(()=>[t(_,{icon:"arrow-left-s-line",rounded:"",onClick:s[0]||(s[0]=m=>f(-1))}),t(_,{icon:"arrow-right-s-line",rounded:"",onClick:s[1]||(s[1]=m=>f(1))})]),key:"0"}:void 0]),1032,["class"])}}}),q="f",G="g",H={dashboard:q,viewButtons:G},J={$style:H},oe=w(E,[["__cssModules",J]]);export{oe as default};
