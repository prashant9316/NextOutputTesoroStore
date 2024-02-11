"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 7485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomDocument)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_get_direction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(991);





class CustomDocument extends next_document__WEBPACK_IMPORTED_MODULE_1__.default {
  static async getInitialProps(ctx) {
    return await next_document__WEBPACK_IMPORTED_MODULE_1__.default.getInitialProps(ctx);
  }

  render() {
    const {
      locale
    } = this.props.__NEXT_DATA__;

    if (false) {}

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
      dir: (0,_utils_get_direction__WEBPACK_IMPORTED_MODULE_3__/* .getDirection */ .M)(locale),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})]
      })]
    });
  }

}

/***/ }),

/***/ 991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ getDirection)
/* harmony export */ });
function getDirection(locale) {
  if (!locale) return "ltr";
  const rtlLanguages = ["ar", "he"];
  return rtlLanguages.includes(locale) ? "rtl" : "ltr";
}

/***/ }),

/***/ 8475:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 372:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 2538:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 2208:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6044:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5163:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/document-context.js");

/***/ }),

/***/ 6098:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1168:
/***/ ((module) => {

module.exports = require("styled-jsx/server");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6859], () => (__webpack_exec__(7485)));
module.exports = __webpack_exports__;

})();