"use strict";
exports.id = 8941;
exports.ids = [8941];
exports.modules = {

/***/ 4135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": () => (/* binding */ ShopFilters)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./src/framework/basic-rest/category/get-all-categories.tsx
var get_all_categories = __webpack_require__(154);
// EXTERNAL MODULE: ./src/components/ui/checkbox.tsx
var ui_checkbox = __webpack_require__(1987);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
;// CONCATENATED MODULE: ./src/components/shop/category-filter.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const CategoryFilter = () => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  const router = (0,router_.useRouter)();
  const {
    pathname,
    query
  } = router;
  const {
    data,
    isLoading
  } = (0,get_all_categories/* useCategoriesQuery */.E)({
    limit: 10
  });
  const selectedCategories = query !== null && query !== void 0 && query.category ? query.category.split(",") : [];
  const [formState, setFormState] = external_react_default().useState(selectedCategories);
  external_react_default().useEffect(() => {
    setFormState(selectedCategories);
  }, [query === null || query === void 0 ? void 0 : query.category]);
  if (isLoading) return /*#__PURE__*/jsx_runtime_.jsx("p", {
    children: "Loading..."
  });

  function handleItemClick(e) {
    const {
      value
    } = e.currentTarget;
    let currentFormState = formState.includes(value) ? formState.filter(i => i !== value) : [...formState, value];

    const {
      category
    } = query,
          restQuery = _objectWithoutProperties(query, ["category"]);

    router.push({
      pathname,
      query: _objectSpread(_objectSpread({}, restQuery), !!currentFormState.length ? {
        category: currentFormState.join(",")
      } : {})
    }, undefined, {
      scroll: false
    });
  }

  const items = data === null || data === void 0 ? void 0 : data.categoryRef;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "block border-b border-gray-300 pb-7 mb-7",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
      className: "text-heading text-sm md:text-base font-semibold mb-7",
      children: t("text-category")
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mt-2 flex flex-col space-y-4",
      children: items === null || items === void 0 ? void 0 : items.map(item => /*#__PURE__*/jsx_runtime_.jsx(ui_checkbox/* CheckBox */.J, {
        label: item.name.en,
        name: item.name.en.toLowerCase(),
        checked: formState.includes(item.slug),
        value: item.slug,
        onChange: handleItemClick
      }, item._id))
    })]
  });
};
// EXTERNAL MODULE: ./src/framework/basic-rest/brand/get-all-brands.tsx
var get_all_brands = __webpack_require__(4022);
;// CONCATENATED MODULE: ./src/components/shop/brand-filter.tsx



function brand_filter_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function brand_filter_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { brand_filter_ownKeys(Object(source), true).forEach(function (key) { brand_filter_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { brand_filter_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function brand_filter_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function brand_filter_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = brand_filter_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function brand_filter_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const BrandFilter = () => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  const router = (0,router_.useRouter)();
  const {
    pathname,
    query
  } = router;
  const {
    data,
    isLoading,
    error
  } = (0,get_all_brands/* useBrandsQuery */.a)({
    limit: 10
  });
  const selectedBrands = query !== null && query !== void 0 && query.brand ? query.brand.split(",") : [];
  const [formState, setFormState] = external_react_default().useState(selectedBrands);
  external_react_default().useEffect(() => {
    setFormState(selectedBrands);
  }, [query === null || query === void 0 ? void 0 : query.brand]);
  if (isLoading) return /*#__PURE__*/jsx_runtime_.jsx("p", {
    children: "Loading..."
  });
  if (error) return /*#__PURE__*/jsx_runtime_.jsx("p", {
    children: error.message
  });

  function handleItemClick(e) {
    const {
      value
    } = e.currentTarget;
    let currentFormState = formState.includes(value) ? formState.filter(i => i !== value) : [...formState, value]; // setFormState(currentFormState);

    const {
      brand
    } = query,
          restQuery = brand_filter_objectWithoutProperties(query, ["brand"]);

    router.push({
      pathname,
      query: brand_filter_objectSpread(brand_filter_objectSpread({}, restQuery), !!currentFormState.length ? {
        brand: currentFormState.join(",")
      } : {})
    }, undefined, {
      scroll: false
    });
  }

  const items = data === null || data === void 0 ? void 0 : data.brands;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "block border-b border-gray-300 pb-7 mb-7",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
      className: "text-heading text-sm md:text-base font-semibold mb-7",
      children: t("text-brands")
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mt-2 flex flex-col space-y-4",
      children: items === null || items === void 0 ? void 0 : items.map(item => /*#__PURE__*/jsx_runtime_.jsx(ui_checkbox/* CheckBox */.J, {
        label: item.name,
        name: item.name.toLowerCase(),
        checked: formState.includes(item.slug),
        value: item.slug,
        onChange: handleItemClick
      }, item.id))
    })]
  });
};
// EXTERNAL MODULE: ./node_modules/react-icons/io5/index.esm.js
var index_esm = __webpack_require__(155);
// EXTERNAL MODULE: external "lodash/isEmpty"
var isEmpty_ = __webpack_require__(8718);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty_);
;// CONCATENATED MODULE: ./src/components/shop/filtered-item.tsx



function filtered_item_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function filtered_item_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { filtered_item_ownKeys(Object(source), true).forEach(function (key) { filtered_item_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { filtered_item_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function filtered_item_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const FilteredItem = ({
  itemKey,
  itemValue
}) => {
  const router = (0,router_.useRouter)();
  const {
    pathname,
    query
  } = router;

  function handleClose() {
    const currentItem = query[itemKey].split(",").filter(i => i !== itemValue);
    delete query[itemKey];
    router.push({
      pathname,
      query: filtered_item_objectSpread(filtered_item_objectSpread({}, query), !isEmpty_default()(currentItem) ? {
        [itemKey]: currentItem.join(",")
      } : {})
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "group flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-heading cursor-pointer transition duration-200 ease-in-out hover:border-heading",
    onClick: handleClose,
    children: [itemValue, /*#__PURE__*/jsx_runtime_.jsx(index_esm/* IoClose */.bjh, {
      className: "text-sm text-body ms-2 flex-shrink-0 -me-0.5 mt-0.5 transition duration-200 ease-in-out group-hover:text-heading"
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/shop/color-filter.tsx



function color_filter_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function color_filter_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { color_filter_ownKeys(Object(source), true).forEach(function (key) { color_filter_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { color_filter_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function color_filter_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function color_filter_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = color_filter_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function color_filter_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const colorFilterItems = [{
  id: "1",
  name: "Black",
  slug: "black",
  hexColor: "#000"
}, {
  id: "2",
  name: "Blue",
  slug: "blue",
  hexColor: "#3310ce"
}, {
  id: "3",
  name: "Olive",
  slug: "olive",
  hexColor: "#0c7448"
}, {
  id: "4",
  name: "Maroon",
  slug: "maroon",
  hexColor: "#5f0e0e"
}, {
  id: "5",
  name: "Brown",
  slug: "brown",
  hexColor: "#362727"
}, {
  id: "6",
  name: "White",
  slug: "white",
  hexColor: "#fff"
}, {
  id: "7",
  name: "Gray",
  slug: "gray",
  hexColor: "#e1e1e1"
}];
const ColorFilter = () => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  const router = (0,router_.useRouter)();
  const {
    pathname,
    query
  } = router;
  const selectedColors = query !== null && query !== void 0 && query.color ? query.color.split(",") : [];
  const [formState, setFormState] = external_react_default().useState(selectedColors);
  external_react_default().useEffect(() => {
    setFormState(selectedColors);
  }, [query === null || query === void 0 ? void 0 : query.color]);

  function handleItemClick(e) {
    const {
      value
    } = e.currentTarget;
    let currentFormState = formState.includes(value) ? formState.filter(i => i !== value) : [...formState, value]; // setFormState(currentFormState);

    const {
      color
    } = query,
          restQuery = color_filter_objectWithoutProperties(query, ["color"]);

    router.push({
      pathname,
      query: color_filter_objectSpread(color_filter_objectSpread({}, restQuery), !!currentFormState.length ? {
        color: currentFormState.join(",")
      } : {})
    }, undefined, {
      scroll: false
    });
  }

  const items = colorFilterItems;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "block border-b border-gray-300 pb-7",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
      className: "text-heading text-sm md:text-base font-semibold mb-7",
      children: t("text-colors")
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mt-2 flex flex-col space-y-4",
      children: items === null || items === void 0 ? void 0 : items.map(item => /*#__PURE__*/jsx_runtime_.jsx(ui_checkbox/* CheckBox */.J, {
        label: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "flex items-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: `w-5 h-5 rounded-full block me-3 mt-0.5 border border-black border-opacity-20`,
            style: {
              backgroundColor: item.hexColor
            }
          }), item.name]
        }),
        name: item.name.toLowerCase(),
        checked: formState.includes(item.slug),
        value: item.slug,
        onChange: handleItemClick
      }, item.id))
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/shop/price-filter.tsx



function price_filter_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function price_filter_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { price_filter_ownKeys(Object(source), true).forEach(function (key) { price_filter_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { price_filter_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function price_filter_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function price_filter_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = price_filter_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function price_filter_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const priceFilterItems = [{
  id: "1",
  name: "Under ₹500",
  slug: "0-500"
}, {
  id: "2",
  name: "₹500 to ₹1000",
  slug: "500-1000"
}, {
  id: "3",
  name: "₹1000 to ₹1500",
  slug: "1000-1500"
}, {
  id: "4",
  name: "₹1500 to ₹2000",
  slug: "1500-2000"
}, {
  id: "5",
  name: "₹2000 to ₹3000",
  slug: "2000-3000"
}, {
  id: "6",
  name: "₹3000 to ₹5000",
  slug: "3000-5000"
}, {
  id: "7",
  name: "₹5000 to ₹10000",
  slug: "500-1000"
}, {
  id: "8",
  name: "Over ₹10000",
  slug: "10000-"
}];
const PriceFilter = () => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  const router = (0,router_.useRouter)();
  const {
    pathname,
    query
  } = router;
  const selectedPrices = query !== null && query !== void 0 && query.price ? query.price.split(",") : [];
  const [formState, setFormState] = external_react_default().useState(selectedPrices);
  external_react_default().useEffect(() => {
    setFormState(selectedPrices);
  }, [query === null || query === void 0 ? void 0 : query.price]);

  function handleItemClick(e) {
    const {
      value
    } = e.currentTarget;
    let currentFormState = formState.includes(value) ? formState.filter(i => i !== value) : [...formState, value]; // setFormState(currentFormState);

    const {
      price
    } = query,
          restQuery = price_filter_objectWithoutProperties(query, ["price"]);

    router.push({
      pathname,
      query: price_filter_objectSpread(price_filter_objectSpread({}, restQuery), !!currentFormState.length ? {
        price: currentFormState.join(",")
      } : {})
    }, undefined, {
      scroll: false
    });
  }

  const items = priceFilterItems;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "block border-b border-gray-300 pb-7 mb-7",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
      className: "text-heading text-sm md:text-base font-semibold mb-7",
      children: t("text-price")
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mt-2 flex flex-col space-y-4",
      children: items === null || items === void 0 ? void 0 : items.map(item => /*#__PURE__*/jsx_runtime_.jsx(ui_checkbox/* CheckBox */.J, {
        label: item.name,
        name: item.name.toLowerCase(),
        checked: formState.includes(item.slug),
        value: item.slug,
        onChange: handleItemClick
      }, item.id))
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/shop/filters.tsx










const ShopFilters = () => {
  const router = (0,router_.useRouter)();
  const {
    pathname,
    query
  } = router;
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "pt-1",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "block border-b border-gray-300 pb-7 mb-7",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center justify-between mb-2.5",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "font-semibold text-heading text-xl md:text-2xl",
          children: t("text-filters")
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "flex-shrink text-xs mt-0.5 transition duration-150 ease-in focus:outline-none hover:text-heading",
          "aria-label": "Clear All",
          onClick: () => {
            router.push(pathname);
          },
          children: t("text-clear-all")
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex flex-wrap -m-1.5 pt-2",
        children: !isEmpty_default()(query) && Object.values(query).join(",").split(",").map((v, idx) => /*#__PURE__*/jsx_runtime_.jsx(FilteredItem, {
          itemKey: Object.keys(query).find(k => {
            var _query$k;

            return (_query$k = query[k]) === null || _query$k === void 0 ? void 0 : _query$k.includes(v);
          }),
          itemValue: v
        }, idx))
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(CategoryFilter, {}), /*#__PURE__*/jsx_runtime_.jsx(BrandFilter, {}), /*#__PURE__*/jsx_runtime_.jsx(PriceFilter, {}), /*#__PURE__*/jsx_runtime_.jsx(ColorFilter, {})]
  });
};

/***/ }),

/***/ 8941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ top_bar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./src/components/common/drawer/drawer.tsx
var drawer = __webpack_require__(1317);
;// CONCATENATED MODULE: ./src/components/icons/filter-icon.tsx



const FilterIcon = ({
  color = "currentColor",
  width = "18px",
  height = "14px"
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 14",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      id: "Group_36196",
      "data-name": "Group 36196",
      transform: "translate(-925 -1122.489)",
      children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
        id: "Path_22590",
        "data-name": "Path 22590",
        d: "M942.581,1295.564H925.419c-.231,0-.419-.336-.419-.75s.187-.75.419-.75h17.163c.231,0,.419.336.419.75S942.813,1295.564,942.581,1295.564Z",
        transform: "translate(0 -169.575)",
        fill: color
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        id: "Path_22591",
        "data-name": "Path 22591",
        d: "M942.581,1951.5H925.419c-.231,0-.419-.336-.419-.75s.187-.75.419-.75h17.163c.231,0,.419.336.419.75S942.813,1951.5,942.581,1951.5Z",
        transform: "translate(0 -816.512)",
        fill: color
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        id: "Path_22593",
        "data-name": "Path 22593",
        d: "M1163.713,1122.489a2.5,2.5,0,1,0,1.768.732A2.483,2.483,0,0,0,1163.713,1122.489Z",
        transform: "translate(-233.213)",
        fill: color
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        id: "Path_22594",
        "data-name": "Path 22594",
        d: "M2344.886,1779.157a2.5,2.5,0,1,0,.731,1.768A2.488,2.488,0,0,0,2344.886,1779.157Z",
        transform: "translate(-1405.617 -646.936)",
        fill: color
      })]
    })
  });
};

/* harmony default export */ const filter_icon = (FilterIcon);
// EXTERNAL MODULE: ./src/components/ui/text.tsx
var ui_text = __webpack_require__(7077);
// EXTERNAL MODULE: ./src/contexts/ui.context.tsx
var ui_context = __webpack_require__(7014);
// EXTERNAL MODULE: ./src/components/shop/filters.tsx + 5 modules
var filters = __webpack_require__(4135);
// EXTERNAL MODULE: ./src/components/common/scrollbar.tsx
var scrollbar = __webpack_require__(4228);
// EXTERNAL MODULE: ./node_modules/react-icons/io5/index.esm.js
var index_esm = __webpack_require__(155);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: ./src/utils/get-direction.ts
var get_direction = __webpack_require__(991);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./src/components/shop/filter-sidebar.tsx










const FilterSidebar = () => {
  const {
    closeFilter
  } = (0,ui_context/* useUI */.l8)();
  const router = (0,router_.useRouter)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  const dir = (0,get_direction/* getDirection */.M)(router.locale);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col justify-between w-full h-full",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "w-full border-b border-gray-100 flex justify-between items-center relative pe-5 md:pe-7 flex-shrink-0 py-0.5",
      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "flex text-2xl items-center justify-center text-gray-500 px-4 md:px-5 py-6 lg:py-8 focus:outline-none transition-opacity hover:opacity-60",
        onClick: closeFilter,
        "aria-label": "close",
        children: dir === "rtl" ? /*#__PURE__*/jsx_runtime_.jsx(index_esm/* IoArrowForward */.qvS, {
          className: "text-black"
        }) : /*#__PURE__*/jsx_runtime_.jsx(index_esm/* IoArrowBack */.O8Q, {
          className: "text-black"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "font-bold text-xl md:text-2xl m-0 text-heading w-full text-center pe-6",
        children: t("text-filters")
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(scrollbar/* default */.Z, {
      className: "menu-scrollbar flex-grow mb-auto",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex flex-col py-7 px-5 md:px-7 text-heading",
        children: /*#__PURE__*/jsx_runtime_.jsx(filters/* ShopFilters */.M, {})
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "text-sm md:text-base leading-4 flex items-center justify-center px-7 flex-shrink-0 h-14 bg-heading text-white",
      children: ["9,608 ", t("text-items")]
    })]
  });
};

/* harmony default export */ const filter_sidebar = (FilterSidebar);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@headlessui/react"
var react_ = __webpack_require__(4025);
// EXTERNAL MODULE: ./node_modules/react-icons/hi/index.esm.js
var hi_index_esm = __webpack_require__(3854);
;// CONCATENATED MODULE: ./src/components/ui/list-box.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function ListBox({
  options
}) {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  const router = (0,router_.useRouter)();
  const {
    pathname,
    query
  } = router;
  const currentSelectedItem = query !== null && query !== void 0 && query.sort_by ? options.find(o => o.value === query.sort_by) : options[0];
  const {
    0: selectedItem,
    1: setSelectedItem
  } = (0,external_react_.useState)(currentSelectedItem);
  (0,external_react_.useEffect)(() => {
    setSelectedItem(currentSelectedItem);
  }, [query === null || query === void 0 ? void 0 : query.sort_by]);

  function handleItemClick(values) {
    setSelectedItem(values);

    const {
      sort_by
    } = query,
          restQuery = _objectWithoutProperties(query, ["sort_by"]);

    router.push({
      pathname,
      query: _objectSpread(_objectSpread({}, restQuery), values.value !== options[0].value ? {
        sort_by: values.value
      } : {})
    }, undefined, {
      scroll: false
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(react_.Listbox, {
    value: selectedItem,
    onChange: handleItemClick,
    children: ({
      open
    }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "relative ms-2 lg:ms-0 z-10 min-w-[180px]",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Listbox.Button, {
        className: "border border-gray-300  text-heading text-[13px] md:text-sm font-semibold  relative w-full py-2 ps-3 pe-10 text-start bg-white rounded-lg shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm cursor-pointer",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "block truncate",
          children: t(selectedItem.name)
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "absolute inset-y-0 end-0 flex items-center pe-2 pointer-events-none",
          children: /*#__PURE__*/jsx_runtime_.jsx(hi_index_esm/* HiOutlineSelector */.YZt, {
            className: "w-5 h-5 text-gray-400",
            "aria-hidden": "true"
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Transition, {
        show: open,
        as: external_react_.Fragment,
        leave: "transition ease-in duration-100",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.Listbox.Options, {
          static: true,
          className: "absolute w-full py-1 mt-1 overflow-auto bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none text-sm",
          children: options === null || options === void 0 ? void 0 : options.map((option, personIdx) => /*#__PURE__*/jsx_runtime_.jsx(react_.Listbox.Option, {
            className: ({
              active
            }) => `${active ? "text-amber-900 bg-gray-100" : "text-gray-900"}
                          cursor-default select-none relative py-2 ps-10 pe-4`,
            value: option,
            children: ({
              selected,
              active
            }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: `${selected ? "font-medium" : "font-normal"} block truncate`,
                children: t(option.name)
              }), selected ? /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: `${active ? "text-amber-600" : ""}
                                check-icon absolute inset-y-0 start-0 flex items-center ps-3`,
                children: /*#__PURE__*/jsx_runtime_.jsx(hi_index_esm/* HiCheck */.dZ6, {
                  className: "w-5 h-5",
                  "aria-hidden": "true"
                })
              }) : null]
            })
          }, personIdx))
        })
      })]
    })
  });
}
;// CONCATENATED MODULE: ./src/components/shop/top-bar.tsx












const SearchTopBar = () => {
  const {
    openFilter,
    displayFilter,
    closeFilter
  } = (0,ui_context/* useUI */.l8)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  const {
    locale
  } = (0,router_.useRouter)();
  const dir = (0,get_direction/* getDirection */.M)(locale);
  const contentWrapperCSS = dir === "ltr" ? {
    left: 0
  } : {
    right: 0
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex justify-between items-center mb-7",
    children: [/*#__PURE__*/jsx_runtime_.jsx(ui_text/* default */.Z, {
      variant: "pageHeading",
      className: "hidden lg:inline-flex pb-1",
      children: t("Find your perfect Gift")
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
      className: "lg:hidden text-heading text-sm px-4 py-2 font-semibold border border-gray-300 rounded-md flex items-center transition duration-200 ease-in-out focus:outline-none hover:bg-gray-200",
      onClick: openFilter,
      children: [/*#__PURE__*/jsx_runtime_.jsx(filter_icon, {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "ps-2.5",
        children: t("text-filters")
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center justify-end",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex-shrink-0 text-body text-xs md:text-sm leading-4 pe-4 md:me-6 ps-2 hidden lg:block",
        children: ["165 ", t("text-items")]
      }), /*#__PURE__*/jsx_runtime_.jsx(ListBox, {
        options: [{
          name: "text-sorting-options",
          value: "options"
        }, {
          name: "text-newest",
          value: "newest"
        }, {
          name: "text-popularity",
          value: "popularity"
        }, {
          name: "text-price-low-high",
          value: "low-high"
        }, {
          name: "text-price-high-low",
          value: "high-low"
        }]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(drawer/* Drawer */.d, {
      placement: dir === "rtl" ? "right" : "left",
      open: displayFilter,
      onClose: closeFilter,
      handler: false,
      showMask: true,
      level: null,
      contentWrapperStyle: contentWrapperCSS,
      children: /*#__PURE__*/jsx_runtime_.jsx(filter_sidebar, {})
    })]
  });
};

/* harmony default export */ const top_bar = (SearchTopBar);

/***/ })

};
;