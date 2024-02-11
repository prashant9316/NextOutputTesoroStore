"use strict";
exports.id = 6238;
exports.ids = [6238];
exports.modules = {

/***/ 6238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9691);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(155);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);







const ShopDiscount = () => {
  const {
    0: status,
    1: setStatus
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const hide = () => {
    setStatus(true);
  };

  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("common");
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: `flex justify-center relative bg-borderBottom transition duration-200 ease-in ${status === true ? "h-0.5" : "py-4"}`,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_container__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      className: status === true ? "opacity-0 invisible" : "w-full",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative text-center text-heading text-xs md:text-sm leading-6 md:leading-7 px-8",
        children: [t("text-discount"), " \xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          className: "underline",
          href: "#",
          children: t("text-details")
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
          className: "absolute h-full end-0 top-0 flex text-lg md:text-2xl items-center justify-center text-gray-500 opacity-50 focus:outline-none transition-opacity hover:opacity-100",
          onClick: hide,
          "aria-label": "close",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__/* .IoClose */ .bjh, {
            className: "text-black"
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopDiscount);

/***/ })

};
;