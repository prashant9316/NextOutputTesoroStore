"use strict";
exports.id = 7613;
exports.ids = [7613];
exports.modules = {

/***/ 7613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ account_layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./src/components/ui/page-header.tsx
var page_header = __webpack_require__(6722);
// EXTERNAL MODULE: ./src/components/ui/container.tsx
var container = __webpack_require__(9691);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./node_modules/react-icons/io5/index.esm.js
var index_esm = __webpack_require__(155);
// EXTERNAL MODULE: ./src/utils/routes.ts
var routes = __webpack_require__(9524);
// EXTERNAL MODULE: ./src/contexts/ui.context.tsx
var ui_context = __webpack_require__(7014);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
;// CONCATENATED MODULE: ./src/framework/basic-rest/auth/use-logout.tsx
 // import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
// import http from "@framework/utils/http";





async function logout() {
  // return http.post(API_ENDPOINTS.LOGIN, input);
  return {
    ok: true,
    message: "Logout Successful!"
  };
}

const useLogoutMutation = () => {
  const {
    unauthorize
  } = (0,ui_context/* useUI */.l8)();
  return (0,external_react_query_.useMutation)(() => logout(), {
    onSuccess: _data => {
      external_js_cookie_default().remove("auth_token");
      unauthorize();
      router_default().push("/");
    },
    onError: data => {
      console.log(data, "logout error response");
    }
  });
};
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
;// CONCATENATED MODULE: ./src/components/my-account/account-nav.tsx








const accountMenu = [{
  slug: routes/* ROUTES.ACCOUNT */.Z.ACCOUNT,
  name: "text-dashboard",
  icon: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* IoHomeOutline */.yl6, {
    className: "w-5 h-5"
  })
}, {
  slug: routes/* ROUTES.ORDERS */.Z.ORDERS,
  name: "text-orders",
  icon: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* IoCartOutline */.toq, {
    className: "w-5 h-5"
  })
}, {
  slug: routes/* ROUTES.ACCOUNT_DETAILS */.Z.ACCOUNT_DETAILS,
  name: "text-account-details",
  icon: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* IoPersonOutline */.FJ3, {
    className: "w-5 h-5"
  })
}, {
  slug: routes/* ROUTES.CHANGE_PASSWORD */.Z.CHANGE_PASSWORD,
  name: "text-change-password",
  icon: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* IoSettingsOutline */.Fuo, {
    className: "w-5 h-5"
  })
}];
function AccountNav() {
  const {
    mutate: logout
  } = useLogoutMutation();
  const {
    pathname
  } = (0,router_.useRouter)();
  const newPathname = pathname.split("/").slice(2, 3);
  const mainPath = `/${newPathname[0]}`;
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
    className: "flex flex-col md:w-2/6 2xl:w-4/12 md:pe-8 lg:pe-12 xl:pe-16 2xl:pe-20 pb-2 md:pb-0",
    children: [accountMenu.map(item => {
      const menuPathname = item.slug.split("/").slice(2, 3);
      const menuPath = `/${menuPathname[0]}`;
      return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: item.slug,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          className: mainPath === menuPath ? "bg-gray-100 font-semibold flex items-center cursor-pointer text-sm lg:text-base text-heading py-3.5 px-4 lg:px-5 rounded mb-2 " : "flex items-center cursor-pointer text-sm lg:text-base text-heading font-normal py-3.5 px-4 lg:px-5 rounded mb-2",
          children: [item.icon, /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "ps-2",
            children: t(`${item.name}`)
          })]
        })
      }, item.slug);
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
      className: "flex items-center cursor-pointer text-sm lg:text-base text-heading font-normal py-3.5 px-4 lg:px-5 focus:outline-none",
      onClick: () => logout(),
      children: [/*#__PURE__*/jsx_runtime_.jsx(index_esm/* IoLogOutOutline */.qgu, {
        className: "w-5 h-5"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "ps-2",
        children: t("text-logout")
      })]
    })]
  });
}
// EXTERNAL MODULE: ./src/components/common/subscription.tsx
var subscription = __webpack_require__(7181);
;// CONCATENATED MODULE: ./src/components/my-account/account-layout.tsx








const AccountLayout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(page_header/* default */.Z, {
      pageHeader: "text-page-my-account"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(container/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "py-16 lg:py-20 px-0 xl:max-w-screen-xl mx-auto flex  md:flex-row w-full",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col md:flex-row w-full",
          children: [/*#__PURE__*/jsx_runtime_.jsx(AccountNav, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "md:w-4/6 2xl:w-8/12 mt-4 md:mt-0",
            children: children
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(subscription/* default */.Z, {})]
    })]
  });
};

/* harmony default export */ const account_layout = (AccountLayout);

/***/ })

};
;