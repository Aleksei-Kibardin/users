import{a as g,e as w,c as x,j as p,o as d,b as i,d as l,F as C,r as P,q as c,v as k,t as m,s as y,x as b}from"./index-66gNwAZB.js";const B=["onClick"],E=l("path",{d:"M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z",style:{fill:"#fff"}},null,-1),I=[E],V={class:"post-title"},q=l("hr",null,null,-1),A=l("div",null,null,-1),L={class:"edit-posts"},S=l("label",null,"Title:",-1),T=l("label",null,"Text:",-1),Z={class:"edit-post-btn"},M={__name:"posts",setup(D){const a=g(),r=w(),_=r.params.id,n=x(()=>a.state.posts),o=p(),u=p(),t=p({id:null,active:!1,status:""}),$=async(v,e)=>{const s={userId:+r.params.id,id:n.value.length,title:`${v}`,body:`${e}`};a.state.oldId=_,await a.dispatch("addPost",s),n.value=a.state.posts,console.log(a.state.posts)},f=async(v,e,s)=>{const h={userId:r.params.id,id:v,title:`${e}`,body:`${s}`};a.state.oldId=_,await a.dispatch("editPost",h),n.value=a.state.posts,console.log(a.state.posts)};return console.log(n.value),(v,e)=>(d(),i("div",null,[l("div",{class:"add",onClick:e[0]||(e[0]=s=>{t.value.active=!0,t.value.status="Add",f(t.value.id,o.value,u.value)})},"Add post"),(d(!0),i(C,null,P(n.value,s=>c((d(),i("div",{class:"post",key:s},[(d(),i("svg",{"aria-hidden":"true",height:"16",viewBox:"0 0 16 16",version:"1.1",width:"16","data-view-component":"true",class:"edit-post",onClick:h=>{t.value.active=!0,t.value.status="Edit",t.value.id=s.id}},I,8,B)),l("div",V,[l("h2",null,m(s.title),1),q]),l("p",null,m(s.body),1)])),[[k,t.value.active===!1]])),128)),A,c(l("form",L,[l("h3",null,m(t.value.status)+": post",1),S,c(l("input",{class:"edit-post-titile","onUpdate:modelValue":e[1]||(e[1]=s=>o.value=s),required:""},null,512),[[y,o.value]]),T,c(l("textarea",{class:"edit-post-body","onUpdate:modelValue":e[2]||(e[2]=s=>u.value=s),required:""},null,512),[[y,u.value]]),l("div",Z,[l("div",{onClick:e[3]||(e[3]=s=>{t.value.active=!1,t.value.status=""})}," back "),t.value.status==="Add"?(d(),i("div",{key:0,class:"edit-post-save",onClick:e[4]||(e[4]=s=>{t.value.active=!1,t.value.status="",$(o.value,u.value),o.value=null,u.value=null})}," add ")):b("",!0),t.value.status==="Edit"?(d(),i("div",{key:1,class:"edit-post-save",onClick:e[5]||(e[5]=s=>{t.value.active=!1,t.value.status="",f(t.value.id,o.value,u.value),o.value=null,u.value=null})}," save ")):b("",!0)])],512),[[k,t.value.active===!0]])]))}};export{M as default};
