"use strict";
exports.id = 5756;
exports.ids = [5756];
exports.modules = {

/***/ 8220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9583);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);






const instagramFeed = [{
  id: 1,
  title: "text-man",
  slug: "/#",
  image: "/assets/images/instagram/1.jpg"
}, {
  id: 2,
  title: "text-woman",
  slug: "/#",
  image: "/assets/images/instagram/2.jpg"
}, {
  id: 3,
  title: "text-watch",
  slug: "/#",
  image: "/assets/images/instagram/3.jpg"
}, {
  id: 4,
  title: "text-man",
  slug: "/#",
  image: "/assets/images/instagram/4.jpg"
}, {
  id: 5,
  title: "text-sports",
  slug: "/#",
  image: "/assets/images/instagram/5.jpg"
}, {
  id: 6,
  title: "text-fashion",
  slug: "/#",
  image: "/assets/images/instagram/6.jpg"
}];

const Instagram = ({
  className = ""
}) => {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("common");
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("grid grid-cols-3 md:grid-cols-6 gap-0.5 sm:gap-1 overflow-hidden rounded-md", className),
    children: instagramFeed === null || instagramFeed === void 0 ? void 0 : instagramFeed.map(item => {
      var _item$image;

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        className: "group flex justify-center text-center relative",
        href: item.slug,
        target: "_blank",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.default, {
          src: (_item$image = item.image) !== null && _item$image !== void 0 ? _item$image : "/assets/placeholder/instagram.svg",
          alt: t(`${item.title}`) || t("text-instagram-thumbnail"),
          width: 300,
          height: 300,
          className: "bg-gray-300 object-cover"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "absolute top left bg-black w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-50"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "absolute top left h-full w-full flex items-center justify-center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__/* .FaInstagram */ .Zf_, {
            className: "text-white text-base sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl transform opacity-0 scale-400 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100"
          })
        })]
      }, `instagram--key${item.id}`);
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Instagram);

/***/ }),

/***/ 7173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_banner_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8470);
/* harmony import */ var _components_ui_carousel_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7956);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2156);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _framework_static_banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9446);
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9524);






const breakpoints = {
  "0": {
    slidesPerView: 2
  }
};

const BannerSliderBlock = ({
  className = "mb-12 md:mb-14 xl:mb-16"
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: `${className} mx-auto max-w-[1920px] overflow-hidden`,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "-mx-32 sm:-mx-44 lg:-mx-60 xl:-mx-72 2xl:-mx-80",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_carousel_carousel__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        breakpoints: breakpoints,
        centeredSlides: true,
        pagination: {
          clickable: true
        },
        paginationVariant: "circle",
        buttonClassName: "hidden",
        children: _framework_static_banner__WEBPACK_IMPORTED_MODULE_4__/* .promotionBanner.map */ .q6.map(banner => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
          className: "px-1.5 md:px-2.5 xl:px-3.5",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_banner_card__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
            banner: banner,
            effectActive: true,
            href: `${_utils_routes__WEBPACK_IMPORTED_MODULE_5__/* .ROUTES.COLLECTIONS */ .Z.COLLECTIONS}/${banner.slug}`
          })
        }, `banner--key${banner.id}`))
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerSliderBlock);

/***/ }),

/***/ 6147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ banner_with_products)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./src/components/common/banner-card.tsx
var banner_card = __webpack_require__(8470);
// EXTERNAL MODULE: ./src/components/common/section-header.tsx
var section_header = __webpack_require__(8092);
// EXTERNAL MODULE: ./src/components/product/product-card.tsx
var product_card = __webpack_require__(6628);
// EXTERNAL MODULE: external "react-content-loader"
var external_react_content_loader_ = __webpack_require__(9081);
var external_react_content_loader_default = /*#__PURE__*/__webpack_require__.n(external_react_content_loader_);
;// CONCATENATED MODULE: ./src/components/ui/loaders/product-card-small-list-loader.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const ProductCardListSmallLoader = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_content_loader_default()), _objectSpread(_objectSpread({
  speed: 2,
  width: 423,
  height: 176,
  viewBox: "0 0 423 176",
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb",
  className: "w-full h-auto"
}, props), {}, {
  children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "194",
    y: "50",
    rx: "3",
    ry: "3",
    width: "140",
    height: "8"
  }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "194",
    y: "82",
    rx: "3",
    ry: "3",
    width: "200",
    height: "6"
  }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "194",
    y: "119",
    rx: "3",
    ry: "3",
    width: "80",
    height: "10"
  }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "0",
    y: "0",
    rx: "6",
    ry: "6",
    width: "176",
    height: "176"
  })]
}));

/* harmony default export */ const product_card_small_list_loader = (ProductCardListSmallLoader);
// EXTERNAL MODULE: ./src/framework/basic-rest/utils/http.ts
var http = __webpack_require__(7235);
// EXTERNAL MODULE: ./src/framework/basic-rest/utils/api-endpoints.ts
var api_endpoints = __webpack_require__(3833);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
;// CONCATENATED MODULE: ./src/framework/basic-rest/product/get-all-on-selling-products.tsx



const fetchOnSellingProducts = async ({
  queryKey
}) => {
  const [_key, _params] = queryKey;
  const {
    data
  } = await http/* default.get */.Z.get(api_endpoints/* API_ENDPOINTS.ON_SELLING_PRODUCTS */.P.ON_SELLING_PRODUCTS);
  return data;
};
const useOnSellingProductsQuery = options => {
  return (0,external_react_query_.useQuery)([api_endpoints/* API_ENDPOINTS.ON_SELLING_PRODUCTS */.P.ON_SELLING_PRODUCTS, options], fetchOnSellingProducts);
};
// EXTERNAL MODULE: ./src/framework/basic-rest/static/banner.ts
var banner = __webpack_require__(9446);
// EXTERNAL MODULE: ./src/components/ui/alert.tsx
var ui_alert = __webpack_require__(3158);
// EXTERNAL MODULE: ./src/utils/routes.ts
var routes = __webpack_require__(9524);
;// CONCATENATED MODULE: ./src/containers/banner-with-products.tsx











const BannerWithProducts = ({
  sectionHeading,
  categorySlug,
  variant = "default",
  className = "mb-12 md:mb-14 xl:mb-16"
}) => {
  const {
    data,
    isLoading,
    error
  } = useOnSellingProductsQuery({
    limit: 10
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/jsx_runtime_.jsx(section_header/* default */.Z, {
      sectionHeading: sectionHeading,
      categorySlug: categorySlug
    }), error ? /*#__PURE__*/jsx_runtime_.jsx(ui_alert/* default */.Z, {
      message: error === null || error === void 0 ? void 0 : error.message
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "grid grid-cols-4 gap-3 lg:gap-5 xl:gap-7",
      children: [variant === "reverse" ? /*#__PURE__*/jsx_runtime_.jsx(banner_card/* default */.Z, {
        banner: banner/* homeThreeProductsBanner.1 */.CS[1],
        href: `${routes/* ROUTES.COLLECTIONS */.Z.COLLECTIONS}/${banner/* homeThreeProductsBanner.1.slug */.CS[1].slug}`,
        className: "hidden 3xl:block",
        effectActive: true
      }) : /*#__PURE__*/jsx_runtime_.jsx(banner_card/* default */.Z, {
        banner: banner/* homeThreeProductsBanner.0 */.CS[0],
        href: `${routes/* ROUTES.COLLECTIONS */.Z.COLLECTIONS}/${banner/* homeThreeProductsBanner.0.slug */.CS[0].slug}`,
        className: "hidden 3xl:block",
        effectActive: true
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: `col-span-full 3xl:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5 xl:gap-7 ${variant === "reverse" ? "row-span-full" : ""}`,
        children: isLoading ? Array.from({
          length: 9
        }).map((_, idx) => /*#__PURE__*/jsx_runtime_.jsx(product_card_small_list_loader, {
          uniqueKey: `on-selling-${idx}`
        }, idx)) : data === null || data === void 0 ? void 0 : data.map(product => /*#__PURE__*/jsx_runtime_.jsx(product_card/* default */.Z, {
          product: product,
          imgWidth: 176,
          imgHeight: 176,
          variant: "listSmall"
        }, `product--key${product.id}`))
      })]
    })]
  });
};

/* harmony default export */ const banner_with_products = (BannerWithProducts);

/***/ }),

/***/ 5292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3407);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);





const data = {
  exclusiveName: "text-new-year",
  year: 2021,
  exclusiveData: [{
    id: 1,
    slug: "/search",
    buttonText: "button-women-exclusive",
    image: "/assets/images/exclusive/women.png",
    backgroundColor: "bg-gray-150"
  }, {
    id: 2,
    slug: "/search",
    buttonText: "button-men-exclusive",
    image: "/assets/images/exclusive/men.png",
    backgroundColor: "bg-linenSecondary"
  }]
};

const ExclusiveBlock = ({
  className = "mb-12 md:mb-14 xl:mb-16"
}) => {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("common");
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: `rounded-md overflow-hidden lg:block ${className}`,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "flex justify-between",
      children: data.exclusiveData.slice(0, 2).map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `group w-2/4 flex justify-between items-end relative transition duration-200 ease-in ${item.id === 2 ? "flex-row-reverse" : ""} ${item.backgroundColor}`,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "exclusiveImage relative z-10 flex transform transition duration-200 ease-in group-hover:scale-105",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.default, {
            src: item.image,
            alt: item.buttonText,
            width: 600,
            height: 600
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
          href: item.slug,
          className: `absolute z-10 bottom-3 sm:bottom-5 xl:bottom-7 inline-block bg-white shadow-product rounded-md text-heading lowercase text-sm xl:text-xl 2xl:text-xl sm:uppercase px-3 sm:px-5 xl:px-6 2xl:px-8 py-2.5 sm:py-4 xl:py-5 2xl:py-7  transform transition duration-300 ease-in-out hover:bg-heading hover:text-white ${item.id === 2 ? "start-3 sm:start-5 xl:start-7" : "end-3 sm:end-5 xl:end-7"}`,
          children: t(`${item.buttonText}`)
        }), data.exclusiveName && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: `z-0 absolute top-10 xl:top-12 2xl:top-16 3xl:top-24 uppercase text-black opacity-10 text-xl xl:text-2xl 3xl:text-3xl tracking-widest leading-5 ${item.id === 2 ? "start-5 xl:start-7" : "end-5 xl:end-7"}`,
          children: item.id !== 2 ? t(`${data.exclusiveName}`) : t("text-exclusive")
        }), data.year && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: `exclusiveYear absolute top-16 xl:top-20 2xl:top-24 3xl:top-32 start-0 z-10 text-black font-bold leading-none tracking-widest ${item.id === 2 ? "text-start pl-4 start-0" : "text-end end-0"}`,
          children: item.id !== 2 ? data.year.toString().slice(0, 2) : data.year.toString().slice(2, 4)
        })]
      }, `exclusive--key${item.id}`))
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExclusiveBlock);

/***/ }),

/***/ 9332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ product_flash_sale_block)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./src/components/common/section-header.tsx
var section_header = __webpack_require__(8092);
// EXTERNAL MODULE: ./src/components/product/product-card.tsx
var product_card = __webpack_require__(6628);
// EXTERNAL MODULE: external "react-content-loader"
var external_react_content_loader_ = __webpack_require__(9081);
var external_react_content_loader_default = /*#__PURE__*/__webpack_require__.n(external_react_content_loader_);
;// CONCATENATED MODULE: ./src/components/ui/loaders/product-card-grid-loader.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const ProductCardGridLoader = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_content_loader_default()), _objectSpread(_objectSpread({
  speed: 2,
  width: 320,
  height: 440,
  viewBox: "0 0 320 440",
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb",
  className: "w-full h-auto"
}, props), {}, {
  children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "0",
    y: "345",
    rx: "3",
    ry: "3",
    width: "180",
    height: "8"
  }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "0",
    y: "377",
    rx: "3",
    ry: "3",
    width: "280",
    height: "6"
  }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "0",
    y: "416",
    rx: "3",
    ry: "3",
    width: "80",
    height: "10"
  }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "0",
    y: "0",
    rx: "6",
    ry: "6",
    width: "320",
    height: "320"
  })]
}));

/* harmony default export */ const product_card_grid_loader = (ProductCardGridLoader);
// EXTERNAL MODULE: ./src/framework/basic-rest/product/get-all-flash-sale-products.tsx
var get_all_flash_sale_products = __webpack_require__(5916);
// EXTERNAL MODULE: ./src/components/ui/alert.tsx
var ui_alert = __webpack_require__(3158);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
;// CONCATENATED MODULE: ./src/containers/product-flash-sale-block.tsx








const Countdown = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 7183, 23)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7183)],
    modules: ["..\\containers\\product-flash-sale-block.tsx -> " + "react-countdown"]
  }
});

// Renderer callback with condition
const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed
}) => {
  if (completed) {
    // Render a completed state
    return /*#__PURE__*/jsx_runtime_.jsx("span", {
      children: "Time Over!"
    });
  } else {
    // Render a countdown
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center space-s-1.5 md:space-s-2.5",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "text-heading text-10px md:text-xs text-center uppercase",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "bg-heading rounded-md text-white text-xs md:text-sm w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mb-1",
          children: days
        }), "days"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "text-heading text-10px md:text-xs text-center uppercase",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "bg-heading rounded-md text-white text-xs md:text-sm w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mb-1",
          children: hours
        }), "hours"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "text-heading text-10px md:text-xs text-center uppercase",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "bg-heading rounded-md text-white text-xs md:text-sm w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mb-1",
          children: minutes
        }), "mins"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "text-heading text-10px md:text-xs text-center uppercase",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "bg-heading rounded-md text-white text-xs md:text-sm w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mb-1",
          children: seconds
        }), "secs"]
      })]
    });
  }
};

const ProductsFlashSaleBlock = ({
  sectionHeading = "text-flash-sale",
  className = "mb-12 md:mb-14 xl:mb-16",
  date = "2023-03-01T01:02:03"
}) => {
  var _data$productFlashSel;

  const {
    data,
    isLoading,
    error
  } = (0,get_all_flash_sale_products/* useFlashSaleProductsQuery */.t)({
    limit: 10
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `${className} border border-gray-300 rounded-md pt-5 md:pt-6 lg:pt-7 pb-5 lg:pb-7 px-4 md:px-5 lg:px-7`,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex justify-between items-center flex-wrap mb-5 md:mb-6",
      children: [/*#__PURE__*/jsx_runtime_.jsx(section_header/* default */.Z, {
        sectionHeading: sectionHeading,
        className: "mb-0"
      }), /*#__PURE__*/jsx_runtime_.jsx(Countdown, {
        date: date,
        intervalDelay: 1000,
        renderer: renderer
      })]
    }), error ? /*#__PURE__*/jsx_runtime_.jsx(ui_alert/* default */.Z, {
      message: error === null || error === void 0 ? void 0 : error.message
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-4 lg:gap-y-5 xl:lg:gap-y-6 2xl:gap-y-8",
      children: isLoading && data ? Array.from({
        length: 10
      }).map((_, idx) => /*#__PURE__*/jsx_runtime_.jsx(product_card_grid_loader, {
        uniqueKey: `flash-sale-${idx}`
      }, idx)) : data === null || data === void 0 ? void 0 : (_data$productFlashSel = data.productFlashSellGridTwo) === null || _data$productFlashSel === void 0 ? void 0 : _data$productFlashSel.map(product => /*#__PURE__*/jsx_runtime_.jsx(product_card/* default */.Z, {
        product: product,
        imgWidth: 324,
        imgHeight: 324,
        variant: "gridSlim"
      }, `product--key${product.id}`))
    })]
  });
};

/* harmony default export */ const product_flash_sale_block = (ProductsFlashSaleBlock);

/***/ }),

/***/ 2016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ products_featured)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./src/components/common/section-header.tsx
var section_header = __webpack_require__(8092);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/contexts/ui.context.tsx
var ui_context = __webpack_require__(7014);
// EXTERNAL MODULE: ./src/framework/basic-rest/product/use-price.tsx
var use_price = __webpack_require__(4718);
;// CONCATENATED MODULE: ./src/components/product/product-overlay-card.tsx






const ProductOverlayCard = ({
  product,
  index,
  variant = 'left',
  imgLoading = 'lazy'
}) => {
  var _product$image$origin, _product$image;

  // const size =
  //   (variant === 'center' && index === 1) || (variant === 'left' && index === 0)
  //     ? 620
  //     : 260;
  let size = 260; // const classes =
  //   (variant === 'center' && index === 1) || (variant === 'left' && index === 0)
  //     ? 'row-span-full lg:row-span-2 col-span-full lg:col-span-2'
  //     : 'col-span-2 lg:col-span-1';

  let classes;

  if (variant === 'left' && index === 0) {
    classes = 'row-span-full lg:row-span-2 col-span-full lg:col-span-2';
    size = 620;
  } else if (variant === 'center' && index === 1) {
    classes = 'row-span-full lg:row-span-2 col-span-full lg:col-span-2';
    size = 620;
  } else if (variant === 'combined') {
    if (index === 0) {
      classes = 'col-span-2 lg:row-span-2 col-span-full lg:col-span-2';
      size = 620;
    } else if (index === 2) {
      classes = `col-span-2 lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-3`;
      size = 620;
    } else {
      classes = 'col-span-2 lg:col-span-1';
    }
  } else {
    classes = 'col-span-2 lg:col-span-1';
  }

  const {
    openModal,
    setModalView,
    setModalData
  } = (0,ui_context/* useUI */.l8)();
  const {
    price,
    basePrice,
    discount
  } = (0,use_price/* default */.ZP)({
    amount: product.sale_price ? product.sale_price : product.price,
    baseAmount: product.price,
    currencyCode: 'USD'
  });

  function handlePopupView() {
    setModalData({
      data: product
    });
    setModalView('PRODUCT_VIEW');
    return openModal();
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    onClick: handlePopupView,
    className: `${classes} cursor-pointer group flex flex-col bg-gray-200 rounded-md relative items-center justify-between overflow-hidden`,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex justify-center items-center p-4 h-full 3xl:min-h-[330px]",
      title: product === null || product === void 0 ? void 0 : product.name,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: (_product$image$origin = product === null || product === void 0 ? void 0 : (_product$image = product.image) === null || _product$image === void 0 ? void 0 : _product$image.original) !== null && _product$image$origin !== void 0 ? _product$image$origin : '/assets/placeholder/products/product-featured.png',
        width: size,
        height: size,
        loading: imgLoading,
        alt: (product === null || product === void 0 ? void 0 : product.name) || 'Product Image',
        className: "transition duration-500 ease-in-out transform group-hover:scale-110"
      })
    }), discount && /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "absolute top-3.5 md:top-5 3xl:top-7 start-3.5 md:start-5 3xl:start-7 bg-heading text-white text-10px md:text-sm leading-5 rounded-md inline-block px-2 xl:px-3 pt-0.5 pb-1",
      children: discount
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col md:flex-row lg:flex-col 2xl:flex-row md:justify-between md:items-center lg:items-start 2xl:items-center w-full px-4 md:px-5 3xl:px-7 pb-4 md:pb-5 3xl:pb-7",
      title: product === null || product === void 0 ? void 0 : product.name,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "md:pe-2 lg:pe-0 2xl:pe-2 overflow-hidden",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "text-heading font-semibold text-sm md:text-base xl:text-lg mb-1 truncate",
          children: product === null || product === void 0 ? void 0 : product.name
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-body text-xs xl:text-sm leading-normal xl:leading-relaxed truncate max-w-[250px]",
          children: product === null || product === void 0 ? void 0 : product.description
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex-shrink-0 flex flex-row-reverse md:flex-col lg:flex-row-reverse 2xl:flex-col items-center md:items-end lg:items-start 2xl:items-end justify-end md:text-end lg:text-start xl:text-end mt-2 md:-mt-0.5 lg:mt-2 2xl:-mt-0.5",
        children: [discount && /*#__PURE__*/jsx_runtime_.jsx("del", {
          className: "text-sm md:text-base lg:text-sm xl:text-base 3xl:text-lg",
          children: basePrice
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "text-heading font-segoe font-semibold text-base md:text-xl lg:text-base xl:text-xl 3xl:text-2xl 3xl:mt-0.5 pe-2 md:pe-0 lg:pe-2 2xl:pe-0",
          children: price
        })]
      })]
    })]
  });
};

/* harmony default export */ const product_overlay_card = (ProductOverlayCard);
// EXTERNAL MODULE: ./src/framework/basic-rest/utils/http.ts
var http = __webpack_require__(7235);
// EXTERNAL MODULE: ./src/framework/basic-rest/utils/api-endpoints.ts
var api_endpoints = __webpack_require__(3833);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
;// CONCATENATED MODULE: ./src/framework/basic-rest/product/get-all-featured-products.tsx



const fetchFeaturedProducts = async ({
  queryKey
}) => {
  const [_key, _params] = queryKey;
  const {
    data
  } = await http/* default.get */.Z.get(api_endpoints/* API_ENDPOINTS.FEATURED_PRODUCTS */.P.FEATURED_PRODUCTS);
  return data;
};
const useFeaturedProductsQuery = options => {
  return (0,external_react_query_.useQuery)([api_endpoints/* API_ENDPOINTS.FEATURED_PRODUCTS */.P.FEATURED_PRODUCTS, options], fetchFeaturedProducts);
};
// EXTERNAL MODULE: ./src/components/ui/alert.tsx
var ui_alert = __webpack_require__(3158);
;// CONCATENATED MODULE: ./src/containers/products-featured.tsx







const ProductsFeatured = ({
  sectionHeading,
  categorySlug,
  className = 'mb-12 md:mb-14 xl:mb-16',
  variant = 'left',
  limit = 5
}) => {
  const {
    data,
    error
  } = useFeaturedProductsQuery({
    limit: limit
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/jsx_runtime_.jsx(section_header/* default */.Z, {
      sectionHeading: sectionHeading,
      categorySlug: categorySlug
    }), error ? /*#__PURE__*/jsx_runtime_.jsx(ui_alert/* default */.Z, {
      message: error === null || error === void 0 ? void 0 : error.message
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "grid grid-cols-4 grid-rows-2 gap-3 md:gap-5 xl:gap-7",
      children: data === null || data === void 0 ? void 0 : data.slice(0, limit).map((product, idx) => /*#__PURE__*/jsx_runtime_.jsx(product_overlay_card, {
        product: product,
        variant: variant,
        index: idx
      }, `product--key${product.id}`))
    })]
  });
};

/* harmony default export */ const products_featured = (ProductsFeatured);

/***/ })

};
;