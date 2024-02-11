exports.id = 1809;
exports.ids = [1809];
exports.modules = {

/***/ 8092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7077);
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3407);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);






const SectionHeader = ({
  sectionHeading = "text-section-title",
  categorySlug,
  className = "pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8",
  boxshadow = false
}) => {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("common");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: `font-josephine flex items-center justify-center -mt-2 lg:-mt-2.5 ${className}`,
    children: [boxshadow ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_text__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      variant: "mediumHeading",
      style: {
        backgroundColor: '',
        color: 'black',
        boxShadow: '8px 11px 8px rgba(218, 224, 245, 0)',
        padding: '10px',
        marginTop: '9px',
        borderRadius: '12px',
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: 'Van'
      },
      children: t(`${sectionHeading}`)
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_text__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      variant: "mediumHeading",
      style: {
        fontFamily: 'Van'
      },
      children: t(`${sectionHeading}`)
    }), categorySlug && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      href: categorySlug,
      className: "font-josephine text-xs lg:text-sm xl:text-base text-heading mt-0.5 lg:mt-1",
      children: t("text-see-all-product")
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionHeader);

/***/ }),

/***/ 3158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const Alert = ({
  message
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "h-full py-4 px-5 text-sm text-red-600 font-semibold flex items-center justify-center border border-red-200 rounded",
    children: message
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alert);

/***/ }),

/***/ 7956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2156);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4074);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1649);
/* harmony import */ var swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1631);
/* harmony import */ var swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_get_direction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(991);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









swiper__WEBPACK_IMPORTED_MODULE_4___default().use([swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_4__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_4__.Scrollbar]);

const Carousel = (_ref) => {
  let {
    children,
    className = '',
    buttonClassName = '',
    buttonSize = 'default',
    paginationVariant = 'default',
    paginationPosition,
    breakpoints,
    autoplay = {
      delay: 4000
    }
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "buttonClassName", "buttonSize", "paginationVariant", "paginationPosition", "breakpoints", "autoplay"]);

  const prevRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const nextRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    locale
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const dir = (0,_utils_get_direction__WEBPACK_IMPORTED_MODULE_6__/* .getDirection */ .M)(locale);
  const classPagination = paginationPosition ? ` pagination-${paginationPosition}` : '';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: `carouselWrapper relative ${className}${classPagination} ${paginationVariant === 'circle' ? 'dotsCircle' : ''}`,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, _objectSpread(_objectSpread({
      loop: true,
      autoplay: autoplay,
      breakpoints: breakpoints,
      dir: dir,
      navigation: {
        prevEl: prevRef.current ? prevRef.current : undefined,
        nextEl: nextRef.current ? nextRef.current : undefined
      },
      onInit: swiper => {
        const navigation = swiper.params.navigation;
        navigation.prevEl = prevRef.current;
        navigation.nextEl = nextRef.current;
        swiper.update();
      }
    }, props), {}, {
      children: children
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "flex items-center w-full absolute top-2/4 z-10",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        ref: prevRef,
        "aria-label": "prev-button",
        className: `${buttonClassName} ${buttonSize === 'default' ? 'w-7 h-7 md:w-7 md:h-7 lg:w-9 lg:h-9 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 text-sm md:text-base lg:text-xl 3xl:text-2xl' : 'w-7 h-7 md:w-7 md:h-7 lg:w-8 lg:h-8 text-sm md:text-base lg:text-lg'} text-black flex items-center justify-center rounded-full text-gray-0 bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none start-0 transform ${dir === 'rtl' ? 'rotate-180 shadow-navigationReverse translate-x-1/2' : 'shadow-navigation -translate-x-1/2'}`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_7__/* .IoIosArrowBack */ .u1R, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        ref: nextRef,
        "aria-label": "next-button",
        className: `${buttonClassName} ${buttonSize === 'default' ? 'w-7 h-7 lg:w-9 lg:h-9 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 text-sm md:text-base lg:text-xl 3xl:text-2xl' : 'w-7 h-7 lg:w-8 lg:h-8 text-sm md:text-base lg:text-lg'} text-black flex items-center justify-center rounded-full bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none end-0 transform ${dir === 'rtl' ? 'rotate-180 shadow-navigationReverse -translate-x-1/2' : 'shadow-navigation translate-x-1/2'}`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_7__/* .IoIosArrowForward */ .hjJ, {})
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carousel);

/***/ }),

/***/ 7776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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



const CardRoundedLoader = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_content_loader__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread(_objectSpread({
  speed: 2,
  width: 197,
  height: 249,
  viewBox: "0 0 197 249",
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb",
  className: "w-full h-auto"
}, props), {}, {
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
    x: "34",
    y: "230",
    rx: "3",
    ry: "3",
    width: "110",
    height: "10"
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
    x: "0",
    y: "0",
    rx: "6",
    ry: "6",
    width: "197",
    height: "197"
  })]
}));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardRoundedLoader);

/***/ }),

/***/ 848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ fetchNewArrivalProducts),
/* harmony export */   "l": () => (/* binding */ useNewArrivalProductsQuery)
/* harmony export */ });
/* harmony import */ var _framework_utils_https__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7790);
/* harmony import */ var _framework_utils_api_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3833);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2585);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);


 // interface newarrivals {
//   products: HomepageBanner[];
// }

const fetchNewArrivalProducts = async () => {
  // const [_key, _params] = queryKey;
  const {
    data
  } = await _framework_utils_https__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .Z.get(_framework_utils_api_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.NEW_ARRIVAL_PRODUCTS */ .P.NEW_ARRIVAL_PRODUCTS);
  return data.products[0];
};
const useNewArrivalProductsQuery = options => {
  return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([_framework_utils_api_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.NEW_ARRIVAL_PRODUCTS */ .P.NEW_ARRIVAL_PRODUCTS, options], fetchNewArrivalProducts);
};

/***/ }),

/***/ 2558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* reexport default from dynamic */ react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5319);
/* harmony import */ var react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ 1631:
/***/ (() => {



/***/ })

};
;