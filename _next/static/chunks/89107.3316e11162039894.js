"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[89107,31214,80248],{31214:function(e,t,a){a.r(t);var r=a(85893),n=a(11163),l=a(93348),c=a(67294);let o=!1;t.default=e=>{let{tag:t,keyword:a,cRef:s}=e,{locale:u}=(0,l.O)(),i=(0,n.useRouter)(),d=(0,c.useRef)(null);(0,c.useImperativeHandle)(s,()=>({focus:()=>{var e;null==d||null===(e=d.current)||void 0===e||e.focus()}}));let f=()=>{let e=d.current.value;e&&""!==e?i.push({pathname:"/search/"+e}).then(e=>{}):i.push({pathname:"/"}).then(e=>{})},m=()=>{d.current.value="",p(!1)};function h(){o=!0}let[g,p]=(0,c.useState)(!1),x=e=>{o||(d.current.value=e,e?p(!0):p(!1))};return(0,r.jsxs)("section",{className:"flex w-full bg-gray-100",children:[(0,r.jsx)("input",{ref:d,type:"text",placeholder:t?"".concat(u.SEARCH.TAGS," #").concat(t):"".concat(u.SEARCH.ARTICLES),className:"outline-none w-full text-sm pl-4 transition focus:shadow-lg font-light leading-10 text-black bg-gray-100 dark:bg-gray-900 dark:text-white",onKeyUp:e=>{13===e.keyCode?f(d.current.value):27===e.keyCode&&m()},onCompositionStart:h,onCompositionUpdate:h,onCompositionEnd:function(){o=!1},onChange:e=>x(e.target.value),defaultValue:a||""}),(0,r.jsx)("div",{className:"-ml-8 cursor-pointer float-right items-center justify-center py-2",onClick:f,children:(0,r.jsx)("i",{className:"hover:text-black transform duration-200  text-gray-500 cursor-pointer fas fa-search"})}),g&&(0,r.jsx)("div",{className:"-ml-12 cursor-pointer dark:bg-gray-600 dark:hover:bg-gray-800 float-right items-center justify-center py-2",children:(0,r.jsx)("i",{className:"hover:text-black transform duration-200 text-gray-400 cursor-pointer fas fa-times",onClick:m})})]})}},89107:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var r=a(85893),n=a(31214),l=a(80248);function c(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"pb-12",children:(0,r.jsx)(n.default,{...e})}),(0,r.jsx)(l.default,{...e})]})}},80248:function(e,t,a){a.r(t);var r=a(85893),n=a(41664),l=a.n(n);t.default=e=>{let{tagOptions:t,tag:a}=e;return t?(0,r.jsx)("div",{className:"tag-container",children:(0,r.jsx)("ul",{className:"flex max-w-full mt-4 overflow-x-auto",children:Object.keys(t).map(e=>{let n=t[e],c=n.name===a;return(0,r.jsx)("li",{className:"mr-3 font-medium border whitespace-nowrap dark:text-gray-300 ".concat(c?"text-white bg-black border-black dark:bg-gray-600 dark:border-gray-600":"bg-gray-100 border-gray-100 text-gray-400 dark:bg-night dark:border-gray-800"),children:(0,r.jsx)(l(),{href:c?"/search":"/tag/".concat(encodeURIComponent(n.name)),className:"px-4 py-2 block",children:"".concat(n.name," (").concat(n.count,")")},n.id)},n.id)})})}):null}}}]);