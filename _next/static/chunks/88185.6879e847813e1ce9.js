"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[88185,74678,60973],{31761:function(e,a,l){function s(e,a){if(!e||!a)return e||"";let l=new Date(e).toLocaleDateString(a,{year:"numeric",month:"short",day:"numeric"});return"zh"===a.slice(0,2).toLowerCase()?l.replace("年","-").replace("月","-").replace("日",""):l}function n(e,a){let l=new Date(e),s={"M+":l.getMonth()+1,"d+":l.getDate(),"h+":l.getHours(),"m+":l.getMinutes(),"s+":l.getSeconds(),"q+":Math.floor((l.getMonth()+3)/3),S:l.getMilliseconds()};for(let e in/(y+)/.test(a)&&(a=a.replace(RegExp.$1,(l.getFullYear()+"").substr(4-RegExp.$1.length))),s)RegExp("("+e+")").test(a)&&(a=a.replace(RegExp.$1,1===RegExp.$1.length?s[e]:("00"+s[e]).substr((""+s[e]).length)));return a.trim()}l.d(a,{Z:function(){return s},x:function(){return n}})},60973:function(e,a,l){l.r(a),l.d(a,{default:function(){return o}});var s=l(85893),n=l(41664),r=l.n(n),t=l(93348),i=l(74678),c=l(69325),_=l(31761),d=l(67968);function o(e){var a;let{post:l}=e,{locale:n}=(0,t.O)();return(0,s.jsxs)("section",{className:"mt-2 text-gray-600 dark:text-gray-400 leading-8",children:[(0,s.jsxs)("h2",{className:"blog-item-title mb-5 font-bold text-black text-xl md:text-2xl no-underline",children:[(0,c.JA)("POST_TITLE_ICON")&&(0,s.jsx)(d.Z,{icon:null==l?void 0:l.pageIcon}),null==l?void 0:l.title]}),(0,s.jsxs)("div",{className:"flex flex-wrap text-gray-700 dark:text-gray-300",children:[(null==l?void 0:l.type)!=="Page"&&(0,s.jsxs)("div",{className:"space-x-3 mr-4",children:[(0,s.jsxs)("span",{children:[" ",(0,s.jsx)("i",{className:"fa-regular fa-user"})," ",(0,s.jsx)("a",{href:(0,c.JA)("SIMPLE_AUTHOR_LINK",null,i.default),children:(0,c.JA)("AUTHOR")})]}),(0,s.jsxs)("span",{children:[" ",(0,s.jsx)("i",{className:"fa-regular fa-clock"})," ",null==l?void 0:l.publishDay]}),(null==l?void 0:l.category)&&(0,s.jsxs)("span",{children:["  ",(0,s.jsx)("i",{className:"fa-regular fa-folder"})," ",(0,s.jsx)("a",{href:"/category/".concat(null==l?void 0:l.category),className:"hover:text-red-400 transition-all duration-200",children:null==l?void 0:l.category})]}),(null==l?void 0:l.tags)&&(null==l?void 0:null===(a=l.tags)||void 0===a?void 0:a.length)>0&&(null==l?void 0:l.tags.map(e=>(0,s.jsxs)("span",{children:[" / ",(0,s.jsx)(r(),{href:"/tag/".concat(e),children:(0,s.jsx)("span",{className:" hover:text-red-400 transition-all duration-200",children:e})})]},e)))]}),(null==l?void 0:l.type)!=="Page"&&(0,s.jsxs)("div",{className:"",children:[(0,s.jsxs)("span",{children:[n.COMMON.POST_TIME,":",(0,s.jsx)(r(),{href:"/archive#".concat((0,_.x)(null==l?void 0:l.publishDate,"yyyy-MM")),passHref:!0,className:"pl-1 mr-2 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200 border-b dark:border-gray-500 border-dashed",children:null==l?void 0:l.publishDay})]}),(0,s.jsx)("span",{className:"mr-2",children:"|"}),(0,s.jsxs)("span",{className:"mx-2  dark:text-gray-500",children:[n.COMMON.LAST_EDITED_TIME,": ",null==l?void 0:l.lastEditedDay]}),(0,s.jsx)("span",{className:"mr-2",children:"|"}),(0,s.jsxs)("span",{className:"hidden busuanzi_container_page_pv font-light mr-2",children:[(0,s.jsx)("i",{className:"mr-1 fas fa-eye"}),"\xa0",(0,s.jsx)("span",{className:"mr-2 busuanzi_value_page_pv"})]})]})]})]})}},74678:function(e,a,l){l.r(a);var s=l(83454);let n={SIMPLE_LOGO_IMG:"/Logo.webp",SIMPLE_TOP_BAR:!0,SIMPLE_TOP_BAR_CONTENT:s.env.NEXT_PUBLIC_THEME_SIMPLE_TOP_TIPS||"",SIMPLE_LOGO_DESCRIPTION:s.env.NEXT_PUBLIC_THEME_SIMPLE_LOGO_DESCRIPTION||"<div>编程爱好者<br/>/互联网从业者<br/>/知识分享博主</div>",SIMPLE_AUTHOR_LINK:s.env.NEXT_PUBLIC_AUTHOR_LINK||"#",SIMPLE_POST_AD_ENABLE:s.env.NEXT_PUBLIC_SIMPLE_POST_AD_ENABLE||!1,SIMPLE_POST_COVER_ENABLE:s.env.NEXT_PUBLIC_SIMPLE_POST_COVER_ENABLE||!1,SIMPLE_ARTICLE_RECOMMEND_POSTS:s.env.NEXT_PUBLIC_SIMPLE_ARTICLE_RECOMMEND_POSTS||!0,SIMPLE_MENU_CATEGORY:!0,SIMPLE_MENU_TAG:!0,SIMPLE_MENU_ARCHIVE:!0,SIMPLE_MENU_SEARCH:!0};a.default=n}}]);