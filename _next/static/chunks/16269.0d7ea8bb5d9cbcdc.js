"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16269,46695,38377],{46695:function(e,t,l){l.r(t);var n=l(85893),a=l(67294),i=l(78174);t.default=e=>{let{targetRef:t,showPercent:l=!0}=e,r=(null==t?void 0:t.current)||t,[s,d]=(0,a.useState)(0),o=()=>{let e=r||i.isBrowser&&document.getElementById("article-wrapper");if(e){let t=e.clientHeight,l=parseFloat((window.pageYOffset/(t-window.outerHeight)*100).toFixed(0));l>100&&(l=100),l<0&&(l=0),d(l)}};return(0,a.useEffect)(()=>(document.addEventListener("scroll",o),()=>document.removeEventListener("scroll",o)),[]),(0,n.jsx)("div",{className:"h-4 w-full shadow-2xl bg-gray-400 ",children:(0,n.jsx)("div",{className:"h-4 bg-gray-600 duration-200",style:{width:"".concat(s,"%")},children:l&&(0,n.jsxs)("div",{className:"text-right text-white text-xs",children:[s,"%"]})})})}},38377:function(e,t,l){l.r(t);var n=l(85893),a=l(93096),i=l.n(a),r=l(58622),s=l(67294),d=l(46695);t.default=e=>{let{toc:t}=e;(0,s.useEffect)(()=>(window.addEventListener("scroll",u),u(),()=>{window.removeEventListener("scroll",u)}),[]);let l=(0,s.useRef)(null),a=[],[o,c]=(0,s.useState)(null),u=(0,s.useCallback)(i()(()=>{var e;let t=document.getElementsByClassName("notion-h"),n=null,i=o;for(let e=0;e<t.length;++e){let l=t[e];if(!l||!(l instanceof Element))continue;i||(i=l.getAttribute("data-id"));let a=l.getBoundingClientRect(),r=Math.max(150,(n?a.top-n.bottom:0)/4);if(a.top-r<0){i=l.getAttribute("data-id"),n=a;continue}break}c(i);let r=a.indexOf(i)||0;null==l||null===(e=l.current)||void 0===e||e.scrollTo({top:28*r,behavior:"smooth"})},200));return!t||t.length<1?(0,n.jsx)(n.Fragment,{}):(0,n.jsxs)("div",{className:"px-3",children:[(0,n.jsx)("div",{className:"w-full pb-1",children:(0,n.jsx)(d.default,{})}),(0,n.jsx)("div",{className:"overflow-y-auto max-h-96 overscroll-none scroll-hidden",ref:l,children:(0,n.jsx)("nav",{className:"h-full  text-black dark:text-gray-300",children:t.map(e=>{let t=(0,r.Gw)(e.id);return a.push(t),(0,n.jsx)("a",{href:"#".concat(t),className:"notion-table-of-contents-item duration-300 transform font-light\n              notion-table-of-contents-item-indent-level-".concat(e.indentLevel," catalog-item "),children:(0,n.jsx)("span",{style:{display:"inline-block",marginLeft:16*e.indentLevel},className:"truncate ".concat(o===t?" font-bold text-red-400 underline":""),children:e.text})},t)})})})]})}},16269:function(e,t,l){l.r(t);var n=l(85893),a=l(38377),i=l(67294),r=l(93348);t.default=e=>{let{post:t,cRef:l}=e;(0,i.useImperativeHandle)(l,()=>({handleSwitchVisible:()=>o()}));let[s,d]=(0,i.useState)(!1),o=()=>{d(!s)},{locale:c}=(0,r.O)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"fixed top-0 right-0 z-40 ",children:(0,n.jsx)("div",{className:(s?"animate__slideInRight ":" -mr-72 animate__slideOutRight")+" shadow-card animate__animated animate__faster  w-60 duration-200 fixed right-4 top-16 rounded py-2 bg-white dark:bg-gray-600",children:t&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"font-bold pb-2 text-center text-black dark:text-white ",children:c.COMMON.TABLE_OF_CONTENTS}),(0,n.jsx)("div",{className:"dark:text-gray-400 text-gray-600 dark:bg-gray-800",children:(0,n.jsx)(a.default,{toc:t.toc})})]})})}),(0,n.jsx)("div",{id:"right-drawer-background",className:(s?"block":"hidden")+" fixed top-0 left-0 z-30 w-full h-full",onClick:o})]})}}}]);