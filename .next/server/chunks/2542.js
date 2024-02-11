"use strict";
exports.id = 2542;
exports.ids = [2542];
exports.modules = {

/***/ 6005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);






const CategoryLiner = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "grid grid-cols-5 gap-1 bg-pink-100 font-josephine rounded-md px-5 py-10 drop-shadow-lg for-desktop",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "col-span-2 text-center grid grid-cols-3",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
          className: "rounded-full w-[80%] col-span-1 mx-10 drop-shadow-md",
          src: "/assets/images/categories/category.jpg"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "col-span-2 px-10 mt-6",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
            className: "text-4xl text-gray-800",
            children: "Home Decor"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "text-xl text-gray-700 italic overflow-visible",
            children: "Unveiling Your Dream Haven"
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-span-3",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
          className: "justify-center text-center text-lg",
          children: "Elevate your space with a touch of magic! Dive into our Home Decor wonderland and discover treasures that turn houses into uniquely charming homes. From cozy cushions to awe-inspiring wall art, find pieces that resonate with your style and personality. Let your living space tell your story, one decor piece at a time."
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "bg-pink-100 font-josephine rounded-md px-5 py-10 drop-shadow-lg for-mobile",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-center flex justify-center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
          className: "rounded-full w-[60%] mx-10 drop-shadow-md",
          src: "/assets/images/categories/category.jpg"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "col-span-2 px-10 mt-6 justify-center text-center w-full",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
          className: "text-3xl text-gray-800",
          children: "Home Decor"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
          className: "text-lg text-gray-700 italic overflow-visible",
          children: "Unveiling Your Dream Haven"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mt-5",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
          className: "justify-center text-center text-lg",
          children: "Elevate your space with a touch of magic! Dive into our Home Decor wonderland and discover treasures that turn houses into uniquely charming homes. From cozy cushions to awe-inspiring wall art, find pieces that resonate with your style and personality. Let your living space tell your story, one decor piece at a time."
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryLiner);

/***/ }),

/***/ 434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);

// import Image from "next/image";
 // import { getDirection } from "@utils/get-direction";

const CategoryBanner = ({
  className = "mb-7",
  bgColor
}) => {
  // const { locale } = useRouter();
  // const dir = getDirection(locale);
  const {
    query: {
      slug
    }
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const categoryTitle = slug === null || slug === void 0 ? void 0 : slug.toString().split("-").join("");
  console.log("Category Title = " + categoryTitle);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: `rounded-md relative flex flex-row ${className} ${bgColor} h-0 mt-[10vh] `,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "hidden md:flex"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryBanner);

/***/ })

};
;