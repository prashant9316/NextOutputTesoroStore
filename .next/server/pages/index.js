"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 9597:
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
// EXTERNAL MODULE: ./src/components/ui/container.tsx
var container = __webpack_require__(9691);
// EXTERNAL MODULE: ./src/containers/collection-block.tsx + 1 modules
var collection_block = __webpack_require__(1530);
// EXTERNAL MODULE: ./src/components/ui/carousel/carousel.tsx
var carousel = __webpack_require__(7956);
// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__(2156);
// EXTERNAL MODULE: ./src/utils/routes.ts
var routes = __webpack_require__(9524);
// EXTERNAL MODULE: ./src/framework/basic-rest/static/banner.ts
var banner = __webpack_require__(9446);
// EXTERNAL MODULE: ./src/components/ui/link.tsx
var ui_link = __webpack_require__(3407);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react-reveal"
var external_react_reveal_ = __webpack_require__(9356);
;// CONCATENATED MODULE: ./src/containers/BannerCard.tsx


 // import Image from 'next/image';

// import { useWindowSize } from '@utils/use-window-size';


const colors = ['bg-[#f786be]', //pink
'bg-blue-400', //lavendar
'bg-yellow-300', //light yellow
'bg-[#50c79b]', // mint
'bg-[orange]', 'bg-green-500'];

// function getImage(deviceWidth: number, imgObj: any) {
//   return deviceWidth < 480 ? imgObj.mobile : imgObj.desktop;
// }
const BannerCard2 = ({
  idx,
  // banner, 
  className,
  // variant='rounded',
  // effectActive=false,
  classNameInner,
  href
}) => {
  // const {width} = useWindowSize();
  // const {title, image} = banner;
  // const selectedImage = getImage(width, image);
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_reveal_.Fade, {
    right: true,
    delay: 1000,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: external_classnames_default()('mx-auto for-desktop', className),
      children: /*#__PURE__*/jsx_runtime_.jsx(ui_link/* default */.Z, {
        href: href,
        className: external_classnames_default()('h-[30vh] group flex justify-center relative overflow-hidden rounded-xl hover:drop-shadow-md', classNameInner),
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: colors[idx] + ' w-full h-full justify-center',
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: "text-xl font-semibold text-white relative left-10 top-10 justify-center",
            style: {
              fontFamily: 'Hap'
            },
            children: ["Get 50% OFF ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " on Stationary", /*#__PURE__*/jsx_runtime_.jsx("br", {})]
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/assets/images/new-images/9bf3a904-574a-487d-b7aa-37aa48d04fb0.jpg",
            className: "rounded-xl absolute w-[40%] right-5 top-5 border-8 border-solid border-white",
            alt: ""
          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
            type: "button",
            className: "rounded-md drop-shadow-lg border-0 cursor-pointer absolute left-[17%] bottom-[10%] bg-gray-300 hover:bg-gray-150 text-[black]  px-5 py-2 text-lg font-semibold align-bottom",
            style: {
              fontFamily: 'Hap'
            },
            children: "Shop Now"
          })]
        })
      })
    })
  });
};

/* harmony default export */ const BannerCard = (BannerCard2);
;// CONCATENATED MODULE: ./src/containers/BannerCardMobile.tsx


 // import Image from 'next/image';

// import { useWindowSize } from '@utils/use-window-size';


const BannerCardMobile_colors = ['#f786be', //pink
'#60a5fa', //lavendar
'#fde047', //light yellow
'#50c79b', // mint
'orange', '#22c55e'];
const bgColors = ['bg-[#f786be]', //pink
'bg-blue-400', //lavendar
'bg-yellow-300', //light yellow
'bg-[#50c79b]', // mint
'bg-[orange]', 'bg-green-500'];

// function getImage(deviceWidth: number, imgObj: any) {
//   return deviceWidth < 480 ? imgObj.mobile : imgObj.desktop;
// }
const BannerCard2Mobile = ({
  idx,
  // banner, 
  className,
  // variant='rounded',
  // effectActive=false,
  classNameInner,
  href
}) => {
  // const {width} = useWindowSize();
  // const {title, image} = banner;
  // const selectedImage = getImage(width, image);
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_reveal_.Fade, {
    right: true,
    delay: 1000,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: external_classnames_default()('mx-auto for-mobile', className),
      children: /*#__PURE__*/jsx_runtime_.jsx(ui_link/* default */.Z, {
        href: href,
        className: external_classnames_default()('h-[30vh] group flex justify-center relative overflow-hidden rounded-xl hover:drop-shadow-md', classNameInner),
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: BannerCardMobile_colors[idx] + ' w-full h-full justify-center p-2',
          style: {
            backgroundImage: "url(/assets/images/new-images/9bf3a904-574a-487d-b7aa-37aa48d04fb0.jpg)",
            backgroundSize: '100% 100%',
            border: `15px ${BannerCardMobile_colors[idx]} solid`,
            borderRadius: '12%'
          },
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: "text-xl font-semibold text-black relative top-5 my-3 justify-center text-center",
            style: {
              fontFamily: 'Hap'
            },
            children: ["Get 50% OFF ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " on Stationary", /*#__PURE__*/jsx_runtime_.jsx("br", {})]
          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
            type: "button",
            className: `absolute bottom-10 left-[25%] rounded-md drop-shadow-lg border-0 cursor-pointer mx-auto ${bgColors[idx]} opacity-90 hover:opacity-100 hover:bg-gray-150 text-[black]  px-5 py-2 text-lg font-semibold align-bottom`,
            style: {
              fontFamily: 'Hap'
            },
            children: "Shop Now"
          })]
        })
      })
    })
  });
};

/* harmony default export */ const BannerCardMobile = (BannerCard2Mobile);
;// CONCATENATED MODULE: ./src/containers/banner-carousel-block.tsx


// import BannerCard from "@components/common/banner-card";






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
    slidesPerView: 1.5,
    spaceBetween: 12
  }
};

const BannerCarouselBlock = ({
  className = "mb-6 md:mb-6 lg:mb-8 pb-0.5 xl:pb-1.5"
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: className,
    children: /*#__PURE__*/jsx_runtime_.jsx(carousel/* default */.Z, {
      breakpoints: breakpoints,
      autoplay: {
        delay: 3000
      },
      children: banner/* promotionBannerTwo */.C2 === null || banner/* promotionBannerTwo */.C2 === void 0 ? void 0 : banner/* promotionBannerTwo.map */.C2.map((banner, idx) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.SwiperSlide, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(BannerCard, {
          idx: idx,
          banner: banner,
          href: `${routes/* ROUTES.COLLECTIONS */.Z.COLLECTIONS}/${banner.slug}`,
          effectActive: true
        }), /*#__PURE__*/jsx_runtime_.jsx(BannerCardMobile, {
          idx: idx,
          banner: banner,
          href: `${routes/* ROUTES.COLLECTIONS */.Z.COLLECTIONS}/${banner.slug}`,
          effectActive: true
        })]
      }, `promotion-banner-key-${banner === null || banner === void 0 ? void 0 : banner.id}`))
    })
  });
};

/* harmony default export */ const banner_carousel_block = (BannerCarouselBlock);
// EXTERNAL MODULE: ./src/components/common/subscription.tsx
var subscription = __webpack_require__(7181);
// EXTERNAL MODULE: ./src/components/common/banner-card.tsx
var banner_card = __webpack_require__(8470);
// EXTERNAL MODULE: ./src/framework/basic-rest/utils/https.ts
var https = __webpack_require__(7790);
// EXTERNAL MODULE: ./src/framework/basic-rest/utils/api-endpoints.ts
var api_endpoints = __webpack_require__(3833);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
;// CONCATENATED MODULE: ./src/framework/basic-rest/homepage/get-homepage-banners.ts


 // interface result {
//     data: HomepageBanner,
//     message: string;
// }

const fetchHomepageBanner = async () => {
  //   const [_key, _params] = queryKey;
  const {
    data: {
      data
    }
  } = await https/* default.get */.Z.get(api_endpoints/* API_ENDPOINTS.HOMEPAGE_BANNER */.P.HOMEPAGE_BANNER);
  console.log(data);
  return {
    banners: {
      data: data
    }
  };
};
const useHomePageBanner = options => {
  return (0,external_react_query_.useQuery)([api_endpoints/* API_ENDPOINTS.HOMEPAGE_BANNER */.P.HOMEPAGE_BANNER, options], fetchHomepageBanner);
};
;// CONCATENATED MODULE: ./src/containers/hero-block.tsx



 // import { homeOneHeroBanner as banners } from "@framework/static/banner";
// import { useWindowSize } from "@utils/use-window-size";
// import { ROUTES } from "@utils/routes";


const hero_block_breakpoints = {
  "1500": {
    slidesPerView: 1
  },
  "0": {
    slidesPerView: 1
  }
};

const HeroBlock = () => {
  const {
    data,
    isLoading,
    isError
  } = useHomePageBanner({});
  console.log(data);
  const bannerData = data === null || data === void 0 ? void 0 : data.banners.data[0].offerBlock.map(banner => {
    return {
      id: banner._id,
      title: '',
      slug: banner.offerLink,
      image: {
        mobile: {
          url: banner.imageRef,
          width: 480,
          height: 500
        },
        desktop: {
          url: banner.mobileImageRef,
          width: 1800,
          height: 800
        }
      }
    };
  }); // console.log(banners)

  console.log(isLoading);
  console.log(isError); // const { width } = useWindowSize();

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "heroBannerOne relative left-0 mt-[10vh] max-w-[1920px] mb-5 lg:mx-auto overflow-hidden ",
    style: {
      maxHeight: '95vh'
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(carousel/* default */.Z, {
      breakpoints: hero_block_breakpoints,
      centeredSlides: false,
      autoplay: {
        delay: 4000
      },
      className: "mx-0 max-w-[100vw]",
      buttonClassName: "hidden",
      pagination: {
        clickable: true
      },
      children: bannerData && bannerData.map(banner => /*#__PURE__*/jsx_runtime_.jsx(react_.SwiperSlide, {
        className: "carouselItem px-5 lg:px-0 h-[100vh] max-w-[100vw]",
        children: /*#__PURE__*/jsx_runtime_.jsx(banner_card/* default */.Z, {
          banner: banner,
          href: `${banner.slug}`
        })
      }, `banner--key-${banner === null || banner === void 0 ? void 0 : banner.id}`))
    })
  });
};

/* harmony default export */ const hero_block = (HeroBlock);
// EXTERNAL MODULE: ./src/containers/category-block.tsx + 1 modules
var category_block = __webpack_require__(5937);
// EXTERNAL MODULE: ./src/components/layout/layout.tsx + 24 modules
var layout = __webpack_require__(239);
// EXTERNAL MODULE: ./src/components/common/sale-with-progress.tsx + 2 modules
var sale_with_progress = __webpack_require__(3809);
// EXTERNAL MODULE: ./src/framework/basic-rest/product/get-all-flash-sale-products.tsx
var get_all_flash_sale_products = __webpack_require__(5916);
// EXTERNAL MODULE: ./src/components/ui/alert.tsx
var ui_alert = __webpack_require__(3158);
;// CONCATENATED MODULE: ./src/framework/basic-rest/product/get-offer-banner.tsx



const fetchOfferBanner = async ({
  queryKey
}) => {
  const [_key, _params] = queryKey;
  const {
    data
  } = await https/* default.get */.Z.get(api_endpoints/* API_ENDPOINTS.OFFER_BANNER */.P.OFFER_BANNER);
  const data1 = data.data;
  return data1;
};
const useOfferBanner = options => {
  return (0,external_react_query_.useQuery)([api_endpoints/* API_ENDPOINTS.OFFER_BANNER */.P.OFFER_BANNER, options], fetchOfferBanner);
};
;// CONCATENATED MODULE: ./src/components/product/feeds/flash-sale-product-feed.tsx





 // import { ROUTES } from "@utils/routes";




const flashSaleCarouselBreakpoint = {
  "1281": {
    slidesPerView: 1
  },
  "768": {
    slidesPerView: 2
  },
  "0": {
    slidesPerView: 1
  }
};

const getOfferBannerData = () => {
  const {
    data,
    isLoading,
    error
  } = useOfferBanner({});
  console.log("data in offer banenr");
  console.info(`isLoad: ${isLoading}`);
  console.info(`error: ${error}`);

  if (data != undefined) {
    const bannerdata = {
      id: data[0]._id,
      title: data[0].sectionTitle,
      slug: data[0].linkReference,
      image: {
        mobile: {
          url: data[0].offerBlock[0].mobileImageRef,
          width: 450,
          height: 150
        },
        desktop: {
          url: data[0].offerBlock[0].imageRef,
          width: 1190,
          height: 450
        }
      }
    };
    return bannerdata;
  } else {
    const banner = {
      id: 1,
      title: "something",
      slug: "/search",
      image: {
        mobile: {
          url: "https://tesorostoreuser.vercel.app/assets/images/founderspick/Tosoro_Buy1Get1Free.jpg",
          width: 450,
          height: 150
        },
        desktop: {
          url: "https://tesorostoreuser.vercel.app/assets/images/founderspick/Tosoro_Buy1Get1Free.jpg",
          width: 1190,
          height: 450
        }
      }
    };
    return banner;
  } // console.log(data)
  // console.log("Data after modification")
  // console.log(bannerdata)
  // return {
  // 	banner: bannerdata,
  // 	loading: isLoading,
  // 	error1: error
  // }

};

const FlashSaleBlock = ({
  className = "mb-12 lg:mb-14 xl:mb-7"
}) => {
  const banner = getOfferBannerData();
  const {
    data,
    isLoading,
    error
  } = (0,get_all_flash_sale_products/* useFlashSaleProductsQuery */.t)({});
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_reveal_.Fade, {
    left: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: external_classnames_default()(`grid grid-cols-1 xl:grid-cols-3 gap-y-12 lg:gap-y-14 xl:gap-y-0 xl:gap-x-7`, className),
      children: [/*#__PURE__*/jsx_runtime_.jsx(banner_card/* default */.Z, {
        banner: banner,
        href: banner.slug,
        className: "xl:h-full xl:col-span-2",
        effectActive: true
      }, `banner--key${banner.id}`), error ? /*#__PURE__*/jsx_runtime_.jsx(ui_alert/* default */.Z, {
        message: error === null || error === void 0 ? void 0 : error.message
      }) : /*#__PURE__*/jsx_runtime_.jsx(external_react_reveal_.Fade, {
        right: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(sale_with_progress/* default */.Z, {
          carouselBreakpoint: flashSaleCarouselBreakpoint,
          products: data === null || data === void 0 ? void 0 : data.productRef,
          loading: isLoading,
          className: "col-span-full xl:col-span-1 lg:mb-1 xl:mb-0"
        })
      })]
    })
  });
};

/* harmony default export */ const flash_sale_product_feed = (FlashSaleBlock);
// EXTERNAL MODULE: ./src/components/product/feeds/best-seller-product-feed.tsx
var best_seller_product_feed = __webpack_require__(2327);
// EXTERNAL MODULE: ./src/components/product/feeds/new-arrivals-product-feed.tsx
var new_arrivals_product_feed = __webpack_require__(231);
// EXTERNAL MODULE: external "react-query/hydration"
var hydration_ = __webpack_require__(9475);
// EXTERNAL MODULE: ./src/framework/basic-rest/category/get-all-categories.tsx
var get_all_categories = __webpack_require__(154);
// EXTERNAL MODULE: ./src/framework/basic-rest/product/get-all-best-seller-products.tsx
var get_all_best_seller_products = __webpack_require__(8344);
// EXTERNAL MODULE: ./src/framework/basic-rest/product/get-all-new-arrival-products.tsx
var get_all_new_arrival_products = __webpack_require__(848);
// EXTERNAL MODULE: ./src/framework/basic-rest/brand/get-all-brands.tsx
var get_all_brands = __webpack_require__(4022);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(3295);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./src/containers/SpecialSection.tsx





const data = [{
  title: 'Blog #1',
  subtitle: 'When the market ...',
  createdDate: '6th Sept',
  imgLink: '/assets/images/new-images/IMG_8488.jpg'
}, {
  title: 'Blog #2',
  subtitle: 'How we are supporting ...',
  createdDate: '7th Sept',
  imgLink: '/assets/images/new-images/IMG_8541.jpg'
} // {
//     title: 'Blog #1',
//     subtitle: 'When the market ...',
//     createdDate: '6th Sept',
//     imgLink: '/assets/images/new-images/IMG_8488.jpg'
// }
// {
//     title: 'Blog #3',
//     subtitle: 'When the market ...',
//     createdDate: '6th Sept',
//     imgLink: '/assets/images/instagram/4.jpg'
// },
// {
//     title: 'Blog #4',
//     subtitle: 'How we are supporting ...',
//     createdDate: '7th Sept',
//     imgLink: '/assets/images/instagram/4.jpg'
// }
];
function SpecialSection() {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_reveal_.Fade, {
      bottom: true,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "for-desktop grid grid-cols-1 lg:grid-cols-4 gap-x-16 px-16 my-2 drop-shadow-lg bg-[#F4769F]",
        style: {
          borderRadius: '20px'
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-span-4 text-center py-5 text-[white] text-4xl font-bold w-full",
          style: {
            fontFamily: 'Van'
          },
          children: "Blogs"
        }), data && data.map((item, idx) => /*#__PURE__*/jsx_runtime_.jsx(external_react_reveal_.Fade, {
          left: true,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "col-span-4 my-2 lg:col-span-2 rounded-xl hover:drop-shadow-xl drop-shadow-lg grid grid-cols-2",
            style: {
              // background: 'rgba(255, 165, 0, 0.8)',
              background: 'rgba(255, 255, 255, 1)'
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              style: {
                borderRadius: '12px'
              },
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                className: "p-5 hover:drop-shadow-lg -translate-x-10",
                src: item.imgLink,
                style: {
                  borderRadius: '12%'
                }
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "py-2 rounded-xl -translate-x-5",
              style: {// background: 'rgba(255, 165, 0, 0.8)',
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "text-xs text-[#F6C0C9] pt-5 text-left pb-0 mb-0",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "font-semibold pr-3",
                  children: item.createdDate
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
                className: "font-bold text-2xl text-black text-left pb-5",
                style: {
                  fontFamily: 'Hap'
                },
                children: item.title
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "text-justify text-sm pr-5 m-auto",
                style: {
                  fontFamily: 'Hap'
                },
                children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi ullam ut facere accusantium voluptatibus. Sed quibusdam, commodi rerum provident incidunt reprehenderit animi nam ..."
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "w-full flex justify-center",
                children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                  className: "rounded-3xl hover:drop-shadow-md font-bold bg-[#F6C0C9]  text-white px-3 py-1 mt-5",
                  children: "Read More ..."
                })
              })]
            })]
          }, idx)
        }))]
      })
    })
  });
}
;// CONCATENATED MODULE: ./src/containers/featuresIndexPage.tsx



const featuresIndexPage_data = [{
  id: 1,
  icon: "/assets/images/features/free-delivery.png",
  title: "Free Delivery",
  description: "Get Hassle Free Fast Delivery on every product. Buy Now!",
  color: 'bg-blue-100',
  textColor: 'text-blue-400'
}, {
  id: 2,
  icon: "/assets/images/features/made-with-love.png",
  title: "Made With Love",
  description: "Made with Love Description",
  color: 'bg-pink-100',
  textColor: 'text-pink-400'
}, {
  id: 3,
  icon: "/assets/images/features/handpicked.png",
  title: "Handpicked Brands",
  description: "Handpicked Brands",
  color: 'bg-green-100',
  textColor: 'text-green-400'
}, {
  id: 4,
  icon: "/assets/images/features/multiple-brands.png",
  title: "1000+ Brands",
  description: "More than 1000+ Brands to Shop from ",
  color: 'bg-[#fef9c3]',
  textColor: 'text-[orange]'
}];
const Feature = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "h-full pb-4 sm:max-w-xl md:max-w-full  lg:py-5 my-5",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "grid grid-cols-2 sm:grid-cols-4",
      children: featuresIndexPage_data && featuresIndexPage_data.map((item, idx) => /*#__PURE__*/jsx_runtime_.jsx(external_react_reveal_.Fade, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "cursor-pointer items-center max-w-md text-center align-center py-4 justify-center hover:-translate-y-[2px] hover:drop-shadow-md " + item.color,
          style: {// border: '1px solid gray',
            // borderRadius: '12px',
            // boxShadow: '1px 1px 1px 1px rgba(90, 90, 90, 0.2)'
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "px-1 flex items-center justify-center m-auto mb-4 rounded-full",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: item.icon,
              className: "w-[70%] m-auto",
              style: {
                backgroundBlendMode: 'multiply'
              }
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
            className: "mb-2 font-semibold xs:text-lg lg:text-xl leading-5 " + item.textColor,
            children: item.title
          })]
        }, idx)
      }, idx))
    })
  });
};
;// CONCATENATED MODULE: ./src/containers/BizMagic2.tsx







const showCaseProducts = [{
  img: '/assets/images/smallBiz/product-1.jpg',
  name: 'Raspberry + Champagne Marshmallows',
  price: '500'
}, {
  img: '/assets/images/smallBiz/product-2.jpg',
  name: 'Raspberry + Champagne Marshmallows',
  price: '600'
}, {
  img: '/assets/images/smallBiz/product-3.jpg',
  name: 'Raspberry + Champagne Marshmallows',
  price: '1500'
} // {
//     img: '/assets/images/new-images/01f1cee7-b377-4689-98a3-a6f3b0606acf.jpg',
//     name: 'Raspberry + Champagne Marshmallows',
//     price: '3000'
// },
// {
//     img: '/assets/images/new-images/17e765f2-58a0-47cd-ab7d-1d06ff512611.jpg',
//     name: 'Raspberry + Champagne Marshmallows',
//     price: '3000'
// }
];
function BizMagic2() {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "for-desktop flex w-full h-[80vh] my-10 pb-0 p-5 text-center items-center bg-[#d4d1f5] drop-shadow-md relative overflow-hidden",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: " w-[50%] ml-10 z-10",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_reveal_.Fade, {
          bottom: true,
          children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "z-10 w-full text-center text-5xl font-bold text-blue-500 drop-shadow-md mb-10",
            style: {
              fontFamily: 'Van'
            },
            children: "Small Biz Stars"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_reveal_.Fade, {
          bottom: true,
          delay: 100,
          children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "text-4xl font-bold",
            style: {
              fontFamily: 'Hap'
            },
            children: "Manvi & Tanisha | Quso Home"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_reveal_.Fade, {
          bottom: true,
          delay: 400,
          style: {
            fontFamily: 'Hap'
          },
          children: /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-sm my-5 w-[90%]",
            children: "Manvi & Tanisha run the beautifully homegrown decor brand Quoso which is a medley of quirkiness and sophistication, offering truly one of a kind range of products that would give your home a distinct personality. Extremely passionate about home interiors, they are set to win hearts with their fantastic collection!"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_reveal_.Zoom, {
          delay: 500,
          style: {
            fontFamily: 'Hap'
          },
          children: /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "text-black hover:bg-blue-400 bg-blue-300 rounded-xl py-2 px-5 drop-shadow hover:drop-shadow-xl mt-6",
            children: "Shop their Collection"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_reveal_.Fade, {
          bottom: true,
          delay: 1000,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex w-full mt-10 mx-auto justify-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "w-36 h-36 rounded-xl drop-shadow-md mx-3 mt-2",
              style: {
                background: `url(${showCaseProducts[0].img})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "w-36 h-36 rounded-xl drop-shadow-md mx-3 mt-2",
              style: {
                background: `url(${showCaseProducts[1].img})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "w-36 h-36 rounded-xl drop-shadow-md mx-3 mt-2",
              style: {
                background: `url(${showCaseProducts[2].img})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }
            })]
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        className: "absolute top-0 right-0 z-0",
        src: "/assets/images/smallBiz/Tosoo_meet.jpg",
        alt: ""
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_reveal_.Reveal, {
        effect: "fadeInUp",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "w-[45%] h-[100%] relative bottom-0"
        })
      })]
    })
  });
}
;// CONCATENATED MODULE: ./src/containers/BizMagic2Mobile.tsx







const BizMagic2Mobile_showCaseProducts = [{
  img: '/assets/images/smallBiz/product-1.jpg',
  name: 'Raspberry + Champagne Marshmallows',
  price: '500'
}, {
  img: '/assets/images/smallBiz/product-2.jpg',
  name: 'Raspberry + Champagne Marshmallows',
  price: '600'
}, {
  img: '/assets/images/smallBiz/product-3.jpg',
  name: 'Raspberry + Champagne Marshmallows',
  price: '1500'
} // {
//     img: '/assets/images/new-images/01f1cee7-b377-4689-98a3-a6f3b0606acf.jpg',
//     name: 'Raspberry + Champagne Marshmallows',
//     price: '3000'
// },
// {
//     img: '/assets/images/new-images/17e765f2-58a0-47cd-ab7d-1d06ff512611.jpg',
//     name: 'Raspberry + Champagne Marshmallows',
//     price: '3000'
// }
];
function BizMagic2Mobile() {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "w-full h-auto my-10 pb-0 text-center items-center bg-[#f3d4da] drop-shadow-md relative overflow-hidden for-mobile",
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        className: "top-1 mb-2 mt-5 m-auto w-[40%] z-0",
        src: "/assets/images/smallBiz/small.jpg",
        alt: ""
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "z-10",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_reveal_.Fade, {
          bottom: true,
          children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "z-10 w-full text-center text-2xl font-bold text-blue-500 drop-shadow-md mb-1",
            style: {
              fontFamily: 'Van'
            },
            children: "Small Biz Stars"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_reveal_.Fade, {
          bottom: true,
          delay: 100,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
            className: "text-xl font-bold",
            style: {
              fontFamily: 'Hap'
            },
            children: ["Manvi & Tanisha ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Quso Home"]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_reveal_.Fade, {
          bottom: true,
          delay: 400,
          style: {
            fontFamily: 'Hap'
          },
          children: /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-sm my-2 w-[90%] mx-auto",
            children: "Manvi & Tanisha run the beautifully homegrown decor brand Quoso which is a medley of quirkiness and sophistication, offering truly one of a kind range of products that would give your home a distinct personality. Extremely passionate about home interiors, they are set to win hearts with their fantastic collection!"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_reveal_.Zoom, {
          delay: 500,
          style: {
            fontFamily: 'Hap'
          },
          children: /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "text-black text-sm hover:bg-blue-400 bg-blue-300 rounded-xl py-1 px-5 drop-shadow hover:drop-shadow-xl mt-2",
            children: "Shop their Collection"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_reveal_.Fade, {
          bottom: true,
          delay: 1000,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex w-full my-2 mx-auto justify-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "w-28 h-28 rounded-xl drop-shadow-md mx-3 mt-2",
              style: {
                background: `url(${BizMagic2Mobile_showCaseProducts[0].img})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "w-28 h-28 rounded-xl drop-shadow-md mx-3 mt-2",
              style: {
                background: `url(${BizMagic2Mobile_showCaseProducts[1].img})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "w-28 h-28 rounded-xl drop-shadow-md mx-3 mt-2",
              style: {
                background: `url(${BizMagic2Mobile_showCaseProducts[2].img})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }
            })]
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_reveal_.Reveal, {
        effect: "fadeInUp",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "w-[45%] h-[100%] relative bottom-0"
        })
      })]
    })
  });
}
// EXTERNAL MODULE: ./src/components/common/section-header.tsx
var section_header = __webpack_require__(8092);
// EXTERNAL MODULE: ./src/components/ui/loaders/product-feed-loader.tsx + 1 modules
var product_feed_loader = __webpack_require__(9761);
// EXTERNAL MODULE: ./src/components/product/product-card.tsx
var product_card = __webpack_require__(6628);
;// CONCATENATED MODULE: ./src/containers/product-carousel.tsx


// import BannerCard from "@components/common/banner-card";






 // import { Product } from "@framework/types";

const product_carousel_breakpoints = {
  "1025": {
    slidesPerView: 3,
    spaceBetween: 28
  },
  "480": {
    slidesPerView: 2,
    spaceBetween: 20
  },
  "0": {
    slidesPerView: 2,
    spaceBetween: 12
  }
};

const ProductCarousel = ({
  sectionHeading,
  categorySlug,
  products,
  loading,
  error,
  uniqueKey,
  className = "mb-6 md:mb-6 lg:mb-8 pb-0.5 xl:pb-1.5 for-mobile"
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/jsx_runtime_.jsx(section_header/* default */.Z, {
      sectionHeading: sectionHeading,
      categorySlug: categorySlug
    }), error ? /*#__PURE__*/jsx_runtime_.jsx(ui_alert/* default */.Z, {
      message: error
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "gap-x-4 md:gap-x-6 xl:gap-x-8 gap-y-3 xl:gap-y-5 2xl:gap-y-8",
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_reveal_.Fade, {
        bottom: true,
        children: loading && !(products !== null && products !== void 0 && products.length) ? /*#__PURE__*/jsx_runtime_.jsx(product_feed_loader/* default */.Z, {
          limit: 2,
          uniqueKey: uniqueKey
        }) : /*#__PURE__*/jsx_runtime_.jsx(carousel/* default */.Z, {
          breakpoints: product_carousel_breakpoints,
          autoplay: {
            delay: 3000
          },
          children: products === null || products === void 0 ? void 0 : products.map(product => /*#__PURE__*/jsx_runtime_.jsx(react_.SwiperSlide, {
            children: /*#__PURE__*/jsx_runtime_.jsx(product_card/* default */.Z, {
              product: product,
              imgWidth: 340,
              imgHeight: 440,
              variant: "grid"
            }, `product--key${product._id}`)
          }, `promotion-banner-key-${product._id}`))
        })
      })
    })]
  });
};

/* harmony default export */ const product_carousel = (ProductCarousel);
;// CONCATENATED MODULE: ./src/components/product/feeds/new-arrivals-product-feed-mobile.tsx

 // import ProductsBlock from "@containers/products-block";


function NewArrivalsProductFeedMobile() {
  const {
    data,
    isLoading,
    error
  } = (0,get_all_new_arrival_products/* useNewArrivalProductsQuery */.l)({
    limit: 10
  });
  return /*#__PURE__*/jsx_runtime_.jsx(product_carousel, {
    sectionHeading: "text-new-arrivals",
    products: data === null || data === void 0 ? void 0 : data.productRef,
    loading: isLoading,
    error: error === null || error === void 0 ? void 0 : error.message,
    uniqueKey: "new-arrivals"
  });
}
;// CONCATENATED MODULE: ./src/components/product/feeds/best-seller-product-feed-mobile.tsx

 // import ProductsBlock from "@containers/products-block";


function BestSellerProductFeedMobile() {
  const {
    data,
    isLoading,
    error
  } = (0,get_all_best_seller_products/* useBestSellerProductsQuery */.D)({});
  return /*#__PURE__*/jsx_runtime_.jsx(product_carousel, {
    sectionHeading: "Recently Viewed",
    products: data === null || data === void 0 ? void 0 : data.productRef,
    loading: isLoading,
    error: error === null || error === void 0 ? void 0 : error.message,
    uniqueKey: "best-sellers"
  });
}
;// CONCATENATED MODULE: ./src/containers/SpecialSectionMobile.tsx







const SpecialSectionMobile_breakpoints = {
  "1025": {
    slidesPerView: 3,
    spaceBetween: 28
  },
  "480": {
    slidesPerView: 1,
    spaceBetween: 20
  },
  "0": {
    slidesPerView: 1,
    spaceBetween: 12
  }
};
const SpecialSectionMobile_data = [{
  title: 'Blog #1',
  subtitle: 'When the market ...',
  createdDate: '6th Sept',
  imgLink: '/assets/images/new-images/IMG_8488.jpg'
}, {
  title: 'Blog #2',
  subtitle: 'How we are supporting ...',
  createdDate: '7th Sept',
  imgLink: '/assets/images/new-images/IMG_8541.jpg'
} // {
//     title: 'Blog #1',
//     subtitle: 'When the market ...',
//     createdDate: '6th Sept',
//     imgLink: '/assets/images/new-images/IMG_8488.jpg'
// }
// {
//     title: 'Blog #3',
//     subtitle: 'When the market ...',
//     createdDate: '6th Sept',
//     imgLink: '/assets/images/instagram/4.jpg'
// },
// {
//     title: 'Blog #4',
//     subtitle: 'How we are supporting ...',
//     createdDate: '7th Sept',
//     imgLink: '/assets/images/instagram/4.jpg'
// }
];
function SpecialSectionMobile() {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_reveal_.Fade, {
      bottom: true,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "for-mobile grid grid-cols-1 lg:grid-cols-4 px-4 my-4 drop-shadow-lg bg-[#F4769F]",
        style: {
          borderRadius: '20px'
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-span-4 text-center py-5 text-[white] text-4xl font-bold w-full",
          style: {
            fontFamily: 'Van'
          },
          children: "Blogs"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-span-4",
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_reveal_.Fade, {
            left: true,
            children: /*#__PURE__*/jsx_runtime_.jsx(carousel/* default */.Z, {
              breakpoints: SpecialSectionMobile_breakpoints,
              autoplay: {
                delay: 3000
              },
              children: SpecialSectionMobile_data && SpecialSectionMobile_data.map((item, idx) => /*#__PURE__*/jsx_runtime_.jsx(react_.SwiperSlide, {
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "col-span-4 my-2 pb-5 lg:col-span-2 rounded-xl hover:drop-shadow-xl drop-shadow-lg grid grid-cols-2",
                  style: {
                    // background: 'rgba(255, 165, 0, 0.8)',
                    background: 'rgba(255, 255, 255, 1)'
                  },
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    style: {
                      borderRadius: '12px'
                    },
                    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                      className: "p-5 hover:drop-shadow-lg -translate-x-3",
                      src: item.imgLink,
                      style: {
                        borderRadius: '12%'
                      }
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "py-2 rounded-xl -translate-x-5",
                    style: {// background: 'rgba(255, 165, 0, 0.8)',
                    },
                    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                      className: "text-xs text-[#F6C0C9] pt-5 text-left pb-0 mb-0",
                      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "font-semibold pr-3",
                        children: item.createdDate
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
                      className: "font-bold text-2xl text-black text-left pb-5",
                      style: {
                        fontFamily: 'Hap'
                      },
                      children: item.title
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "mx-auto col-span-2 px-5",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                      className: "text-justify text-sm m-auto",
                      style: {
                        fontFamily: 'Hap'
                      },
                      children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi ullam ut facere accusantium voluptatibus. Sed quibusdam, commodi rerum provident incidunt reprehenderit animi nam ..."
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "w-full flex justify-center",
                      children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                        className: "rounded-3xl hover:drop-shadow-md font-bold bg-[#F6C0C9]  text-white px-3 py-1 mt-5",
                        children: "Read More ..."
                      })
                    })]
                  })]
                }, idx)
              }, `blog-section-key-${item.title}`))
            })
          })
        })]
      })
    })
  });
}
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./src/containers/collection-block-mobile.tsx


// import CollectionCard from "@components/common/collection-card";


const collection_block_mobile_data = [{
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

const CollectionBlockMobile = ({
  className = "for-mobile mb-12 md:mb-14 xl:mb-16 pb-0.5 lg:pt-1 xl:pt-0"
}) => {
  var _data$slice;

  // const isEven = (value: number) => {
  // 	return value % 2;
  // };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `${className} for-mobile  bg-[#ffdde3] w-[100vw] -translate-x-4 md:-translate-x-8 2xl:-translate-x-16 overflow-hidden` // style={{backgroundImage: "url(/assets/images/founderspick/banner-main-mobile.jpg)", backgroundSize: '100% 100%'}}
    ,
    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
      src: "/assets/images/founderspick/banner-main-mobile.jpg",
      alt: "",
      className: "relative top-0 left-0 w-[60%] m-auto "
    }), /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: "/assets/images/founderspick/diamond.png",
      className: "absolute bottom-3 left-0 max-w-[20vw] rotate-45",
      alt: ""
    }), /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: "/assets/images/founderspick/diamond.png",
      className: "absolute bottom-[55%] right-0 max-w-[20vw] rotate-[-25deg]",
      alt: ""
    }), /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: "/assets/images/founderspick/star.png",
      className: "absolute left-[70%] top-[30%] max-w-[10vw] ",
      alt: ""
    }), /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: "/assets/images/founderspick/star.png",
      className: "absolute left-[60%] top-[25%] max-w-[10vw] ",
      alt: ""
    }), /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: "/assets/images/founderspick/star.png",
      className: "absolute left-[65%] top-[35%] max-w-[7vw] ",
      alt: ""
    }), /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: "/assets/images/founderspick/star.png",
      className: "absolute left-[35%] bottom-[8%] max-w-[10vw] ",
      alt: ""
    }), /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: "/assets/images/founderspick/star.png",
      className: "absolute left-[25%] bottom-[12%] max-w-[10vw] ",
      alt: ""
    }), /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: "/assets/images/founderspick/star.png",
      className: "absolute left-[20%] bottom-[5%] max-w-[7vw] ",
      alt: ""
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "relative grid grid-cols-2 gap-2 lg:gap-7 pl-[2vw] px-[2.5vw] my-5 ",
      children: collection_block_mobile_data === null || collection_block_mobile_data === void 0 ? void 0 : (_data$slice = collection_block_mobile_data.slice(0, 2)) === null || _data$slice === void 0 ? void 0 : _data$slice.map((item, index) => {
        var _item$image;

        return /*#__PURE__*/jsx_runtime_.jsx(ui_link/* default */.Z, {
          href: item.slug,
          className: "group text-center flex flex-col justify-between sm:even:flex-col-reverse even:mt-16 odd:mb-16 sm:last:hidden lg:last:flex border sm:border-0 border-gray-300 overflow-hidden sm:pb-0",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: (_item$image = item.image) !== null && _item$image !== void 0 ? _item$image : "/assets/placeholder/collection.svg",
            alt: item.title || "thumbnail",
            width: 200,
            height: 200,
            className: "bg-gray-300 w-[40%] object-cover transition duration-200 ease-in-out group-hover:opacity-90"
          })
        }, index);
      })
    })]
  });
};

/* harmony default export */ const collection_block_mobile = (CollectionBlockMobile);
;// CONCATENATED MODULE: ./src/pages/index.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import BannerCard from "@components/common/banner-card";


 // import Divider from "@components/ui/divider";
// import DownloadApps from "@components/common/download-apps";
// import Support from "@components/common/support";


 // import FoundersPick from "@containers/FoundersPick"
// import BrandBlock from "@containers/brand-block";

 // import FeatureBlock from "@containers/feature-block";




 // import { homeOneBanner as banner } from "@framework/static/banner";









 // import { useEffect } from "react";
// import { ROUTES } from "@utils/routes";
// import { useUI } from "@contexts/ui.context";
// import BusinessMagic from "@containers/BusinessMagic";


 // import SectionHalf from "@containers/halfsectionindex";








function Home() {
  // const { openModal, setModalView } = useUI();
  // useEffect(() => {
  // 	setModalView("NEWSLETTER_VIEW");
  // 	setTimeout(() => { 
  // 		openModal();
  // 	}, 2000);
  // }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "bg-main-gradient pb-10",
      children: [/*#__PURE__*/jsx_runtime_.jsx(hero_block, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(container/* default */.Z, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(new_arrivals_product_feed/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(NewArrivalsProductFeedMobile, {}), /*#__PURE__*/jsx_runtime_.jsx(category_block/* default */.Z, {
          sectionHeading: "Top Selling Categories"
        }), /*#__PURE__*/jsx_runtime_.jsx(banner_carousel_block, {}), /*#__PURE__*/jsx_runtime_.jsx(flash_sale_product_feed, {}), /*#__PURE__*/jsx_runtime_.jsx(best_seller_product_feed/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(BestSellerProductFeedMobile, {}), /*#__PURE__*/jsx_runtime_.jsx(BizMagic2, {}), /*#__PURE__*/jsx_runtime_.jsx(BizMagic2Mobile, {}), /*#__PURE__*/jsx_runtime_.jsx(external_react_reveal_.Fade, {
          bottom: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(collection_block/* default */.Z, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_reveal_.Fade, {
          bottom: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(collection_block_mobile, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(SpecialSection, {}), /*#__PURE__*/jsx_runtime_.jsx(SpecialSectionMobile, {}), /*#__PURE__*/jsx_runtime_.jsx(Feature, {}), /*#__PURE__*/jsx_runtime_.jsx(subscription/* default */.Z, {
          className: "bg-linen px-5 sm:px-8 md:px-16 2xl:px-24"
        })]
      })]
    })
  });
}
Home.Layout = layout/* default */.Z;
const getStaticProps = async ({
  locale
}) => {
  const queryClient = new external_react_query_.QueryClient();
  await queryClient.prefetchQuery([api_endpoints/* API_ENDPOINTS.FLASH_SALE_PRODUCTS */.P.FLASH_SALE_PRODUCTS, {
    limit: 10
  }], get_all_flash_sale_products/* fetchFlashSaleProducts */.z);
  await queryClient.prefetchQuery([api_endpoints/* API_ENDPOINTS.CATEGORIES */.P.CATEGORIES, {
    limit: 10
  }], get_all_categories/* fetchCategories */.p);
  await queryClient.prefetchQuery([api_endpoints/* API_ENDPOINTS.BEST_SELLER_PRODUCTS */.P.BEST_SELLER_PRODUCTS, {
    limit: 10
  }], get_all_best_seller_products/* fetchBestSellerProducts */.B);
  await queryClient.prefetchQuery([api_endpoints/* API_ENDPOINTS.NEW_ARRIVAL_PRODUCTS */.P.NEW_ARRIVAL_PRODUCTS, {
    limit: 10
  }], get_all_new_arrival_products/* fetchNewArrivalProducts */.Q);
  await queryClient.prefetchQuery([api_endpoints/* API_ENDPOINTS.BRANDS */.P.BRANDS, {
    limit: 0
  }], get_all_brands/* fetchBrands */.S);
  return {
    props: _objectSpread({
      dehydratedState: JSON.parse(JSON.stringify((0,hydration_.dehydrate)(queryClient)))
    }, await (0,serverSideTranslations_.serverSideTranslations)(locale, ["common", "forms", "menu", "footer"])),
    revalidate: 60
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

/***/ 9475:
/***/ ((module) => {

module.exports = require("react-query/hydration");

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
var __webpack_exports__ = __webpack_require__.X(0, [8453,9583,9300,926,2095,239,3977,7077,7181,5101,7790,7022,1809,8490,5937,3809,5430], () => (__webpack_exec__(9597)));
module.exports = __webpack_exports__;

})();