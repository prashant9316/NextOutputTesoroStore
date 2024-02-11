"use strict";
exports.id = 6776;
exports.ids = [6776];
exports.modules = {

/***/ 6299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var _components_ui_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7077);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3407);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);







const data = {
  title: "app-heading",
  subTitle: "app-sub-heading",
  appImage: "/assets/images/app.png",
  appButtons: [{
    id: 1,
    slug: "/#",
    altText: "button-app-store",
    appButton: "/assets/images/app-store.svg",
    buttonWidth: 209,
    buttonHeight: 60
  }, {
    id: 2,
    slug: "/#",
    altText: "button-play-store",
    appButton: "/assets/images/play-store.svg",
    buttonWidth: 209,
    buttonHeight: 60
  }]
};

const DownloadApps = ({
  className
}) => {
  const {
    appButtons,
    title,
    subTitle,
    appImage
  } = data;
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)("common");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("flex justify-between items-end rounded-lg bg-gray-200 pt-5 md:pt-8 lg:pt-10 xl:pt-14 px-6 md:px-12 lg:px-20 2xl:px-24 3xl:px-36", className),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "flex-shrink-0 w-full sm:w-60 md:w-96 lg:w-auto lg:max-w-lg xl:max-w-xl lg:flex lg:items-center pb-5 md:pb-8 lg:pb-12 xl:pb-16",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "py-4 md:py-6 xl:py-8 text-center sm:text-start",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_text__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
          variant: "mediumHeading",
          className: "-mt-1 mb-2 md:mb-3 lg:mb-3.5 xl:mb-4",
          children: t(`${title}`)
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
          className: "text-heading text-md sm:text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-normal leading-7 sm:leading-8 md:leading-snug xl:leading-relaxed 2xl:leading-snug mb-6 md:mb-8 lg:mb-9 xl:mb-12 2xl:mb-14 lg:pe-20 2xl:pe-0",
          dangerouslySetInnerHTML: {
            __html: t(`${subTitle}`)
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "flex justify-center sm:justify-start space-s-2 md:space-s-3 px-6 sm:px-0",
          children: appButtons === null || appButtons === void 0 ? void 0 : appButtons.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
            href: item.slug,
            className: "inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
              src: item.appButton,
              alt: t(`${item.altText}`),
              className: "w-36 lg:w-44 xl:w-auto",
              width: item.buttonWidth,
              height: item.buttonHeight
            })
          }, item.id))
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "hidden sm:flex items-end ps-4 -me-0.5 2xl:-me-1.5 w-60 md:w-72 lg:w-96 xl:w-auto",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.default, {
        src: appImage,
        alt: t("text-app-thumbnail"),
        width: 375,
        height: 430
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DownloadApps);

/***/ }),

/***/ 5713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var _components_ui_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7077);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1553);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(155);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);








const data = {
  title: "support-heading",
  description: "support-sub-heading",
  buttonText: "button-chat-services",
  supportImage: "/assets/images/support.png"
};

const Support = ({
  className
}) => {
  const {
    title,
    description,
    supportImage,
    buttonText
  } = data;
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)("common");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("my-8 md:my-12 lg:my-16 xl:my-20 3xl:my-24 pb-5 lg:pb-3.5 2xl:pb-5 pt-3 lg:pt-1.5 2xl:pt-2 3xl:pt-3 text-center", className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "max-w-md mx-auto mb-4 md:mb-5 xl:mb-8 2xl:mb-10 3xl:mb-12",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_text__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        variant: "mediumHeading",
        className: "mb-2 md:mb-3 lg:mb-3.5",
        children: t(`${title}`)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "text-body text-xs md:text-sm leading-6 md:leading-7",
        children: t(`${description}`)
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "mb-2.5 md:mb-0 xl:mb-2 2xl:mb-4 3xl:mb-6 md:px-20 lg:px-40 xl:px-0",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.default, {
        src: supportImage,
        alt: t("text-support-thumbnail"),
        width: 870,
        height: 300
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
      children: [t(`${buttonText}`), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_6__/* .IoChatbubbleEllipsesOutline */ .rIi, {
        className: "ms-2 text-lg md:text-xl"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Support);

/***/ }),

/***/ 6548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


// const style = {
// }
const Divider = ({
  className = "mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: `border-t border-gray-300 ${className}`
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Divider);

/***/ })

};
;