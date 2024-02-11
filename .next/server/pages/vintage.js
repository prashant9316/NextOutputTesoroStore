"use strict";
(() => {
var exports = {};
exports.id = 4052;
exports.ids = [4052];
exports.modules = {

/***/ 769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./src/components/common/banner-card.tsx
var banner_card = __webpack_require__(8470);
// EXTERNAL MODULE: ./src/components/ui/container.tsx
var container = __webpack_require__(9691);
// EXTERNAL MODULE: ./src/containers/brand-block.tsx
var brand_block = __webpack_require__(4449);
// EXTERNAL MODULE: ./src/containers/category-block.tsx + 1 modules
var category_block = __webpack_require__(5937);
// EXTERNAL MODULE: ./src/containers/category-grid-block.tsx + 3 modules
var category_grid_block = __webpack_require__(4952);
// EXTERNAL MODULE: ./src/components/layout/layout.tsx + 24 modules
var layout = __webpack_require__(239);
// EXTERNAL MODULE: ./src/containers/banner-with-products.tsx + 2 modules
var banner_with_products = __webpack_require__(6147);
// EXTERNAL MODULE: ./src/components/product/feeds/new-arrivals-product-feed.tsx
var new_arrivals_product_feed = __webpack_require__(231);
// EXTERNAL MODULE: ./src/components/ui/divider.tsx
var divider = __webpack_require__(6548);
// EXTERNAL MODULE: ./src/components/common/download-apps.tsx
var download_apps = __webpack_require__(6299);
// EXTERNAL MODULE: ./src/components/common/support.tsx
var support = __webpack_require__(5713);
// EXTERNAL MODULE: ./src/components/common/instagram.tsx
var instagram = __webpack_require__(8220);
// EXTERNAL MODULE: ./src/containers/product-flash-sale-block.tsx + 1 modules
var product_flash_sale_block = __webpack_require__(9332);
// EXTERNAL MODULE: ./src/containers/products-featured.tsx + 2 modules
var products_featured = __webpack_require__(2016);
// EXTERNAL MODULE: ./src/containers/banner-slider-block.tsx
var banner_slider_block = __webpack_require__(7173);
// EXTERNAL MODULE: ./src/containers/exclusive-block.tsx
var exclusive_block = __webpack_require__(5292);
// EXTERNAL MODULE: ./src/components/common/category-list-card.tsx
var category_list_card = __webpack_require__(7550);
// EXTERNAL MODULE: ./src/components/common/sale-with-progress.tsx + 2 modules
var sale_with_progress = __webpack_require__(3809);
// EXTERNAL MODULE: ./src/components/ui/carousel/carousel.tsx
var carousel = __webpack_require__(7956);
// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__(2156);
// EXTERNAL MODULE: ./src/framework/basic-rest/category/get-all-categories.tsx
var get_all_categories = __webpack_require__(154);
// EXTERNAL MODULE: ./src/framework/basic-rest/product/get-all-flash-sale-products.tsx
var get_all_flash_sale_products = __webpack_require__(5916);
// EXTERNAL MODULE: ./src/utils/use-window-size.ts
var use_window_size = __webpack_require__(2558);
// EXTERNAL MODULE: ./src/framework/basic-rest/static/banner.ts
var banner = __webpack_require__(9446);
// EXTERNAL MODULE: ./src/components/ui/loaders/category-list-card-loader.tsx
var category_list_card_loader = __webpack_require__(5575);
// EXTERNAL MODULE: ./src/utils/routes.ts
var routes = __webpack_require__(9524);
// EXTERNAL MODULE: ./src/components/ui/alert.tsx
var ui_alert = __webpack_require__(3158);
;// CONCATENATED MODULE: ./src/containers/hero-with-category-flash.tsx















const categoryResponsive = {
  "768": {
    slidesPerView: 3,
    spaceBetween: 14
  },
  "480": {
    slidesPerView: 2,
    spaceBetween: 12
  },
  "0": {
    slidesPerView: 1,
    spaceBetween: 12
  }
};

const HeroWithCategoryFlash = ({
  className = "mb-12 md:mb-14 xl:mb-16"
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `grid grid-cols-1 lg:grid-cols-7 2xl:grid-cols-9 gap-5 xl:gap-7 lg:gap-y-14 ${className}`,
    children: [/*#__PURE__*/jsx_runtime_.jsx(CategoryListCardSection, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "col-span-full lg:col-span-5 xl:col-span-5 row-span-full lg:row-auto grid grid-cols-2 gap-2 md:gap-3.5 lg:gap-5 xl:gap-7",
      children: banner/* homeFourGridBanners.map */.D1.map(banner => /*#__PURE__*/jsx_runtime_.jsx(banner_card/* default */.Z, {
        banner: banner,
        href: `${routes/* ROUTES.COLLECTIONS */.Z.COLLECTIONS}/${banner.slug}`,
        className: banner.type === "large" ? "col-span-2" : "col-span-1"
      }, `banner--key${banner.id}`))
    }), /*#__PURE__*/jsx_runtime_.jsx(SellWithProgressCardSection, {})]
  });
}; // CategoryList section


function CategoryListCardSection() {
  const {
    width
  } = (0,use_window_size/* useWindowSize */.i)();
  const {
    data,
    isLoading,
    error
  } = (0,get_all_categories/* useCategoriesQuery */.E)({
    limit: 10
  });
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: error ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "col-span-full lg:col-span-2",
      children: /*#__PURE__*/jsx_runtime_.jsx(ui_alert/* default */.Z, {
        message: error === null || error === void 0 ? void 0 : error.message
      })
    }) : width < 1025 ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "col-span-full",
      children: /*#__PURE__*/jsx_runtime_.jsx(carousel/* default */.Z, {
        breakpoints: categoryResponsive,
        buttonSize: "small",
        children: isLoading ? Array.from({
          length: 7
        }).map((_, idx) => /*#__PURE__*/jsx_runtime_.jsx(react_.SwiperSlide, {
          children: /*#__PURE__*/jsx_runtime_.jsx(category_list_card_loader/* default */.Z, {
            uniqueKey: `category-list-${idx}`
          })
        }, idx)) : data === null || data === void 0 ? void 0 : data.categoryRef.map(category => /*#__PURE__*/jsx_runtime_.jsx(react_.SwiperSlide, {
          children: /*#__PURE__*/jsx_runtime_.jsx(category_list_card/* default */.Z, {
            category: category
          })
        }, `sm-category--key${category.id}`))
      })
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "col-span-full lg:col-span-2 grid grid-cols-1 gap-3 justify-between",
      children: isLoading ? Array.from({
        length: 7
      }).map((_, idx) => /*#__PURE__*/jsx_runtime_.jsx(category_list_card_loader/* default */.Z, {
        uniqueKey: `category-list-${idx}`
      }, idx)) : data === null || data === void 0 ? void 0 : data.categoryRef.slice(0, 7).map(category => /*#__PURE__*/jsx_runtime_.jsx(category_list_card/* default */.Z, {
        category: category
      }, `lg-category--key${category.id}`))
    })
  });
} // ProgressCard section

function SellWithProgressCardSection() {
  const {
    width
  } = (0,use_window_size/* useWindowSize */.i)();
  const {
    data,
    isLoading,
    error
  } = (0,get_all_flash_sale_products/* useFlashSaleProductsQuery */.t)({
    limit: 10
  });
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: width < 1441 ? /*#__PURE__*/jsx_runtime_.jsx(sale_with_progress/* default */.Z, {
      products: data === null || data === void 0 ? void 0 : data.productFlashSellGridOne,
      className: "col-span-full",
      loading: isLoading,
      error: error === null || error === void 0 ? void 0 : error.message
    }) : /*#__PURE__*/jsx_runtime_.jsx(sale_with_progress/* default */.Z, {
      products: data === null || data === void 0 ? void 0 : data.productFlashSellGridOne,
      productVariant: "gridSlim",
      loading: isLoading,
      imgWidth: 330,
      imgHeight: 425,
      error: error === null || error === void 0 ? void 0 : error.message,
      className: "col-span-full 2xl:col-span-2 2xl:row-auto xl:hidden 2xl:flex"
    })
  });
}
/* harmony default export */ const hero_with_category_flash = (HeroWithCategoryFlash);
// EXTERNAL MODULE: ./src/components/common/subscription.tsx
var subscription = __webpack_require__(7181);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(3295);
;// CONCATENATED MODULE: ./src/pages/vintage.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















function Home() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(container/* default */.Z, {
      children: /*#__PURE__*/jsx_runtime_.jsx(hero_with_category_flash, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(banner_slider_block/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(container/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(category_block/* default */.Z, {
        sectionHeading: "text-shop-by-category"
      }), /*#__PURE__*/jsx_runtime_.jsx(banner_with_products/* default */.Z, {
        sectionHeading: "text-on-selling-products",
        categorySlug: "/search",
        variant: "reverse"
      }), /*#__PURE__*/jsx_runtime_.jsx(banner_card/* default */.Z, {
        banner: banner/* homeFourBanner.0 */.$8[0],
        href: `${routes/* ROUTES.COLLECTIONS */.Z.COLLECTIONS}/${banner/* homeFourBanner.0.slug */.$8[0].slug}`,
        className: "mb-11 md:mb-12 lg:mb-14 2xl:mb-16"
      }), /*#__PURE__*/jsx_runtime_.jsx(products_featured/* default */.Z, {
        sectionHeading: "text-featured-products",
        variant: "center"
      }), /*#__PURE__*/jsx_runtime_.jsx(banner_card/* default */.Z, {
        banner: banner/* homeFourBanner.1 */.$8[1],
        href: `${routes/* ROUTES.COLLECTIONS */.Z.COLLECTIONS}/${banner/* homeFourBanner.1.slug */.$8[1].slug}`,
        className: "mb-11 md:mb-12 lg:mb-14 2xl:mb-16"
      }), /*#__PURE__*/jsx_runtime_.jsx(product_flash_sale_block/* default */.Z, {
        date: "2023-03-01T01:02:03"
      }), /*#__PURE__*/jsx_runtime_.jsx(brand_block/* default */.Z, {
        sectionHeading: "text-top-brands"
      }), /*#__PURE__*/jsx_runtime_.jsx(exclusive_block/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(new_arrivals_product_feed/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(banner_card/* default */.Z, {
        banner: banner/* homeFourBanner.2 */.$8[2],
        href: `${routes/* ROUTES.COLLECTIONS */.Z.COLLECTIONS}/${banner/* homeFourBanner.2.slug */.$8[2].slug}`,
        className: "mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
      }), /*#__PURE__*/jsx_runtime_.jsx(category_grid_block/* default */.Z, {
        sectionHeading: "text-featured-categories"
      }), /*#__PURE__*/jsx_runtime_.jsx(download_apps/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(support/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(instagram/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(subscription/* default */.Z, {
        className: "bg-opacity-0 px-5 sm:px-16 xl:px-0 py-12 md:py-14 xl:py-16"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(divider/* default */.Z, {
      className: "mb-0"
    })]
  });
}
Home.Layout = layout/* default */.Z;
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

/***/ 7183:
/***/ ((module) => {

module.exports = require("react-countdown");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8453,9583,9300,926,2095,239,3977,7077,7181,5101,7790,7022,1809,8490,5937,6776,5756,3809,7017], () => (__webpack_exec__(769)));
module.exports = __webpack_exports__;

})();