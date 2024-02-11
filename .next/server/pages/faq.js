"use strict";
(() => {
var exports = {};
exports.id = 7746;
exports.ids = [7746];
exports.modules = {

/***/ 5787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ FAQ),
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
;// CONCATENATED MODULE: ./src/utils/motion/height-collapse.ts
function heightCollapse() {
  return {
    from: {
      opacity: 0,
      height: 0,
      transition: {
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    },
    to: {
      opacity: 1,
      height: "auto",
      transition: {
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    }
  };
}
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
;// CONCATENATED MODULE: ./src/components/common/accordion.tsx








const Collapse = ({
  i,
  expanded,
  setExpanded,
  titleKey,
  title,
  content,
  contentKey,
  translatorNS,
  variant = "gray"
}) => {
  const isOpen = i === expanded;
  const {
    t
  } = (0,external_next_i18next_.useTranslation)(translatorNS);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_classnames_default()({
      "rounded-md bg-gray-200": variant === "gray",
      "shadow-sm": isOpen
    }),
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.header, {
      initial: false,
      onClick: () => setExpanded(isOpen ? false : i),
      className: external_classnames_default()("cursor-pointer flex items-center justify-between transition-colors py-5 md:py-6", {
        "px-6 md:px-8 lg:px-10": variant === "gray",
        "border-t border-gray-300": variant === "transparent"
      }),
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: external_classnames_default()("text-sm font-semibold leading-relaxed text-heading pe-2", {
          "md:text-base": variant === "gray",
          "md:text-base lg:text-lg": variant === "transparent"
        }),
        children: `${titleKey ? t(titleKey) : title}`
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex-shrink-0 relative w-4 h-4 flex justify-center items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "w-full h-0.5 bg-heading rounded-sm"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `origin-bottom transform w-0.5 h-full bg-heading rounded-sm absolute bottom-0 transition-transform duration-500 ease-in-out ${isOpen ? "scale-0" : "scale-100"}`
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
      initial: false,
      children: isOpen && /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.div, {
        initial: "from",
        animate: "to",
        exit: "from",
        variants: heightCollapse(),
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: external_classnames_default()("pb-6 md:pb-7 leading-7 text-sm text-gray-600", {
            "pt-5 border-t border-gray-300 px-6 md:px-8 lg:px-10": variant === "gray"
          }),
          children: contentKey ? t(contentKey) : content
        })
      }, "content")
    })]
  });
};

const Accordion = ({
  items,
  translatorNS,
  variant = "gray"
}) => {
  const {
    0: expanded,
    1: setExpanded
  } = (0,external_react_.useState)(0);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: items === null || items === void 0 ? void 0 : items.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx(Collapse, {
      i: index,
      titleKey: item.titleKey,
      contentKey: item.contentKey,
      expanded: expanded,
      setExpanded: setExpanded,
      variant: variant,
      translatorNS: translatorNS
    }, item.titleKey))
  });
};

/* harmony default export */ const accordion = (Accordion);
// EXTERNAL MODULE: ./src/components/ui/page-header.tsx
var page_header = __webpack_require__(6722);
;// CONCATENATED MODULE: ./src/settings/faq.settings.ts
const faq = [{
  titleKey: "faq-one-title",
  contentKey: "faq-one-content"
}, {
  titleKey: "faq-two-title",
  contentKey: "faq-two-content"
}, {
  titleKey: "faq-three-title",
  contentKey: "faq-three-content"
}, {
  titleKey: "faq-four-title",
  contentKey: "faq-four-content"
}, {
  titleKey: "faq-five-title",
  contentKey: "faq-five-content"
}, {
  titleKey: "faq-six-title",
  contentKey: "faq-six-content"
}, {
  titleKey: "faq-seven-title",
  contentKey: "faq-seven-content"
}, {
  titleKey: "faq-eight-title",
  contentKey: "faq-eight-content"
}, {
  titleKey: "faq-nine-title",
  contentKey: "faq-nine-content"
}, {
  titleKey: "faq-ten-title",
  contentKey: "faq-ten-content"
}, {
  titleKey: "faq-eleven-title",
  contentKey: "faq-eleven-content"
}, {
  titleKey: "faq-twelve-title",
  contentKey: "faq-twelve-content"
}, {
  titleKey: "faq-thirteen-title",
  contentKey: "faq-thirteen-content"
}, {
  titleKey: "faq-fourteen-title",
  contentKey: "faq-fourteen-content"
}];
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(3295);
;// CONCATENATED MODULE: ./src/pages/faq.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function FAQ() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(page_header/* default */.Z, {
      pageHeader: "text-page-faq"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(container/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "py-16 lg:py-20 px-0 max-w-5xl mx-auto space-y-4",
        children: /*#__PURE__*/jsx_runtime_.jsx(accordion, {
          items: faq,
          translatorNS: "faq"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(subscription/* default */.Z, {})]
    })]
  });
}
FAQ.Layout = layout/* default */.Z;
const getStaticProps = async ({
  locale
}) => {
  return {
    props: _objectSpread({}, await (0,serverSideTranslations_.serverSideTranslations)(locale, ["common", "forms", "menu", "faq", "footer"]))
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
var __webpack_exports__ = __webpack_require__.X(0, [8453,9583,9300,926,2095,239,3977,7077,7181,6722], () => (__webpack_exec__(5787)));
module.exports = __webpack_exports__;

})();