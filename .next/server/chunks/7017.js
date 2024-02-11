"use strict";
exports.id = 7017;
exports.ids = [7017];
exports.modules = {

/***/ 7550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1649);
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9524);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);








const CategoryListCard = ({
  category
}) => {
  const {
    name,
    image
  } = category;
  const productCount = 5;
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)("common");
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: `${_utils_routes__WEBPACK_IMPORTED_MODULE_3__/* .ROUTES.CATEGORY */ .Z.CATEGORY}/${category.slug}`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
      className: "flex justify-between items-center bg-gray-200 rounded-md px-5 2xl:px-3.5 py-3 xl:py-3.5 2xl:py-2.5 3xl:py-3.5 transition hover:bg-gray-100",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "inline-flex flex-shrink-0 2xl:w-12 2xl:h-12 3xl:w-auto 3xl:h-auto",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__.default, {
            src: image !== null && image !== void 0 ? image : "/assets/placeholder/category-small.svg",
            alt: name.en || t("text-category-thumbnail"),
            width: 60,
            height: 60,
            className: "bg-gray-300 object-cover rounded-full"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
          className: "text-sm md:text-base 2xl:text-sm 3xl:text-base text-heading capitalize ps-2.5 md:ps-4 2xl:ps-3 3xl:ps-4",
          children: name.en
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "text-xs font-medium w-5 h-5 flex flex-shrink-0 justify-center items-center bg-gray-350 rounded 2xl:me-2",
          children: productCount
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__/* .IoIosArrowForward */ .hjJ, {
          className: "hidden 2xl:block text-sm text-heading"
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryListCard);

/***/ }),

/***/ 5575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9081);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const CategoryListCardLoader = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_content_loader__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread(_objectSpread({
  speed: 2,
  width: 389,
  height: 88,
  viewBox: "0 0 389 88",
  backgroundColor: "#f9f9f9",
  foregroundColor: "#ecebeb",
  className: "rounded-md bg-gray-200 w-full"
}, props), {}, {
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
    cx: "43",
    cy: "45",
    r: "30"
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
    x: "88",
    y: "40",
    rx: "3",
    ry: "3",
    width: "96",
    height: "8"
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
    x: "350",
    y: "34",
    rx: "3",
    ry: "3",
    width: "20",
    height: "20"
  })]
}));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryListCardLoader);

/***/ }),

/***/ 4449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(172);
/* harmony import */ var _components_common_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8092);
/* harmony import */ var _components_ui_carousel_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7956);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2156);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ui_loaders_card_rounded_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7776);
/* harmony import */ var _framework_brand_get_all_brands__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4022);
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9524);
/* harmony import */ var _components_ui_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3158);










const breakpoints = {
  "1720": {
    slidesPerView: 8,
    spaceBetween: 28
  },
  "1400": {
    slidesPerView: 7,
    spaceBetween: 28
  },
  "1025": {
    slidesPerView: 6,
    spaceBetween: 28
  },
  "768": {
    slidesPerView: 5,
    spaceBetween: 20
  },
  "500 ": {
    slidesPerView: 4,
    spaceBetween: 20
  },
  "0": {
    slidesPerView: 3,
    spaceBetween: 12
  }
};

const BrandBlock = ({
  className = "mb-11 md:mb-11 lg:mb-12 xl:mb-14 lg:pb-1 xl:pb-0",
  sectionHeading
}) => {
  const {
    data,
    isLoading,
    error
  } = (0,_framework_brand_get_all_brands__WEBPACK_IMPORTED_MODULE_6__/* .useBrandsQuery */ .a)({
    limit: 8
  });
  const brands = data === null || data === void 0 ? void 0 : data.brands;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_section_header__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      sectionHeading: sectionHeading
    }), error ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_alert__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
      message: error === null || error === void 0 ? void 0 : error.message
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_carousel_carousel__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
      breakpoints: breakpoints,
      buttonClassName: "-mt-8 md:-mt-12",
      children: isLoading && !data ? Array.from({
        length: 10
      }).map((_, idx) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loaders_card_rounded_loader__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
          uniqueKey: `category-${idx}`
        })
      }, idx)) : brands === null || brands === void 0 ? void 0 : brands.map(brand => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_card__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
          item: brand,
          variant: "rounded",
          size: "medium",
          href: {
            pathname: _utils_routes__WEBPACK_IMPORTED_MODULE_7__/* .ROUTES.SEARCH */ .Z.SEARCH,
            query: {
              brand: brand.slug
            }
          }
        })
      }, `brand--key${brand.id}`))
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrandBlock);

/***/ }),

/***/ 4952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ category_grid_block)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./src/components/common/section-header.tsx
var section_header = __webpack_require__(8092);
// EXTERNAL MODULE: ./src/components/ui/carousel/carousel.tsx
var carousel = __webpack_require__(7956);
// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__(2156);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/components/ui/text.tsx
var ui_text = __webpack_require__(7077);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
;// CONCATENATED MODULE: ./src/components/common/category-card.tsx







const CategoryCard = ({
  category
}) => {
  var _products$slice;

  const {
    name,
    products
  } = category;
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col border border-gray-300 rounded-lg p-4 lg:p-5 xl:p-7",
    children: [/*#__PURE__*/jsx_runtime_.jsx(ui_text/* default */.Z, {
      variant: "heading",
      className: "capitalize -mt-0.5 lg:-mt-1 xl:-mt-0 mb-2.5 lg:mb-3.5",
      children: name
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "grid grid-cols-3 gap-2.5 xl:gap-3",
      children: products === null || products === void 0 ? void 0 : (_products$slice = products.slice(0, 3)) === null || _products$slice === void 0 ? void 0 : _products$slice.map(product => {
        var _product$image$origin, _product$image;

        return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: `${product === null || product === void 0 ? void 0 : product.slug}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "flex rounded-md overflow-hidden",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: (_product$image$origin = product === null || product === void 0 ? void 0 : (_product$image = product.image) === null || _product$image === void 0 ? void 0 : _product$image.original) !== null && _product$image$origin !== void 0 ? _product$image$origin : "/assets/placeholder/products/product-cat.svg",
              alt: name || t("text-category-thumbnail"),
              width: 165,
              height: 165,
              className: "bg-gray-300 object-cover rounded-md transition duration-300 ease-in-out transform hover:scale-110"
            })
          })
        }, `image--key${product === null || product === void 0 ? void 0 : product.id}`);
      })
    })]
  });
};

/* harmony default export */ const category_card = (CategoryCard);
// EXTERNAL MODULE: ./src/utils/use-window-size.ts
var use_window_size = __webpack_require__(2558);
// EXTERNAL MODULE: external "react-content-loader"
var external_react_content_loader_ = __webpack_require__(9081);
var external_react_content_loader_default = /*#__PURE__*/__webpack_require__.n(external_react_content_loader_);
;// CONCATENATED MODULE: ./src/components/ui/loaders/category-card-loader.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const CategoryCardLoader = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_content_loader_default()), _objectSpread(_objectSpread({
  speed: 2,
  width: 573,
  height: 264,
  viewBox: "0 0 573 264",
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb",
  className: "w-full h-auto"
}, props), {}, {
  children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "27",
    y: "38",
    rx: "3",
    ry: "3",
    width: "110",
    height: "10"
  }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "28",
    y: "70",
    rx: "6",
    ry: "6",
    width: "164",
    height: "164"
  }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "202",
    y: "70",
    rx: "6",
    ry: "6",
    width: "164",
    height: "164"
  }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "376",
    y: "70",
    rx: "6",
    ry: "6",
    width: "164",
    height: "164"
  }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "0",
    y: "0",
    rx: "0",
    ry: "0",
    width: "573",
    height: "2"
  }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "0",
    y: "262",
    rx: "0",
    ry: "0",
    width: "573",
    height: "2"
  }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "0",
    y: "0",
    rx: "0",
    ry: "0",
    width: "2",
    height: "264"
  }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "571",
    y: "0",
    rx: "0",
    ry: "0",
    width: "2",
    height: "264"
  })]
}));

/* harmony default export */ const category_card_loader = (CategoryCardLoader);
// EXTERNAL MODULE: ./src/framework/basic-rest/utils/http.ts
var http = __webpack_require__(7235);
// EXTERNAL MODULE: ./src/framework/basic-rest/utils/api-endpoints.ts
var api_endpoints = __webpack_require__(3833);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
;// CONCATENATED MODULE: ./src/framework/basic-rest/category/get-all-featured-categories.tsx



const fetchFeaturedCategories = async ({
  queryKey
}) => {
  const [_key, _params] = queryKey;
  const {
    data
  } = await http/* default.get */.Z.get(api_endpoints/* API_ENDPOINTS.FEATURED_CATEGORIES */.P.FEATURED_CATEGORIES);
  return data;
};
const useFeaturedCategoriesQuery = options => {
  return (0,external_react_query_.useQuery)([api_endpoints/* API_ENDPOINTS.FEATURED_CATEGORIES */.P.FEATURED_CATEGORIES, options], fetchFeaturedCategories);
};
// EXTERNAL MODULE: ./src/components/ui/alert.tsx
var ui_alert = __webpack_require__(3158);
;// CONCATENATED MODULE: ./src/containers/category-grid-block.tsx











const breakpoints = {
  "1220": {
    slidesPerView: 4,
    spaceBetween: 28
  },
  "800": {
    slidesPerView: 3,
    spaceBetween: 20
  },
  "440": {
    slidesPerView: 2,
    spaceBetween: 20
  },
  "0": {
    slidesPerView: 1,
    spaceBetween: 12
  }
};

const CategoryGridBlock = ({
  sectionHeading = "text-section-title",
  className = "mb-12 md:mb-14 xl:mb-16"
}) => {
  const {
    width
  } = (0,use_window_size/* useWindowSize */.i)();
  const {
    data,
    isLoading,
    error
  } = useFeaturedCategoriesQuery({
    limit: 10
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/jsx_runtime_.jsx(section_header/* default */.Z, {
      sectionHeading: sectionHeading
    }), error ? /*#__PURE__*/jsx_runtime_.jsx(ui_alert/* default */.Z, {
      message: error === null || error === void 0 ? void 0 : error.message
    }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: width < 1025 ? /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "relative",
        children: /*#__PURE__*/jsx_runtime_.jsx(carousel/* default */.Z, {
          breakpoints: breakpoints,
          children: isLoading ? Array.from({
            length: 6
          }).map((_, idx) => /*#__PURE__*/jsx_runtime_.jsx(react_.SwiperSlide, {
            children: /*#__PURE__*/jsx_runtime_.jsx(category_card_loader, {
              uniqueKey: `featured-category-${idx}`
            })
          }, idx)) : data === null || data === void 0 ? void 0 : data.map(category => /*#__PURE__*/jsx_runtime_.jsx(react_.SwiperSlide, {
            children: /*#__PURE__*/jsx_runtime_.jsx(category_card, {
              category: category
            })
          }, `category--key${category.id}`))
        })
      }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "lg:grid lg:grid-cols-3 lg:gap-5 xl:gap-7",
        children: isLoading ? Array.from({
          length: 6
        }).map((_, idx) => /*#__PURE__*/jsx_runtime_.jsx(category_card_loader, {
          uniqueKey: `featured-category-${idx}`
        }, idx)) : data === null || data === void 0 ? void 0 : data.map(category => /*#__PURE__*/jsx_runtime_.jsx(category_card, {
          category: category
        }, `category--key${category.id}`))
      })
    })]
  });
};

/* harmony default export */ const category_grid_block = (CategoryGridBlock);

/***/ })

};
;