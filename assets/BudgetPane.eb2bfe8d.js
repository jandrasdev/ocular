import{u as K,i as j,a as q,b as x,_ as H}from"./installSVGRenderer.e40d1b43.js";import{d as w,j as b,o as a,c as P,n as r,a as t,t as M,i as R,u as z,D as L,e as p,G as S,H as T,_ as G,b as l,f as _,F as B,r as k,v as A,k as X,z as D,w as U}from"./index.820b6770.js";import{b as J,c as O,t as Q}from"./budgets.8c854936.js";import{P as W}from"./Pane.22e45a0b.js";import{B as V}from"./Button.371fa6dc.js";import{_ as I}from"./Currency.vue_vue_type_script_setup_true_lang.b3ab1566.js";import{u as Y}from"./useMonthNames.84d2c4c4.js";const Z=w({__name:"MiniChart",props:{class:null,values:null},setup(o){const m=o;K([j,q,x]);const i=b(()=>m.class),c=b(()=>({xAxis:{type:"category",show:!1},yAxis:{show:!1,min:Math.min(...m.values)},grid:{top:"15%",left:0,bottom:"20%",right:0},series:[{data:m.values,type:"line",smooth:!0,showSymbol:!1}]}));return($,d)=>(a(),P(H,{class:r(t(i)),options:t(c)},null,8,["class","options"]))}}),ll=["type","value"],sl=w({__name:"CurrencyCell",props:{modelValue:null,max:{default:Number.MAX_SAFE_INTEGER}},emits:["update:modelValue"],setup(o,{emit:m}){const i=o,c=M(),$=R(),d=M(!1),{n:f}=z(),h=b(()=>[$.currencyCell,{[$.empty]:!i.modelValue}]),g=b(()=>{const n=i.modelValue;return d.value||!n?n||"":f(i.modelValue,"currency")}),C=n=>{m("update:modelValue",Math.max(n,0))},e=n=>{n.key==="-"&&n.preventDefault()},u=()=>{d.value=!0,T(()=>{c.value.select()})},s=n=>{const y=Number(n.target.value);!Number.isNaN(y)&&C(y)};return L(()=>i.modelValue,(n,y)=>{(n!=null?n:0)>i.max&&y!==void 0&&m("update:modelValue",y)}),(n,y)=>(a(),p("input",{ref_key:"input",ref:c,class:r(t(h)),type:d.value?"number":"text",value:t(g),onBlur:y[0]||(y[0]=v=>d.value=!1),onFocus:u,onInput:s,onKeydown:[e,y[1]||(y[1]=S((...v)=>{var N,F;return((N=c.value)==null?void 0:N.blur)&&((F=c.value)==null?void 0:F.blur(...v))},["enter"]))]},null,42,ll))}}),el="_5j _5k _5l",nl={currencyCell:el},tl={$style:nl},ol=G(sl,[["__cssModules",tl]]),ul=["value"],al=w({__name:"TextCell",props:{modelValue:null,inline:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(o,{emit:m}){const i=o,c=M(),$=R(),d=M(!1),f=b(()=>[$.textInput,{[$.empty]:!i.modelValue,[$.inline]:i.inline}]),h=()=>{d.value=!0,T(()=>{c.value.select()})},g=C=>{m("update:modelValue",C.target.value)};return(C,e)=>(a(),p("span",{class:r(t(f))},[l("input",{ref_key:"input",ref:c,value:o.modelValue,type:"text",onBlur:e[0]||(e[0]=u=>d.value=!1),onFocus:h,onInput:g,onKeydown:e[1]||(e[1]=S((...u)=>{var s,n;return((s=c.value)==null?void 0:s.blur)&&((n=c.value)==null?void 0:n.blur(...u))},["enter"]))},null,40,ul)],2))}}),cl="_5m _5n _5o _5q _5s _5v _5x _5z _61",rl="_5p _5r _5t _5w _5y _60 _62",dl="_5u",pl={textInput:cl,inline:rl,empty:dl},il={$style:pl},E=G(al,[["__cssModules",il]]),_l=l("span",null,null,-1),ml=l("span",null,null,-1),yl=l("span",null,null,-1),$l=l("span",null,null,-1),vl=l("span",null,null,-1),fl=l("span",null,null,-1),hl=l("span",null,null,-1),gl=l("span",null,null,-1),Bl=l("span",null,null,-1),Cl=l("span",null,null,-1),bl=l("span",null,null,-1),kl=l("span",null,null,-1),wl=l("span",null,null,-1),Vl=l("span",null,null,-1),Ml=l("span",null,null,-1),Gl=l("span",null,null,-1),Nl=l("span",null,null,-1),Il=w({__name:"BudgetGroup",props:{group:null},setup(o){const m=o,{addBudget:i,setBudgetName:c,setBudgetGroupName:$,setBudget:d,removeBudget:f}=D(),{t:h}=z(),g=M(!0),C=b(()=>{const e=new Array(12).fill(0);for(const{values:u}of m.group.budgets)for(let s=0;s<u.length;s++)e[s]+=u[s];return e});return(e,u)=>(a(),p(B,null,[_(V,{icon:g.value?"arrow-down-s-line":"arrow-right-s-line",color:"dimmed",textual:"",onClick:u[0]||(u[0]=s=>g.value=!g.value)},null,8,["icon"]),_(E,{class:r([e.$style.top,e.$style.start]),"model-value":o.group.name,inline:"","onUpdate:modelValue":u[1]||(u[1]=s=>t($)(o.group.id,s))},null,8,["class","model-value"]),(a(!0),p(B,null,k(t(C),(s,n)=>(a(),p("span",{key:n,class:r(e.$style.top)},[l("span",null,[_(I,{value:s},null,8,["value"])])],2))),128)),l("span",{class:r(e.$style.top)},[l("span",null,A(t(h)("budget.total")),1)],2),l("span",{class:r([e.$style.top,e.$style.end])},[l("span",null,A(t(h)("budget.average")),1)],2),g.value?(a(),p(B,{key:0},[(a(!0),p(B,null,k(o.group.budgets,(s,n)=>(a(),p(B,{key:s.id+n},[_l,_(V,{color:"dimmed",icon:"close-circle",textual:"",onClick:y=>t(f)(s.id)},null,8,["onClick"]),l("span",{class:r(e.$style.header)},[_(E,{"model-value":s.name,"onUpdate:modelValue":y=>t(c)(s.id,y)},null,8,["model-value","onUpdate:modelValue"])],2),(a(!0),p(B,null,k(s.values,(y,v)=>(a(),p("span",{class:r([e.$style.currencyCell,{[e.$style.even]:n%2,[e.$style.firstRow]:n===0,[e.$style.firstColumn]:v===0,[e.$style.tlc]:n===0&&v===0,[e.$style.trc]:n===0&&v===11,[e.$style.blc]:n===o.group.budgets.length-1&&v===0,[e.$style.brc]:n===o.group.budgets.length-1&&v===11}]),key:s.id+v},[_(ol,{"model-value":s.values[v],"onUpdate:modelValue":N=>t(d)(s.id,v,N)},null,8,["model-value","onUpdate:modelValue"])],2))),128)),l("span",{class:r(e.$style.meta)},[_(I,{value:t(J)(s.values)},null,8,["value"])],2),l("span",{class:r(e.$style.meta)},[_(I,{value:t(O)(s.values)},null,8,["value"])],2)],64))),128)),ml,yl,_(V,{class:r(e.$style.addBudgetBtn),textual:"",text:t(h)("budget.addBudget"),onClick:u[2]||(u[2]=s=>t(i)(o.group.id))},null,8,["class","text"]),$l,vl,fl,hl,gl,Bl,Cl,bl,kl,wl,Vl,Ml,Gl,Nl],64)):X("",!0)],64))}}),Al="_4q",zl="_4r",Dl="_4s _4t _4u _4w",Fl="_4v",Ul="_4x",El="_4y _4z _50 _52 _54 _56 _58 _5a _5c _5e",Pl="_51",Rl="_53",Sl="_55 _57",Tl="_59",Kl="_5b",jl="_5d",ql="_5f",xl="_5g",Hl={header:Al,meta:zl,top:Dl,start:Fl,end:Ul,currencyCell:El,firstRow:Pl,firstColumn:Rl,even:Sl,tlc:Tl,trc:Kl,blc:jl,brc:ql,addBudgetBtn:xl},Ll={$style:Hl},Xl=G(Il,[["__cssModules",Ll]]),Jl=l("span",null,null,-1),Ol=l("span",null,null,-1),Ql=l("span",null,null,-1),Wl=l("span",null,null,-1),Yl=l("span",null,null,-1),Zl=l("span",null,null,-1),ls=l("span",null,null,-1),ss=l("span",null,null,-1),es=l("span",null,null,-1),ns=l("span",null,null,-1),ts=l("span",null,null,-1),os=l("span",null,null,-1),us=l("span",null,null,-1),as=l("span",null,null,-1),cs=l("span",null,null,-1),rs=l("span",null,null,-1),ds=l("span",null,null,-1),ps=l("span",null,null,-1),is=l("span",null,null,-1),_s=l("span",null,null,-1),ms=l("span",null,null,-1),ys=l("span",null,null,-1),$s=l("span",null,null,-1),vs=l("span",null,null,-1),fs=l("span",null,null,-1),hs=w({__name:"BudgetGroups",props:{type:null},setup(o){const m=o,{state:i,addBudgetGroup:c,removeBudgetGroup:$}=D(),{t:d}=z(),f=new Date().getMonth(),h=b(()=>i[m.type]),g=Y(),C=b(()=>{const e=new Array(12).fill(0);for(const{budgets:u}of h.value)for(const{values:s}of u)for(let n=0;n<s.length;n++)e[n]+=s[n];return e});return(e,u)=>(a(),p("div",{class:r(e.$style.budgetGroups)},[Jl,Ol,Ql,(a(!0),p(B,null,k(t(g),(s,n)=>(a(),p("span",{key:s,class:r([e.$style.month,{[e.$style.current]:n===t(f)}])},[l("span",null,A(s),1)],2))),128)),Wl,Yl,Zl,ls,l("span",{class:r(e.$style.sum)},A(t(d)("budget.totals")),3),(a(!0),p(B,null,k(t(C),(s,n)=>(a(),p("span",{key:n,class:r(e.$style.sum)},[_(I,{value:s},null,8,["value"])],2))),128)),ss,es,(a(!0),p(B,null,k(t(h),s=>(a(),p(B,{key:s.id},[_(V,{color:"dimmed",icon:"close-circle",textual:"",onClick:n=>t($)(s.id)},null,8,["onClick"]),_(Xl,{group:s},null,8,["group"])],64))),128)),ns,ts,_(V,{class:r(e.$style.addGroupBtn),icon:"plus",text:t(d)("budget.addGroup"),onClick:u[0]||(u[0]=s=>t(c)(o.type))},null,8,["class","text"]),os,us,as,cs,rs,ds,ps,is,_s,ms,ys,$s,vs,fs],2))}}),gs="_30",Bs="_31",Cs="_32 _33 _35 _36",bs="_34",ks="_37",ws={budgetGroups:gs,sum:Bs,month:Cs,current:bs,addGroupBtn:ks},Vs={$style:ws},Ms=G(hs,[["__cssModules",Vs]]),Gs=w({__name:"BudgetPane",props:{title:null,type:null},setup(o){const m=o,{state:i}=D(),c=b(()=>Q(i[m.type])),$=c.value.reduce((d,f)=>d+f,0);return(d,f)=>(a(),P(W,{amount:t($),title:o.title},{header:U(()=>[_(Z,{class:r(d.$style.miniChart),values:t(c)},null,8,["class","values"])]),default:U(()=>[_(Ms,{type:o.type},null,8,["type"])]),_:1},8,["amount","title"]))}}),Ns="z",Is={miniChart:Ns},As={$style:Is},Ss=G(Gs,[["__cssModules",As]]);export{Ss as B};
