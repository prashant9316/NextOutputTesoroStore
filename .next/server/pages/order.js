"use strict";
(() => {
var exports = {};
exports.id = 1941;
exports.ids = [1941];
exports.modules = {

/***/ 2739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Order),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./src/components/ui/container.tsx
var container = __webpack_require__(9691);
// EXTERNAL MODULE: ./src/components/layout/layout.tsx + 24 modules
var layout = __webpack_require__(239);
// EXTERNAL MODULE: ./src/components/common/subscription.tsx
var subscription = __webpack_require__(7181);
// EXTERNAL MODULE: ./src/components/ui/page-header.tsx
var page_header = __webpack_require__(6722);
// EXTERNAL MODULE: ./node_modules/react-icons/io5/index.esm.js
var index_esm = __webpack_require__(155);
// EXTERNAL MODULE: ./src/components/order/order-details.tsx
var order_details = __webpack_require__(7412);
// EXTERNAL MODULE: ./src/framework/basic-rest/order/get-order.ts
var get_order = __webpack_require__(1242);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/framework/basic-rest/product/use-price.tsx
var use_price = __webpack_require__(4718);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
;// CONCATENATED MODULE: ./src/components/order/order-information.tsx








function OrderInformation() {
  const {
    query: {
      id
    }
  } = (0,router_.useRouter)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  const {
    data,
    isLoading
  } = (0,get_order/* useOrderQuery */.O)(id === null || id === void 0 ? void 0 : id.toString());
  const {
    price: total
  } = (0,use_price/* default */.ZP)(data && {
    amount: data.shipping ? data.total + data.shipping : data.total,
    currencyCode: "USD"
  });
  if (isLoading) return /*#__PURE__*/jsx_runtime_.jsx("p", {
    children: "Loading..."
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "xl:px-32 2xl:px-44 3xl:px-56 py-16 lg:py-20",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "border border-gray-300 bg-gray-50 px-4 lg:px-5 py-4 rounded-md flex items-center justify-start text-heading text-sm md:text-base mb-6 lg:mb-8",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "w-10 h-10 me-3 lg:me-4 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0",
        children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* IoCheckmarkCircle */.cfq, {
          className: "w-5 h-5 text-green-600"
        })
      }), t("text-order-received")]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      className: "border border-gray-300 bg-gray-50 rounded-md flex flex-col md:flex-row mb-7 lg:mb-8 xl:mb-10",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        className: "text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "uppercase text-[11px] block text-body font-normal leading-5",
          children: [t("text-order-number"), ":"]
        }), data === null || data === void 0 ? void 0 : data.ccavData.tracking_number]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        className: "text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "uppercase text-[11px] block text-body font-normal leading-5",
          children: [t("text-date"), ":"]
        }), "April 22, 2021"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        className: "text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "uppercase text-[11px] block text-body font-normal leading-5",
          children: [t("text-email"), ":"]
        }), data === null || data === void 0 ? void 0 : data.user_info.email]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        className: "text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "uppercase text-[11px] block text-body font-normal leading-5",
          children: [t("text-total"), ":"]
        }), total]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        className: "text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "uppercase text-[11px] block text-body font-normal leading-5",
          children: [t("text-payment-method"), ":"]
        }), data === null || data === void 0 ? void 0 : data.paymentMethod]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "text-heading text-sm md:text-base mb-8",
      children: t("text-pay-cash")
    }), /*#__PURE__*/jsx_runtime_.jsx(order_details/* default */.Z, {})]
  });
}
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(3295);
;// CONCATENATED MODULE: ./src/pages/order.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function Order() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(page_header/* default */.Z, {
      pageHeader: "text-page-order"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(container/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(OrderInformation, {}), /*#__PURE__*/jsx_runtime_.jsx(subscription/* default */.Z, {})]
    })]
  });
}
Order.Layout = layout/* default */.Z;
const getStaticProps = async ({
  locale
}) => {
  return {
    props: _objectSpread({}, await (0,serverSideTranslations_.serverSideTranslations)(locale, ["common", "forms", "menu", "footer"]))
  };
};

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

/***/ 6155:
/***/ ((module) => {

module.exports = require("js-cookie");

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

/***/ 173:
/***/ ((module) => {

module.exports = require("react-use/lib/useLocalStorage");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8453,9583,9300,926,2095,239,3977,7077,7181,6722,7790,7412], () => (__webpack_exec__(2739)));
module.exports = __webpack_exports__;

})();