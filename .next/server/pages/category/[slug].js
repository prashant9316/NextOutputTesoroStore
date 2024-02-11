"use strict";
(() => {
var exports = {};
exports.id = 8024;
exports.ids = [8024];
exports.modules = {

/***/ 434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);

// import Image from "next/image";
 // import { getDirection } from "@utils/get-direction";

const CategoryBanner = ({
  className = "mb-7",
  bgColor
}) => {
  // const { locale } = useRouter();
  // const dir = getDirection(locale);
  const {
    query: {
      slug
    }
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const categoryTitle = slug === null || slug === void 0 ? void 0 : slug.toString().split("-").join("");
  console.log("Category Title = " + categoryTitle);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: `rounded-md relative flex flex-row ${className} ${bgColor} h-0 mt-[10vh] `,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "hidden md:flex"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryBanner);

/***/ }),

/***/ 9296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Category),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9691);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(239);
/* harmony import */ var _components_common_subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7181);
/* harmony import */ var _components_product_product_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6061);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3295);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _containers_category_banner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(434);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function Category() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "border-t-2 border-borderBottom",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_container__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_category_banner__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "pb-16 lg:pb-20",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_product_grid__WEBPACK_IMPORTED_MODULE_4__/* .ProductGrid */ .e, {
          className: "3xl:grid-cols-6"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_subscription__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {})]
    })
  });
}
Category.Layout = _components_layout_layout__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z;
const getServerSideProps = async ({
  locale
}) => {
  return {
    props: _objectSpread({}, await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_5__.serverSideTranslations)(locale, ["common", "forms", "menu", "footer"]))
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

/***/ 805:
/***/ ((module) => {

module.exports = require("lodash/shuffle");

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

/***/ 2662:
/***/ ((module) => {

module.exports = require("react-hook-form");

/***/ }),

/***/ 2585:
/***/ ((module) => {

module.exports = require("react-query");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8453,9583,9300,926,2095,239,3977,7077,7181,5101,6061], () => (__webpack_exec__(9296)));
module.exports = __webpack_exports__;

})();