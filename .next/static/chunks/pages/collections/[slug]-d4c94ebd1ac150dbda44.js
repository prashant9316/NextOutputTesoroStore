(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8942],{45249:function(e,t,r){"use strict";r.d(t,{x:function(){return p},Z:function(){return m}});var n=r(85893),s=r(4942),i=r(62220),a=r(67294),c=r(32963),l=r(11163);var o=r(60022);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e){var t=e.children,r=(0,i.Z)(e,["children"]);return(0,n.jsx)("li",d(d({className:"text-sm text-body px-2.5 transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-heading"},r),{},{children:t}))},x=function(e){var t=e.children,r=(0,i.Z)(e,["children"]);return(0,n.jsx)("li",d(d({className:"text-base text-body mt-0.5"},r),{},{children:t}))},p=function(e){var t=a.Children.toArray(e.children),r=(t=t.map((function(e,t){return(0,n.jsx)(f,{children:e},"breadcrumb_item".concat(t))}))).length-1;return t=t.reduce((function(t,s,i){return i<r?t.push(s,(0,n.jsx)(x,{children:e.separator},"breadcrumb_sep".concat(i))):t.push(s),t}),[]),(0,n.jsx)("div",{className:"chawkbazarBreadcrumb flex items-center",children:(0,n.jsx)("ol",{className:"flex items-center w-full overflow-hidden",children:t})})},m=function(e){var t=e.separator,r=void 0===t?"/":t,s=function(){var e=(0,l.useRouter)(),t=(0,a.useState)(null),r=t[0],n=t[1];return(0,a.useEffect)((function(){if(e){var t=e.asPath.split("/");t.shift();var r=t.map((function(e,r){return{breadcrumb:e,href:"/"+t.slice(0,r+1).join("/")}}));n(r)}}),[e]),r}(),i=(0,o.$G)("common").t;return(0,n.jsxs)(p,{separator:r,children:[(0,n.jsx)(c.Z,{href:"/",activeClassName:"font-semibold text-heading",children:(0,n.jsx)("a",{children:i("breadcrumb-home")})}),null===s||void 0===s?void 0:s.map((function(e){return(0,n.jsx)(c.Z,{href:e.href,activeClassName:"font-semibold text-heading",children:(0,n.jsx)("a",{className:"capitalize",children:(t=e.breadcrumb,t.replace(/-/g," ").replace(/oe/g,"\xf6").replace(/ae/g,"\xe4").replace(/ue/g,"\xfc").toLowerCase())})},e.href);var t}))]})}},66061:function(e,t,r){"use strict";r.d(t,{e:function(){return y}});var n=r(85893),s=r(4942),i=r(96628),a=r(61553),c=r(87757),l=r.n(c),o=r(476),u=r(15861),d=r(63833),f=r(7235),x=r(69983),p=r.n(x),m=r(88767),h=function(){var e=(0,u.Z)(l().mark((function e(t){var r,n,s,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.queryKey,n=(0,o.Z)(r,2),n[0],n[1],e.next=4,f.Z.get(d.P.PRODUCTS);case 4:return s=e.sent,i=s.data,e.abrupt("return",{data:p()(i),paginatorInfo:{nextPageUrl:""}});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=r(11163),j=r(9761),g=r(60022);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var y=function(e){var t,r,c,l=e.className,o=void 0===l?"":l,u=(0,b.useRouter)().query,f=(c=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({limit:10},u),(0,m.useInfiniteQuery)([d.P.PRODUCTS,c],h,{getNextPageParam:function(e){return e.paginatorInfo.nextPageUrl}})),x=f.isFetching,p=f.isFetchingNextPage,y=f.fetchNextPage,O=f.hasNextPage,N=f.data,w=f.error;if(w)return(0,n.jsx)("p",{children:w.message});var P=(0,g.$G)("common").t;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 ".concat(o),children:!x||null!==N&&void 0!==N&&null!==(t=N.pages)&&void 0!==t&&t.length?null===N||void 0===N||null===(r=N.pages)||void 0===r?void 0:r.map((function(e){var t;return null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.map((function(e){return(0,n.jsx)(i.Z,{product:e,variant:"grid"},"product--key".concat(e.id))}))})):(0,n.jsx)(j.Z,{limit:20,uniqueKey:"search-product"})}),(0,n.jsx)("div",{className:"text-center pt-8 xl:pt-14",children:O&&(0,n.jsx)(a.Z,{loading:p,disabled:p,onClick:function(){return y()},variant:"slim",children:P("button-load-more")})})]})}},32963:function(e,t,r){"use strict";var n=r(4942),s=r(85893),i=r(62220),a=r(11163),c=r(41664),l=r(67294);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.children,r=e.activeClassName,n=e.href,o=(0,i.Z)(e,["children","activeClassName","href"]),d=(0,a.useRouter)().pathname,f=l.Children.only(t),x=f.props.className||"",p=d===n?"".concat(x," ").concat(r).trim():x;return(0,s.jsx)(c.default,u(u({href:n},o),{},{children:l.cloneElement(f,{className:p||null})}))}},61401:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return D},default:function(){return L}});var n=r(85893),s=r(89691),i=r(239),a=r(27181),c=r(99617),l=r(66061),o=r(32963),u=r(45249),d=r(39524),f=r(60022),x=r(61696),p=r(5434),m=r(87077),h=r(97014),b=r(11163),j=r(80991),g=r(54285),v=r(60155),y=(r(67294),r(87757)),O=r.n(y),N=r(476),w=r(15861),P=r(7235),Z=r(63833),k=r(88767),C=function(){var e=(0,w.Z)(O().mark((function e(t){var r,n,s,i;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.queryKey,n=(0,N.Z)(r,2),n[0],n[1],e.next=4,P.Z.get(Z.P.COLLECTIONS);case 4:return s=e.sent,i=s.data.data,e.abrupt("return",{collections:{data:i}});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e,t=(0,f.$G)("common").t,r=(e={limit:15},(0,k.useQuery)([Z.P.COLLECTIONS,e],C)),s=r.data;if(r.isLoading)return(0,n.jsx)("p",{children:"Loading..."});var i=(0,b.useRouter)().asPath.split("/").slice(2,3).join(),a=null===s||void 0===s?void 0:s.collections.data;return(0,n.jsxs)("div",{className:"pt-1",children:[(0,n.jsx)("div",{className:"block border-b border-gray-300 pb-5 mb-7",children:(0,n.jsx)("div",{className:"flex items-center justify-between mb-2.5",children:(0,n.jsx)("h2",{className:"font-semibold text-heading text-xl md:text-2xl",children:t("text-collection-list")})})}),(0,n.jsx)("div",{className:"block pb-7",children:(0,n.jsx)("ul",{className:"mt-2 flex flex-col space-y-5",children:null===a||void 0===a?void 0:a.map((function(e){return(0,n.jsx)("li",{className:"text-sm lg:text-[15px] cursor-pointer",children:(0,n.jsx)(o.Z,{href:"".concat(d.Z.COLLECTIONS,"/").concat(e.slug),children:(0,n.jsx)("a",{className:"block transition duration-300 ease-in-out text-heading hover:font-semibold py-0.5 ".concat(i===e.slug&&"font-semibold"),children:e.name})})},e.id)}))})})]})},E=function(){var e=(0,h.l8)().closeFilter,t=(0,b.useRouter)(),r=(0,f.$G)("common").t,s=(0,j.M)(t.locale);return(0,n.jsxs)("div",{className:"flex flex-col justify-between w-full h-full",children:[(0,n.jsxs)("div",{className:"w-full border-b border-gray-100 flex justify-between items-center relative pe-5 md:pe-7 flex-shrink-0 py-0.5",children:[(0,n.jsx)("button",{className:"flex text-2xl items-center justify-center text-gray-500 px-4 md:px-5 py-6 lg:py-8 focus:outline-none transition-opacity hover:opacity-60",onClick:e,"aria-label":"close",children:"rtl"===s?(0,n.jsx)(v.qvS,{className:"text-black"}):(0,n.jsx)(v.O8Q,{className:"text-black"})}),(0,n.jsx)("h2",{className:"font-bold text-xl md:text-2xl m-0 text-heading w-full text-center pe-6",children:r("text-collections")})]}),(0,n.jsx)(g.Z,{className:"menu-scrollbar flex-grow mb-auto",children:(0,n.jsx)("div",{className:"flex flex-col py-7 px-5 md:px-7 text-heading",children:(0,n.jsx)(S,{})})}),(0,n.jsxs)("div",{className:"text-sm md:text-base leading-4 flex items-center justify-center px-7 flex-shrink-0 h-14 bg-heading text-white",children:["9,608 ",r("text-items")]})]})},_=function(){var e=(0,h.l8)(),t=e.openFilter,r=e.displayFilter,s=e.closeFilter,i=(0,f.$G)("common").t,a=(0,b.useRouter)(),c=a.locale,l=a.query.slug,o=null===l||void 0===l?void 0:l.toString().split("-").join(" "),u=(0,j.M)(c),d="ltr"===u?{left:0}:{right:0};return(0,n.jsxs)("div",{className:"flex justify-between items-center mb-7",children:[(0,n.jsx)(m.Z,{variant:"pageHeading",className:"hidden lg:inline-flex pb-1 capitalize",children:o}),(0,n.jsxs)("button",{className:"lg:hidden text-heading text-sm px-4 py-2 font-semibold border border-gray-300 rounded-md flex items-center transition duration-200 ease-in-out focus:outline-none hover:bg-gray-200",onClick:t,children:[(0,n.jsx)(p.djY,{className:"text-lg"}),(0,n.jsx)("span",{className:"ps-2",children:i("text-filters")})]}),(0,n.jsx)("div",{className:"flex items-center justify-end",children:(0,n.jsxs)("div",{className:"flex-shrink-0 text-body text-xs md:text-sm leading-4",children:["9,608 ",i("text-items")]})}),(0,n.jsx)(x.d,{placement:"rtl"===u?"right":"left",open:r,onClose:s,handler:!1,showMask:!0,level:null,contentWrapperStyle:d,children:(0,n.jsx)(E,{})})]})},D=!0;function L(){var e=(0,f.$G)("common").t;return(0,n.jsx)("div",{className:"border-t-2 border-borderBottom",children:(0,n.jsxs)(s.Z,{children:[(0,n.jsxs)("div",{className:"flex pt-8 pb-16 lg:pb-20",children:[(0,n.jsx)("div",{className:"flex-shrink-0 pe-24 hidden lg:block w-96",children:(0,n.jsxs)(c.Z,{offsetTop:50,offsetBottom:20,children:[(0,n.jsx)("div",{className:"pb-7",children:(0,n.jsxs)(u.x,{separator:"/",children:[(0,n.jsx)(o.Z,{href:"/",activeClassName:"font-semibold text-heading",children:(0,n.jsx)("a",{children:e("breadcrumb-home")})}),(0,n.jsx)(o.Z,{href:d.Z.SEARCH,activeClassName:"font-semibold text-heading",children:(0,n.jsx)("a",{className:"capitalize",children:e("breadcrumb-collection")})})]})}),(0,n.jsx)(S,{})]})}),(0,n.jsxs)("div",{className:"w-full lg:-ms-9",children:[(0,n.jsx)(_,{}),(0,n.jsx)(l.e,{})]})]}),(0,n.jsx)(a.Z,{})]})})}L.Layout=i.Z},4476:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/collections/[slug]",function(){return r(61401)}])}},function(e){e.O(0,[9774,5445,1228,9351,9859,9617,239,1291,2888,179],(function(){return t=4476,e(e.s=t);var t}));var t=e.O();_N_E=t}]);