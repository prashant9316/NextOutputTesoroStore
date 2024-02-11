"use strict";
(() => {
var exports = {};
exports.id = 4228;
exports.ids = [4228];
exports.modules = {

/***/ 6548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


// const style = {
// }
const Divider = ({
  className = "mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: `border-t border-gray-300 ${className}`
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Divider);

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

/***/ }),

/***/ 3585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ useUpdateUserMutation)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2585);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
// import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
// import http from "@framework/utils/http";


async function updateUser(input) {
  // return http.post(API_ENDPOINTS.ChangeEmail, input);
  return input;
}

const useUpdateUserMutation = () => {
  return (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(input => updateUser(input), {
    onSuccess: data => {
      console.log(data, "UpdateUser success response");
    },
    onError: data => {
      console.log(data, "UpdateUser error response");
    }
  });
};

/***/ }),

/***/ 5895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProductPage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./src/components/ui/container.tsx
var container = __webpack_require__(9691);
// EXTERNAL MODULE: ./src/components/layout/layout.tsx + 24 modules
var layout = __webpack_require__(239);
// EXTERNAL MODULE: ./src/components/common/subscription.tsx
var subscription = __webpack_require__(7181);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(1553);
// EXTERNAL MODULE: ./src/components/common/counter.tsx + 2 modules
var counter = __webpack_require__(7428);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/framework/basic-rest/utils/https.ts
var https = __webpack_require__(7790);
// EXTERNAL MODULE: ./src/framework/basic-rest/utils/api-endpoints.ts
var api_endpoints = __webpack_require__(3833);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
;// CONCATENATED MODULE: ./src/framework/basic-rest/product/get-product.tsx
// import { Product } from "@framework/types";



const fetchProduct = async _slug => {
  let data;
  data = (await https/* default.get */.Z.get(`${api_endpoints/* API_ENDPOINTS.PRODUCT */.P.PRODUCT}${_slug}`)).data;
  console.log("fetchProduct:", data);
  return data;
};
const useProductQuery = slug => {
  return (0,external_react_query_.useQuery)([api_endpoints/* API_ENDPOINTS.PRODUCT */.P.PRODUCT, slug], () => fetchProduct(slug));
};
// EXTERNAL MODULE: ./src/framework/basic-rest/utils/get-variations.ts
var get_variations = __webpack_require__(9711);
// EXTERNAL MODULE: ./src/contexts/cart/cart.context.tsx + 3 modules
var cart_context = __webpack_require__(9745);
// EXTERNAL MODULE: ./src/utils/generate-cart-item.ts
var generate_cart_item = __webpack_require__(7628);
// EXTERNAL MODULE: ./src/components/product/product-attributes.tsx
var product_attributes = __webpack_require__(5216);
// EXTERNAL MODULE: external "lodash/isEmpty"
var isEmpty_ = __webpack_require__(8718);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty_);
// EXTERNAL MODULE: ./src/components/ui/link.tsx
var ui_link = __webpack_require__(3407);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
// EXTERNAL MODULE: ./src/utils/use-window-size.ts
var use_window_size = __webpack_require__(2558);
// EXTERNAL MODULE: ./src/components/ui/carousel/carousel.tsx
var carousel = __webpack_require__(7956);
// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__(2156);
// EXTERNAL MODULE: ./src/components/ui/input.tsx
var input = __webpack_require__(3977);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
// EXTERNAL MODULE: ./src/utils/motion/fade-in-top.ts
var fade_in_top = __webpack_require__(2559);
// EXTERNAL MODULE: ./src/framework/basic-rest/customer/use-update-customer.tsx
var use_update_customer = __webpack_require__(3585);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
;// CONCATENATED MODULE: ./src/components/product/pinCodeForm.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // import { RadioBox } from "@components/ui/radiobox";


const defaultValues = {};

const PinCodeCheckForm = () => {
  var _errors$phoneNumber;

  const {
    // mutate: updateUser, 
    isLoading
  } = (0,use_update_customer/* useUpdateUserMutation */.k)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)();
  const {
    register,
    // handleSubmit,
    formState: {
      errors
    }
  } = (0,external_react_hook_form_.useForm)({
    defaultValues
  }); // function onSubmit(input: UpdateUserType) {
  // 	updateUser(input);
  // }

  function handlePinCheck(e) {
    console.log(e);
  }

  return /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.div, {
    layout: true,
    initial: "from",
    animate: "to",
    exit: "from" //@ts-ignore
    ,
    variants: (0,fade_in_top/* fadeInTop */.E)(0.35),
    className: `w-full flex flex-col`,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      onSubmit: handlePinCheck,
      className: "w-full mx-auto flex flex-col justify-center ",
      noValidate: true,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-row",
        children: [/*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, _objectSpread(_objectSpread({
          type: "tel" // labelKey="forms:label-phone"

        }, register("phoneNumber", {
          required: "forms:phone-required"
        })), {}, {
          variant: "solid",
          className: "font-josephine w-36 m-2",
          placeholder: "Pin Code",
          errorKey: (_errors$phoneNumber = errors.phoneNumber) === null || _errors$phoneNumber === void 0 ? void 0 : _errors$phoneNumber.message
        })), /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
          type: "submit",
          loading: isLoading,
          disabled: isLoading,
          variant: "new",
          className: "font-josephine h-10 w-28 m-2 ",
          children: t("Check")
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "font-josephine text-gray-400 text-xs ml-5",
        children: "Check Pin Code*"
      })]
    })
  });
};

/* harmony default export */ const pinCodeForm = (PinCodeCheckForm);
;// CONCATENATED MODULE: ./src/components/product/productRating.tsx



function ProductRating() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
    className: "pt-0 mt-0 mb-2 flex",
    children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 128 128",
        children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "#FDD835",
          d: "m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z"
        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "#FFFF8D",
          d: "m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z"
        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "#F4B400",
          d: "M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 128 128",
        children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "#FDD835",
          d: "m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z"
        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "#FFFF8D",
          d: "m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z"
        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "#F4B400",
          d: "M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 128 128",
        children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "#FDD835",
          d: "m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z"
        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "#FFFF8D",
          d: "m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z"
        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "#F4B400",
          d: "M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 128 128",
        children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "#FDD835",
          d: "m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z"
        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "#FFFF8D",
          d: "m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z"
        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "#F4B400",
          d: "M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-1/2 float-left overflow-hidden",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "20",
          height: "20",
          viewBox: "0 0 128 128",
          children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "#FDD835",
            d: "m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "#FFFF8D",
            d: "m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "#F4B400",
            d: "M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z"
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      className: "pt-2 pl-2",
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-xs font-bold text-gray-400 pb-0 mb-0",
        children: "4.1 stars rating"
      })
    })]
  });
}
// EXTERNAL MODULE: ./src/components/ui/loaders/card-rounded-loader.tsx
var card_rounded_loader = __webpack_require__(7776);
// EXTERNAL MODULE: ./src/framework/basic-rest/category/get-all-categories.tsx
var get_all_categories = __webpack_require__(154);
// EXTERNAL MODULE: ./src/components/ui/alert.tsx
var ui_alert = __webpack_require__(3158);
// EXTERNAL MODULE: external "react-reveal"
var external_react_reveal_ = __webpack_require__(9356);
// EXTERNAL MODULE: ./src/components/ui/text.tsx
var ui_text = __webpack_require__(7077);
;// CONCATENATED MODULE: ./src/components/common/sectionHeader2.tsx




 // import Wobble from "react-reveal/Wobble"

const SectionHeader2 = ({
  sectionHeading = "text-section-title",
  categorySlug,
  className = "pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8",
  boxshadow = false
}) => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `flex items-center justify-center -mt-2 lg:-mt-2.5 ${className}`,
    children: [boxshadow ? /*#__PURE__*/jsx_runtime_.jsx(ui_text/* default */.Z, {
      variant: "mediumHeading",
      className: "text-gray-700",
      style: {
        backgroundColor: '',
        boxShadow: '8px 11px 8px rgba(218, 224, 245, 0)',
        padding: '10px',
        marginTop: '9px',
        borderRadius: '12px',
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: 'Van'
      },
      children: t(`${sectionHeading}`)
    }) : /*#__PURE__*/jsx_runtime_.jsx(ui_text/* default */.Z, {
      variant: "subHeading",
      className: "font-normal",
      children: t(`${sectionHeading}`)
    }), categorySlug && /*#__PURE__*/jsx_runtime_.jsx(ui_link/* default */.Z, {
      href: categorySlug,
      className: "text-xs lg:text-sm xl:text-base text-heading mt-0.5 lg:mt-1",
      children: t("text-see-all-product")
    })]
  });
};

/* harmony default export */ const sectionHeader2 = (SectionHeader2);
;// CONCATENATED MODULE: ./src/components/product/product-review.tsx


// import Card from '@components/common/card';
 // import CardLoader from '@components/ui/loaders/card-loader';


 // import { ROUTES } from '@utils/routes';






const color = '#F6C0C9';
const stroke = 'border-gray-400';
const breakpoints = {
  '1720': {
    slidesPerView: 5,
    spaceBetween: 28
  },
  '1400': {
    slidesPerView: 5,
    spaceBetween: 28
  },
  '1025': {
    slidesPerView: 5,
    spaceBetween: 28
  },
  '768': {
    slidesPerView: 5,
    spaceBetween: 20
  },
  '500 ': {
    slidesPerView: 4,
    spaceBetween: 20
  },
  '0': {
    slidesPerView: 3,
    spaceBetween: 12
  }
};
const breakpointsCircle = {
  '1720': {
    slidesPerView: 4,
    spaceBetween: 36
  },
  '1400': {
    slidesPerView: 4,
    spaceBetween: 28
  },
  '1025': {
    slidesPerView: 3,
    spaceBetween: 24
  },
  '768': {
    slidesPerView: 2,
    spaceBetween: 20
  },
  '500 ': {
    slidesPerView: 2,
    spaceBetween: 14
  },
  '0': {
    slidesPerView: 1,
    spaceBetween: 8
  }
};

const ProductCard = ({
  data
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "drop-shadow-lg rounded-lg hover:drop-shadow-2xl w-full h-full",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "pt-3 pb-5 md:pb-1 px-4 md:px-1 bg-gray-300 bg-opacity-40",
      style: {
        borderTopLeftRadius: '40px',
        borderTopRightRadius: '40px'
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-wrap items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "bg-white items-center",
          style: {
            borderRadius: '20%',
            width: 'auto',
            boxShadow: '2px 2px 2px 2px rgba(100, 100, 100, 0.1)'
          },
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            className: "mx-2",
            src: "/assets/images/users/user1.jpg",
            height: 50,
            width: 50,
            alt: "",
            style: {
              borderRadius: '50%'
            }
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
          className: "font-josephine w-full md:w-auto text-sm font-heading font-semibold ml-3",
          children: "Bradiee"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "font-josephine w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-400"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "font-josephine mr-4 text-sm font-heading font-semibold",
          children: "5.0"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "inline-flex",
          children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "inline-block mr-1",
            href: "#",
            children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
              width: "10",
              height: "10",
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z",
                fill: "#FFCB00"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "inline-block mr-1",
            href: "#",
            children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
              width: "10",
              height: "10",
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z",
                fill: "#FFCB00"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "inline-block mr-1",
            href: "#",
            children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
              width: "10",
              height: "10",
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z",
                fill: "#FFCB00"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "inline-block mr-1",
            href: "#",
            children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
              width: "10",
              height: "10",
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z",
                fill: "#FFCB00"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "inline-block mr-1",
            href: "#",
            children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
              width: "10",
              height: "10",
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z",
                fill: "#FFCB00"
              })
            })
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "bg-white flex flex-wrap overflow-hidden",
      style: {
        borderBottomLeftRadius: '12px',
        borderBottomRightRadius: '12px'
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "w-full mb-6 md:mb-0 px-5 py-3",
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "font-josephine mb-8 max-w-2xl text-gray-800 leading-loose",
          children: "My friend really loved this gift. One of the best gifting options ever! "
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: " mt-5",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "inline-flex w-full md:w-auto md:mr-1 mb-1",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: `flex items-center h-8 pl-1 pr-3 bg-[#FFF5F80] border-2 ${stroke} rounded-full`,
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: `flex mr-2 w-4 h-4 items-center justify-center bg-white rounded-full text-[${color}]`,
                children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                  width: "8",
                  height: "8",
                  viewBox: "0 0 11 11",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                    d: "M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z",
                    fill: "currentColor"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: `font-josephine text-[${color}] text-xs font-normal`,
                children: "Aesthetics"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "inline-flex w-full md:w-auto md:mr-1 mb-1",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: `flex items-center h-8 pl-1 pr-3 bg-[#FFF5F80] border-2 ${stroke} rounded-full`,
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: `flex mr-2 w-4 h-4 items-center justify-center bg-white rounded-full text-[${color}]`,
                children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                  width: "8",
                  height: "8",
                  viewBox: "0 0 11 11",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                    d: "M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z",
                    fill: "currentColor"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: `font-josephine text-[${color}] text-xs font-normal`,
                children: "Finishing"
              })]
            })
          })]
        })]
      })
    })]
  }, data ? data.item : '1');
};

const ProductsReviewCards = ({
  className = 'mb-10 md:mb-11 lg:mb-12 xl:mb-14 lg:pb-8 xl:pb-10 mx-0 w-full drop-shadow-lg',
  sectionHeading = "Product Reviews",
  // ReviewData,
  type = 'circle'
}) => {
  const {
    data,
    isLoading,
    error
  } = (0,get_all_categories/* useCategoriesQuery */.E)({
    limit: 10
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: className + " bg-category-section",
    style: {
      backgroundColor: '#FFF5F8',
      borderRadius: '12px',
      padding: '10px'
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(sectionHeader2, {
      className: "text-gray-700 mb-5",
      sectionHeading: sectionHeading,
      boxshadow: true
    }), error ? /*#__PURE__*/jsx_runtime_.jsx(ui_alert/* default */.Z, {
      message: error === null || error === void 0 ? void 0 : error.message
    }) : /*#__PURE__*/jsx_runtime_.jsx(external_react_reveal_.Fade, {
      bottom: true,
      children: /*#__PURE__*/jsx_runtime_.jsx(carousel/* default */.Z, {
        breakpoints: type === 'rounded' ? breakpoints : breakpointsCircle,
        buttonClassName: "-mt-8 md:-mt-10",
        className: "mb-6",
        children: isLoading && !data ? Array.from({
          length: 10
        }).map((_, idx) => {
          if (type === 'rounded') {
            return /*#__PURE__*/jsx_runtime_.jsx(react_.SwiperSlide, {
              children: /*#__PURE__*/jsx_runtime_.jsx(card_rounded_loader/* default */.Z, {
                uniqueKey: `card-rounded-${idx}`
              })
            }, `card-rounded-${idx}`);
          }

          return /*#__PURE__*/jsx_runtime_.jsx(react_.SwiperSlide, {
            children: /*#__PURE__*/jsx_runtime_.jsx(ProductCard, {
              data: data
            })
          }, `card-circle-${idx}`);
        }) : data === null || data === void 0 ? void 0 : data.categoryRef.map(category => /*#__PURE__*/jsx_runtime_.jsx(react_.SwiperSlide, {
          children: /*#__PURE__*/jsx_runtime_.jsx(ProductCard, {
            data: category //   item={category}
            //   href={`${ROUTES.CATEGORY}/${category.slug}`}
            //   variant={type}
            //   effectActive={true}
            //   size={type === 'rounded' ? 'medium' : 'small'}

          })
        }, `category--key-${category.id}`))
      })
    })]
  });
};

/* harmony default export */ const product_review = (ProductsReviewCards);
;// CONCATENATED MODULE: ./src/components/product/product-single-details.tsx




function product_single_details_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function product_single_details_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { product_single_details_ownKeys(Object(source), true).forEach(function (key) { product_single_details_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { product_single_details_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function product_single_details_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // import usePrice from "@framework/product/use-price";









 // import ProductMetaReview from "@components/product/product-meta-review";


 // import CardRoundedLoader from "@components/ui/loaders/card-rounded-loader";



// const productGalleryCarouselResponsive = {
// 	"768": {
// 		slidesPerView: 2,
// 	},
// 	"0": {
// 		slidesPerView: 1,
// 	},
// };
// const productGalleryCarouselResponsive2 = {
// 	"768": {
// 		slidesPerView: 2,
// 	},
// 	"0": {
// 		slidesPerView: 1,
// 	},
// };
// const productVerticalGalleryCarouselResponsive = {
// 	"1200": {
// 		slidesPerview: 6
// 	}
// }
// import { Product } from "@framework/types";
// import { useTranslation } from "next-i18next";
// interface ProductProps {
// 	slug: string;
// 	variant?: "grid" | "gridSlim" | "list" | "listSmall" | "grid_grad";
// }
const ProductSingleDetails = () => {
  var _data$image, _data$image2;

  const {
    0: imgToShow,
    1: setImgToShow
  } = (0,external_react_.useState)("");
  const {
    query: {
      slug
    }
  } = (0,router_.useRouter)();
  const {
    width
  } = (0,use_window_size/* useWindowSize */.i)();
  const {
    data,
    isLoading
  } = useProductQuery(slug);
  (0,external_react_.useEffect)(() => {
    var _data$image$;

    setImgToShow((_data$image$ = data === null || data === void 0 ? void 0 : data.image[0]) !== null && _data$image$ !== void 0 ? _data$image$ : "");
  }, [data]);
  const {
    addItemToCart
  } = (0,cart_context/* useCart */.jD)();
  const {
    0: attributes,
    1: setAttributes
  } = (0,external_react_.useState)({});
  const {
    0: quantity,
    1: setQuantity
  } = (0,external_react_.useState)(1);
  const {
    0: addToCartLoader,
    1: setAddToCartLoader
  } = (0,external_react_.useState)(false); // const { 
  // 	price, basePrice, 
  // 	discount } = usePrice(
  // 	data && {
  // 		amount: data.prices.price ? data.prices.price : data.prices.orginalPrice,
  // 		baseAmount: data.prices.price,
  // 		currencyCode: "INR",
  // 	}
  // );
  // const discount = data?.prices.price
  // console.log(price, basePrice)
  // useEffect(() => {
  // 	setImgToShow(data?.image??"")
  // }, [data])

  if (isLoading) return /*#__PURE__*/jsx_runtime_.jsx("p", {
    children: "Loading..."
  });
  const variations = (0,get_variations/* getVariations */.y)(data === null || data === void 0 ? void 0 : data.variants); // let tags:string[];
  // if(data?.tag){
  // 	tags = data?.tag.toString().replace(/\"/g, "")
  // 		.replace(/\[/g,"")
  // 		.replace(/\]/g,"")
  // 		.split(",");
  // }
  // console.log(tags);
  // console.log("tags: ",tags)

  const isSelected = !isEmpty_default()(variations) ? !isEmpty_default()(attributes) && Object.keys(variations).every(variation => attributes.hasOwnProperty(variation)) : true;

  function addToCart() {
    if (!isSelected) return; // to show btn feedback while product carting

    setAddToCartLoader(true);
    setTimeout(() => {
      setAddToCartLoader(false);
    }, 600);
    const precart = {
      id: (data === null || data === void 0 ? void 0 : data._id) || '',
      name: (data === null || data === void 0 ? void 0 : data.title.en) || ' ',
      slug: (data === null || data === void 0 ? void 0 : data.slug) || ' ',
      image: (data === null || data === void 0 ? void 0 : data.image[0]) || '',
      price: (data === null || data === void 0 ? void 0 : data.prices.originalPrice) || 0,
      sale_price: (data === null || data === void 0 ? void 0 : data.prices.price) || 0
    };
    const item = (0,generate_cart_item/* generateCartItem */.z)(precart, attributes);
    addItemToCart(item, quantity);
    (0,external_react_toastify_.toast)("Added to the bag", {
      type: "dark",
      progressClassName: "fancy-progress-bar",
      position: width > 768 ? "bottom-right" : "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
    console.log(item, "item");
  }

  function handleAttribute(attribute) {
    setAttributes(prev => product_single_details_objectSpread(product_single_details_objectSpread({}, prev), attribute));
  } // const { t } = useTranslation("common");


  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-3 pb-10 lg:pb-14 2xl:pb-20 items-start",
      children: [width < 1025 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "md:col-span-1 xl:col-span-1 lg:col-span-1 sm:col-span-0 w-full"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "lg:col-span-4 md:col-span-6 w-full flex",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "w-full h-full",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: imgToShow !== null && imgToShow !== void 0 ? imgToShow : data === null || data === void 0 ? void 0 : data.image[0],
              alt: "",
              className: " object-fit p-2",
              style: {
                borderRadius: '20px',
                height: '75vh',
                margin: 'auto'
              }
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-span-2",
              children: /*#__PURE__*/jsx_runtime_.jsx(carousel/* default */.Z // pagination={{
              // 	clickable: true,
              // }}
              // breakpoints={productGalleryCarouselResponsive}
              , {
                slidesPerView: data === null || data === void 0 ? void 0 : data.image.length,
                className: "product-gallery",
                buttonClassName: "hidden",
                children: data === null || data === void 0 ? void 0 : (_data$image = data.image) === null || _data$image === void 0 ? void 0 : _data$image.map((item, index) => {
                  var _item$original;

                  return /*#__PURE__*/jsx_runtime_.jsx(react_.SwiperSlide, {
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "col-span-1 transition duration-150 ease-in hover:opacity-90",
                      onClick: () => {
                        setImgToShow(item);
                      },
                      style: {// height: '20vh'
                        // width: '10vh'
                      },
                      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                        src: (_item$original = item === null || item === void 0 ? void 0 : item.original) !== null && _item$original !== void 0 ? _item$original : "/assets/placeholder/products/product-gallery.svg",
                        alt: `${data === null || data === void 0 ? void 0 : data.title.en}--${index}`,
                        className: "object-cover w-full",
                        style: {
                          borderRadius: '15px',
                          padding: '5px' // height: '10vh',
                          // width: '10vh'

                        }
                      })
                    })
                  }, `product-gallery-key-${index}`);
                })
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "lg:col-span-1 md:hidden lg:w-full"
        })]
      }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "lg:col-span-1",
          style: {
            maxHeight: '80vh',
            overflow: 'auto'
          },
          children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
            children: data === null || data === void 0 ? void 0 : (_data$image2 = data.image) === null || _data$image2 === void 0 ? void 0 : _data$image2.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "",
              onClick: () => {
                setImgToShow(item);
              },
              style: {
                border: '1px solid gray',
                padding: '2px'
              },
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: item !== null && item !== void 0 ? item : "/assets/placeholder/products/product-gallery.svg" // height={'10vh'} 
                // width={'10vh'} 

              })
            }, index))
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "lg:col-span-4",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: imgToShow !== null && imgToShow !== void 0 ? imgToShow : data === null || data === void 0 ? void 0 : data.image[0],
            alt: "",
            style: {
              height: '80vh'
            }
          })
        })]
      }) // {/* // <div className="col-span-5 grid grid-cols-2 gap-2.5">
      // // 	{data?.gallery?.map((item, index: number) => ( 
      // // 		<div
      // // 			key={index}
      // // 			className="col-span-1 transition duration-150 ease-in hover:opacity-90"
      // // 		>
      // // 			<img
      // // 				src={
      // // 					item?.original ??
      // // 					"/assets/placeholder/products/product-gallery.svg"
      // // 				}
      // // 				alt={`${data?.name}--${index}`}
      // // 				className="object-cover w-full"
      // // 			/>
      // // 		</div>
      // // 	))}
      // // </div>*/}
      , /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "col-span-4 pt-8 lg:pt-0 hide-scrollbar",
        style: {
          height: '80vh',
          overflowY: 'scroll',
          overflowX: 'hidden'
        },
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "pb-4 mb-4 border-b border-gray-300",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "font-josephine text-gray-600 text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-slate-800 mt-10 uppercase mb-3",
            children: data === null || data === void 0 ? void 0 : data.title["en"]
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "font-bold pb-5 font-josephine",
            children: data === null || data === void 0 ? void 0 : data.description["en"]
          }), /*#__PURE__*/jsx_runtime_.jsx(ProductRating, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center mt-5",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "font-josephine text-gray-600 font-semibold text-base md:text-md lg:text-lg 2xl:text-2xl pe-2 md:pe-0 lg:pe-2 2xl:pe-0",
              children: ["\u20B9", data === null || data === void 0 ? void 0 : data.prices.price, "/-"]
            }), (data === null || data === void 0 ? void 0 : data.prices.discount) && /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              className: "font-josephine font-normal line-through font-segoe text-gray-400 text-sm md:text-base lg:text-md xl:text-lg ps-2",
              children: ["\u20B9", data === null || data === void 0 ? void 0 : data.prices.originalPrice, "/-"]
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "pb-3 border-b border-gray-300",
          children: [Object.keys(variations).map(variation => {
            return /*#__PURE__*/jsx_runtime_.jsx(product_attributes/* ProductAttributes */.P, {
              title: variation,
              attributes: variations[variation],
              active: attributes[variation],
              onClick: handleAttribute
            }, variation);
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "md:w-1/3 sm:w-full mb-2",
            children: /*#__PURE__*/jsx_runtime_.jsx(counter/* default */.Z, {
              quantity: quantity,
              onIncrement: () => setQuantity(prev => prev + 1),
              onDecrement: () => setQuantity(prev => prev !== 1 ? prev - 1 : 1),
              disableDecrement: quantity === 1
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mt-4",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
            className: "table-fixed sm:w-full md:w-2/3 ",
            style: {
              borderBottomRightRadius: '10px',
              borderTopLeftRadius: '10px',
              padding: '5px',
              margin: '10px',
              boxShadow: '1.5px 1.5px 1.5px 2px rgba(248, 113, 113, 0.3)'
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
              children: /*#__PURE__*/jsx_runtime_.jsx("tr", {
                children: /*#__PURE__*/jsx_runtime_.jsx("th", {
                  className: "font-josephine text-red-400 text-left pl-5 pt-3",
                  children: "BEST OFFERS FOR YOU!"
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tbody", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("tr", {
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
                  className: "",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "font-josephine bg-black w-2/3 ml-5 mt-2 mb-2",
                    style: {
                      height: '1px'
                    }
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "font-josephine font-semibold w-full pl-5 mr-10 mb-0",
                    children: "Get 5% Off sitewide"
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "font-josephine flex pl-5 items-center mb-1",
                    children: ["Use Code ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "p-1 ml-4 text-gray-600 border-2 bg-[#FFE583] font-bold text-sm",
                      children: "MAKEHOMESPECIAL"
                    }), " "]
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("tr", {
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "font-josephine bg-black w-2/3 ml-5 mt-2 mb-2",
                    style: {
                      height: '1px'
                    }
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "font-josephine font-semibold w-full pl-5 mr-10",
                    children: "Get Rs 150 Off on your first purchase"
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "font-josephine flex pl-5 items-center mb-1",
                    children: ["Use Code ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "p-1 ml-4 text-gray-600 border-2 bg-[#FFE583] font-bold text-sm",
                      children: "WELCOMETESORO"
                    }), " "]
                  })]
                })
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "my-5",
          children: /*#__PURE__*/jsx_runtime_.jsx(pinCodeForm, {})
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex items-center w-[70%] sm:w-full",
          children: [/*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
            onClick: addToCart,
            variant: "new",
            className: `font-josephine w-full md:w-1/2 xl:w-1/3 m-2 ${!isSelected && ""}`,
            disabled: !isSelected,
            loading: addToCartLoader,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "py-2 3xl:px-8 text-lg mt-1",
              children: "ADD TO CART"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
            onClick: addToCart,
            variant: "new-2",
            className: `font-josephine w-full md:w-1/2 m-2 xl:w-1/3 flex hover:bg-white hover:drop-shadow-md bg-indigo-500 hover:text-indigo-500 text-white ${!isSelected && ""}`,
            disabled: !isSelected,
            loading: addToCartLoader,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "py-1 3xl:px-8 text-lg mt-1",
              children: "BUY NOW"
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "py-6",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "text-sm space-y-5 pb-1",
            children: [(data === null || data === void 0 ? void 0 : data.category) && /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              className: "productCategory",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "font-josephine text-xl font-semibold text-gray-900 inline-block pe-2",
                children: "Category:"
              }), /*#__PURE__*/jsx_runtime_.jsx(ui_link/* default */.Z, {
                href: "/",
                className: "font-josephine text-lg transition hover:underline hover:text-heading",
                children: data.category.name.en
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
              children: (data === null || data === void 0 ? void 0 : data.tag) && Array.isArray(data.tag) && /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                className: "productTags",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "text-xl font-josephine font-semibold text-gray-900 inline-block pe-2",
                  children: "Tags:"
                }), data.tag[0].substring(1, data.tag[0].length - 1).split(",").map((t, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(ui_link/* default */.Z, {
                  href: t.replace(/"/g, ""),
                  className: "text-xl font-josephine inline-block pe-1.5 transition hover:underline hover:text-heading last:pe-0",
                  children: [t.replace(/"/g, ""), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: " text-lg font-josephine text-heading",
                    children: ","
                  })]
                }, index))]
              })
            })]
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-3 pb-10 lg:pb-14 2xl:pb-20 items-start",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "lg:col-span-1"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "lg:col-span-4",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "font-josephine text-left text-xl font-bold text-gray-800",
          children: "Product Details"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "font-josephine ",
          children: data === null || data === void 0 ? void 0 : data.description["en"]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "lg:col-span-4",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "py-6",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "text-lg space-y-5 pb-1",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              className: "font-josephine ",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "font-josephine font-semibold text-heading inline-block pe-2",
                children: "Dimensions"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "font-josephine",
                children: "45cm x 25cm x 53cm"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              className: "font-josephine ",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "font-josephine font-semibold text-heading inline-block pe-2",
                children: "Composition"
              }), "Glass"]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              className: "font-josephine ",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "font-josephine font-semibold text-heading inline-block pe-2",
                children: "Product Code:"
              }), "SKU1253fC"]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              className: "font-josephine ",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "font-josephine font-semibold text-heading inline-block pe-2",
                children: "Delivery time:"
              }), "The product would be delivered in 3-10 days after shipping"]
            })]
          })
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(product_review, {
      ReviewData: data
    })]
  });
};

/* harmony default export */ const product_single_details = (ProductSingleDetails);
// EXTERNAL MODULE: ./src/components/common/section-header.tsx
var section_header = __webpack_require__(8092);
// EXTERNAL MODULE: ./src/components/product/product-card.tsx
var product_card = __webpack_require__(6628);
// EXTERNAL MODULE: ./src/components/ui/loaders/product-feed-loader.tsx + 1 modules
var product_feed_loader = __webpack_require__(9761);
// EXTERNAL MODULE: ./src/framework/basic-rest/product/get-all-new-arrival-products.tsx
var get_all_new_arrival_products = __webpack_require__(848);
;// CONCATENATED MODULE: ./src/containers/related-products.tsx




 // import { useRelatedProductsQuery } from "@framework/product/get-related-product";




const RelatedProducts = ({
  sectionHeading,
  className = "mb-5 lg:mb-5 xl:mb-8"
}) => {
  const {
    data,
    isLoading,
    error
  } = (0,get_all_new_arrival_products/* useNewArrivalProductsQuery */.l)({
    limit: 6
  }); // const { data, isLoading, error } = useRelatedProductsQuery({
  // 	limit: 10,
  // });

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/jsx_runtime_.jsx(section_header/* default */.Z, {
      boxshadow: true,
      sectionHeading: sectionHeading
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8",
      children: error ? /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-span-full",
        children: /*#__PURE__*/jsx_runtime_.jsx(ui_alert/* default */.Z, {
          message: error === null || error === void 0 ? void 0 : error.message
        })
      }) : isLoading ? /*#__PURE__*/jsx_runtime_.jsx(product_feed_loader/* default */.Z, {
        limit: 5,
        uniqueKey: "related-product"
      }) : data === null || data === void 0 ? void 0 : data.productRef.slice(0, 6).map(product => /*#__PURE__*/jsx_runtime_.jsx(product_card/* default */.Z, {
        product: product,
        imgWidth: 440,
        imgHeight: 440,
        variant: "grid"
      }, `product--key${product.id}`))
    })]
  });
};

/* harmony default export */ const related_products = (RelatedProducts);
// EXTERNAL MODULE: ./src/components/ui/divider.tsx
var divider = __webpack_require__(6548);
// EXTERNAL MODULE: ./src/components/common/breadcrumb.tsx + 1 modules
var breadcrumb = __webpack_require__(5249);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(3295);
;// CONCATENATED MODULE: ./src/containers/related-categories.tsx



const data = ['home decor', 'planters', 'stationary', 'Customized Frames', 'Pen Stand', 'DIY Giftbox'];
function RelatedCategories() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex items-center mt-4 mb-10",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "You may also like: "
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: "flex",
        children: data.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "mx-[0.4rem] items-center h-8 px-3 bg-indigo-100 border-2 border-indigo-500 rounded-full hover:bg-indigo-200 cursor-pointer",
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "text-indigo-500 text-xs font-normal",
            children: item
          })
        }, index))
      })
    })]
  });
}
;// CONCATENATED MODULE: ./src/pages/products/[slug].tsx




function _slug_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _slug_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _slug_ownKeys(Object(source), true).forEach(function (key) { _slug_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _slug_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slug_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 // import { useRouter } from "next/router";
// import { useProductQuery } from "@framework/product/get-product";

function ProductPage() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(divider/* default */.Z, {
      className: "mt-[10vh]"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(container/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "pt-2",
        children: /*#__PURE__*/jsx_runtime_.jsx(breadcrumb/* default */.Z, {})
      }), /*#__PURE__*/jsx_runtime_.jsx(product_single_details, {}), /*#__PURE__*/jsx_runtime_.jsx(related_products, {
        sectionHeading: "PEOPLE BUYING THIS ALSO BOUGHT"
      }), /*#__PURE__*/jsx_runtime_.jsx(related_products, {
        sectionHeading: "SIMILAR PRODUCTS"
      }), /*#__PURE__*/jsx_runtime_.jsx(RelatedCategories, {}), /*#__PURE__*/jsx_runtime_.jsx(subscription/* default */.Z, {})]
    })]
  });
}
ProductPage.Layout = layout/* default */.Z;
const getServerSideProps = async ({
  locale
}) => {
  return {
    props: _slug_objectSpread({}, await (0,serverSideTranslations_.serverSideTranslations)(locale, ["common", "forms", "menu", "footer"]))
  };
};

/***/ }),

/***/ 2559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ fadeInTop)
/* harmony export */ });
function fadeInTop(duration = 0.5) {
  return {
    from: {
      position: 'relative',
      top: "50px",
      opacity: 0,
      transition: {
        type: 'easeInOut',
        duration: duration
      }
    },
    to: {
      position: 'relative',
      top: "0",
      opacity: 1,
      transition: {
        type: 'easeInOut',
        duration: duration
      }
    }
  };
}

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8023:
/***/ ((module) => {

module.exports = require("body-scroll-lock");

/***/ }),

/***/ 4058:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 762:
/***/ ((module) => {

module.exports = require("framer-motion");

/***/ }),

/***/ 6155:
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ 3089:
/***/ ((module) => {

module.exports = require("lodash/groupBy");

/***/ }),

/***/ 8718:
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 8475:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 3295:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 2364:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 8300:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9639:
/***/ ((module) => {

module.exports = require("next/dynamic");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 1958:
/***/ ((module) => {

module.exports = require("overlayscrollbars-react");

/***/ }),

/***/ 1346:
/***/ ((module) => {

module.exports = require("rc-drawer");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9081:
/***/ ((module) => {

module.exports = require("react-content-loader");

/***/ }),

/***/ 9589:
/***/ ((module) => {

module.exports = require("react-fast-marquee");

/***/ }),

/***/ 2662:
/***/ ((module) => {

module.exports = require("react-hook-form");

/***/ }),

/***/ 2585:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 9356:
/***/ ((module) => {

module.exports = require("react-reveal");

/***/ }),

/***/ 2034:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 173:
/***/ ((module) => {

module.exports = require("react-use/lib/useLocalStorage");

/***/ }),

/***/ 5319:
/***/ ((module) => {

module.exports = require("react-use/lib/useWindowSize");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4074:
/***/ ((module) => {

module.exports = require("swiper");

/***/ }),

/***/ 2156:
/***/ ((module) => {

module.exports = require("swiper/react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8453,9583,9300,926,2095,239,3977,7077,7181,5101,7790,1809,5249,7428,1223], () => (__webpack_exec__(5895)));
module.exports = __webpack_exports__;

})();