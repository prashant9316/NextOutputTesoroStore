"use strict";
exports.id = 7181;
exports.ids = [7181];
exports.modules = {

/***/ 7181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7077);
/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3977);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1553);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2662);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const data = {
  title: "common:text-subscribe-heading",
  description: "common:text-subscribe-description",
  buttonText: "common:button-subscribe"
};
const defaultValues = {
  subscription_email: ""
};

const Subscription = ({
  className = "px-5 sm:px-8 md:px-16 2xl:px-24"
}) => {
  var _errors$subscription_;

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({
    defaultValues
  });
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
  const {
    title,
    description,
    buttonText
  } = data;

  async function onSubmit(input) {
    console.log(input, "data");
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: `${className} flex flex-col xl:flex-row justify-center xl:justify-between items-center rounded-lg bg-gray-200 py-10 md:py-14 lg:py-16`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "-mt-1.5 lg:-mt-2 xl:-mt-0.5 text-center xl:text-start mb-7 md:mb-8 lg:mb-9 xl:mb-0",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_text__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        variant: "mediumHeading",
        className: "mb-2 md:mb-2.5 lg:mb-3 xl:mb-3.5",
        style: {
          fontFamily: 'Hap'
        },
        children: t(`${title}`)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "text-body text-xs md:text-sm leading-6 md:leading-7",
        style: {
          fontFamily: 'Hap'
        },
        children: t(`${description}`)
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
      onSubmit: handleSubmit(onSubmit),
      className: "flex-shrink-0 w-full sm:w-96 md:w-[545px]",
      noValidate: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col sm:flex-row items-start justify-end",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, _objectSpread(_objectSpread({
          placeholderKey: "forms:placeholder-email-subscribe",
          type: "email",
          variant: "solid",
          className: "w-full",
          inputClassName: "px-4 lg:px-7 h-12 lg:h-14 text-center sm:text-start bg-white"
        }, register("subscription_email", {
          required: "forms:email-required",
          pattern: {
            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "forms:email-error"
          }
        })), {}, {
          errorKey: (_errors$subscription_ = errors.subscription_email) === null || _errors$subscription_ === void 0 ? void 0 : _errors$subscription_.message
        })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
          className: "mt-3 sm:mt-0 w-full sm:w-auto sm:ms-2 md:h-full flex-shrink-0",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "lg:py-0.5",
            style: {
              fontFamily: 'Hap'
            },
            children: t(`${buttonText}`)
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Subscription);

/***/ })

};
;