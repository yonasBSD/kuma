import{K as C}from"./index-fce48c05.js";import{d as x,a as t,o as s,b as r,w as o,e as n,m as i,f as m,l,a0 as y}from"./index-6594470f.js";import{C as R}from"./CodeBlock-13aedd48.js";import{E as k}from"./ErrorBlock-eae09ed8.js";import{_ as S}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-6c7e8a5b.js";import"./uniqueId-90cc9b93.js";import"./TextWithCopyButton-e98ec405.js";import"./CopyButton-60165c43.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-9e7cbe5c.js";const I=x({__name:"DataPlaneOutboundSummaryStatsView",setup(w){return(E,V)=>{const d=t("RouteTitle"),_=t("KButton"),u=t("DataSource"),f=t("AppView"),h=t("RouteView");return s(),r(h,{params:{codeSearch:"",codeFilter:!1,codeRegExp:!1,mesh:"",dataPlane:"",service:""},name:"data-plane-outbound-summary-stats-view"},{default:o(({route:e})=>[n(f,null,{title:o(()=>[i("h3",null,[n(d,{title:"Stats"})])]),default:o(()=>[m(),i("div",null,[n(u,{src:`/meshes/${e.params.mesh}/dataplanes/${e.params.dataPlane}/data-path/stats`},{default:o(({data:p,error:c,refresh:g})=>[c?(s(),r(k,{key:0,error:c},null,8,["error"])):p===void 0?(s(),r(S,{key:1})):(s(),r(R,{key:2,language:"json",code:(()=>`${p.split(`
`).filter(a=>a.includes(`.${e.params.service}.`)).map(a=>a.replace(`${e.params.service}.`,"")).join(`
`)}`)(),"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:a=>e.update({codeSearch:a}),onFilterModeChange:a=>e.update({codeFilter:a}),onRegExpModeChange:a=>e.update({codeRegExp:a})},{"primary-actions":o(()=>[n(_,{appearance:"primary",onClick:g},{default:o(()=>[n(l(y),{size:l(C)},null,8,["size"]),m(`
                Refresh
              `)]),_:2},1032,["onClick"])]),_:2},1032,["code","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"]))]),_:2},1032,["src"])])]),_:2},1024)]),_:1})}}});export{I as default};
