"use strict";
exports.id = 6061;
exports.ids = [6061];
exports.modules = {

/***/ 6061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "e": () => (/* binding */ ProductGrid)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./src/components/product/product-card.tsx
var product_card = __webpack_require__(6628);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(1553);
// EXTERNAL MODULE: ./src/framework/basic-rest/utils/api-endpoints.ts
var api_endpoints = __webpack_require__(3833);
// EXTERNAL MODULE: ./src/framework/basic-rest/utils/http.ts
var http = __webpack_require__(7235);
// EXTERNAL MODULE: external "lodash/shuffle"
var shuffle_ = __webpack_require__(805);
var shuffle_default = /*#__PURE__*/__webpack_require__.n(shuffle_);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
;// CONCATENATED MODULE: ./src/framework/basic-rest/product/get-all-products.tsx





const fetchProducts = async ({
  queryKey
}) => {
  const [_key, _params] = queryKey;
  const {
    data
  } = await http/* default.get */.Z.get(api_endpoints/* API_ENDPOINTS.PRODUCTS */.P.PRODUCTS);
  return {
    data: shuffle_default()(data),
    paginatorInfo: {
      nextPageUrl: ""
    }
  };
};

const useProductsQuery = options => {
  return (0,external_react_query_.useInfiniteQuery)([api_endpoints/* API_ENDPOINTS.PRODUCTS */.P.PRODUCTS, options], fetchProducts, {
    getNextPageParam: ({
      paginatorInfo
    }) => paginatorInfo.nextPageUrl
  });
};


// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/components/ui/loaders/product-feed-loader.tsx + 1 modules
var product_feed_loader = __webpack_require__(9761);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
;// CONCATENATED MODULE: ./src/components/product/product-grid.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const ProductGrid = ({
  className = ""
}) => {
  var _data$pages, _data$pages2;

  const {
    query
  } = (0,router_.useRouter)();
  const {
    isFetching: isLoading,
    isFetchingNextPage: loadingMore,
    fetchNextPage,
    hasNextPage,
    data,
    error
  } = useProductsQuery(_objectSpread({
    limit: 10
  }, query));
  if (error) return /*#__PURE__*/jsx_runtime_.jsx("p", {
    children: error.message
  });
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 ${className}`,
      children: isLoading && !(data !== null && data !== void 0 && (_data$pages = data.pages) !== null && _data$pages !== void 0 && _data$pages.length) ? /*#__PURE__*/jsx_runtime_.jsx(product_feed_loader/* default */.Z, {
        limit: 20,
        uniqueKey: "search-product"
      }) : data === null || data === void 0 ? void 0 : (_data$pages2 = data.pages) === null || _data$pages2 === void 0 ? void 0 : _data$pages2.map(page => {
        var _page$data;

        return page === null || page === void 0 ? void 0 : (_page$data = page.data) === null || _page$data === void 0 ? void 0 : _page$data.map(product => /*#__PURE__*/jsx_runtime_.jsx(product_card/* default */.Z, {
          product: product,
          variant: "grid"
        }, `product--key${product.id}`));
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "text-center pt-8 xl:pt-14",
      children: hasNextPage && /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
        loading: loadingMore,
        disabled: loadingMore,
        onClick: () => fetchNextPage(),
        variant: "slim",
        children: t("button-load-more")
      })
    })]
  });
};

/***/ })

};
;