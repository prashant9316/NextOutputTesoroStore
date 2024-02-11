"use strict";
(() => {
var exports = {};
exports.id = 2213;
exports.ids = [2213];
exports.modules = {

/***/ 6914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ OrdersTablePage),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./src/components/layout/layout.tsx + 24 modules
var layout = __webpack_require__(239);
// EXTERNAL MODULE: ./src/components/my-account/account-layout.tsx + 2 modules
var account_layout = __webpack_require__(7613);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
// EXTERNAL MODULE: ./src/utils/motion/fade-in-top.ts
var fade_in_top = __webpack_require__(2559);
// EXTERNAL MODULE: ./src/components/ui/link.tsx
var ui_link = __webpack_require__(3407);
// EXTERNAL MODULE: ./src/utils/use-window-size.ts
var use_window_size = __webpack_require__(2558);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
;// CONCATENATED MODULE: ./src/components/my-account/orders-table.tsx









const OrdersTable = () => {
  const {
    width
  } = (0,use_window_size/* useWindowSize */.i)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: "text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8",
      children: t("text-orders")
    }), /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.div, {
      layout: true,
      initial: "from",
      animate: "to",
      exit: "from" //@ts-ignore
      ,
      variants: (0,fade_in_top/* fadeInTop */.E)(0.35),
      className: `w-full flex flex-col`,
      children: width >= 1025 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
          className: "text-sm lg:text-base",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
              className: "bg-gray-100 p-4 text-heading font-semibold text-start first:rounded-ts-md",
              children: t("text-order")
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              className: "bg-gray-100 p-4 text-heading font-semibold text-start lg:text-center",
              children: t("text-date")
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              className: "bg-gray-100 p-4 text-heading font-semibold text-start lg:text-center",
              children: t("text-status")
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              className: "bg-gray-100 p-4 text-heading font-semibold text-start lg:text-center",
              children: t("text-total")
            }), /*#__PURE__*/jsx_runtime_.jsx("th", {
              className: "bg-gray-100 p-4 text-heading font-semibold text-start lg:text-end last:rounded-te-md",
              children: t("text-actions")
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tbody", {
          className: "text-sm lg:text-base",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            className: "border-b border-gray-300 last:border-b-0",
            children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
              className: "px-4 py-5 text-start",
              children: /*#__PURE__*/jsx_runtime_.jsx(ui_link/* default */.Z, {
                href: "/my-account/orders/3203",
                className: "underline hover:no-underline text-body",
                children: "#3203"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              className: "text-start lg:text-center px-4 py-5 text-heading",
              children: "March 18, 2021"
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              className: "text-start lg:text-center px-4 py-5 text-heading",
              children: "Completed"
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              className: "text-start lg:text-center px-4 py-5 text-heading",
              children: "$16,950.00 for 93 items"
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              className: "text-end px-4 py-5 text-heading",
              children: /*#__PURE__*/jsx_runtime_.jsx(ui_link/* default */.Z, {
                href: "/my-account/orders/3203",
                className: "text-sm leading-4 bg-heading text-white px-4 py-2.5 inline-block rounded-md hover:text-white hover:bg-gray-600",
                children: t("button-view")
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            className: "border-b border-gray-300 last:border-b-0",
            children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
              className: "px-4 py-5 text-start",
              children: /*#__PURE__*/jsx_runtime_.jsx(ui_link/* default */.Z, {
                href: "/my-account/orders/3204",
                className: "underline hover:no-underline text-body",
                children: "#3204"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              className: "text-start lg:text-center px-4 py-5 text-heading",
              children: "March 18, 2021"
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              className: "text-start lg:text-center px-4 py-5 text-heading",
              children: "Completed"
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              className: "text-start lg:text-center px-4 py-5 text-heading",
              children: "$16,950.00 for 93 items"
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              className: "text-end px-4 py-5 text-heading",
              children: /*#__PURE__*/jsx_runtime_.jsx(ui_link/* default */.Z, {
                href: "/my-account/orders/3204",
                className: "text-sm leading-4 bg-heading text-white px-4 py-2.5 inline-block rounded-md hover:text-white hover:bg-gray-600",
                children: t("button-view")
              })
            })]
          })]
        })]
      }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "w-full space-y-4",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "text-sm font-semibold text-heading border border-gray-300 rounded-md flex flex-col px-4 pt-5 pb-6 space-y-5",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: "flex items-center justify-between",
            children: [t("text-order"), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "font-normal",
              children: /*#__PURE__*/jsx_runtime_.jsx(ui_link/* default */.Z, {
                href: "/my-account/orders/3203",
                className: "underline hover:no-underline text-body",
                children: "#3203"
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: "flex items-center justify-between",
            children: [t("text-date"), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "font-normal",
              children: "March 18, 2021"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: "flex items-center justify-between",
            children: [t("text-status"), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "font-normal",
              children: "Completed"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: "flex items-center justify-between",
            children: [t("text-total"), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "font-normal",
              children: "$16,950.00 for 93 items"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: "flex items-center justify-between",
            children: [t("text-actions"), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "font-normal",
              children: /*#__PURE__*/jsx_runtime_.jsx(ui_link/* default */.Z, {
                href: "/my-account/orders/3203",
                className: "text-sm leading-4 bg-heading text-white px-4 py-2.5 inline-block rounded-md hover:text-white hover:bg-gray-600",
                children: t("button-view")
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "text-sm font-semibold text-heading border border-gray-300 rounded-md flex flex-col px-4 pt-5 pb-6 space-y-5",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: "flex items-center justify-between",
            children: [t("text-order"), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "font-normal",
              children: /*#__PURE__*/jsx_runtime_.jsx(ui_link/* default */.Z, {
                href: "/my-account/orders/3204",
                className: "underline hover:no-underline text-body",
                children: "#3204"
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: "flex items-center justify-between",
            children: [t("text-date"), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "font-normal",
              children: "March 18, 2021"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: "flex items-center justify-between",
            children: [t("text-status"), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "font-normal",
              children: "Completed"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: "flex items-center justify-between",
            children: [t("text-total"), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "font-normal",
              children: "$16,950.00 for 93 items"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: "flex items-center justify-between",
            children: [t("text-actions"), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "font-normal",
              children: /*#__PURE__*/jsx_runtime_.jsx(ui_link/* default */.Z, {
                href: "/my-account/orders/3204",
                className: "text-sm leading-4 bg-heading text-white px-4 py-2.5 inline-block rounded-md hover:text-white hover:bg-gray-600",
                children: t("button-view")
              })
            })]
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const orders_table = (OrdersTable);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(3295);
;// CONCATENATED MODULE: ./src/pages/my-account/orders/index.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function OrdersTablePage() {
  return /*#__PURE__*/jsx_runtime_.jsx(account_layout/* default */.Z, {
    children: /*#__PURE__*/jsx_runtime_.jsx(orders_table, {})
  });
}
OrdersTablePage.Layout = layout/* default */.Z;
const getStaticProps = async ({
  locale
}) => {
  return {
    props: _objectSpread({}, await (0,serverSideTranslations_.serverSideTranslations)(locale, ["common", "forms", "menu", "footer"]))
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

/***/ 2558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* reexport default from dynamic */ react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5319);
/* harmony import */ var react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_0__);


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

/***/ 5319:
/***/ ((module) => {

module.exports = require("react-use/lib/useWindowSize");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8453,9583,9300,926,2095,239,3977,7077,7181,6722,7613], () => (__webpack_exec__(6914)));
module.exports = __webpack_exports__;

})();