"use strict";
exports.id = 7790;
exports.ids = [7790];
exports.modules = {

/***/ 7790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _get_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6155);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
var _Cookies$get;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const baseURL = 'https://tesoro-backend.onrender.com';
const https = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: baseURL,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    'auth': (_Cookies$get = js_cookie__WEBPACK_IMPORTED_MODULE_2___default().get('auth_token')) !== null && _Cookies$get !== void 0 ? _Cookies$get : ''
  }
}); // Change request data/error here

https.interceptors.request.use(config => {
  const token = (0,_get_token__WEBPACK_IMPORTED_MODULE_1__/* .getToken */ .L)();
  config.headers = _objectSpread(_objectSpread({}, config.headers), {}, {
    Authorization: `Bearer ${token ? token : ""}`
  });
  return config;
}, error => {
  return Promise.reject(error);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (https);

/***/ })

};
;