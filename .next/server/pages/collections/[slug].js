"use strict";
(() => {
var exports = {};
exports.id = 8942;
exports.ids = [8942];
exports.modules = {

/***/ 1401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Shop),
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
// EXTERNAL MODULE: external "react-sticky-box"
var external_react_sticky_box_ = __webpack_require__(9058);
var external_react_sticky_box_default = /*#__PURE__*/__webpack_require__.n(external_react_sticky_box_);
// EXTERNAL MODULE: ./src/components/product/product-grid.tsx + 1 modules
var product_grid = __webpack_require__(6061);
// EXTERNAL MODULE: ./src/components/ui/active-link.tsx
var active_link = __webpack_require__(2963);
// EXTERNAL MODULE: ./src/components/common/breadcrumb.tsx + 1 modules
var breadcrumb = __webpack_require__(5249);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(3295);
// EXTERNAL MODULE: ./src/utils/routes.ts
var routes = __webpack_require__(9524);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: ./src/components/common/drawer/drawer.tsx
var drawer = __webpack_require__(1317);
// EXTERNAL MODULE: ./node_modules/react-icons/md/index.esm.js
var index_esm = __webpack_require__(5434);
// EXTERNAL MODULE: ./src/components/ui/text.tsx
var ui_text = __webpack_require__(7077);
// EXTERNAL MODULE: ./src/contexts/ui.context.tsx
var ui_context = __webpack_require__(7014);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/utils/get-direction.ts
var get_direction = __webpack_require__(991);
// EXTERNAL MODULE: ./src/components/common/scrollbar.tsx
var scrollbar = __webpack_require__(4228);
// EXTERNAL MODULE: ./node_modules/react-icons/io5/index.esm.js
var io5_index_esm = __webpack_require__(155);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/framework/basic-rest/utils/http.ts
var http = __webpack_require__(7235);
// EXTERNAL MODULE: ./src/framework/basic-rest/utils/api-endpoints.ts
var api_endpoints = __webpack_require__(3833);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
;// CONCATENATED MODULE: ./src/framework/basic-rest/collection/get-all-collection.tsx



const fetchCollections = async ({
  queryKey
}) => {
  const [_key, _params] = queryKey;
  const {
    data: {
      data
    }
  } = await http/* default.get */.Z.get(api_endpoints/* API_ENDPOINTS.COLLECTIONS */.P.COLLECTIONS);
  return {
    collections: {
      data: data
    }
  };
};
const useCollectionsQuery = options => {
  return (0,external_react_query_.useQuery)([api_endpoints/* API_ENDPOINTS.COLLECTIONS */.P.COLLECTIONS, options], fetchCollections);
};
;// CONCATENATED MODULE: ./src/components/collection/collection-filters.tsx








const CollectionFilters = () => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  const {
    data,
    isLoading
  } = useCollectionsQuery({
    limit: 15
  });
  if (isLoading) return /*#__PURE__*/jsx_runtime_.jsx("p", {
    children: "Loading..."
  });
  const router = (0,router_.useRouter)();
  const currentPath = router.asPath.split("/").slice(2, 3).join();
  const items = data === null || data === void 0 ? void 0 : data.collections.data;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "pt-1",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "block border-b border-gray-300 pb-5 mb-7",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex items-center justify-between mb-2.5",
        children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "font-semibold text-heading text-xl md:text-2xl",
          children: t("text-collection-list")
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "block pb-7",
      children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: "mt-2 flex flex-col space-y-5",
        children: items === null || items === void 0 ? void 0 : items.map(item => /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "text-sm lg:text-[15px] cursor-pointer",
          children: /*#__PURE__*/jsx_runtime_.jsx(active_link/* default */.Z, {
            href: `${routes/* ROUTES.COLLECTIONS */.Z.COLLECTIONS}/${item.slug}`,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: `block transition duration-300 ease-in-out text-heading hover:font-semibold py-0.5 ${currentPath === item.slug && "font-semibold"}`,
              children: item.name
            })
          })
        }, item.id))
      })
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/collection/collection-filter-sidebar.tsx










const CollectionFilterSidebar = () => {
  const {
    closeFilter
  } = (0,ui_context/* useUI */.l8)();
  const router = (0,router_.useRouter)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  const dir = (0,get_direction/* getDirection */.M)(router.locale);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col justify-between w-full h-full",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "w-full border-b border-gray-100 flex justify-between items-center relative pe-5 md:pe-7 flex-shrink-0 py-0.5",
      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "flex text-2xl items-center justify-center text-gray-500 px-4 md:px-5 py-6 lg:py-8 focus:outline-none transition-opacity hover:opacity-60",
        onClick: closeFilter,
        "aria-label": "close",
        children: dir === "rtl" ? /*#__PURE__*/jsx_runtime_.jsx(io5_index_esm/* IoArrowForward */.qvS, {
          className: "text-black"
        }) : /*#__PURE__*/jsx_runtime_.jsx(io5_index_esm/* IoArrowBack */.O8Q, {
          className: "text-black"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "font-bold text-xl md:text-2xl m-0 text-heading w-full text-center pe-6",
        children: t("text-collections")
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(scrollbar/* default */.Z, {
      className: "menu-scrollbar flex-grow mb-auto",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex flex-col py-7 px-5 md:px-7 text-heading",
        children: /*#__PURE__*/jsx_runtime_.jsx(CollectionFilters, {})
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "text-sm md:text-base leading-4 flex items-center justify-center px-7 flex-shrink-0 h-14 bg-heading text-white",
      children: ["9,608 ", t("text-items")]
    })]
  });
};

/* harmony default export */ const collection_filter_sidebar = (CollectionFilterSidebar);
;// CONCATENATED MODULE: ./src/components/collection/collection-top-bar.tsx











const CollectionTopBar = () => {
  const {
    openFilter,
    displayFilter,
    closeFilter
  } = (0,ui_context/* useUI */.l8)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  const {
    locale,
    query: {
      slug
    }
  } = (0,router_.useRouter)();
  const collectionTitle = slug === null || slug === void 0 ? void 0 : slug.toString().split("-").join(" ");
  const dir = (0,get_direction/* getDirection */.M)(locale);
  const contentWrapperCSS = dir === "ltr" ? {
    left: 0
  } : {
    right: 0
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex justify-between items-center mb-7",
    children: [/*#__PURE__*/jsx_runtime_.jsx(ui_text/* default */.Z, {
      variant: "pageHeading",
      className: "hidden lg:inline-flex pb-1 capitalize",
      children: collectionTitle
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
      className: "lg:hidden text-heading text-sm px-4 py-2 font-semibold border border-gray-300 rounded-md flex items-center transition duration-200 ease-in-out focus:outline-none hover:bg-gray-200",
      onClick: openFilter,
      children: [/*#__PURE__*/jsx_runtime_.jsx(index_esm/* MdCollectionsBookmark */.djY, {
        className: "text-lg"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "ps-2",
        children: t("text-filters")
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex items-center justify-end",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex-shrink-0 text-body text-xs md:text-sm leading-4",
        children: ["9,608 ", t("text-items")]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(drawer/* Drawer */.d, {
      placement: dir === "rtl" ? "right" : "left",
      open: displayFilter,
      onClose: closeFilter,
      handler: false,
      showMask: true,
      level: null,
      contentWrapperStyle: contentWrapperCSS,
      children: /*#__PURE__*/jsx_runtime_.jsx(collection_filter_sidebar, {})
    })]
  });
};

/* harmony default export */ const collection_top_bar = (CollectionTopBar);
;// CONCATENATED MODULE: ./src/pages/collections/[slug].tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function Shop() {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "border-t-2 border-borderBottom",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(container/* default */.Z, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `flex pt-8 pb-16 lg:pb-20`,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex-shrink-0 pe-24 hidden lg:block w-96",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_sticky_box_default()), {
            offsetTop: 50,
            offsetBottom: 20,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "pb-7",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(breadcrumb/* BreadcrumbItems */.x, {
                separator: "/",
                children: [/*#__PURE__*/jsx_runtime_.jsx(active_link/* default */.Z, {
                  href: "/",
                  activeClassName: "font-semibold text-heading",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: t("breadcrumb-home")
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(active_link/* default */.Z, {
                  href: routes/* ROUTES.SEARCH */.Z.SEARCH,
                  activeClassName: "font-semibold text-heading",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "capitalize",
                    children: t("breadcrumb-collection")
                  })
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(CollectionFilters, {})]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "w-full lg:-ms-9",
          children: [/*#__PURE__*/jsx_runtime_.jsx(collection_top_bar, {}), /*#__PURE__*/jsx_runtime_.jsx(product_grid/* ProductGrid */.e, {})]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(subscription/* default */.Z, {})]
    })
  });
}
Shop.Layout = layout/* default */.Z;
const getServerSideProps = async ({
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

/***/ 805:
/***/ ((module) => {

module.exports = require("lodash/shuffle");

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

/***/ 9058:
/***/ ((module) => {

module.exports = require("react-sticky-box");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8453,9583,5434,9300,926,2095,239,3977,7077,7181,5101,5249,6061], () => (__webpack_exec__(1401)));
module.exports = __webpack_exports__;

})();