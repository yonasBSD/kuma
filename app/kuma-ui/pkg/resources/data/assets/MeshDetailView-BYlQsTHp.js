import{$}from"./app-layout.es-CM3zygHg.js";import{d as E,e as u,o as n,m as p,w as s,a,b as t,l as v,C as b,c as _,H as h,J as y,T as P,k as f,R as g,t as m,U as w,p as B,q as S}from"./index-COT-_p62.js";import{_ as K}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-CJpEpjzv.js";const j=["innerHTML"],q=["innerHTML"],F={class:"stack"},I={class:"columns"},J={class:"stack"},O={class:"columns"},U=E({__name:"MeshDetailView",props:{mesh:{}},setup(D){const i=D;return(x,z)=>{const R=u("RouteTitle"),A=u("XAction"),T=u("XBadge"),H=u("KCard"),C=u("DataSource"),L=u("AppView"),N=u("RouteView");return n(),p(N,{name:"mesh-detail-view",params:{mesh:""}},{default:s(({route:k,t:o,uri:M})=>[a(R,{title:o("meshes.routes.overview.title"),render:!1},null,8,["title"]),t(),a(C,{src:M(v(b),"/mesh-insights/:name",{name:k.params.mesh})},{default:s(({data:e})=>[(n(!0),_(h,null,y([["MeshTrafficPermission","TrafficPermission"].reduce((d,r)=>{var l,c;return d+(((c=(l=e==null?void 0:e.policies)==null?void 0:l[r])==null?void 0:c.total)??0)},0)===0],d=>(n(),p(L,{key:d,docs:o("meshes.href.docs")},P({default:s(()=>[t(),f("div",F,[a(v($),{title:o("meshes.routes.item.subtitle",{name:i.mesh.name}),created:o("common.formats.datetime",{value:Date.parse(i.mesh.creationTime)}),modified:o("common.formats.datetime",{value:Date.parse(i.mesh.modificationTime)})},{default:s(()=>[f("div",I,[(n(),_(h,null,y(["MeshTrafficPermission","MeshMetric","MeshAccessLog","MeshTrace"],r=>(n(),_(h,{key:r},[(n(!0),_(h,null,y([Object.entries((e==null?void 0:e.policies)??{}).find(([l,c])=>l===r)],l=>(n(),p(g,{key:l},{title:s(()=>[a(A,{to:{name:"policy-list-view",params:{mesh:k.params.mesh,policyPath:`${r.toLowerCase()}s`}}},{default:s(()=>[t(m(r),1)]),_:2},1032,["to"])]),body:s(()=>[a(T,{appearance:"neutral"},{default:s(()=>[t(m(o(l?"meshes.detail.enabled":"meshes.detail.disabled")),1)]),_:2},1024)]),_:2},1024))),128))],64))),64))])]),_:2},1032,["title","created","modified"]),t(),a(H,null,{default:s(()=>[f("div",J,[f("div",O,[a(w,{total:(e==null?void 0:e.services.total)??0,"data-testid":"services-status"},{title:s(()=>[t(m(o("meshes.detail.services")),1)]),_:2},1032,["total"]),t(),a(w,{total:(e==null?void 0:e.dataplanesByType.standard.total)??0,online:(e==null?void 0:e.dataplanesByType.standard.online)??0,"data-testid":"data-plane-proxies-status"},{title:s(()=>[t(m(o("meshes.detail.data_plane_proxies")),1)]),_:2},1032,["total","online"]),t(),a(w,{total:(e==null?void 0:e.totalPolicyCount)??0,"data-testid":"policies-status"},{title:s(()=>[t(m(o("meshes.detail.policies")),1)]),_:2},1032,["total"]),t(),a(g,null,{title:s(()=>[t(m(o("http.api.property.mtls")),1)]),body:s(()=>[i.mesh.mtlsBackend?(n(),_(h,{key:1},[t(m(i.mesh.mtlsBackend.type)+" / "+m(i.mesh.mtlsBackend.name),1)],64)):(n(),p(T,{key:0,appearance:"neutral"},{default:s(()=>[t(m(o("meshes.detail.disabled")),1)]),_:2},1024))]),_:2},1024)])])]),_:2},1024),t(),a(K,{resource:x.mesh.config},{default:s(({copy:r,copying:l})=>[l?(n(),p(C,{key:0,src:M(v(b),"/meshes/:name/as/kubernetes",{name:k.params.mesh},{cacheControl:"no-store"}),onChange:c=>{r(V=>V(c))},onError:c=>{r((V,X)=>X(c))}},null,8,["src","onChange","onError"])):B("",!0)]),_:2},1032,["resource"])])]),_:2},[!i.mesh.mtlsBackend||d?{name:"notifications",fn:s(()=>[f("ul",null,[i.mesh.mtlsBackend?B("",!0):(n(),_("li",{key:0,innerHTML:o("meshes.routes.item.mtls-warning")},null,8,j)),t(),i.mesh.mtlsBackend&&d?(n(),_("li",{key:1,innerHTML:o("meshes.routes.item.mtp-warning")},null,8,q)):B("",!0)])]),key:"0"}:void 0]),1032,["docs"]))),128))]),_:2},1032,["src"])]),_:1})}}}),Y=S(U,[["__scopeId","data-v-069bff49"]]);export{Y as default};