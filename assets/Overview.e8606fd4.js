import{_ as b,d as f,c as a,o as i,a as $,n,b as s,v as D,q as E,B as w,k as C,A,m,j as B,G as L,e as N,f as O,O as j,P as z}from"./index.d98df37c.js";import{A as q}from"./AsyncComponent.078a0223.js";import{t as T,a as x,s as I,b as _}from"./budgets.8c854936.js";import{_ as G}from"./Currency.a5d32bc9.js";import{I as Q}from"./Icon.54dfe825.js";import{L as R}from"./Link.143c66a3.js";import{u as F,i as H,a as J,b as K,_ as U}from"./installSVGRenderer.7297338d.js";import"./useThemeStyles.9440b9bd.js";import"./useResizeObserver.6dc4f789.js";const W="_4l";var X={summaryPanelChart:W};const Y=f({props:{class:null,color:null,values:null},setup(t){const e=t;F([H,J,K]);const c=a(()=>e.class),u=a(()=>({xAxis:{type:"category",show:!1},yAxis:{type:"value",show:!1,min:Math.min(...e.values)},grid:{top:"5%",left:"5%",bottom:"5%",right:"5%"},series:[{data:e.values,type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:5,cap:"round",color:e.color}}]}));return(r,v)=>(i(),$(U,{class:n([r.$style.summaryPanelChart,s(c)]),options:s(u)},null,8,["class","options"]))}}),Z={$style:X};var ss=b(Y,[["__cssModules",Z]]);const es="_37 _38 _3a _3k",as="_39 _3b",ts="_3c _3d _3f _3h _3l",ls="_3e",ns="_3g _3m",os="_3i",cs="_3j _3n";var rs={summaryPanel:es,editIcon:as,header:ts,head:ls,title:ns,subTitle:os,chart:cs};const us=f({props:{class:null,title:null,subTitle:null,to:null,color:null,values:null},setup(t){const e=t;D(l=>({f4e53d9a:s(v),"05e095f2":s(d),"6b024d02":s(r)}));const c=a(()=>e.class),u=a(()=>Array.isArray(e.values)?e.values[e.values.length-1]:e.values),r=a(()=>`var(${e.color}-shadow)`),v=a(()=>`var(${e.color}-light)`),d=a(()=>`var(${e.color}-light-dimmed)`),y=a(()=>e.to?R:"div");return(l,g)=>(i(),$(L(s(y)),{to:t.to,class:n([l.$style.summaryPanel,s(c)])},{default:E(()=>[t.to?(i(),$(Q,{key:0,class:n(l.$style.editIcon),icon:"pencil-fill"},null,8,["class"])):w("",!0),C("div",{class:n(l.$style.header)},[C("h2",{class:n(l.$style.head)},A(t.title),3),C("span",{class:n(l.$style.title)},[m(G,{value:s(u)},null,8,["value"])],2),t.subTitle?(i(),B("span",{key:0,class:n(l.$style.subTitle)},A(t.subTitle),3)):w("",!0)],2),Array.isArray(t.values)?(i(),$(ss,{key:1,class:n(l.$style.chart),color:s(d),values:t.values},null,8,["class","color","values"])):w("",!0)]),_:1},8,["to","class"]))}}),is={$style:rs};var h=b(us,[["__cssModules",is]]);const ms="_2t _2u _2v _2w _2x _2y _2z";var vs={summaryPanels:ms};const ds=f({props:{class:null},setup(t){const e=t,c=a(()=>e.class),{state:u}=N(),{t:r,n:v}=O(),d=a(()=>T(u.income)),y=a(()=>T(u.expenses)),l=a(()=>x(d.value)),g=a(()=>x(y.value)),p=a(()=>I(l.value,g.value)),S=a(()=>_(p.value)),M=a(()=>{const o=_(y.value),P=_(d.value);return P?o/P:0}),k=a(()=>{const o=new Date().getMonth()+1;return _(I(d.value.slice(o),y.value.slice(o)))}),V=a(()=>{const o=p.value[p.value.length-1];return o?k.value/o:0});return(o,P)=>(i(),B("div",{class:n([o.$style.summaryPanels,s(c)])},[m(h,{values:s(l),color:"--c-success",to:"/income",title:s(r)("dashboard.income")},null,8,["values","title"]),m(h,{"sub-title":s(v)(s(M),"percent"),to:"/expenses",values:s(g),color:"--c-warning",title:s(r)("dashboard.expenses")},null,8,["sub-title","values","title"]),m(h,{"sub-title":s(v)(s(S)?1-s(M):0,"percent"),values:s(p),color:"--c-primary",title:s(r)("dashboard.endingBalance")},null,8,["sub-title","values","title"]),m(h,{"sub-title":s(v)(s(V),"percent"),values:s(k),color:"--c-secondary",title:s(r)("dashboard.remainingBalance")},null,8,["sub-title","values","title"])],2))}}),ys={$style:vs};var ps=b(ds,[["__cssModules",ys]]);const _s="_8 _9 a",hs="b";var $s={overview:_s,chart:hs};const bs=f({setup(t){const e=z();return(c,u)=>(i(),B("div",{class:n(c.$style.overview)},[m(ps),m(q,{show:s(e)!=="mobile",class:n(c.$style.chart),import:()=>j(()=>import("./DistributionChart.3fdc568e.js"),["assets/DistributionChart.3fdc568e.js","assets/DistributionChart.5f76cc7f.css","assets/ChartPlaceholder.fdcbb58c.js","assets/ChartPlaceholder.0bfec122.css","assets/Icon.54dfe825.js","assets/Icon.d4fda347.css","assets/index.d98df37c.js","assets/index.02489205.css","assets/installSVGRenderer.7297338d.js","assets/useResizeObserver.6dc4f789.js","assets/budgets.8c854936.js"])},null,8,["show","class","import"])],2))}}),fs={$style:$s};var xs=b(bs,[["__cssModules",fs]]);export{xs as default};
