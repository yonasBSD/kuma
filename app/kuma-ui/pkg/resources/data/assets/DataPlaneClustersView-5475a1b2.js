import{E as m}from"./EnvoyData-91a6edce.js";import{d as i,a,o as u,b as d,w as t,e as o,p as _,f as h}from"./index-fd2e4828.js";import"./index-52545d1d.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-ac46e899.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-5f10a138.js";import"./ErrorBlock-9f5a5ce4.js";import"./TextWithCopyButton-28771915.js";import"./CopyButton-8619cafb.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-6a7f9494.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-53d7167c.js";const S=i({__name:"DataPlaneClustersView",setup(w){return(f,C)=>{const n=a("RouteTitle"),r=a("KCard"),s=a("AppView"),p=a("RouteView");return u(),d(p,{name:"data-plane-clusters-view",params:{mesh:"",dataPlane:"",codeSearch:""}},{default:t(({route:e,t:l})=>[o(s,null,{title:t(()=>[_("h2",null,[o(n,{title:l("data-planes.routes.item.navigation.data-plane-clusters-view")},null,8,["title"])])]),default:t(()=>[h(),o(r,null,{body:t(()=>[o(m,{resource:"Data Plane Proxy",src:`/meshes/${e.params.mesh}/dataplanes/${e.params.dataPlane}/data-path/clusters`,query:e.params.codeSearch,onQueryChange:c=>e.update({codeSearch:c})},null,8,["src","query","onQueryChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{S as default};