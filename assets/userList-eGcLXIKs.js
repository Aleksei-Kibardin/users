import{_ as m,u as p,a as h,r as v,o as t,c as r,F as f,b as k,d as e,t as a}from"./index-YuOaPXv1.js";const y={class:"users"},b=["onClick"],g={class:"user-avatar"},x=["src"],S={class:"user-info_wrap"},C={class:"user-name"},B={class:"nickname"},F={class:"full-name"},L={class:"user-city"},w={class:"user-company"},M={__name:"userList",setup(N){const n=p(),i=h(),u=v(i.state.users),_=()=>Math.floor(Math.random()*-2+3),l=(c,o)=>{const s=c.currentTarget.querySelector(".avatar").currentSrc;n.push({name:"Profile",params:{id:o,sex:s}})};return(c,o)=>(t(),r("div",y,[(t(!0),r(f,null,k(u.value,s=>(t(),r("div",{class:"user",onClick:d=>l(d,s.id),key:s},[e("div",g,[e("img",{class:"avatar",src:`https://github.com/Aleksei-Kibardin/users/blob/master/src/assets/${_()}.png?raw=true`,alt:"avatar"},null,8,x)]),e("div",S,[e("div",C,[e("span",B,a(s.username),1),e("span",F,"Name: "+a(s.name),1)]),e("div",L,"From: "+a(s.address.city),1),e("div",w,"Company: "+a(s.company.name),1)])],8,b))),128))]))}},q=m(M,[["__scopeId","data-v-8c0bccd5"]]);export{q as default};