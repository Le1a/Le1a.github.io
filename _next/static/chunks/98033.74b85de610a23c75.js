"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98033,56395],{98033:function(e,t,l){l.r(t);var n=l(85893),a=l(93096),s=l.n(a),i=l(58622),r=l(67294),o=l(56395);t.default=e=>{let{toc:t}=e,l=[],a=(0,r.useRef)(null),[c,d]=(0,r.useState)(null);(0,r.useEffect)(()=>(window.addEventListener("scroll",u),u(),()=>{window.removeEventListener("scroll",u)}),[]);let u=(0,r.useCallback)(s()(()=>{var e;let t=document.getElementsByClassName("notion-h"),n=null,s=c;for(let e=0;e<t.length;++e){let l=t[e];if(!l||!(l instanceof Element))continue;s||(s=l.getAttribute("data-id"));let a=l.getBoundingClientRect(),i=Math.max(150,(n?a.top-n.bottom:0)/4);if(a.top-i<0){s=l.getAttribute("data-id"),n=a;continue}break}d(s);let i=l.indexOf(s)||0;null==a||null===(e=a.current)||void 0===e||e.scrollTo({top:28*i,behavior:"smooth"})},200));return!t||t.length<1?(0,n.jsx)(n.Fragment,{}):(0,n.jsxs)("div",{className:"px-3",children:[(0,n.jsx)("div",{className:"w-full mt-2 mb-4",children:(0,n.jsx)(o.default,{})}),(0,n.jsx)("div",{className:"overflow-y-auto max-h-44 overscroll-none scroll-hidden",ref:a,children:(0,n.jsx)("nav",{className:"h-full  text-black",children:t.map(e=>{let t=(0,i.Gw)(e.id);return l.push(t),(0,n.jsx)("a",{href:"#".concat(t),className:"notion-table-of-contents-item duration-300 transform font-light dark:text-gray-300\n              notion-table-of-contents-item-indent-level-".concat(e.indentLevel," catalog-item "),children:(0,n.jsx)("span",{style:{display:"inline-block",marginLeft:16*e.indentLevel},className:"truncate ".concat(c===t?"font-bold text-green-500 underline":""),children:e.text})},t)})})})]})}},56395:function(e,t,l){l.r(t);var n=l(85893),a=l(67294),s=l(78174);t.default=e=>{let{targetRef:t,showPercent:l=!0}=e,i=(null==t?void 0:t.current)||t,[r,o]=(0,a.useState)(0),c=()=>{let e=i||s.isBrowser&&document.getElementById("article-wrapper");if(e){let t=e.clientHeight,l=parseFloat((window.pageYOffset/(t-window.outerHeight)*100).toFixed(0));l>100&&(l=100),l<0&&(l=0),o(l)}};return(0,a.useEffect)(()=>(document.addEventListener("scroll",c),()=>document.removeEventListener("scroll",c)),[]),(0,n.jsx)("div",{className:"h-4 w-full shadow-2xl bg-hexo-light-gray dark:bg-black",children:(0,n.jsx)("div",{className:"h-4 bg-gray-600 duration-200",style:{width:"".concat(r,"%")},children:l&&(0,n.jsxs)("div",{className:"text-right text-white text-xs",children:[r,"%"]})})})}}}]);