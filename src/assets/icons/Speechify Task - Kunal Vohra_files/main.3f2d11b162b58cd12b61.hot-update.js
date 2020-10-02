webpackHotUpdate("main",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_ProtectedRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ProtectedRoute */ "./src/components/ProtectedRoute.jsx");
/* harmony import */ var _components_PublicRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PublicRoute */ "./src/components/PublicRoute.jsx");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/kunalvohra/Development/speechify/app/speechify-task-app/src/App.js";




 // const Login = lazy(() => import('./views/Login'));

const Signup = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ./views/Signup */ "./src/views/Signup.jsx")));
const Login = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! ./views/Login */ "./src/views/Login.jsx")));

function App() {
  const location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])();
  const pages = [{
    pageLink: '/signup',
    view: Signup,
    displayName: 'Signup',
    protected: false
  }, {
    pageLink: '/login',
    view: Login,
    displayName: 'Login',
    protected: false
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 31
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    location: location,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, pages.map((page, index) => {
    if (page.protected === true) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProtectedRoute__WEBPACK_IMPORTED_MODULE_2__["default"], {
        path: page.pageLink,
        render: ({
          match
        }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(page.view, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 48
          }
        }),
        key: index,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 25
        }
      });
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PublicRoute__WEBPACK_IMPORTED_MODULE_3__["default"], {
        path: page.pageLink,
        render: ({
          match
        }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(page.view, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 46
          }
        }),
        key: index,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 23
        }
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: "/signup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=main.3f2d11b162b58cd12b61.hot-update.js.map