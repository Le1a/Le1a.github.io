"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[24450,28621,40931],{28621:function(e,t,l){l.r(t);var n=l(85893),a=l(93348),i=l(93096),s=l.n(i),r=l(58622),d=l(67294),o=l(40931);t.default=e=>{let{toc:t}=e,{locale:l}=(0,a.O)();(0,d.useEffect)(()=>(window.addEventListener("scroll",m),m(),()=>{window.removeEventListener("scroll",m)}),[]);let i=(0,d.useRef)(null),c=[],[u,h]=(0,d.useState)(null),m=(0,d.useCallback)(s()(()=>{var e;let t=document.getElementsByClassName("notion-h"),l=null,n=u;for(let e=0;e<t.length;++e){let a=t[e];if(!a||!(a instanceof Element))continue;n||(n=a.getAttribute("data-id"));let i=a.getBoundingClientRect(),s=Math.max(150,(l?i.top-l.bottom:0)/4);if(i.top-s<0){n=a.getAttribute("data-id"),l=i;continue}break}h(n);let a=c.indexOf(n)||0;null==i||null===(e=i.current)||void 0===e||e.scrollTo({top:28*a,behavior:"smooth"})},200));return!t||t.length<1?(0,n.jsx)(n.Fragment,{}):(0,n.jsxs)("div",{className:"px-3 ",children:[(0,n.jsxs)("div",{className:"dark:text-white",children:[(0,n.jsx)("i",{className:"mr-1 fas fa-stream"}),l.COMMON.TABLE_OF_CONTENTS]}),(0,n.jsx)("div",{className:"w-full py-3",children:(0,n.jsx)(o.default,{})}),(0,n.jsx)("div",{className:"overflow-y-auto overscroll-none max-h-36 lg:max-h-96 scroll-hidden",ref:i,children:(0,n.jsx)("nav",{className:"h-full  text-black",children:t.map(e=>{let t=(0,r.Gw)(e.id);return c.push(t),(0,n.jsx)("a",{href:"#".concat(t),className:"notion-table-of-contents-item duration-300 transform font-light dark:text-gray-200\n            notion-table-of-contents-item-indent-level-".concat(e.indentLevel," catalog-item "),children:(0,n.jsx)("span",{style:{display:"inline-block",marginLeft:16*e.indentLevel},className:"truncate ".concat(u===t?"font-bold text-green-500 underline":""),children:e.text})},t)})})})]})}},40931:function(e,t,l){l.r(t);var n=l(85893),a=l(67294),i=l(78174);t.default=e=>{let{targetRef:t,showPercent:l=!0}=e,s=(null==t?void 0:t.current)||t,[r,d]=(0,a.useState)(0),o=()=>{requestAnimationFrame(()=>{let e=s||i.isBrowser&&document.getElementById("article-wrapper");if(e){let t=e.clientHeight,l=parseFloat((window.pageYOffset/(t-window.outerHeight)*100).toFixed(0));l>100&&(l=100),l<0&&(l=0),d(l)}})};return(0,a.useEffect)(()=>(document.addEventListener("scroll",o),()=>document.removeEventListener("scroll",o)),[]),(0,n.jsx)("div",{className:"h-4 w-full shadow-2xl bg-gray-400 ",children:(0,n.jsx)("div",{className:"h-4 bg-indigo-400 duration-200",style:{width:"".concat(r,"%")},children:l&&(0,n.jsxs)("div",{className:"text-right text-white text-xs",children:[r,"%"]})})})}},24450:function(e,t,l){l.r(t);var n=l(85893),a=l(28621),i=l(67294);t.default=e=>{let{post:t,cRef:l}=e;(0,i.useImperativeHandle)(l,()=>({handleSwitchVisible:()=>d()}));let[s,r]=(0,i.useState)(!1),d=()=>{r(!s)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"fixed top-0 right-0 z-40 ",children:(0,n.jsx)("div",{className:(s?"animate__slideInRight ":" -mr-72 animate__slideOutRight")+" shadow-card animate__animated animate__faster w-60 duration-200 fixed right-12 bottom-12 rounded py-2 bg-white dark:bg-gray-600",children:t&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"dark:text-gray-400 text-gray-600",children:(0,n.jsx)(a.default,{toc:t.toc})})})})}),(0,n.jsx)("div",{id:"right-drawer-background",className:(s?"block":"hidden")+" fixed top-0 left-0 z-30 w-full h-full",onClick:d})]})}}}]);