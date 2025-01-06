import{F as S,_ as U,v as q,a as B}from"./inline-px-to-vw-D7Enz80z.js";import{d as M,u as N,g as $,R as T,k as v,T as y,c as D,a as F,f as z,h as a,w as m,e,U as G,$ as p,i as n,l as f,t as g}from"./index-BN_AR-Rj.js";import"./index-nmoiwxye.js";import{B as R}from"./index-CV04fl1I.js";import{b as h}from"./route-block-B_A1xBdJ.js";const I={class:"m-x-a w-7xl text-center"},L={class:"overflow-hidden rounded-3xl"},j={class:"mt-16 overflow-hidden rounded-3xl"},A={class:"mt-16 overflow-hidden rounded-3xl"},H={class:"mt-16 overflow-hidden rounded-3xl"},J={class:"mt-16 overflow-hidden rounded-3xl"},K={class:"mt-16"},O=M({__name:"index",setup(Q){const{t:s}=N(),V=$(),w=T(),u=v(!1),o=y({email:"",code:"",nickname:"",password:"",confirmPassword:""}),k=l=>l===o.password,d=y({email:[{required:!0,message:s("register.pleaseEnterEmail")}],code:[{required:!0,message:s("register.pleaseEnterCode")}],nickname:[{required:!0,message:s("register.pleaseEnterNickname")}],password:[{required:!0,message:s("register.pleaseEnterPassword")}],confirmPassword:[{required:!0,message:s("register.pleaseEnterConfirmPassword")},{required:!0,validator:k,message:s("register.passwordsDoNotMatch")}]});async function x(){try{u.value=!0,(await w.register()).code===0&&(p({type:"success",message:s("register.registerSuccess")}),V.push({name:"login"}))}finally{u.value=!1}}const c=v(!1),b=D(()=>c.value?s("register.gettingCode"):s("register.getCode"));async function C(){if(!o.email){p({type:"warning",message:s("register.pleaseEnterEmail")});return}c.value=!0;const l=await w.getCode();l.code===0&&p({type:"success",message:"".concat(s("register.sendCodeSuccess"),": ").concat(l.result)}),c.value=!1}return(l,r)=>{const i=B,_=R,P=S,E=U;return F(),z("div",I,[a(P,{model:e(o),rules:e(d),"validate-trigger":"onSubmit",onSubmit:x},{default:m(()=>[n("div",L,[a(i,{modelValue:e(o).email,"onUpdate:modelValue":r[0]||(r[0]=t=>e(o).email=t),modelModifiers:{trim:!0},rules:e(d).email,name:"email",placeholder:e(s)("register.email")},null,8,["modelValue","rules","placeholder"])]),n("div",j,[a(i,{modelValue:e(o).code,"onUpdate:modelValue":r[1]||(r[1]=t=>e(o).code=t),modelModifiers:{trim:!0},rules:e(d).code,name:"code",placeholder:e(s)("register.code")},{button:m(()=>[a(_,{size:"small",type:"primary",plain:"",onClick:C},{default:m(()=>[f(g(e(b)),1)]),_:1})]),_:1},8,["modelValue","rules","placeholder"])]),n("div",A,[a(i,{modelValue:e(o).nickname,"onUpdate:modelValue":r[2]||(r[2]=t=>e(o).nickname=t),modelModifiers:{trim:!0},rules:e(d).nickname,name:"nickname",placeholder:e(s)("register.nickname")},null,8,["modelValue","rules","placeholder"])]),n("div",H,[a(i,{modelValue:e(o).password,"onUpdate:modelValue":r[3]||(r[3]=t=>e(o).password=t),modelModifiers:{trim:!0},type:"password",rules:e(d).password,name:"password",placeholder:e(s)("register.password")},null,8,["modelValue","rules","placeholder"])]),n("div",J,[a(i,{modelValue:e(o).confirmPassword,"onUpdate:modelValue":r[4]||(r[4]=t=>e(o).confirmPassword=t),modelModifiers:{trim:!0},type:"password",rules:e(d).confirmPassword,name:"confirmPassword",placeholder:e(s)("register.comfirmPassword")},null,8,["modelValue","rules","placeholder"])]),n("div",K,[a(_,{loading:e(u),type:"primary","native-type":"submit",round:"",block:""},{default:m(()=>[f(g(l.$t("register.confirm")),1)]),_:1},8,["loading"])])]),_:1},8,["model","rules"]),a(E,{to:"login",block:"",style:G({"margin-top":e(q)(8)})},{default:m(()=>[f(g(l.$t("register.backToLogin")),1)]),_:1},8,["style"])])}}});typeof h=="function"&&h(O);export{O as default};