"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[24174,83255,11858],{24174:function(e,t,n){n.r(t),n.d(t,{MenuBarMobile:function(){return o}});var r=n(85893),a=n(69325),l=n(93348),i=n(11858),s=n(83255);let o=e=>{let{customMenu:t,customNav:n}=e,{locale:o}=(0,l.O)(),c=[{name:o.COMMON.CATEGORY,href:"/category",show:(0,a.JA)("GITBOOK_MENU_CATEGORY",null,i.default)},{name:o.COMMON.TAGS,href:"/tag",show:(0,a.JA)("GITBOOK_BOOK_MENU_TAG",null,i.default)},{name:o.NAV.ARCHIVE,href:"/archive",show:(0,a.JA)("GITBOOK_MENU_ARCHIVE",null,i.default)}];return(n&&(c=c.concat(n)),(0,a.JA)("CUSTOM_MENU")&&(c=t),c&&0!==c.length)?(0,r.jsx)("nav",{id:"nav",className:" text-md",children:null==c?void 0:c.map((t,n)=>(0,r.jsx)(s.MenuItemCollapse,{onHeightChange:e.onHeightChange,link:t},n))}):null}},83255:function(e,t,n){n.r(t),n.d(t,{MenuItemCollapse:function(){return c}});var r=n(85893),a=n(22468),l=n(41664),i=n.n(l),s=n(11163),o=n(67294);let c=e=>{var t,n;let{link:l}=e,[c,O]=(0,o.useState)(!1),d=(null==l?void 0:null===(t=l.subMenus)||void 0===t?void 0:t.length)>0,[u,_]=(0,o.useState)(!1),h=(0,s.useRouter)();if(!l||!l.show)return null;let E=h.pathname===l.href||h.asPath===l.href;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:(E?"bg-green-600 text-white hover:text-white":"hover:text-green-600")+" px-7 w-full text-left duration-200 dark:bg-hexo-black-gray dark:border-black",onClick:()=>{O(!c)},children:[!d&&(0,r.jsx)(i(),{href:null==l?void 0:l.href,target:null==l?void 0:l.target,className:"py-2 w-full my-auto items-center justify-between flex  ",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"".concat(l.icon," text-center w-4 mr-4")}),l.name]})}),d&&(0,r.jsxs)("div",{onClick:d?()=>{_(!u)}:null,className:"py-2 font-extralight flex justify-between cursor-pointer  dark:text-gray-200 no-underline tracking-widest",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"".concat(l.icon," text-center w-4 mr-4")}),l.name]}),(0,r.jsx)("div",{className:"inline-flex items-center ",children:(0,r.jsx)("i",{className:"px-2 fas fa-chevron-right transition-all duration-200 ".concat(u?"rotate-90":"")})})]})]}),d&&(0,r.jsx)(a.Z,{isOpen:u,onHeightChange:e.onHeightChange,children:null==l?void 0:null===(n=l.subMenus)||void 0===n?void 0:n.map((e,t)=>(0,r.jsx)("div",{className:" not:last-child:border-b-0 border-b dark:border-gray-800 py-2 px-14 cursor-pointer hover:bg-gray-100 dark:text-gray-200 font-extralight dark:bg-black text-left justify-start text-gray-600 bg-gray-50 dark:hover:bg-gray-900 tracking-widest transition-all duration-200",children:(0,r.jsx)(i(),{href:e.href,target:null==l?void 0:l.target,children:(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"".concat(e.icon," text-center w-3 mr-3 text-xs")}),e.title]})})},t))})]})}},11858:function(e,t,n){n.r(t);var r=n(83454);let a={GITBOOK_INDEX_PAGE:"about",GITBOOK_AUTO_SORT:r.env.NEXT_PUBLIC_GITBOOK_AUTO_SORT||!0,GITBOOK_LATEST_POST_RED_BADGE:r.env.NEXT_PUBLIC_GITBOOK_LATEST_POST_RED_BADGE||!0,GITBOOK_MENU_CATEGORY:!0,GITBOOK_BOOK_MENU_TAG:!0,GITBOOK_MENU_ARCHIVE:!0,GITBOOK_MENU_SEARCH:!0,GITBOOK_EXCLUSIVE_COLLAPSE:!0,GITBOOK_FOLDER_HOVER_EXPAND:!1,GITBOOK_WIDGET_REVOLVER_MAPS:r.env.NEXT_PUBLIC_WIDGET_REVOLVER_MAPS||"false",GITBOOK_WIDGET_TO_TOP:!0};t.default=a}}]);