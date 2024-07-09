import{d as O,O as Q,D as R,r as m,o,m as f,w as e,b as a,k as C,e as s,l as S,z as W,P as j,c as _,F as y,Q as H,t as c,p as b,A as J,s as V,R as M,S as U,E as Y,q as ee}from"./index-Be4yFAuI.js";import{_ as ne}from"./DeleteResourceModal.vue_vue_type_script_setup_true_lang-DjlnQ3nR.js";import{S as te}from"./SummaryView-B7i-Mbal.js";const oe=["data-testid"],se=O({__name:"ZoneListView",setup(ae){const B=Q(),X=R({}),D=R({}),T=w=>{const h="zoneIngress";X.value=w.items.reduce((p,u)=>{var z;const d=(z=u[h])==null?void 0:z.zone;if(typeof d<"u"){typeof p[d]>"u"&&(p[d]={online:[],offline:[]});const k=typeof u[`${h}Insight`].connectedSubscription<"u"?"online":"offline";p[d][k].push(u)}return p},{})},Z=w=>{const h="zoneEgress";D.value=w.items.reduce((p,u)=>{var z;const d=(z=u[h])==null?void 0:z.zone;if(typeof d<"u"){typeof p[d]>"u"&&(p[d]={online:[],offline:[]});const k=typeof u[`${h}Insight`].connectedSubscription<"u"?"online":"offline";p[d][k].push(u)}return p},{})};async function $(w){await B.deleteZone({name:w})}return(w,h)=>{const p=m("RouteTitle"),u=m("DataSource"),d=m("KButton"),z=m("XTeleportTemplate"),k=m("XIcon"),x=m("XAction"),E=m("XDisclosure"),L=m("XActionGroup"),K=m("KCard"),N=m("RouterView"),q=m("AppView"),F=m("RouteView");return o(),f(F,{name:"zone-cp-list-view",params:{page:1,size:50,zone:""}},{default:e(({route:i,t:l,can:v,uri:G,me:g})=>[a(q,null,{title:e(()=>[C("h1",null,[a(p,{title:l("zone-cps.routes.items.title")},null,8,["title"])])]),default:e(()=>[s(),a(u,{src:G(S(W),"/zone-cps",{},{page:i.params.page,size:i.params.size})},{default:e(({data:r,error:A,refresh:P})=>[a(u,{src:"/zone-ingress-overviews?page=1&size=100",onChange:T}),s(),a(u,{src:"/zone-egress-overviews?page=1&size=100",onChange:Z}),s(),a(K,null,{default:e(()=>[A!==void 0?(o(),f(j,{key:0,error:A},null,8,["error"])):(o(),_(y,{key:1},[v("create zones")&&((r==null?void 0:r.items)??[]).length>0?(o(),f(z,{key:0,to:{name:"zone-cp-list-view-actions"}},{default:e(()=>[a(d,{appearance:"primary",to:{name:"zone-create-view"},"data-testid":"create-zone-link"},{default:e(()=>[a(S(H)),s(" "+c(l("zones.index.create")),1)]),_:2},1024)]),_:2},1024)):b("",!0),s(),a(J,{class:"zone-cp-collection","data-testid":"zone-cp-collection",headers:[{...g.get("headers.type"),label:" ",key:"type"},{...g.get("headers.name"),label:"Name",key:"name"},{...g.get("headers.zoneCpVersion"),label:"Zone Leader CP Version",key:"zoneCpVersion"},{...g.get("headers.ingress"),label:"Ingresses (online / total)",key:"ingress"},{...g.get("headers.egress"),label:"Egresses (online / total)",key:"egress"},{...g.get("headers.state"),label:"Status",key:"state"},{...g.get("headers.warnings"),label:"Warnings",key:"warnings",hideLabel:!0},{...g.get("headers.actions"),label:"Actions",key:"actions",hideLabel:!0}],"page-number":i.params.page,"page-size":i.params.size,total:r==null?void 0:r.total,items:r==null?void 0:r.items,error:A,"empty-state-title":v("create zones")?l("zone-cps.empty_state.title"):void 0,"empty-state-message":v("create zones")?l("zone-cps.empty_state.message"):void 0,"empty-state-cta-to":v("create zones")?{name:"zone-create-view"}:void 0,"empty-state-cta-text":v("create zones")?l("zones.index.create"):void 0,"is-selected-row":n=>n.name===i.params.zone,onChange:i.update,onResize:g.set},{type:e(({row:n})=>[(o(!0),_(y,null,V([["kubernetes","universal"].find(t=>t===n.zoneInsight.environment)??"kubernetes"],t=>(o(),f(k,{key:t,name:t},{default:e(()=>[s(c(l(`common.product.environment.${t}`)),1)]),_:2},1032,["name"]))),128))]),name:e(({row:n})=>[a(x,{"data-action":"",to:{name:"zone-cp-detail-view",params:{zone:n.name},query:{page:i.params.page,size:i.params.size}}},{default:e(()=>[s(c(n.name),1)]),_:2},1032,["to"])]),zoneCpVersion:e(({row:n})=>[s(c(S(M)(n.zoneInsight,"version.kumaCp.version",l("common.collection.none"))),1)]),ingress:e(({row:n})=>[(o(!0),_(y,null,V([X.value[n.name]||{online:[],offline:[]}],t=>(o(),_(y,null,[s(c(t.online.length)+" / "+c(t.online.length+t.offline.length),1)],64))),256))]),egress:e(({row:n})=>[(o(!0),_(y,null,V([D.value[n.name]||{online:[],offline:[]}],t=>(o(),_(y,null,[s(c(t.online.length)+" / "+c(t.online.length+t.offline.length),1)],64))),256))]),state:e(({row:n})=>[a(U,{status:n.state},null,8,["status"])]),warnings:e(({row:n})=>[n.warnings.length>0?(o(),f(k,{key:0,name:"warning","data-testid":"warning"},{default:e(()=>[C("ul",null,[(o(!0),_(y,null,V(n.warnings,t=>(o(),_("li",{key:t.kind,"data-testid":`warning-${t.kind}`},c(l(`zone-cps.list.${t.kind}`)),9,oe))),128))])]),_:2},1024)):(o(),_(y,{key:1},[s(c(l("common.collection.none")),1)],64))]),actions:e(({row:n})=>[a(L,null,{default:e(()=>[a(E,null,{default:e(({expanded:t,toggle:I})=>[a(x,{to:{name:"zone-cp-detail-view",params:{zone:n.name}}},{default:e(()=>[s(c(l("common.collection.actions.view")),1)]),_:2},1032,["to"]),s(),v("create zones")?(o(),f(x,{key:0,appearance:"danger",onClick:I},{default:e(()=>[s(c(l("common.collection.actions.delete")),1)]),_:2},1032,["onClick"])):b("",!0),s(),a(z,{to:{name:"modal-layer"}},{default:e(()=>[t?(o(),f(ne,{key:0,"confirmation-text":n.name,"delete-function":()=>$(n.name),"is-visible":"","action-button-text":l("common.delete_modal.proceed_button"),title:l("common.delete_modal.title",{type:"Zone"}),"data-testid":"delete-zone-modal",onCancel:I,onDelete:()=>{I(),P()}},{default:e(()=>[C("p",null,c(l("common.delete_modal.text1",{type:"Zone",name:n.name})),1),s(),C("p",null,c(l("common.delete_modal.text2")),1)]),_:2},1032,["confirmation-text","delete-function","action-button-text","title","onCancel","onDelete"])):b("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["headers","page-number","page-size","total","items","error","empty-state-title","empty-state-message","empty-state-cta-to","empty-state-cta-text","is-selected-row","onChange","onResize"])],64))]),_:2},1024),s(),i.params.zone?(o(),f(N,{key:0},{default:e(n=>[a(te,{onClose:t=>i.replace({name:"zone-cp-list-view",query:{page:i.params.page,size:i.params.size}})},{default:e(()=>[(o(),f(Y(n.Component),{name:i.params.zone,"zone-overview":r==null?void 0:r.items.find(t=>t.name===i.params.zone)},null,8,["name","zone-overview"]))]),_:2},1032,["onClose"])]),_:2},1024)):b("",!0)]),_:2},1032,["src"])]),_:2},1024)]),_:1})}}}),re=ee(se,[["__scopeId","data-v-ab414076"]]);export{re as default};
