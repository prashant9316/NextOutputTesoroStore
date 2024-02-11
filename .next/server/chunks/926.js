"use strict";
exports.id = 926;
exports.ids = [926];
exports.modules = {

/***/ 3833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ API_ENDPOINTS)
/* harmony export */ });
const API_ENDPOINTS = {
  LOGIN: "https://tesoro-backend.onrender.com/api/customer/login/",
  REGISTER: "https://tesoro-backend.onrender.com/api/customer/signup/",
  HOMEPAGE_BANNER: "https://tesoro-backend.onrender.com/api/homepage/banners",
  NEW_ARRIVAL_PRODUCTS: "/api/homepage/new-arrivals",
  RECENTLY_VIEWED: "/api/homepage/recently-viewed-products",
  FLASH_SALE: "/api/homepage/flash-sale",
  TOP_CATEGORIES: "/api/homepage/top-selling-categories",
  OFFER_BANNER: "/api/homepage/offer-banner",
  PRODUCT: "/api/products/product/",
  SMALL_BIZ_STAR: "/api/homepage/founders-pick",
  ORDER: "https://tesoro-backend.onrender.com/api/order/order_id/",
  LOGOUT: "/logout",
  FORGET_PASSWORD: "/forget-password",
  CATEGORIES: "/categories.json",
  FEATURED_CATEGORIES: "/featured_categories.json",
  COLLECTIONS: "/collections.json",
  BRANDS: "/brands.json",
  PRODUCTS: "/products.json",
  FEATURED_PRODUCTS: "/featured_products.json",
  TOP_SELLER_PRODUCTS: "/products_top_seller.json",
  ON_SELLING_PRODUCTS: "/products_on_selling.json",
  RELATED_PRODUCTS: "/related_products.json",
  BEST_SELLER_PRODUCTS: "/products_best_seller.json",
  FLASH_SALE_PRODUCTS: "/products_flash_sale.json",
  SEARCH: "/search.json",
  ORDERS: "/orders.json"
};

/***/ }),

/***/ 7235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _get_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // const baseURL = 'https://tesoro-backend.onrender.com';

const http = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
}); // Change request data/error here

http.interceptors.request.use(config => {
  const token = (0,_get_token__WEBPACK_IMPORTED_MODULE_1__/* .getToken */ .L)();
  config.headers = _objectSpread(_objectSpread({}, config.headers), {}, {
    Authorization: `Bearer ${token ? token : ""}`
  });
  return config;
}, error => {
  return Promise.reject(error);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (http);

/***/ })

};
;