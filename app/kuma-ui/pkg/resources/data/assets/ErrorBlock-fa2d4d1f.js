import{l as v,b,P as g}from"./kongponents.es-6866aec3.js";import{d as w,C as S,c as B,M as _,o,e as t,h as d,l as E,b as s,w as c,n as y,g as r,t as n,f as i,k as l,F as A,j as C,a as x,p as I,m as N}from"./index-52119cf8.js";import{h as V}from"./RouteView.vue_vue_type_script_setup_true_lang-28e29218.js";const h=e=>(I("data-v-5412fd47"),e=e(),N(),e),q={class:"error-block"},D=h(()=>l("p",null,"An error has occurred while trying to load this data.",-1)),F={key:1,class:"error-block-details"},P=h(()=>l("summary",null,"Details",-1)),$={key:0},j={key:0,class:"badge-list"},z=w({__name:"ErrorBlock",props:{error:{type:[Error,null],required:!1,default:null},icon:{type:String,required:!1,default:"warning"},badgeAppearance:{type:String,required:!1,default:"warning"}},setup(e){const a=e,u=S(),p=B(()=>a.error instanceof _?a.error.causes:[]);return(m,L)=>(o(),t("div",q,[d(s(b),{"cta-is-hidden":""},E({title:c(()=>[d(s(v),{class:"mb-3",icon:a.icon,color:a.icon==="warning"?"var(--black-500)":void 0,"secondary-color":a.icon==="warning"?"var(--yellow-300)":void 0,size:"42"},null,8,["icon","color","secondary-color"]),r(),y(m.$slots,"default",{},()=>[D],!0)]),_:2},[s(u).message||e.error!==null||p.value.length>0?{name:"message",fn:c(()=>[s(u).message?y(m.$slots,"message",{key:0},void 0,!0):(o(),t("details",F,[P,r(),e.error!==null?(o(),t("p",$,n(e.error.message),1)):i("",!0),r(),l("ul",null,[(o(!0),t(A,null,C(p.value,(f,k)=>(o(),t("li",{key:k},[l("b",null,[l("code",null,n(f.field),1)]),r(": "+n(f.message),1)]))),128))])]))]),key:"0"}:void 0]),1024),r(),e.error instanceof s(_)?(o(),t("div",j,[e.error.code?(o(),x(s(g),{key:0,appearance:a.badgeAppearance},{default:c(()=>[r(n(e.error.code),1)]),_:1},8,["appearance"])):i("",!0),r(),d(s(g),{appearance:a.badgeAppearance},{default:c(()=>[r(n(e.error.statusCode),1)]),_:1},8,["appearance"])])):i("",!0)]))}});const G=V(z,[["__scopeId","data-v-5412fd47"]]);export{G as E};
