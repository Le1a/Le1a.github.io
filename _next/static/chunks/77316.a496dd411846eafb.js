"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[77316],{77316:function(e,t,l){l.r(t);var n=l(85893),o=l(78174),r=l(93096),a=l.n(r),i=l(58622),s=l(67294);t.default=e=>{let{post:t}=e,l=null==t?void 0:t.toc,[r,c]=(0,s.useState)(null);(0,s.useEffect)(()=>(window.addEventListener("scroll",d),d(),()=>{window.removeEventListener("scroll",d)}),[t]);let d=(0,s.useCallback)(a()(()=>{var e,l;let n=document.getElementsByClassName("notion-h"),r=null,a=null;for(let e=0;e<n.length;++e){let t=n[e];if(!t||!(t instanceof Element))continue;a||(a=t.getAttribute("data-id"));let l=t.getBoundingClientRect(),o=Math.max(150,(r?l.top-r.bottom:0)/4);if(l.top-o<0){a=t.getAttribute("data-id"),r=l;continue}break}c(a);let s=(null==t?void 0:null===(e=t.toc)||void 0===e?void 0:e.map(e=>(0,i.Gw)(e.id)))||[],d=s.indexOf(a)||0;if(o.isBrowser&&(null==s?void 0:s.length)>0)for(let e of null===(l=document)||void 0===l?void 0:l.getElementsByClassName("toc-wrapper"))null==e||e.scrollTo({top:28*d,behavior:"smooth"})},200));return!l||(null==l?void 0:l.length)<1?(0,n.jsx)(n.Fragment,{}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{id:"toc-wrapper",className:"toc-wrapper overflow-y-auto my-2 max-h-80 overscroll-none scroll-hidden",children:(0,n.jsx)("nav",{className:"h-full text-black",children:null==l?void 0:l.map(e=>{let t=(0,i.Gw)(e.id);return(0,n.jsx)("a",{href:"#".concat(t),className:"".concat(r===t&&"border-green-500 text-green-500 font-bold"," border-l pl-4 block hover:text-green-500 border-lduration-300 transform font-light dark:text-gray-300\n              notion-table-of-contents-item-indent-level-").concat(e.indentLevel," catalog-item "),children:(0,n.jsx)("span",{style:{display:"inline-block",marginLeft:16*e.indentLevel},className:"truncate",children:e.text})},t)})})})})}}}]);