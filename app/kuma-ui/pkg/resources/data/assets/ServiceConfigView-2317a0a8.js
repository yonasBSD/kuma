import{_ as x}from"./ResourceCodeBlock.vue_vue_type_style_index_0_lang-5c4d11ef.js";import{_ as k}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-3556e308.js";import{E as w}from"./ErrorBlock-eae09ed8.js";import{_ as y}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-6c7e8a5b.js";import{d as R,a as n,o as r,b as s,w as a,e as i,m,f as V,t as E,p as $}from"./index-6594470f.js";import"./CodeBlock-13aedd48.js";import"./uniqueId-90cc9b93.js";import"./CopyButton-60165c43.js";import"./index-fce48c05.js";import"./toYaml-4e00099e.js";import"./TextWithCopyButton-e98ec405.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-9e7cbe5c.js";const H=R({__name:"ServiceConfigView",setup(F){return(B,M)=>{const u=n("RouteTitle"),p=n("DataSource"),f=n("KCard"),g=n("AppView"),h=n("RouteView");return r(),s(h,{name:"service-config-view",params:{mesh:"",service:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:a(({route:e,t:l})=>[i(g,null,{title:a(()=>[m("h2",null,[i(u,{title:l("services.routes.item.navigation.service-config-view")},null,8,["title"])])]),default:a(()=>[V(),i(f,null,{default:a(()=>[m("div",null,[i(p,{src:`/meshes/${e.params.mesh}/external-services/for/${e.params.service}`},{default:a(({data:t,error:d})=>[d?(r(),s(w,{key:0,error:d},null,8,["error"])):t===void 0?(r(),s(y,{key:1})):t===null?(r(),s(k,{key:2,"data-testid":"no-matching-external-service"},{title:a(()=>[m("p",null,E(l("services.detail.no_matching_external_service",{name:e.params.service})),1)]),_:2},1024)):(r(),s(x,{key:3,resource:t.config,"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},{default:a(({copy:o,copying:C})=>[C?(r(),s(p,{key:0,src:`/meshes/${t.mesh}/external-service/${t.name}/as/kubernetes?no-store`,onChange:c=>{o(_=>_(c))},onError:c=>{o((_,v)=>v(c))}},null,8,["src","onChange","onError"])):$("",!0)]),_:2},1032,["resource","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"]))]),_:2},1032,["src"])])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{H as default};
