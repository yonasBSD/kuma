import{_ as E}from"./ResourceCodeBlock.vue_vue_type_style_index_0_lang-5c4d11ef.js";import{E as x}from"./ErrorBlock-eae09ed8.js";import{_ as w}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-6c7e8a5b.js";import{d as R,a as s,o as n,b as a,w as r,e as t,m as V,f as k,p as z}from"./index-6594470f.js";import"./CodeBlock-13aedd48.js";import"./uniqueId-90cc9b93.js";import"./CopyButton-60165c43.js";import"./index-fce48c05.js";import"./toYaml-4e00099e.js";import"./TextWithCopyButton-e98ec405.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-9e7cbe5c.js";const Q=R({__name:"ZoneEgressConfigView",setup(v){return(y,F)=>{const d=s("RouteTitle"),c=s("DataSource"),_=s("KCard"),g=s("AppView"),u=s("RouteView");return n(),a(u,{name:"zone-egress-config-view",params:{zoneEgress:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:r(({route:e,t:f})=>[t(g,null,{title:r(()=>[V("h2",null,[t(d,{title:f("zone-egresses.routes.item.navigation.zone-egress-config-view")},null,8,["title"])])]),default:r(()=>[k(),t(_,null,{default:r(()=>[t(c,{src:`/zone-egresses/${e.params.zoneEgress}`},{default:r(({data:p,error:m})=>[m!==void 0?(n(),a(x,{key:0,error:m},null,8,["error"])):p===void 0?(n(),a(w,{key:1})):(n(),a(E,{key:2,resource:p.config,"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},{default:r(({copy:o,copying:h})=>[h?(n(),a(c,{key:0,src:`/zone-egresses/${e.params.zoneEgress}/as/kubernetes?no-store`,onChange:i=>{o(l=>l(i))},onError:i=>{o((l,C)=>C(i))}},null,8,["src","onChange","onError"])):z("",!0)]),_:2},1032,["resource","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"]))]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{Q as default};
