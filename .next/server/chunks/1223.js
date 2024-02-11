"use strict";
exports.id = 1223;
exports.ids = [1223];
exports.modules = {

/***/ 5216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ ProductAttributes)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);



const ProductAttributes = ({
  className = "mb-4",
  title,
  attributes,
  active,
  onClick
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
      className: "font-josephine text-base md:text-lg text-gray-600 font-semibold mb-2 capitalize",
      children: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
      className: "colors flex flex-wrap -me-3",
      children: attributes === null || attributes === void 0 ? void 0 : attributes.map(({
        id,
        value,
        meta
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("cursor-pointer rounded border border-gray-100 w-14 md:w-16 h-14 md:h-16 p-1 mb-2 md:mb-2 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-gray-500", {
          "border-gray-600": value === active
        }),
        onClick: () => onClick({
          [title]: value
        }),
        children: title === "color" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          className: "h-full w-full rounded block",
          style: {
            backgroundColor: meta
          }
        }) : value
      }, `${value}-${id}`))
    })]
  });
};

/***/ }),

/***/ 9711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ getVariations)
/* harmony export */ });
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3089);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_groupBy__WEBPACK_IMPORTED_MODULE_0__);

function getVariations(variations) {
  if (!variations) return {};
  return lodash_groupBy__WEBPACK_IMPORTED_MODULE_0___default()(variations, "attribute.slug");
}

/***/ }),

/***/ 7628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ generateCartItem)
/* harmony export */ });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8718);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);

function generateCartItem(item, attributes) {
  const {
    id,
    name,
    slug,
    image,
    price,
    sale_price
  } = item;
  return {
    id: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(attributes) ? `${id}.${Object.values(attributes).join(".")}` : id,
    name,
    slug,
    image: image,
    price: sale_price ? sale_price : price,
    attributes
  };
}

/***/ })

};
;