"use strict";
exports.id = 4015;
exports.ids = [4015];
exports.modules = {

/***/ 9800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_banner_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8470);
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9524);




const BannerBlock = ({
  data,
  className = "mb-12 md:mb-14 xl:mb-16"
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: `${className} px-2.5 grid grid-cols-2 sm:grid-cols-9 gap-2 md:gap-2.5 max-w-[1920px] mx-auto`,
    children: data.map(banner => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_banner_card__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      banner: banner,
      href: `${_utils_routes__WEBPACK_IMPORTED_MODULE_2__/* .ROUTES.COLLECTIONS */ .Z.COLLECTIONS}/${banner.slug}`,
      effectActive: true,
      variant: "default",
      className: banner.type === "medium" ? "col-span-full sm:col-span-5" : "col-span-1 sm:col-span-2"
    }, `banner--key${banner.id}`))
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerBlock);

/***/ }),

/***/ 3235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ brand_grid_block)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/utils/routes.ts
var routes = __webpack_require__(9524);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
;// CONCATENATED MODULE: ./src/components/common/brand-card.tsx







const BrandCard = ({
  brand
}) => {
  var _background_image$ori;

  const {
    slug,
    name,
    background_image,
    image
  } = brand;
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: {
      pathname: routes/* ROUTES.SEARCH */.Z.SEARCH,
      query: {
        brand: slug
      }
    },
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
      className: "group flex justify-center text-center relative overflow-hidden rounded-md",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: (_background_image$ori = background_image === null || background_image === void 0 ? void 0 : background_image.original) !== null && _background_image$ori !== void 0 ? _background_image$ori : "/assets/placeholder/brand-bg.svg",
        alt: name || t("text-brand-thumbnail"),
        width: 428,
        height: 428,
        className: "rounded-md object-cover transform transition-transform ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "absolute top left bg-black w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "absolute top left h-full w-full flex items-center justify-center p-8",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: image === null || image === void 0 ? void 0 : image.original,
          alt: name || t("text-brand-thumbnail"),
          className: "flex-shrink-0"
        })
      })]
    })
  });
};

/* harmony default export */ const brand_card = (BrandCard);
// EXTERNAL MODULE: ./src/components/common/section-header.tsx
var section_header = __webpack_require__(8092);
// EXTERNAL MODULE: external "react-content-loader"
var external_react_content_loader_ = __webpack_require__(9081);
var external_react_content_loader_default = /*#__PURE__*/__webpack_require__.n(external_react_content_loader_);
;// CONCATENATED MODULE: ./src/components/ui/loaders/brand-card-loader.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const BrandCardLoader = props => /*#__PURE__*/jsx_runtime_.jsx((external_react_content_loader_default()), _objectSpread(_objectSpread({
  speed: 2,
  width: 423,
  height: 423,
  viewBox: "0 0 423 423",
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb",
  className: "w-full h-auto"
}, props), {}, {
  children: /*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "0",
    y: "0",
    rx: "6",
    ry: "6",
    width: "423",
    height: "423"
  })
}));

/* harmony default export */ const brand_card_loader = (BrandCardLoader);
// EXTERNAL MODULE: ./src/framework/basic-rest/brand/get-all-brands.tsx
var get_all_brands = __webpack_require__(4022);
// EXTERNAL MODULE: ./src/components/ui/alert.tsx
var ui_alert = __webpack_require__(3158);
;// CONCATENATED MODULE: ./src/containers/brand-grid-block.tsx








const BrandGridBlock = ({
  className = 'mb-12 md:mb-14 xl:mb-16',
  sectionHeading,
  variant = '4column',
  limit = 16
}) => {
  const {
    data,
    isLoading,
    error
  } = (0,get_all_brands/* useBrandsQuery */.a)({
    limit: limit
  });
  const brands = data === null || data === void 0 ? void 0 : data.brandsGrid;
  const columnClasses = variant === '4column' ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-2 sm:grid-cols-4 2xl:grid-cols-6';
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/jsx_runtime_.jsx(section_header/* default */.Z, {
      sectionHeading: sectionHeading
    }), error ? /*#__PURE__*/jsx_runtime_.jsx(ui_alert/* default */.Z, {
      message: error === null || error === void 0 ? void 0 : error.message
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `grid ${columnClasses} gap-2.5 md:gap-3 lg:gap-5 xl:gap-7`,
      children: isLoading ? Array.from({
        length: limit
      }).map((_, idx) => /*#__PURE__*/jsx_runtime_.jsx(brand_card_loader, {
        uniqueKey: `top-brand-${idx}`
      }, idx)) : brands === null || brands === void 0 ? void 0 : brands.slice(0, limit).map(brand => /*#__PURE__*/jsx_runtime_.jsx(brand_card, {
        brand: brand
      }, `brand--key${brand.id}`))
    })]
  });
};

/* harmony default export */ const brand_grid_block = (BrandGridBlock);

/***/ })

};
;