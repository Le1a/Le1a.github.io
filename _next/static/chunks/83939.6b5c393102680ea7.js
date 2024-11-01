"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[83939,5034,62131,28782,81647,76322,30995],{5034:function(e,t,a){a.r(t);var n=a(85893),r=a(93348),s=a(31123),o=a(73214),i=a(67294);t.default=e=>{let{cRef:t,className:a}=e,{isDarkMode:l,updateDarkMode:c}=(0,r.O)();(0,i.useImperativeHandle)(t,()=>({handleChangeDarkMode:()=>{d()}}));let d=()=>{var e,t;let a=!l;(0,s.saveDarkModeToLocalStorage)(a),c(a);let n=document.getElementsByTagName("html")[0];null===(e=n.classList)||void 0===e||e.remove(a?"light":"dark"),null===(t=n.classList)||void 0===t||t.add(a?"dark":"light")};return(0,n.jsx)("div",{onClick:d,className:"".concat(a||""," cursor-pointer hover: scale-100 hover:bg-black hover:bg-opacity-10 rounded-full w-10 h-10 flex justify-center items-center duration-200 transition-all"),children:(0,n.jsxs)("div",{id:"darkModeButton",className:" cursor-pointer hover: scale-50 w-10 h-10 ",children:[" ",l?(0,n.jsx)(o.kO,{}):(0,n.jsx)(o.JF,{})]})})}},83939:function(e,t,a){a.r(t);var n=a(85893),r=a(1822),s=a.n(r),o=a(69325),i=a(78174),l=a(93096),c=a.n(l),d=a(11163),u=a(67294),f=a(5034),m=a(62131),h=a(45553),x=a(81647),v=a(76322),y=a(30995),p=a(59549);t.default=e=>{var t;let[a,r]=(0,u.useState)(!1),[l,b]=(0,u.useState)(!1),[w,j]=(0,u.useState)(!1),[g,k]=(0,u.useState)(0),N=(0,d.useRouter)(),A=(0,u.useRef)(),E=(0,u.useCallback)(c()(()=>{if(window.scrollY<=1){var e;r(!1),j(!1),b(!1),(null===(e=document)||void 0===e?void 0:e.querySelector("#post-bg"))&&(r(!0),b(!0))}else r(!0),b(!1),j(!0)},100));return(0,u.useEffect)(()=>{E()},[N]),(0,u.useEffect)(()=>(window.addEventListener("scroll",E),()=>{window.removeEventListener("scroll",E)}),[]),(0,u.useEffect)(()=>{let e=0,t=!1,a=()=>{t||(window.requestAnimationFrame(()=>{let a=window.scrollY;a>e?k(1):k(0),e=a,t=!1}),t=!0)};return i.isBrowser&&window.addEventListener("scroll",a),()=>{i.isBrowser&&window.removeEventListener("scroll",a)}},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s(),{id:"815c3437002de1ba",children:"@-webkit-keyframes fade-in-down{0%{opacity:.5;-webkit-transform:translatey(-30%);transform:translatey(-30%)}100%{opacity:1;-webkit-transform:translatey(0);transform:translatey(0)}}@-moz-keyframes fade-in-down{0%{opacity:.5;-moz-transform:translatey(-30%);transform:translatey(-30%)}100%{opacity:1;-moz-transform:translatey(0);transform:translatey(0)}}@-o-keyframes fade-in-down{0%{opacity:.5;-o-transform:translatey(-30%);transform:translatey(-30%)}100%{opacity:1;-o-transform:translatey(0);transform:translatey(0)}}@keyframes fade-in-down{0%{opacity:.5;-webkit-transform:translatey(-30%);-moz-transform:translatey(-30%);-o-transform:translatey(-30%);transform:translatey(-30%)}100%{opacity:1;-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}}@-webkit-keyframes fade-in-up{0%{opacity:.5;-webkit-transform:translatey(30%);transform:translatey(30%)}100%{opacity:1;-webkit-transform:translatey(0);transform:translatey(0)}}@-moz-keyframes fade-in-up{0%{opacity:.5;-moz-transform:translatey(30%);transform:translatey(30%)}100%{opacity:1;-moz-transform:translatey(0);transform:translatey(0)}}@-o-keyframes fade-in-up{0%{opacity:.5;-o-transform:translatey(30%);transform:translatey(30%)}100%{opacity:1;-o-transform:translatey(0);transform:translatey(0)}}@keyframes fade-in-up{0%{opacity:.5;-webkit-transform:translatey(30%);-moz-transform:translatey(30%);-o-transform:translatey(30%);transform:translatey(30%)}100%{opacity:1;-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}}.fade-in-down.jsx-815c3437002de1ba{-webkit-animation:fade-in-down.3s ease-in-out;-moz-animation:fade-in-down.3s ease-in-out;-o-animation:fade-in-down.3s ease-in-out;animation:fade-in-down.3s ease-in-out}.fade-in-up.jsx-815c3437002de1ba{-webkit-animation:fade-in-up.3s ease-in-out;-moz-animation:fade-in-up.3s ease-in-out;-o-animation:fade-in-up.3s ease-in-out;animation:fade-in-up.3s ease-in-out}"}),a&&!(null===(t=document)||void 0===t?void 0:t.querySelector("#post-bg"))&&(0,n.jsx)("div",{className:"jsx-815c3437002de1ba h-16"}),(0,n.jsx)("nav",{id:"nav",className:"jsx-815c3437002de1ba "+"z-20 h-16 top-0 w-full duration-300 transition-all\n            ".concat(a?"fixed":"relative bg-transparent"," \n            ").concat(l?"text-white ":"text-black dark:text-white","  \n            ").concat(w?"bg-white dark:bg-[#18171d] shadow":"bg-transparent"),children:(0,n.jsxs)("div",{className:"jsx-815c3437002de1ba flex h-full mx-auto justify-between items-center max-w-[86rem] px-6",children:[(0,n.jsx)(m.default,{...e}),(0,n.jsxs)("div",{id:"nav-bar-swipe",className:"jsx-815c3437002de1ba hidden lg:flex flex-grow flex-col items-center justify-center h-full relative w-full",children:[(0,n.jsx)("div",{className:"jsx-815c3437002de1ba "+"absolute transition-all duration-700 ".concat(0===g?"opacity-100 mt-0":"-mt-20 opacity-0 invisible"),children:(0,n.jsx)(h.MenuListTop,{...e})}),(0,n.jsx)("div",{className:"jsx-815c3437002de1ba "+"absolute transition-all duration-700 ".concat(1===g?"opacity-100 mb-0":"-mb-20 opacity-0 invisible"),children:(0,n.jsxs)("h1",{className:"jsx-815c3437002de1ba font-bold text-center text-light-400 dark:text-gray-400",children:[(0,o.JA)("AUTHOR")||(0,o.JA)("TITLE")," ",(0,o.JA)("BIO")&&(0,n.jsx)(n.Fragment,{children:"|"})," ",(0,o.JA)("BIO")]})})]}),(0,n.jsxs)("div",{className:"jsx-815c3437002de1ba flex flex-shrink-0 justify-end items-center w-48",children:[(0,n.jsx)(x.default,{...e}),(0,n.jsx)(y.default,{...e}),!JSON.parse((0,o.JA)("THEME_SWITCH"))&&(0,n.jsx)("div",{className:"jsx-815c3437002de1ba hidden md:block",children:(0,n.jsx)(f.default,{...e})}),(0,n.jsx)(v.default,{}),(0,n.jsx)("div",{onClick:()=>{var e;null==A||null===(e=A.current)||void 0===e||e.toggleSlideOvers()},className:"jsx-815c3437002de1ba flex lg:hidden w-8 justify-center items-center h-8 cursor-pointer",children:(0,n.jsx)("i",{className:"jsx-815c3437002de1ba fas fa-bars"})})]}),(0,n.jsx)(p.default,{cRef:A,...e})]})})]})}},62131:function(e,t,a){a.r(t);var n=a(85893),r=a(73214),s=a(27134),o=a(69325),i=a(41664),l=a.n(i);t.default=e=>{let{siteInfo:t}=e;return(0,n.jsx)(l(),{href:"/",passHref:!0,legacyBehavior:!0,children:(0,n.jsxs)("div",{className:"flex flex-nowrap items-center cursor-pointer font-extrabold",children:[(0,n.jsx)(s.Z,{src:null==t?void 0:t.icon,width:24,height:24,alt:(0,o.JA)("AUTHOR"),className:"mr-4 hidden md:block"}),(0,n.jsxs)("div",{id:"logo-text",className:"group rounded-2xl flex-none relative",children:[(0,n.jsx)("div",{className:"logo group-hover:opacity-0 opacity-100 visible group-hover:invisible text-lg my-auto rounded dark:border-white duration-200",children:(0,o.JA)("TITLE")}),(0,n.jsx)("div",{className:"flex justify-center rounded-2xl group-hover:bg-indigo-600 w-full group-hover:opacity-100 opacity-0 invisible group-hover:visible absolute top-0 py-1 duration-200",children:(0,n.jsx)(r.SK,{className:"w-6 h-6 stroke-white stroke-2 "})})]})]})})}},28782:function(e,t,a){a.r(t),a.d(t,{MenuItemDrop:function(){return i}});var n=a(85893),r=a(41664),s=a.n(r),o=a(67294);let i=e=>{var t;let{link:a}=e,[r,i]=(0,o.useState)(!1),l=(null==a?void 0:null===(t=a.subMenus)||void 0===t?void 0:t.length)>0;return a&&a.show?(0,n.jsxs)("div",{onMouseOver:()=>i(!0),onMouseOut:()=>i(!1),children:[!l&&(0,n.jsxs)(s(),{target:null==a?void 0:a.target,href:null==a?void 0:a.href,className:" hover:bg-black hover:bg-opacity-10 rounded-2xl flex justify-center items-center px-3 py-1 no-underline tracking-widest",children:[(null==a?void 0:a.icon)&&(0,n.jsx)("i",{className:null==a?void 0:a.icon})," ",null==a?void 0:a.name]}),l&&(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"cursor-pointer  hover:bg-black hover:bg-opacity-10 rounded-2xl flex justify-center items-center px-3 py-1 no-underline tracking-widest",children:[(null==a?void 0:a.icon)&&(0,n.jsx)("i",{className:null==a?void 0:a.icon})," ",null==a?void 0:a.name]})}),l&&(0,n.jsx)("ul",{style:{backdropFilter:"blur(3px)"},className:"".concat(r?"visible opacity-100 top-14":"invisible opacity-0 top-20"," drop-shadow-md overflow-hidden rounded-xl bg-white dark:bg-[#1e1e1e] transition-all duration-300 z-20 absolute"),children:a.subMenus.map((e,t)=>(0,n.jsx)("li",{className:"cursor-pointer hover:bg-blue-600 dark:hover:bg-yellow-600 hover:text-white text-gray-900 dark:text-gray-100  tracking-widest transition-all duration-200 py-1 pr-6 pl-3",children:(0,n.jsx)(s(),{href:e.href,target:null==a?void 0:a.target,children:(0,n.jsxs)("span",{className:"text-sm text-nowrap font-extralight",children:[(null==a?void 0:a.icon)&&(0,n.jsx)("i",{className:null==e?void 0:e.icon,children:" \xa0 "}),e.title]})})},t))})]}):null}},45553:function(e,t,a){a.r(t),a.d(t,{MenuListTop:function(){return l}});var n=a(85893),r=a(69325),s=a(93348),o=a(68632),i=a(28782);let l=e=>{let{customNav:t,customMenu:a}=e,{locale:l}=(0,s.O)(),c=[{id:1,icon:"fa-solid fa-house",name:l.NAV.INDEX,href:"/",show:(0,r.JA)("HEO_MENU_INDEX",null,o.default)},{id:2,icon:"fas fa-search",name:l.NAV.SEARCH,href:"/search",show:(0,r.JA)("HEO_MENU_SEARCH",null,o.default)},{id:3,icon:"fas fa-archive",name:l.NAV.ARCHIVE,href:"/archive",show:(0,r.JA)("HEO_MENU_ARCHIVE",null,o.default)}];return(t&&(c=c.concat(t)),(0,r.JA)("CUSTOM_MENU")&&(c=a),c&&0!==c.length)?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("nav",{id:"nav-mobile",className:"leading-8 justify-center font-light w-full flex",children:null==c?void 0:c.map((e,t)=>e&&e.show&&(0,n.jsx)(i.MenuItemDrop,{link:e},t))})}):null}},81647:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var n=a(85893),r=a(69325),s=a(93348),o=a(11163);function i(e){let{latestPosts:t}=e,a=(0,o.useRouter)(),{locale:i}=(0,s.O)();return(0,n.jsx)("div",{title:i.MENU.WALK_AROUND,className:"cursor-pointer hover:bg-black hover:bg-opacity-10 rounded-full w-10 h-10 flex justify-center items-center duration-200 transition-all",onClick:function(){let e=Math.floor(Math.random()*t.length),n=t[e];a.push("".concat((0,r.JA)("SUB_PATH",""),"/").concat(null==n?void 0:n.slug))},children:(0,n.jsx)("i",{className:"fa-solid fa-podcast"})})}},76322:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var n=a(85893),r=a(73214),s=a(67294);function o(){let[e,t]=(0,s.useState)(0);return(0,s.useEffect)(()=>{let e;function a(){(function(){let e=document.documentElement.scrollHeight,a=document.documentElement.clientHeight;t(Math.floor((window.scrollY||window.pageYOffset)/(e-a-20)*100))})(),e=null}function n(){e||(e=requestAnimationFrame(a))}return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n),e&&cancelAnimationFrame(e)}},[]),(0,n.jsxs)("div",{title:"阅读进度",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"".concat(e>0?"w-10 h-10 ":"w-0 h-0 opacity-0"," group cursor-pointer  hover:bg-black hover:bg-opacity-10 rounded-full flex justify-center items-center duration-200 transition-all"),children:[(0,n.jsx)(r.z$,{className:"w-5 h-5 hidden group-hover:block"}),(0,n.jsx)("div",{className:"group-hover:hidden text-xs flex justify-center items-center rounded-full w-6 h-6 bg-black text-white",children:e<100?e:(0,n.jsx)(r.z$,{className:"w-5 h-5 fill-white"})})]})}},30995:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(85893),r=a(69325),s=a(93348),o=a(5152),i=a.n(o),l=a(11163),c=a(67294);let d=i()(()=>Promise.all([a.e(70755),a.e(85504)]).then(a.bind(a,85504)),{loadableGenerated:{webpack:()=>[85504]},ssr:!1});function u(e){let{locale:t}=(0,s.O)(),a=(0,l.useRouter)(),o=(0,c.useRef)(null);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{onClick:function(){(0,r.JA)("ALGOLIA_APP_ID")?o.current.openSearch():a.push("/search")},title:t.NAV.SEARCH,alt:t.NAV.SEARCH,className:"cursor-pointer hover:bg-black hover:bg-opacity-10 rounded-full w-10 h-10 flex justify-center items-center duration-200 transition-all",children:(0,n.jsx)("i",{title:t.NAV.SEARCH,className:"fa-solid fa-magnifying-glass"})}),(0,n.jsx)(d,{cRef:o,...e})]})}}}]);