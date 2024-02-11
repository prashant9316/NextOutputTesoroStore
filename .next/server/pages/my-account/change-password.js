"use strict";
(() => {
var exports = {};
exports.id = 8145;
exports.ids = [8145];
exports.modules = {

/***/ 9732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ChangePasswordPage),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./src/components/layout/layout.tsx + 24 modules
var layout = __webpack_require__(239);
// EXTERNAL MODULE: ./src/components/my-account/account-layout.tsx + 2 modules
var account_layout = __webpack_require__(7613);
// EXTERNAL MODULE: ./src/components/ui/password-input.tsx + 2 modules
var password_input = __webpack_require__(3205);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(1553);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
// EXTERNAL MODULE: ./src/utils/motion/fade-in-top.ts
var fade_in_top = __webpack_require__(2559);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
;// CONCATENATED MODULE: ./src/framework/basic-rest/customer/use-change-password.tsx
// import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
// import http from "@framework/utils/http";


async function changePassword(input) {
  // return http.post(API_ENDPOINTS.ChangePassword, input);
  return input;
}

const useChangePasswordMutation = () => {
  return (0,external_react_query_.useMutation)(input => changePassword(input), {
    onSuccess: data => {
      console.log(data, "ChangePassword success response");
    },
    onError: data => {
      console.log(data, "ChangePassword error response");
    }
  });
};
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
;// CONCATENATED MODULE: ./src/components/my-account/change-password.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const defaultValues = {
  oldPassword: "",
  newPassword: ""
};

const ChangePassword = () => {
  var _errors$oldPassword, _errors$newPassword;

  const {
    mutate: changePassword,
    isLoading
  } = useChangePasswordMutation();
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
    changePassword(input);
  }

  const {
    t
  } = (0,external_next_i18next_.useTranslation)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: "text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8",
      children: t("common:text-change-password")
    }), /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.div, {
      layout: true,
      initial: "from",
      animate: "to",
      exit: "from" //@ts-ignore
      ,
      variants: (0,fade_in_top/* fadeInTop */.E)(0.35),
      className: `w-full flex  h-full lg:w-8/12 flex-col`,
      children: /*#__PURE__*/jsx_runtime_.jsx("form", {
        onSubmit: handleSubmit(onSubmit),
        className: "w-full mx-auto flex flex-col justify-center ",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col space-y-3",
          children: [/*#__PURE__*/jsx_runtime_.jsx(password_input/* default */.Z, _objectSpread(_objectSpread({
            labelKey: "forms:label-old-password",
            errorKey: (_errors$oldPassword = errors.oldPassword) === null || _errors$oldPassword === void 0 ? void 0 : _errors$oldPassword.message
          }, register("oldPassword", {
            required: "forms:password-old-required"
          })), {}, {
            className: "mb-4"
          })), /*#__PURE__*/jsx_runtime_.jsx(password_input/* default */.Z, _objectSpread(_objectSpread({
            labelKey: "forms:label-new-password",
            errorKey: (_errors$newPassword = errors.newPassword) === null || _errors$newPassword === void 0 ? void 0 : _errors$newPassword.message
          }, register("newPassword", {
            required: "forms:label-new-password"
          })), {}, {
            className: "mb-4"
          })), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "relative",
            children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
              type: "submit",
              loading: isLoading,
              disabled: isLoading,
              className: "h-13 mt-3",
              children: t("common:text-change-password")
            })
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const change_password = (ChangePassword);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(3295);
;// CONCATENATED MODULE: ./src/pages/my-account/change-password.tsx


function change_password_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function change_password_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { change_password_ownKeys(Object(source), true).forEach(function (key) { change_password_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { change_password_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function change_password_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function ChangePasswordPage() {
  return /*#__PURE__*/jsx_runtime_.jsx(account_layout/* default */.Z, {
    children: /*#__PURE__*/jsx_runtime_.jsx(change_password, {})
  });
}
ChangePasswordPage.Layout = layout/* default */.Z;
const getStaticProps = async ({
  locale
}) => {
  return {
    props: change_password_objectSpread({}, await (0,serverSideTranslations_.serverSideTranslations)(locale, ["common", "forms", "menu", "footer"]))
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
var __webpack_exports__ = __webpack_require__.X(0, [8453,9583,9300,926,2095,239,3977,7077,7181,6722,3205,7613], () => (__webpack_exec__(9732)));
module.exports = __webpack_exports__;

})();