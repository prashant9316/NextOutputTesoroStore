"use strict";
exports.id = 6722;
exports.ids = [6722];
exports.modules = {

/***/ 6722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);




const PageHeader = ({
  pageHeader = "text-page-header"
}) => {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)("common");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "flex justify-center p-6 md:p-10 2xl:p-8 relative bg-no-repeat bg-center bg-cover",
    style: {
      backgroundImage: "url(/assets/images/page-header.jpg)"
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "absolute top-0 start-0 bg-black w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "w-full flex items-center justify-center relative z-10 py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: "text-xl md:text-2xl lg:text-3xl font-bold text-white text-center",
        children: t(`${pageHeader}`)
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeader);

/***/ })

};
;