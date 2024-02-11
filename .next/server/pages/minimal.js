"use strict";
(() => {
var exports = {};
exports.id = 2211;
exports.ids = [2211];
exports.modules = {

/***/ 6618:
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
// EXTERNAL MODULE: ./src/containers/category-grid-block.tsx + 3 modules
var category_grid_block = __webpack_require__(4952);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
;// CONCATENATED MODULE: ./src/components/common/text-information.tsx






const TextInformation = ({
  item,
  className
}) => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_classnames_default()(`text-center drop-shadow-md bg-gray-200 border-gray-300 xl:border-l xl:first:border-s-0 px-4 sm:px-2.5 2xl:px-8 3xl:px-12 xl:py-12`, className),
    style: {
      border: '1px solid gray',
      margin: '5px',
      borderRadius: '10px'
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mb-3.5 md:mb-5 xl:mb-3.5 2xl:mb-5 w-14 md:w-auto mx-auto",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: item.icon,
        alt: t(`${item.title}`),
        width: "100",
        height: "100"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "-mb-1",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "text-heading text-base md:text-lg font-semibold mb-1.5 md:mb-2",
        children: t(`${item.title}`)
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-body text-xs md:text-sm leading-6 md:leading-7",
        children: t(`${item.description}`)
      })]
    })]
  });
};

/* harmony default export */ const text_information = (TextInformation);
;// CONCATENATED MODULE: ./src/containers/feature-block.tsx


const data = [{
  id: 1,
  icon: "/assets/images/features/free-deliver.jpg",
  title: "Free Delivery",
  description: "Get Hassle Free Fast Delivery on every product. Buy Now!"
}, {
  id: 2,
  icon: "/assets/images/features/made-with-love.png",
  title: "Made With Love",
  description: "Made with Love Description"
}, {
  id: 3,
  icon: "/assets/images/features/handpicked-brands.jpg",
  title: "Handpicked Brands",
  description: "Handpicked Brands"
}, {
  id: 4,
  icon: "/assets/images/features/multiple-brands.png",
  title: "1000+ Brands",
  description: "More than 1000+ Brands to Shop from "
}];

const FeatureBlock = ({
  className = "mb-12 md:mb-14 xl:mb-16"
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `${className} feature-block-wrapper border border-gray-300 rounded-lg w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-12 xl:gap-0 overflow-hidden py-12 xl:py-0 sm:px-4 md:px-8 lg:px-16 xl:px-0`,
    children: data === null || data === void 0 ? void 0 : data.map(item => /*#__PURE__*/jsx_runtime_.jsx(text_information, {
      item: item
    }, item.id))
  });
};

/* harmony default export */ const feature_block = (FeatureBlock);
// EXTERNAL MODULE: ./src/components/layout/layout.tsx + 24 modules
var layout = __webpack_require__(239);
// EXTERNAL MODULE: ./src/containers/collection-block.tsx + 1 modules
var collection_block = __webpack_require__(1530);
// EXTERNAL MODULE: ./src/components/ui/divider.tsx
var divider = __webpack_require__(6548);
// EXTERNAL MODULE: ./src/components/common/sale-with-progress.tsx + 2 modules
var sale_with_progress = __webpack_require__(3809);
// EXTERNAL MODULE: ./src/components/common/section-header.tsx
var section_header = __webpack_require__(8092);
// EXTERNAL MODULE: ./src/components/product/product-card.tsx
var product_card = __webpack_require__(6628);
// EXTERNAL MODULE: ./src/utils/use-window-size.ts
var use_window_size = __webpack_require__(2558);
// EXTERNAL MODULE: ./src/framework/basic-rest/product/get-all-flash-sale-products.tsx
var get_all_flash_sale_products = __webpack_require__(5916);
// EXTERNAL MODULE: ./src/framework/basic-rest/utils/http.ts
var http = __webpack_require__(7235);
// EXTERNAL MODULE: ./src/framework/basic-rest/utils/api-endpoints.ts
var api_endpoints = __webpack_require__(3833);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
;// CONCATENATED MODULE: ./src/framework/basic-rest/product/get-all-top-seller-products.tsx



const fetchTopSellerProducts = async ({
  queryKey
}) => {
  const [_key, _params] = queryKey;
  const {
    data
  } = await http/* default.get */.Z.get(api_endpoints/* API_ENDPOINTS.TOP_SELLER_PRODUCTS */.P.TOP_SELLER_PRODUCTS);
  return data;
};
const useTopSellerProductsQuery = options => {
  return (0,external_react_query_.useQuery)([api_endpoints/* API_ENDPOINTS.TOP_SELLER_PRODUCTS */.P.TOP_SELLER_PRODUCTS, options], fetchTopSellerProducts);
};
// EXTERNAL MODULE: external "react-content-loader"
var external_react_content_loader_ = __webpack_require__(9081);
var external_react_content_loader_default = /*#__PURE__*/__webpack_require__.n(external_react_content_loader_);
;// CONCATENATED MODULE: ./src/components/ui/loaders/product-list-card-loader.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const ProductListCardLoader = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_content_loader_default()), _objectSpread(_objectSpread({
  speed: 2,
  width: 644,
  height: 256,
  viewBox: "0 0 644 256",
  backgroundColor: "#f9f9f9",
  foregroundColor: "#ecebeb",
  className: "w-full h-auto"
}, props), {}, {
  children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "296",
    y: "120",
    rx: "3",
    ry: "3",
    width: "280",
    height: "8"
  }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "296",
    y: "160",
    rx: "3",
    ry: "3",
    width: "80",
    height: "8"
  }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "296",
    y: "88",
    rx: "3",
    ry: "3",
    width: "180",
    height: "8"
  }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "0",
    y: "0",
    rx: "6",
    ry: "6",
    width: "256",
    height: "256"
  })]
}));

/* harmony default export */ const product_list_card_loader = (ProductListCardLoader);
;// CONCATENATED MODULE: ./src/components/ui/loaders/product-list-feed-loader.tsx




const ProductListFeedLoader = ({
  limit = 4
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: Array.from({
      length: limit
    }).map((_, idx) => /*#__PURE__*/jsx_runtime_.jsx(product_list_card_loader, {
      uniqueKey: `product-top-${idx}`
    }, idx))
  });
};

/* harmony default export */ const product_list_feed_loader = (ProductListFeedLoader);
// EXTERNAL MODULE: ./src/components/ui/alert.tsx
var ui_alert = __webpack_require__(3158);
;// CONCATENATED MODULE: ./src/containers/products-with-flash-sale.tsx











const ProductsWithFlashSale = ({
  className = "mb-12 md:mb-14 xl:mb-7",
  carouselBreakpoint
}) => {
  const {
    width
  } = (0,use_window_size/* useWindowSize */.i)();
  const {
    data,
    isLoading,
    error
  } = useTopSellerProductsQuery({
    limit: 10
  });
  const {
    data: flashSellProduct,
    isLoading: flashSellProductLoading
  } = (0,get_all_flash_sale_products/* useFlashSaleProductsQuery */.t)({
    limit: 10
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `grid grid-cols-1 gap-5 md:gap-14 xl:gap-7 xl:grid-cols-7 2xl:grid-cols-9 ${className}`,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "xl:col-span-5 2xl:col-span-7 border border-gray-300 rounded-lg pt-6 md:pt-7 lg:pt-9 xl:pt-7 2xl:pt-9 px-4 md:px-5 lg:px-7 pb-5 lg:pb-7",
      children: [/*#__PURE__*/jsx_runtime_.jsx(section_header/* default */.Z, {
        sectionHeading: "text-top-products",
        categorySlug: "/search"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 xl:gap-7 xl:-mt-1.5 2xl:mt-0",
        children: error ? /*#__PURE__*/jsx_runtime_.jsx(ui_alert/* default */.Z, {
          message: error === null || error === void 0 ? void 0 : error.message
        }) : isLoading && !data ? /*#__PURE__*/jsx_runtime_.jsx(product_list_feed_loader, {
          limit: 4
        }) : data === null || data === void 0 ? void 0 : data.map(product => /*#__PURE__*/jsx_runtime_.jsx(product_card/* default */.Z, {
          product: product,
          imgWidth: 265,
          imgHeight: 265,
          imageContentClassName: "flex-shrink-0 w-32 sm:w-44 md:w-40 lg:w-52 2xl:w-56 3xl:w-64",
          contactClassName: "ps-3.5 sm:ps-5 md:ps-4 xl:ps-5 2xl:ps-6 3xl:ps-10"
        }, `product--key${product.id}`))
      })]
    }), width < 1280 ? /*#__PURE__*/jsx_runtime_.jsx(sale_with_progress/* default */.Z, {
      carouselBreakpoint: carouselBreakpoint,
      products: flashSellProduct === null || flashSellProduct === void 0 ? void 0 : flashSellProduct.productFlashSellGrid,
      loading: flashSellProductLoading,
      className: "col-span-full xl:col-span-2 row-span-full xl:row-auto lg:mb-1 xl:mb-0"
    }) : /*#__PURE__*/jsx_runtime_.jsx(sale_with_progress/* default */.Z, {
      carouselBreakpoint: carouselBreakpoint,
      products: flashSellProduct === null || flashSellProduct === void 0 ? void 0 : flashSellProduct.productFlashSellGrid,
      loading: flashSellProductLoading,
      productVariant: "gridSlim",
      imgWidth: 330,
      imgHeight: 330,
      className: "col-span-full xl:col-span-2 row-span-full xl:row-auto"
    })]
  });
};

/* harmony default export */ const products_with_flash_sale = (ProductsWithFlashSale);
// EXTERNAL MODULE: ./src/components/common/download-apps.tsx
var download_apps = __webpack_require__(6299);
// EXTERNAL MODULE: ./src/components/common/support.tsx
var support = __webpack_require__(5713);
// EXTERNAL MODULE: ./src/components/common/category-list-card.tsx
var category_list_card = __webpack_require__(7550);
// EXTERNAL MODULE: ./src/components/ui/carousel/carousel.tsx
var carousel = __webpack_require__(7956);
// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__(2156);
// EXTERNAL MODULE: ./src/framework/basic-rest/category/get-all-categories.tsx
var get_all_categories = __webpack_require__(154);
// EXTERNAL MODULE: ./src/framework/basic-rest/static/banner.ts
var banner = __webpack_require__(9446);
// EXTERNAL MODULE: ./src/components/ui/loaders/category-list-card-loader.tsx
var category_list_card_loader = __webpack_require__(5575);
;// CONCATENATED MODULE: ./src/components/ui/loaders/category-list-feed-loader.tsx




const CategoryListFeedLoader = ({
  limit = 7
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: Array.from({
      length: limit
    }).map((_, idx) => /*#__PURE__*/jsx_runtime_.jsx(category_list_card_loader/* default */.Z, {
      uniqueKey: `category-${idx}`
    }, idx))
  });
};

/* harmony default export */ const category_list_feed_loader = (CategoryListFeedLoader);
// EXTERNAL MODULE: ./src/utils/routes.ts
var routes = __webpack_require__(9524);
;// CONCATENATED MODULE: ./src/containers/hero-with-category.tsx













const categoryResponsive = {
  "1280": {
    slidesPerView: 4,
    spaceBetween: 28
  },
  "768": {
    slidesPerView: 3,
    spaceBetween: 24
  },
  "480": {
    slidesPerView: 2,
    spaceBetween: 20
  },
  "0": {
    slidesPerView: 1,
    spaceBetween: 12
  }
};

const HeroWithCategory = ({
  className = "mb-12 md:mb-14 xl:mb-16"
}) => {
  var _data$categoryRef;

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
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `grid grid-cols-1 2xl:grid-cols-5 gap-5 xl:gap-7 ${className}`,
    children: [error ? /*#__PURE__*/jsx_runtime_.jsx(ui_alert/* default */.Z, {
      message: error === null || error === void 0 ? void 0 : error.message
    }) : width < 1500 ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx(carousel/* default */.Z, {
        breakpoints: categoryResponsive,
        buttonSize: "small",
        children: isLoading && data ? Array.from({
          length: 8
        }).map((_, idx) => /*#__PURE__*/jsx_runtime_.jsx(react_.SwiperSlide, {
          children: /*#__PURE__*/jsx_runtime_.jsx(category_list_card_loader/* default */.Z, {
            uniqueKey: `category-list-${idx}`
          })
        }, `category-list-${idx}`)) : data === null || data === void 0 ? void 0 : data.categoryRef.map(category => /*#__PURE__*/jsx_runtime_.jsx(react_.SwiperSlide, {
          children: /*#__PURE__*/jsx_runtime_.jsx(category_list_card/* default */.Z, {
            category: category
          })
        }, `category--key${category._id}`))
      })
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "2xl:-me-14 grid grid-cols-1 gap-3",
      children: isLoading && data ? /*#__PURE__*/jsx_runtime_.jsx(category_list_feed_loader, {
        limit: 8
      }) : data === null || data === void 0 ? void 0 : (_data$categoryRef = data.categoryRef) === null || _data$categoryRef === void 0 ? void 0 : _data$categoryRef.slice(0, 8).map(category => /*#__PURE__*/jsx_runtime_.jsx(category_list_card/* default */.Z, {
        category: category
      }, `category--key${category._id}`))
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "heightFull col-span-full row-span-full 2xl:row-auto 2xl:col-span-4 2xl:ms-14",
      children: /*#__PURE__*/jsx_runtime_.jsx(carousel/* default */.Z, {
        pagination: {
          clickable: true
        },
        className: "-mx-0",
        buttonClassName: "hidden",
        children: banner/* homeTwoHeroBanner */.GT === null || banner/* homeTwoHeroBanner */.GT === void 0 ? void 0 : banner/* homeTwoHeroBanner.map */.GT.map(banner => /*#__PURE__*/jsx_runtime_.jsx(react_.SwiperSlide, {
          children: /*#__PURE__*/jsx_runtime_.jsx(banner_card/* default */.Z, {
            banner: banner,
            href: `${routes/* ROUTES.COLLECTIONS */.Z.COLLECTIONS}/${banner.slug}`,
            className: "xl:h-full"
          })
        }, `banner--key${banner.id}`))
      })
    })]
  });
};

/* harmony default export */ const hero_with_category = (HeroWithCategory);
;// CONCATENATED MODULE: ./src/containers/banner-grid-block.tsx







const breakpoints = {
  "1025": {
    slidesPerView: 3,
    spaceBetween: 28
  },
  "480": {
    slidesPerView: 2,
    spaceBetween: 20
  },
  "0": {
    slidesPerView: 1,
    spaceBetween: 12
  }
};

const BannerGridBlock = ({
  className = "mb-12 lg:mb-14 xl:mb-16 lg:pb-1 xl:pb-0"
}) => {
  const {
    width
  } = (0,use_window_size/* useWindowSize */.i)();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `${className}`,
    children: width < 768 ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx(carousel/* default */.Z, {
        breakpoints: breakpoints,
        children: banner/* bannerGrid */.rw === null || banner/* bannerGrid */.rw === void 0 ? void 0 : banner/* bannerGrid.map */.rw.map(banner => /*#__PURE__*/jsx_runtime_.jsx(react_.SwiperSlide, {
          children: /*#__PURE__*/jsx_runtime_.jsx(banner_card/* default */.Z, {
            banner: banner,
            href: `${routes/* ROUTES.COLLECTIONS */.Z.COLLECTIONS}/${banner.slug}`,
            className: "h-full"
          })
        }, `banner--key${banner.id}`))
      })
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "md:grid md:grid-cols-2 md:gap-5 xl:gap-7 relative",
      children: banner/* bannerGrid.map */.rw.map(banner => /*#__PURE__*/jsx_runtime_.jsx(banner_card/* default */.Z, {
        banner: banner,
        href: `${routes/* ROUTES.COLLECTIONS */.Z.COLLECTIONS}/${banner.slug}`,
        className: banner.type === "large" ? "col-span-2" : "col-span-1"
      }, `banner--key${banner.id}`))
    })
  });
};

/* harmony default export */ const banner_grid_block = (BannerGridBlock);
// EXTERNAL MODULE: ./src/components/product/feeds/best-seller-product-feed.tsx
var best_seller_product_feed = __webpack_require__(2327);
// EXTERNAL MODULE: ./src/components/product/feeds/new-arrivals-product-feed.tsx
var new_arrivals_product_feed = __webpack_require__(231);
// EXTERNAL MODULE: ./src/components/common/subscription.tsx
var subscription = __webpack_require__(7181);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(3295);
;// CONCATENATED MODULE: ./src/pages/minimal.tsx



function minimal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function minimal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { minimal_ownKeys(Object(source), true).forEach(function (key) { minimal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { minimal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function minimal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















const flashSaleCarouselBreakpoint = {
  "1281": {
    slidesPerView: 1,
    spaceBetween: 28
  },
  "768": {
    slidesPerView: 2,
    spaceBetween: 20
  },
  "0": {
    slidesPerView: 1,
    spaceBetween: 12
  }
};
function Home() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(container/* default */.Z, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(hero_with_category, {}), /*#__PURE__*/jsx_runtime_.jsx(products_with_flash_sale, {
      carouselBreakpoint: flashSaleCarouselBreakpoint
    }), /*#__PURE__*/jsx_runtime_.jsx(banner_grid_block, {}), /*#__PURE__*/jsx_runtime_.jsx(category_grid_block/* default */.Z, {
      sectionHeading: "text-featured-categories"
    }), /*#__PURE__*/jsx_runtime_.jsx(divider/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(best_seller_product_feed/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(banner_card/* default */.Z, {
      banner: banner/* homeOneBanner */.yV,
      href: `${routes/* ROUTES.COLLECTIONS */.Z.COLLECTIONS}/${banner/* homeOneBanner.slug */.yV.slug}`,
      className: "mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
    }, `banner--key${banner/* homeOneBanner.id */.yV.id}`), /*#__PURE__*/jsx_runtime_.jsx(new_arrivals_product_feed/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(divider/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(brand_block/* default */.Z, {
      sectionHeading: "text-top-brands"
    }), /*#__PURE__*/jsx_runtime_.jsx(feature_block, {}), /*#__PURE__*/jsx_runtime_.jsx(collection_block/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(download_apps/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(support/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(subscription/* default */.Z, {})]
  });
}
Home.Layout = layout/* default */.Z;
const getStaticProps = async ({
  locale
}) => {
  return {
    props: minimal_objectSpread({}, await (0,serverSideTranslations_.serverSideTranslations)(locale, ["common", "forms", "menu", "footer"]))
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
var __webpack_exports__ = __webpack_require__.X(0, [8453,9583,9300,926,2095,239,3977,7077,7181,5101,7790,7022,1809,8490,6776,3809,7017,5430], () => (__webpack_exec__(6618)));
module.exports = __webpack_exports__;

})();