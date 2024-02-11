"use strict";
exports.id = 7061;
exports.ids = [7061];
exports.modules = {

/***/ 7061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ sign_up_form)
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
// EXTERNAL MODULE: ./src/components/ui/logo.tsx
var logo = __webpack_require__(9300);
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
;// CONCATENATED MODULE: ./src/framework/basic-rest/auth/use-signup.tsx
const dotenv = __webpack_require__(334);

dotenv.config();




 // const jwt = require("jsonwebtoken")

async function signUp(input) {
  try {
    console.log(input); // const token = jwt.sign(JSON.stringify(input), "alamsfdfsdsdfsdfsdfsdfsdfsdrafdar!@#$0fddlfjdfdfdssfds")
    // console.log(token)

    const data = await http/* default.post */.Z.post(`${api_endpoints/* API_ENDPOINTS.REGISTER */.P.REGISTER}fsfs`, input);
    const token = data.token;
    return token;
    0;
  } catch (err) {
    console.log(err);
    return err;
  } // return {
  //   token: `${input.email}.${input.name}`.split("").reverse().join(""),
  // };

}

const useSignUpMutation = () => {
  const {
    authorize,
    closeModal
  } = (0,ui_context/* useUI */.l8)(); // const data = fetch(`${API_ENDPOINTS.REGISTER}fsfs`, )

  return (0,external_react_query_.useMutation)(input => signUp(input), {
    onSuccess: data => {
      external_js_cookie_default().set("auth_token", data);
      authorize();
      closeModal();
    },
    onError: data => {
      console.log(data, "login error response");
    }
  });
};
// EXTERNAL MODULE: ./src/components/ui/link.tsx
var ui_link = __webpack_require__(3407);
// EXTERNAL MODULE: ./src/utils/routes.ts
var routes = __webpack_require__(9524);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
;// CONCATENATED MODULE: ./src/components/auth/sign-up-form.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // import { ImGoogle2, ImFacebook2 } from "react-icons/im";





const SignUpForm = () => {
  var _errors$name, _errors$email, _errors$password;

  const {
    t
  } = (0,external_next_i18next_.useTranslation)();
  const {
    mutate: signUp,
    isLoading
  } = useSignUpMutation();
  const {
    setModalView,
    openModal,
    closeModal
  } = (0,ui_context/* useUI */.l8)();
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = (0,external_react_hook_form_.useForm)();

  function handleSignIn() {
    setModalView("LOGIN_VIEW");
    return openModal();
  }

  function onSubmit({
    name,
    email,
    password
  }) {
    signUp({
      name,
      email,
      password
    });
    console.log(name, email, password, "sign form values");
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "py-5 px-5 sm:px-8 bg-white mx-auto rounded-lg w-full sm:w-96 md:w-450px border border-gray-300",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "text-center mb-6 pt-2.5",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        onClick: closeModal,
        children: /*#__PURE__*/jsx_runtime_.jsx(logo/* default */.Z, {})
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: "text-sm md:text-base text-body mt-2 mb-8 sm:mb-10",
        children: [t("common:registration-helper"), " ", /*#__PURE__*/jsx_runtime_.jsx(ui_link/* default */.Z, {
          href: routes/* ROUTES.TERMS */.Z.TERMS,
          className: "text-heading underline hover:no-underline focus:outline-none",
          children: t("common:text-terms")
        }), " ", "&", " ", /*#__PURE__*/jsx_runtime_.jsx(ui_link/* default */.Z, {
          href: routes/* ROUTES.POLICY */.Z.POLICY,
          className: "text-heading underline hover:no-underline focus:outline-none",
          children: t("common:text-policy")
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("form", {
      onSubmit: handleSubmit(onSubmit),
      className: "flex flex-col justify-center",
      noValidate: true,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col space-y-4",
        children: [/*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, _objectSpread(_objectSpread({
          labelKey: "forms:label-name",
          type: "text",
          variant: "solid"
        }, register("name", {
          required: "forms:name-required"
        })), {}, {
          errorKey: (_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message
        })), /*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, _objectSpread(_objectSpread({
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
        }))), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "relative",
          children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
            type: "submit",
            loading: isLoading,
            disabled: isLoading,
            className: "h-11 md:h-12 w-full mt-2",
            children: t("common:text-register")
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "text-sm sm:text-base text-body text-center mt-5 mb-1",
      children: [t("common:text-have-account"), " ", /*#__PURE__*/jsx_runtime_.jsx("button", {
        type: "button",
        className: "text-sm sm:text-base text-heading underline font-bold hover:no-underline focus:outline-none",
        onClick: handleSignIn,
        children: t("common:text-login")
      })]
    })]
  });
};

/* harmony default export */ const sign_up_form = (SignUpForm);

/***/ })

};
;