"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81616,89837,20682,53369,63228,92008,68849,98971,74077,51140,98318,71529,97517,88836,1347,53145,68275,20654,90865,16967,5113,80809,18119],{53040:function(e,t,l){l.d(t,{f:function(){return a}});let{loadExternalResource:r}=l(78174),a=async()=>{await r("/css/wow/animate.css","css"),await r("https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js","js");let e=window.WOW;e&&new e().init()}},89837:function(e,t,l){l.r(t);var r=l(85893),a=l(5152);let s=l.n(a)()(()=>Promise.resolve().then(l.bind(l,31933)),{loadableGenerated:{webpack:()=>[31933]}});t.default=e=>{let{notice:t,className:l}=e;return(null==t?void 0:t.blockMap)?(0,r.jsx)("div",{className:l,children:(0,r.jsx)("section",{id:"announcement-wrapper",className:"mb-10",children:t&&(0,r.jsx)("div",{id:"announcement-content",children:(0,r.jsx)(s,{post:t})})})}):null}},20682:function(e,t,l){l.r(t),l.d(t,{ArticleLock:function(){return n}});var r=l(85893),a=l(93348),s=l(67294);let n=e=>{let{validPassword:t}=e,{locale:l}=(0,a.O)(),n=()=>{let e=document.getElementById("password");if(!t(null==e?void 0:e.value)){let e=document.getElementById("tips");e&&(e.innerHTML="",e.innerHTML="<div class='text-red-500 animate__shakeX animate__animated'>".concat(l.COMMON.PASSWORD_ERROR,"</div>"))}},i=(0,s.useRef)(null);return(0,s.useEffect)(()=>{i.current.focus()},[]),(0,r.jsx)("div",{id:"container",className:"w-full flex justify-center items-center h-96 ",children:(0,r.jsxs)("div",{className:"text-center space-y-3",children:[(0,r.jsx)("div",{className:"font-bold",children:l.COMMON.ARTICLE_LOCK_TIPS}),(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("input",{id:"password",type:"password",onKeyDown:e=>{"Enter"===e.key&&n()},ref:i,className:"outline-none w-full text-sm pl-5 rounded-l transition focus:shadow-lg font-light leading-10 text-black dark:bg-gray-500 bg-gray-50"}),(0,r.jsx)("div",{onClick:n,className:"px-3 whitespace-nowrap cursor-pointer items-center justify-center py-2 rounded-r duration-300 bg-gray-300",children:(0,r.jsxs)("i",{className:"duration-200 cursor-pointer fas fa-key dark:text-black",children:["\xa0",l.COMMON.SUBMIT]})})]}),(0,r.jsx)("div",{id:"tips"})]})})}},53369:function(e,t,l){l.r(t),l.d(t,{default:function(){return n}});var r=l(85893),a=l(41664),s=l.n(a);function n(e){let{archiveTitle:t,archivePosts:l}=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{id:t,className:"pt-16 pb-4 text-3xl dark:text-gray-300",children:t}),(0,r.jsx)("ul",{children:l[t].map(e=>{var t;return(0,r.jsx)("li",{className:"border-l-2 p-1 text-xs md:text-base items-center  hover:scale-x-105 hover:border-gray-500 dark:hover:border-gray-300 dark:border-gray-400 transform duration-500",children:(0,r.jsxs)("div",{id:null==e?void 0:e.publishDay,children:[(0,r.jsx)("span",{className:"text-gray-400",children:null===(t=e.date)||void 0===t?void 0:t.start_date})," ","\xa0",(0,r.jsx)(s(),{href:null==e?void 0:e.href,passHref:!0,className:"dark:text-gray-400  dark:hover:text-gray-300 overflow-x-hidden hover:underline cursor-pointer text-gray-600",children:e.title})]})},e.id)})})]},t)}},63228:function(e,t,l){l.r(t),l.d(t,{BlogListPage:function(){return o}});var r=l(85893),a=l(69325),s=l(93348),n=l(51140),i=l(68275);let o=e=>{let{page:t=1,postCount:l}=e,{NOTION_CONFIG:o}=(0,s.O)(),d=(0,a.JA)("POSTS_PER_PAGE",null,o);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{id:"posts-wrapper",className:"my-4 select-none",children:(0,r.jsx)(n.GameListIndexCombine,{...e})}),(0,r.jsx)(i.default,{page:t,showNext:t<Math.ceil(l/d)})]})}},92008:function(e,t,l){l.r(t),l.d(t,{BlogListScroll:function(){return u}});var r=l(85893),a=l(69325),s=l(93348),n=l(78174),i=l(93096),o=l.n(i),d=l(67294),c=l(51140);let u=e=>{let{posts:t}=e,{locale:l,NOTION_CONFIG:i}=(0,s.O)(),[u,f]=(0,d.useState)(1),m=(0,a.JA)("POSTS_PER_PAGE",null,i),x=!1,h=t&&Array.isArray(t)?(0,n.deepClone)(t).slice(0,m*u):[];t&&(x=u*m<t.length);let v=()=>{x&&f(u+1)},p=(0,d.useRef)(null),g=(0,d.useCallback)(o()(()=>{window.scrollY+window.outerHeight>(p&&p.current?p.current.clientHeight:0)+100&&v()},500));return(0,d.useEffect)(()=>(window.addEventListener("scroll",g),()=>{window.removeEventListener("scroll",g)})),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{id:"posts-wrapper",className:"my-4",ref:p,children:(0,r.jsx)(c.GameListIndexCombine,{posts:h})}),(0,r.jsxs)("div",{onClick:v,className:"w-full my-4 py-4 text-center cursor-pointer ",children:[" ",x?l.COMMON.MORE:"".concat(l.COMMON.NO_MORE," \uD83D\uDE30")," "]})]})}},68849:function(e,t,l){l.r(t),l.d(t,{default:function(){return s}});var r=l(85893),a=l(93348);function s(e){let{tag:t,category:l}=e,{locale:s}=(0,a.O)();return t?(0,r.jsxs)("div",{className:"flex items-center text-xl mt-4 px-2",children:[(0,r.jsx)("i",{className:"mr-2 fas fa-tag"}),s.COMMON.TAGS,":",t]}):l?(0,r.jsxs)("div",{className:"flex items-center text-xl mt-4 px-2",children:[(0,r.jsx)("i",{className:"mr-2 fas fa-th"}),s.COMMON.CATEGORY,":",l]}):(0,r.jsx)(r.Fragment,{})}},98971:function(e,t,l){l.r(t);var r=l(85893),a=l(93348),s=l(67294);t.default=e=>{let{cRef:t,className:l}=e,{isDarkMode:n,toggleDarkMode:i}=(0,a.O)();return(0,s.useImperativeHandle)(t,()=>({handleChangeDarkMode:()=>{i()}})),(0,r.jsxs)("div",{onClick:i,className:"".concat(l||""," flex items-center"),children:[(0,r.jsx)("i",{className:"w-6 mr-2 fas ".concat(n?"fa-sun":"fa-moon px-0.5")}),n?"Dark Mode":"Light Mode"," "]})}},74077:function(e,t,l){l.r(t),l.d(t,{Footer:function(){return s}});var r=l(85893),a=l(69325);let s=e=>{let t=new Date().getFullYear(),l=(0,a.JA)("SINCE"),s=parseInt(l)<t?l+"-"+t:t;return(0,r.jsx)("footer",{className:"z-10 dark:bg-black bg-white p-2 rounded-lg relative mt-6 flex-shrink-0 mb-4 w-full shadow dark:text-gray-200 ",children:(0,r.jsxs)("div",{className:"w-full flex justify-between p-4 ",children:[(0,r.jsxs)("p",{children:["\xa9 ",(0,a.JA)("TITLE")," ",s]}),(0,r.jsx)("p",{children:(0,a.JA)("DESCRIPTION")}),(0,r.jsxs)("span",{className:"dark:text-gray-200 no-underline ml-4",children:["Powered by",(0,r.jsxs)("a",{href:"https://github.com/tangly1024/NotionNext",className:" hover:underline",children:[" ","NotionNext ",(0,a.JA)("VERSION")," "]})]})]})})}},51140:function(e,t,l){l.r(t),l.d(t,{GameListIndexCombine:function(){return f}});var r=l(85893),a=l(46767),s=l(27134),n=l(69325),i=l(78174),o=l(41664),d=l.n(o),c=l(67294),u=l(80809);let f=e=>{let{posts:t}=e,l=(0,i.deepClone)(t),a=[],s=(0,n.JA)("GAME_INDEX_EXPAND_RECOMMEND",!0,u.default),o=0;if(s){let e=[];for(;(null==l?void 0:l.length)>0;){if(++o%9==0){a.push((0,r.jsx)(m,{},o));continue}for(;(null==l?void 0:l.length)>0&&e.length<4;){var d;let t=l.shift();if(o++,null===(d=t.tags)||void 0===d?void 0:d.some(e=>e===(0,n.JA)("GAME_RECOMMEND_TAG","Recommend",u.default))){a.push((0,r.jsx)(h,{item:t,isLargeCard:!0},o));continue}e.push(t)}if(4===e.length)a.push((0,r.jsx)(x,{items:e},o)),e=[];else for(;e.length>0;){let t=e.shift();o++,a.push((0,r.jsx)(h,{item:t,isLargeCard:!0},o++))}}}else for(;(null==l?void 0:l.length)>0;)if(++o%6==0)a.push((0,r.jsx)(m,{},o));else if(o%2==0&&(null==l?void 0:l.length)>=4){let e=[];for(let t=1;t<=4;t++)e.push(l.shift());a.push((0,r.jsx)(x,{items:e},o))}else{let e=l.shift();a.push((0,r.jsx)(h,{item:e,isLargeCard:!0},o))}return(0,r.jsx)("div",{className:"game-list-wrapper flex justify-center w-full",children:(0,r.jsx)("div",{className:"game-grid mx-auto w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 px-2 md:p-0",children:null==a?void 0:a.map((e,t)=>e)})})},m=()=>(0,r.jsxs)("div",{className:"card-group relative rounded-lg game-ad h-80 w-full overflow-hidden",children:[(0,r.jsx)(a.AdSlot,{type:"flow"}),(0,r.jsxs)("div",{className:"absolute left-0 right-0 w-full h-full flex flex-col justify-center items-center bg-white",children:[(0,r.jsx)("p",{className:"text-2xl",children:(0,n.JA)("TITLE")}),(0,r.jsx)("p",{children:(0,n.JA)("DESCRIPTION")})]})]}),x=e=>{let{items:t}=e;return(0,r.jsx)("div",{className:"card-group h-80 w-full grid grid-cols-2 grid-rows-2 gap-3",children:t.map((e,t)=>(0,r.jsx)(h,{item:e},t))})},h=e=>{var t;let{item:l,isLargeCard:a}=e,{title:n}=l,i=l.pageCoverThumbnail,[o,u]=(0,c.useState)("img"),f=null==l?void 0:null===(t=l.ext)||void 0===t?void 0:t.video;return(0,r.jsxs)(d(),{title:n,href:"".concat(null==l?void 0:l.href),className:"card-single ".concat(a?"h-80 ":"h-full text-xs"," w-full transition-all duration-200 shadow-md md:hover:scale-105 md:hover:shadow-lg relative rounded-lg overflow-hidden flex justify-center items-center\n      group hover:border-purple-400"),onMouseOver:()=>{u("video")},onMouseOut:()=>{u("img")},children:[(0,r.jsx)("div",{className:"text-center absolute bottom-0 invisible group-hover:bottom-2 group-hover:visible transition-all duration-200 text-white z-30",children:n}),(0,r.jsx)("div",{className:"h-2/3 w-full absolute left-0 bottom-0 z-20 opacity-0 group-hover:opacity-75 transition-all duration-200",children:(0,r.jsx)("div",{className:"h-full w-full absolute bg-gradient-to-b from-transparent to-black"})}),"video"===o&&(0,r.jsx)("video",{className:"z-10 object-cover w-full ".concat(a?"h-80":"h-full"," absolute overflow-hidden"),loop:"true",autoPlay:!0,preload:"none",children:(0,r.jsx)("source",{src:f,type:"video/mp4"})}),(0,r.jsx)(s.Z,{className:"w-full h-full absolute object-cover group-hover:scale-105 duration-100 transition-all",src:i,priority:!0,alt:n,fill:"full"})]})}},98318:function(e,t,l){l.r(t),l.d(t,{GameListNormal:function(){return o}});var r=l(85893),a=l(78174),s=l(41664),n=l.n(s),i=l(67294);let o=e=>{let{games:t,maxCount:l=18}=e,s=(0,a.deepClone)(t),n=[],i=0;for(;(null==s?void 0:s.length)>0&&i<l;){let e=s.shift();n.push((0,r.jsx)(d,{item:e,isLargeCard:!0},i)),i++}return(0,r.jsx)("div",{className:"game-list-wrapper w-full",children:(0,r.jsx)("div",{className:"game-grid mx-auto w-full h-full grid grid-cols-3 gap-2",children:null==n?void 0:n.map((e,t)=>e)})})},d=e=>{var t;let{item:l}=e,{title:a}=l,s=l.pageCoverThumbnail,[o,d]=(0,i.useState)("img"),c=null==l?void 0:null===(t=l.ext)||void 0===t?void 0:t.video;return(0,r.jsxs)(n(),{href:"".concat(null==l?void 0:l.href),onMouseOver:()=>{d("video")},onMouseOut:()=>{d("img")},title:a,className:"card-single h-28 w-28 relative shadow rounded-md overflow-hidden flex justify-center items-center \n                group   hover:border-purple-400",children:[(0,r.jsx)("div",{className:"absolute text-sm bottom-2 transition-all duration-200 text-white z-30",children:a}),(0,r.jsx)("div",{className:"h-1/2 w-full absolute left-0 bottom-0 z-20 opacity-75 transition-all duration-200",children:(0,r.jsx)("div",{className:"h-full w-full absolute bg-gradient-to-b from-transparent to-black"})}),"video"===o&&(0,r.jsx)("video",{className:"z-10 object-cover w-auto h-28 absolute overflow-hidden",loop:"true",autoPlay:!0,preload:"none",children:(0,r.jsx)("source",{src:c,type:"video/mp4"})}),(0,r.jsx)("img",{className:"w-full h-full absolute object-cover",src:s,alt:a})]})}},71529:function(e,t,l){l.r(t),l.d(t,{GameListRelate:function(){return o}});var r=l(85893),a=l(78174),s=l(41664),n=l.n(s),i=l(67294);let o=e=>{let{posts:t}=e,l=(0,a.deepClone)(t),s=[],n=0;for(;(null==l?void 0:l.length)>0&&n<24;){let e=l.shift();s.push((0,r.jsx)(d,{item:e,isLargeCard:!0},n)),n++}return(0,r.jsx)("div",{className:"game-list-wrapper w-full max-w-full overflow-x-auto",children:(0,r.jsx)("div",{className:"game-grid grid grid-flow-col justify-start gap-2",children:null==s?void 0:s.map((e,t)=>e)})})},d=e=>{var t;let{item:l}=e,{title:a}=l,[s,o]=(0,i.useState)("img"),d=null==l?void 0:l.pageCoverThumbnail,c=null==l?void 0:null===(t=l.ext)||void 0===t?void 0:t.video;return(0,r.jsxs)(n(),{href:"".concat(null==l?void 0:l.href),onMouseOver:()=>{o("video")},onMouseOut:()=>{o("img")},title:a,className:"card-single w-24 h-24 relative shadow rounded-md overflow-hidden flex justify-center items-center \n                group   hover:border-purple-400",children:[(0,r.jsx)("div",{className:"text-xs text-center absolute bottom-0 invisible group-hover:bottom-2 group-hover:visible transition-all duration-200 text-white z-30",children:a}),(0,r.jsx)("div",{className:"h-2/3 w-full absolute left-0 bottom-0 z-20 opacity-0 group-hover:opacity-75 transition-all duration-200",children:(0,r.jsx)("div",{className:"h-full w-full absolute bg-gradient-to-b from-transparent to-black"})}),"video"===s&&(0,r.jsx)("video",{className:"z-10 object-cover w-full h-24 absolute overflow-hidden",loop:"true",autoPlay:!0,preload:"none",children:(0,r.jsx)("source",{src:c,type:"video/mp4"})}),(0,r.jsx)("img",{className:"w-24 h-24 absolute object-cover group-hover:scale-105 duration-100 transition-all",src:d,alt:a})]})}},53536:function(e,t,l){l.r(t),l.d(t,{GameListRecent:function(){return o}});var r=l(85893),a=l(78174),s=l(11163),n=l(67294),i=l(81616);let o=e=>{let{maxCount:t=14}=e,{recentGames:l}=(0,i.useGameGlobal)(),s=(0,a.deepClone)(l),n=[],o=0;for(;(null==s?void 0:s.length)>0&&o<t;){let e=null==s?void 0:s.shift();e&&(n.push((0,r.jsx)(d,{item:e,isLargeCard:!0},o)),o++)}return 0===n.length?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"game-list-recent-wrapper w-full max-w-full overflow-x-auto pt-4 px-2 md:px-0",children:(0,r.jsx)("div",{className:"game-grid md:flex grid grid-flow-col gap-2",children:null==n?void 0:n.map((e,t)=>e)})})})},d=e=>{var t;let{item:l}=e,o=(0,s.useRouter)(),{recentGames:d,setRecentGames:c}=(0,i.useGameGlobal)(),{title:u}=l||{},[f,m]=(0,n.useState)("img"),[x,h]=(0,n.useState)(!0),v=()=>{h(!x)},p=()=>{let e=(0,a.deepClone)(d),t=e.findIndex(e=>(null==e?void 0:e.title)===l.title);-1!==t&&(e.splice(t,1),c(e),localStorage.setItem("recent_games",JSON.stringify(e)))},g=null==l?void 0:l.pageCoverThumbnail,j=null==l?void 0:null===(t=l.ext)||void 0===t?void 0:t.video;return(0,r.jsxs)("div",{onClick:()=>{o.push(null==l?void 0:l.href)},onMouseOver:()=>{m("video")},onMouseOut:()=>{m("img")},title:u,className:"cursor-pointer card-single h-28 w-28 relative shadow rounded-md overflow-hidden flex justify-center items-center \n                group hover:border-purple-400",children:[(0,r.jsx)("button",{className:"absolute right-0.5 top-1 z-20",onClick:e=>{e.stopPropagation(),p()},onMouseEnter:v,onMouseLeave:v,children:x?(0,r.jsx)("i",{className:"fas fa-clock-rotate-left w-6 h-6 flex items-center justify-center shadow rounded-full bg-white text-blue-500 text-sm"}):(0,r.jsx)("i",{className:"fas fa-trash-can w-6 h-6 flex items-center justify-center shadow rounded-full bg-white text-red-500 text-sm"})}),(0,r.jsx)("div",{className:"absolute text-sm bottom-2 transition-all duration-200 text-white z-30",children:u}),(0,r.jsx)("div",{className:"h-1/2 w-full absolute left-0 bottom-0 z-20 opacity-75 transition-all duration-200",children:(0,r.jsx)("div",{className:"h-full w-full absolute bg-gradient-to-b from-transparent to-black"})}),"video"===f&&(0,r.jsx)("video",{className:"z-10 object-cover w-auto h-28 absolute overflow-hidden",loop:"true",autoPlay:!0,preload:"none",children:(0,r.jsx)("source",{src:j,type:"video/mp4"})}),(0,r.jsx)("img",{className:"w-full h-full absolute object-cover group-hover:scale-105 duration-100 transition-all",src:g,alt:u})]})}},97517:function(e,t,l){l.r(t);var r=l(85893),a=l(41664),s=l.n(a);t.default=function(e){let{currentCategory:t,categoryOptions:l}=e;return l?(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(s(),{className:"mx-2",href:"/category",children:(0,r.jsx)("i",{className:"fas fa-bars"})}),(0,r.jsx)("div",{id:"category-list",className:"dark:border-gray-600 flex flex-wrap py-1",children:l.map(e=>{let l=t===e.name;return(0,r.jsx)(s(),{href:"/category/".concat(e.name),passHref:!0,className:" ".concat(l?"bg-green-500 text-white ":"dark:text-gray-300 hover:bg-green-500 rounded-lg hover:text-white","  whitespace-nowrap overflow-ellipsis items-center px-2 cursor-pointer py-1 font-bold"),children:e.name},e.name)})})]}):(0,r.jsx)(r.Fragment,{})}},88836:function(e,t,l){l.r(t);var r=l(85893),a=l(41664),s=l.n(a),n=l(5113);t.default=function(e){var t;let{tagOptions:l,currentTag:a}=e;return l?(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(s(),{href:"/tag",children:(0,r.jsx)("i",{className:"fas fa-tags p-2"})}),(0,r.jsx)("div",{id:"tags-group",className:"flex flex-wrap p-1 gap-2",children:null==l?void 0:null===(t=l.slice(0,20))||void 0===t?void 0:t.map(e=>{let t=e.name===a;return(0,r.jsx)(n.default,{tag:e,selected:t},e.name)})})]}):(0,r.jsx)(r.Fragment,{})}},57825:function(e,t,l){l.r(t),l.d(t,{default:function(){return n}});var r=l(85893),a=l(81616),s=l(1347);function n(e){let{siteInfo:t}=e,{setSideBarVisible:l}=(0,a.useGameGlobal)();return(0,r.jsx)("header",{className:"z-20",children:(0,r.jsxs)("div",{className:"w-full py-2 rounded-md bg-white shadow-md hover:shadow-xl transition-shadow duration-200 dark:bg-[#1F2030] flex justify-between items-center px-4",children:[(0,r.jsx)(s.default,{siteInfo:t}),(0,r.jsx)("button",{className:"flex xl:hidden",onClick:()=>{l(!0)},children:(0,r.jsx)("i",{className:"fas fa-search"})})]})})}},1347:function(e,t,l){l.r(t),l.d(t,{default:function(){return i}});var r=l(85893),a=l(69325),s=l(41664),n=l.n(s);function i(e){let{siteInfo:t}=e;return(0,r.jsx)(n(),{passHref:!0,href:"/",className:"logo rounded cursor-pointer flex flex-col items-center",children:(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)("h1",{className:"text-2xl dark:text-white font-bold font-serif",children:null==t?void 0:t.title}),(0,r.jsx)("h2",{className:"text-xs text-gray-400 whitespace-nowrap",children:(0,a.JA)("BIO")})]})})}},53145:function(e,t,l){l.r(t),l.d(t,{MenuItemDrop:function(){return i}});var r=l(85893),a=l(41664),s=l.n(a),n=l(67294);let i=e=>{var t;let{link:l}=e,[a,i]=(0,n.useState)(!1);if(!l||!l.show)return null;let o=(null==l?void 0:null===(t=l.subMenus)||void 0===t?void 0:t.length)>0;return(0,r.jsx)("li",{children:(0,r.jsxs)("div",{className:"cursor-pointer relative",onMouseOver:()=>i(!0),onMouseOut:()=>i(!1),children:[!o&&(0,r.jsx)("div",{className:"dark:text-gray-50 nav hover:scale-105 transition-transform duration-200",children:(0,r.jsxs)(s(),{href:null==l?void 0:l.href,className:"flex flex-nowrap",target:null==l?void 0:l.target,children:[(0,r.jsx)("div",{className:"w-6 mr-2 text-center",children:(null==l?void 0:l.icon)&&(0,r.jsx)("i",{className:null==l?void 0:l.icon})}),null==l?void 0:l.name]})}),o&&(0,r.jsxs)("div",{className:"dark:text-gray-50 nav",children:[(null==l?void 0:l.icon)&&(0,r.jsx)("i",{className:"".concat(null==l?void 0:l.icon," w-6 text-center")})," ",null==l?void 0:l.name,(0,r.jsx)("i",{className:"absolute right-0 top-0 px-2 h-full flex items-center fas fa-chevron-left duration-500 transition-all ".concat(a?" rotate-180":""," ")})]}),o&&(0,r.jsx)("ul",{className:"".concat(a?"visible opacity-100 -left-5 ml-40":"invisible opacity-0 -left-4 "," rounded shadow-md z-30 -mt-2 py-2 px-4 absolute top-0 hover:scale-105 transition-all duration-200 border-gray-100  bg-white  dark:bg-black"),children:l.subMenus.map((e,t)=>(0,r.jsx)("div",{className:"text-gray-700 dark:text-gray-200  tracking-widest transition-all duration-200 ",children:(0,r.jsx)(s(),{href:e.href,target:null==l?void 0:l.target,children:(0,r.jsxs)("span",{className:"text-sm text-nowrap font-extralight",children:[(null==l?void 0:l.icon)&&(0,r.jsx)("i",{className:null==e?void 0:e.icon,children:" \xa0 "}),e.title]})})},t))})]})})}},38105:function(e,t,l){l.r(t),l.d(t,{MenuList:function(){return c}});var r=l(85893),a=l(69325),s=l(93348),n=l(81616),i=l(80809),o=l(98971),d=l(53145);let c=e=>{let{setSideBarVisible:t}=(0,n.useGameGlobal)(),{customNav:l,customMenu:c}=e,{locale:u}=(0,s.O)(),f=[{id:1,icon:"fas fa-home",name:u.NAV.INDEX,href:"/",show:!0},{id:2,icon:"fas fa-th",name:u.COMMON.CATEGORY,href:"/category",show:(0,a.JA)("GAME_MENU_CATEGORY",null,i.default)},{id:3,icon:"fas fa-tag",name:u.COMMON.TAGS,href:"/tag",show:(0,a.JA)("GAME_MENU_TAG",null,i.default)}],m=[].concat(f);return l&&(m=f.concat(l)),(0,a.JA)("CUSTOM_MENU")&&(m=c),(0,r.jsxs)("ul",{className:"dark:text-white p-4 space-y-4 shadow-md hover:shadow-xl transition-shadow duration-200 bg-white dark:bg-hexo-black-gray my-4 rounded-md",children:[(0,r.jsx)("li",{children:(0,r.jsxs)("button",{className:"flex items-center hover:scale-105 transition-transform duration-200",onClick:()=>{t(!0)},children:[(0,r.jsx)("i",{className:"fas fa-search w-6 mr-2"}),(0,r.jsx)("span",{children:"Search"})]})}),(0,r.jsx)("li",{children:(0,r.jsx)("button",{className:"flex items-center hover:scale-105 transition-transform duration-200",children:(0,r.jsx)(o.default,{className:"text-center"})})}),(null==m?void 0:m.length)>0&&(0,r.jsx)("hr",{}),null==m?void 0:m.map((e,t)=>e&&e.show&&(0,r.jsx)(d.MenuItemDrop,{link:e},t))]})}},68275:function(e,t,l){l.r(t);var r=l(85893),a=l(93348),s=l(41664),n=l.n(s),i=l(11163);t.default=e=>{let{page:t,showNext:l}=e,{locale:s}=(0,a.O)(),o=(0,i.useRouter)(),d=+t,c=o.asPath.split("?")[0].replace(/\/page\/[1-9]\d*/,"").replace(/\/$/,"").replace(".html","");return(0,r.jsxs)("div",{className:"my-10 flex justify-between font-medium text-black dark:text-gray-100 space-x-2",children:[(0,r.jsxs)(n(),{href:{pathname:2===d?"".concat(c,"/"):"".concat(c,"/page/").concat(d-1),query:o.query.s?{s:o.query.s}:{}},passHref:!0,rel:"prev",className:"".concat(1===d?"invisible":"visible"," text-center w-full duration-200 px-4 py-2 hover:border-black dark:border-hexo-black-gray border-b-2 hover:font-bold"),children:["←",s.PAGINATION.PREV]}),(0,r.jsxs)(n(),{href:{pathname:"".concat(c,"/page/").concat(d+1),query:o.query.s?{s:o.query.s}:{}},passHref:!0,rel:"next",className:"".concat(l?"visible":"invisible"," text-center w-full duration-200 px-4 py-2 hover:border-black dark:border-hexo-black-gray border-b-2 hover:font-bold"),children:[s.PAGINATION.NEXT,"→"]})]})}},20654:function(e,t,l){l.r(t),l.d(t,{default:function(){return d}});var r=l(85893),a=l(67968),s=l(41664),n=l.n(s),i=l(16967),o=l(69325);function d(e){let{post:t}=e;return(0,r.jsx)("section",{className:"flex-wrap flex m-2 text-gray--600 dark:text-gray-400 font-light leading-8",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:(null==t?void 0:t.type)!=="Page"&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n(),{href:"/category/".concat(null==t?void 0:t.category),passHref:!0,className:"cursor-pointer text-xs font-bold hover:underline mr-2",children:null==t?void 0:t.category})})}),(0,r.jsxs)("h1",{className:"font-bold text-3xl text-black dark:text-white",children:[(0,o.JA)("POST_TITLE_ICON")&&(0,r.jsx)(a.Z,{icon:null==t?void 0:t.pageIcon}),null==t?void 0:t.title]}),(null==t?void 0:t.type)!=="Page"&&(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("nav",{className:"flex my-2 items-start text-gray-500 dark:text-gray-400",children:[(null==t?void 0:t.tags)&&(0,r.jsx)("div",{className:"flex flex-wrap max-w-full overflow-x-auto article-tags",children:null==t?void 0:t.tags.map(e=>(0,r.jsx)(i.default,{tag:e},e))}),(0,r.jsxs)("span",{className:"hidden busuanzi_container_page_pv mr-2",children:[(0,r.jsx)("i",{className:"mr-1 fas fa-fire"}),"\xa0",(0,r.jsx)("span",{className:"mr-2 busuanzi_value_page_pv"})]})]})})]})})}},11871:function(e,t,l){l.r(t),l.d(t,{default:function(){return u}});var r=l(85893),a=l(69325),s=l(78174),n=l(67294),i=l(81616),o=l(80809),d=l(98318),c=l(1347);function u(e){let{allNavPages:t,siteInfo:l}=e,{sideBarVisible:u,setSideBarVisible:f,filterGames:m,setFilterGames:x}=(0,i.useGameGlobal)(),h=(0,n.useRef)(null),v=(0,s.deepClone)(t);return(0,n.useEffect)(()=>{u&&setTimeout(()=>{h.current.focus()},100)},[u,h]),(0,r.jsxs)("div",{className:"px-3",children:[(0,r.jsxs)("div",{className:"py-2 flex justify-between",children:[(0,r.jsx)(c.default,{siteInfo:l}),(0,r.jsx)("button",{onClick:()=>{f(!1)},children:(0,r.jsx)("i",{className:"fas fa-times"})})]}),(0,r.jsx)("input",{autoFocus:!0,id:"search-input",ref:h,className:"w-full h-12 rounded px-3 text-black",onChange:e=>{let t=e.target.value;if(!t||""===t){x(null==v?void 0:v.filter(e=>{var t;return null===(t=e.tags)||void 0===t?void 0:t.some(e=>e===(0,a.JA)("GAME_RECOMMEND_TAG","Recommend",o.default))}));return}let l=null==v?void 0:v.filter(e=>e.title.toLowerCase().includes(t.toLowerCase())||e.id.toLowerCase().includes(t.toLowerCase())||e.id.toLowerCase().replace("-","").includes(t.toLowerCase().replace("-","")));x((0,s.deepClone)(l))},placeholder:"Input the name of game"}),(0,r.jsx)("div",{className:"py-4",children:(0,r.jsx)(d.GameListNormal,{games:m})})]})}},90865:function(e,t,l){l.r(t);var r=l(85893),a=l(11163),s=l(67294);t.default=e=>{let{children:t,isOpen:l,onOpen:n,onClose:i,className:o}=e,d=(0,a.useRouter)();(0,s.useEffect)(()=>{let e=()=>{c(!1)};return d.events.on("routeChangeComplete",e),()=>{d.events.off("routeChangeComplete",e)}},[d.events]);let c=e=>{e?n&&n():i&&i();let t=window.document.getElementById("sidebar-drawer"),l=window.document.getElementById("sidebar-drawer-background");e?(null==t||t.classList.replace("-ml-96","ml-0"),null==l||l.classList.replace("hidden","block")):(null==t||t.classList.replace("ml-0","-ml-96"),null==l||l.classList.replace("block","hidden"))};return(0,r.jsxs)("div",{id:"sidebar-wrapper",className:"top-0 ".concat(o),children:[(0,r.jsx)("div",{id:"sidebar-drawer",className:"".concat(l?"ml-0 visible opacity-100":"-ml-96 invisible opacity-0"," w-96 bg-[#83FFE7] dark:bg-black shadow-black shadow-lg flex flex-col duration-300 fixed h-full left-0 overflow-y-scroll scroll-hidden top-0 z-30"),children:t}),(0,r.jsx)("div",{id:"sidebar-drawer-background",onClick:()=>{c(!1)},className:"".concat(l?"visible opacity-100":"invisible opacity-0 "," animate__animated animate__fadeIn fixed top-0 duration-300 left-0 z-20 w-full h-full bg-black/70")})]})}},16967:function(e,t,l){l.r(t);var r=l(85893),a=l(41664),s=l.n(a);t.default=e=>{let{tag:t}=e;return(0,r.jsx)(s(),{href:"/tag/".concat(encodeURIComponent(t)),children:(0,r.jsx)("p",{className:"cursor-pointer hover:bg-gray-50 dark:hover:bg-hexo-black-gray mr-1 rounded-full px-2 py-1 border leading-none text-sm dark:border-gray-600",children:t})})}},5113:function(e,t,l){l.r(t);var r=l(85893),a=l(41664),s=l.n(a);t.default=e=>{let{tag:t,selected:l=!1}=e;return(0,r.jsx)(s(),{href:l?"/":"/tag/".concat(encodeURIComponent(t.name)),className:" rounded hover:text-white hover:bg-green-500 text-black dark:text-white dark:bg-gray-800 py-0.5 px-1 ",passHref:!0,children:(0,r.jsxs)("span",{className:"flex flex-nowrap cursor-pointer",children:["# ",(0,r.jsx)("span",{children:t.name})," ",(0,r.jsx)("span",{className:"h-full flex items-start text-xs ml-1",children:t.count?"".concat(t.count):""})]})},t)}},80809:function(e,t,l){l.r(t),t.default={GAME_NAV_NOTION_ICON:!0,GAME_RECOMMEND_TAG:"Recommend",GAME_INDEX_EXPAND_RECOMMEND:!0,GAME_MENU_RANDOM_POST:!0,GAME_MENU_SEARCH_BUTTON:!0,GAME_MENU_CATEGORY:!1,GAME_MENU_TAG:!0,GAME_MENU_ARCHIVE:!1,GAME_MENU_SEARCH:!0,GAME_MENU_RSS:!1}},81616:function(e,t,l){l.r(t),l.d(t,{Layout404:function(){return H},LayoutArchive:function(){return U},LayoutBase:function(){return F},LayoutCategoryIndex:function(){return Y},LayoutIndex:function(){return D},LayoutPostList:function(){return J},LayoutSearch:function(){return z},LayoutSlug:function(){return B},LayoutTagIndex:function(){return q},THEME_CONFIG:function(){return G.default},useGameGlobal:function(){return P}});var r=l(85893),a=l(86429),s=l(46767),n=l(84588),i=l(31933),o=l(43838),d=l(78174),c=l(68020),u=l(69325),f=l(53040),m=l(41664),x=l.n(m),h=l(67294),v=l(89837),p=l(20682),g=l(53369),j=l(63228),w=l(92008),b=l(68849),N=l(74077),y=l(32586),k=l(51140),C=l(71529),E=l(53536),M=l(97517),O=l(88836),_=l(57825),A=l(38105),L=l(20654),I=l(11871),S=l(90865),G=l(80809),T=l(18119);let R=(0,h.createContext)(),P=()=>(0,h.useContext)(R),F=e=>{let{allNavPages:t,children:l,siteInfo:a}=e,n=(0,h.useRef)(null),[i,o]=(0,h.useState)(""),[c,m]=(0,h.useState)((0,d.deepClone)(null==t?void 0:t.filter(e=>{var t;return null===(t=e.tags)||void 0===t?void 0:t.some(e=>e===(0,u.JA)("GAME_RECOMMEND_TAG","Recommend",G.default))}))),[x,v]=(0,h.useState)([]),[p,g]=(0,h.useState)(!1);return(0,h.useEffect)(()=>{(0,f.f)()},[]),(0,r.jsx)(R.Provider,{value:{searchModal:n,filterKey:i,setFilterKey:o,recentGames:x,setRecentGames:v,filterGames:c,setFilterGames:m,sideBarVisible:p,setSideBarVisible:g},children:(0,r.jsxs)("div",{id:"theme-game",className:"".concat((0,u.JA)("FONT_STYLE")," w-full h-full min-h-screen justify-center dark:bg-black dark:bg-opacity-50 dark:text-gray-300 scroll-smooth"),children:[(0,r.jsx)(T.Style,{}),(0,r.jsxs)("div",{id:"wrapper",className:"relative flex justify-between w-full h-full mx-auto",children:[(0,r.jsx)("div",{className:"w-52 hidden xl:block relative z-10",children:(0,r.jsxs)("div",{className:"py-4 px-2 sticky top-0 h-screen flex flex-col justify-between",children:[(0,r.jsxs)("div",{className:"select-none",children:[(0,r.jsx)(_.default,{siteInfo:a}),(0,r.jsx)(A.MenuList,{...e})]}),(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)(s.AdSlot,{})})]})}),(0,r.jsxs)("main",{className:"flex-grow w-full h-full flex flex-col min-h-screen overflow-x-auto md:p-2",children:[(0,r.jsx)("div",{className:"flex-grow h-full",children:l}),(0,r.jsx)(N.Footer,{})]})]}),(0,r.jsx)(S.default,{isOpen:p,onClose:()=>{g(!1)},children:(0,r.jsx)(I.default,{siteInfo:a,...e})})]})})},D=e=>{let{tagOptions:t,currentTag:l,categoryOptions:a,currentCategory:n,siteInfo:i}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"p-2 xl:hidden",children:(0,r.jsx)(_.default,{siteInfo:i})}),(0,r.jsx)(E.GameListRecent,{}),(0,r.jsx)(J,{...e}),(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)(s.AdSlot,{type:"in-article"})}),(0,r.jsxs)("div",{className:"w-full bg-white dark:bg-hexo-black-gray rounded-lg p-2",children:[(0,r.jsx)(M.default,{categoryOptions:a,currentCategory:n}),(0,r.jsx)("hr",{}),(0,r.jsx)(O.default,{tagOptions:t,currentTag:l}),(0,r.jsx)(v.default,{...e,className:"p-2"})]})]})},J=e=>{let{posts:t}=e,{filterKey:l}=P(),a=[];return a=l&&t?t.filter(e=>{let t=(null==e?void 0:e.tags)?null==e?void 0:e.tags.join(" "):"";return(e.title+e.summary+t).toLowerCase().includes(l.toLowerCase())}):(0,d.deepClone)(t),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.default,{...e}),"page"===(0,u.JA)("POST_LIST_STYLE")?(0,r.jsx)(j.BlogListPage,{posts:a,...e}):(0,r.jsx)(w.BlogListScroll,{posts:a,...e})]})},z=e=>{let{keyword:t,posts:l}=e;(0,h.useEffect)(()=>{d.isBrowser&&(0,n.Z)({doms:document.getElementById("posts-wrapper"),search:t,target:{element:"span",className:"text-red-500 border-b border-dashed"}})},[]);let{filterKey:a}=P(),s=[];return s=a&&l?l.filter(e=>{let t=(null==e?void 0:e.tags)?null==e?void 0:e.tags.join(" "):"";return(e.title+e.summary+t).toLowerCase().includes(a.toLowerCase())}):(0,d.deepClone)(l),(0,r.jsx)(r.Fragment,{children:"page"===(0,u.JA)("POST_LIST_STYLE")?(0,r.jsx)(j.BlogListPage,{...e,posts:s}):(0,r.jsx)(w.BlogListScroll,{...e,posts:s})})},U=e=>{let{archivePosts:t}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"mb-10 pb-20 md:py-12 p-3  min-h-screen w-full",children:Object.keys(t).map(e=>(0,r.jsx)(g.default,{archiveTitle:e,archivePosts:t},e))})})},B=e=>{let{setRecentGames:t}=P(),{post:l,siteInfo:n,allNavPages:u,recommendPosts:f,lock:m,validPassword:x}=e,v=(0,d.shuffleArray)((0,d.deepClone)(u));return!function(e,t){if(!d.isBrowser||!e)return;let l={id:null==e?void 0:e.id,name:(null==e?void 0:e.title)+" | "+t.title,short_name:null==e?void 0:e.title,description:(null==e?void 0:e.summary)||t.description,icons:[{src:(0,o.h)(null==e?void 0:e.pageCoverThumbnail,192),type:"image/png",sizes:"192x192"}],form_factor:"phone",start_url:window.location.href,scope:window.location.href,display:"standalone",background_color:"#181818",theme_color:"#181818"},r=document.querySelector('link[rel="manifest"]');r&&r.parentNode&&r.parentNode.contains(r)&&r.parentNode.removeChild(r);let a=document.createElement("link");a.rel="manifest";let s=URL.createObjectURL(new Blob([JSON.stringify(l)],{type:"application/json"}));a.href=s,document.head.appendChild(a),window.addEventListener("unload",()=>{URL.revokeObjectURL(s)})}(l,n),(0,h.useEffect)(()=>{let e=localStorage.getItem("recent_games")?JSON.parse(localStorage.getItem("recent_games")):[],r=e.findIndex(e=>(null==e?void 0:e.id)===(null==l?void 0:l.id));if(-1===r)e.unshift(l);else{let t=e.splice(r,1)[0];e.unshift(t)}localStorage.setItem("recent_games",JSON.stringify(e)),t(e)},[l]),(0,r.jsxs)(r.Fragment,{children:[m&&(0,r.jsx)(p.ArticleLock,{validPassword:x}),!m&&(0,r.jsxs)("div",{id:"article-wrapper",children:[(0,r.jsx)("div",{className:"game-detail-wrapper w-full grow flex",children:(0,r.jsxs)("div",{className:"w-full md:py-2",children:[(0,r.jsx)(y.default,{post:l,siteInfo:n}),(0,r.jsxs)("div",{className:"game-info  dark:text-white py-2 px-2 md:px-0 mt-14 md:mt-0",children:[(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)(C.GameListRelate,{posts:f})}),l&&(0,r.jsxs)("div",{className:"bg-white shadow-md my-2 p-4 rounded-md dark:bg-black",children:[(0,r.jsx)(L.default,{post:l}),(0,r.jsx)(i.default,{post:l}),(0,r.jsx)(s.AdSlot,{}),(0,r.jsx)(c.default,{post:l}),(0,r.jsx)(a.default,{frontMatter:l})]})]})]})}),(0,r.jsx)(k.GameListIndexCombine,{posts:v})]})]})},H=e=>(0,r.jsx)(r.Fragment,{children:"404 Not found."}),Y=e=>{let{categoryOptions:t}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{id:"category-list",className:"duration-200 flex flex-wrap my-4 gap-2",children:null==t?void 0:t.map(e=>(0,r.jsx)(x(),{href:"/category/".concat(e.name),passHref:!0,legacyBehavior:!0,children:(0,r.jsxs)("div",{className:"bg-white rounded-lg hover:text-black dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600 px-5 cursor-pointer py-2 hover:bg-gray-100",children:[e.name,"(",e.count,")"]})},e.name))})})},q=e=>{let{tagOptions:t}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{children:(0,r.jsx)("div",{id:"tags-list",className:"duration-200 flex flex-wrap my-4 gap-2",children:t.map(e=>(0,r.jsxs)(x(),{href:"/tag/".concat(encodeURIComponent(e.name)),passHref:!0,className:" select-none cursor-pointer flex bg-white rounded-lg hover:bg-gray-500 hover:text-white duration-200 mr-2 py-1 px-2 text-xs whitespace-nowrap dark:hover:text-white  hover:shadow-xl  dark:bg-gray-800",children:[(0,r.jsx)("i",{className:"mr-1 fas fa-tag"})," ",e.name+(e.count?"(".concat(e.count,")"):"")," "]},e.name))})})})}},18119:function(e,t,l){l.r(t),l.d(t,{Style:function(){return n}});var r=l(85893),a=l(1822),s=l.n(a);let n=()=>(0,r.jsx)(s(),{id:"76e17a891fb257c1",children:".dark body{background-color:black}body{background-color:#fff;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http:\nbackground-attachment: fixed;\nbackground-size: cover;\n}\n\n)}"})}}]);