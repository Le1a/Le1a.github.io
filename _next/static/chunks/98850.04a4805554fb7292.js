"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98850,10885,58047,76160,29337,80916,42936],{4930:function(e,t,a){var r=a(85893),s=a(69325);t.Z=e=>{let{post:t,className:a}=e;return JSON.parse((0,s.JA)("COMMENT_TWIKOO_COUNT_ENABLE"))?(0,r.jsxs)("a",{href:"".concat(t.slug,"?target=comment"),className:"mx-1 hidden comment-count-wrapper-".concat(t.id," ").concat(a||""),children:[(0,r.jsx)("i",{className:"far fa-comment mr-1"}),(0,r.jsx)("span",{className:"comment-count-text-".concat(t.id)})]}):null}},10885:function(e,t,a){a.r(t);var r=a(85893),s=a(27134),n=a(67968),l=a(31933),c=a(4930),o=a(69325),d=a(93348),i=a(41664),u=a.n(i),x=a(42936),h=a(76160),f=a(80916);t.default=e=>{var t,a;let{post:i,showSummary:m}=e,_=(0,o.JA)("MEDIUM_POST_LIST_PREVIEW",null,x.default)&&i.blockMap,{locale:p}=(0,d.O)();return(0,r.jsx)("div",{"data-aos":"fade-up","data-aos-duration":"300","data-aos-once":"false","data-aos-anchor-placement":"top-bottom",className:"mb-6 max-w-7xl border-b dark:border-gray-800 ",children:(0,r.jsxs)("header",{className:"lg:py-8 py-4 flex flex-col w-full",children:[(0,r.jsx)(u(),{href:null==i?void 0:i.href,passHref:!0,className:"cursor-pointer font-bold  hover:underline text-3xl leading-tight text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400",children:(0,r.jsxs)("h2",{children:[(0,o.JA)("MEDIUM_POST_LIST_COVER",null,x.default)&&(0,r.jsx)("div",{className:"w-full max-h-96 object-cover overflow-hidden mb-2",children:(0,r.jsx)(s.Z,{src:i.pageCoverThumbnail,style:i.pageCoverThumbnail?{}:{height:"0px"},className:"w-full max-h-96 object-cover hover:scale-125 duration-150"})}),(0,o.JA)("POST_TITLE_ICON")&&(0,r.jsx)(n.Z,{icon:i.pageIcon}),i.title]})}),(0,r.jsxs)("div",{className:"flex mt-2 items-center justify-start flex-wrap space-x-3 text-gray-400",children:[(0,r.jsx)("div",{className:"text-sm py-1",children:null===(t=i.date)||void 0===t?void 0:t.start_date}),(0,o.JA)("MEDIUM_POST_LIST_CATEGORY",null,x.default)&&(0,r.jsx)(h.default,{category:i.category}),(0,o.JA)("MEDIUM_POST_LIST_TAG",null,x.default)&&(null==i?void 0:null===(a=i.tagItems)||void 0===a?void 0:a.map(e=>(0,r.jsx)(f.default,{tag:e},e.name))),(0,r.jsx)(c.Z,{post:i,className:"hover:underline"})]}),(0,r.jsx)("div",{className:"flex"}),(!_||m)&&(0,r.jsx)("main",{className:"my-4 text-gray-700 dark:text-gray-300 text-sm font-light leading-7",children:i.summary}),_&&(0,r.jsxs)("div",{className:"overflow-ellipsis truncate",children:[(0,r.jsx)(l.default,{post:i}),(0,r.jsx)("div",{className:"pointer-events-none border-t pt-8 border-dashed",children:(0,r.jsx)("div",{className:"w-full justify-start flex",children:(0,r.jsxs)(u(),{href:null==i?void 0:i.href,passHref:!0,className:"hover:bg-opacity-100 hover:scale-105 duration-200 pointer-events-auto transform font-bold text-green-500 cursor-pointer",children:[p.COMMON.ARTICLE_DETAIL,(0,r.jsx)("i",{className:"ml-1 fas fa-angle-right"})]})})})]})]})},i.id)}},58047:function(e,t,a){a.r(t);var r=a(85893),s=a(93348);t.default=e=>{let{currentSearch:t}=e,{locale:a}=(0,s.O)();return(0,r.jsx)("div",{className:"flex w-full items-center justify-center min-h-screen mx-auto md:-mt-20",children:(0,r.jsxs)("p",{className:"text-gray-500 dark:text-gray-300",children:[a.COMMON.NO_RESULTS_FOUND,"  ",t&&(0,r.jsx)("div",{children:t})]})})}},98850:function(e,t,a){a.r(t);var r=a(85893),s=a(69325),n=a(93348),l=a(10885),c=a(58047),o=a(29337);t.default=e=>{let{page:t=1,posts:a=[],postCount:d}=e,{NOTION_CONFIG:i}=(0,n.O)(),u=(0,s.JA)("POSTS_PER_PAGE",null,i);return a&&0!==a.length?(0,r.jsxs)("div",{className:"w-full justify-center",children:[(0,r.jsx)("div",{id:"posts-wrapper",children:null==a?void 0:a.map(e=>(0,r.jsx)(l.default,{post:e},e.id))}),(0,r.jsx)(o.default,{page:t,totalPage:Math.ceil(d/u)})]}):(0,r.jsx)(c.default,{})}},76160:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var r=a(85893),s=a(41664),n=a.n(s);function l(e){let{selected:t,category:a,categoryCount:s}=e;return(0,r.jsx)(n(),{href:"/category/".concat(a),passHref:!0,className:(t?"hover:text-white dark:hover:text-white bg-green-600 text-white ":"dark:text-green-400 text-gray-500 hover:text-white dark:hover:text-white hover:bg-green-600")+" flex text-sm items-center duration-300 cursor-pointer py-1 font-light px-2 whitespace-nowrap",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("i",{className:"mr-2 fas ".concat(t?"fa-folder-open":"fa-folder")}),a," ",s&&"(".concat(s,")")]})})}},29337:function(e,t,a){a.r(t);var r=a(85893),s=a(41664),n=a.n(s),l=a(11163),c=a(93348);t.default=e=>{let{page:t,totalPage:a}=e,{locale:s}=(0,c.O)(),o=(0,l.useRouter)(),d=+t,i=o.asPath.split("?")[0].replace(/\/page\/[1-9]\d*/,"").replace(/\/$/,"");return(0,r.jsxs)("div",{className:"my-10 flex justify-between font-medium text-black dark:text-gray-100 space-x-2",children:[(0,r.jsxs)(n(),{href:{pathname:2===d?"".concat(i,"/"):"".concat(i,"/page/").concat(d-1),query:o.query.s?{s:o.query.s}:{}},passHref:!0,rel:"prev",className:"".concat(1===d?"invisible":"block"," text-center w-full duration-200 px-4 py-2 hover:border-green-500 border-b-2 hover:font-bold"),children:["←",s.PAGINATION.PREV]}),(0,r.jsxs)(n(),{href:{pathname:"".concat(i,"/page/").concat(d+1),query:o.query.s?{s:o.query.s}:{}},passHref:!0,rel:"next",className:"".concat(+(d<a)?"block":"invisible"," text-center w-full duration-200 px-4 py-2 hover:border-green-500 border-b-2 hover:font-bold"),children:[s.PAGINATION.NEXT,"→"]})]})}},80916:function(e,t,a){a.r(t);var r=a(85893),s=a(41664),n=a.n(s);t.default=e=>{let{tag:t,selected:a=!1}=e;return(0,r.jsx)(n(),{href:a?"/":"/tag/".concat(encodeURIComponent(t.name)),passHref:!0,className:"cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200\n        mr-2 py-1 px-2 text-xs whitespace-nowrap dark:hover:text-white\n         ".concat(a?"text-white dark:text-gray-300 bg-black dark:bg-black dark:hover:bg-gray-900":"text-gray-600 hover:shadow-xl dark:border-gray-400 notion-".concat(t.color,"_background dark:bg-gray-800")),children:(0,r.jsxs)("div",{className:"font-light dark:text-gray-400",children:[a&&(0,r.jsx)("i",{className:"mr-1 fas fa-tag"})," ",t.name+(t.count?"(".concat(t.count,")"):"")," "]})},t)}},42936:function(e,t,a){a.r(t);var r=a(83454);let s={MEDIUM_RIGHT_PANEL_DARK:r.env.NEXT_PUBLIC_MEDIUM_RIGHT_DARK||!1,MEDIUM_POST_LIST_COVER:!0,MEDIUM_POST_LIST_PREVIEW:!0,MEDIUM_POST_LIST_CATEGORY:!0,MEDIUM_POST_LIST_TAG:!0,MEDIUM_POST_DETAIL_CATEGORY:!0,MEDIUM_POST_DETAIL_TAG:!0,MEDIUM_MENU_CATEGORY:!0,MEDIUM_MENU_TAG:!0,MEDIUM_MENU_ARCHIVE:!0,MEDIUM_MENU_SEARCH:!0,MEDIUM_WIDGET_REVOLVER_MAPS:r.env.NEXT_PUBLIC_WIDGET_REVOLVER_MAPS||"false",MEDIUM_WIDGET_TO_TOP:!0};t.default=s}}]);