System.register(["./index-legacy-Bd-TjD4l.js","./route-block-legacy-wdPIt6g0.js"],(function(e,n){"use strict";var t,u,o,l,a,c,i,s,r,d;return{setters:[e=>{t=e.l,u=e.d,o=e.j,l=e.m,a=e.o,c=e.e,i=e.h,s=e.t,r=e.F},e=>{d=e.b}],execute:function(){const n=e("default",u({__name:"index",setup(e){const n=o("");return l((async()=>{const{code:e,data:u}=await function(e){return t.post("/api/login",e)}({tokenType:1,authToken:"jingyufeng"});1===e&&(n.value=u.jwtToken)})),(e,t)=>(a(),c(r,null,[t[0]||(t[0]=i("p",null,"电梯运行状态",-1)),i("div",null,s(n.value),1),t[1]||(t[1]=i("div",null,"这是一首简单的小情歌，唱着我们心中的曲折，我想我是个歌颂者，心中的花盛开着",-1))],64))}}));"function"==typeof d&&d(n)}}}));