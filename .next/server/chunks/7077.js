"use strict";
exports.id = 7077;
exports.ids = [7077];
exports.modules = {

/***/ 7077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Text = ({
  style,
  className,
  variant = "body",
  children,
  html
}) => {
  const componentsMap = {
    body: "p",
    mediumHeading: "h3",
    heading: "h4",
    pageHeading: "h1",
    subHeading: "h2"
  };
  const Component = componentsMap[variant];
  const htmlContentProps = html ? {
    dangerouslySetInnerHTML: {
      __html: html
    }
  } : {};
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, _objectSpread(_objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      "text-body text-sm sm:leading-6 leading-7": variant === "body",
      "text-gray-800 text-md md:text-lg lg:text-xl 2xl:text-2xl xl:leading-10 font-bold": variant === "mediumHeading",
      "text-gray-800 text-sm md:text-base xl:text-lg font-semibold": variant === "heading",
      "text-2xl font-bold text-heading": variant === "pageHeading",
      "text-gray-800 text-lg md:text-2xl xl:text-3xl 2xl:text-4xl  font-bold": variant === "subHeading"
    }, className),
    style: style
  }, htmlContentProps), {}, {
    children: children
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);

/***/ })

};
;