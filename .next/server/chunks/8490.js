"use strict";
exports.id = 8490;
exports.ids = [8490];
exports.modules = {

/***/ 8470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3407);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var _utils_use_window_size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2558);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9356);
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_reveal__WEBPACK_IMPORTED_MODULE_5__);








function getImage(deviceWidth, imgObj) {
  return deviceWidth < 480 ? imgObj.mobile : imgObj.desktop;
} // function getImage2 (deviceWidth: number, imgObj: any){
//   return deviceWidth < 480 ? imgObj.mobileImageRef: imgObj.imageRef;
// }


const BannerCard = ({
  banner,
  className,
  variant = 'rounded',
  effectActive = false,
  classNameInner,
  href
}) => {
  const {
    width
  } = (0,_utils_use_window_size__WEBPACK_IMPORTED_MODULE_3__/* .useWindowSize */ .i)();
  const {
    title,
    image
  } = banner;
  const selectedImage = getImage(width, image); // const selectedImage = getImage2(width, image);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('mx-auto', className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      href: href,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('h-full group flex justify-center relative overflow-hidden', classNameInner),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__.default, {
        src: selectedImage.url,
        width: selectedImage.width,
        height: selectedImage.height,
        alt: title,
        unoptimized: true,
        quality: 100,
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('bg-gray-300 object-cover w-full', {
          'rounded-md': variant === 'rounded'
        })
      }), effectActive && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "absolute top-0 -start-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_reveal__WEBPACK_IMPORTED_MODULE_5___default()), {
        delay: 2000,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
          type: "button",
          className: "rounded-md drop-shadow-lg border-0 cursor-pointer absolute bottom-[10%] bg-gray-300 hover:bg-gray-150 text-[orange]  px-5 py-2 text-lg font-semibold align-bottom",
          children: "Shop Now"
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerCard);

/***/ }),

/***/ 172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3407);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var _components_ui_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7077);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9583);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);









const Card = ({
  item,
  variant = "circle",
  size = "small",
  effectActive = false,
  href
}) => {
  const {
    name,
    image
  } = item !== null && item !== void 0 ? item : {};
  const imageSize = size === "small" && 180 || size === "medium" && 198;
  const placeholderImage = `/assets/placeholder/card-${size}.svg`;
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)("common");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: href,
    className: "group flex justify-center text-center flex-col",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: `relative inline-flex mb-3.5 md:mb-4 lg:mb-5 xl:mb-6 mx-auto ${variant === "rounded" ? "rounded-md" : "rounded-full"}`,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__.default, {
          src: image !== null && image !== void 0 ? image : placeholderImage,
          alt: name.en || t("text-card-thumbnail"),
          width: imageSize,
          height: imageSize,
          quality: 100,
          className: `object-cover bg-gray-300 ${variant === "rounded" ? "rounded-md" : "rounded-full"}`
        })
      }), effectActive === true && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: `absolute top left bg-black w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-30 ${variant === "rounded" ? "rounded-md" : "rounded-full"}`
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "absolute top left h-full w-full flex items-center justify-center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__/* .FaLink */ .gjK, {
            className: "text-white text-base sm:text-xl lg:text-2xl xl:text-3xl transform opacity-0 scale-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100"
          })
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_text__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
      variant: "heading",
      className: "capitalize",
      style: {
        fontFamily: 'Hap'
      },
      children: name.en
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ 231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NewArrivalsProductFeed)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_products_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8593);
/* harmony import */ var _framework_product_get_all_new_arrival_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(848);



function NewArrivalsProductFeed() {
  const {
    data,
    isLoading,
    error
  } = (0,_framework_product_get_all_new_arrival_products__WEBPACK_IMPORTED_MODULE_2__/* .useNewArrivalProductsQuery */ .l)({
    limit: 10
  }); // const products = data?.productRef;

  console.log("new arrival products 1: ", data);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_products_block__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    sectionHeading: "text-new-arrivals",
    products: data === null || data === void 0 ? void 0 : data.productRef,
    loading: isLoading,
    error: error === null || error === void 0 ? void 0 : error.message,
    uniqueKey: "new-arrivals"
  });
}

/***/ }),

/***/ 8593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8092);
/* harmony import */ var _components_product_product_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6628);
/* harmony import */ var _components_ui_loaders_product_feed_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9761);
/* harmony import */ var _components_ui_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3158);
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9356);
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_reveal__WEBPACK_IMPORTED_MODULE_6__);





 // import { Product } from "@framework/types";




const ProductsBlock = ({
  sectionHeading,
  categorySlug,
  className = "mb-9 md:mb-9 lg:mb-10 xl:mb-12 for-desktop",
  products,
  loading,
  error,
  uniqueKey
}) => {
  console.log("in productblock:");
  console.log(products);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: className,
    style: {
      maxWidth: '80vw',
      margin: 'auto',
      borderRadius: '12px',
      padding: '10px',
      marginBottom: '5vh'
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_section_header__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      sectionHeading: sectionHeading,
      categorySlug: categorySlug
    }), error ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_alert__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
      message: error
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_reveal__WEBPACK_IMPORTED_MODULE_6__.Fade, {
        bottom: true,
        children: loading && !(products !== null && products !== void 0 && products.length) ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-4 md:gap-x-6 xl:gap-x-8 gap-y-3 xl:gap-y-5 2xl:gap-y-8",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loaders_product_feed_loader__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
            limit: 5,
            uniqueKey: uniqueKey
          })
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-4 md:gap-x-6 xl:gap-x-8 gap-y-3 xl:gap-y-5 2xl:gap-y-8",
          children: products === null || products === void 0 ? void 0 : products.map(product => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_product_card__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
            product: product,
            imgWidth: 340,
            imgHeight: 440,
            variant: "grid"
          }, `product--key${product._id}`))
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsBlock);

/***/ }),

/***/ 5916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ fetchFlashSaleProducts),
/* harmony export */   "t": () => (/* binding */ useFlashSaleProductsQuery)
/* harmony export */ });
/* harmony import */ var _framework_utils_https__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7790);
/* harmony import */ var _framework_utils_api_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3833);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2585);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);



const fetchFlashSaleProducts = async ({
  queryKey
}) => {
  const [_key, _params] = queryKey;
  const {
    data
  } = await _framework_utils_https__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .Z.get(_framework_utils_api_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.FLASH_SALE */ .P.FLASH_SALE);
  return data.data;
};
const useFlashSaleProductsQuery = options => {
  return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([_framework_utils_api_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.FLASH_SALE */ .P.FLASH_SALE, options], fetchFlashSaleProducts);
};

/***/ }),

/***/ 9446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "yV": () => (/* binding */ homeOneBanner),
/* harmony export */   "GT": () => (/* binding */ homeTwoHeroBanner),
/* harmony export */   "HX": () => (/* binding */ homeThreeBanner),
/* harmony export */   "HQ": () => (/* binding */ homeThreeMasonryBanner),
/* harmony export */   "rw": () => (/* binding */ bannerGrid),
/* harmony export */   "q6": () => (/* binding */ promotionBanner),
/* harmony export */   "C2": () => (/* binding */ promotionBannerTwo),
/* harmony export */   "I3": () => (/* binding */ bannerDataOne),
/* harmony export */   "Rn": () => (/* binding */ bannerDataTwo),
/* harmony export */   "CS": () => (/* binding */ homeThreeProductsBanner),
/* harmony export */   "$8": () => (/* binding */ homeFourBanner),
/* harmony export */   "D1": () => (/* binding */ homeFourGridBanners),
/* harmony export */   "RL": () => (/* binding */ homeFiveBanner)
/* harmony export */ });
/* unused harmony exports homeOneHeroBanner, homeSixHeroImages, homeSixCoupons, saleBannerGrid, saleBannerWithProducts */
const homeOneBanner = {
  id: 1,
  title: "Holiday Offers",
  slug: "holiday-offers",
  image: {
    mobile: {
      url: "/assets/images/new-banner/banner.jpg",
      width: 450,
      height: 450
    },
    desktop: {
      url: "/assets/images/banners/About-Us-1.png",
      width: 1800,
      height: 500
    }
  }
};
const homeOneHeroBanner = [{
  id: 1,
  title: "winter collection",
  slug: "winter-collection",
  image: {
    mobile: {
      url: "/assets/images/banners/banner1-mobile.png",
      width: 480,
      height: 500
    },
    desktop: {
      url: "/assets/images/banners/banner1.png",
      width: 1800,
      height: 800
    }
  }
}, {
  id: 2,
  title: "gift collection",
  slug: "gift-collection",
  image: {
    mobile: {
      url: "/assets/images/banners/banner2.png",
      width: 480,
      height: 500
    },
    desktop: {
      url: "/assets/images/banners/banner2.png",
      width: 1800,
      height: 800
    }
  }
}, {
  id: 3,
  title: "party collection",
  slug: "party-collection",
  image: {
    mobile: {
      url: "/assets/images/banners/banner3.png",
      width: 480,
      height: 500
    },
    desktop: {
      url: "/assets/images/banners/banner3.png",
      width: 1800,
      height: 800
    }
  }
}, {
  id: 4,
  title: "another collection",
  slug: "another-collection",
  image: {
    mobile: {
      url: "/assets/images/banners/banner4.png",
      width: 480,
      height: 500
    },
    desktop: {
      url: "/assets/images/banners/banner4.png",
      width: 1800,
      height: 800
    }
  }
}];
const homeTwoHeroBanner = [{
  id: 1,
  title: "winter collection",
  slug: "winter-collection",
  image: {
    mobile: {
      url: "/assets/images/hero/two/banner-mobile-1.jpg",
      width: 450,
      height: 275
    },
    desktop: {
      url: "/assets/images/hero/two/banner-1.jpg",
      width: 1450,
      height: 800
    }
  }
}, {
  id: 2,
  title: "gift collection",
  slug: "gift-collection",
  image: {
    mobile: {
      url: "/assets/images/hero/two/banner-mobile-2.jpg",
      width: 450,
      height: 275
    },
    desktop: {
      url: "/assets/images/hero/two/banner-2.jpg",
      width: 1450,
      height: 800
    }
  }
}, {
  id: 3,
  title: "party collection",
  slug: "party-collection",
  image: {
    mobile: {
      url: "/assets/images/hero/two/banner-mobile-3.jpg",
      width: 450,
      height: 275
    },
    desktop: {
      url: "/assets/images/hero/two/banner-3.jpg",
      width: 1450,
      height: 800
    }
  }
}];
const homeThreeBanner = [{
  id: 1,
  title: "Winter Collection of Kid Items",
  slug: "winter-collection",
  image: {
    mobile: {
      url: "/assets/images/banner/banner-mobile-3.jpg",
      width: 450,
      height: 180
    },
    desktop: {
      url: "/assets/images/banner/banner-3.jpg",
      width: 1800,
      height: 570
    }
  }
}, {
  id: 2,
  title: "Offer Off Everything",
  slug: "offer-everything",
  image: {
    mobile: {
      url: "/assets/images/banner/banner-mobile-4.jpg",
      width: 450,
      height: 130
    },
    desktop: {
      url: "/assets/images/banner/banner-4.jpg",
      width: 1800,
      height: 420
    }
  }
}];
const homeThreeMasonryBanner = [{
  id: 1,
  title: "Men's Collection",
  slug: "mens-collection",
  image: {
    mobile: {
      url: "/assets/images/banner/masonry/banner-mobile-1.jpg",
      width: 470,
      height: 232
    },
    desktop: {
      url: "/assets/images/banner/masonry/banner-1.jpg",
      width: 1078,
      height: 425
    }
  },
  type: "medium"
}, {
  id: 2,
  title: "New Sports",
  slug: "new-sports",
  image: {
    mobile: {
      url: "/assets/images/banner/masonry/banner-mobile-2.jpg",
      width: 232,
      height: 232
    },
    desktop: {
      url: "/assets/images/banner/masonry/banner-2.jpg",
      width: 425,
      height: 425
    }
  },
  type: "small"
}, {
  id: 3,
  title: "Dress Women",
  slug: "dress-women",
  image: {
    mobile: {
      url: "/assets/images/banner/masonry/banner-mobile-3.jpg",
      width: 232,
      height: 232
    },
    desktop: {
      url: "/assets/images/banner/masonry/banner-3.jpg",
      width: 425,
      height: 425
    }
  },
  type: "small"
}, {
  id: 4,
  title: "Exclusive Sunglasses",
  slug: "exclusive-sunglasses",
  image: {
    mobile: {
      url: "/assets/images/banner/masonry/banner-mobile-4.jpg",
      width: 232,
      height: 232
    },
    desktop: {
      url: "/assets/images/banner/masonry/banner-4.jpg",
      width: 425,
      height: 425
    }
  },
  type: "small"
}, {
  id: 5,
  title: "Product Coupons",
  slug: "product-coupons",
  image: {
    mobile: {
      url: "/assets/images/banner/masonry/banner-mobile-5.jpg",
      width: 232,
      height: 232
    },
    desktop: {
      url: "/assets/images/banner/masonry/banner-5.jpg",
      width: 425,
      height: 425
    }
  },
  type: "small"
}, {
  id: 6,
  title: "New Backpack",
  slug: "new-backpack",
  image: {
    mobile: {
      url: "/assets/images/banner/masonry/banner-mobile-6.jpg",
      width: 470,
      height: 232
    },
    desktop: {
      url: "/assets/images/banner/masonry/banner-6.jpg",
      width: 1078,
      height: 425
    }
  },
  type: "medium"
}];
const bannerGrid = [{
  id: 1,
  title: "Women T-Shirts Collection",
  slug: "t-shirts-collection",
  image: {
    mobile: {
      url: "/assets/images/banner/grid/banner-mobile-1.jpg",
      width: 450,
      height: 140
    },
    desktop: {
      url: "/assets/images/banner/grid/banner-1.jpg",
      width: 885,
      height: 430
    }
  },
  type: "small"
}, {
  id: 2,
  title: "Women Jins Collection",
  slug: "jins-collection",
  image: {
    mobile: {
      url: "/assets/images/banner/grid/banner-mobile-2.jpg",
      width: 450,
      height: 140
    },
    desktop: {
      url: "/assets/images/banner/grid/banner-2.jpg",
      width: 885,
      height: 430
    }
  },
  type: "small"
}, {
  id: 3,
  title: "New Backpack",
  slug: "new-backpack",
  image: {
    mobile: {
      url: "/assets/images/banner/grid/banner-mobile-3.jpg",
      width: 450,
      height: 140
    },
    desktop: {
      url: "/assets/images/banner/grid/banner-3.jpg",
      width: 1800,
      height: 430
    }
  },
  type: "large"
}];
const promotionBanner = [{
  id: 1,
  title: "Travel Baggage",
  slug: "travel-baggage",
  image: {
    mobile: {
      url: "/assets/images/banner/slider/mobile/banner-1.jpg",
      width: 450,
      height: 180
    },
    desktop: {
      url: "/assets/images/banner/slider/banner-1.jpg",
      width: 1440,
      height: 570
    }
  },
  type: "small"
}, {
  id: 2,
  title: "Women's Collection",
  slug: "women's-collection",
  image: {
    mobile: {
      url: "/assets/images/banner/slider/mobile/banner-2.jpg",
      width: 450,
      height: 180
    },
    desktop: {
      url: "/assets/images/banner/slider/banner-2.jpg",
      width: 1440,
      height: 570
    }
  },
  type: "small"
}, {
  id: 3,
  title: "Winter Collection",
  slug: "winter-collection",
  image: {
    mobile: {
      url: "/assets/images/banner/slider/mobile/banner-3.jpg",
      width: 450,
      height: 180
    },
    desktop: {
      url: "/assets/images/banner/slider/banner-3.jpg",
      width: 1440,
      height: 570
    }
  },
  type: "large"
}];
const promotionBannerTwo = [{
  id: 1,
  title: "Men's Collection",
  slug: "men's-collection",
  image: {
    mobile: {
      url: "/assets/images/banner/small/banner-mobile-1.jpg",
      width: 450,
      height: 150
    },
    desktop: {
      url: "/assets/images/banner/small/banner-1.jpg",
      width: 580,
      height: 360
    }
  }
}, {
  id: 2,
  title: "Women's Collection",
  slug: "women's-collection",
  image: {
    mobile: {
      url: "/assets/images/banner/small/banner-mobile-2.jpg",
      width: 450,
      height: 150
    },
    desktop: {
      url: "/assets/images/banner/small/banner-2.jpg",
      width: 580,
      height: 360
    }
  }
}, {
  id: 3,
  title: "Kid's Collection",
  slug: "kid's-collection",
  image: {
    mobile: {
      url: "/assets/images/banner/small/banner-mobile-3.jpg",
      width: 450,
      height: 150
    },
    desktop: {
      url: "/assets/images/banner/small/banner-3.jpg",
      width: 580,
      height: 360
    }
  }
}];
const bannerDataOne = [{
  id: 1,
  title: "Men's Collection",
  slug: "men's-collection",
  image: {
    mobile: {
      url: "/assets/images/banner/masonry/banner-mobile-1.jpg",
      width: 470,
      height: 232
    },
    desktop: {
      url: "/assets/images/banner/masonry/banner-1.jpg",
      width: 1078,
      height: 425
    }
  },
  type: "medium"
}, {
  id: 2,
  title: "New Sports",
  slug: "new-sports",
  image: {
    mobile: {
      url: "/assets/images/banner/masonry/banner-mobile-2.jpg",
      width: 232,
      height: 232
    },
    desktop: {
      url: "/assets/images/banner/masonry/banner-2.jpg",
      width: 425,
      height: 425
    }
  },
  type: "small"
}, {
  id: 3,
  title: "Dress Women",
  slug: "dress-women",
  image: {
    mobile: {
      url: "/assets/images/banner/masonry/banner-mobile-3.jpg",
      width: 232,
      height: 232
    },
    desktop: {
      url: "/assets/images/banner/masonry/banner-3.jpg",
      width: 425,
      height: 425
    }
  },
  type: "small"
}];
const bannerDataTwo = [{
  id: 1,
  title: "Exclusive Sunglasses",
  slug: "exclusive-sunglasses",
  image: {
    mobile: {
      url: "/assets/images/banner/masonry/banner-mobile-4.jpg",
      width: 232,
      height: 232
    },
    desktop: {
      url: "/assets/images/banner/masonry/banner-4.jpg",
      width: 425,
      height: 425
    }
  },
  type: "small"
}, {
  id: 2,
  title: "Product Coupons",
  slug: "product-coupons",
  image: {
    mobile: {
      url: "/assets/images/banner/masonry/banner-mobile-5.jpg",
      width: 232,
      height: 232
    },
    desktop: {
      url: "/assets/images/banner/masonry/banner-5.jpg",
      width: 425,
      height: 425
    }
  },
  type: "small"
}, {
  id: 3,
  title: "New Backpack",
  slug: "new-backpack",
  image: {
    mobile: {
      url: "/assets/images/banner/masonry/banner-mobile-6.jpg",
      width: 470,
      height: 232
    },
    desktop: {
      url: "/assets/images/banner/masonry/banner-6.jpg",
      width: 1078,
      height: 425
    }
  },
  type: "medium"
}];
const homeThreeProductsBanner = [{
  id: 1,
  title: "Sale Offer",
  slug: "sale-offer",
  image: {
    mobile: {
      url: "/assets/images/banner/banner-sale-offer.jpg",
      width: 430,
      height: 600
    },
    desktop: {
      url: "/assets/images/banner/banner-sale-offer.jpg",
      width: 430,
      height: 600
    }
  }
}, {
  id: 2,
  title: "New Sports",
  slug: "new-sports",
  image: {
    mobile: {
      url: "/assets/images/banner/banner-sale-offer-reverse.jpg",
      width: 430,
      height: 600
    },
    desktop: {
      url: "/assets/images/banner/banner-sale-offer-reverse.jpg",
      width: 430,
      height: 600
    }
  }
}];
const homeFourBanner = [{
  id: 1,
  title: "New Backpack",
  slug: "new-backpack",
  image: {
    mobile: {
      url: "/assets/images/banner/banner-mobile-6.png",
      width: 450,
      height: 180
    },
    desktop: {
      url: "/assets/images/banner/banner-6.jpg",
      width: 1800,
      height: 570
    }
  }
}, {
  id: 2,
  title: "Men's Collection",
  slug: "men's-collection",
  image: {
    mobile: {
      url: "/assets/images/banner/banner-mobile-5.png",
      width: 480,
      height: 180
    },
    desktop: {
      url: "/assets/images/banner/banner-5.jpg",
      width: 1800,
      height: 570
    }
  }
}, {
  id: 3,
  title: "Offer Off Everything",
  slug: "offer-everything",
  image: {
    mobile: {
      url: "/assets/images/banner/banner-mobile-4.jpg",
      width: 450,
      height: 130
    },
    desktop: {
      url: "/assets/images/banner/banner-4.jpg",
      width: 1800,
      height: 420
    }
  }
}];
const homeFourGridBanners = [{
  id: 1,
  title: "On Selected Items",
  slug: "selected-items",
  image: {
    mobile: {
      url: "/assets/images/banner/grid/small/banner-mobile-1.jpg",
      width: 470,
      height: 190
    },
    desktop: {
      url: "/assets/images/banner/grid/small/banner-1.jpg",
      width: 980,
      height: 340
    }
  },
  type: "large"
}, {
  id: 2,
  title: "Casual Top",
  slug: "casual-top",
  image: {
    mobile: {
      url: "/assets/images/banner/grid/small/banner-mobile-2.jpg",
      width: 232,
      height: 190
    },
    desktop: {
      url: "/assets/images/banner/grid/small/banner-2.jpg",
      width: 480,
      height: 340
    }
  },
  type: "small"
}, {
  id: 3,
  title: "Branded Top",
  slug: "branded-top",
  image: {
    mobile: {
      url: "/assets/images/banner/grid/small/banner-mobile-3.jpg",
      width: 232,
      height: 190
    },
    desktop: {
      url: "/assets/images/banner/grid/small/banner-3.jpg",
      width: 480,
      height: 340
    }
  },
  type: "small"
}];
const homeFiveBanner = {
  id: 1,
  title: "Winter Collection of Kid Items",
  slug: "winter-collection",
  image: {
    mobile: {
      url: "/assets/images/banner/banner-mobile-3.jpg",
      width: 450,
      height: 180
    },
    desktop: {
      url: "/assets/images/banner/banner-3.jpg",
      width: 1800,
      height: 570
    }
  }
};
const homeSixHeroImages = [{
  id: 1,
  title: "We picked every item with care you must try",
  slug: "winter-collection",
  image: {
    mobile: {
      url: "/assets/images/hero/banner-mobile-4.jpg",
      width: 690,
      height: 480
    },
    desktop: {
      url: "/assets/images/hero/banner-4.jpg",
      width: 1800,
      height: 800
    }
  }
}, {
  id: 2,
  title: "We picked every item with care you must try",
  slug: "winter-collection",
  image: {
    mobile: {
      url: "/assets/images/hero/banner-mobile-5.jpg",
      width: 690,
      height: 480
    },
    desktop: {
      url: "/assets/images/hero/banner-5.jpg",
      width: 1800,
      height: 800
    }
  }
}, {
  id: 3,
  title: "We picked every item with care you must try",
  slug: "winter-collection",
  image: {
    mobile: {
      url: "/assets/images/hero/banner-mobile-6.jpg",
      width: 690,
      height: 480
    },
    desktop: {
      url: "/assets/images/hero/banner-6.jpg",
      width: 1800,
      height: 800
    }
  }
}];
const homeSixCoupons = {
  id: 3,
  title: "We picked every item with care you must try",
  slug: "winter-collection",
  image: {
    mobile: {
      url: "/assets/images/banner/banner-mobile-7.jpg",
      width: 690,
      height: 300
    },
    desktop: {
      url: "/assets/images/banner/banner-7.jpg",
      width: 1800,
      height: 800
    }
  }
};
const saleBannerGrid = [{
  id: 1,
  title: "25% Discount on Selected Items",
  slug: "t-shirts-collection",
  image: {
    mobile: {
      url: "/assets/images/banner/grid/banner-mobile-4.jpg",
      width: 690,
      height: 360
    },
    desktop: {
      url: "/assets/images/banner/grid/banner-4.png",
      width: 885,
      height: 430
    }
  }
}, {
  id: 2,
  title: "30% Discount on Kids Items",
  slug: "jins-collection",
  image: {
    mobile: {
      url: "/assets/images/banner/grid/banner-mobile-5.jpg",
      width: 690,
      height: 360
    },
    desktop: {
      url: "/assets/images/banner/grid/banner-5.png",
      width: 885,
      height: 430
    }
  }
}];
const saleBannerWithProducts = [{
  id: 1,
  title: "Sale Offer",
  slug: "sale-offer",
  image: {
    mobile: {
      url: "/assets/images/banner/banner-sale-offer-half.jpg",
      width: 1770,
      height: 780
    },
    desktop: {
      url: "/assets/images/banner/banner-sale-offer-half.jpg",
      width: 1770,
      height: 780
    }
  }
}, {
  id: 2,
  title: "New Sports",
  slug: "new-sports",
  image: {
    mobile: {
      url: "/assets/images/banner/banner-sale-offer-half.jpg",
      width: 1770,
      height: 780
    },
    desktop: {
      url: "/assets/images/banner/banner-sale-offer-half.jpg",
      width: 1770,
      height: 780
    }
  }
}];

/***/ })

};
;