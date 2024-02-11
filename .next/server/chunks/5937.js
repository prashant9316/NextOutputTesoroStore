"use strict";
exports.id = 5937;
exports.ids = [5937];
exports.modules = {

/***/ 5937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ category_block)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./src/components/common/card.tsx
var card = __webpack_require__(172);
// EXTERNAL MODULE: ./src/components/common/section-header.tsx
var section_header = __webpack_require__(8092);
// EXTERNAL MODULE: ./src/components/ui/carousel/carousel.tsx
var carousel = __webpack_require__(7956);
// EXTERNAL MODULE: external "react-content-loader"
var external_react_content_loader_ = __webpack_require__(9081);
var external_react_content_loader_default = /*#__PURE__*/__webpack_require__.n(external_react_content_loader_);
;// CONCATENATED MODULE: ./src/components/ui/loaders/card-loader.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const CardLoader = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_content_loader_default()), _objectSpread(_objectSpread({
  speed: 2,
  width: 180,
  height: 232,
  viewBox: "0 0 180 232",
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb",
  className: "w-full h-auto"
}, props), {}, {
  children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "34",
    y: "215",
    rx: "3",
    ry: "3",
    width: "110",
    height: "10"
  }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "0",
    y: "0",
    rx: "100",
    ry: "100",
    width: "180",
    height: "180"
  })]
}));

/* harmony default export */ const card_loader = (CardLoader);
// EXTERNAL MODULE: ./src/components/ui/loaders/card-rounded-loader.tsx
var card_rounded_loader = __webpack_require__(7776);
// EXTERNAL MODULE: ./src/framework/basic-rest/category/get-all-categories.tsx
var get_all_categories = __webpack_require__(154);
// EXTERNAL MODULE: ./src/utils/routes.ts
var routes = __webpack_require__(9524);
// EXTERNAL MODULE: ./src/components/ui/alert.tsx
var ui_alert = __webpack_require__(3158);
// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__(2156);
// EXTERNAL MODULE: external "react-reveal"
var external_react_reveal_ = __webpack_require__(9356);
;// CONCATENATED MODULE: ./src/containers/category-block.tsx












const breakpoints = {
  '1720': {
    slidesPerView: 8,
    spaceBetween: 28
  },
  '1400': {
    slidesPerView: 7,
    spaceBetween: 28
  },
  '1025': {
    slidesPerView: 6,
    spaceBetween: 28
  },
  '768': {
    slidesPerView: 5,
    spaceBetween: 20
  },
  '500 ': {
    slidesPerView: 4,
    spaceBetween: 20
  },
  '0': {
    slidesPerView: 3,
    spaceBetween: 12
  }
};
const breakpointsCircle = {
  '1720': {
    slidesPerView: 8,
    spaceBetween: 48
  },
  '1400': {
    slidesPerView: 7,
    spaceBetween: 32
  },
  '1025': {
    slidesPerView: 6,
    spaceBetween: 28
  },
  '768': {
    slidesPerView: 5,
    spaceBetween: 20
  },
  '500 ': {
    slidesPerView: 4,
    spaceBetween: 20
  },
  '0': {
    slidesPerView: 3,
    spaceBetween: 12
  }
};

const CategoryBlock = ({
  className = 'mb-10 md:mb-11 lg:mb-12 xl:mb-14 lg:pb-1 xl:pb-0 mx-0 w-full drop-shadow-lg',
  sectionHeading,
  type = 'circle'
}) => {
  const {
    data,
    isLoading,
    error
  } = (0,get_all_categories/* useCategoriesQuery */.E)({});
  console.log("DATa in category block:");
  console.log(data);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: className + " bg-category-section",
    style: {
      backgroundColor: '#efe3fc',
      borderRadius: '12px',
      padding: '10px'
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(section_header/* default */.Z, {
      sectionHeading: sectionHeading,
      boxshadow: true
    }), error ? /*#__PURE__*/jsx_runtime_.jsx(ui_alert/* default */.Z, {
      message: error === null || error === void 0 ? void 0 : error.message
    }) : /*#__PURE__*/jsx_runtime_.jsx(external_react_reveal_.Fade, {
      bottom: true,
      children: isLoading && !data ? /*#__PURE__*/jsx_runtime_.jsx(carousel/* default */.Z, {
        breakpoints: type === 'rounded' ? breakpoints : breakpointsCircle,
        buttonClassName: "-mt-8 md:-mt-10",
        children: Array.from({
          length: 5
        }).map((_, idx) => {
          if (type === 'rounded') {
            return /*#__PURE__*/jsx_runtime_.jsx(react_.SwiperSlide, {
              children: /*#__PURE__*/jsx_runtime_.jsx(card_rounded_loader/* default */.Z, {
                uniqueKey: `card-rounded-${idx}`
              })
            }, `card-rounded-${idx}`);
          }

          return /*#__PURE__*/jsx_runtime_.jsx(react_.SwiperSlide, {
            children: /*#__PURE__*/jsx_runtime_.jsx(card_loader, {
              uniqueKey: `card-circle-${idx}`
            })
          }, `card-circle-${idx}`);
        })
      }) : /*#__PURE__*/jsx_runtime_.jsx(carousel/* default */.Z, {
        breakpoints: type === 'rounded' ? breakpoints : breakpointsCircle,
        buttonClassName: "-mt-8 md:-mt-10",
        children: data === null || data === void 0 ? void 0 : data.categoryRef.map(category => /*#__PURE__*/jsx_runtime_.jsx(react_.SwiperSlide, {
          children: /*#__PURE__*/jsx_runtime_.jsx(card/* default */.Z, {
            item: category,
            href: `${routes/* ROUTES.CATEGORY */.Z.CATEGORY}/${category.slug}`,
            variant: type,
            effectActive: true,
            size: type === 'rounded' ? 'medium' : 'small'
          })
        }, `category--key-${category.id}`))
      })
    })]
  });
};

/* harmony default export */ const category_block = (CategoryBlock);

/***/ })

};
;