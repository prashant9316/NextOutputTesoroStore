"use strict";
exports.id = 3627;
exports.ids = [3627];
exports.modules = {

/***/ 3627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ cart_button)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/icons/cart-icon.tsx


const CartIcon = ({
  color = "currentColor",
  width = "18px",
  height = "18px",
  className = "md:w-4 xl:w-5 md:h-4 xl:h-5"
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 20 20",
    className: className,
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M5,4H19a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4ZM2,5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3V19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3Zm10,7C9.239,12,7,9.314,7,6H9c0,2.566,1.669,4,3,4s3-1.434,3-4h2C17,9.314,14.761,12,12,12Z",
      transform: "translate(-2 -2)",
      fill: color,
      fillRule: "evenodd"
    })
  });
};

/* harmony default export */ const cart_icon = (CartIcon);
// EXTERNAL MODULE: ./src/contexts/cart/cart.context.tsx + 3 modules
var cart_context = __webpack_require__(9745);
// EXTERNAL MODULE: ./src/contexts/ui.context.tsx
var ui_context = __webpack_require__(7014);
;// CONCATENATED MODULE: ./src/components/cart/cart-button.tsx






const CartButton = () => {
  const {
    openCart
  } = (0,ui_context/* useUI */.l8)();
  const {
    totalItems
  } = (0,cart_context/* useCart */.jD)();

  function handleCartOpen() {
    return openCart();
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
    className: "flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform",
    onClick: handleCartOpen,
    "aria-label": "cart-button",
    children: [/*#__PURE__*/jsx_runtime_.jsx(cart_icon, {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "cart-counter-badge flex items-center justify-center bg-heading text-white absolute -top-2.5 xl:-top-3 -end-2.5 xl:-end-3 rounded-full font-bold",
      children: totalItems
    })]
  });
};

/* harmony default export */ const cart_button = (CartButton);

/***/ })

};
;