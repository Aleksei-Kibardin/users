import{a as y,r as g,f as k,o,c as n,d as e,i as b,F as m,b as v,j as w,n as x,k as L,l as f,m as S}from"./index-YuOaPXv1.js";const B={class:"user-slider"},P={class:"carousel_wrap"},C={class:"carousel"},A=["src"],F={class:"slider-nav"},N=e("svg",{width:"38",height:"5",viewBox:"0 0 38 5",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("line",{x1:"37.3206",y1:"3.25",x2:"7.32056",y2:"3.25",stroke:"white","stroke-width":"2"}),e("path",{d:"M17.3205 -3.02842e-06L17.3205 4.25L7.43094e-07 4.25L8.32056 1.75L17.3205 -3.02842e-06Z",fill:"white"})],-1),O=[N],$=["onClick"],J=e("svg",{width:"38",height:"5",viewBox:"0 0 38 5",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("line",{y1:"1",x2:"30",y2:"1",stroke:"white","stroke-width":"2"}),e("path",{d:"M20 4.25L20 1.51421e-06L37.3206 0L29 2.5L20 4.25Z",fill:"white"})],-1),M=[J],j={__name:"slides",props:["albumId"],setup(p){const i=y(),c=p,s=g(0),h=c.albumId,t=k(()=>({"--multiplier":s.value})),l=()=>{s.value++,s.value===5&&(s.value=0)},a=()=>{s.value--,s.value===-1&&(s.value=4)},I=_=>i.state.photos.filter(r=>r.albumId===_);return(_,r)=>(o(),n("div",B,[e("div",P,[e("div",C,[e("div",{class:"slider",style:b(t.value)},[(o(!0),n(m,null,v(I(w(h)).slice(0,5),(d,u)=>(o(),n("div",{class:"slide",key:u},[e("img",{src:d.url,alt:"Slide"},null,8,A)]))),128))],4)]),e("div",F,[e("div",{onClick:r[0]||(r[0]=d=>a()),class:"arrow"},O),(o(!0),n(m,null,v(w(i).state.photos.slice(0,5),(d,u)=>(o(),n("span",{class:x(["dot",{active:u===s.value}]),key:u,onClick:z=>s.value=u},null,10,$))),128)),e("div",{onClick:r[1]||(r[1]=d=>l()),class:"arrow"},M)])])]))}},q={__name:"albums",setup(p){const i=y(),c=g([]);async function s(){try{const t=await f();i.commit("uploadPhotos",t),localStorage.setItem("photo-list",JSON.stringify(t)),c.value=t}catch(t){console.error("Failed to load photos:",t)}}L(async()=>{const t=localStorage.getItem("photo-list");if(t){const l=t,a=await f();JSON.stringify(l)!==JSON.stringify(a)?s():(c.value=l,i.commit("uploadPhotos",l))}else s()});const h=k(()=>Array.from(new Set(c.value.map(t=>t.albumId))));return(t,l)=>(o(!0),n(m,null,v(h.value,a=>(o(),S(j,{key:a,albumId:a},null,8,["albumId"]))),128))}};export{q as default};
