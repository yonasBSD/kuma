import{_ as n}from"./PolicyDetails.vue_vue_type_script_setup_true_lang-013933d5.js";import{f as u,k as _,g as h,_ as y}from"./RouteView.vue_vue_type_script_setup_true_lang-28e29218.js";import{_ as f}from"./RouteTitle.vue_vue_type_script_setup_true_lang-a8ac9aaf.js";import{d,c as b,o as s,a as m,w as i,h as p,b as r,g as P,f as x}from"./index-52119cf8.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-8f27e6ff.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-7a4f8b94.js";import"./kongponents.es-6866aec3.js";import"./ErrorBlock-fa2d4d1f.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-618897f3.js";import"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-804c7a65.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-3c985a9b.js";import"./TextWithCopyButton-3ef5285a.js";import"./toYaml-4e00099e.js";import"./TabsWidget-8341324e.js";import"./QueryParameter-70743f73.js";const E=d({__name:"PolicyDetailView",props:{mesh:{},policyPath:{},policyName:{}},setup(c){const e=c,l=u(),{t:a}=_(),o=b(()=>l.state.policyTypesByPath[e.policyPath]);return(N,k)=>(s(),m(y,{module:"policies"},{default:i(({route:t})=>[p(f,{title:r(a)("policies.routes.item.title",{name:t.params.policy})},null,8,["title"]),P(),p(h,{breadcrumbs:[{to:{name:"policies-list-view",params:{mesh:t.params.mesh,policyPath:t.params.policyPath}},text:r(a)("policies.routes.item.breadcrumbs")}]},{default:i(()=>[o.value?(s(),m(n,{key:0,name:e.policyName,mesh:e.mesh,path:e.policyPath,type:o.value.name},null,8,["name","mesh","path","type"])):x("",!0)]),_:2},1032,["breadcrumbs"])]),_:1}))}});export{E as default};
