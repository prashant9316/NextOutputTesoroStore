"use strict";
exports.id = 3977;
exports.ids = [3977];
exports.modules = {

/***/ 3977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const classes = {
  root: "py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out",
  normal: "bg-gray-100 border-gray-300 focus:shadow focus:bg-white focus:border-primary",
  solid: "bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12",
  outline: "border-gray-300 focus:border-primary",
  shadow: "focus:shadow"
};
const Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef((_ref, ref) => {
  let {
    className = "block",
    labelKey,
    name,
    errorKey,
    placeholderKey,
    variant = "normal",
    shadow = false,
    type = "text",
    inputClassName
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className", "labelKey", "name", "errorKey", "placeholderKey", "variant", "shadow", "type", "inputClassName"]);

  const rootClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.root, {
    [classes.normal]: variant === "normal",
    [classes.solid]: variant === "solid",
    [classes.outline]: variant === "outline"
  }, {
    [classes.shadow]: shadow
  }, inputClassName);
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: className,
    children: [labelKey && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
      htmlFor: name,
      className: "block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer",
      children: t(labelKey)
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", _objectSpread({
      id: name,
      name: name,
      type: type,
      ref: ref // @ts-ignore
      ,
      placeholder: t(placeholderKey),
      className: rootClassName,
      autoComplete: "off",
      spellCheck: "false",
      "aria-invalid": errorKey ? "true" : "false"
    }, rest)), errorKey && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
      className: "my-2 text-xs text-red-500",
      children: t(errorKey)
    })]
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);

/***/ })

};
;