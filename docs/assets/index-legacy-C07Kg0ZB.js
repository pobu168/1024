System.register(["./index-legacy-Bd-TjD4l.js"],(function(n,e){"use strict";var i,l,o,t,a,r,s,c,d,u,g,p,y,f,v;return{setters:[n=>{i=n.n,l=n.g,o=n.d,t=n.c,a=n.a8,r=n.q,s=n.D,c=n.Z,d=n.p,u=n.P,g=n.aj,p=n.ak,y=n.ay,f=n.I,v=n.L}],execute:function(){const[e,x]=i("loading"),b=Array(12).fill(null).map(((n,e)=>l("i",{class:x("line",String(e+1))},null))),S=l("svg",{class:x("circular"),viewBox:"25 25 50 50"},[l("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),z={size:s,type:c("circular"),color:String,vertical:Boolean,textSize:s,textColor:String};var B=o({name:e,props:z,setup(n,{slots:e}){const i=t((()=>a({color:n.color},r(n.size)))),o=()=>{const o="spinner"===n.type?b:S;return l("span",{class:x("spinner",n.type),style:i.value},[e.icon?e.icon():o])},s=()=>{var i;if(e.default)return l("span",{class:x("text"),style:{fontSize:d(n.textSize),color:null!=(i=n.textColor)?i:n.color}},[e.default()])};return()=>{const{type:e,vertical:i}=n;return l("div",{class:x([e,{vertical:i}]),"aria-live":"polite","aria-busy":!0},[o(),s()])}}});const k=u(B),[m,P]=i("button"),T=a({},g,{tag:c("button"),text:String,icon:String,type:c("default"),size:c("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:c("button"),loadingSize:s,loadingText:String,loadingType:String,iconPosition:c("left")});var h=o({name:m,props:T,emits:["click"],setup(n,{emit:e,slots:i}){const o=p(),t=()=>n.loading?i.loading?i.loading():l(k,{size:n.loadingSize,type:n.loadingType,class:P("loading")},null):i.icon?l("div",{class:P("icon")},[i.icon()]):n.icon?l(f,{name:n.icon,class:P("icon"),classPrefix:n.iconPrefix},null):void 0,a=()=>{let e;if(e=n.loading?n.loadingText:i.default?i.default():n.text,e)return l("span",{class:P("text")},[e])},r=()=>{const{color:e,plain:i}=n;if(e){const n={color:i?e:"white"};return i||(n.background=e),e.includes("gradient")?n.border=0:n.borderColor=e,n}},s=i=>{n.loading?v(i):n.disabled||(e("click",i),o())};return()=>{const{tag:e,type:i,size:o,block:c,round:d,plain:u,square:g,loading:p,disabled:f,hairline:v,nativeType:x,iconPosition:b}=n,S=[P([i,o,{plain:u,block:c,round:d,square:g,loading:p,disabled:f,hairline:v}]),{[y]:v}];return l(e,{type:x,class:S,style:r(),disabled:f,onClick:s},{default:()=>[l("div",{class:P("content")},["left"===b&&t(),a(),"right"===b&&t()])]})}}});n("B",u(h))}}}));