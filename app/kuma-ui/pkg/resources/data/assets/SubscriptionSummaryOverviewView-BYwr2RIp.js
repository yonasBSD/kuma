import{d as h,r as b,o as n,p as y,w as e,b as p,l as k,Q as d,e as t,t as o,c as u,J as m,K as c,q as f,m as A,au as C,a as I}from"./index-COAz_lIy.js";const N={class:"stack-with-borders"},S={key:1,class:"mt-8 stack-with-borders"},B=h({__name:"SubscriptionSummaryOverviewView",props:{data:{},routeName:{}},setup(w){const r=w;return(v,a)=>{const _=b("XAlert"),g=b("AppView"),z=b("RouteView");return n(),y(z,{name:r.routeName},{default:e(({t:i})=>[p(g,null,{default:e(()=>[k("div",N,[p(d,{layout:"horizontal"},{title:e(()=>[t(o(i("http.api.property.version")),1)]),body:e(()=>{var s,l;return[(n(!0),u(m,null,c([(l=(s=r.data.version)==null?void 0:s.kumaCp)==null?void 0:l.version],V=>(n(),u(m,null,[t(o(V??"-"),1)],64))),256))]}),_:2},1024),a[6]||(a[6]=t()),p(d,{layout:"horizontal"},{title:e(()=>[t(o(i("http.api.property.connectTime")),1)]),body:e(()=>[t(o(i("common.formats.datetime",{value:Date.parse(r.data.connectTime??"")})),1)]),_:2},1024),a[7]||(a[7]=t()),r.data.disconnectTime?(n(),y(d,{key:0,layout:"horizontal"},{title:e(()=>[t(o(i("http.api.property.disconnectTime")),1)]),body:e(()=>[t(o(i("common.formats.datetime",{value:Date.parse(r.data.disconnectTime)})),1)]),_:2},1024)):f("",!0),a[8]||(a[8]=t()),p(d,{layout:"horizontal"},{title:e(()=>[t(o(i("subscriptions.routes.item.headers.responses")),1)]),body:e(()=>{var s;return[(n(!0),u(m,null,c([((s=r.data.status)==null?void 0:s.total)??{}],l=>(n(),u(m,null,[t(o(l.responsesSent)+"/"+o(l.responsesAcknowledged),1)],64))),256))]}),_:2},1024),a[9]||(a[9]=t()),(n(),u(m,null,c(["zoneInstanceId","globalInstanceId","controlPlaneInstanceId"],s=>(n(),u(m,{key:typeof s},[r.data[s]?(n(),y(d,{key:0,layout:"horizontal"},{title:e(()=>[t(o(i(`http.api.property.${s}`)),1)]),body:e(()=>[t(o(r.data[s]),1)]),_:2},1024)):f("",!0)],64))),64)),a[10]||(a[10]=t()),p(d,{layout:"horizontal"},{title:e(()=>[t(o(i("http.api.property.id")),1)]),body:e(()=>[t(o(r.data.id),1)]),_:2},1024)]),a[15]||(a[15]=t()),Object.keys(r.data.status.acknowledgements).length===0?(n(),y(_,{key:0,appearance:"info"},{icon:e(()=>[p(A(C))]),default:e(()=>[t(" "+o(i("common.detail.subscriptions.no_stats",{id:r.data.id})),1)]),_:2},1024)):(n(),u("div",S,[k("div",null,[I(v.$slots,"default")]),a[13]||(a[13]=t()),p(d,{class:"mt-4",layout:"horizontal"},{title:e(()=>[k("strong",null,o(i("subscriptions.routes.item.headers.type")),1)]),body:e(()=>[t(o(i("subscriptions.routes.item.headers.stat")),1)]),_:2},1024),a[14]||(a[14]=t()),(n(!0),u(m,null,c(Object.entries(r.data.status.acknowledgements??{}),([s,l])=>(n(),y(d,{key:s,layout:"horizontal"},{title:e(()=>[t(o(i(`http.api.property.${s}`)),1)]),body:e(()=>[t(o(l.responsesSent)+"/"+o(l.responsesAcknowledged),1)]),_:2},1024))),128))]))]),_:2},1024)]),_:3},8,["name"])}}});export{B as default};