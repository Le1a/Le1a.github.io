"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61519,65685,68596],{31761:function(e,t,r){function l(e,t){if(!e||!t)return e||"";let r=new Date(e).toLocaleDateString(t,{year:"numeric",month:"short",day:"numeric"});return"zh"===t.slice(0,2).toLowerCase()?r.replace("年","-").replace("月","-").replace("日",""):r}function n(e,t){let r=new Date(e),l={"M+":r.getMonth()+1,"d+":r.getDate(),"h+":r.getHours(),"m+":r.getMinutes(),"s+":r.getSeconds(),"q+":Math.floor((r.getMonth()+3)/3),S:r.getMilliseconds()};for(let e in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(r.getFullYear()+"").substr(4-RegExp.$1.length))),l)RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?l[e]:("00"+l[e]).substr((""+l[e]).length)));return t.trim()}r.d(t,{Z:function(){return l},x:function(){return n}})},65685:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var l=r(85893),n=r(41664),a=r.n(n);function s(e){let{selected:t,category:r,categoryCount:n}=e;return(0,l.jsx)(a(),{href:"/category/".concat(r),passHref:!0,className:(t?"bg-gray-600 text-white ":"dark:text-gray-400 text-gray-900 ")+"text-sm font-semibold hover:underline flex text-md items-center duration-300 cursor-pointer py-1 whitespace-nowrap",children:(0,l.jsxs)("div",{children:[r," ",n&&"(".concat(n,")")]})})}},68596:function(e,t,r){r.r(t);var l=r(85893),n=r(27134),a=r(67968),s=r(69325),c=r(93348),o=r(31761),i=r(41664),u=r.n(i),h=r(65685);t.default=e=>{let{post:t}=e,{siteInfo:r}=(0,c.O)(),i=(null==t?void 0:t.pageCoverThumbnail)||(null==r?void 0:r.pageCover);return(0,l.jsx)("div",{className:"mb-6 max-w-screen-3xl",children:(0,l.jsxs)("div",{className:"flex flex-col space-y-3",children:[(0,s.JA)("MAGZINE_POST_LIST_COVER")&&(0,l.jsx)(u(),{href:null==t?void 0:t.href,passHref:!0,className:"cursor-pointer hover:underline leading-tight text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400",children:(0,l.jsx)("div",{className:"w-full h-40 aspect-video overflow-hidden mb-2",children:(0,l.jsx)(n.Z,{alt:null==t?void 0:t.title,src:i,style:i?{}:{height:"0px"},className:"w-full h-40 aspect-video object-cover"})})}),(0,s.JA)("MAGZINE_POST_LIST_CATEGORY")&&(0,l.jsx)(h.default,{category:t.category}),(0,l.jsx)(u(),{href:null==t?void 0:t.href,passHref:!0,className:"text-xl cursor-pointer hover:underline leading-tight text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400",children:(0,l.jsxs)("h2",{children:[(0,s.JA)("POST_TITLE_ICON")&&(0,l.jsx)(a.Z,{icon:t.pageIcon}),t.title]})}),(0,l.jsx)("div",{className:"text-sm",children:(0,o.x)(t.publishDate,"yyyy-MM")})]})},t.id)}},61519:function(e,t,r){r.r(t);var l=r(85893),n=r(67294),a=r(68596);t.default=e=>{let{posts:t}=e,[r,s]=(0,n.useState)(0),c=(0,n.useRef)(null),o=(0,n.useRef)({x:0,y:0}),i=(0,n.useRef)({x:0,y:0}),u=(0,n.useRef)(!1),h=()=>{let e=0===r?t.length-1:r-1;s(e),x(e)},d=()=>{let e=r===t.length-1?0:r+1;s(e),x(e)},x=e=>{let r=c.current;if(!r)return;let l=r.scrollWidth/t.length;r.scrollTo({left:e*l,behavior:"smooth"})},g=e=>{s(e),x(e)};return(0,l.jsxs)("div",{className:"relative w-full mx-auto",children:[(0,l.jsx)("div",{className:"absolute inset-y-0 left-0 w-1/6 z-10 cursor-move bg-black hover:opacity-10 opacity-0 duration-100",onClick:h}),(0,l.jsx)("div",{className:"absolute inset-y-0 right-0 w-1/6 z-10 cursor-move bg-black hover:opacity-10 opacity-0 duration-100",onClick:d}),(0,l.jsx)("div",{ref:c,className:"relative w-full overflow-x-scroll scroll-smooth py-4",onTouchStart:e=>{o.current={x:e.touches[0].clientX,y:e.touches[0].clientY},u.current=!1},onTouchMove:e=>{let t=e.touches[0],r=t.clientX-o.current.x,l=t.clientY-o.current.y;u.current||(u.current=Math.abs(r)>Math.abs(l)),u.current&&e.preventDefault()},onTouchEnd:e=>{if(u.current){i.current={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY};let t=i.current.x-o.current.x;t>50?h():t<-50?d():x(r)}},style:{WebkitOverflowScrolling:"touch"},children:(0,l.jsx)("div",{className:"flex gap-x-4",children:t.map((e,t)=>(0,l.jsx)("div",{className:"w-5/6 flex-shrink-0",children:(0,l.jsx)(a.default,{post:e},t)},t))})}),(0,l.jsx)("div",{className:"absolute bottom-0 left-0 right-0 flex justify-center space-x-2",children:t.map((e,t)=>(0,l.jsx)("button",{onClick:()=>g(t),className:"w-3 h-3 rounded-full ".concat(r===t?"bg-black dark:bg-white":"bg-gray-300 dark:bg-gray-700")},t))})]})}}}]);