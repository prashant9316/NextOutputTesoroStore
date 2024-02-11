"use strict";
exports.id = 7412;
exports.ids = [7412];
exports.modules = {

/***/ 7412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _framework_order_get_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1242);
/* harmony import */ var _framework_product_use_price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4718);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);







const OrderItemCard = ({
  product
}) => {
  const {
    price: itemOriginalTotal
  } = (0,_framework_product_use_price__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP)({
    amount: product.originalPrice * product.quantity,
    currencyCode: "INR"
  });
  const {
    price: itemTotal
  } = (0,_framework_product_use_price__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP)({
    amount: product.price * product.quantity,
    currencyCode: "INR"
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
    className: "border-b font-normal border-gray-300 last:border-b-0",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
      className: "p-4",
      children: [product.productName, " * ", product.quantity]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
      className: "p-4",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        style: {
          fontWeight: 'bolder'
        },
        children: itemTotal
      }), "  ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        style: {
          textDecoration: 'line-through'
        },
        children: ["  ", itemOriginalTotal, "  "]
      })]
    })]
  }, product.id);
};

const OrderDetails = ({
  className = "pt-10 lg:pt-12"
}) => {
  const {
    query: {
      id
    }
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)("common");
  const {
    data: order,
    isLoading
  } = (0,_framework_order_get_order__WEBPACK_IMPORTED_MODULE_1__/* .useOrderQuery */ .O)(id === null || id === void 0 ? void 0 : id.toString()); // const products = order?.cart;
  // const paymentDetails = order?.ccavData;

  const {
    price: subtotal
  } = (0,_framework_product_use_price__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP)(order && {
    amount: order.subTotal,
    currencyCode: "INR"
  });
  const {
    price: total
  } = (0,_framework_product_use_price__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP)(order && {
    amount: order.total,
    currencyCode: "INR"
  });
  const {
    price: shipping
  } = (0,_framework_product_use_price__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP)(order && {
    amount: order === null || order === void 0 ? void 0 : order.shipping,
    currencyCode: "INR"
  });
  const {
    price: discount
  } = (0,_framework_product_use_price__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP)(order && {
    amount: order === null || order === void 0 ? void 0 : order.discount,
    currencyCode: "INR"
  });
  if (isLoading) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
    children: "Loading..."
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
      className: "text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8",
      children: [t("text-order-details"), ":"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
      className: "w-full text-heading font-semibold text-sm lg:text-base",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
            className: "bg-gray-150 p-4 text-start first:rounded-ts-md w-1/2",
            children: t("text-product")
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
            className: "bg-gray-150 p-4 text-start last:rounded-te-md w-1/2",
            children: t("text-total")
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
        children: order === null || order === void 0 ? void 0 : order.cart.map((product, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OrderItemCard, {
          product: product
        }, index))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tfoot", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
          className: "odd:bg-gray-150",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
            className: "p-4 italic",
            children: [t("text-sub-total"), ":"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
            className: "p-4",
            children: [total, "  ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
              style: {
                textDecoration: 'line-through'
              },
              children: ["  ", subtotal]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
          className: "odd:bg-gray-150",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
            className: "p-4 italic",
            children: "Order Status:"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
            className: "p-4",
            children: order === null || order === void 0 ? void 0 : order.status
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
          className: "odd:bg-gray-150",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
            className: "p-4 italic",
            children: [t("text-shipping"), ":"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
            className: "p-4",
            children: [shipping !== null && shipping !== void 0 ? shipping : "0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
              className: "text-[13px] font-normal ps-1.5 inline-block",
              children: "via Flat rate"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
          className: "odd:bg-gray-150",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
            className: "p-4 italic",
            children: "Shipping Address:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
            className: "p-4",
            children: [order === null || order === void 0 ? void 0 : order.user_info.name, ": ", order === null || order === void 0 ? void 0 : order.user_info.address, ", ", order === null || order === void 0 ? void 0 : order.user_info.city, ", ", order === null || order === void 0 ? void 0 : order.user_info.country, ", ", order === null || order === void 0 ? void 0 : order.user_info.zipCode, " "]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
          className: "odd:bg-gray-150",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
            className: "p-4 italic",
            children: "Contact:"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
            className: "p-4",
            children: order === null || order === void 0 ? void 0 : order.user_info.phone
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
          className: "odd:bg-gray-150",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
            className: "p-4 italic",
            children: [t("text-payment-method"), ":"]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
            className: "p-4",
            children: order === null || order === void 0 ? void 0 : order.paymentMethod
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
          className: "odd:bg-gray-150",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
            className: "p-4 italic",
            children: "Discount Amount:"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
            className: "p-4",
            children: discount
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
          className: "odd:bg-gray-150",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
            className: "p-4 italic",
            children: [t("text-total"), ":"]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
            className: "p-4",
            children: total
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
          className: "odd:bg-gray-150",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
            className: "p-4 italic",
            children: [t("text-note"), ":"]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
            className: "p-4",
            children: "New Order"
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderDetails);

/***/ }),

/***/ 1242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useOrderQuery)
/* harmony export */ });
/* unused harmony export fetchOrder */
/* harmony import */ var _framework_utils_https__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7790);
/* harmony import */ var _framework_utils_api_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3833);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2585);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);



const fetchOrder = async _id => {
  const {
    data
  } = await _framework_utils_https__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .Z.get(`${_framework_utils_api_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.ORDER */ .P.ORDER}${_id}`);
  console.log(data);
  return data;
};
const useOrderQuery = id => {
  return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([_framework_utils_api_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.ORDER */ .P.ORDER, id], () => fetchOrder(id));
};

/***/ })

};
;