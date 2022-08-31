import{d as b,k as a,o as i,c as _,n,a as s,_ as g,w as D,l as w,b as C,x as S,f as m,e as B,s as E,p as L,u as N,g as O,A as z,B as K}from"./index.ca0e9a48.js";import{A as Q}from"./AsyncComponent.1cc56c2f.js";import{t as T,a as k,s as x,b as h}from"./budgets.8c854936.js";import{_ as R}from"./Currency.vue_vue_type_script_setup_true_lang.6ff92a4c.js";import{I as U}from"./Icon.ca8fed3f.js";import{L as j}from"./Link.fd212269.js";import{u as q,i as F,a as G,b as H,_ as J}from"./installSVGRenderer.1adc4262.js";import"./useThemeStyles.51a1b7f2.js";import"./useResizeObserver.8a3ca939.js";const W=b({__name:"SummaryPanelChart",props:{class:null,color:null,values:null},setup(t){const e=t;q([F,G,H]);const c=a(()=>e.class),u=a(()=>({xAxis:{type:"category",show:!1},yAxis:{type:"value",show:!1,min:Math.min(...e.values)},grid:{top:"5%",left:"5%",bottom:"5%",right:"5%"},series:[{data:e.values,type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:5,cap:"round",color:e.color}}]}));return(r,d)=>(i(),_(J,{class:n([r.$style.summaryPanelChart,s(c)]),options:s(u)},null,8,["class","options"]))}}),X="Ua",Y={summaryPanelChart:X},Z={$style:Y},ss=g(W,[["__cssModules",Z]]),es=b({__name:"SummaryPanel",props:{class:null,title:null,subTitle:null,to:null,color:null,values:null},setup(t){const e=t;L(l=>({"0d9627ea":s(d),72555020:s(v),b850672a:s(r)}));const c=a(()=>e.class),u=a(()=>Array.isArray(e.values)?e.values[e.values.length-1]:e.values),r=a(()=>`var(${e.color}-shadow)`),d=a(()=>`var(${e.color}-light)`),v=a(()=>`var(${e.color}-light-dimmed)`),y=a(()=>e.to?j:"div");return(l,f)=>(i(),_(E(s(y)),{to:t.to,class:n([l.$style.summaryPanel,s(c)])},{default:D(()=>[t.to?(i(),_(U,{key:0,class:n(l.$style.editIcon),icon:"pencil-fill"},null,8,["class"])):w("",!0),C("div",{class:n(l.$style.header)},[C("h2",{class:n(l.$style.head)},S(t.title),3),C("span",{class:n(l.$style.title)},[m(R,{value:s(u)},null,8,["value"])],2),t.subTitle?(i(),B("span",{key:0,class:n(l.$style.subTitle)},S(t.subTitle),3)):w("",!0)],2),Array.isArray(t.values)?(i(),_(ss,{key:1,class:n(l.$style.chart),color:s(v),values:t.values},null,8,["class","color","values"])):w("",!0)]),_:1},8,["to","class"]))}}),as="ta",ts="ua",ls="va",ns="wa",os="xa",cs="ya",rs="za",us={summaryPanel:as,editIcon:ts,header:ls,head:ns,title:os,subTitle:cs,chart:rs},is={$style:us},$=g(es,[["__cssModules",is]]),ms=b({__name:"SummaryPanels",props:{class:null},setup(t){const e=t,c=a(()=>e.class),{state:u}=O(),{t:r,n:d}=N(),v=a(()=>T(u.income)),y=a(()=>T(u.expenses)),l=a(()=>k(v.value)),f=a(()=>k(y.value)),p=a(()=>x(l.value,f.value)),I=a(()=>h(p.value)),M=a(()=>{const o=h(y.value),P=h(v.value);return P?o/P:0}),A=a(()=>{const o=new Date().getMonth()+1;return h(x(v.value.slice(o),y.value.slice(o)))}),V=a(()=>{const o=p.value[p.value.length-1];return o?A.value/o:0});return(o,P)=>(i(),B("div",{class:n([o.$style.summaryPanels,s(c)])},[m($,{values:s(l),color:"--c-success",to:"/income",title:s(r)("dashboard.income")},null,8,["values","title"]),m($,{"sub-title":s(d)(s(M),"percent"),to:"/expenses",values:s(f),color:"--c-warning",title:s(r)("dashboard.expenses")},null,8,["sub-title","values","title"]),m($,{"sub-title":s(d)(s(I)?1-s(M):0,"percent"),values:s(p),color:"--c-primary",title:s(r)("dashboard.endingBalance")},null,8,["sub-title","values","title"]),m($,{"sub-title":s(d)(s(V),"percent"),values:s(A),color:"--c-secondary",title:s(r)("dashboard.remainingBalance")},null,8,["sub-title","values","title"])],2))}}),ds="K",vs={summaryPanels:ds},ys={$style:vs},ps=g(ms,[["__cssModules",ys]]),hs=b({__name:"Overview",setup(t){const e=K();return(c,u)=>(i(),B("div",{class:n(c.$style.overview)},[m(ps),m(Q,{show:s(e)!=="mobile",class:n(c.$style.chart),import:()=>z(()=>import("./DistributionChart.47cae1a3.js"),["assets/DistributionChart.47cae1a3.js","assets/DistributionChart.bb1edb54.css","assets/ChartPlaceholder.25c645f1.js","assets/ChartPlaceholder.26d9f628.css","assets/Icon.ca8fed3f.js","assets/Icon.988fd225.css","assets/index.ca0e9a48.js","assets/index.2a424cbd.css","assets/installSVGRenderer.1adc4262.js","assets/useResizeObserver.8a3ca939.js","assets/budgets.8c854936.js"])},null,8,["show","class","import"])],2))}}),$s="g",_s="h",bs={overview:$s,chart:_s},gs={$style:bs},ks=g(hs,[["__cssModules",gs]]);export{ks as default};