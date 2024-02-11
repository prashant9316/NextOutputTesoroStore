(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 4389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
// EXTERNAL MODULE: ./src/contexts/ui.context.tsx
var ui_context = __webpack_require__(7014);
;// CONCATENATED MODULE: external "@reach/portal"
const portal_namespaceObject = require("@reach/portal");
var portal_default = /*#__PURE__*/__webpack_require__.n(portal_namespaceObject);
// EXTERNAL MODULE: external "body-scroll-lock"
var external_body_scroll_lock_ = __webpack_require__(8023);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/react-icons/io5/index.esm.js
var index_esm = __webpack_require__(155);
;// CONCATENATED MODULE: ./src/utils/motion/fade-in-out.ts
function fadeInOut(duration = 0.2) {
  return {
    from: {
      opacity: 0,
      transition: {
        type: 'easeInOut',
        duration: duration
      }
    },
    to: {
      opacity: 1,
      transition: {
        type: 'easeInOut',
        duration: duration
      }
    }
  };
}
;// CONCATENATED MODULE: ./src/utils/motion/zoom-out-in.ts
function zoomOutIn(duration = 0.2) {
  return {
    from: {
      scale: 1.1,
      transition: {
        type: 'easeOut',
        duration: duration
      }
    },
    to: {
      scale: 1,
      transition: {
        type: 'easeOut',
        duration: duration
      }
    }
  };
}
;// CONCATENATED MODULE: ./src/utils/use-click-outside.ts

function useOnClickOutside(ref, handler) {
  (0,external_react_.useEffect)(() => {
    const listener = event => {
      const el = ref === null || ref === void 0 ? void 0 : ref.current;

      if (!el || el.contains((event === null || event === void 0 ? void 0 : event.target) || null)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
;// CONCATENATED MODULE: ./src/components/common/modal/modal.tsx












// variant based classes for modal root, container & close btn
const rootClasses = {
  center: "p-4 md:p-5",
  bottom: "p-5 pb-0"
};
const containerClasses = {
  center: "h-auto max-h-full top-1/2 -translate-y-1/2 rounded-lg",
  bottom: "h-full max-h-70vh bottom-0 rounded-ts-2xl rounded-te-2xl"
};
const closeBtnClasses = {
  center: "top-4 end-4",
  bottom: "top-1/4 start-1/2 transform -translate-y-1/2 -translate-x-1/2"
};

const Modal = ({
  children,
  open,
  onClose,
  rootClassName,
  useBlurBackdrop,
  containerClassName,
  variant = "center"
}) => {
  const {
    closeModal
  } = (0,ui_context/* useUI */.l8)();
  const modalRootRef = (0,external_react_.useRef)();
  const modalInnerRef = (0,external_react_.useRef)();
  useOnClickOutside(modalInnerRef, () => closeModal());
  (0,external_react_.useEffect)(() => {
    if (modalInnerRef.current) {
      if (open) {
        (0,external_body_scroll_lock_.disableBodyScroll)(modalInnerRef.current);
      } else {
        (0,external_body_scroll_lock_.enableBodyScroll)(modalInnerRef.current);
      }
    }

    return () => {
      (0,external_body_scroll_lock_.clearAllBodyScrollLocks)();
    };
  }, [open]);
  return /*#__PURE__*/jsx_runtime_.jsx((portal_default()), {
    children: /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
      children: open && /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.div, {
        ref: modalRootRef,
        initial: "from",
        animate: "to",
        exit: "from",
        variants: fadeInOut(0.25),
        className: external_classnames_default()("modal-root fixed bg-black bg-opacity-70 inset-0 z-50", useBlurBackdrop && "backdrop-filter backdrop-blur-sm", rootClasses[variant], rootClassName),
        children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: onClose,
          "aria-label": "Close panel",
          className: external_classnames_default()("fixed z-10 inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-white shadow text-gray-600 transition duration-200 focus:outline-none focus:text-gray-800 focus:shadow-md hover:text-gray-800 hover:shadow-md", closeBtnClasses[variant]),
          children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* IoClose */.bjh, {
            className: "text-xl"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.div, {
          initial: "from",
          animate: "to",
          exit: "from",
          variants: zoomOutIn(),
          className: "relative h-full mx-auto w-full",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: external_classnames_default()("w-full md:w-auto absolute left-1/2 transform -translate-x-1/2 shadow-xl", containerClasses[variant], containerClassName),
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              ref: modalInnerRef,
              className: "overflow-y-auto h-full rounded-lg",
              style: {
                maxHeight: "calc(100vh - 140px)"
              },
              children: children
            })
          })
        })]
      }, "modal")
    })
  });
};

/* harmony default export */ const modal = (Modal);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(1553);
// EXTERNAL MODULE: ./src/components/ui/input.tsx
var input = __webpack_require__(3977);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
;// CONCATENATED MODULE: ./src/components/common/newsletter.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const defaultValues = {
  email: ""
};
function Newsletter() {
  var _errors$email;

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = (0,external_react_hook_form_.useForm)({
    defaultValues
  });
  const {
    closeModal
  } = (0,ui_context/* useUI */.l8)();

  function onSubmit(values) {
    console.log(values, "news letter");
    closeModal();
  }

  const {
    t
  } = (0,external_next_i18next_.useTranslation)();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "flex items-center justify-center overflow-hidden",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-full sm:w-[450px] md:w-[550px] lg:w-[980px] xl:w-[1170px] flex flex-col max-w-full max-h-full bg-white overflow-hidden rounded-md",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex-shrink-0 items-center justify-center bg-gray-200 overflow-hidden lg:flex lg:w-[520px] xl:w-auto",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: "/assets/images/new-products/alertsBanner.jpg",
            alt: "Thumbnail",
            width: 655,
            height: 655,
            className: "object-cover w-full h-full"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col px-5 py-7 sm:p-10 md:p-12 xl:p-14 text-center w-full",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
            className: "uppercase font-semibold text-xs sm:text-sm text-body mb-2 lg:mb-4",
            children: t("common:text-subscribe-now")
          }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "text-heading text-lg sm:text-xl md:text-2xl leading-8 font-bold mb-5 sm:mb-7 md:mb-9",
            children: t("common:text-newsletter-title")
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-body text-sm leading-6 md:leading-7",
            children: t("common:text-newsletter-subtitle")
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
            className: "pt-8 sm:pt-10 md:pt-14 mb-1 sm:mb-0",
            onSubmit: handleSubmit(onSubmit),
            children: [/*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, _objectSpread(_objectSpread({
              placeholderKey: "forms:placeholder-email-subscribe",
              type: "email",
              variant: "solid",
              className: "w-full",
              inputClassName: "px-4 lg:px-7 h-12 lg:h-14 text-center bg-gray-50"
            }, register("email", {
              required: "forms:email-required",
              pattern: {
                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "forms:email-error"
              }
            })), {}, {
              errorKey: (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message
            })), /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
              className: "w-full h-12 lg:h-14 mt-3 sm:mt-4",
              children: t("common:button-subscribe")
            })]
          })]
        })]
      })
    })
  });
}
;// CONCATENATED MODULE: ./src/components/common/modal/managed-modal.tsx






const LoginForm = dynamic_default()(() => Promise.all(/* import() */[__webpack_require__.e(9300), __webpack_require__.e(926), __webpack_require__.e(3205), __webpack_require__.e(3945)]).then(__webpack_require__.bind(__webpack_require__, 3945)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3945)],
    modules: ["..\\components\\common\\modal\\managed-modal.tsx -> " + "@components/auth/login-form"]
  }
});
const SignUpForm = dynamic_default()(() => Promise.all(/* import() */[__webpack_require__.e(9300), __webpack_require__.e(926), __webpack_require__.e(3205), __webpack_require__.e(7061)]).then(__webpack_require__.bind(__webpack_require__, 7061)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7061)],
    modules: ["..\\components\\common\\modal\\managed-modal.tsx -> " + "@components/auth/sign-up-form"]
  }
});
const ForgetPasswordForm = dynamic_default()(() => Promise.all(/* import() */[__webpack_require__.e(9300), __webpack_require__.e(9436)]).then(__webpack_require__.bind(__webpack_require__, 9436)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9436)],
    modules: ["..\\components\\common\\modal\\managed-modal.tsx -> " + "@components/auth/forget-password-form"]
  }
});
const ProductPopup = dynamic_default()(() => Promise.all(/* import() */[__webpack_require__.e(1223), __webpack_require__.e(7696)]).then(__webpack_require__.bind(__webpack_require__, 7696)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7696)],
    modules: ["..\\components\\common\\modal\\managed-modal.tsx -> " + "@components/product/product-popup"]
  }
});

const ManagedModal = () => {
  const {
    displayModal,
    closeModal,
    modalView
  } = (0,ui_context/* useUI */.l8)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(modal, {
    open: displayModal,
    onClose: closeModal,
    children: [modalView === "LOGIN_VIEW" && /*#__PURE__*/jsx_runtime_.jsx(LoginForm, {}), modalView === "SIGN_UP_VIEW" && /*#__PURE__*/jsx_runtime_.jsx(SignUpForm, {}), modalView === "FORGET_PASSWORD" && /*#__PURE__*/jsx_runtime_.jsx(ForgetPasswordForm, {}), modalView === "PRODUCT_VIEW" && /*#__PURE__*/jsx_runtime_.jsx(ProductPopup, {}), modalView === "NEWSLETTER_VIEW" && /*#__PURE__*/jsx_runtime_.jsx(Newsletter, {})]
  });
};

/* harmony default export */ const managed_modal = (ManagedModal);
// EXTERNAL MODULE: ./src/components/common/scrollbar.tsx
var scrollbar = __webpack_require__(4228);
// EXTERNAL MODULE: ./src/contexts/cart/cart.context.tsx + 3 modules
var cart_context = __webpack_require__(9745);
// EXTERNAL MODULE: ./src/framework/basic-rest/product/use-price.tsx
var use_price = __webpack_require__(4718);
// EXTERNAL MODULE: ./src/components/ui/link.tsx
var ui_link = __webpack_require__(3407);
// EXTERNAL MODULE: ./node_modules/react-icons/io/index.esm.js
var io_index_esm = __webpack_require__(1649);
// EXTERNAL MODULE: ./src/components/common/counter.tsx + 2 modules
var counter = __webpack_require__(7428);
// EXTERNAL MODULE: ./src/utils/routes.ts
var routes = __webpack_require__(9524);
// EXTERNAL MODULE: ./src/utils/generate-cart-item-name.ts + 1 modules
var generate_cart_item_name = __webpack_require__(162);
;// CONCATENATED MODULE: ./src/components/cart/cart-item.tsx














const CartItem = ({
  item
}) => {
  var _item$image;

  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  const {
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart
  } = (0,cart_context/* useCart */.jD)();
  const {
    price
  } = (0,use_price/* default */.ZP)({
    amount: item.price,
    currencyCode: "INR"
  });
  const {
    price: totalPrice
  } = (0,use_price/* default */.ZP)({
    amount: item.itemTotal,
    currencyCode: "INR"
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.div, {
    layout: true,
    initial: "from",
    animate: "to",
    exit: "from",
    variants: fadeInOut(0.25),
    className: `group w-full h-auto flex justify-start items-center bg-white py-4 md:py-7 border-b border-gray-100 relative last:border-b-0`,
    title: item === null || item === void 0 ? void 0 : item.name,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "relative flex w-24 md:w-28 h-24 md:h-28 rounded-md overflow-hidden bg-gray-200 flex-shrink-0 cursor-pointer me-4",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: (_item$image = item === null || item === void 0 ? void 0 : item.image) !== null && _item$image !== void 0 ? _item$image : "/assets/placeholder/cart-item.svg",
        width: 112,
        height: 112,
        loading: "eager",
        alt: item.name || "Product Image",
        className: "bg-gray-300 object-cover"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "absolute top-0 start-0 h-full w-full bg-black bg-opacity-30 md:bg-opacity-0 flex justify-center items-center transition duration-200 ease-in-out md:group-hover:bg-opacity-30",
        onClick: () => clearItemFromCart(item.id),
        role: "button",
        children: /*#__PURE__*/jsx_runtime_.jsx(io_index_esm/* IoIosCloseCircle */.FMH, {
          className: "relative text-white text-2xl transform md:scale-0 md:opacity-0 transition duration-300 ease-in-out md:group-hover:scale-100 md:group-hover:opacity-100"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col w-full overflow-hidden",
      children: [/*#__PURE__*/jsx_runtime_.jsx(ui_link/* default */.Z, {
        href: `${routes/* ROUTES.PRODUCT */.Z.PRODUCT}/${item === null || item === void 0 ? void 0 : item.slug}`,
        className: "truncate text-sm text-heading mb-1.5 -mt-1",
        children: (0,generate_cart_item_name/* generateCartItemName */.o)(item.name, item.attributes)
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "text-sm text-gray-400 mb-2.5",
        children: [t("text-unit-price"), " : \xA0", price]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-end justify-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx(counter/* default */.Z, {
          quantity: item.quantity,
          onIncrement: () => addItemToCart(item, 1),
          onDecrement: () => removeItemFromCart(item.id),
          variant: "dark"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "font-semibold text-sm md:text-base text-heading leading-5",
          children: totalPrice
        })]
      })]
    })]
  });
};

/* harmony default export */ const cart_item = (CartItem);
;// CONCATENATED MODULE: ./src/components/cart/empty-cart.tsx




const EmptyCart = ({
  width = 180,
  height = 309.722,
  className
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    width: width,
    height: height,
    className: className,
    viewBox: "0 0 180 309.722",
    children: /*#__PURE__*/jsx_runtime_.jsx("g", {
      id: "no_cart_in_bag",
      "data-name": "no cart in bag",
      transform: "translate(-988 -7673)",
      children: /*#__PURE__*/jsx_runtime_.jsx("g", {
        id: "no_cart",
        "data-name": "no cart",
        transform: "translate(988 7673)",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
          id: "Group_5970",
          "data-name": "Group 5970",
          transform: "translate(0 0)",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
            id: "Group_5967",
            "data-name": "Group 5967",
            transform: "translate(17.408 92.119)",
            children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
              id: "Path_17743",
              "data-name": "Path 17743",
              d: "M405.506,794.581l63.621-36.762L418.2,724.274Z",
              transform: "translate(-323.428 -576.978)",
              fill: "#ba8064"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              id: "Path_17744",
              "data-name": "Path 17744",
              d: "M135.711,140.727l32.918-.12,1.287-20.225,79.451,45.843-34.42,1.084v19.165Z",
              transform: "translate(-118.988 -119.373)",
              fill: "#dba480"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              id: "Path_17745",
              "data-name": "Path 17745",
              d: "M314.4,206.341,272,124.761l-2.279,22.008,1.4,59.572Z",
              transform: "translate(-220.537 -122.691)",
              fill: "#460100",
              opacity: "0.1"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              id: "Path_17746",
              "data-name": "Path 17746",
              d: "M141.237,253.056l-10.26-47.388,34.59-.126v37.243Z",
              transform: "translate(-115.402 -183.904)",
              fill: "#995b47"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              id: "Path_17747",
              "data-name": "Path 17747",
              d: "M511.029,445.295l-49.136-22.179L460.8,385.489l1.089-72.515,35.954-1.133Z",
              transform: "translate(-365.33 -264.454)",
              fill: "#a96e56"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              id: "Path_17748",
              "data-name": "Path 17748",
              d: "M148.755,398.756l9.58-70.307,4.9-79.149L81.161,201.911,66.677,351.368Z",
              transform: "translate(-66.677 -181.153)",
              fill: "#dba480"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              id: "Path_17749",
              "data-name": "Path 17749",
              d: "M349.459,429.379c-.415,1.942-2.182,2.6-3.948,1.46a5.753,5.753,0,0,1-2.446-5.572c.414-1.942,2.182-2.6,3.948-1.46A5.753,5.753,0,0,1,349.459,429.379Z",
              transform: "translate(-276.046 -348.874)",
              fill: "#67251d"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              id: "Path_17750",
              "data-name": "Path 17750",
              d: "M209.819,348.753c-.415,1.942-2.182,2.6-3.948,1.46a5.753,5.753,0,0,1-2.446-5.572c.415-1.942,2.182-2.6,3.948-1.46A5.753,5.753,0,0,1,209.819,348.753Z",
              transform: "translate(-170.233 -287.779)",
              fill: "#67251d"
            }), /*#__PURE__*/jsx_runtime_.jsx("g", {
              id: "Group_5965",
              "data-name": "Group 5965",
              transform: "translate(31.503 60.166)",
              opacity: "0.2",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                id: "Path_17751",
                "data-name": "Path 17751",
                d: "M219.35,441.507a16.861,16.861,0,0,1-8.439-2.272A28.35,28.35,0,0,1,196.858,412l4.383-45.226a2.414,2.414,0,0,1,4.806.467l-4.383,45.226a23.483,23.483,0,0,0,11.608,22.554,12.055,12.055,0,0,0,18.081-9.247l3.819-39.41a2.414,2.414,0,0,1,4.806.467l-3.819,39.41a16.912,16.912,0,0,1-16.809,15.266Z",
                transform: "translate(-196.727 -364.591)",
                fill: "#460100"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              id: "Path_17752",
              "data-name": "Path 17752",
              d: "M162.373,116.218,161.06,136.85l-34.59.126,82.078,47.388V164.738l35.954-1.132Zm44.968,47.351v18.7l-76.395-44.106,31.247-.113,1.261-19.819,76.774,44.3Z",
              transform: "translate(-111.986 -116.218)",
              fill: "#fcc89d"
            }), /*#__PURE__*/jsx_runtime_.jsx("g", {
              id: "Group_5966",
              "data-name": "Group 5966",
              transform: "translate(29.24 57.45)",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                id: "Path_17753",
                "data-name": "Path 17753",
                d: "M210.007,430.3a16.864,16.864,0,0,1-8.438-2.271,28.35,28.35,0,0,1-14.054-27.235l4.383-45.226a2.414,2.414,0,0,1,4.806.467l-4.383,45.226a23.483,23.483,0,0,0,11.608,22.554,12.055,12.055,0,0,0,18.081-9.247l3.819-39.41a2.414,2.414,0,0,1,4.806.467l-3.819,39.41A16.912,16.912,0,0,1,210.007,430.3Z",
                transform: "translate(-187.384 -353.38)",
                fill: "#995b47"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              id: "Path_17754",
              "data-name": "Path 17754",
              d: "M405.506,546.991,419.99,488.05V397.534Z",
              transform: "translate(-323.428 -329.388)",
              fill: "#995b47"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
            id: "Group_5968",
            "data-name": "Group 5968",
            transform: "translate(0 0)",
            children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
              id: "Path_17755",
              "data-name": "Path 17755",
              d: "M394.573,120.6c-.142-.5.244-.855.5-1.088a1.4,1.4,0,0,0,.271-.293,0,0,0,0,0,0,0,1.39,1.39,0,0,0-.384-.107c-.34-.065-.853-.162-1-.665s.244-.855.5-1.088a1.39,1.39,0,0,0,.271-.293,0,0,0,0,0,0,0,1.4,1.4,0,0,0-.384-.107c-.34-.064-.853-.162-1-.664s.244-.855.5-1.088l.009-.008a.9.9,0,0,0,.259-.482.391.391,0,0,1,.276-.292.41.41,0,0,1,.5.316,1.122,1.122,0,0,1-.51,1.046,1.4,1.4,0,0,0-.271.292,0,0,0,0,0,0,0,1.4,1.4,0,0,0,.384.107c.34.065.853.162,1,.665s-.244.855-.5,1.088a1.4,1.4,0,0,0-.271.293,0,0,0,0,0,0,0,1.391,1.391,0,0,0,.384.107c.34.065.853.162,1,.665s-.244.855-.5,1.088a1.257,1.257,0,0,0-.273.3,0,0,0,0,0,0,0,1.641,1.641,0,0,0,.387.1c.331.063.826.157.983.625a.416.416,0,0,1-.21.507.392.392,0,0,1-.456-.109.789.789,0,0,0-.464-.253h0C395.229,121.2,394.716,121.1,394.573,120.6Z",
              transform: "translate(-349.075 -37.518)",
              fill: "#212121",
              opacity: "0.3"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              id: "Path_17765",
              "data-name": "Path 17765",
              d: "M395.468,120.6c.142-.5-.244-.855-.5-1.088a1.4,1.4,0,0,1-.271-.293,0,0,0,0,1,0,0,1.39,1.39,0,0,1,.384-.107c.34-.065.853-.162,1-.665s-.244-.855-.5-1.088a1.389,1.389,0,0,1-.271-.293,0,0,0,0,1,0,0,1.4,1.4,0,0,1,.384-.107c.34-.064.853-.162,1-.664s-.244-.855-.5-1.088l-.009-.008a.9.9,0,0,1-.259-.482.391.391,0,0,0-.276-.292.41.41,0,0,0-.5.316,1.122,1.122,0,0,0,.51,1.046,1.4,1.4,0,0,1,.271.292,0,0,0,0,1,0,0,1.4,1.4,0,0,1-.384.107c-.34.065-.853.162-1,.664s.244.855.5,1.088a1.4,1.4,0,0,1,.271.293,0,0,0,0,1,0,0,1.39,1.39,0,0,1-.384.107c-.34.065-.853.162-1,.665s.244.855.5,1.088a1.257,1.257,0,0,1,.273.3,0,0,0,0,1,0,0,1.641,1.641,0,0,1-.387.1c-.331.063-.826.157-.983.625a.416.416,0,0,0,.21.507.392.392,0,0,0,.456-.109.789.789,0,0,1,.464-.253h0C394.812,121.2,395.326,121.1,395.468,120.6Z",
              transform: "translate(-262.76 -23.736)",
              fill: "#212121",
              opacity: "0.3"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              id: "Path_17756",
              "data-name": "Path 17756",
              d: "M375.447,179.277a2.539,2.539,0,1,1,3.346,1.3A2.542,2.542,0,0,1,375.447,179.277Zm3.737-1.643a1.543,1.543,0,1,0-.791,2.034A1.545,1.545,0,0,0,379.184,177.634Z",
              transform: "translate(-375.232 -52.408)",
              fill: "#212121",
              opacity: "0.3"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              id: "Path_17764",
              "data-name": "Path 17764",
              d: "M375.447,179.277a2.539,2.539,0,1,1,3.346,1.3A2.542,2.542,0,0,1,375.447,179.277Zm3.737-1.643a1.543,1.543,0,1,0-.791,2.034A1.545,1.545,0,0,0,379.184,177.634Z",
              transform: "translate(-333.888 -175.716)",
              fill: "#212121",
              opacity: "0.3"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              id: "Path_17757",
              "data-name": "Path 17757",
              d: "M350.086,264.8a1.852,1.852,0,0,1-2.682-2.547l-.868-.823a3.047,3.047,0,0,0,4.417,4.194Z",
              transform: "translate(-253.642 -206.302)",
              fill: "#212121",
              opacity: "0.3"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              id: "Path_17766",
              "data-name": "Path 17766",
              d: "M346.628,264.8a1.852,1.852,0,0,0,2.682-2.547l.867-.823a3.047,3.047,0,0,1-4.417,4.194Z",
              transform: "translate(-170.953 -110.557)",
              fill: "#212121",
              opacity: "0.15"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              id: "Union_11",
              "data-name": "Union 11",
              d: "M2.059,6.97l.989-3.048L0,2.933.283,2.06l3.049.989L4.321,0,5.2.284l-.99,3.048,3.047.989L6.97,5.2l-3.048-.99-.99,3.049Z",
              transform: "translate(6.528 48.598)",
              fill: "#212121",
              stroke: "rgba(0,0,0,0)",
              "stroke-miterlimit": "10",
              "stroke-width": "1",
              opacity: "0.3"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              id: "Union_13",
              "data-name": "Union 13",
              d: "M2.059,6.97l.989-3.048L0,2.933.283,2.06l3.049.989L4.321,0,5.2.284l-.99,3.048,3.047.989L6.97,5.2l-3.048-.99-.99,3.049Z",
              transform: "translate(94.294 121.132)",
              fill: "#212121",
              stroke: "rgba(0,0,0,0)",
              "stroke-miterlimit": "10",
              "stroke-width": "1",
              opacity: "0.3"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              id: "Union_12",
              "data-name": "Union 12",
              d: "M1.235,4.182l.593-1.829L0,1.759l.17-.524L2,1.829,2.592,0l.525.17L2.523,2l1.828.594-.17.523L2.353,2.523,1.759,4.352Z",
              transform: "translate(107.351 6.528)",
              fill: "#212121",
              stroke: "rgba(0,0,0,0)",
              "stroke-miterlimit": "10",
              "stroke-width": "1",
              opacity: "0.3"
            })]
          })]
        })
      })
    })
  });
};

/* harmony default export */ const empty_cart = (EmptyCart);
;// CONCATENATED MODULE: ./src/components/cart/cart.tsx















function Cart() {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  const {
    closeCart
  } = (0,ui_context/* useUI */.l8)();
  const {
    items,
    total,
    isEmpty
  } = (0,cart_context/* useCart */.jD)();
  const {
    price: cartTotal
  } = (0,use_price/* default */.ZP)({
    amount: total,
    currencyCode: "INR"
  });

  const handleCheckout = () => {// alert("checkout");
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col w-full h-full justify-between",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "w-full flex justify-between items-center relative ps-5 md:ps-7 py-0.5 border-b border-gray-100",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "font-bold text-xl md:text-2xl m-0 text-heading",
        children: t("text-shopping-cart")
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "flex text-2xl items-center justify-center text-gray-500 px-4 md:px-6 py-6 lg:py-8 focus:outline-none transition-opacity hover:opacity-60",
        onClick: closeCart,
        "aria-label": "close",
        children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* IoClose */.bjh, {
          className: "text-black mt-1 md:mt-0.5"
        })
      })]
    }), !isEmpty ? /*#__PURE__*/jsx_runtime_.jsx(scrollbar/* default */.Z, {
      className: "cart-scrollbar w-full flex-grow",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-full px-5 md:px-7",
        children: items === null || items === void 0 ? void 0 : items.map(item => /*#__PURE__*/jsx_runtime_.jsx(cart_item, {
          item: item
        }, item.id))
      })
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.div, {
      layout: true,
      initial: "from",
      animate: "to",
      exit: "from",
      variants: fadeInOut(0.25),
      className: "px-5 md:px-7 pt-8 pb-5 flex justify-center flex-col items-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx(empty_cart, {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "text-lg text-heading font-bold pt-8",
        children: t("text-empty-cart")
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex flex-col px-5 md:px-7 pt-2 pb-5 md:pb-7",
      onClick: isEmpty === false ? handleCheckout : closeCart,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ui_link/* default */.Z, {
        href: isEmpty === false ? routes/* ROUTES.CHECKOUT */.Z.CHECKOUT : "/",
        className: external_classnames_default()("w-full px-5 py-3 md:py-4 flex items-center justify-center bg-heading rounded-md text-sm sm:text-base text-white focus:outline-none transition duration-300 hover:bg-gray-600", {
          "cursor-not-allowed bg-gray-400 hover:bg-gray-400": isEmpty
        }),
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "w-full pe-5 -mt-0.5 py-0.5",
          children: t("text-proceed-to-checkout")
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "ms-auto flex-shrink-0 -mt-0.5 py-0.5",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "border-s border-white pe-5 py-0.5"
          }), cartTotal]
        })]
      })
    })]
  });
}
// EXTERNAL MODULE: ./src/components/common/drawer/drawer.tsx
var drawer = __webpack_require__(1317);
// EXTERNAL MODULE: ./src/utils/get-direction.ts
var get_direction = __webpack_require__(991);
;// CONCATENATED MODULE: ./src/components/common/drawer/managed-drawer.tsx







const ManagedDrawer = () => {
  const {
    displayCart,
    closeCart
  } = (0,ui_context/* useUI */.l8)();
  const {
    locale
  } = (0,router_.useRouter)();
  const dir = (0,get_direction/* getDirection */.M)(locale);
  const contentWrapperCSS = dir === "ltr" ? {
    right: 0
  } : {
    left: 0
  };
  return /*#__PURE__*/jsx_runtime_.jsx(drawer/* Drawer */.d, {
    open: displayCart,
    placement: dir === "rtl" ? "left" : "right",
    onClose: closeCart,
    handler: false,
    showMask: true,
    level: null,
    contentWrapperStyle: contentWrapperCSS,
    children: /*#__PURE__*/jsx_runtime_.jsx(Cart, {})
  });
};

/* harmony default export */ const managed_drawer = (ManagedDrawer);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
// EXTERNAL MODULE: external "react-query/hydration"
var hydration_ = __webpack_require__(9475);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(2364);
// EXTERNAL MODULE: ./src/settings/site-settings.tsx
var site_settings = __webpack_require__(1274);
;// CONCATENATED MODULE: ./src/components/common/default-seo.tsx



const DefaultSeo = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(external_next_seo_.DefaultSeo, {
    title: site_settings/* siteSettings.name */.U.name,
    description: site_settings/* siteSettings.description */.U.description,
    openGraph: {
      type: "website",
      locale: "en_IE",
      site_name: site_settings/* siteSettings.name */.U.name
    },
    twitter: {
      handle: "@handle",
      site: "@site",
      cardType: "summary_large_image"
    },
    additionalMetaTags: [{
      name: "viewport",
      content: "width=device-width, initial-scale=1 maximum-scale=1"
    }, {
      name: "apple-mobile-web-app-capable",
      content: "yes"
    }, {
      name: "theme-color",
      content: "#ffffff"
    }],
    additionalLinkTags: [{
      rel: "apple-touch-icon",
      href: "icons/apple-icon-180.png"
    }, {
      rel: "manifest",
      href: "/manifest.json"
    }]
  });
};
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
;// CONCATENATED MODULE: ./src/pages/_app.tsx





function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 // import { ReactQueryDevtools } from "react-query/devtools";


 // Load Open Sans and satisfy typeface font






 // import "@styles/fonts/Josefin_Sans/JosefinSans.ttf"
// import "@styles/fonts/Inter/inter.ttf"
// external

 // base css file








function handleExitComplete() {
  if (false) {}
}

const Noop = ({
  children
}) => /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
  children: children
});

const CustomApp = ({
  Component,
  pageProps
}) => {
  const queryClientRef = (0,external_react_.useRef)();

  if (!queryClientRef.current) {
    queryClientRef.current = new external_react_query_.QueryClient();
  }

  const router = (0,router_.useRouter)();
  const dir = (0,get_direction/* getDirection */.M)(router.locale);
  (0,external_react_.useEffect)(() => {
    document.documentElement.dir = dir;
  }, [dir]);
  const Layout = Component.Layout || Noop;
  return /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
    exitBeforeEnter: true,
    onExitComplete: handleExitComplete,
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_query_.QueryClientProvider, {
      client: queryClientRef.current,
      children: /*#__PURE__*/jsx_runtime_.jsx(hydration_.Hydrate, {
        state: pageProps.dehydratedState,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ui_context/* ManagedUIContext */.DA, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout, {
            pageProps: pageProps,
            children: [/*#__PURE__*/jsx_runtime_.jsx(DefaultSeo, {}), /*#__PURE__*/(0,external_react_.createElement)(Component, _app_objectSpread(_app_objectSpread({}, pageProps), {}, {
              key: router.route
            })), /*#__PURE__*/jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {})]
          }), /*#__PURE__*/jsx_runtime_.jsx(managed_modal, {}), /*#__PURE__*/jsx_runtime_.jsx(managed_drawer, {})]
        })
      })
    })
  });
};

/* harmony default export */ const _app = ((0,external_next_i18next_.appWithTranslation)(CustomApp));

/***/ }),

/***/ 162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 2376:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 8023:
/***/ ((module) => {

"use strict";
module.exports = require("body-scroll-lock");

/***/ }),

/***/ 4058:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 334:
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ 762:
/***/ ((module) => {

"use strict";
module.exports = require("framer-motion");

/***/ }),

/***/ 6155:
/***/ ((module) => {

"use strict";
module.exports = require("js-cookie");

/***/ }),

/***/ 3089:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/groupBy");

/***/ }),

/***/ 8718:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 8475:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 2364:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 8300:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9639:
/***/ ((module) => {

"use strict";
module.exports = require("next/dynamic");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 1958:
/***/ ((module) => {

"use strict";
module.exports = require("overlayscrollbars-react");

/***/ }),

/***/ 1346:
/***/ ((module) => {

"use strict";
module.exports = require("rc-drawer");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 2662:
/***/ ((module) => {

"use strict";
module.exports = require("react-hook-form");

/***/ }),

/***/ 2585:
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ 9475:
/***/ ((module) => {

"use strict";
module.exports = require("react-query/hydration");

/***/ }),

/***/ 2034:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 173:
/***/ ((module) => {

"use strict";
module.exports = require("react-use/lib/useLocalStorage");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8453,2095,3977,7428], () => (__webpack_exec__(4389)));
module.exports = __webpack_exports__;

})();