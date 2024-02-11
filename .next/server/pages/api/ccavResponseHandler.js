"use strict";
(() => {
var exports = {};
exports.id = 6938;
exports.ids = [6938];
exports.modules = {

/***/ 8058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const ccav = __webpack_require__(314);

const crypto = __webpack_require__(6417);

const qs = __webpack_require__(1191);

async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      console.log(req.method); // const accessCode = "AVCK53LA79CN78KCNC";

      const workingKey = "B119F30E7F577B431660D1EF7065B53B"; // const merchantId = 3163052;

      const md5 = crypto.createHash('md5').update(workingKey).digest();
      const keyBase64 = Buffer.from(md5).toString('base64'); //Initializing Vector and then convert in base64 string

      const ivBase64 = Buffer.from([0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f]).toString('base64');
      console.log("Request . body Variable:");
      console.log(req.body.encResp);
      const encryption = req.body.encResp;
      const ccavResponse = ccav.decrypt(encryption, keyBase64, ivBase64);
      console.log("decrypted message: ", ccavResponse); // });

      const data = {
        data: qs.parse(ccavResponse),
        orderId: ccavResponse.order_id
      };
      console.log(data); // Update order details with Payment Details
      // console.log("Cookies.get('auth_token')", Cookies.get('auth_token'));

      const responseFrom = await fetch(`http://localhost:5055/api/order/update-order/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const response = await responseFrom.json();
      console.log(response); // res.json({ 
      //     data: data, orderId: req.body.orderNo, 
      //     redirectUrl: `http://localhost:3001/my-account/orders/${req.body.orderNo}`,
      //     response: response
      // })

      res.writeHead(302, {
        location: `http://localhost:3001/my-account/orders/${req.body.orderNo}`
      });
      res.end(); // res.status(200).json({ message: 'Success', data: data, orderId: req.body.orderNo });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.log("--------------------------------------");
    console.log(error);
    res.writeHead(302, {
      location: `http://localhost:3001/404`
    });
    res.end();
  }
}

/***/ }),

/***/ 6417:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 1191:
/***/ ((module) => {

module.exports = require("querystring");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [314], () => (__webpack_exec__(8058)));
module.exports = __webpack_exports__;

})();