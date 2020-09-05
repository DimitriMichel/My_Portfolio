webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SideBox.js":
/*!*******************************!*\
  !*** ./components/SideBox.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ti */ \"./node_modules/react-icons/ti/index.esm.js\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dimitripl/Documents/Portfolio/components/SideBox.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n //Icons\n\n\n\n\n\n\n\n //Framer Motion\n\n\nvar yContainerVariants = {\n  initial: {\n    opacity: 0,\n    y: -20\n  },\n  complete: {\n    opacity: 1,\n    y: 0\n  },\n  transition: {\n    delayChildren: 0.5\n  }\n};\nvar yAxisVariants = {\n  initial: {\n    opacity: 0,\n    y: -20\n  },\n  complete: {\n    opacity: 1,\n    y: 0\n  }\n};\n\nvar SideBox = function SideBox() {\n  return __jsx(\"div\", {\n    className: \"grid-item-one\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n    className: \"sidebox\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n    className: \"sidebox-content\",\n    initial: \"initial\",\n    animate: \"complete\",\n    variants: yAxisVariants,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n    className: \"name-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].h1, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, \"Dimitri\", __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 15\n    }\n  }, \" Michel\"))), __jsx(\"div\", {\n    className: \"title-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, \"Software Developer\"), __jsx(\"div\", {\n    className: \"social-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    href: \"https://twitter.com/\",\n    \"aria-label\": \"Twitter\",\n    className: \"social-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    className: \"font-icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 15\n    }\n  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__[\"FaTwitter\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 17\n    }\n  }))), __jsx(\"a\", {\n    href: \"https://github.com/DimitriMichel\",\n    \"aria-label\": \"Github\",\n    className: \"social-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    className: \"font-icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 15\n    }\n  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__[\"FaGithub\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 17\n    }\n  }))), __jsx(\"a\", {\n    href: \"https://www.linkedin.com/in/dimitri-michel-6812731b4/\",\n    \"aria-label\": \"Linked In\",\n    className: \"social-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__[\"FaLinkedin\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 15\n    }\n  }))), __jsx(\"div\", {\n    className: \"details\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"info\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }, __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 15\n    }\n  }, __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 17\n    }\n  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__[\"FiCalendar\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 19\n    }\n  }), \" November 18\"), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 17\n    }\n  }, __jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_2__[\"TiLocation\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 19\n    }\n  }), \" Boston, MA\"), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 17\n    }\n  }, __jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_2__[\"TiMail\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 19\n    }\n  }), __jsx(\"a\", {\n    href: \"mailto:dimitri.dev@icloud.com\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 19\n    }\n  }, \"dimitri.dev@icloud.com\")), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 17\n    }\n  }, __jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_2__[\"TiPhone\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 19\n    }\n  }), \" (617)-322-4315\")))))));\n};\n\n_c = SideBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideBox);\n\nvar _c;\n\n$RefreshReg$(_c, \"SideBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlQm94LmpzP2M2OWQiXSwibmFtZXMiOlsieUNvbnRhaW5lclZhcmlhbnRzIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiY29tcGxldGUiLCJ0cmFuc2l0aW9uIiwiZGVsYXlDaGlsZHJlbiIsInlBeGlzVmFyaWFudHMiLCJTaWRlQm94Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0EsSUFBTUEsa0JBQWtCLEdBQUc7QUFDekJDLFNBQU8sRUFBRTtBQUFFQyxXQUFPLEVBQUUsQ0FBWDtBQUFjQyxLQUFDLEVBQUUsQ0FBQztBQUFsQixHQURnQjtBQUV6QkMsVUFBUSxFQUFFO0FBQUVGLFdBQU8sRUFBRSxDQUFYO0FBQWNDLEtBQUMsRUFBRTtBQUFqQixHQUZlO0FBR3pCRSxZQUFVLEVBQUU7QUFDVkMsaUJBQWEsRUFBRTtBQURMO0FBSGEsQ0FBM0I7QUFPQSxJQUFNQyxhQUFhLEdBQUc7QUFDcEJOLFNBQU8sRUFBRTtBQUFFQyxXQUFPLEVBQUUsQ0FBWDtBQUFjQyxLQUFDLEVBQUUsQ0FBQztBQUFsQixHQURXO0FBRXBCQyxVQUFRLEVBQUU7QUFBRUYsV0FBTyxFQUFFLENBQVg7QUFBY0MsS0FBQyxFQUFFO0FBQWpCO0FBRlUsQ0FBdEI7O0FBS0EsSUFBTUssT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQixTQUNFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksYUFBUyxFQUFDLFNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFELENBQVEsR0FBUjtBQUNFLGFBQVMsRUFBQyxpQkFEWjtBQUVFLFdBQU8sRUFBQyxTQUZWO0FBR0UsV0FBTyxFQUFDLFVBSFY7QUFJRSxZQUFRLEVBQUVELGFBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksYUFBUyxFQUFDLGdCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRCxDQUFRLEVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsQ0FERixDQU5GLEVBWUU7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFaRixFQWFFO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxzQkFEUDtBQUVFLGtCQUFXLFNBRmI7QUFHRSxhQUFTLEVBQUMsYUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBTSxhQUFTLEVBQUMsV0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBTEYsQ0FERixFQVVFO0FBQ0UsUUFBSSxFQUFDLGtDQURQO0FBRUUsa0JBQVcsUUFGYjtBQUdFLGFBQVMsRUFBQyxhQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFNLGFBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FMRixDQVZGLEVBbUJFO0FBQ0UsUUFBSSxFQUFDLHVEQURQO0FBRUUsa0JBQVcsV0FGYjtBQUdFLGFBQVMsRUFBQyxhQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQW5CRixDQWJGLEVBd0NFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsaUJBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsZ0JBSkYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFHLFFBQUksRUFBQywrQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUZGLENBUEYsRUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsb0JBYkYsQ0FERixDQURGLENBeENGLENBREYsQ0FERixDQURGO0FBb0VELENBckVEOztLQUFNQyxPO0FBdUVTQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2lkZUJveC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLy9JY29uc1xuaW1wb3J0IHsgRmFUd2l0dGVyIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyBGYUdpdGh1YiB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgRmFMaW5rZWRpbiB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgVGlMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1pY29ucy90aVwiO1xuaW1wb3J0IHsgVGlNYWlsIH0gZnJvbSBcInJlYWN0LWljb25zL3RpXCI7XG5pbXBvcnQgeyBUaVBob25lIH0gZnJvbSBcInJlYWN0LWljb25zL3RpXCI7XG5pbXBvcnQgeyBGaUNhbGVuZGFyIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5cbi8vRnJhbWVyIE1vdGlvblxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmNvbnN0IHlDb250YWluZXJWYXJpYW50cyA9IHtcbiAgaW5pdGlhbDogeyBvcGFjaXR5OiAwLCB5OiAtMjAgfSxcbiAgY29tcGxldGU6IHsgb3BhY2l0eTogMSwgeTogMCB9LFxuICB0cmFuc2l0aW9uOiB7XG4gICAgZGVsYXlDaGlsZHJlbjogMC41LFxuICB9LFxufTtcbmNvbnN0IHlBeGlzVmFyaWFudHMgPSB7XG4gIGluaXRpYWw6IHsgb3BhY2l0eTogMCwgeTogLTIwIH0sXG4gIGNvbXBsZXRlOiB7IG9wYWNpdHk6IDEsIHk6IDAgfSxcbn07XG5cbmNvbnN0IFNpZGVCb3ggPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW0tb25lXCI+XG4gICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJzaWRlYm94XCI+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwic2lkZWJveC1jb250ZW50XCJcbiAgICAgICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXG4gICAgICAgICAgYW5pbWF0ZT1cImNvbXBsZXRlXCJcbiAgICAgICAgICB2YXJpYW50cz17eUF4aXNWYXJpYW50c31cbiAgICAgICAgPlxuICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cIm5hbWUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8bW90aW9uLmgxPlxuICAgICAgICAgICAgICBEaW1pdHJpXG4gICAgICAgICAgICAgIDxzdHJvbmc+IE1pY2hlbDwvc3Ryb25nPlxuICAgICAgICAgICAgPC9tb3Rpb24uaDE+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtY29udGFpbmVyXCI+U29mdHdhcmUgRGV2ZWxvcGVyPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9cIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiVHdpdHRlclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNvY2lhbC1saW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1pY29uXCI+XG4gICAgICAgICAgICAgICAgPEZhVHdpdHRlciAvPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0RpbWl0cmlNaWNoZWxcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiR2l0aHViXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic29jaWFsLWxpbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWljb25cIj5cbiAgICAgICAgICAgICAgICA8RmFHaXRodWIgLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9kaW1pdHJpLW1pY2hlbC02ODEyNzMxYjQvXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkxpbmtlZCBJblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNvY2lhbC1saW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZhTGlua2VkaW4gLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPEZpQ2FsZW5kYXIgLz4gTm92ZW1iZXIgMThcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxUaUxvY2F0aW9uIC8+IEJvc3RvbiwgTUFcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxUaU1haWwgLz5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86ZGltaXRyaS5kZXZAaWNsb3VkLmNvbVwiPlxuICAgICAgICAgICAgICAgICAgICBkaW1pdHJpLmRldkBpY2xvdWQuY29tXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8VGlQaG9uZSAvPiAoNjE3KS0zMjItNDMxNVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZUJveDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SideBox.js\n");

/***/ })

})