"use strict";
exports.id = 7428;
exports.ids = [7428];
exports.modules = {

/***/ 7428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ counter)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/icons/minus-icon.tsx


const MinusIcon = ({
  color = "currentColor",
  width = "10px",
  height = "2px"
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12 1.5",
    children: /*#__PURE__*/jsx_runtime_.jsx("rect", {
      "data-name": "Rectangle 970",
      width: width,
      height: height,
      fill: color
    })
  });
};

/* harmony default export */ const minus_icon = (MinusIcon);
;// CONCATENATED MODULE: ./src/components/icons/plus-icon.tsx


const PlusIcon = ({
  color = "currentColor",
  width = "10px",
  height = "10px"
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    "data-name": "plus (2)",
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12 12",
    children: /*#__PURE__*/jsx_runtime_.jsx("g", {
      "data-name": "Group 5367",
      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
        "data-name": "Path 17138",
        d: "M6.749,5.251V0h-1.5V5.251H0v1.5H5.251V12h1.5V6.749H12v-1.5Z",
        fill: color
      })
    })
  });
};

/* harmony default export */ const plus_icon = (PlusIcon);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/common/counter.tsx






const Counter = ({
  quantity,
  onDecrement,
  onIncrement,
  disableIncrement = false,
  disableDecrement = false,
  variant = "default"
}) => {
  const size = variant !== "dark" ? "12px" : "10px";
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_classnames_default()("group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0", {
      "border h-7 md:h-9 border-gray-300": variant === "default",
      "h-8 md:h-7 shadow-navigation bg-heading": variant === "dark"
    }),
    children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
      onClick: onDecrement,
      className: external_classnames_default()("flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none", {
        "w-10 md:w-12 text-heading border-e border-gray-300 hover:text-white hover:bg-heading": variant === "default",
        "w-8 md:w-9 text-white bg-heading hover:bg-gray-600 focus:outline-none": variant === "dark"
      }),
      disabled: disableDecrement,
      children: /*#__PURE__*/jsx_runtime_.jsx(minus_icon, {
        width: size
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: external_classnames_default()("font-josephine font-semibold flex items-center justify-center h-full  transition-colors duration-250 ease-in-out cursor-default flex-shrink-0", {
        "text-base text-heading w-2  md:w-2 xl:w-2": variant === "default",
        "text-sm text-white w-4 md:w-10 ": variant === "dark"
      }),
      children: quantity
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      onClick: onIncrement,
      className: external_classnames_default()("flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none", {
        "w-10 md:w-12 text-heading border-s border-gray-300 hover:text-white hover:bg-heading": variant === "default",
        "w-8 md:w-9 text-white bg-heading hover:bg-gray-600 focus:outline-none": variant === "dark"
      }),
      disabled: disableIncrement,
      children: /*#__PURE__*/jsx_runtime_.jsx(plus_icon, {
        width: size,
        height: size
      })
    })]
  });
};

/* harmony default export */ const counter = (Counter);

/***/ })

};
;