import{a as d,e as _,r as m,k as f,w as h,o as c,c as u,b as v,j as g,F as k,p as y,d as e,t as i}from"./index-cuzuxtS0.js";const B={class:"post-title"},P=e("hr",null,null,-1),w={__name:"posts",setup(S){const o=d(),l=_();let t=m(o.state.posts);const p=l.params.id,n=async s=>{t.value=await y(s),o.commit("uploadPosts",t.value)};return f(()=>{n(p)}),h(()=>l.params.id,(s,r)=>{s!==r&&n(s)}),console.log(t.value),(s,r)=>(c(!0),u(k,null,v(g(t),a=>(c(),u("div",{class:"post",key:a},[e("div",B,[e("h2",null,i(a.title),1),P]),e("p",null,i(a.body),1)]))),128))}};export{w as default};
