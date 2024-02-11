"use strict";
(() => {
var exports = {};
exports.id = 8455;
exports.ids = [8455];
exports.modules = {

/***/ 7103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ContactUsPage),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./src/components/ui/container.tsx
var container = __webpack_require__(9691);
// EXTERNAL MODULE: ./src/components/layout/layout.tsx + 24 modules
var layout = __webpack_require__(239);
// EXTERNAL MODULE: ./src/components/common/subscription.tsx
var subscription = __webpack_require__(7181);
// EXTERNAL MODULE: ./src/components/ui/page-header.tsx
var page_header = __webpack_require__(6722);
// EXTERNAL MODULE: ./src/components/ui/input.tsx
var input = __webpack_require__(3977);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(1553);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: ./src/components/ui/text-area.tsx
var text_area = __webpack_require__(7658);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
;// CONCATENATED MODULE: ./src/components/common/form/contact-form.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const ContactForm = () => {
  var _errors$name, _errors$email, _errors$subject;

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = (0,external_react_hook_form_.useForm)();

  function onSubmit(values) {
    console.log(values, "contact");
  }

  const {
    t
  } = (0,external_next_i18next_.useTranslation)();
  return /*#__PURE__*/jsx_runtime_.jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    className: "w-full mx-auto flex flex-col justify-center ",
    noValidate: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col space-y-5",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col md:flex-row space-y-5 md:space-y-0",
        children: [/*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, _objectSpread(_objectSpread({
          labelKey: "forms:label-name-required",
          placeholderKey: "forms:placeholder-name"
        }, register("name", {
          required: "forms:name-required"
        })), {}, {
          className: "w-full md:w-1/2 ",
          errorKey: (_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message,
          variant: "solid"
        })), /*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, _objectSpread(_objectSpread({
          labelKey: "forms:label-email-required",
          type: "email",
          placeholderKey: "forms:placeholder-email"
        }, register("email", {
          required: "forms:email-required",
          pattern: {
            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "forms:email-error"
          }
        })), {}, {
          className: "w-full md:w-1/2 md:ms-2.5 lg:ms-5 mt-2 md:mt-0",
          errorKey: (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message,
          variant: "solid"
        }))]
      }), /*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, _objectSpread(_objectSpread({
        labelKey: "forms:label-subject"
      }, register("subject", {
        required: "forms:name-subject"
      })), {}, {
        className: "relative",
        placeholderKey: "forms:placeholder-subject",
        errorKey: (_errors$subject = errors.subject) === null || _errors$subject === void 0 ? void 0 : _errors$subject.message,
        variant: "solid"
      })), /*#__PURE__*/jsx_runtime_.jsx(text_area/* default */.Z, _objectSpread(_objectSpread({
        labelKey: "forms:label-message"
      }, register("message")), {}, {
        className: "relative mb-4",
        placeholderKey: "forms:placeholder-message"
      })), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "relative",
        children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
          type: "submit",
          className: "h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto",
          children: t("common:button-send-message")
        })
      })]
    })
  });
};

/* harmony default export */ const contact_form = (ContactForm);
// EXTERNAL MODULE: ./node_modules/react-icons/io5/index.esm.js
var index_esm = __webpack_require__(155);
// EXTERNAL MODULE: ./src/components/ui/link.tsx
var ui_link = __webpack_require__(3407);
;// CONCATENATED MODULE: ./src/containers/contact-info.tsx




 // const mapImage = "/assets/images/map-image.jpg";

const data = [{
  id: 1,
  slug: "/",
  icon: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* IoLocationSharp */.UXH, {}),
  name: "text-address",
  description: "103, First Floor, Vardhman Complex, Savita Vihar, New Delhi- 110092"
}, {
  id: 2,
  slug: "/",
  icon: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* IoMail */.GYo, {}),
  name: "text-email",
  description: "support@tesorostore.in"
}, {
  id: 3,
  slug: "/",
  icon: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* IoCallSharp */.uYX, {}),
  name: "text-phone",
  description: "+91 96549 70705"
}];

const ContactInfoBlock = () => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "mb-6 lg:border lg:rounded-md border-gray-300 lg:p-7",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
      className: "text-2xl md:text-lg font-bold text-heading pb-7 md:pb-10 lg:pb-6 -mt-1",
      children: t("text-find-us-here")
    }), data === null || data === void 0 ? void 0 : data.map(item => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex pb-7",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex flex-shrink-0 justify-center items-center p-1.5 border rounded-md border-gray-300 w-10 h-10",
        children: item.icon
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col ps-3 2xl:ps-4",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
          className: "text-sm font-bold text-heading",
          children: t(`${item.name}`)
        }), /*#__PURE__*/jsx_runtime_.jsx(ui_link/* default */.Z, {
          href: item.slug,
          className: "text-sm mt-0",
          children: t(`${item.description}`)
        })]
      })]
    }, `contact--key${item.id}`))]
  });
};

/* harmony default export */ const contact_info = (ContactInfoBlock);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(3295);
;// CONCATENATED MODULE: ./src/pages/contact-us.tsx




function contact_us_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function contact_us_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { contact_us_ownKeys(Object(source), true).forEach(function (key) { contact_us_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { contact_us_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function contact_us_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function ContactUsPage() {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(page_header/* default */.Z, {
      pageHeader: "text-page-contact-us"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(container/* default */.Z, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "my-14 lg:my-16 xl:my-20 px-0 pb-2 lg: xl:max-w-screen-xl mx-auto flex flex-col md:flex-row w-full",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "md:w-full lg:w-2/5 2xl:w-2/6 flex flex-col h-full",
          children: /*#__PURE__*/jsx_runtime_.jsx(contact_info, {})
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "md:w-full lg:w-3/5 2xl:w-4/6 flex h-full md:ms-7 flex-col lg:ps-7",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "flex pb-7 md:pb-9 mt-7 md:-mt-1.5",
            children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
              className: "text-2xl 2xl:text-3xl font-bold text-heading",
              children: t("text-get-in-touch")
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(contact_form, {})]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(subscription/* default */.Z, {})]
    })]
  });
}
ContactUsPage.Layout = layout/* default */.Z;
const getStaticProps = async ({
  locale
}) => {
  return {
    props: contact_us_objectSpread({}, await (0,serverSideTranslations_.serverSideTranslations)(locale, ["common", "forms", "menu", "footer"]))
  };
};

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8453,9583,9300,926,2095,239,3977,7077,7181,6722,7658], () => (__webpack_exec__(7103)));
module.exports = __webpack_exports__;

})();