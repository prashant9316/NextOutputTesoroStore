"use strict";
exports.id = 5101;
exports.ids = [5101];
exports.modules = {

/***/ 6628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);






 // import { useUI } from "@contexts/ui.context";
// import usePrice from "@framework/product/use-price";
// import { Product } from "@framework/types";

const AddToCartButton = ({
  setAddToCart,
  addToCart
}) => {
  return (
    /*#__PURE__*/
    // <Tooltip message="add to cart">
    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
      className: "w-auto lg:w-3/5 group relative flex rounded-lg items-center py-2 px-2 lg:py-1 lg:px-6 mx-auto text-center bg-[#FFE583] stroke-[black] hover:stroke-[white] transition ease-in-out duration-300 shadow-navigation hover:bg-heading hover:text-white transform lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-y-0",
      type: "button",
      onClick: () => {
        setAddToCart(!addToCart);
      },
      style: {
        fontWeight: 'bold',
        // border: '1px solid indigo',
        lineHeight: '4px',
        fontSize: '12px'
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "text-sm font-bold text-center w-full",
        children: addToCart ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
          children: "Added!"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "for-desktop text-xs p-0 m-0",
            children: "Add To Cart"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "for-mobile",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "20",
              height: "20",
              viewBox: "0 0 24 24",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                className: "",
                fill: "none",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                  d: "M12.5 21H8.574a3 3 0 0 1-2.965-2.544l-1.255-8.152A2 2 0 0 1 6.331 8H17.67a2 2 0 0 1 1.977 2.304l-.263 1.708M16 19h6m-3-3v6"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                  d: "M9 11V6a3 3 0 0 1 6 0v5"
                })]
              })
            })
          })]
        })
      })
    }) // </Tooltip>

  );
};

const ProductCard = ({
  product,
  className = "",
  contactClassName = "",
  imageContentClassName = "",
  variant = "list",
  imgWidth = 300,
  // imgHeight = 300,
  imgLoading
}) => {
  var _product$image$;

  const {
    0: favorite,
    1: setFavorite
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    0: addToCart,
    1: setAddToCart
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(); // const { 
  // 	// openModal, 
  // 	setModalView, setModalData } = useUI();

  const placeholderImage = `/assets/placeholder/products/product-${variant}.svg`;
  const discount = product.prices.price - product.prices.originalPrice;
  const price = `₹${product.prices.price}/-`;
  const basePrice = `₹${product.prices.originalPrice}/-`;

  function handlePopupView() {
    // setModalData({ data: product });
    // setModalView("PRODUCT_VIEW");
    // return openModal();
    router.push(`/products/${product.slug}`);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("group overflow-hidden flex rounded-md cursor-pointer text-left", {
      "pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1": variant === "grid",
      "pe-0 md:pb-1 flex-col items-start bg-white": variant === "gridSlim",
      "items-center bg-transparent border border-gray-100 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-listProduct": variant === "listSmall",
      "flex-row items-center transition-transform ease-linear bg-gray-200 pe-2 lg:pe-3 2xl:pe-4": variant === "list"
    }, className),
    onClick: handlePopupView,
    role: "button",
    title: product === null || product === void 0 ? void 0 : product.title.en,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex relative", {
        "mb-3 md:mb-3.5": variant === "grid",
        "mb-3 md:mb-3.5 pb-0": variant === "gridSlim",
        "flex-shrink-0 w-32 sm:w-44 md:w-36 lg:w-44": variant === "listSmall"
      }, imageContentClassName),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__.default, {
        src: (_product$image$ = product === null || product === void 0 ? void 0 : product.image[0]) !== null && _product$image$ !== void 0 ? _product$image$ : placeholderImage,
        width: imgWidth,
        height: imgWidth,
        loading: imgLoading,
        alt: (product === null || product === void 0 ? void 0 : product.title.en) || "Product Image",
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("bg-gray-300 hover:hidden object-cover rounded-xl aspect-square", {
          "w-full rounded-md ": variant === "grid",
          "rounded-md transition duration-150 ease-linear transform group-hover:scale-105": variant === "gridSlim",
          "rounded-s-md transition duration-200 ease-linear transform group-hover:scale-105": variant === "list"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "absolute top-2 right-2 p-1",
        style: {
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 1)',
          border: favorite ? `1px solid orange` : '1px solid black'
        },
        onClick: () => {
          setFavorite(!favorite);
        },
        children: favorite ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 256 256",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
              fill: "orange",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M232 94c0 66-104 122-104 122S24 160 24 94a54 54 0 0 1 54-54c22.59 0 41.94 12.31 50 32c8.06-19.69 27.41-32 50-32a54 54 0 0 1 54 54Z",
                opacity: ".2"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M178 32c-20.65 0-38.73 8.88-50 23.89C116.73 40.88 98.65 32 78 32a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 220.66 240 164 240 94a62.07 62.07 0 0 0-62-62Zm-50 174.8C109.74 196.16 32 147.69 32 94a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8Z"
              })]
            })
          })
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 256 256",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
              stroke: "1",
              fill: "black",
              d: "M178 28c-20.09 0-37.92 7.93-50 21.56C115.92 35.93 98.09 28 78 28a66.08 66.08 0 0 0-66 66c0 72.34 105.81 130.14 110.31 132.57a12 12 0 0 0 11.38 0C138.19 224.14 244 166.34 244 94a66.08 66.08 0 0 0-66-66Zm-5.49 142.36a328.69 328.69 0 0 1-44.51 31.8a328.69 328.69 0 0 1-44.51-31.8C61.82 151.77 36 123.42 36 94a42 42 0 0 1 42-42c17.8 0 32.7 9.4 38.89 24.54a12 12 0 0 0 22.22 0C145.3 61.4 160.2 52 178 52a42 42 0 0 1 42 42c0 29.42-25.82 57.77-47.49 76.36Z"
            })
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "overflow-hidden flex justify-center  absolute bottom-3.5 lg:bottom-5 p-2 w-full",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AddToCartButton, {
          setAddToCart: setAddToCart,
          addToCart: addToCart
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("w-full overflow-hidden", {
        "ps-0 lg:ps-2.5 xl:ps-3 pe-2 xl:pe-2": variant === "grid",
        "ps-0": variant === "gridSlim",
        "px-4 lg:px-4 2xl:px-2": variant === "listSmall"
      }, contactClassName),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-heading font-semibold truncate", {
          "text-sm md:text-base": variant === "grid",
          "md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg": variant === "gridSlim",
          "text-sm sm:text-base pb-0": variant === "listSmall",
          "text-sm sm:text-base md:text-sm lg:text-base xl:text-lg md:mb-1": variant === "list"
        }),
        style: {
          fontFamily: 'Hap'
        },
        children: product === null || product === void 0 ? void 0 : product.title.en
      }), (product === null || product === void 0 ? void 0 : product.description) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate",
        style: {
          fontFamily: 'Hap'
        },
        children: product === null || product === void 0 ? void 0 : product.description.en
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `text-heading font-semibold text-sm sm:text-base mt-1.5 space-s-2 ${variant === "grid" ? "lg:text-lg lg:mt-2.5" : "sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3"}`,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          className: "inline-block",
          style: {
            fontFamily: 'Hap'
          },
          children: price
        }), discount && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("del", {
          className: "sm:text-base font-normal text-red-600",
          style: {
            fontFamily: 'Hap'
          },
          children: basePrice
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-center justify-center flex mt-2"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);

/***/ }),

/***/ 9761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ product_feed_loader)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react-content-loader"
var external_react_content_loader_ = __webpack_require__(9081);
var external_react_content_loader_default = /*#__PURE__*/__webpack_require__.n(external_react_content_loader_);
;// CONCATENATED MODULE: ./src/components/ui/loaders/product-card-loader.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const ProductCardLoader = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_content_loader_default()), _objectSpread(_objectSpread({
  speed: 2,
  width: 334,
  height: 545,
  viewBox: "0 0 334 545",
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb",
  className: "w-full h-auto"
}, props), {}, {
  children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "15",
    y: "453",
    rx: "3",
    ry: "3",
    width: "180",
    height: "8"
  }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "15",
    y: "482",
    rx: "3",
    ry: "3",
    width: "280",
    height: "6"
  }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "15",
    y: "515",
    rx: "3",
    ry: "3",
    width: "80",
    height: "8"
  }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "0",
    y: "0",
    rx: "6",
    ry: "6",
    width: "334",
    height: "430"
  })]
}));

/* harmony default export */ const product_card_loader = (ProductCardLoader);
;// CONCATENATED MODULE: ./src/components/ui/loaders/product-feed-loader.tsx




const ProductFeedLoader = ({
  limit = 5,
  uniqueKey = "product"
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: Array.from({
      length: limit
    }).map((_, idx) => /*#__PURE__*/jsx_runtime_.jsx(product_card_loader, {
      uniqueKey: `${uniqueKey}-${idx}`
    }, idx))
  });
};

/* harmony default export */ const product_feed_loader = (ProductFeedLoader);

/***/ })

};
;