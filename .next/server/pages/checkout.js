"use strict";
(() => {
var exports = {};
exports.id = 2222;
exports.ids = [2222];
exports.modules = {

/***/ 4094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CheckoutPage),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./src/components/ui/container.tsx
var container = __webpack_require__(9691);
// EXTERNAL MODULE: ./src/components/layout/layout.tsx + 24 modules
var layout = __webpack_require__(239);
// EXTERNAL MODULE: ./src/components/ui/page-header.tsx
var page_header = __webpack_require__(6722);
// EXTERNAL MODULE: ./src/components/ui/input.tsx
var input = __webpack_require__(3977);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: ./src/components/ui/text-area.tsx
var text_area = __webpack_require__(7658);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
;// CONCATENATED MODULE: ./src/framework/basic-rest/checkout/use-checkout.tsx
// import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
// import http from "@framework/utils/http";


async function checkout(input) {
  // return http.post(API_ENDPOINTS.ChangeEmail, input);
  return input;
}

const useCheckoutMutation = () => {
  return (0,external_react_query_.useMutation)(input => checkout(input), {
    onSuccess: data => {
      console.log(data, "Checkout success response");
    },
    onError: data => {
      console.log(data, "Checkout error response");
    }
  });
};
// EXTERNAL MODULE: ./src/components/ui/checkbox.tsx
var ui_checkbox = __webpack_require__(1987);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(1553);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: ./src/contexts/cart/cart.context.tsx + 3 modules
var cart_context = __webpack_require__(9745);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
;// CONCATENATED MODULE: ./src/components/checkout/checkout-form.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // import Router from "next/router";
// import { ROUTES } from "@utils/routes";





const ccav = __webpack_require__(314);

const checkout_form_crypto = __webpack_require__(6417);

const CheckoutForm = () => {
  var _errors$firstName, _errors$lastName, _errors$address, _errors$phone, _errors$email;

  const {
    t
  } = (0,external_next_i18next_.useTranslation)();
  const {
    items,
    removeItemFromCart
  } = (0,cart_context/* useCart */.jD)();

  function clearCart() {
    for (let i = 0; i < items.length; i++) {
      removeItemFromCart(items[i].id);
    }
  }

  const {
    // mutate: updateUser, 
    isLoading
  } = useCheckoutMutation();
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = (0,external_react_hook_form_.useForm)();

  function onSubmit(input) {
    const merchantId = 3163052;
    const accessCode = "AVCK53LA79CN78KCNC";
    const workingKey = "B119F30E7F577B431660D1EF7065B53B";
    const currency = "INR"; // const orderId = "ORD0001";

    const redirectUrl = "http://127.0.0.1:3001/api/ccavResponseHandler";
    const cancelUrl = "http://127.0.0.1:3001/api/ccavResponseHandler";
    const language = "EN"; // const ccaRequest = `merchantId=${merchantId}&accessCode=${accessCode}`;
    // console.log(workingKey, orderId, currency, amount, redirectUrl, cancelUrl, language, ccaRequest);

    var md5 = checkout_form_crypto.createHash('md5').update(workingKey).digest();
    var keyBase64 = Buffer.from(md5).toString('base64'); //Initializing Vector and then convert in base64 string

    var ivBase64 = Buffer.from([0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f]).toString('base64');

    const submitForm = async () => {
      const orderDetails = await createOrder();
      console.log("Order Details: ");
      console.log(orderDetails);
      var form = document.createElement("form");
      form.setAttribute("method", "post");
      form.setAttribute("action", "https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction");
      form.setAttribute("name", "redirect");
      form.setAttribute("id", "nonseamless"); // console.log(input)

      const username = `${input.firstName} ${input.lastName}`;
      const body = `merchant_id=${merchantId}&order_id=${orderDetails.orderId}&currency=${currency}&amount=${orderDetails.total}&redirect_url=${redirectUrl}&cancel_url=${cancelUrl}&language=${language}&billing_name=${username}&billing_address=${input.address}&billing_city=${input.city}&billing_state=&billing_zip=${input.zipCode}&billing_country=&billing_tel=${input.phone}&billing_email=${input.email}&delivery_name=&delivery_address=&delivery_city=&delivery_state=&delivery_zip=&delivery_country=&delivery_tel=&merchant_param1=&merchant_param2=&merchant_param3=&merchant_param4=&merchant_param5=&promo_code=&customer_identifier=`;
      console.log("body Data: ", body);
      const encRequest = ccav.encrypt(body, keyBase64, ivBase64); // console.log(encRequest)
      // form fields

      var encRequestInput = document.createElement("input");
      encRequestInput.setAttribute("type", "hidden");
      encRequestInput.setAttribute("name", "encRequest");
      encRequestInput.setAttribute("value", encRequest);
      form.appendChild(encRequestInput);
      var accessCodeInput = document.createElement("input");
      accessCodeInput.setAttribute("type", "hidden");
      accessCodeInput.setAttribute("name", "access_code");
      accessCodeInput.setAttribute("value", accessCode);
      form.appendChild(accessCodeInput);
      document.body.appendChild(form);
      clearCart();
      form.submit();
    };

    const createOrder = async () => {
      var _Cookies$get;

      // const items:any = [];
      const orderDetails = {
        cart: items,
        billing: input
      };
      console.log("Payload to be sent");
      console.log(orderDetails);
      const response = await fetch('http://localhost:5055/api/order/add', {
        method: 'POST',
        body: JSON.stringify(orderDetails),
        headers: {
          'Content-Type': 'application/json',
          'auth': (_Cookies$get = external_js_cookie_default().get('auth_token')) !== null && _Cookies$get !== void 0 ? _Cookies$get : ''
        }
      });
      console.log("API Response: ");
      const data = await response.json();
      console.log(data.order);
      return data.order;
    };

    try {
      submitForm();
    } catch (error) {
      console.log("Error Creating Order: ");
      console.log(error);
    } // console.log(input); // User Billing Details
    // updateUser(input);
    // Router.push(ROUTES.ORDER);

  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: "text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8",
      children: t("text-shipping-address")
    }), /*#__PURE__*/jsx_runtime_.jsx("form", {
      onSubmit: handleSubmit(onSubmit),
      className: "w-full mx-auto flex flex-col justify-center ",
      noValidate: true,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col space-y-4 lg:space-y-5",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col lg:flex-row space-y-4 lg:space-y-0",
          children: [/*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, _objectSpread(_objectSpread({
            labelKey: "forms:label-first-name"
          }, register("firstName", {
            required: "forms:first-name-required"
          })), {}, {
            errorKey: (_errors$firstName = errors.firstName) === null || _errors$firstName === void 0 ? void 0 : _errors$firstName.message,
            variant: "solid",
            className: "w-full lg:w-1/2 "
          })), /*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, _objectSpread(_objectSpread({
            labelKey: "forms:label-last-name"
          }, register("lastName", {
            required: "forms:last-name-required"
          })), {}, {
            errorKey: (_errors$lastName = errors.lastName) === null || _errors$lastName === void 0 ? void 0 : _errors$lastName.message,
            variant: "solid",
            className: "w-full lg:w-1/2 lg:ms-3 mt-2 md:mt-0"
          }))]
        }), /*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, _objectSpread(_objectSpread({
          labelKey: "forms:label-address"
        }, register("address", {
          required: "forms:address-required"
        })), {}, {
          errorKey: (_errors$address = errors.address) === null || _errors$address === void 0 ? void 0 : _errors$address.message,
          variant: "solid"
        })), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col lg:flex-row space-y-4 lg:space-y-0",
          children: [/*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, _objectSpread(_objectSpread({
            type: "tel",
            labelKey: "forms:label-phone"
          }, register("phone", {
            required: "forms:phone-required"
          })), {}, {
            errorKey: (_errors$phone = errors.phone) === null || _errors$phone === void 0 ? void 0 : _errors$phone.message,
            variant: "solid",
            className: "w-full lg:w-1/2 "
          })), /*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, _objectSpread(_objectSpread({
            type: "email",
            labelKey: "forms:label-email-star"
          }, register("email", {
            required: "forms:email-required",
            pattern: {
              value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "forms:email-error"
            }
          })), {}, {
            errorKey: (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message,
            variant: "solid",
            className: "w-full lg:w-1/2 lg:ms-3 mt-2 md:mt-0"
          }))]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col lg:flex-row space-y-4 lg:space-y-0",
          children: [/*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, _objectSpread(_objectSpread({
            labelKey: "forms:label-city"
          }, register("city")), {}, {
            variant: "solid",
            className: "w-full lg:w-1/2 "
          })), /*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, _objectSpread(_objectSpread({
            labelKey: "forms:label-postcode"
          }, register("zipCode")), {}, {
            variant: "solid",
            className: "w-full lg:w-1/2 lg:ms-3 mt-2 md:mt-0"
          }))]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "relative flex items-center ",
          children: /*#__PURE__*/jsx_runtime_.jsx(ui_checkbox/* CheckBox */.J, {
            labelKey: "forms:label-save-information"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(text_area/* default */.Z, _objectSpread(_objectSpread({
          labelKey: "forms:label-order-notes"
        }, register("note")), {}, {
          placeholderKey: "forms:placeholder-order-notes",
          className: "relative pt-3 xl:pt-6"
        })), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex w-full",
          children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
            className: "w-full sm:w-auto",
            loading: isLoading,
            disabled: isLoading,
            children: t("Pay & Place Order")
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const checkout_form = (CheckoutForm);
// EXTERNAL MODULE: ./src/framework/basic-rest/product/use-price.tsx
var use_price = __webpack_require__(4718);
// EXTERNAL MODULE: ./src/utils/generate-cart-item-name.ts + 1 modules
var generate_cart_item_name = __webpack_require__(162);
;// CONCATENATED MODULE: ./src/components/checkout/checkout-card-item.tsx




const CheckoutItem = ({
  item
}) => {
  const {
    price
  } = (0,use_price/* default */.ZP)({
    amount: item.itemTotal,
    currencyCode: "INR"
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex py-4 items-center lg:px-3 border-b border-gray-300",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex border rounded-md border-gray-300 w-16 h-16 flex-shrink-0",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: item.image && item.image.length > 0 ? item === null || item === void 0 ? void 0 : item.image : "/assets/placeholder/order-product.svg",
        width: "64",
        height: "64",
        className: "object-cover"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
      className: "text-sm ps-3 font-regular text-heading",
      children: (0,generate_cart_item_name/* generateCartItemName */.o)(item.name, item.attributes)
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex ms-auto text-heading text-sm ps-2 flex-shrink-0",
      children: price
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/checkout/checkout-card-footer-item.tsx


const CheckoutCardFooterItem = ({
  item
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex items-center py-4 lg:py-5 border-b border-gray-300 text-sm lg:px-3 w-full font-semibold text-heading last:border-b-0 last:text-base last:pb-0",
    children: [item.name, /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "ms-auto flex-shrink-0",
      children: item.price
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/checkout/checkout-card.tsx








const CheckoutCard = () => {
  const {
    items,
    total,
    isEmpty
  } = (0,cart_context/* useCart */.jD)();
  const {
    price: subtotal
  } = (0,use_price/* default */.ZP)({
    amount: total,
    currencyCode: "INR"
  });
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  const checkoutFooter = [{
    id: 1,
    name: t("text-sub-total"),
    price: subtotal
  }, {
    id: 2,
    name: t("text-shipping"),
    price: t("text-free")
  }, {
    id: 3,
    name: t("text-total"),
    price: subtotal
  }];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "pt-12 md:pt-0 2xl:ps-4",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: "text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8",
      children: t("text-your-order")
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex p-4 rounded-md mt-6 md:mt-7 xl:mt-9 bg-gray-150 text-sm font-semibold text-heading",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        children: t("text-product")
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "ms-auto flex-shrink-0",
        children: t("text-sub-total")
      })]
    }), !isEmpty ? items.map(item => /*#__PURE__*/jsx_runtime_.jsx(CheckoutItem, {
      item: item
    }, item.id)) : /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "text-red-500 lg:px-3 py-4",
      children: t("text-empty-cart")
    }), checkoutFooter.map(item => /*#__PURE__*/jsx_runtime_.jsx(CheckoutCardFooterItem, {
      item: item
    }, item.id))]
  });
};

/* harmony default export */ const checkout_card = (CheckoutCard);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(3295);
;// CONCATENATED MODULE: ./src/pages/checkout.tsx




function checkout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function checkout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { checkout_ownKeys(Object(source), true).forEach(function (key) { checkout_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { checkout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function checkout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import Subscription from "@components/common/subscription";





function CheckoutPage() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(page_header/* default */.Z, {
      pageHeader: "text-page-checkout"
    }), /*#__PURE__*/jsx_runtime_.jsx(container/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "py-14 xl:py-20 px-0 2xl:max-w-screen-2xl xl:max-w-screen-xl mx-auto flex flex-col md:flex-row w-full",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "md:w-full lg:w-3/5 flex  h-full flex-col -mt-1.5",
          children: /*#__PURE__*/jsx_runtime_.jsx(checkout_form, {})
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "md:w-full lg:w-2/5 md:ms-7 lg:ms-10 xl:ms-14 flex flex-col h-full -mt-1.5",
          children: /*#__PURE__*/jsx_runtime_.jsx(checkout_card, {})
        })]
      })
    })]
  });
}
CheckoutPage.Layout = layout/* default */.Z;
const getStaticProps = async ({
  locale
}) => {
  return {
    props: checkout_objectSpread({}, await (0,serverSideTranslations_.serverSideTranslations)(locale, ["common", "forms", "menu", "footer"]))
  };
};

/***/ }),

/***/ 162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": () => (/* binding */ generateCartItemName)
});

// EXTERNAL MODULE: external "lodash/isEmpty"
var isEmpty_ = __webpack_require__(8718);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty_);
;// CONCATENATED MODULE: external "lodash/orderBy"
const orderBy_namespaceObject = require("lodash/orderBy");
var orderBy_default = /*#__PURE__*/__webpack_require__.n(orderBy_namespaceObject);
;// CONCATENATED MODULE: ./src/utils/generate-cart-item-name.ts


function generateCartItemName(name, attributes) {
  if (!isEmpty_default()(attributes)) {
    const sortedAttributes = orderBy_default()(attributes);
    return `${name} - ${sortedAttributes.join(", ")}`;
  }

  return name;
}

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

/***/ 6417:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 6155:
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ 8718:
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

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

/***/ 173:
/***/ ((module) => {

module.exports = require("react-use/lib/useLocalStorage");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8453,9583,9300,926,2095,239,3977,6722,1987,7658,314], () => (__webpack_exec__(4094)));
module.exports = __webpack_exports__;

})();