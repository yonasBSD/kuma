import{d as p,g as f,o as e,l as i,i as s,w as n,p as _,H as k,k as r,ac as m,E as g,x as v,af as q,F as x,j as o,Y as E,ar as S,K as h,n as u,s as b,t as B}from"./index-21079cd9.js";import{_ as C}from"./CodeBlock.vue_vue_type_style_index_0_lang-fa1bd6d3.js";const I={class:"envoy-data-actions"},N=p({__name:"EnvoyData",props:{status:{type:String,required:!0},resource:{type:String,required:!0},src:{type:String,required:!0},queryKey:{type:String,required:!0}},setup(l){const t=l,{t:y}=f();return(D,K)=>(e(),i("div",null,[t.status!=="online"?(e(),s(r(m),{key:0,appearance:"info"},{alertMessage:n(()=>[_("p",null,k(r(y)("common.detail.no_envoy_data",{resource:t.resource})),1)]),_:1})):(e(),s(b,{key:1,src:t.src},{default:n(({data:a,error:c,refresh:d})=>[c?(e(),s(g,{key:0,error:c},null,8,["error"])):a===void 0?(e(),s(v,{key:1})):a===""?(e(),s(q,{key:2})):(e(),i(x,{key:3},[_("div",I,[o(r(E),{appearance:"primary","data-testid":"envoy-data-refresh-button",onClick:d},{default:n(()=>[o(r(S),{size:r(h)},null,8,["size"]),u(`

            Refresh
          `)]),_:2},1032,["onClick"])]),u(),o(C,{id:"code-block-envoy-data",language:"json",code:typeof a=="string"?a:JSON.stringify(a,null,2),"is-searchable":"","query-key":t.queryKey},null,8,["code","query-key"])],64))]),_:1},8,["src"]))]))}});const j=B(N,[["__scopeId","data-v-faac85b9"]]);export{j as E};