"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5097,56118],{5097:function(a,e,r){r.r(e);var t=r(85893),n=r(56118);e.default=a=>{let{tagOptions:e,currentTag:r}=a;return e?(0,t.jsxs)("div",{id:"tags-group",className:"dark:border-gray-600 py-4",children:[(0,t.jsxs)("div",{className:"mb-2",children:[(0,t.jsx)("i",{className:"mr-2 fas fa-tag"}),"标签"]}),(0,t.jsx)("div",{className:"space-y-2",children:null==e?void 0:e.map(a=>{let e=a.name===r;return(0,t.jsx)(n.default,{tag:a,selected:e},a.name)})})]}):(0,t.jsx)(t.Fragment,{})}},56118:function(a,e,r){r.r(e);var t=r(85893),n=r(41664),s=r.n(n);e.default=a=>{let{tag:e,selected:r=!1}=a;return(0,t.jsx)(s(),{href:r?"/":"/tag/".concat(encodeURIComponent(e.name)),passHref:!0,className:"cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200\n        mr-2 py-1 px-2 text-xs whitespace-nowrap dark:hover:text-white\n         ".concat(r?"text-white dark:text-gray-300 bg-black dark:bg-black dark:hover:bg-gray-900":"text-gray-600 hover:shadow-xl dark:border-gray-400 notion-".concat(e.color,"_background dark:bg-gray-800")),children:(0,t.jsxs)("div",{className:"font-light dark:text-gray-400",children:[r&&(0,t.jsx)("i",{className:"mr-1 fas fa-tag"})," ",e.name+(e.count?"(".concat(e.count,")"):"")," "]})},e)}}}]);