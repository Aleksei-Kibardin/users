import{u as p,a as v,c as u,w as f,o as n,b as i,F as k,r as y,d as e,t as c}from"./index-Pt-H77-6.js";import{_ as S}from"./_plugin-vue_export-helper-x3n3nnut.js";const b={class:"users"},g=["onClick"],x={class:"user-avatar"},w=["src"],C={class:"user-info_wrap"},B={class:"user-name"},F={class:"nickname"},L={class:"full-name"},M={class:"user-city"},N={class:"user-company"},P={__name:"userList",setup(V){const l=p(),a=v(),o=u(()=>a.state.searchValue),d=u(()=>a.state.search),_=()=>Math.floor(Math.random()*-2+3),m=(t,r)=>{const s=t.currentTarget.querySelector(".avatar").currentSrc;l.push({name:"Profile",params:{id:r,sex:s}})};return f(()=>o.value,()=>{const t=a.state.users;o.value!==""?a.commit("uploadSearch",t.filter(r=>r.username.includes(o.value))):a.commit("uploadSearch",t)}),(t,r)=>(n(),i("div",b,[(n(!0),i(k,null,y(d.value,s=>(n(),i("div",{class:"user",key:s,onClick:h=>m(h,s.id)},[e("div",x,[e("img",{class:"avatar",src:`https://github.com/Aleksei-Kibardin/users/blob/master/src/assets/${_()}.png?raw=true`,alt:"avatar"},null,8,w)]),e("div",C,[e("div",B,[e("span",F,c(s.username),1),e("span",L,"Name: "+c(s.name),1)]),e("div",M,"From: "+c(s.address.city),1),e("div",N,"Company: "+c(s.company.name),1)])],8,g))),128))]))}},D=S(P,[["__scopeId","data-v-ef3e2b94"]]);export{D as default};
