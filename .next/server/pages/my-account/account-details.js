"use strict";
(() => {
var exports = {};
exports.id = 7905;
exports.ids = [7905];
exports.modules = {

/***/ 3585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ useUpdateUserMutation)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2585);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
// import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
// import http from "@framework/utils/http";


async function updateUser(input) {
  // return http.post(API_ENDPOINTS.ChangeEmail, input);
  return input;
}

const useUpdateUserMutation = () => {
  return (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(input => updateUser(input), {
    onSuccess: data => {
      console.log(data, "UpdateUser success response");
    },
    onError: data => {
      console.log(data, "UpdateUser error response");
    }
  });
};

/***/ }),

/***/ 7056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AccountDetailsPage),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./src/components/layout/layout.tsx + 24 modules
var layout = __webpack_require__(239);
// EXTERNAL MODULE: ./src/components/my-account/account-layout.tsx + 2 modules
var account_layout = __webpack_require__(7613);
// EXTERNAL MODULE: ./src/components/ui/input.tsx
var input = __webpack_require__(3977);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(1553);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
// EXTERNAL MODULE: ./src/utils/motion/fade-in-top.ts
var fade_in_top = __webpack_require__(2559);
// EXTERNAL MODULE: ./src/framework/basic-rest/customer/use-update-customer.tsx
var use_update_customer = __webpack_require__(3585);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
;// CONCATENATED MODULE: ./src/components/ui/radiobox.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const RadioBox = /*#__PURE__*/external_react_default().forwardRef((_ref, ref) => {
  let {
    labelKey
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["labelKey"]);

  const {
    t
  } = (0,external_next_i18next_.useTranslation)("forms");
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
    className: "group flex items-center text-heading text-sm cursor-pointer",
    children: [/*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({
      type: "radio",
      className: "form-radio w-5 h-5 border border-gray-300 text-heading rounded-full cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading",
      ref: ref
    }, rest)), /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "ms-2 text-sm text-heading relative",
      children: t(`${labelKey}`)
    })]
  });
});
;// CONCATENATED MODULE: ./src/components/my-account/account-details.tsx



function account_details_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function account_details_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { account_details_ownKeys(Object(source), true).forEach(function (key) { account_details_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { account_details_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function account_details_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const defaultValues = {};

const AccountDetails = () => {
  var _errors$firstName, _errors$lastName, _errors$displayName, _errors$phoneNumber, _errors$email;

  const {
    mutate: updateUser,
    isLoading
  } = (0,use_update_customer/* useUpdateUserMutation */.k)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)();
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = (0,external_react_hook_form_.useForm)({
    defaultValues
  });

  function onSubmit(input) {
    updateUser(input);
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.div, {
    layout: true,
    initial: "from",
    animate: "to",
    exit: "from" //@ts-ignore
    ,
    variants: (0,fade_in_top/* fadeInTop */.E)(0.35),
    className: `w-full flex flex-col`,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: "text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8",
      children: t("common:text-account-details")
    }), /*#__PURE__*/jsx_runtime_.jsx("form", {
      onSubmit: handleSubmit(onSubmit),
      className: "w-full mx-auto flex flex-col justify-center ",
      noValidate: true,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col space-y-4 sm:space-y-5",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0",
          children: [/*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, account_details_objectSpread(account_details_objectSpread({
            labelKey: "forms:label-first-name"
          }, register("firstName", {
            required: "forms:first-name-required"
          })), {}, {
            variant: "solid",
            className: "w-full sm:w-1/2",
            errorKey: (_errors$firstName = errors.firstName) === null || _errors$firstName === void 0 ? void 0 : _errors$firstName.message
          })), /*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, account_details_objectSpread(account_details_objectSpread({
            labelKey: "forms:label-last-name"
          }, register("lastName", {
            required: "forms:last-name-required"
          })), {}, {
            variant: "solid",
            className: "w-full sm:w-1/2",
            errorKey: (_errors$lastName = errors.lastName) === null || _errors$lastName === void 0 ? void 0 : _errors$lastName.message
          }))]
        }), /*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, account_details_objectSpread(account_details_objectSpread({
          labelKey: "forms:label-display-name"
        }, register("displayName", {
          required: "forms:display-name-required"
        })), {}, {
          variant: "solid",
          errorKey: (_errors$displayName = errors.displayName) === null || _errors$displayName === void 0 ? void 0 : _errors$displayName.message
        })), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0",
          children: [/*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, account_details_objectSpread(account_details_objectSpread({
            type: "tel",
            labelKey: "forms:label-phone"
          }, register("phoneNumber", {
            required: "forms:phone-required"
          })), {}, {
            variant: "solid",
            className: "w-full sm:w-1/2",
            errorKey: (_errors$phoneNumber = errors.phoneNumber) === null || _errors$phoneNumber === void 0 ? void 0 : _errors$phoneNumber.message
          })), /*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, account_details_objectSpread(account_details_objectSpread({
            type: "email",
            labelKey: "forms:label-email-star"
          }, register("email", {
            required: "forms:email-required",
            pattern: {
              value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "forms:email-error"
            }
          })), {}, {
            variant: "solid",
            className: "w-full sm:w-1/2",
            errorKey: (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message
          }))]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "relative flex flex-col",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "mt-2 text-sm text-heading font-semibold block pb-1",
            children: t("common:text-gender")
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "mt-2 flex items-center space-s-6",
            children: [/*#__PURE__*/jsx_runtime_.jsx(RadioBox, account_details_objectSpread(account_details_objectSpread({
              labelKey: "forms:label-male"
            }, register("gender")), {}, {
              value: "male"
            })), /*#__PURE__*/jsx_runtime_.jsx(RadioBox, account_details_objectSpread(account_details_objectSpread({
              labelKey: "forms:label-female"
            }, register("gender")), {}, {
              value: "female"
            }))]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "relative",
          children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
            type: "submit",
            loading: isLoading,
            disabled: isLoading,
            className: "h-12 mt-3 w-full sm:w-32",
            children: t("common:button-save")
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const account_details = (AccountDetails);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(3295);
;// CONCATENATED MODULE: ./src/pages/my-account/account-details.tsx


function my_account_account_details_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function my_account_account_details_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { my_account_account_details_ownKeys(Object(source), true).forEach(function (key) { my_account_account_details_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { my_account_account_details_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function my_account_account_details_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function AccountDetailsPage() {
  return /*#__PURE__*/jsx_runtime_.jsx(account_layout/* default */.Z, {
    children: /*#__PURE__*/jsx_runtime_.jsx(account_details, {})
  });
}
AccountDetailsPage.Layout = layout/* default */.Z;
const getStaticProps = async ({
  locale
}) => {
  return {
    props: my_account_account_details_objectSpread({}, await (0,serverSideTranslations_.serverSideTranslations)(locale, ["common", "forms", "menu", "footer"]))
  };
};

/***/ }),

/***/ 2559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ fadeInTop)
/* harmony export */ });
function fadeInTop(duration = 0.5) {
  return {
    from: {
      position: 'relative',
      top: "50px",
      opacity: 0,
      transition: {
        type: 'easeInOut',
        duration: duration
      }
    },
    to: {
      position: 'relative',
      top: "0",
      opacity: 1,
      transition: {
        type: 'easeInOut',
        duration: duration
      }
    }
  };
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

/***/ 762:
/***/ ((module) => {

module.exports = require("framer-motion");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8453,9583,9300,926,2095,239,3977,7077,7181,6722,7613], () => (__webpack_exec__(7056)));
module.exports = __webpack_exports__;

})();