import{E as d}from"./EnvoyData-5d7a7a58.js";import{d as m,a as t,o as c,b as u,w as o,e as n,p as _,f as h}from"./index-68e88176.js";import"./index-52545d1d.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-705a141e.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-1359f8f1.js";import"./ErrorBlock-da53de46.js";import"./TextWithCopyButton-319c2206.js";import"./CopyButton-ab771b52.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-a5e56b96.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-809764e3.js";const S=m({__name:"DataPlaneStatsView",setup(g){return(f,x)=>{const s=t("RouteTitle"),r=t("KCard"),p=t("AppView"),i=t("RouteView");return c(),u(i,{name:"data-plane-stats-view",params:{mesh:"",dataPlane:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:o(({route:e,t:l})=>[n(p,null,{title:o(()=>[_("h2",null,[n(s,{title:l("data-planes.routes.item.navigation.data-plane-stats-view")},null,8,["title"])])]),default:o(()=>[h(),n(r,null,{default:o(()=>[n(d,{resource:"Data Plane Proxy",src:`/meshes/${e.params.mesh}/dataplanes/${e.params.dataPlane}/data-path/stats`,query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter==="true","is-reg-exp-mode":e.params.codeRegExp==="true",onQueryChange:a=>e.update({codeSearch:a}),onFilterModeChange:a=>e.update({codeFilter:a}),onRegExpModeChange:a=>e.update({codeRegExp:a})},null,8,["src","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{S as default};