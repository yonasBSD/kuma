import{d as w,L as z,r as f,o as i,g as p,w as e,h as a,A as v,m as c,ab as g,l as s,D as d,i as o,X as b,a8 as I,j as u,F as h,k as C,_ as x}from"./index-e7632716.js";import{_ as B}from"./SubscriptionList.vue_vue_type_script_setup_true_lang-59a3aa17.js";import{g as V}from"./dataplane-30467516.js";import"./AccordionList-5cafc925.js";const $={class:"stack","data-testid":"detail-view-details"},A={class:"columns",style:{"--columns":"3"}},D={key:0},T=w({__name:"ZoneIngressDetailView",props:{data:{}},setup(y){const t=y,{t:r}=z();return(m,N)=>{const _=f("KCard");return i(),p(x,{name:"zone-ingress-detail-view","data-testid":"zone-ingress-detail-view"},{default:e(()=>[a(v,null,{default:e(()=>{var k;return[c("div",$,[a(_,null,{body:e(()=>[c("div",A,[a(g,null,{title:e(()=>[s(d(o(r)("http.api.property.status")),1)]),body:e(()=>[a(b,{status:o(V)(t.data.zoneIngressInsight)},null,8,["status"])]),_:1}),s(),a(g,null,{title:e(()=>[s(d(o(r)("http.api.property.address")),1)]),body:e(()=>{var n,l;return[(n=t.data.zoneIngress.networking)!=null&&n.address&&((l=t.data.zoneIngress.networking)!=null&&l.port)?(i(),p(I,{key:0,text:`${t.data.zoneIngress.networking.address}:${t.data.zoneIngress.networking.port}`},null,8,["text"])):(i(),u(h,{key:1},[s(d(o(r)("common.detail.none")),1)],64))]}),_:1}),s(),a(g,null,{title:e(()=>[s(d(o(r)("http.api.property.advertisedAddress")),1)]),body:e(()=>{var n,l;return[(n=t.data.zoneIngress.networking)!=null&&n.advertisedAddress&&((l=t.data.zoneIngress.networking)!=null&&l.advertisedPort)?(i(),p(I,{key:0,text:`${t.data.zoneIngress.networking.advertisedAddress}:${t.data.zoneIngress.networking.advertisedPort}`},null,8,["text"])):(i(),u(h,{key:1},[s(d(o(r)("common.detail.none")),1)],64))]}),_:1})])]),_:1}),s(),(((k=m.data.zoneIngressInsight)==null?void 0:k.subscriptions)??[]).length>0?(i(),u("div",D,[c("h2",null,d(o(r)("zone-ingresses.detail.subscriptions")),1),s(),a(_,{class:"mt-4"},{body:e(()=>{var n;return[a(B,{subscriptions:((n=m.data.zoneIngressInsight)==null?void 0:n.subscriptions)??[]},null,8,["subscriptions"])]}),_:1})])):C("",!0)])]}),_:1})]),_:1})}}});export{T as default};