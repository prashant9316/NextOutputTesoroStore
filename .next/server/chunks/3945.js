"use strict";
exports.id = 3945;
exports.ids = [3945];
exports.modules = {

/***/ 3945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ login_form)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./src/components/ui/input.tsx
var input = __webpack_require__(3977);
// EXTERNAL MODULE: ./src/components/ui/password-input.tsx + 2 modules
var password_input = __webpack_require__(3205);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(1553);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: ./src/contexts/ui.context.tsx
var ui_context = __webpack_require__(7014);
// EXTERNAL MODULE: ./src/framework/basic-rest/utils/api-endpoints.ts
var api_endpoints = __webpack_require__(3833);
// EXTERNAL MODULE: ./src/framework/basic-rest/utils/http.ts
var http = __webpack_require__(7235);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
;// CONCATENATED MODULE: ./src/framework/basic-rest/auth/use-login.tsx






async function login(input) {
  const data = await http/* default.post */.Z.post(api_endpoints/* API_ENDPOINTS.LOGIN */.P.LOGIN, input);
  console.log("Login Data REceiveD:");
  console.log(data['data'].token);

  if (data['data'].token) {
    return data['data'].token;
  } else {
    return false;
  }
}

const useLoginMutation = () => {
  const {
    authorize,
    closeModal
  } = (0,ui_context/* useUI */.l8)();
  return (0,external_react_query_.useMutation)(input => login(input), {
    onSuccess: data => {
      if (data == false) {// login failed
      } else {
        external_js_cookie_default().set("auth_token", data);
        authorize();
        closeModal();
      }
    },
    onError: data => {
      console.log(data, "login error response");
    }
  });
};
// EXTERNAL MODULE: ./src/components/ui/logo.tsx
var logo = __webpack_require__(9300);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
;// CONCATENATED MODULE: ./src/components/auth/login-form.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // import { ImGoogle2, ImFacebook2 } from "react-icons/im";



const LoginForm = () => {
  var _errors$email, _errors$password;

  const {
    t
  } = (0,external_next_i18next_.useTranslation)();
  const {
    setModalView,
    openModal,
    closeModal
  } = (0,ui_context/* useUI */.l8)();
  const {
    mutate: login,
    isLoading
  } = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = (0,external_react_hook_form_.useForm)();

  function onSubmit({
    email,
    password,
    remember_me
  }) {
    login({
      email,
      password,
      remember_me
    });
    console.log(email, password, remember_me, "data");
  } // function handelSocialLogin() {
  // 	login({
  // 		email: "demo@demo.com",
  // 		password: "demo",
  // 		remember_me: true,
  // 	});
  // }


  function handleSignUp() {
    setModalView("SIGN_UP_VIEW");
    return openModal();
  }

  function handleForgetPassword() {
    setModalView("FORGET_PASSWORD");
    return openModal();
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "overflow-hidden bg-white mx-auto rounded-lg w-full sm:w-96 md:w-450px border border-gray-300 py-5 px-5 sm:px-8",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "text-center mb-6 pt-2.5",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        onClick: closeModal,
        children: /*#__PURE__*/jsx_runtime_.jsx(logo/* default */.Z, {})
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-sm md:text-base text-body mt-2 mb-8 sm:mb-10",
        children: t("common:login-helper")
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("form", {
      onSubmit: handleSubmit(onSubmit),
      className: "flex flex-col justify-center",
      noValidate: true,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col space-y-3.5",
        children: [/*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, _objectSpread(_objectSpread({
          labelKey: "forms:label-email",
          type: "email",
          variant: "solid"
        }, register("email", {
          required: `${t("forms:email-required")}`,
          pattern: {
            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: t("forms:email-error")
          }
        })), {}, {
          errorKey: (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message
        })), /*#__PURE__*/jsx_runtime_.jsx(password_input/* default */.Z, _objectSpread({
          labelKey: "forms:label-password",
          errorKey: (_errors$password = errors.password) === null || _errors$password === void 0 ? void 0 : _errors$password.message
        }, register("password", {
          required: `${t("forms:password-required")}`
        }))), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex items-center justify-center",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center flex-shrink-0",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
              className: "switch relative inline-block w-10 cursor-pointer",
              children: [/*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({
                id: "remember",
                type: "checkbox",
                className: "opacity-0 w-0 h-0"
              }, register("remember_me"))), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "bg-gray-500 absolute inset-0 transition-all duration-300 ease-in slider round"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "remember",
              className: "flex-shrink-0 text-sm text-heading ps-3 cursor-pointer",
              children: t("forms:label-remember-me")
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "flex ms-auto",
            children: /*#__PURE__*/jsx_runtime_.jsx("button", {
              type: "button",
              onClick: handleForgetPassword,
              className: "text-end text-sm text-heading ps-3 underline hover:no-underline focus:outline-none",
              children: t("common:text-forgot-password")
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "relative",
          children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
            type: "submit",
            loading: isLoading,
            disabled: isLoading,
            className: "h-11 md:h-12 w-full mt-1.5",
            children: t("common:text-login")
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "text-sm sm:text-base text-body text-center mt-5 mb-1",
      children: [t("common:text-no-account"), " ", /*#__PURE__*/jsx_runtime_.jsx("button", {
        type: "button",
        className: "text-sm sm:text-base text-heading underline font-bold hover:no-underline focus:outline-none",
        onClick: handleSignUp,
        children: t("common:text-register")
      })]
    })]
  });
};

/* harmony default export */ const login_form = (LoginForm);

/***/ })

};
;