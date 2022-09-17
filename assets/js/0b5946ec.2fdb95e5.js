"use strict";(self.webpackChunkconvermax_docs=self.webpackChunkconvermax_docs||[]).push([[992],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=n,f=d["".concat(o,".").concat(h)]||d[h]||u[h]||s;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<s;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1572:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const s={title:"Here is what we can use to build the filters on Shift4Shop",sidebar_label:"What We Can Use To Build The Filters"},i=void 0,l={unversionedId:"platforms/shift4shop/what-we-can-use-to-build-filters",id:"platforms/shift4shop/what-we-can-use-to-build-filters",title:"Here is what we can use to build the filters on Shift4Shop",description:"1\\. Extra Fields",source:"@site/docs/platforms/shift4shop/what-we-can-use-to-build-filters.md",sourceDirName:"platforms/shift4shop",slug:"/platforms/shift4shop/what-we-can-use-to-build-filters",permalink:"/docs/platforms/shift4shop/what-we-can-use-to-build-filters",draft:!1,editUrl:"https://github.com/Convermax/SiteSearch/edit/master/Docs/website/docs/platforms/shift4shop/what-we-can-use-to-build-filters.md",tags:[],version:"current",frontMatter:{title:"Here is what we can use to build the filters on Shift4Shop",sidebar_label:"What We Can Use To Build The Filters"},sidebar:"platforms",previous:{title:"Add Convermax Script And Search Page",permalink:"/docs/platforms/shift4shop/howto-add-script-and-search-page"}},o={},c=[{value:"1. Extra Fields",id:"1-extra-fields",level:3},{value:"2. Filter Categories\xa0",id:"2-filter-categories",level:3},{value:"3. Product Categories\xa0",id:"3-product-categories",level:3},{value:"4. Product Features\xa0",id:"4-product-features",level:3},{value:"5. Product Options",id:"5-product-options",level:3},{value:"6. External Data",id:"6-external-data",level:3},{value:"7. Description field",id:"7-description-field",level:3}],p={toc:c};function u(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"1-extra-fields"},"1","."," Extra Fields"),(0,n.kt)("p",null,"For example, you can use one of your long extra fields to store values like this:\n",(0,n.kt)("strong",{parentName:"p"},"Finish:Gold,Chrome|Style:Modern|Color:Red|Length:6 inches|Width:1 inch|Country of Origin:United States")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"|")," works as a section separator\nFinish: designates a label you want to use for the filter"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},",")," separates multiple values within a section\xa0"),(0,n.kt)("p",null,"\xa0\nWe can hide an extra field from being displayed to website visitors by tweaking the Shift4Shop template file.\xa0"),(0,n.kt)("h3",{id:"2-filter-categories"},"2","."," Filter Categories\xa0"),(0,n.kt)("p",null,'Shift4Shop\'s filter categories starting with "Filters >>" . There is no limit on number of filters.'),(0,n.kt)("h3",{id:"3-product-categories"},"3","."," Product Categories\xa0"),(0,n.kt)("p",null,'We can use any categories to build the filters, not only those that start with "Filters >>". Just let us know which categories we should use.'),(0,n.kt)("h3",{id:"4-product-features"},"4","."," Product Features\xa0"),(0,n.kt)("p",null,"I am referring to this data:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:r(1270).Z,width:"1067",height:"179"})),(0,n.kt)("h3",{id:"5-product-options"},"5","."," Product Options"),(0,n.kt)("p",null,"From here:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:r(1071).Z,width:"1090",height:"259"})),(0,n.kt)("h3",{id:"6-external-data"},"6","."," External Data"),(0,n.kt)("p",null,"We can use a .csv, .json, .xml, .yaml file hosted on FTP, Google Drive. We can also read a Google Spreadsheet directly."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:r(4692).Z,width:"369",height:"368"})),(0,n.kt)("h3",{id:"7-description-field"},"7","."," Description field"),(0,n.kt)("p",null,"We can parse a well-formatted table or attribute list out of the description field.\xa0\nFor example, at this store:\xa0",(0,n.kt)("a",{parentName:"p",href:"https://www.paylessrugs.com/Couristan-Carrington-4984-0710-Carrington-Dark-Grey-Rug"},"https://www.paylessrugs.com/Couristan-Carrington-4984-0710-Carrington-Dark-Grey-Rug"),"\xa0we extract Material and Construction from\xa0",(0,n.kt)("strong",{parentName:"p"},"Description"),".\xa0"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:r(3844).Z,width:"587",height:"176"})),(0,n.kt)("p",null,"At this store:\xa0",(0,n.kt)("a",{parentName:"p",href:"https://www.sansoleil.com/900720I-SanSoleil-SolStyle-ICE-Long-Sleeve-Zip-Mock-Dress-with-attached-short-Oasis_p_946.html"},"https://www.sansoleil.com/900720I-SanSoleil-SolStyle-ICE-Long-Sleeve-Zip-Mock-Dress-with-attached-short-Oasis_p_946.html"),"\xa0we extract Color & Product Type from\xa0",(0,n.kt)("strong",{parentName:"p"},"Title"),".\xa0"),(0,n.kt)("p",null,"At your store we can parse these lists into individual filters:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:r(8413).Z,width:"241",height:"114"})),(0,n.kt)("p",null,'However, we will need an explicit list of filters you need. I.e. "Shade Material", "Shade Finish", "Downlight Type" so we know what to look for exactly. We can\'t just extract "everything".'))}u.isMDXComponent=!0},1270:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/what-we-can-use-to-build-filters-1-30d9590ea1c10627e46c1097d5964e4d.png"},1071:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/what-we-can-use-to-build-filters-2-97b4ca75f557ea6b8d15aa6f62b8570f.png"},4692:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/what-we-can-use-to-build-filters-3-82d79c054be002ad7cacdbbdd0188094.png"},3844:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/what-we-can-use-to-build-filters-4-a72f9d6d70352eed501f9f5c78274aaf.png"},8413:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);