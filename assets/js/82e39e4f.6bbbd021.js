"use strict";(self.webpackChunkconvermax_docs=self.webpackChunkconvermax_docs||[]).push([[374],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),h=c(a),m=n,g=h["".concat(s,".").concat(m)]||h[m]||l[m]||o;return a?r.createElement(g,i(i({ref:t},d),{},{components:a})):r.createElement(g,i({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9178:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={title:"How to add Convermax script and search page into your Shift4Shop store",sidebar_label:"Add Convermax Script And Search Page"},i=void 0,p={unversionedId:"platforms/shift4shop/howto-add-script-and-search-page",id:"platforms/shift4shop/howto-add-script-and-search-page",title:"How to add Convermax script and search page into your Shift4Shop store",description:"To add Convermax script:",source:"@site/docs/platforms/shift4shop/howto-add-script-and-search-page.md",sourceDirName:"platforms/shift4shop",slug:"/platforms/shift4shop/howto-add-script-and-search-page",permalink:"/docs/platforms/shift4shop/howto-add-script-and-search-page",draft:!1,editUrl:"https://github.com/Convermax/SiteSearch/edit/master/Docs/website/docs/platforms/shift4shop/howto-add-script-and-search-page.md",tags:[],version:"current",frontMatter:{title:"How to add Convermax script and search page into your Shift4Shop store",sidebar_label:"Add Convermax Script And Search Page"},sidebar:"platforms",previous:{title:"Add Convermax App",permalink:"/docs/platforms/shift4shop/howto-add-app"},next:{title:"What We Can Use To Build The Filters",permalink:"/docs/platforms/shift4shop/what-we-can-use-to-build-filters"}},s={},c=[{value:"To add Convermax script:",id:"to-add-convermax-script",level:3},{value:"To create Convermax search page:",id:"to-create-convermax-search-page",level:3}],d={toc:c};function l(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"to-add-convermax-script"},"To add Convermax script:"),(0,n.kt)("p",null,"1","."," Navigate to Settings -> Design -> Open Template Editor"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:a(5802).Z,width:"1440",height:"883"})),(0,n.kt)("p",null,"2","."," Locate frame.html and click on the gear icon and choose edit:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:a(7055).Z,width:"1449",height:"851"})),(0,n.kt)("p",null,"3","."," Find the ",(0,n.kt)("inlineCode",{parentName:"p"},"\x3c!--END: quicksearch--\x3e")," closing tag and paste the following code after it:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},"\xa0 \xa0 \x3c!--START: Convermax Site Search--\x3e\n\xa0 \xa0 <script>\n\xa0 \xa0 \xa0 \xa0 window.Convermax = window.Convermax || {};\n\xa0 \xa0 \xa0 \xa0 window.Convermax.cartuserid = '[userid]';\n\xa0 \xa0 \xa0 \xa0 window.Convermax.cartpricelevel = '[price_level]';\n\xa0 \xa0 \xa0 \xa0 window.Convermax.catalogid = '[catalogid]';\n\xa0 \xa0 <\/script>\n\xa0 \xa0 <script src=\"https://client.convermax.com/static/XXX/search.min.js\"><\/script>\n\xa0 \xa0 \x3c!--END: Convermax Site Search--\x3e\n")),(0,n.kt)("p",null,"Replace ",(0,n.kt)("inlineCode",{parentName:"p"},"XXX")," in the script src with your domain without ",(0,n.kt)("inlineCode",{parentName:"p"},"www")," and ",(0,n.kt)("inlineCode",{parentName:"p"},".com"),"."),(0,n.kt)("p",null,"For example: for ",(0,n.kt)("inlineCode",{parentName:"p"},"https://www.your-site.com")," paste ",(0,n.kt)("inlineCode",{parentName:"p"},"your-site")),(0,n.kt)("h3",{id:"to-create-convermax-search-page"},"To create Convermax search page:"),(0,n.kt)("p",null,"1","."," Navigate to Content -> Site Content and click on the ",(0,n.kt)("strong",{parentName:"p"},"Edit")," button in the ",(0,n.kt)("strong",{parentName:"p"},"Footer Extra Pages")," section"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:a(2091).Z,width:"1858",height:"820"})),(0,n.kt)("p",null,"2","."," Click on the ",(0,n.kt)("strong",{parentName:"p"},"Add")," button"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:a(5912).Z,width:"1909",height:"715"})),(0,n.kt)("p",null,"3","."," In the pop-up window enter ",(0,n.kt)("strong",{parentName:"p"},"Search")," into the ",(0,n.kt)("strong",{parentName:"p"},"Page Name")," input and click the ",(0,n.kt)("strong",{parentName:"p"},"Add")," button"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:a(3005).Z,width:"1668",height:"703"})),(0,n.kt)("p",null,"4","."," Locate the ",(0,n.kt)("strong",{parentName:"p"},"Search")," page and click on the gear icon and choose ",(0,n.kt)("strong",{parentName:"p"},"Content"),":"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:a(7267).Z,width:"1665",height:"703"})),(0,n.kt)("p",null,"5","."," Click on ",(0,n.kt)("strong",{parentName:"p"},"View Source Code")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:a(4829).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,"6","."," Paste ",(0,n.kt)("inlineCode",{parentName:"p"},'<div id="cm_results"></div>')," into the ",(0,n.kt)("strong",{parentName:"p"},"Page Content")," input"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:a(3613).Z,width:"1655",height:"710"})),(0,n.kt)("p",null,"7","."," Expand the ",(0,n.kt)("strong",{parentName:"p"},"SEO")," tab and enter ",(0,n.kt)("strong",{parentName:"p"},"Search Results")," into the ",(0,n.kt)("strong",{parentName:"p"},"Page Title")," input and enter ",(0,n.kt)("strong",{parentName:"p"},"search")," into the ",(0,n.kt)("strong",{parentName:"p"},"Custom File Name")," input"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:a(4452).Z,width:"1647",height:"553"})),(0,n.kt)("p",null,"8","."," Click ",(0,n.kt)("strong",{parentName:"p"},"Save")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:a(7870).Z,width:"1674",height:"613"})))}l.isMDXComponent=!0},5802:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/howto-add-script-and-search-page-1-8e201ee9191dcf97352e19121fbddace.png"},7870:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/howto-add-script-and-search-page-10-c03a1f24f5d5550fb89f1956da814dff.jpeg"},7055:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/howto-add-script-and-search-page-2-24ce467b688eda23d0dc39b743f72b52.png"},2091:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/howto-add-script-and-search-page-3-24484bcea193def0699b929861e62dab.jpeg"},5912:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/howto-add-script-and-search-page-4-519589e7f722df1a2d59a69c9476f3d6.jpeg"},3005:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/howto-add-script-and-search-page-5-29f29a60aa64c0899795087ecf3c1ebd.jpeg"},7267:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/howto-add-script-and-search-page-6-d57bc87cd3aae38f107ec32255826a14.jpeg"},4829:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/howto-add-script-and-search-page-7-b138eee6db707f57817e0b775574fe01.jpeg"},3613:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/howto-add-script-and-search-page-8-34dbf4d091244193429448d4538abcf3.jpeg"},4452:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/howto-add-script-and-search-page-9-7c7f8b9d50866f6947d035b3ca8598f0.jpeg"}}]);