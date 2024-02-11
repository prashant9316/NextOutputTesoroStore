"use strict";
(() => {
var exports = {};
exports.id = 836;
exports.ids = [836];
exports.modules = {

/***/ 4294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RefundPolicy),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./src/components/layout/layout.tsx + 24 modules
var layout = __webpack_require__(239);
// EXTERNAL MODULE: ./src/components/ui/container.tsx
var container = __webpack_require__(9691);
// EXTERNAL MODULE: ./src/components/ui/page-header.tsx
var page_header = __webpack_require__(6722);
;// CONCATENATED MODULE: ./src/settings/privacy-settings.ts
const privacyPolicy = [{
  id: "1",
  title: "privacy-one-title",
  description: "privacy-one-content"
}, {
  id: "2",
  title: "privacy-two-title",
  description: "privacy-two-content"
}, {
  id: "3",
  title: "privacy-three-title",
  description: "privacy-three-content"
}, {
  id: "4",
  title: "privacy-four-title",
  description: "privacy-four-content"
}, {
  id: "5",
  title: "privacy-five-title",
  description: "privacy-five-content"
}, {
  id: "6",
  title: "privacy-six-title",
  description: "privacy-six-content"
}, {
  id: "7",
  title: "privacy-seven-title",
  description: "privacy-seven-content"
}, {
  id: "8",
  title: "privacy-eight-title",
  description: "privacy-eight-content"
}, {
  id: "9",
  title: "privacy-nine-title",
  description: "privacy-nine-content"
}, {
  id: "10",
  title: "privacy-ten-title",
  description: "privacy-ten-content"
}, {
  id: "11",
  title: "privacy-eleven-title",
  description: "privacy-eleven-content"
}, {
  id: "12",
  title: "privacy-twelve-title",
  description: "privacy-twelve-content"
}];
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(3783);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(3295);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
;// CONCATENATED MODULE: ./src/pages/refund-policy-old.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function makeTitleToDOMId(title) {
  return title.toLowerCase().split(" ").join("_");
}

function RefundPolicy() {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("privacy");
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(page_header/* default */.Z, {
      pageHeader: "Refund Policy"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mt-12 lg:mt-14 xl:mt-16 lg:py-1 xl:py-0 border-b border-gray-300 px-4 md:px-10 lg:px-7 xl:px-16 2xl:px-24 3xl:px-32 pb-9 md:pb-14 lg:pb-16 2xl:pb-20 3xl:pb-24",
      children: /*#__PURE__*/jsx_runtime_.jsx(container/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col md:flex-row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("nav", {
            className: "md:w-72 xl:w-3/12 mb-8 md:mb-0",
            children: /*#__PURE__*/jsx_runtime_.jsx("ol", {
              className: "sticky md:top-16 lg:top-28 z-10",
              children: privacyPolicy === null || privacyPolicy === void 0 ? void 0 : privacyPolicy.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_.Link, {
                  spy: true,
                  offset: -120,
                  smooth: true,
                  duration: 500,
                  to: makeTitleToDOMId(item.title),
                  activeClass: "text-heading font-semibold",
                  className: "block cursor-pointer py-3 lg:py-3.5  text-sm lg:text-base  text-gray-700 uppercase",
                  children: (index <= 9 ? "0" : "") + index + " " + t(`${item.title}`)
                })
              }, item.id))
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "md:w-9/12 md:ps-8 pt-0 lg:pt-2",
            children: privacyPolicy === null || privacyPolicy === void 0 ? void 0 : privacyPolicy.map(item =>
            /*#__PURE__*/
            // @ts-ignore
            (0,jsx_runtime_.jsxs)(external_react_scroll_.Element, {
              id: makeTitleToDOMId(item.title),
              className: "mb-10",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                className: "text-lg md:text-xl lg:text-2xl text-heading font-bold mb-4",
                children: t(`${item.title}`)
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "text-heading text-sm leading-7 lg:text-base lg:leading-loose",
                dangerouslySetInnerHTML: {
                  __html: t(`${item.description}`)
                }
              })]
            }, item.title))
          })]
        })
      })
    })]
  });
}
RefundPolicy.Layout = layout/* default */.Z;
const getStaticProps = async ({
  locale
}) => {
  return {
    props: _objectSpread({}, await (0,serverSideTranslations_.serverSideTranslations)(locale, ["common", "forms", "menu", "privacy", "footer"]))
  };
};

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8023:
/***/ ((module) => {

module.exports = require("body-scroll-lock");

/***/ }),

/***/ 4058:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 6155:
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ 8475:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 3295:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 2364:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 8300:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9639:
/***/ ((module) => {

module.exports = require("next/dynamic");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 1958:
/***/ ((module) => {

module.exports = require("overlayscrollbars-react");

/***/ }),

/***/ 1346:
/***/ ((module) => {

module.exports = require("rc-drawer");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9081:
/***/ ((module) => {

module.exports = require("react-content-loader");

/***/ }),

/***/ 9589:
/***/ ((module) => {

module.exports = require("react-fast-marquee");

/***/ }),

/***/ 2585:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 3783:
/***/ ((module) => {

module.exports = require("react-scroll");

/***/ }),

/***/ 173:
/***/ ((module) => {

module.exports = require("react-use/lib/useLocalStorage");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8453,9583,9300,926,2095,239,6722], () => (__webpack_exec__(4294)));
module.exports = __webpack_exports__;

})();