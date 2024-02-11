"use strict";
(() => {
var exports = {};
exports.id = 4864;
exports.ids = [4864];
exports.modules = {

/***/ 7809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// pages/api/razorpay.js
const Razorpay = __webpack_require__(707);

const shortid = __webpack_require__(4942);

console.log(process.env.RAZORPAY_ID); // Initialize razorpay object

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_ID,
  key_secret: process.env.RAZORPAY_KEY
});

async function handler(req, res) {
  // TODO: Make sure to handle your payment here.
  // Create an order -> generate the OrderID -> Send it to the Front-end
  // Also, check the amount and currency on the backend (Security measure)
  const payment_capture = 1;
  const amount = 1 * 100; // amount in paisa. In our case it's INR 1

  const currency = "INR";
  const options = {
    amount: amount.toString(),
    currency,
    receipt: shortid.generate(),
    payment_capture,
    notes: {
      // These notes will be added to your transaction. So you can search it within their dashboard.
      // Also, it's included in webhooks as well. So you can automate it.
      paymentFor: "example_ebook",
      userId: "user_id_here",
      productId: 'your_product_id'
    }
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

/***/ }),

/***/ 707:
/***/ ((module) => {

module.exports = require("razorpay");

/***/ }),

/***/ 4942:
/***/ ((module) => {

module.exports = require("shortid");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7809));
module.exports = __webpack_exports__;

})();