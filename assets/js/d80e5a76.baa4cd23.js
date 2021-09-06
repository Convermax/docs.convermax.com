"use strict";(self.webpackChunkconvermax_docs=self.webpackChunkconvermax_docs||[]).push([[805],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4013:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],c={title:"How to add Convermax test search results page",sidebar_label:"Add Results Page"},i=void 0,p={unversionedId:"platforms/shopify/howto-add-results-page",id:"platforms/shopify/howto-add-results-page",isDocsHomePage:!1,title:"How to add Convermax test search results page",description:"Create a new page with following content:",source:"@site/docs/platforms/shopify/howto-add-results-page.md",sourceDirName:"platforms/shopify",slug:"/platforms/shopify/howto-add-results-page",permalink:"/docs/platforms/shopify/howto-add-results-page",editUrl:"https://github.com/Convermax/SiteSearch/edit/master/Docs/website/docs/platforms/shopify/howto-add-results-page.md",tags:[],version:"current",frontMatter:{title:"How to add Convermax test search results page",sidebar_label:"Add Results Page"},sidebar:"platforms",previous:{title:"Add Private App",permalink:"/docs/platforms/shopify/howto-add-private-app"},next:{title:"Add Theme Access",permalink:"/docs/platforms/shopify/howto-add-rights"}},l=[],u={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create a new page with following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- Convermax Site Search --\x3e\n<div id=\"cm_results\"></div>\n\n<script>\n  (function () {\n    window.addEventListener(\n      'load',\n      function () {\n        var s = document.createElement('script');\n        s.async = true;\n        s.src = 'https://client.convermax.com/static/YOUR_STORE_ID/search.min.js';\n        var x = document.getElementsByTagName('script')[0];\n        x.parentNode.insertBefore(s, x);\n      },\n      false,\n    );\n  })();\n<\/script>\n")))}d.isMDXComponent=!0}}]);