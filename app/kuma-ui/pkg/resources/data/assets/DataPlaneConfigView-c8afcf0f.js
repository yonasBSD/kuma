import{_ as x}from"./ResourceCodeBlock.vue_vue_type_style_index_0_lang-5c4d11ef.js";import{E as w}from"./ErrorBlock-eae09ed8.js";import{_ as E}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-6c7e8a5b.js";import{d as R,a as t,o as n,b as r,w as o,e as s,m as V,f as k,p as y}from"./index-6594470f.js";import"./CodeBlock-13aedd48.js";import"./uniqueId-90cc9b93.js";import"./CopyButton-60165c43.js";import"./index-fce48c05.js";import"./toYaml-4e00099e.js";import"./TextWithCopyButton-e98ec405.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-9e7cbe5c.js";const Q=R({__name:"DataPlaneConfigView",setup(v){return($,F)=>{const d=t("RouteTitle"),c=t("DataSource"),_=t("KCard"),u=t("AppView"),f=t("RouteView");return n(),r(f,{name:"data-plane-config-view",params:{mesh:"",dataPlane:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:o(({route:e,t:g})=>[s(u,null,{title:o(()=>[V("h2",null,[s(d,{title:g("data-planes.routes.item.navigation.data-plane-config-view")},null,8,["title"])])]),default:o(()=>[k(),s(_,null,{default:o(()=>[s(c,{src:`/meshes/${e.params.mesh}/dataplanes/${e.params.dataPlane}`},{default:o(({data:i,error:m})=>[m?(n(),r(w,{key:0,error:m},null,8,["error"])):i===void 0?(n(),r(E,{key:1})):(n(),r(x,{key:2,resource:i.config,"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:a=>e.update({codeSearch:a}),onFilterModeChange:a=>e.update({codeFilter:a}),onRegExpModeChange:a=>e.update({codeRegExp:a})},{default:o(({copy:a,copying:h})=>[h?(n(),r(c,{key:0,src:`/meshes/${e.params.mesh}/dataplanes/${e.params.dataPlane}/as/kubernetes?no-store`,onChange:p=>{a(l=>l(p))},onError:p=>{a((l,C)=>C(p))}},null,8,["src","onChange","onError"])):y("",!0)]),_:2},1032,["resource","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"]))]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{Q as default};
