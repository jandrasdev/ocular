import{d as P,c as a,o as r,i as C,n as l,_ as w,u as Y,m as x,a as d,w as N,p as B,b as T,l as u,t as k,F as O,q,s as G,f as H,e as K,v as Q,x as R,y as j,z as D,A as V,B as f,k as t,C as J,D as U}from"./index-b8f8bbf8.js";import{A as W}from"./AsyncComponent-ad2bdf4a.js";import{t as L}from"./budgets-531db56b.js";import{C as X}from"./Currency-c0f418d3.js";import{I as z}from"./Icon-9ecb4fa7.js";import{L as Z}from"./Link-34ba7465.js";import{u as ee,i as se,a as ae,b as te,_ as le}from"./EChart.vue_vue_type_script_setup_true_lang-c8e18314.js";import"./useThemeStyles-bdb7ff5f.js";import"./useResizeObserver-ea7ce5d0.js";const oe=P({__name:"SummaryPanelChart",props:{class:{},color:{},values:{}},setup(v){const s=v;ee([se,ae,te]);const o=a(()=>s.class),n=a(()=>({animation:!1,xAxis:{type:"category",show:!1},yAxis:{type:"value",show:!1,min:Math.min(...s.values)},grid:{top:"5%",left:"5%",bottom:"5%",right:"5%"},series:[{data:s.values,type:"line",smooth:!0,showSymbol:!1,lineStyle:{width:5,cap:"round",color:s.color}}]}));return(i,m)=>(r(),C(le,{class:l([i.$style.summaryPanelChart,o.value]),options:n.value},null,8,["class","options"]))}}),ne="L_",re={summaryPanelChart:ne},ce={$style:re},ue=w(oe,[["__cssModules",ce]]),ie=P({__name:"SummaryPanel",props:{class:{},title:{},subTitle:{},to:{},alt:{},color:{},values:{}},setup(v){const s=v;Y(e=>({"0b68ca22":_.value,"7e5a6dd0":h.value,"630b55cb":$.value,57562074:m.value}));const o=a(()=>s.class),n=x(.25),i=a(()=>Array.isArray(s.values)?s.values[s.values.length-1]:s.values),m=a(()=>`var(--c-${s.color}-shadow)`),h=a(()=>`var(--c-${s.color}-text-accent)`),_=a(()=>`var(--c-${s.color}-light)`),$=a(()=>`var(--c-${s.color}-light-dimmed)`),y=a(()=>s.to?Z:"div");return(e,A)=>(r(),d("div",{ref_key:"root",ref:n,style:G(e.$style.wrapper)},[(r(),C(q(y.value),{to:e.to,class:l([e.$style.summaryPanel,o.value])},{default:N(()=>[e.to?(r(),C(z,{key:0,class:l(e.$style.editIcon),icon:"pencil-fill"},null,8,["class"])):B("",!0),T("div",{class:l(e.$style.header)},[e.alt?(r(),d("div",{key:0,class:l(e.$style.placeholder)},[u(z,{class:l(e.$style.icon),icon:"calendar-2-line"},null,8,["class"]),T("span",{class:l(e.$style.text)},k(e.alt),3)],2)):(r(),d(O,{key:1},[T("h2",{class:l(e.$style.head)},k(e.title),3),u(X,{class:l(e.$style.title),value:i.value},null,8,["class","value"]),e.subTitle?(r(),d("span",{key:0,class:l(e.$style.subTitle)},k(e.subTitle),3)):B("",!0)],64))],2),Array.isArray(e.values)?(r(),C(ue,{key:1,class:l(e.$style.chart),color:$.value,values:e.values},null,8,["class","color","values"])):B("",!0)]),_:1},8,["to","class"]))],4))}}),me="x_",ve="y_",de="z_",ye="A_",pe="B_",he="C_",_e="D_",$e="E_",be="F_",fe="G_",ge="H_",Ce={wrapper:me,summaryPanel:ve,editIcon:de,header:ye,head:pe,title:he,subTitle:_e,placeholder:$e,icon:be,text:fe,chart:ge},Pe={$style:Ce},g=w(ie,[["__cssModules",Pe]]),we=P({__name:"SummaryPanels",props:{class:{}},setup(v){const s=v,{state:o}=H(),{t:n,n:i}=K(),m=Q(),h=R(0),_=j(),$=a(()=>[s.class,_.summaryPanels,{[_.unAnimated]:h.value>=3}]),y=a(()=>L(o.income)),e=a(()=>L(o.expenses)),A=a(()=>D(y.value)),M=a(()=>D(e.value)),b=a(()=>V(A.value,M.value)),E=a(()=>f(b.value)),S=a(()=>{const c=f(e.value),p=f(y.value);return p?c/p:0}),I=a(()=>{const c=m.year.value===o.activeYear?m.month.value+1:0;return f(V(y.value.slice(c),e.value.slice(c)))}),F=a(()=>{const c=b.value[b.value.length-1];return c?I.value/c:0});return(c,p)=>(r(),d("div",{class:l($.value),onAnimationend:p[0]||(p[0]=ze=>h.value++)},[u(g,{values:A.value,color:"success",to:"/income",title:t(n)("dashboard.income")},null,8,["values","title"]),u(g,{"sub-title":t(i)(S.value,"percent"),to:"/expenses",values:M.value,color:"warning",title:t(n)("dashboard.expenses")},null,8,["sub-title","values","title"]),u(g,{"sub-title":t(i)(E.value?1-S.value:0,"percent"),values:b.value,color:"primary",title:t(n)("dashboard.endingBalance")},null,8,["sub-title","values","title"]),u(g,{"sub-title":t(i)(F.value,"percent"),alt:t(o).activeYear<t(m).year.value?t(n)("dashboard.yearInThePast"):t(o).activeYear>t(m).year.value?t(n)("dashboard.yearInTheFuture"):void 0,values:I.value,color:"secondary",title:t(n)("dashboard.remainingBalance",{year:t(o).activeYear+1})},null,8,["sub-title","alt","values","title"])],34))}}),Ae="K",Be="L",Te={summaryPanels:Ae,unAnimated:Be},ke={$style:Te},Me=w(we,[["__cssModules",ke]]),Se=P({__name:"Overview",setup(v){const s=U();return(o,n)=>(r(),d("div",{class:l(o.$style.overview)},[u(Me),u(W,{show:t(s)!=="mobile",class:l(o.$style.chart),import:()=>J(()=>import("./DistributionChart-aad56f4f.js"),["assets/DistributionChart-aad56f4f.js","assets/index-b8f8bbf8.js","assets/index-151d4ee2.css","assets/ChartPlaceholder-38e9a432.js","assets/Icon-9ecb4fa7.js","assets/Icon-8c5647a6.css","assets/ChartPlaceholder-c048134d.css","assets/EChart.vue_vue_type_script_setup_true_lang-c8e18314.js","assets/useResizeObserver-ea7ce5d0.js","assets/budgets-531db56b.js","assets/DistributionChart-89d3bf59.css"])},null,8,["show","class","import"])],2))}}),Ie="f",De="g",Ve={overview:Ie,chart:De},Le={$style:Ve},Ke=w(Se,[["__cssModules",Le]]);export{Ke as default};