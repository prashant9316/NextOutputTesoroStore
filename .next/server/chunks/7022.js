"use strict";
exports.id = 7022;
exports.ids = [7022];
exports.modules = {

/***/ 4022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ fetchBrands),
/* harmony export */   "a": () => (/* binding */ useBrandsQuery)
/* harmony export */ });
/* harmony import */ var _framework_utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7235);
/* harmony import */ var _framework_utils_api_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3833);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2585);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);



const fetchBrands = async ({
  queryKey
}) => {
  const [_key, _params] = queryKey;
  const {
    data
  } = await _framework_utils_http__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .Z.get(_framework_utils_api_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.BRANDS */ .P.BRANDS);
  return data;
};
const useBrandsQuery = options => {
  return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([_framework_utils_api_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.BRANDS */ .P.BRANDS, options], fetchBrands);
};

/***/ }),

/***/ 154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ fetchCategories),
/* harmony export */   "E": () => (/* binding */ useCategoriesQuery)
/* harmony export */ });
/* harmony import */ var _framework_utils_https__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7790);
/* harmony import */ var _framework_utils_api_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3833);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2585);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
// import { CategoriesQueryOptionsType } from "@framework/types";
// import { category } from "@framework/product/get-product";



const fetchCategories = async () => {
  const {
    data
  } = await _framework_utils_https__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .Z.get(_framework_utils_api_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.TOP_CATEGORIES */ .P.TOP_CATEGORIES);
  console.log("categories data:");
  console.log(data);
  console.log(data.categories[0]);
  return data.categories[0];
};
const useCategoriesQuery = options => {
  return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([_framework_utils_api_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.TOP_CATEGORIES */ .P.TOP_CATEGORIES, options], fetchCategories);
};

/***/ })

};
;