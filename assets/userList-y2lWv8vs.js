import{_ as m,u as p,a as h,c as v,o as t,b as r,F as f,r as k,d as e,t as a}from"./index-wHJL52GS.js";const y={class:"users"},g=["onClick"],b={class:"user-avatar"},x=["src"],S={class:"user-info_wrap"},C={class:"user-name"},B={class:"nickname"},F={class:"full-name"},L={class:"user-city"},w={class:"user-company"},M={__name:"userList",setup(N){const n=p(),i=h(),u=v(()=>i.state.users),_=()=>Math.floor(Math.random()*-2+3),d=(o,c)=>{const s=o.currentTarget.querySelector(".avatar").currentSrc;n.push({name:"Profile",params:{id:c,sex:s}})};return(o,c)=>(t(),r("div",y,[(t(!0),r(f,null,k(u.value,s=>(t(),r("div",{class:"user",key:s,onClick:l=>d(l,s.id)},[e("div",b,[e("img",{class:"avatar",src:`https://github.com/Aleksei-Kibardin/users/blob/master/src/assets/${_()}.png?raw=true`,alt:"avatar"},null,8,x)]),e("div",S,[e("div",C,[e("span",B,a(s.username),1),e("span",F,"Name: "+a(s.name),1)]),e("div",L,"From: "+a(s.address.city),1),e("div",w,"Company: "+a(s.company.name),1)])],8,g))),128))]))}},q=m(M,[["__scopeId","data-v-422d0e5d"]]);export{q as default};
