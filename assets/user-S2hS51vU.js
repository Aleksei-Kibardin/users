import{a as l,e as m,c as _,f as p,w as v,g as h,o as f,b,d as s,t,n as c,h as w,i as $}from"./index-DOhioTRE.js";import{_ as g}from"./_plugin-vue_export-helper-x3n3nnut.js";const y={class:"user"},P={class:"user-head"},k={class:"avatar"},A=["src"],C={class:"user-info_wrap"},B={class:"user-name"},N={class:"nickname"},S={class:"full-name"},E={class:"user-city"},F={class:"user-company"},V={class:"user-info_wrap contact"},z={class:"user-website"},D={class:"user-phone"},I={class:"user-email"},M={class:"page-list"},R={__name:"user",setup(U){const n=l(),i=m(),o=_(()=>{const e=i.params.id;return n.state.users.find(a=>a.id===+e)});n.commit("uploadUser",o);const r=async e=>{const a=await $(e);n.commit("uploadPosts",a)};return p(()=>{r(i.params.id)}),v(()=>i.params.id,(e,a)=>{e!==a&&r(e)}),(e,a)=>{const d=h("router-view");return f(),b("div",y,[s("div",P,[s("div",k,[s("img",{src:`${e.$route.params.sex}`,alt:"avatar"},null,8,A)]),s("div",C,[s("div",B,[s("div",N,t(o.value.username),1),s("div",S,"Name: "+t(o.value.name),1)]),s("div",E,"From: "+t(o.value.address.city),1),s("div",F,"Company: "+t(o.value.company.name),1)]),s("div",V,[s("div",z,"Website: "+t(o.value.website),1),s("div",D,"Phone: "+t(o.value.phone),1),s("div",I,"Email: "+t(o.value.email),1)])]),s("nav",M,[s("div",{class:c(["page",{active:e.$route.name==="Posts"}]),onClick:a[0]||(a[0]=u=>e.$router.push({name:"Posts",params:{}}))},"Posts",2),s("div",{class:c(["page",{active:e.$route.name==="Albums"}]),onClick:a[1]||(a[1]=u=>e.$router.push({name:"Albums",params:{}}))},"Albums",2)]),w(d)])}}},q=g(R,[["__scopeId","data-v-b6afcf54"]]);export{q as default};
