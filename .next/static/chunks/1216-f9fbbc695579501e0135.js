(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1216],{56722:function(e,t,n){"use strict";var r=n(85893),a=n(60022);t.Z=function(e){var t=e.pageHeader,n=void 0===t?"text-page-header":t,o=(0,a.$G)("common").t;return(0,r.jsxs)("div",{className:"flex justify-center p-6 md:p-10 2xl:p-8 relative bg-no-repeat bg-center bg-cover",style:{backgroundImage:"url(/assets/images/page-header.jpg)"},children:[(0,r.jsx)("div",{className:"absolute top-0 start-0 bg-black w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80"}),(0,r.jsx)("div",{className:"w-full flex items-center justify-center relative z-10 py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32",children:(0,r.jsx)("h2",{className:"text-xl md:text-2xl lg:text-3xl font-bold text-white text-center",children:o("".concat(n))})})]})}},77658:function(e,t,n){"use strict";var r=n(85893),a=n(4942),o=n(62220),i=n(67294),l=n(94184),s=n.n(l),c=n(60022);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={normal:"bg-white border border-gray-300 focus:shadow focus:outline-none focus:border-heading placeholder-body",solid:"bg-gray-100 border border-gray-100 focus:bg-white focus:border-primary",outline:"border border-gray-300 focus:border-primary"},m=i.forwardRef((function(e,t){var n=(0,c.$G)().t,a=e.className,i=e.labelKey,l=e.name,d=e.placeholderKey,m=e.errorKey,p=e.variant,y=void 0===p?"normal":p,h=e.shadow,g=void 0!==h&&h,b=e.inputClassName,v=(0,o.Z)(e,["className","labelKey","name","placeholderKey","errorKey","variant","shadow","inputClassName"]);return(0,r.jsxs)("div",{className:a,children:[i&&(0,r.jsx)("label",{htmlFor:l,className:"block text-gray-600 font-semibold text-sm leading-none mb-3",children:n(i)}),(0,r.jsx)("textarea",u({id:l,name:l,className:s()("px-4 py-3 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0",g&&"focus:shadow",f[y],b),autoComplete:"off",spellCheck:"false",rows:4,ref:t,placeholder:n(d)},v)),m&&(0,r.jsx)("p",{className:"my-2 text-xs text-red-500",children:n(m)})]})}));t.Z=m},24561:function(e,t,n){"use strict";var r=n(67294),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var o=function(e){var t=e.animate,n=e.backgroundColor,o=e.backgroundOpacity,i=e.baseUrl,l=e.children,s=e.foregroundColor,c=e.foregroundOpacity,d=e.gradientRatio,u=e.uniqueKey,f=e.interval,m=e.rtl,p=e.speed,y=e.style,h=e.title,g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),b=u||Math.random().toString(36).substring(6),v=b+"-diff",x=b+"-animated-diff",w=b+"-aria",O=m?{transform:"scaleX(-1)"}:null,E="0; "+f+"; 1",j=p+"s";return(0,r.createElement)("svg",a({"aria-labelledby":w,role:"img",style:a(a({},y),O)},g),h?(0,r.createElement)("title",{id:w},h):null,(0,r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+i+"#"+v+")",style:{fill:"url("+i+"#"+x+")"}}),(0,r.createElement)("defs",null,(0,r.createElement)("clipPath",{id:v},l),(0,r.createElement)("linearGradient",{id:x},(0,r.createElement)("stop",{offset:"0%",stopColor:n,stopOpacity:o},t&&(0,r.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:E,dur:j,repeatCount:"indefinite"})),(0,r.createElement)("stop",{offset:"50%",stopColor:s,stopOpacity:c},t&&(0,r.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:E,dur:j,repeatCount:"indefinite"})),(0,r.createElement)("stop",{offset:"100%",stopColor:n,stopOpacity:o},t&&(0,r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:E,dur:j,repeatCount:"indefinite"})))))};o.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var i=function(e){return e.children?(0,r.createElement)(o,a({},e)):(0,r.createElement)(l,a({},e))},l=function(e){return(0,r.createElement)(i,a({viewBox:"0 0 476 124"},e),(0,r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.ZP=i},97005:function(e,t,n){var r=n(67294);function a(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var o=a(r);!function(e){if(!e||"undefined"===typeof window)return;const t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n}\n\n.child {\n  transform: var(--transform);\n}');const i=r.forwardRef((function({style:e={},className:t="",autoFill:n=!1,play:a=!0,pauseOnHover:i=!1,pauseOnClick:l=!1,direction:s="left",speed:c=50,delay:d=0,loop:u=0,gradient:f=!1,gradientColor:m=[255,255,255],gradientWidth:p=200,onFinish:y,onCycleComplete:h,onMount:g,children:b},v){const[x,w]=r.useState(0),[O,E]=r.useState(0),[j,C]=r.useState(1),[k,N]=r.useState(!1),P=r.useRef(null),$=v||P,R=r.useRef(null),q=r.useCallback((()=>{if(R.current&&$.current){const e=$.current.getBoundingClientRect(),t=R.current.getBoundingClientRect();let r=e.width,a=t.width;"up"!==s&&"down"!==s||(r=e.height,a=t.height),C(n&&r&&a&&a<r?Math.ceil(r/a):1),w(r),E(a)}}),[n,$,s]);r.useEffect((()=>{if(k&&(q(),R.current&&$.current)){const e=new ResizeObserver((()=>q()));return e.observe($.current),e.observe(R.current),()=>{e&&e.disconnect()}}}),[q,$,k]),r.useEffect((()=>{q()}),[q,b]),r.useEffect((()=>{N(!0)}),[]),r.useEffect((()=>{"function"===typeof g&&g()}),[]);const M=r.useMemo((()=>n?O*j/c:O<x?x/c:O/c),[n,x,O,j,c]),S=`rgba(${m[0]}, ${m[1]}, ${m[2]}`,K=r.useMemo((()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!a||i?"paused":"running","--pause-on-click":!a||i&&!l||l?"paused":"running","--width":"up"===s||"down"===s?"100vh":"100%","--transform":"up"===s?"rotate(-90deg)":"down"===s?"rotate(90deg)":"none"})),[e,a,i,l,s]),Z=r.useMemo((()=>({"--gradient-color":`${S}, 1), ${S}, 0)`,"--gradient-width":"number"===typeof p?`${p}px`:p})),[S,p]),F=r.useMemo((()=>({"--play":a?"running":"paused","--direction":"left"===s?"normal":"reverse","--duration":`${M}s`,"--delay":`${d}s`,"--iteration-count":u?`${u}`:"infinite","--min-width":n?"auto":"100%"})),[a,s,M,d,u,n]),z=r.useMemo((()=>({"--transform":"up"===s?"rotate(90deg)":"down"===s?"rotate(-90deg)":"none"})),[s]),A=r.useCallback((e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map(((e,t)=>o.default.createElement(r.Fragment,{key:t},r.Children.map(b,(e=>o.default.createElement("div",{style:z,className:"child"},e))))))),[z,b]);return k?o.default.createElement("div",{ref:$,style:K,className:"marquee-container "+t},f&&o.default.createElement("div",{style:Z,className:"overlay"}),o.default.createElement("div",{className:"marquee",style:F,onAnimationIteration:h,onAnimationEnd:y},o.default.createElement("div",{className:"initial-child-container",ref:R},r.Children.map(b,(e=>o.default.createElement("div",{style:z,className:"child"},e)))),A(j-1)),o.default.createElement("div",{className:"marquee",style:F},A(j))):null}));t.Z=i}}]);