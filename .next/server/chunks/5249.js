"use strict";
exports.id = 5249;
exports.ids = [5249];
exports.modules = {

/***/ 5249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* binding */ BreadcrumbItems),
  "Z": () => (/* binding */ breadcrumb)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/ui/active-link.tsx
var active_link = __webpack_require__(2963);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./src/utils/use-breadcrumb.ts


function convertBreadcrumbTitle(string) {
  return string.replace(/-/g, " ").replace(/oe/g, "ö").replace(/ae/g, "ä").replace(/ue/g, "ü").toLowerCase();
}
function useBreadcrumb() {
  const router = (0,router_.useRouter)();
  const {
    0: breadcrumbs,
    1: setBreadcrumbs
  } = (0,external_react_.useState)(null);
  (0,external_react_.useEffect)(() => {
    if (router) {
      const linkPath = router.asPath.split("/");
      linkPath.shift();
      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: "/" + linkPath.slice(0, i + 1).join("/")
        };
      });
      setBreadcrumbs(pathArray);
    }
  }, [router]);
  return breadcrumbs;
}
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
;// CONCATENATED MODULE: ./src/components/common/breadcrumb.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const BreadcrumbItem = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/jsx_runtime_.jsx("li", _objectSpread(_objectSpread({
    className: "text-sm text-body px-2.5 transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-heading"
  }, props), {}, {
    children: children
  }));
};

const BreadcrumbSeparator = (_ref2) => {
  let {
    children
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["children"]);

  return /*#__PURE__*/jsx_runtime_.jsx("li", _objectSpread(_objectSpread({
    className: "text-base text-body mt-0.5"
  }, props), {}, {
    children: children
  }));
};

const BreadcrumbItems = props => {
  let children = external_react_default().Children.toArray(props.children);
  children = children.map((child, index) => /*#__PURE__*/jsx_runtime_.jsx(BreadcrumbItem, {
    children: child
  }, `breadcrumb_item${index}`));
  const lastIndex = children.length - 1;
  children = children.reduce((acc, child, index) => {
    const notLast = index < lastIndex;

    if (notLast) {
      acc.push(child, /*#__PURE__*/jsx_runtime_.jsx(BreadcrumbSeparator, {
        children: props.separator
      }, `breadcrumb_sep${index}`));
    } else {
      acc.push(child);
    }

    return acc;
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "chawkbazarBreadcrumb flex items-center",
    children: /*#__PURE__*/jsx_runtime_.jsx("ol", {
      className: "flex items-center w-full overflow-hidden",
      children: children
    })
  });
};

const Breadcrumb = ({
  separator = "/"
}) => {
  const breadcrumbs = useBreadcrumb();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(BreadcrumbItems, {
    separator: separator,
    children: [/*#__PURE__*/jsx_runtime_.jsx(active_link/* default */.Z, {
      href: "/",
      activeClassName: "font-semibold text-heading",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: t("breadcrumb-home")
      })
    }), breadcrumbs === null || breadcrumbs === void 0 ? void 0 : breadcrumbs.map(breadcrumb => /*#__PURE__*/jsx_runtime_.jsx(active_link/* default */.Z, {
      href: breadcrumb.href,
      activeClassName: "font-semibold text-heading",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "capitalize",
        children: convertBreadcrumbTitle(breadcrumb.breadcrumb)
      })
    }, breadcrumb.href))]
  });
};

/* harmony default export */ const breadcrumb = (Breadcrumb);

/***/ }),

/***/ 2963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ActiveLink = (_ref) => {
  let {
    children,
    activeClassName,
    href
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "activeClassName", "href"]);

  const {
    pathname
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const child = react__WEBPACK_IMPORTED_MODULE_3__.Children.only(children);
  const childClassName = child.props.className || "";
  const className = pathname === href ? `${childClassName} ${activeClassName}`.trim() : childClassName;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread(_objectSpread({
    href: href
  }, props), {}, {
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().cloneElement(child, {
      className: className || null
    })
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActiveLink);

/***/ })

};
;