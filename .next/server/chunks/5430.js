"use strict";
exports.id = 5430;
exports.ids = [5430];
exports.modules = {

/***/ 2327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BestSellerProductFeed)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_products_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8593);
/* harmony import */ var _framework_product_get_all_best_seller_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8344);



function BestSellerProductFeed() {
  const {
    data,
    isLoading,
    error
  } = (0,_framework_product_get_all_best_seller_products__WEBPACK_IMPORTED_MODULE_2__/* .useBestSellerProductsQuery */ .D)({});
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_products_block__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    sectionHeading: "Recently Viewed",
    products: data === null || data === void 0 ? void 0 : data.productRef,
    loading: isLoading,
    error: error === null || error === void 0 ? void 0 : error.message,
    uniqueKey: "best-sellers"
  });
}

/***/ }),

/***/ 1530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ collection_block)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./src/components/ui/link.tsx
var ui_link = __webpack_require__(3407);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
;// CONCATENATED MODULE: ./src/components/common/collection-card.tsx






const CollectionCard = ({
  uniqueKey,
  collection,
  imgWidth = 580,
  imgHeight = 580,
  contactClassName = ""
}) => {
  const {
    slug,
    image,
    title
  } = collection;
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  console.log(uniqueKey);
  if (uniqueKey <= 1) return /*#__PURE__*/jsx_runtime_.jsx(ui_link/* default */.Z, {
    href: slug,
    className: "group text-center flex flex-col justify-between sm:even:flex-col-reverse even:mt-16 odd:mb-16 sm:last:hidden lg:last:flex border sm:border-0 border-gray-300 overflow-hidden sm:pb-0",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex mx-auto flex-col relative",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: image !== null && image !== void 0 ? image : "/assets/placeholder/collection.svg",
          alt: t(`${title}`) || t("text-card-thumbnail"),
          width: imgWidth,
          height: imgHeight,
          className: "bg-gray-300 object-cover transition duration-200 ease-in-out group-hover:opacity-90"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "overflow-hidden absolute bottom-3.5 lg:bottom-5 end-3.5 lg:end-5 p-2",
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "inline-block text-[13px] md:text-sm leading-4 cursor-pointer transition ease-in-out duration-300 font-semibold text-center rounded-md bg-white text-heading shadow-navigation py-3 lg:py-4 px-4 lg:px-6 hover:bg-heading hover:text-white transform lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-y-0",
          style: {
            fontFamily: 'Hap'
          },
          children: "View Product"
        })
      })]
    })
  });else return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "col-span-2 mt-10 group text-center flex flex-col justify-between border sm:border-0 border-gray-300 overflow-hidden rounded-md items-center ",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: contactClassName,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: "text-7xl mb-1.5 lg:mb-2.5 2xl:mb-3 3xl:mb-3.5 font-bold overflow-visible",
        style: {
          fontFamily: 'Van'
        },
        children: "Founders' Picks"
      }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "text-body font-semibold text-xs md:text-sm leading-6 md:leading-7 ",
        style: {
          fontFamily: 'Hap'
        },
        children: "Explore the products that our founders personally\xA0adore."
      })]
    })
  });
};

/* harmony default export */ const collection_card = (CollectionCard);
;// CONCATENATED MODULE: ./src/containers/collection-block.tsx


const data = [{
  id: 1,
  slug: "/search",
  image: "/assets/images/new-images/founder-pick.png",
  title: "Mr. Virat Kohli",
  description: "Meet our featured artist and check their exclusive collection at Tesoro Store"
}, {
  id: 2,
  slug: "/search",
  image: "/assets/images/new-images/founders-pick-2.png",
  title: "Monthly Featured",
  description: "Meet our Artist/Entrepreneur of the Month"
}, {
  id: 3,
  slug: "/search",
  image: "/assets/images/new-images/founders-pick-2.png",
  title: "Virat Kohli",
  description: "Meet our featured entrepreneur and check their exclusive collection at Tesoro Store"
}];

const CollectionBlock = ({
  className = "for-desktop mb-12 md:mb-14 xl:mb-16 pb-0.5 lg:pt-1 xl:pt-0"
}) => {
  var _data$slice;

  const isEven = value => {
    return value % 2;
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `${className} for-desktop  bg-[#fda4af] w-[98.5vw] h-[37vh] -translate-x-4 md:-translate-x-8 2xl:-translate-x-16`,
    style: {
      backgroundImage: "url(/assets/images/founderspick/banner-main.jpg)",
      backgroundSize: '100% 100%'
    },
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-2/3 h-[37vh] relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 pl-[2vw]",
      children: data === null || data === void 0 ? void 0 : (_data$slice = data.slice(0, 2)) === null || _data$slice === void 0 ? void 0 : _data$slice.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx(collection_card, {
        uniqueKey: index,
        collection: item,
        contactClassName: isEven(index + 1) == 0 ? "sm:pb-4 md:pb-5 lg:pb-4 2xl:pb-5 3xl:pb-6 pt-3.5 sm:pt-0.5 lg:pt-1 px-4 sm:px-0" : "pt-3.5 lg:pt-4 xl:pt-5 3xl:pt-7 px-4 sm:px-0"
      }, item.id))
    })
  });
};

/* harmony default export */ const collection_block = (CollectionBlock);

/***/ }),

/***/ 8344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ fetchBestSellerProducts),
/* harmony export */   "D": () => (/* binding */ useBestSellerProductsQuery)
/* harmony export */ });
/* harmony import */ var _framework_utils_https__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7790);
/* harmony import */ var _framework_utils_api_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3833);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2585);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);



const fetchBestSellerProducts = async ({
  queryKey
}) => {
  const [_key, _params] = queryKey;
  const {
    data
  } = await _framework_utils_https__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .Z.get(_framework_utils_api_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.RECENTLY_VIEWED */ .P.RECENTLY_VIEWED);
  return data.data[0];
};
const useBestSellerProductsQuery = options => {
  return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([_framework_utils_api_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.RECENTLY_VIEWED */ .P.RECENTLY_VIEWED, options], fetchBestSellerProducts);
};

/***/ })

};
;