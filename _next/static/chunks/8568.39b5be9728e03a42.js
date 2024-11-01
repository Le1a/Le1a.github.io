"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8568,56253,33510,94564,56027],{42334:function(e,r,a){a.r(r);var t=a(85893),l=a(27134),n=a(33510),o=a(69325),s=a(41664),i=a.n(s),d=a(68632),c=a(56027);r.default=e=>{var r;let{index:a,post:s,showSummary:u,siteInfo:h}=e,x=(0,o.JA)("HEO_POST_LIST_PREVIEW",null,d.default)&&s.blockMap;s&&!s.pageCoverThumbnail&&(0,o.JA)("HEO_POST_LIST_COVER_DEFAULT",null,d.default)&&(s.pageCoverThumbnail=null==h?void 0:h.pageCover);let g=(0,o.JA)("HEO_POST_LIST_COVER",null,d.default)&&(null==s?void 0:s.pageCoverThumbnail)&&!x,p=(0,o.JA)("HEO_HOME_POST_TWO_COLS",!0,d.default),f=(0,o.JA)("HEO_POST_LIST_COVER_HOVER_ENLARGE",!0,d.default);return(0,t.jsx)("article",{className:" ".concat(f," ? ' hover:transition-all duration-150' : ''}"),children:(0,t.jsxs)("div",{"data-wow-delay":".2s",className:(p?"2xl:h-96 2xl:flex-col":"")+" wow fadeInUp border bg-white dark:bg-[#1e1e1e] flex mb-4 flex-col h-[23rem] md:h-52 md:flex-row  group w-full dark:border-gray-600 hover:border-indigo-600  dark:hover:border-yellow-600 duration-300 transition-colors justify-between overflow-hidden rounded-xl",children:[g&&(0,t.jsx)(i(),{href:null==s?void 0:s.href,passHref:!0,legacyBehavior:!0,children:(0,t.jsx)("div",{className:(p?" 2xl:w-full":"")+" w-full md:w-5/12 overflow-hidden cursor-pointer select-none",children:(0,t.jsx)(l.Z,{priority:0===a,src:null==s?void 0:s.pageCoverThumbnail,alt:null==s?void 0:s.title,className:"h-full w-full object-cover group-hover:scale-105 group-hover:brightness-75 transition-all duration-500 ease-in-out"})})}),(0,t.jsxs)("div",{className:(p?"2xl:p-4 2xl:h-48 2xl:w-full":"")+" flex p-6  flex-col justify-between h-48 md:h-full w-full md:w-7/12",children:[(0,t.jsxs)("header",{children:[(null==s?void 0:s.category)&&(0,t.jsx)("div",{className:"flex mb-1 items-center ".concat(x?"justify-center":"justify-start"," hidden md:block flex-wrap dark:text-gray-300 text-gray-600 hover:text-indigo-700 dark:hover:text-yellow-500"),children:(0,t.jsx)(i(),{passHref:!0,href:"/category/".concat(s.category),className:"cursor-pointer text-xs font-normal menu-link ",children:s.category})}),(0,t.jsxs)(i(),{href:null==s?void 0:s.href,passHref:!0,className:" group-hover:text-indigo-700 dark:hover:text-yellow-700 dark:group-hover:text-yellow-600 text-black dark:text-gray-100  line-clamp-2 replace cursor-pointer text-xl font-extrabold leading-tight",children:[(0,o.JA)("POST_TITLE_ICON")&&(0,t.jsx)(n.default,{icon:s.pageIcon,className:"heo-icon w-6 h-6 mr-1 align-middle transform translate-y-[-8%]"}),(0,t.jsx)("span",{className:"menu-link ",children:s.title})]})]}),(!x||u)&&(0,t.jsx)("main",{className:"line-clamp-2 replace text-gray-700  dark:text-gray-300 text-sm font-light leading-tight",children:s.summary}),(0,t.jsx)("div",{className:"md:flex-nowrap flex-wrap md:justify-start inline-block",children:(0,t.jsxs)("div",{children:[" ",null===(r=s.tagItems)||void 0===r?void 0:r.map(e=>(0,t.jsx)(c.default,{tag:e},e.name))]})})]})]})})}},56253:function(e,r,a){a.r(r);var t=a(85893),l=a(93348);r.default=e=>{let{currentSearch:r}=e,{locale:a}=(0,l.O)();return(0,t.jsx)("div",{className:"flex w-full items-center justify-center min-h-screen mx-auto md:-mt-20",children:(0,t.jsxs)("div",{className:"text-gray-500 dark:text-gray-300",children:[a.COMMON.NO_MORE," ",r&&(0,t.jsx)("div",{children:r})]})})}},8568:function(e,r,a){a.r(r);var t=a(85893),l=a(69325),n=a(93348),o=a(68632),s=a(42334),i=a(56253),d=a(94564);r.default=e=>{let{page:r=1,posts:a=[],postCount:c,siteInfo:u}=e,{NOTION_CONFIG:h}=(0,n.O)(),x=(0,l.JA)("POSTS_PER_PAGE",12,h),g=Math.ceil(c/x),p=(0,l.JA)("HEO_HOME_POST_TWO_COLS",!0,o.default);return!a||0===a.length||r>g?(0,t.jsx)(i.default,{}):(0,t.jsxs)("div",{id:"container",className:"w-full",children:[(0,t.jsx)("div",{className:"".concat(p&&"2xl:grid 2xl:grid-cols-2"," grid-cols-1 gap-5"),children:null==a?void 0:a.map(e=>(0,t.jsx)(s.default,{index:a.indexOf(e),post:e,siteInfo:u},e.id))}),c>=x&&(0,t.jsx)(d.default,{page:r,totalPage:g})]})}},33510:function(e,r,a){a.r(r);var t=a(85893),l=a(27134);r.default=e=>{let{icon:r,className:a="w-8 h-8 my-auto inline mr-1"}=e;return r?r.startsWith("http")||r.startsWith("data:")?(0,t.jsx)(l.Z,{src:r,className:a}):(0,t.jsx)("span",{className:"inline-block ".concat(a),children:r}):(0,t.jsx)(t.Fragment,{})}},94564:function(e,r,a){a.r(r);var t=a(85893),l=a(73214),n=a(93348),o=a(41664),s=a.n(o),i=a(11163),d=a(67294);function c(e,r,a){let l=e+""==r+"";return e?(0,t.jsx)(s(),{href:1===e?"".concat(a,"/"):"".concat(a,"/page/").concat(e),passHref:!0,className:(l?"bg-indigo-600 dark:bg-yellow-600 text-white ":"dark:bg-[#1e1e1e] bg-white")+" hover:border-indigo-600 dark:hover:bg-yellow-600 dark:border-gray-600 px-4 border py-2 rounded-lg drop-shadow-sm duration-200 transition-colors",children:e},e):(0,t.jsx)(t.Fragment,{})}r.default=e=>{let{page:r,totalPage:a}=e,o=(0,i.useRouter)(),{locale:u}=(0,n.O)(),h=+r,x=r<a,g=1!==h,p=o.asPath.split("?")[0].replace(/\/page\/[1-9]\d*/,"").replace(/\/$/,"").replace(".html",""),f=function(e,r,a,l){let n=[];if(l<=7)for(let a=1;a<=l;a++)n.push(c(a,r,e));else{n.push(c(1,r,e));let o=a-2;o<=1&&(o=2),o+5>l&&(o=l-5),o>2&&n.push((0,t.jsxs)("div",{className:"-mt-2 mx-1",children:["..."," "]},-1));for(let a=0;a<5;a++)o+a<l&&n.push(c(o+a,r,e));o+5<l&&n.push((0,t.jsx)("div",{children:"... "},-2)),n.push(c(l,r,e))}return n}(p,r,h,a),[m,v]=(0,d.useState)("");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"hidden lg:flex justify-between items-end mt-10 font-medium text-black duration-500 dark:text-gray-300 pt-3 space-x-2 overflow-x-auto",children:[(0,t.jsx)(s(),{href:{pathname:2===h?"".concat(p,"/"):"".concat(p,"/page/").concat(h-1),query:o.query.s?{s:o.query.s}:{}},rel:"prev",className:"".concat(1===h?"invisible":"block"),children:(0,t.jsxs)("div",{className:"hover:border-indigo-600 dark:hover:border-yellow-600 relative w-24 h-10 flex items-center transition-all duration-200 justify-center py-2 px-2 bg-white dark:bg-[#1e1e1e] border dark:border-gray-600 rounded-lg cursor-pointer group",children:[(0,t.jsx)("i",{className:"fas fa-angle-left mr-2 transition-all duration-200 transform group-hover:-translate-x-4"}),(0,t.jsx)("div",{className:"absolute translate-x-4 ml-2 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0",children:u.PAGINATION.PREV})]})}),(0,t.jsxs)("div",{className:"flex items-center space-x-2",children:[f,(0,t.jsxs)("div",{className:"bg-white hover:bg-gray-100 dark:hover:bg-yellow-600  dark:bg-[#1e1e1e]  h-10 border dark:border-gray-600 flex justify-center items-center rounded-lg group hover:border-indigo-600 transition-all duration-200",children:[(0,t.jsx)("input",{value:m,className:"w-0 group-hover:w-20 group-hover:px-3 transition-all duration-200 bg-gray-100 border-none outline-none h-full rounded-lg",onInput:e=>{v(e.target.value.replace(/[^0-9]/g,""))}}),(0,t.jsx)("div",{onClick:()=>{m&&o.push(1===m?"".concat(p,"/"):"".concat(p,"/page/").concat(m))},className:"cursor-pointer hover:bg-indigo-600  dark:bg-[#1e1e1e] dark:hover:bg-yellow-600 hover:text-white px-4 py-2 group-hover:px-2 group-hover:mx-1 group-hover:rounded bg-white",children:(0,t.jsx)(l.Bl,{className:"w-4 h-4"})})]})]}),(0,t.jsx)(s(),{href:{pathname:"".concat(p,"/page/").concat(h+1),query:o.query.s?{s:o.query.s}:{}},rel:"next",className:"".concat(+x?"block":"invisible"," "),children:(0,t.jsxs)("div",{className:"hover:border-indigo-600 dark:hover:border-yellow-600 relative w-24 h-10 flex items-center transition-all duration-200 justify-center py-2 px-2 bg-white dark:bg-[#1e1e1e] border dark:border-gray-600 rounded-lg cursor-pointer group",children:[(0,t.jsx)("i",{className:"fas fa-angle-right mr-2 transition-all duration-200 transform group-hover:translate-x-6"}),(0,t.jsx)("div",{className:"absolute -translate-x-10 ml-2 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-translate-x-2",children:u.PAGINATION.NEXT})]})})]}),(0,t.jsxs)("div",{className:"lg:hidden w-full flex flex-row",children:[(0,t.jsx)(s(),{href:{pathname:2===h?"".concat(p,"/"):"".concat(p,"/page/").concat(h-1),query:o.query.s?{s:o.query.s}:{}},rel:"prev",className:"".concat(g?"block":"hidden"," dark:text-white relative w-full flex-1 h-14 flex items-center transition-all duration-200 justify-center py-2 px-2 bg-white dark:bg-[#1e1e1e] border rounded-xl cursor-pointer"),children:u.PAGINATION.PREV}),g&&x&&(0,t.jsx)("div",{className:"w-12"}),(0,t.jsx)(s(),{href:{pathname:"".concat(p,"/page/").concat(h+1),query:o.query.s?{s:o.query.s}:{}},rel:"next",className:"".concat(+x?"block":"hidden"," dark:text-white relative w-full flex-1 h-14 flex items-center transition-all duration-200 justify-center py-2 px-2 bg-white dark:bg-[#1e1e1e] border rounded-xl cursor-pointer"),children:u.PAGINATION.NEXT})]})]})}},56027:function(e,r,a){a.r(r);var t=a(85893),l=a(73214),n=a(41664),o=a.n(n);r.default=e=>{let{tag:r,selected:a=!1}=e;return(0,t.jsx)(o(),{href:a?"/":"/tag/".concat(encodeURIComponent(r.name)),passHref:!0,className:"cursor-pointer inline-block hover:text-white hover:bg-indigo-600 dark:hover:bg-yellow-600 px-2 py-1 rounded-2xl dark:text-white duration-200 text-sm whitespace-nowrap ",children:(0,t.jsxs)("div",{className:"font-light flex items-center",children:[(0,t.jsx)(l.VN,{className:"stroke-2 mr-0.5 w-3 h-3"})," ",r.name+(r.count?"(".concat(r.count,")"):"")," "]})},r)}}}]);