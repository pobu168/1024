System.register(["./index-legacy-Bd-TjD4l.js"],(function(r,o){"use strict";var e,i,l,n,a,t,s,c,u,d,v,g,f,h,y,p,m,S,w,b,z;return{setters:[r=>{e=r.n,i=r.d,l=r.j,n=r.W,a=r.c,t=r.p,s=r.G,c=r.v,u=r.X,d=r.Y,v=r.m,g=r.J,f=r.g,h=r.D,y=r.C,p=r.Z,m=r.y,S=r._,w=r.A,b=r.I,z=r.P}],execute:function(){const[o,L]=e("image"),x={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:h,height:h,radius:h,lazyLoad:Boolean,iconSize:h,showError:y,errorIcon:p("photo-fail"),iconPrefix:String,showLoading:y,loadingIcon:p("photo"),crossorigin:String,referrerpolicy:String};var I=i({name:o,props:x,emits:["load","error"],setup(r,{emit:o,slots:e}){const i=l(!1),h=l(!0),y=l(),{$Lazyload:p}=n().proxy,z=a((()=>{const o={width:t(r.width),height:t(r.height)};return s(r.radius)&&(o.overflow="hidden",o.borderRadius=t(r.radius)),o}));c((()=>r.src),(()=>{i.value=!1,h.value=!0}));const x=r=>{h.value&&(h.value=!1,o("load",r))},I=()=>{const r=new Event("load");Object.defineProperty(r,"target",{value:y.value,enumerable:!0}),x(r)},P=r=>{i.value=!0,h.value=!1,o("error",r)},j=(o,e,i)=>i?i():f(b,{name:o,size:r.iconSize,class:e,classPrefix:r.iconPrefix},null),$=()=>{if(i.value||!r.src)return;const o={alt:r.alt,class:L("img"),style:{objectFit:r.fit,objectPosition:r.position},crossorigin:r.crossorigin,referrerpolicy:r.referrerpolicy};return r.lazyLoad?m(f("img",w({ref:y},o),null),[[S("lazy"),r.src]]):f("img",w({ref:y,src:r.src,onLoad:x,onError:P},o),null)},E=({el:r})=>{const o=()=>{r===y.value&&h.value&&I()};y.value?o():g(o)},k=({el:r})=>{r!==y.value||i.value||P()};return p&&u&&(p.$on("loaded",E),p.$on("error",k),d((()=>{p.$off("loaded",E),p.$off("error",k)}))),v((()=>{g((()=>{var o;(null==(o=y.value)?void 0:o.complete)&&!r.lazyLoad&&I()}))})),()=>{var o;return f("div",{class:L({round:r.round,block:r.block}),style:z.value},[$(),h.value&&r.showLoading?f("div",{class:L("loading")},[j(r.loadingIcon,L("loading-icon"),e.loading)]):i.value&&r.showError?f("div",{class:L("error")},[j(r.errorIcon,L("error-icon"),e.error)]):void 0,null==(o=e.default)?void 0:o.call(e)])}}});r("I",z(I))}}}));
