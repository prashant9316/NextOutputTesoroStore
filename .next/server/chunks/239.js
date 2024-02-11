"use strict";
exports.id = 239;
exports.ids = [239];
exports.modules = {

/***/ 239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(2364);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/components/icons/search-icon.tsx


const SearchIcon = ({
  color = "currentColor",
  width = "22px",
  height = "22px",
  className = "md:w-4 xl:w-5 md:h-4 xl:h-5"
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18.942 20",
    className: className,
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M381.768,385.4l3.583,3.576c.186.186.378.366.552.562a.993.993,0,1,1-1.429,1.375c-1.208-1.186-2.422-2.368-3.585-3.6a1.026,1.026,0,0,0-1.473-.246,8.343,8.343,0,1,1-3.671-15.785,8.369,8.369,0,0,1,6.663,13.262C382.229,384.815,382.025,385.063,381.768,385.4Zm-6.152.579a6.342,6.342,0,1,0-6.306-6.355A6.305,6.305,0,0,0,375.615,385.983Z",
      transform: "translate(-367.297 -371.285)",
      fill: color,
      fillRule: "evenodd"
    })
  });
};

/* harmony default export */ const search_icon = (SearchIcon);
// EXTERNAL MODULE: ./src/settings/site-settings.tsx
var site_settings = __webpack_require__(1274);
// EXTERNAL MODULE: ./src/components/ui/link.tsx
var ui_link = __webpack_require__(3407);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(9583);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
;// CONCATENATED MODULE: ./src/components/ui/mega-menu.tsx






const MegaMenu = ({
  columns
}) => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("menu");
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "megaMenu shadow-header bg-gray-200 absolute -start-20 xl:start-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "grid grid-cols-5",
      children: columns === null || columns === void 0 ? void 0 : columns.map(column => {
        var _column$columnItems;

        return /*#__PURE__*/jsx_runtime_.jsx("ul", {
          className: "even:bg-gray-150 pb-7 2xl:pb-8 pt-6 2xl:pt-7",
          children: column === null || column === void 0 ? void 0 : (_column$columnItems = column.columnItems) === null || _column$columnItems === void 0 ? void 0 : _column$columnItems.map(columnItem => {
            var _columnItem$columnIte;

            return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "mb-1.5",
                children: /*#__PURE__*/jsx_runtime_.jsx(ui_link/* default */.Z, {
                  href: columnItem.path,
                  className: "block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300",
                  children: t(columnItem.label)
                })
              }), columnItem === null || columnItem === void 0 ? void 0 : (_columnItem$columnIte = columnItem.columnItemItems) === null || _columnItem$columnIte === void 0 ? void 0 : _columnItem$columnIte.map(item => {
                var _columnItem$columnIte2;

                return /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: (columnItem === null || columnItem === void 0 ? void 0 : (_columnItem$columnIte2 = columnItem.columnItemItems) === null || _columnItem$columnIte2 === void 0 ? void 0 : _columnItem$columnIte2.length) === item.id ? "border-b border-gray-300 pb-3.5 mb-3" : "",
                  children: /*#__PURE__*/jsx_runtime_.jsx(ui_link/* default */.Z, {
                    href: item.path,
                    className: "text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300",
                    children: t(item.label)
                  })
                }, item.id);
              })]
            }, columnItem.id);
          })
        }, column.id);
      })
    })
  });
};

/* harmony default export */ const mega_menu = (MegaMenu);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/react-icons/io/index.esm.js
var io_index_esm = __webpack_require__(1649);
;// CONCATENATED MODULE: ./src/components/ui/list-menu.tsx






const ListMenu = ({
  dept,
  data,
  hasSubMenu,
  menuIndex
}) => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("menu");
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
    className: "relative",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ui_link/* default */.Z, {
      href: data.path,
      className: " font-josephine flex items-center justify-between py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 text-[#f7b081] hover:text-white hover:bg-[#f7b081]",
      children: [t(data.label), data.subMenu && /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "text-sm mt-0.5 shrink-0",
        children: /*#__PURE__*/jsx_runtime_.jsx(io_index_esm/* IoIosArrowForward */.hjJ, {
          className: "text-black transition duration-300 ease-in-out group-hover:text-black"
        })
      })]
    }), hasSubMenu && /*#__PURE__*/jsx_runtime_.jsx(SubMenu, {
      dept: dept,
      data: data.subMenu,
      menuIndex: menuIndex
    })]
  });
};

const SubMenu = ({
  dept,
  data,
  menuIndex
}) => {
  dept = dept + 1;
  return /*#__PURE__*/jsx_runtime_.jsx("ul", {
    className: "subMenuChild shadow-subMenu bg-pink-300 absolute z-0 end-full 2xl:end-auto 2xl:start-full opacity-0 invisible top-4 w-56 py-3",
    children: data === null || data === void 0 ? void 0 : data.map((menu, index) => {
      const menuName = `sidebar-submenu-${dept}-${menuIndex}-${index}`;
      return /*#__PURE__*/jsx_runtime_.jsx(ListMenu, {
        dept: dept,
        data: menu,
        hasSubMenu: menu.subMenu,
        menuName: menuName,
        menuIndex: index
      }, menuName);
    })
  });
};

/* harmony default export */ const list_menu = (ListMenu);
;// CONCATENATED MODULE: ./src/components/layout/header/header-menu.tsx









const HeaderMenu = ({
  data,
  className
}) => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("menu");
  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    className: external_classnames_default()(`headerMenu hidden lg:flex relative `, className),
    style: {
      display: 'none'
    },
    children: data === null || data === void 0 ? void 0 : data.map(item => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `menuItem group cursor-pointer py-1 ${item.subMenu ? "relative" : ""}`,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ui_link/* default */.Z, {
        href: item.path,
        className: " font-josephine inline-flex items-center text-sm xl:text-base text-black menu-text px-1 xl:px-4 py-2 font-normal relative ",
        children: [t(item.label), ((item === null || item === void 0 ? void 0 : item.columns) || item.subMenu) && /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end",
          children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaChevronDown */.RiI, {
            className: "transition duration-300 ease-in-out transform group-hover:-rotate-180"
          })
        })]
      }), (item === null || item === void 0 ? void 0 : item.columns) && Array.isArray(item.columns) && /*#__PURE__*/jsx_runtime_.jsx(mega_menu, {
        columns: item.columns
      }), (item === null || item === void 0 ? void 0 : item.subMenu) && Array.isArray(item.subMenu) && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "subMenu shadow-header bg-gray-200 absolute start-0 opacity-0 group-hover:opacity-100",
        children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
          className: "menu-text text-sm py-5",
          children: item.subMenu.map((menu, index) => {
            const dept = 1;
            const menuName = `sidebar-menu-${dept}-${index}`;
            return /*#__PURE__*/jsx_runtime_.jsx(list_menu, {
              dept: dept,
              data: menu,
              hasSubMenu: menu.subMenu,
              menuName: menuName,
              menuIndex: index
            }, menuName);
          })
        })
      })]
    }, item.id))
  });
};

/* harmony default export */ const header_menu = (HeaderMenu);
// EXTERNAL MODULE: ./src/components/ui/logo.tsx
var logo = __webpack_require__(9300);
// EXTERNAL MODULE: ./src/contexts/ui.context.tsx
var ui_context = __webpack_require__(7014);
// EXTERNAL MODULE: ./src/utils/routes.ts
var routes = __webpack_require__(9524);
;// CONCATENATED MODULE: ./src/utils/add-active-scroll.ts

function addActiveScroll(ref, topOffset = 80) {
  (0,external_react_.useEffect)(() => {
    const element = ref === null || ref === void 0 ? void 0 : ref.current;

    const listener = () => {
      if (window.scrollY > topOffset) {
        element === null || element === void 0 ? void 0 : element.classList.add('is-scrolling');
      } else {
        element === null || element === void 0 ? void 0 : element.classList.remove('is-scrolling');
      }
    };

    document.addEventListener('scroll', listener);
    return () => {
      document.removeEventListener('scroll', listener);
    };
  }, []);
}
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
;// CONCATENATED MODULE: ./src/components/icons/favorites-icon.tsx



const FavoriteIcon = ({
  color = "#fcbfd0",
  width = "20px",
  height = "20px",
  className = "md:w-4 xl:w-5 md:h-4 xl:h-5"
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
      className: className,
      xmlns: "http://www.w3.org/2000/svg",
      width: width,
      height: height,
      viewBox: "0 0 256 256",
      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: color,
        d: "M240 94c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 220.66 16 164 16 94a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 40.88 157.35 32 178 32a62.07 62.07 0 0 1 62 62Z"
      })
    })
  });
};

/* harmony default export */ const favorites_icon = (FavoriteIcon);
;// CONCATENATED MODULE: ./src/components/layout/header/header.tsx













const AuthMenu = dynamic_default()(() => __webpack_require__.e(/* import() */ 3642).then(__webpack_require__.bind(__webpack_require__, 3642)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3642)],
    modules: ["..\\components\\layout\\header\\header.tsx -> " + "./auth-menu"]
  }
});
const CartButton = dynamic_default()(() => __webpack_require__.e(/* import() */ 3627).then(__webpack_require__.bind(__webpack_require__, 3627)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3627)],
    modules: ["..\\components\\layout\\header\\header.tsx -> " + "@components/cart/cart-button"]
  }
});
const {
  site_header
} = site_settings/* siteSettings */.U;

const Header = () => {
  const {
    // openSidebar,
    // setDrawerView,
    openSearch,
    openModal,
    setModalView,
    isAuthorized
  } = (0,ui_context/* useUI */.l8)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  const siteHeaderRef = (0,external_react_.useRef)();
  addActiveScroll(siteHeaderRef);

  function handleLogin() {
    setModalView("LOGIN_VIEW");
    return openModal();
  } // function handleMobileMenu() {
  // 	setDrawerView("MOBILE_MENU");
  // 	return openSidebar();
  // }


  const {
    0: scrollY,
    1: setScrollY
  } = (0,external_react_.useState)(0);
  (0,external_react_.useEffect)(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    }; // just trigger this so that the initial state 
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216


    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    className: `top-7 z-100 page-header ${scrollY > 150 ? 'is-sticky' : ''}`,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "h-16 w-full",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
        className: "px-10 h-full w-full items-center justify-center",
        style: {
          justifyContent: 'center'
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "",
          className: "justify-start ",
          children: /*#__PURE__*/jsx_runtime_.jsx(logo/* default */.Z, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(header_menu, {
          data: site_header.menu,
          className: "for-desktop lg:flex md:ms-6 xl:ms-10 justify-center"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "hidden md:flex justify-end items-center space-s-6 lg:space-s-5 xl:space-s-8 2xl:space-s-10 ms-auto flex-shrink-0",
          children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform",
            onClick: openSearch,
            "aria-label": "search-button",
            children: /*#__PURE__*/jsx_runtime_.jsx(search_icon, {})
          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform",
            onClick: () => {
              console.log("not working yet");
            },
            "aria-label": "search-button",
            children: /*#__PURE__*/jsx_runtime_.jsx(favorites_icon, {})
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "-mt-0.5 flex-shrink-0",
            children: /*#__PURE__*/jsx_runtime_.jsx(AuthMenu, {
              isAuthorized: isAuthorized,
              href: routes/* ROUTES.ACCOUNT */.Z.ACCOUNT,
              className: "text-sm xl:text-base text-heading menu-text font-semibold",
              btnProps: {
                className: " font-josephine text-sm xl:text-base text-heading font-semibold focus:outline-none",
                children: "Sign in",
                onClick: handleLogin
              },
              children: t("text-account")
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(CartButton, {})]
        })]
      })
    })
  }) // <header
  // 	id="siteHeader"
  // 	ref={siteHeaderRef}
  // 	className="w-full h-16 sm:h-20 lg:h-24 relative z-20"
  // >
  // 	<div className="innerSticky text-gray-700 body-font fixed bg-white w-full h-16 sm:h-20 lg:h-24 z-20 ps-4 md:ps-0 lg:ps-6 pe-4 lg:pe-6 transition duration-200 ease-in-out">
  // 		<div className="flex items-center justify-center mx-auto max-w-[1920px] h-full w-full">
  // 			<button
  // 				aria-label="Menu"
  // 				className="menuBtn hidden md:flex lg:hidden flex-col items-center justify-center px-5 2xl:px-7 flex-shrink-0 h-full outline-none focus:outline-none"
  // 				onClick={handleMobileMenu}
  // 			>
  // 				<span className="menuIcon">
  // 					<span className="bar" />
  // 					<span className="bar" />
  // 					<span className="bar" />
  // 				</span>
  // 			</button>
  // 			<Logo />
  // 			<HeaderMenu
  // 				data={site_header.menu}
  // 				className="hidden lg:flex md:ms-6 xl:ms-10 justify-center"
  // 			/>
  // 			{/* <div className="flex-shrink-0 ms-auto lg:me-5 xl:me-8 2xl:me-10">
  // 				<LanguageSwitcher />
  // 			</div> */}
  // 			<div className="hidden md:flex justify-end items-center space-s-6 lg:space-s-5 xl:space-s-8 2xl:space-s-10 ms-auto flex-shrink-0">
  // 				<button
  // 					className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform"
  // 					onClick={openSearch}
  // 					aria-label="search-button"
  // 				>
  // 					<SearchIcon />
  // 				</button>
  // 				<button
  // 					className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform"
  // 					onClick={() => {
  // 						console.log("not working yet")
  // 					}}
  // 					aria-label="search-button"
  // 				>
  // 					<FavoriteIcon />
  // 				</button>
  // 				<div className="-mt-0.5 flex-shrink-0">
  // 					<AuthMenu
  // 						isAuthorized={isAuthorized}
  // 						href={ROUTES.ACCOUNT}
  // 						className="text-sm xl:text-base text-heading menu-text font-semibold"
  // 						btnProps={{
  // 							className:
  // 								"text-sm xl:text-base text-heading font-semibold focus:outline-none",
  // 							children: t("text-sign-in"),
  // 							onClick: handleLogin,
  // 						}}
  // 					>
  // 						{t("text-account")}
  // 					</AuthMenu>
  // 				</div>
  // 				<CartButton />
  // 			</div>
  // 		</div>
  // 	</div>
  // </header>
  ;
};

/* harmony default export */ const header = (Header);
// EXTERNAL MODULE: ./src/components/ui/container.tsx
var container = __webpack_require__(9691);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/widgets/widget-link.tsx





const WidgetLink = ({
  className,
  data
}) => {
  const {
    widgetTitle,
    lists
  } = data;
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("footer");
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `${className}`,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
      className: "text-sm md:text-base xl:text-lg font-semibold mb-5 2xl:mb-6 3xl:mb-7 text-gray-600 hover:text-gray-400",
      children: t(`${widgetTitle}`)
    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "text-xs lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5",
      children: lists.map(list => /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        className: "flex items-baseline text-white",
        children: [list.icon && /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "me-3 relative top-0.5 lg:top-1 text-sm lg:text-base text-gray-600 hover:text-gray-400",
          children: list.icon
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: list.path ? list.path : "#!",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "transition-colors duration-200 text-gray-600 hover:text-gray-400",
            children: t(`${list.title}`)
          })
        })]
      }, `widget-list--key${list.id}`))
    })]
  });
};

/* harmony default export */ const widget_link = (WidgetLink);
;// CONCATENATED MODULE: ./src/components/layout/footer/widgets.tsx




const Widgets = ({
  widgets
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(container/* default */.Z, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-5 md:gap-9 xl:gap-5  pb-9 md:pb-14 lg:pb-16 2xl:pb-20 3xl:pb-24 lg:mb-0.5 2xl:mb-0 3xl:-mb-1 text-black",
      children: widgets === null || widgets === void 0 ? void 0 : widgets.map(widget => /*#__PURE__*/jsx_runtime_.jsx(widget_link, {
        data: widget,
        className: "pb-3 md:pb-0 text-white"
      }, `footer-widget--key${widget.id}`))
    })
  });
};

/* harmony default export */ const widgets = (Widgets);
;// CONCATENATED MODULE: ./src/components/layout/footer/copyright.tsx






const year = new Date().getFullYear();

const Copyright = ({
  payment
}) => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("footer");
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "border-t border-gray-700 pt-5 pb-16 sm:pb-20 md:pb-5 mb-2 sm:mb-0",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(container/* default */.Z, {
      className: "flex flex-col-reverse md:flex-row text-center md:justify-between",
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-xs lg:text-sm leading-6 text-gray-700",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [t("text-copyright"), " \xA9 ", year, "\xA0", /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "font-semibold text-gray-700 transition-colors duration-200 ease-in-out hover:text-gray",
            href: site_settings/* siteSettings.author.websiteUrl */.U.author.websiteUrl,
            children: site_settings/* siteSettings.author.name */.U.author.name
          }), "\xA0 ", t("text-all-rights-reserved")]
        })
      }), payment && /*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: "hidden md:flex flex-wrap justify-center items-center space-s-4 xs:space-s-5 lg:space-s-7 mb-1 md:mb-0 mx-auto md:mx-0",
        children: payment === null || payment === void 0 ? void 0 : payment.map(item => /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "mb-2 md:mb-0 transition hover:opacity-80",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: item.path ? item.path : "/#",
            target: "_blank",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: item.image,
              alt: t(`${item.name}`),
              height: item.height,
              width: item.width
            })
          })
        }, `payment-list--key${item.id}`))
      })]
    })
  });
};

/* harmony default export */ const copyright = (Copyright);
// EXTERNAL MODULE: ./node_modules/react-icons/io5/index.esm.js
var io5_index_esm = __webpack_require__(155);
;// CONCATENATED MODULE: ./src/components/layout/footer/data.tsx


const footer = {
  widgets: [{
    id: 1,
    widgetTitle: "widget-title-social",
    lists: [{
      id: 1,
      title: "link-instagram",
      path: "https://www.instagram.com/",
      icon: /*#__PURE__*/jsx_runtime_.jsx(io5_index_esm/* IoLogoInstagram */.oVe, {})
    }, {
      id: 2,
      title: "link-twitter",
      path: "https://twitter.com/",
      icon: /*#__PURE__*/jsx_runtime_.jsx(io5_index_esm/* IoLogoTwitter */.JUd, {})
    }, {
      id: 3,
      title: "link-facebook",
      path: "https://www.facebook.com/",
      icon: /*#__PURE__*/jsx_runtime_.jsx(io5_index_esm/* IoLogoFacebook */.egd, {})
    }, {
      id: 4,
      title: "link-youtube",
      path: "https://www.youtube.com/",
      icon: /*#__PURE__*/jsx_runtime_.jsx(io5_index_esm/* IoLogoYoutube */.tPx, {})
    }]
  }, {
    id: 2,
    widgetTitle: "widget-title-contact",
    lists: [{
      id: 1,
      title: "link-contact-us",
      path: "/contact-us"
    }, {
      id: 2,
      title: "support@tesorostore.in",
      path: "mailto:support@tesorostore.in"
    }, {
      id: 3,
      title: "+91 96549 70705",
      path: "tel:+919654970705"
    }]
  }, {
    id: 3,
    widgetTitle: "widget-title-about",
    lists: [{
      id: 1,
      title: "link-support-center",
      path: "/contact-us"
    }, {
      id: 2,
      title: "link-customer-support",
      path: "/"
    }, {
      id: 3,
      title: "link-about-us",
      path: "/about-us"
    }, {
      id: 4,
      title: "link-copyright",
      path: "/"
    }]
  }, {
    id: 4,
    widgetTitle: "widget-title-customer-care",
    lists: [{
      id: 1,
      title: "link-faq",
      path: "/faq"
    }, {
      id: 2,
      title: "Shipping Policy",
      path: "/shipping-policy"
    }, {
      id: 4,
      title: "Return & Cancellation Policy",
      path: "/return-and-cancellation-policy"
    }]
  }, {
    id: 5,
    widgetTitle: "widget-title-our-information",
    lists: [{
      id: 1,
      title: "Terms of Service",
      path: "/terms-conditions"
    }, {
      id: 2,
      title: "Terms of Use",
      path: "/terms-of-use"
    }, {
      id: 3,
      title: "Privacy Policy",
      path: "/privacy-policy"
    }, {
      id: 5,
      title: "link-site-map",
      path: "/"
    }]
  }, {
    id: 6,
    widgetTitle: "widget-title-top-categories",
    lists: [{
      id: 1,
      title: "Home Decor",
      path: "/search"
    }, {
      id: 2,
      title: "Stationary",
      path: "/search"
    }, {
      id: 3,
      title: "Tableware",
      path: "/search"
    }, {
      id: 4,
      title: "Gifts",
      path: "/search"
    }, {
      id: 5,
      title: "Handmade with Love",
      path: "/search"
    }, {
      id: 6,
      title: "Custom Made",
      path: "/search"
    }]
  }],
  payment: [{
    id: 1,
    path: "/",
    image: "/assets/images/payment/mastercard.svg",
    name: "payment-master-card",
    width: 34,
    height: 20
  }, {
    id: 2,
    path: "/",
    image: "/assets/images/payment/visa.svg",
    name: "payment-visa",
    width: 50,
    height: 20
  }, {
    id: 3,
    path: "/",
    image: "/assets/images/payment/paypal.svg",
    name: "payment-paypal",
    width: 76,
    height: 20
  }, {
    id: 4,
    path: "/",
    image: "/assets/images/payment/jcb.svg",
    name: "payment-jcb",
    width: 26,
    height: 20
  }, {
    id: 5,
    path: "/",
    image: "/assets/images/payment/skrill.svg",
    name: "payment-skrill",
    width: 39,
    height: 20
  }]
};
;// CONCATENATED MODULE: ./src/components/layout/footer/footer.tsx





const {
  widgets: footer_widgets,
  payment
} = footer;

const Footer = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
  className: "border-b-4 border-heading text-white bg-[#e9e9ea]",
  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "h-10"
  }), /*#__PURE__*/jsx_runtime_.jsx(widgets, {
    widgets: footer_widgets
  }), /*#__PURE__*/jsx_runtime_.jsx(copyright, {
    payment: payment
  })]
});

/* harmony default export */ const footer_footer = (Footer);
;// CONCATENATED MODULE: ./src/components/icons/user-icon.tsx


const UserIcon = ({
  color = "currentColor",
  width = "18px",
  height = "20px"
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 16.577 18.6",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M-7722.37,2933a.63.63,0,0,1-.63-.63c0-4.424,2.837-6.862,7.989-6.862s7.989,2.438,7.989,6.862a.629.629,0,0,1-.63.63Zm.647-1.251h13.428c-.246-3.31-2.5-4.986-6.713-4.986s-6.471,1.673-6.714,4.986Zm2.564-12.518a4.1,4.1,0,0,1,1.172-3,4.1,4.1,0,0,1,2.979-1.229,4.1,4.1,0,0,1,2.979,1.229,4.1,4.1,0,0,1,1.171,3,4.341,4.341,0,0,1-4.149,4.5,4.344,4.344,0,0,1-4.16-4.5Zm1.251,0a3.1,3.1,0,0,0,2.9,3.254,3.094,3.094,0,0,0,2.9-3.253,2.878,2.878,0,0,0-.813-2.109,2.88,2.88,0,0,0-2.085-.872,2.843,2.843,0,0,0-2.1.856,2.841,2.841,0,0,0-.806,2.122Z",
      transform: "translate(7723.3 -2914.703)",
      fill: color,
      stroke: color,
      strokeWidth: "0.6"
    })
  });
};

/* harmony default export */ const user_icon = (UserIcon);
;// CONCATENATED MODULE: ./src/components/icons/menu-icon.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const MenuIcon = props => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "14",
    viewBox: "0 0 25.567 18"
  }, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      transform: "translate(-776 -462)",
      children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
        id: "Rectangle_941",
        "data-name": "Rectangle 941",
        width: "12.749",
        height: "2.499",
        rx: "1.25",
        transform: "translate(776 462)",
        fill: "currentColor"
      }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
        id: "Rectangle_942",
        "data-name": "Rectangle 942",
        width: "25.567",
        height: "2.499",
        rx: "1.25",
        transform: "translate(776 469.75)",
        fill: "currentColor"
      }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
        id: "Rectangle_943",
        "data-name": "Rectangle 943",
        width: "17.972",
        height: "2.499",
        rx: "1.25",
        transform: "translate(776 477.501)",
        fill: "currentColor"
      })]
    })
  }));
};

/* harmony default export */ const menu_icon = (MenuIcon);
;// CONCATENATED MODULE: ./src/components/icons/home-icon.tsx


const HomeIcon = ({
  color = "currentColor",
  width = "18px",
  height = "20px"
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 17.996 20.442",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M48.187,7.823,39.851.182A.7.7,0,0,0,38.9.2L31.03,7.841a.7.7,0,0,0-.211.5V19.311a.694.694,0,0,0,.694.694H37.3A.694.694,0,0,0,38,19.311V14.217h3.242v5.095a.694.694,0,0,0,.694.694h5.789a.694.694,0,0,0,.694-.694V8.335a.7.7,0,0,0-.228-.512ZM47.023,18.617h-4.4V13.522a.694.694,0,0,0-.694-.694H37.3a.694.694,0,0,0-.694.694v5.095H32.2V8.63l7.192-6.98L47.02,8.642v9.975Z",
      transform: "translate(-30.619 0.236)",
      fill: color,
      stroke: color,
      strokeWidth: "0.4"
    })
  });
};

/* harmony default export */ const home_icon = (HomeIcon);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/components/common/drawer/drawer.tsx
var drawer = __webpack_require__(1317);
// EXTERNAL MODULE: ./src/utils/get-direction.ts
var get_direction = __webpack_require__(991);
;// CONCATENATED MODULE: ./src/components/layout/mobile-navigation/mobile-navigation.tsx














const mobile_navigation_CartButton = dynamic_default()(() => __webpack_require__.e(/* import() */ 3627).then(__webpack_require__.bind(__webpack_require__, 3627)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3627)],
    modules: ["..\\components\\layout\\mobile-navigation\\mobile-navigation.tsx -> " + "@components/cart/cart-button"]
  }
});
const mobile_navigation_AuthMenu = dynamic_default()(() => __webpack_require__.e(/* import() */ 3642).then(__webpack_require__.bind(__webpack_require__, 3642)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3642)],
    modules: ["..\\components\\layout\\mobile-navigation\\mobile-navigation.tsx -> " + "@components/layout/header/auth-menu"]
  }
});
const MobileMenu = dynamic_default()(() => __webpack_require__.e(/* import() */ 1265).then(__webpack_require__.bind(__webpack_require__, 1265)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1265)],
    modules: ["..\\components\\layout\\mobile-navigation\\mobile-navigation.tsx -> " + "@components/layout/header/mobile-menu"]
  }
});

const BottomNavigation = () => {
  const {
    openSidebar,
    closeSidebar,
    displaySidebar,
    setDrawerView,
    openSearch,
    openModal,
    setModalView,
    isAuthorized
  } = (0,ui_context/* useUI */.l8)();

  function handleLogin() {
    setModalView("LOGIN_VIEW");
    return openModal();
  }

  function handleMobileMenu() {
    setDrawerView("MOBILE_MENU");
    return openSidebar();
  }

  const {
    locale
  } = (0,router_.useRouter)();
  const dir = (0,get_direction/* getDirection */.M)(locale);
  const contentWrapperCSS = dir === "ltr" ? {
    left: 0
  } : {
    right: 0
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "md:hidden fixed z-10 bottom-0 flex items-center justify-between shadow-bottomNavigation text-gray-700 body-font bg-white w-full h-14 sm:h-16 px-4",
      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
        "aria-label": "Menu",
        className: "menuBtn flex flex-col items-center justify-center flex-shrink-0 outline-none focus:outline-none",
        onClick: handleMobileMenu,
        children: /*#__PURE__*/jsx_runtime_.jsx(menu_icon, {})
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none",
        onClick: openSearch,
        "aria-label": "search-button",
        children: /*#__PURE__*/jsx_runtime_.jsx(search_icon, {})
      }), /*#__PURE__*/jsx_runtime_.jsx(ui_link/* default */.Z, {
        href: "/",
        className: "flex-shrink-0",
        children: /*#__PURE__*/jsx_runtime_.jsx(home_icon, {})
      }), /*#__PURE__*/jsx_runtime_.jsx(mobile_navigation_CartButton, {}), /*#__PURE__*/jsx_runtime_.jsx(mobile_navigation_AuthMenu, {
        isAuthorized: isAuthorized,
        href: routes/* ROUTES.ACCOUNT */.Z.ACCOUNT,
        className: "flex-shrink-0",
        btnProps: {
          className: "flex-shrink-0 focus:outline-none",
          children: /*#__PURE__*/jsx_runtime_.jsx(user_icon, {}),
          onClick: handleLogin
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(user_icon, {})
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(drawer/* Drawer */.d, {
      placement: dir === "rtl" ? "right" : "left",
      open: displaySidebar,
      onClose: closeSidebar,
      handler: false,
      showMask: true,
      level: null,
      contentWrapperStyle: contentWrapperCSS,
      children: /*#__PURE__*/jsx_runtime_.jsx(MobileMenu, {})
    })]
  });
};

/* harmony default export */ const mobile_navigation = (BottomNavigation);
// EXTERNAL MODULE: external "react-content-loader"
var external_react_content_loader_ = __webpack_require__(9081);
var external_react_content_loader_default = /*#__PURE__*/__webpack_require__.n(external_react_content_loader_);
;// CONCATENATED MODULE: ./src/components/ui/loaders/search-result-loader.tsx



function search_result_loader_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function search_result_loader_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { search_result_loader_ownKeys(Object(source), true).forEach(function (key) { search_result_loader_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { search_result_loader_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function search_result_loader_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const SearchResultLoader = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_content_loader_default()), search_result_loader_objectSpread(search_result_loader_objectSpread({
  speed: 2,
  width: 846,
  height: 96,
  viewBox: "0 0 846 96",
  backgroundColor: "#f3f3f3",
  foregroundColor: "#eaeaea",
  className: "w-full h-auto"
}, props), {}, {
  children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "118",
    y: "31",
    rx: "3",
    ry: "3",
    width: "120",
    height: "8"
  }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "118",
    y: "59",
    rx: "3",
    ry: "3",
    width: "80",
    height: "8"
  }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
    x: "0",
    y: "0",
    rx: "6",
    ry: "6",
    width: "96",
    height: "96"
  })]
}));

/* harmony default export */ const search_result_loader = (SearchResultLoader);
;// CONCATENATED MODULE: ./src/components/common/search-box.tsx



function search_box_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function search_box_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { search_box_ownKeys(Object(source), true).forEach(function (key) { search_box_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { search_box_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function search_box_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const SearchBox = /*#__PURE__*/external_react_default().forwardRef((_ref, ref) => {
  let {
    className,
    onSubmit,
    onClear
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className", "onSubmit", "onClear"]);

  const {
    t
  } = (0,external_next_i18next_.useTranslation)("forms");
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
    className: "relative mt-10 pe-12 md:pe-14 bg-white overflow-hidden rounded-md w-full",
    noValidate: true,
    role: "search",
    onSubmit: onSubmit,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
      htmlFor: "search",
      className: "flex items-center py-0.5",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "w-12 md:w-14 h-full flex flex-shrink-0 justify-center items-center cursor-pointer focus:outline-none",
        children: /*#__PURE__*/jsx_runtime_.jsx(search_icon, {
          color: "text-heading",
          className: "w-4 h-4"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("input", search_box_objectSpread({
        id: "search",
        className: "text-heading outline-none w-full h-12 lg:h-14 placeholder-gray-400 text-sm lg:text-base",
        placeholder: t("placeholder-search"),
        "aria-label": "Search",
        autoComplete: "off",
        ref: ref
      }, rest))]
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      type: "button",
      className: "outline-none text-2xl md:text-3xl text-gray-400 absolute top-0 end-0 w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none",
      onClick: onClear,
      children: /*#__PURE__*/jsx_runtime_.jsx(io5_index_esm/* IoCloseOutline */.IOM, {
        className: "w-6 h-6"
      })
    })]
  });
});
/* harmony default export */ const search_box = (SearchBox);
// EXTERNAL MODULE: ./src/framework/basic-rest/utils/http.ts
var http = __webpack_require__(7235);
// EXTERNAL MODULE: ./src/framework/basic-rest/utils/api-endpoints.ts
var api_endpoints = __webpack_require__(3833);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
;// CONCATENATED MODULE: ./src/framework/basic-rest/product/use-search.tsx



const fetchSearchedProducts = async ({
  queryKey
}) => {
  const [_key, _params] = queryKey;
  const {
    data
  } = await http/* default.get */.Z.get(api_endpoints/* API_ENDPOINTS.SEARCH */.P.SEARCH);
  return data;
};
const useSearchQuery = options => {
  return (0,external_react_query_.useQuery)([api_endpoints/* API_ENDPOINTS.SEARCH */.P.SEARCH, options], fetchSearchedProducts);
};
// EXTERNAL MODULE: external "body-scroll-lock"
var external_body_scroll_lock_ = __webpack_require__(8023);
// EXTERNAL MODULE: ./src/components/common/scrollbar.tsx
var scrollbar = __webpack_require__(4228);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/framework/basic-rest/product/use-price.tsx
var use_price = __webpack_require__(4718);
;// CONCATENATED MODULE: ./src/components/common/search-product.tsx







const SearchProduct = ({
  item
}) => {
  var _item$image$original, _item$image;

  const {
    price,
    basePrice
  } = (0,use_price/* default */.ZP)({
    amount: item.sale_price ? item.sale_price : item.price,
    baseAmount: item.price,
    currencyCode: "USD"
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ui_link/* default */.Z, {
    href: `${routes/* ROUTES.PRODUCT */.Z.PRODUCT}/${item === null || item === void 0 ? void 0 : item.slug}`,
    className: "group w-full h-auto flex justify-start items-center",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "relative flex w-24 h-24 rounded-md overflow-hidden bg-gray-200 flex-shrink-0 cursor-pointer me-4",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: (_item$image$original = item === null || item === void 0 ? void 0 : (_item$image = item.image) === null || _item$image === void 0 ? void 0 : _item$image.original) !== null && _item$image$original !== void 0 ? _item$image$original : "/assets/placeholder/search-product.svg",
        width: 96,
        height: 96,
        loading: "eager",
        alt: item.name || "Product Image",
        className: "bg-gray-200 object-cover"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col w-full overflow-hidden",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "truncate text-sm text-heading mb-2",
        children: item.name
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "text-heading font-semibold text-sm",
        children: [price, /*#__PURE__*/jsx_runtime_.jsx("del", {
          className: "ps-2 text-gray-400 font-normal",
          children: basePrice
        })]
      })]
    })]
  });
};

/* harmony default export */ const search_product = (SearchProduct);
;// CONCATENATED MODULE: ./src/components/common/search.tsx











function Search() {
  const {
    displaySearch,
    closeSearch
  } = (0,ui_context/* useUI */.l8)();
  const [searchText, setSearchText] = external_react_default().useState("");
  const {
    data,
    isLoading
  } = useSearchQuery({
    text: searchText
  });

  function handleSearch(e) {
    e.preventDefault();
  }

  function handleAutoSearch(e) {
    setSearchText(e.currentTarget.value);
  }

  function clear() {
    setSearchText("");
  }

  const ref = (0,external_react_.useRef)(null);
  (0,external_react_.useEffect)(() => {
    if (ref.current) {
      if (displaySearch) {
        (0,external_body_scroll_lock_.disableBodyScroll)(ref.current);
      } else {
        (0,external_body_scroll_lock_.enableBodyScroll)(ref.current);
      }
    }

    return () => {
      (0,external_body_scroll_lock_.clearAllBodyScrollLocks)();
    };
  }, [displaySearch]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    ref: ref,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: external_classnames_default()("overlay", {
        open: displaySearch
      }),
      role: "button",
      onClick: closeSearch
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: external_classnames_default()("drawer-search relative hidden top-0 z-30 opacity-0 invisible transition duration-300 ease-in-out left-1/2 px-4 w-full md:w-[730px] lg:w-[930px]", {
        open: displaySearch
      }),
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-full flex flex-col justify-center",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex-shrink-0 mt-3.5 lg:mt-4 w-full",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "flex flex-col mx-auto mb-1.5 w-full ",
            children: /*#__PURE__*/jsx_runtime_.jsx(search_box, {
              onSubmit: handleSearch,
              onChange: handleAutoSearch,
              name: "search",
              value: searchText,
              onClear: clear,
              ref: input => input && input.focus()
            })
          }), searchText && /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "bg-white flex flex-col rounded-md overflow-hidden h-full max-h-64vh lg:max-h-[550px]",
            children: /*#__PURE__*/jsx_runtime_.jsx(scrollbar/* default */.Z, {
              className: "os-host-flexbox",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "h-full",
                children: isLoading ? /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "p-5 border-b border-gray-300 border-opacity-30 last:border-b-0",
                  children: Array.from({
                    length: 5
                  }).map((_, idx) => /*#__PURE__*/jsx_runtime_.jsx(search_result_loader, {
                    uniqueKey: `top-search-${idx}`
                  }, idx))
                }) : data === null || data === void 0 ? void 0 : data.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: " p-5 border-b border-gray-150 relative last:border-b-0",
                  onClick: closeSearch,
                  children: /*#__PURE__*/jsx_runtime_.jsx(search_product, {
                    item: item
                  }, index)
                }))
              })
            })
          })]
        })
      })
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/common/cookie-bar.tsx




const CookieBar = ({
  title,
  description,
  className,
  action,
  hide
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_classnames_default()("text-center p-5 bg-white text-sm flex-row justify-center items-center font-medium fixed bottom-0 w-full z-30 transition-all duration-300 ease-out shadow-cookies", {
      transform: true,
      "translate-y-0 opacity-100": !hide,
      "translate-y-full opacity-0": hide
    }, className),
    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "inline-block mb:block mb-3.5 leading-6",
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "inline-block md:ms-3",
      children: description
    }), action && action]
  });
};

/* harmony default export */ const cookie_bar = (CookieBar);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
;// CONCATENATED MODULE: ./src/utils/use-accept-cookies.ts


const COOKIE_NAME = 'accept_cookies';
const useAcceptCookies = () => {
  const {
    0: acceptedCookies,
    1: setAcceptedCookies
  } = (0,external_react_.useState)(true);
  (0,external_react_.useEffect)(() => {
    if (!external_js_cookie_default().get(COOKIE_NAME)) {
      setAcceptedCookies(false);
    }
  }, []);

  const acceptCookies = () => {
    setAcceptedCookies(true);
    external_js_cookie_default().set(COOKIE_NAME, 'accepted', {
      expires: 365
    });
  };

  return {
    acceptedCookies,
    onAcceptCookies: acceptCookies
  };
};
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(1553);
// EXTERNAL MODULE: external "react-fast-marquee"
var external_react_fast_marquee_ = __webpack_require__(9589);
var external_react_fast_marquee_default = /*#__PURE__*/__webpack_require__.n(external_react_fast_marquee_);
;// CONCATENATED MODULE: ./src/components/layout/TopBar.tsx





function TopBar() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "h-7 w-full sticky top-0 left-0 bg-[#FFE583]",
    style: {
      // backgroundColor: '#7066e0', 
      zIndex: 50
    },
    children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
      className: "font-bold text-md h-7",
      style: {
        color: '#000'
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_fast_marquee_default()), {
        className: "h-7",
        children: [" Free shipping on all orders.", " ", /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "/collection/sale",
          children: "Shop Now"
        })]
      })
    })
  });
}

/* harmony default export */ const layout_TopBar = (TopBar);
;// CONCATENATED MODULE: ./src/components/layout/layout.tsx













const Layout = ({
  children
}) => {
  const {
    acceptedCookies,
    onAcceptCookies
  } = useAcceptCookies();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col min-h-screen",
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_next_seo_.NextSeo, {
      additionalMetaTags: [{
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }],
      title: "Tesoro Store",
      description: "Your own gifting store.",
      canonical: "",
      openGraph: {
        url: "",
        title: "Tesoro Store",
        description: "Gift.",
        images: [{
          url: "/assets/images/og-image-01.png",
          width: 800,
          height: 600,
          alt: "Og Image Alt"
        }, {
          url: "/assets/images/og-image-02.png",
          width: 900,
          height: 800,
          alt: "Og Image Alt Second"
        }]
      }
    }), /*#__PURE__*/jsx_runtime_.jsx(layout_TopBar, {}), /*#__PURE__*/jsx_runtime_.jsx(header, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
      className: "relative flex-grow",
      style: {
        minHeight: "-webkit-fill-available",
        WebkitOverflowScrolling: "touch"
      },
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(footer_footer, {}), /*#__PURE__*/jsx_runtime_.jsx(mobile_navigation, {}), /*#__PURE__*/jsx_runtime_.jsx(Search, {}), /*#__PURE__*/jsx_runtime_.jsx(cookie_bar, {
      title: t("text-cookies-title"),
      hide: acceptedCookies,
      action: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
        onClick: () => onAcceptCookies(),
        variant: "slim",
        children: t("text-accept-cookies")
      })
    })]
  });
};

/* harmony default export */ const layout = (Layout);

/***/ }),

/***/ 9691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);



const Container = ({
  children,
  className,
  el = "div",
  clean
}) => {
  const rootClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
    "mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16": !clean
  });
  let Component = el;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
    className: rootClassName,
    children: children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

/***/ })

};
;