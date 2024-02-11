"use strict";
exports.id = 7696;
exports.ids = [7696];
exports.modules = {

/***/ 7696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductPopup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8718);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9524);
/* harmony import */ var _contexts_ui_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7014);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1553);
/* harmony import */ var _components_common_counter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7428);
/* harmony import */ var _contexts_cart_cart_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9745);
/* harmony import */ var _components_product_product_attributes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5216);
/* harmony import */ var _utils_generate_cart_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7628);
/* harmony import */ var _framework_product_use_price__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4718);
/* harmony import */ var _framework_utils_get_variations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9711);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_13__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function ProductPopup() {
  var _image$original;

  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_13__.useTranslation)("common");
  const {
    modalData: {
      data
    },
    closeModal,
    openCart
  } = (0,_contexts_ui_context__WEBPACK_IMPORTED_MODULE_5__/* .useUI */ .l8)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    addItemToCart
  } = (0,_contexts_cart_cart_context__WEBPACK_IMPORTED_MODULE_8__/* .useCart */ .jD)();
  const {
    0: quantity,
    1: setQuantity
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
  const {
    0: attributes,
    1: setAttributes
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const {
    0: viewCartBtn,
    1: setViewCartBtn
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: addToCartLoader,
    1: setAddToCartLoader
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    price,
    basePrice,
    discount
  } = (0,_framework_product_use_price__WEBPACK_IMPORTED_MODULE_11__/* .default */ .ZP)({
    amount: data.sale_price ? data.sale_price : data.price,
    baseAmount: data.price,
    currencyCode: "USD"
  });
  const variations = (0,_framework_utils_get_variations__WEBPACK_IMPORTED_MODULE_12__/* .getVariations */ .y)(data.variations);
  const {
    slug,
    image,
    name,
    description
  } = data;
  const isSelected = !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(variations) ? !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(attributes) && Object.keys(variations).every(variation => attributes.hasOwnProperty(variation)) : true;

  function addToCart() {
    if (!isSelected) return; // to show btn feedback while product carting

    setAddToCartLoader(true);
    setTimeout(() => {
      setAddToCartLoader(false);
      setViewCartBtn(true);
    }, 600);
    const item = (0,_utils_generate_cart_item__WEBPACK_IMPORTED_MODULE_10__/* .generateCartItem */ .z)(data, attributes);
    addItemToCart(item, quantity);
    console.log(item, "item");
  }

  function navigateToProductPage() {
    closeModal();
    router.push(`${_utils_routes__WEBPACK_IMPORTED_MODULE_4__/* .ROUTES.PRODUCT */ .Z.PRODUCT}/${slug}`, undefined, {
      locale: router.locale
    });
  }

  function handleAttribute(attribute) {
    setAttributes(prev => _objectSpread(_objectSpread({}, prev), attribute));
  }

  function navigateToCartPage() {
    closeModal();
    setTimeout(() => {
      openCart();
    }, 300);
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "rounded-lg bg-white",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "flex flex-col lg:flex-row w-full md:w-[650px] lg:w-[960px] mx-auto overflow-hidden",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex-shrink-0 flex items-center justify-center w-full lg:w-430px max-h-430px lg:max-h-full overflow-hidden bg-gray-300",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
          src: (_image$original = image === null || image === void 0 ? void 0 : image.original) !== null && _image$original !== void 0 ? _image$original : "/assets/placeholder/products/product-thumbnail.svg",
          alt: name,
          className: "lg:object-cover lg:w-full lg:h-full"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col p-5 md:p-8 w-full",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "pb-5",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mb-2 md:mb-2.5 block -mt-1.5",
            onClick: navigateToProductPage,
            role: "button",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
              className: "text-heading text-lg md:text-xl lg:text-2xl font-semibold hover:text-black",
              children: name
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "text-sm leading-6 md:text-body md:leading-7",
            children: description
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center mt-3",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "text-heading font-semibold text-base md:text-xl lg:text-2xl",
              children: price
            }), discount && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("del", {
              className: "font-segoe text-gray-400 text-base lg:text-xl ps-2.5 -mt-0.5 md:mt-0",
              children: basePrice
            })]
          })]
        }), Object.keys(variations).map(variation => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_product_attributes__WEBPACK_IMPORTED_MODULE_9__/* .ProductAttributes */ .P, {
            title: variation,
            attributes: variations[variation],
            active: attributes[variation],
            onClick: handleAttribute
          }, `popup-attribute-key${variation}`);
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "pt-2 md:pt-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center justify-between mb-4 space-s-3 sm:space-s-4",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_counter__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
              quantity: quantity,
              onIncrement: () => setQuantity(prev => prev + 1),
              onDecrement: () => setQuantity(prev => prev !== 1 ? prev - 1 : 1),
              disableDecrement: quantity === 1
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
              onClick: addToCart,
              variant: "flat",
              className: `w-full h-11 md:h-12 px-1.5 ${!isSelected && "bg-gray-400 hover:bg-gray-400"}`,
              disabled: !isSelected,
              loading: addToCartLoader,
              children: t("text-add-to-cart")
            })]
          }), viewCartBtn && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: navigateToCartPage,
            className: "w-full mb-4 h-11 md:h-12 rounded bg-gray-100 text-heading focus:outline-none border border-gray-300 transition-colors hover:bg-gray-50 focus:bg-gray-50",
            children: t("text-view-cart")
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
            onClick: navigateToProductPage,
            variant: "flat",
            className: "w-full h-11 md:h-12",
            children: t("text-view-details")
          })]
        })]
      })]
    })
  });
}

/***/ })

};
;