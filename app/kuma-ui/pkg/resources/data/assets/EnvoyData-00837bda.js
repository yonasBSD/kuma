import{K as g}from"./index-52545d1d.js";import{d as v,a as x,o as a,c,e as n,w as d,b as i,F as k,p as E,q as m,ar as h,f as p,as as B,_ as C}from"./index-6d2dc803.js";import{_ as q}from"./CodeBlock.vue_vue_type_style_index_0_lang-d187b12c.js";import{_ as M}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-bb804fa6.js";import{E as F}from"./ErrorBlock-fb329d86.js";import{_ as N}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-aa1d93c7.js";const b={class:"envoy-data-actions"},I=v({__name:"EnvoyData",props:{resource:{},src:{},query:{default:""},isFilterMode:{type:Boolean,default:!1},isRegExpMode:{type:Boolean,default:!1}},emits:["query-change","filter-mode-change","reg-exp-mode-change"],setup(_,{emit:f}){const t=_,r=f;return(K,e)=>{const u=x("KButton");return a(),c("div",null,[n(B,{src:t.src},{default:d(({data:o,error:l,refresh:y})=>[l?(a(),i(F,{key:0,error:l},null,8,["error"])):o===void 0?(a(),i(N,{key:1})):o===""?(a(),i(M,{key:2})):(a(),c(k,{key:3},[E("div",b,[n(u,{appearance:"primary","data-testid":"envoy-data-refresh-button",onClick:y},{default:d(()=>[n(m(h),{size:m(g)},null,8,["size"]),p(`

            Refresh
          `)]),_:2},1032,["onClick"])]),p(),n(q,{id:"code-block-envoy-data",language:"json",code:typeof o=="string"?o:JSON.stringify(o,null,2),"is-searchable":"",query:t.query,"is-filter-mode":t.isFilterMode,"is-reg-exp-mode":t.isRegExpMode,onQueryChange:e[0]||(e[0]=s=>r("query-change",s)),onFilterModeChange:e[1]||(e[1]=s=>r("filter-mode-change",s)),onRegExpModeChange:e[2]||(e[2]=s=>r("reg-exp-mode-change",s))},null,8,["code","query","is-filter-mode","is-reg-exp-mode"])],64))]),_:1},8,["src"])])}}});const O=C(I,[["__scopeId","data-v-7104992e"]]);export{O as E};