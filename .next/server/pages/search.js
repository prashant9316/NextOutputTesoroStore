"use strict";
(() => {
var exports = {};
exports.id = 9603;
exports.ids = [9603];
exports.modules = {

/***/ 3690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Shop),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9691);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(239);
/* harmony import */ var _components_common_subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7181);
/* harmony import */ var _components_shop_discount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6238);
/* harmony import */ var _components_shop_filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4135);
/* harmony import */ var react_sticky_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9058);
/* harmony import */ var react_sticky_box__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_sticky_box__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_product_product_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6061);
/* harmony import */ var _components_shop_top_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8941);
/* harmony import */ var _components_ui_active_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2963);
/* harmony import */ var _components_common_breadcrumb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5249);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3295);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9524);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_13__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function Shop() {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_13__.useTranslation)("common");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shop_discount__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_container__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `flex pt-8 pb-16 lg:pb-20`,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "flex-shrink-0 pe-24 hidden lg:block w-96",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_sticky_box__WEBPACK_IMPORTED_MODULE_6___default()), {
            offsetTop: 50,
            offsetBottom: 20,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "pb-7",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_common_breadcrumb__WEBPACK_IMPORTED_MODULE_10__/* .BreadcrumbItems */ .x, {
                separator: "/",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_active_link__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
                  href: "/",
                  activeClassName: "font-semibold text-heading",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    children: t("breadcrumb-home")
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_active_link__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
                  href: _utils_routes__WEBPACK_IMPORTED_MODULE_12__/* .ROUTES.SEARCH */ .Z.SEARCH,
                  activeClassName: "font-semibold text-heading",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "capitalize",
                    children: t("breadcrumb-search")
                  })
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shop_filters__WEBPACK_IMPORTED_MODULE_5__/* .ShopFilters */ .M, {})]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "w-full lg:-ms-9",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shop_top_bar__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_product_grid__WEBPACK_IMPORTED_MODULE_7__/* .ProductGrid */ .e, {})]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_subscription__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {})]
    })]
  });
}
Shop.Layout = _components_layout_layout__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z;
const getStaticProps = async ({
  locale
}) => {
  return {
    props: _objectSpread({}, await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_11__.serverSideTranslations)(locale, ["common", "forms", "menu", "footer"]))
  };
};

/***/ }),

/***/ 4025:
/***/ ((module) => {

module.exports = require("@headlessui/react");

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

/***/ 8718:
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

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

/***/ 9058:
/***/ ((module) => {

module.exports = require("react-sticky-box");

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
var __webpack_exports__ = __webpack_require__.X(0, [8453,9583,3854,9300,926,2095,239,3977,7077,7181,5101,7790,7022,5249,6061,1987,8941,6238], () => (__webpack_exec__(3690)));
module.exports = __webpack_exports__;

})();