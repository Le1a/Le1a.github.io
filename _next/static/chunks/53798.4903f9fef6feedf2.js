(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[53798,50520,15536,804,48190,34774],{62705:function(e,t,r){var n=r(55639).Symbol;e.exports=n},44239:function(e,t,r){var n=r(62705),a=r(89607),o=r(2333),i=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?a(e):o(e)}},27561:function(e,t,r){var n=r(67990),a=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(a,""):e}},31957:function(e,t,r){var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},89607:function(e,t,r){var n=r(62705),a=Object.prototype,o=a.hasOwnProperty,i=a.toString,l=n?n.toStringTag:void 0;e.exports=function(e){var t=o.call(e,l),r=e[l];try{e[l]=void 0;var n=!0}catch(e){}var a=i.call(e);return n&&(t?e[l]=r:delete e[l]),a}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},55639:function(e,t,r){var n=r(31957),a="object"==typeof self&&self&&self.Object===Object&&self,o=n||a||Function("return this")();e.exports=o},67990:function(e){var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},23279:function(e,t,r){var n=r(13218),a=r(7771),o=r(14841),i=Math.max,l=Math.min;e.exports=function(e,t,r){var s,c,u,d,f,v,x=0,h=!1,p=!1,m=!0;if("function"!=typeof e)throw TypeError("Expected a function");function A(t){var r=s,n=c;return s=c=void 0,x=t,d=e.apply(n,r)}function g(e){var r=e-v,n=e-x;return void 0===v||r>=t||r<0||p&&n>=u}function b(){var e,r,n,o=a();if(g(o))return y(o);f=setTimeout(b,(e=o-v,r=o-x,n=t-e,p?l(n,u-r):n))}function y(e){return(f=void 0,m&&s)?A(e):(s=c=void 0,d)}function _(){var e,r=a(),n=g(r);if(s=arguments,c=this,v=r,n){if(void 0===f)return x=e=v,f=setTimeout(b,t),h?A(e):d;if(p)return clearTimeout(f),f=setTimeout(b,t),A(v)}return void 0===f&&(f=setTimeout(b,t)),d}return t=o(t)||0,n(r)&&(h=!!r.leading,u=(p="maxWait"in r)?i(o(r.maxWait)||0,t):u,m="trailing"in r?!!r.trailing:m),_.cancel=function(){void 0!==f&&clearTimeout(f),x=0,s=v=c=f=void 0},_.flush=function(){return void 0===f?d:y(a())},_}},13218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},37005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},33448:function(e,t,r){var n=r(44239),a=r(37005);e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==n(e)}},7771:function(e,t,r){var n=r(55639);e.exports=function(){return n.Date.now()}},14841:function(e,t,r){var n=r(27561),a=r(13218),o=r(33448),i=0/0,l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return i;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=s.test(e);return r||c.test(e)?u(e.slice(2),r?2:8):l.test(e)?i:+e}},50520:function(e,t,r){"use strict";r.r(t);var n=r(85893),a=r(27134),o=r(67968),i=r(69325),l=r(93348),s=r(41664),c=r.n(s),u=r(34774),d=r(48190);t.default=e=>{var t;let{showAnimate:r,post:s,showSummary:f}=e,{siteInfo:v}=(0,l.O)(),x=(0,i.JA)("FUKASAWA_POST_LIST_PREVIEW",null,u.default)&&s.blockMap;(0,i.JA)("FUKASAWA_POST_LIST_COVER_FORCE",null,u.default)&&s&&!s.pageCover&&(s.pageCoverThumbnail=null==v?void 0:v.pageCover);let h=(0,i.JA)("FUKASAWA_POST_LIST_COVER",null,u.default)&&(null==s?void 0:s.pageCoverThumbnail),p=(0,i.JA)("FUKASAWA_POST_LIST_ANIMATION",null,u.default)||r;return(0,n.jsx)("article",{...p?{"data-aos":"fade-up","data-aos-duration":"300","data-aos-once":"true","data-aos-anchor-placement":"top-bottom"}:{},style:{maxHeight:"60rem"},className:"w-full lg:max-w-sm p-3 shadow mb-4 mx-2 bg-white dark:bg-hexo-black-gray hover:shadow-lg duration-200",children:(0,n.jsxs)("div",{className:"flex flex-col justify-between h-full",children:[h&&(0,n.jsx)(c(),{href:null==s?void 0:s.href,passHref:!0,legacyBehavior:!0,children:(0,n.jsx)("div",{className:"flex-grow mb-3 w-full duration-200 cursor-pointer transform overflow-hidden",children:(0,n.jsx)(a.Z,{src:null==s?void 0:s.pageCoverThumbnail,alt:(null==s?void 0:s.title)||(0,i.JA)("TITLE"),className:"object-cover w-full h-full hover:scale-125 transform duration-500"})})}),(0,n.jsxs)("div",{className:"flex flex-col w-full",children:[(0,n.jsx)("h2",{children:(0,n.jsxs)(c(),{passHref:!0,href:null==s?void 0:s.href,className:"break-words cursor-pointer font-bold hover:underline text-xl ".concat(x?"justify-center":"justify-start"," leading-tight text-gray-700 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400"),children:[(0,i.JA)("POST_TITLE_ICON")&&(0,n.jsx)(o.Z,{icon:s.pageIcon})," ",s.title]})}),(!x||f)&&(0,n.jsx)("main",{className:"my-2 tracking-wide line-clamp-3 text-gray-800 dark:text-gray-300 text-md font-light leading-6",children:s.summary}),(0,n.jsxs)("div",{className:"mt-auto justify-between flex",children:[s.category&&(0,n.jsxs)(c(),{href:"/category/".concat(s.category),passHref:!0,className:"cursor-pointer dark:text-gray-300 font-light text-sm hover:underline hover:text-indigo-700 dark:hover:text-indigo-400 transform",children:[(0,n.jsx)("i",{className:"mr-1 far fa-folder"}),s.category]}),(0,n.jsx)("div",{className:"md:flex-nowrap flex-wrap md:justify-start inline-block",children:(0,n.jsx)("div",{children:null===(t=s.tagItems)||void 0===t?void 0:t.map(e=>(0,n.jsx)(d.default,{tag:e},e.name))})})]})]})]})})}},15536:function(e,t,r){"use strict";r.r(t);var n=r(85893),a=r(93348);t.default=e=>{let{currentSearch:t}=e,{locale:r}=(0,a.O)();return(0,n.jsx)("div",{className:"flex items-center justify-center min-h-screen mx-auto md:-mt-20",children:(0,n.jsxs)("p",{className:"text-gray-500 dark:text-gray-300",children:[r.COMMON.NO_RESULTS_FOUND," ",t&&(0,n.jsx)("div",{children:t})]})})}},53798:function(e,t,r){"use strict";r.r(t);var n=r(85893),a=r(46767),o=r(69325),i=r(93348),l=r(78174),s=r(23279),c=r.n(s),u=r(67294),d=r(50520),f=r(15536),v=r(804);let x=()=>l.isBrowser?window.innerWidth>=1024?3:window.innerWidth>=640?2:1:3;t.default=e=>{let{page:t=1,posts:r=[],postCount:s,siteInfo:h}=e,{NOTION_CONFIG:p}=(0,i.O)(),m=(0,o.JA)("POSTS_PER_PAGE",null,p),[A,g]=(0,u.useState)(x()),[b,y]=(0,u.useState)([]);return((0,u.useEffect)(()=>{let e=c()(()=>{g(x())},200);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,u.useEffect)(()=>{let e=(null==r?void 0:r.length)||0,t=Math.ceil(e/A),n=Array(e),a=0;for(let o=0;o<A;o++)for(let i=0;i<t;i++){let t=i*A+o;t<e&&(n[a]=(0,l.deepClone)(r[t]),a++)}y(n)},[A,r]),b&&0!==b.length)?(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{id:"posts-wrapper",className:"grid-container",children:[null==b?void 0:b.map((e,t)=>(0,n.jsx)("div",{className:"grid-item justify-center flex",style:{breakInside:"avoid"},children:(0,n.jsx)(d.default,{index:t,post:e,siteInfo:h},e.id)},e.id)),(0,o.JA)("ADSENSE_GOOGLE_ID")&&(0,n.jsx)("div",{className:"p-3",children:(0,n.jsx)(a.AdSlot,{type:"flow"})})]}),(0,n.jsx)(v.default,{page:t,showNext:t<Math.ceil(s/m)})]}):(0,n.jsx)(f.default,{})}},804:function(e,t,r){"use strict";r.r(t);var n=r(85893),a=r(41664),o=r.n(a),i=r(11163),l=r(93348);t.default=e=>{let{page:t,showNext:r}=e,{locale:a}=(0,l.O)(),s=(0,i.useRouter)(),c=+t,u=s.asPath.split("?")[0].replace(/\/page\/[1-9]\d*/,"").replace(/\/$/,"");return(0,n.jsxs)("div",{className:"my-10 flex justify-between font-medium text-black dark:text-gray-100 space-x-2",children:[(0,n.jsxs)(o(),{href:{pathname:2===c?"".concat(u,"/"):"".concat(u,"/page/").concat(c-1),query:s.query.s?{s:s.query.s}:{}},passHref:!0,rel:"prev",className:"".concat(1===c?"invisible":"visible"," text-center w-full duration-200 px-4 py-2 hover:border-black border-b-2 hover:font-bold"),children:["←",a.PAGINATION.PREV]}),(0,n.jsxs)(o(),{href:{pathname:"".concat(u,"/page/").concat(c+1),query:s.query.s?{s:s.query.s}:{}},passHref:!0,rel:"next",className:"".concat(r?"visible":"invisible"," text-center w-full duration-200 px-4 py-2 hover:border-black border-b-2 hover:font-bold"),children:[a.PAGINATION.NEXT,"→"]})]})}},48190:function(e,t,r){"use strict";r.r(t);var n=r(85893),a=r(41664),o=r.n(a);t.default=e=>{let{tag:t,selected:r=!1}=e;return(0,n.jsx)(o(),{href:r?"/":"/tag/".concat(encodeURIComponent(t.name)),passHref:!0,className:"cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200\n        mr-2 py-0.5 px-1 text-xs whitespace-nowrap dark:hover:text-white\n         ".concat(r?"text-white dark:text-gray-300 bg-black dark:bg-black dark:hover:bg-gray-900":"text-gray-600 hover:shadow-xl dark:border-gray-400 notion-".concat(t.color,"_background dark:bg-gray-800")),children:(0,n.jsxs)("div",{className:"font-light dark:text-gray-400",children:[r&&(0,n.jsx)("i",{className:"mr-1 fas fa-tag"})," ",t.name+(t.count?"(".concat(t.count,")"):"")," "]})},t)}},34774:function(e,t,r){"use strict";r.r(t),t.default={FUKASAWA_MAILCHIMP_FORM:!1,FUKASAWA_POST_LIST_COVER:!0,FUKASAWA_POST_LIST_COVER_FORCE:!1,FUKASAWA_POST_LIST_PREVIEW:!1,FUKASAWA_POST_LIST_ANIMATION:!1,FUKASAWA_MENU_CATEGORY:!0,FUKASAWA_MENU_TAG:!0,FUKASAWA_MENU_ARCHIVE:!0,FUKASAWA_SIDEBAR_COLLAPSE_BUTTON:!0,FUKASAWA_SIDEBAR_COLLAPSE_SATUS_DEFAULT:!1,FUKASAWA_SIDEBAR_COLLAPSE_ON_SCROLL:!1}}}]);