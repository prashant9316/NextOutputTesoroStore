"use strict";
exports.id = 7658;
exports.ids = [7658];
exports.modules = {

/***/ 7658:
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
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const variantClasses = {
  normal: "bg-white border border-gray-300 focus:shadow focus:outline-none focus:border-heading placeholder-body",
  solid: "bg-gray-100 border border-gray-100 focus:bg-white focus:border-primary",
  outline: "border border-gray-300 focus:border-primary"
};
const TextArea = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((props, ref) => {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();

  const {
    className,
    labelKey,
    name,
    placeholderKey,
    errorKey,
    variant = "normal",
    shadow = false,
    inputClassName
  } = props,
        rest = _objectWithoutProperties(props, ["className", "labelKey", "name", "placeholderKey", "errorKey", "variant", "shadow", "inputClassName"]);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: className,
    children: [labelKey && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
      htmlFor: name,
      className: "block text-gray-600 font-semibold text-sm leading-none mb-3",
      children: t(labelKey)
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", _objectSpread({
      id: name,
      name: name,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("px-4 py-3 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0", shadow && "focus:shadow", variantClasses[variant], inputClassName),
      autoComplete: "off",
      spellCheck: "false",
      rows: 4,
      ref: ref // @ts-ignore
      ,
      placeholder: t(placeholderKey)
    }, rest)), errorKey && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
      className: "my-2 text-xs text-red-500",
      children: t(errorKey)
    })]
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextArea);

/***/ })

};
;