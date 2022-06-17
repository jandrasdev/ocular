import{u as j,i as q,a as z,b as L,_ as Q}from"./installSVGRenderer.bcf0b575.js";import{d as V,c as b,o as a,a as S,n as r,b as n,_ as G,r as M,g as K,f as F,w as X,j as p,Q as P,R as T,k as l,e as R,m as _,F as B,L as k,A as I,B as x,q as D}from"./index.7e9efac6.js";import{b as H,c as J,t as O}from"./budgets.8c854936.js";import{P as W}from"./Pane.1434786d.js";import{B as w}from"./Button.2f674a78.js";import{_ as A}from"./Currency.e7023973.js";import{u as Y}from"./useMonthNames.e1b7fc31.js";const Z=V({props:{class:null,values:null},setup(o){const m=o;j([q,z,L]);const i=b(()=>m.class),c=b(()=>({xAxis:{type:"category",show:!1},yAxis:{show:!1,min:Math.min(...m.values)},grid:{top:"15%",left:0,bottom:"20%",right:0},series:[{data:m.values,type:"line",smooth:!0,showSymbol:!1}]}));return(v,d)=>(a(),S(Q,{class:r(n(i)),options:n(c)},null,8,["class","options"]))}}),ll="_63 _64 _65";var sl={currencyCell:ll};const el=["type","value"],tl=V({props:{modelValue:null,max:{default:Number.MAX_SAFE_INTEGER}},emits:["update:modelValue"],setup(o,{emit:m}){const i=o,c=M(),v=K(),d=M(!1),{n:f}=F(),h=b(()=>[v.currencyCell,{[v.empty]:!i.modelValue}]),g=b(()=>{const t=i.modelValue;return d.value||!t?t||"":f(i.modelValue,"currency")}),C=t=>{m("update:modelValue",Math.max(t,0))},e=t=>{t.key==="-"&&t.preventDefault()},u=()=>{d.value=!0,T(()=>{c.value.select()})},s=t=>{const y=Number(t.target.value);!Number.isNaN(y)&&C(y)};return X(()=>i.modelValue,(t,y)=>{(t!=null?t:0)>i.max&&y!==void 0&&m("update:modelValue",y)}),(t,y)=>(a(),p("input",{ref_key:"input",ref:c,class:r(n(h)),type:d.value?"number":"text",value:n(g),onBlur:y[0]||(y[0]=$=>d.value=!1),onFocus:u,onInput:s,onKeydown:[e,y[1]||(y[1]=P((...$)=>{var N,U;return((N=c.value)==null?void 0:N.blur)&&((U=c.value)==null?void 0:U.blur(...$))},["enter"]))]},null,42,el))}}),nl={$style:sl};var ol=G(tl,[["__cssModules",nl]]);const ul="_66 _67 _68 _6a _6c _6f _6h _6j _6l",al="_69 _6b _6d _6g _6i _6k _6m",cl="_6e";var rl={textInput:ul,inline:al,empty:cl};const dl=["value"],pl=V({props:{modelValue:null,inline:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(o,{emit:m}){const i=o,c=M(),v=K(),d=M(!1),f=b(()=>[v.textInput,{[v.empty]:!i.modelValue,[v.inline]:i.inline}]),h=()=>{d.value=!0,T(()=>{c.value.select()})},g=C=>{m("update:modelValue",C.target.value)};return(C,e)=>(a(),p("span",{class:r(n(f))},[l("input",{ref_key:"input",ref:c,value:o.modelValue,type:"text",onBlur:e[0]||(e[0]=u=>d.value=!1),onFocus:h,onInput:g,onKeydown:e[1]||(e[1]=P((...u)=>{var s,t;return((s=c.value)==null?void 0:s.blur)&&((t=c.value)==null?void 0:t.blur(...u))},["enter"]))},null,40,dl)],2))}}),il={$style:rl};var E=G(pl,[["__cssModules",il]]);const _l="_4q",ml="_4r",yl="_4s _4t _4u _4w",vl="_4v",$l="_4x",fl="_4y _4z _50 _52 _54 _56 _58 _5a _5c _5e",hl="_51",gl="_53",Bl="_55 _57",Cl="_59",bl="_5b",kl="_5d",Vl="_5f",wl="_5g";var Ml={header:_l,meta:ml,top:yl,start:vl,end:$l,currencyCell:fl,firstRow:hl,firstColumn:gl,even:Bl,tlc:Cl,trc:bl,blc:kl,brc:Vl,addBudgetBtn:wl};const Gl=l("span",null,null,-1),Nl=l("span",null,null,-1),Al=l("span",null,null,-1),Il=l("span",null,null,-1),Fl=l("span",null,null,-1),Rl=l("span",null,null,-1),Ul=l("span",null,null,-1),Dl=l("span",null,null,-1),El=l("span",null,null,-1),Sl=l("span",null,null,-1),Kl=l("span",null,null,-1),Pl=l("span",null,null,-1),Tl=l("span",null,null,-1),jl=l("span",null,null,-1),ql=l("span",null,null,-1),zl=l("span",null,null,-1),Ll=l("span",null,null,-1),Ql=V({props:{group:null},setup(o){const m=o,{addBudget:i,setBudgetName:c,setBudgetGroupName:v,setBudget:d,removeBudget:f}=R(),{t:h}=F(),g=M(!0),C=b(()=>{const e=new Array(12).fill(0);for(const{values:u}of m.group.budgets)for(let s=0;s<u.length;s++)e[s]+=u[s];return e});return(e,u)=>(a(),p(B,null,[_(w,{icon:g.value?"arrow-down-s-line":"arrow-right-s-line",color:"dimmed",textual:"",onClick:u[0]||(u[0]=s=>g.value=!g.value)},null,8,["icon"]),_(E,{class:r([e.$style.top,e.$style.start]),"model-value":o.group.name,inline:"","onUpdate:modelValue":u[1]||(u[1]=s=>n(v)(o.group.id,s))},null,8,["class","model-value"]),(a(!0),p(B,null,k(n(C),(s,t)=>(a(),p("span",{key:t,class:r(e.$style.top)},[l("span",null,[_(A,{value:s},null,8,["value"])])],2))),128)),l("span",{class:r(e.$style.top)},[l("span",null,I(n(h)("budget.total")),1)],2),l("span",{class:r([e.$style.top,e.$style.end])},[l("span",null,I(n(h)("budget.average")),1)],2),g.value?(a(),p(B,{key:0},[(a(!0),p(B,null,k(o.group.budgets,(s,t)=>(a(),p(B,{key:s.id+t},[Gl,_(w,{color:"dimmed",icon:"close-circle",textual:"",onClick:y=>n(f)(s.id)},null,8,["onClick"]),l("span",{class:r(e.$style.header)},[_(E,{"model-value":s.name,"onUpdate:modelValue":y=>n(c)(s.id,y)},null,8,["model-value","onUpdate:modelValue"])],2),(a(!0),p(B,null,k(s.values,(y,$)=>(a(),p("span",{class:r([e.$style.currencyCell,{[e.$style.even]:t%2,[e.$style.firstRow]:t===0,[e.$style.firstColumn]:$===0,[e.$style.tlc]:t===0&&$===0,[e.$style.trc]:t===0&&$===11,[e.$style.blc]:t===o.group.budgets.length-1&&$===0,[e.$style.brc]:t===o.group.budgets.length-1&&$===11}]),key:s.id+$},[_(ol,{"model-value":s.values[$],"onUpdate:modelValue":N=>n(d)(s.id,$,N)},null,8,["model-value","onUpdate:modelValue"])],2))),128)),l("span",{class:r(e.$style.meta)},[_(A,{value:n(H)(s.values)},null,8,["value"])],2),l("span",{class:r(e.$style.meta)},[_(A,{value:n(J)(s.values)},null,8,["value"])],2)],64))),128)),Nl,Al,_(w,{class:r(e.$style.addBudgetBtn),textual:"",text:n(h)("budget.addBudget"),onClick:u[2]||(u[2]=s=>n(i)(o.group.id))},null,8,["class","text"]),Il,Fl,Rl,Ul,Dl,El,Sl,Kl,Pl,Tl,jl,ql,zl,Ll],64)):x("",!0)],64))}}),Xl={$style:Ml};var xl=G(Ql,[["__cssModules",Xl]]);const Hl="_3b",Jl="_3c",Ol="_3d _3e _3g _3h",Wl="_3f",Yl="_3i";var Zl={budgetGroups:Hl,sum:Jl,month:Ol,current:Wl,addGroupBtn:Yl};const ls=l("span",null,null,-1),ss=l("span",null,null,-1),es=l("span",null,null,-1),ts=l("span",null,null,-1),ns=l("span",null,null,-1),os=l("span",null,null,-1),us=l("span",null,null,-1),as=l("span",null,null,-1),cs=l("span",null,null,-1),rs=l("span",null,null,-1),ds=l("span",null,null,-1),ps=l("span",null,null,-1),is=l("span",null,null,-1),_s=l("span",null,null,-1),ms=l("span",null,null,-1),ys=l("span",null,null,-1),vs=l("span",null,null,-1),$s=l("span",null,null,-1),fs=l("span",null,null,-1),hs=l("span",null,null,-1),gs=l("span",null,null,-1),Bs=l("span",null,null,-1),Cs=l("span",null,null,-1),bs=l("span",null,null,-1),ks=l("span",null,null,-1),Vs=V({props:{type:null},setup(o){const m=o,{state:i,addBudgetGroup:c,removeBudgetGroup:v}=R(),{t:d}=F(),f=new Date().getMonth(),h=b(()=>i[m.type]),g=Y(),C=b(()=>{const e=new Array(12).fill(0);for(const{budgets:u}of h.value)for(const{values:s}of u)for(let t=0;t<s.length;t++)e[t]+=s[t];return e});return(e,u)=>(a(),p("div",{class:r(e.$style.budgetGroups)},[ls,ss,es,(a(!0),p(B,null,k(n(g),(s,t)=>(a(),p("span",{key:s,class:r([e.$style.month,{[e.$style.current]:t===n(f)}])},[l("span",null,I(s),1)],2))),128)),ts,ns,os,us,l("span",{class:r(e.$style.sum)},I(n(d)("budget.totals")),3),(a(!0),p(B,null,k(n(C),(s,t)=>(a(),p("span",{key:t,class:r(e.$style.sum)},[_(A,{value:s},null,8,["value"])],2))),128)),as,cs,(a(!0),p(B,null,k(n(h),s=>(a(),p(B,{key:s.id},[_(w,{color:"dimmed",icon:"close-circle",textual:"",onClick:t=>n(v)(s.id)},null,8,["onClick"]),_(xl,{group:s},null,8,["group"])],64))),128)),rs,ds,_(w,{class:r(e.$style.addGroupBtn),icon:"plus",text:n(d)("budget.addGroup"),onClick:u[0]||(u[0]=s=>n(c)(o.type))},null,8,["class","text"]),ps,is,_s,ms,ys,vs,$s,fs,hs,gs,Bs,Cs,bs,ks],2))}}),ws={$style:Zl};var Ms=G(Vs,[["__cssModules",ws]]);const Gs="_2k";var Ns={miniChart:Gs};const As=V({props:{title:null,type:null},setup(o){const m=o,{state:i}=R(),c=b(()=>O(i[m.type])),v=c.value.reduce((d,f)=>d+f,0);return(d,f)=>(a(),S(W,{amount:n(v),title:o.title},{header:D(()=>[_(Z,{class:r(d.$style.miniChart),values:n(c)},null,8,["class","values"])]),default:D(()=>[_(Ms,{type:o.type},null,8,["type"])]),_:1},8,["amount","title"]))}}),Is={$style:Ns};var Ps=G(As,[["__cssModules",Is]]);export{Ps as B};
