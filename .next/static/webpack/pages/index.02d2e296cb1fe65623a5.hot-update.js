webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SideBox.js":
/*!*******************************!*\
  !*** ./components/SideBox.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ti */ \"./node_modules/react-icons/ti/index.esm.js\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dimitripl/Documents/Portfolio/components/SideBox.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n //Icons\n\n\n\n\n\n\n\n //Framer Motion\n\n\nvar yContainerVariants = {\n  initial: {\n    opacity: 0,\n    y: -20\n  },\n  complete: {\n    opacity: 1,\n    y: 0,\n    transition: {\n      staggerChildren: 0.5\n    }\n  }\n};\nvar yAxisVariants = {\n  initial: {\n    opacity: 0,\n    y: -20\n  },\n  complete: {\n    opacity: 1,\n    y: 0\n  }\n};\nvar reverseYAxisVariants = {\n  initial: {\n    opacity: 0,\n    y: 20\n  },\n  complete: {\n    opacity: 1,\n    y: 0\n  }\n};\n\nvar SideBox = function SideBox() {\n  return __jsx(\"div\", {\n    className: \"grid-item-one\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n    className: \"sidebox\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n    className: \"sidebox-content\",\n    initial: \"initial\",\n    animate: \"complete\",\n    variants: yContainerVariants,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n    className: \"name-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].h1, {\n    variants: yAxisVariants,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, \"Dimitri\", __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 15\n    }\n  }, \" Michel\"))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n    variants: yAxisVariants,\n    className: \"title-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }, \"Software Developer\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n    variants: yAxisVariants,\n    className: \"social-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    href: \"https://twitter.com/\",\n    \"aria-label\": \"Twitter\",\n    className: \"social-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    className: \"font-icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 15\n    }\n  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__[\"FaTwitter\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 17\n    }\n  }))), __jsx(\"a\", {\n    href: \"https://github.com/DimitriMichel\",\n    \"aria-label\": \"Github\",\n    className: \"social-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    className: \"font-icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 15\n    }\n  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__[\"FaGithub\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 17\n    }\n  }))), __jsx(\"a\", {\n    href: \"https://www.linkedin.com/in/dimitri-michel-6812731b4/\",\n    \"aria-label\": \"Linked In\",\n    className: \"social-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__[\"FaLinkedin\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 15\n    }\n  }))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n    variants: reverseYAxisVariants,\n    className: \"details\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"info\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }\n  }, __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 15\n    }\n  }, __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 17\n    }\n  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__[\"FiCalendar\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 19\n    }\n  }), \" November 18\"), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 17\n    }\n  }, __jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_2__[\"TiLocation\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 19\n    }\n  }), \" Boston, MA\"), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 17\n    }\n  }, __jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_2__[\"TiMail\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 19\n    }\n  }), __jsx(\"a\", {\n    href: \"mailto:dimitri.dev@icloud.com\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 19\n    }\n  }, \"dimitri.dev@icloud.com\")), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 17\n    }\n  }, __jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_2__[\"TiPhone\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 19\n    }\n  }), \" (617)-322-4315\")))))));\n};\n\n_c = SideBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideBox);\n\nvar _c;\n\n$RefreshReg$(_c, \"SideBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlQm94LmpzP2M2OWQiXSwibmFtZXMiOlsieUNvbnRhaW5lclZhcmlhbnRzIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiY29tcGxldGUiLCJ0cmFuc2l0aW9uIiwic3RhZ2dlckNoaWxkcmVuIiwieUF4aXNWYXJpYW50cyIsInJldmVyc2VZQXhpc1ZhcmlhbnRzIiwiU2lkZUJveCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBLElBQU1BLGtCQUFrQixHQUFHO0FBQ3pCQyxTQUFPLEVBQUU7QUFBRUMsV0FBTyxFQUFFLENBQVg7QUFBY0MsS0FBQyxFQUFFLENBQUM7QUFBbEIsR0FEZ0I7QUFFekJDLFVBQVEsRUFBRTtBQUNSRixXQUFPLEVBQUUsQ0FERDtBQUVSQyxLQUFDLEVBQUUsQ0FGSztBQUdSRSxjQUFVLEVBQUU7QUFDVkMscUJBQWUsRUFBRTtBQURQO0FBSEo7QUFGZSxDQUEzQjtBQVVBLElBQU1DLGFBQWEsR0FBRztBQUNwQk4sU0FBTyxFQUFFO0FBQUVDLFdBQU8sRUFBRSxDQUFYO0FBQWNDLEtBQUMsRUFBRSxDQUFDO0FBQWxCLEdBRFc7QUFFcEJDLFVBQVEsRUFBRTtBQUFFRixXQUFPLEVBQUUsQ0FBWDtBQUFjQyxLQUFDLEVBQUU7QUFBakI7QUFGVSxDQUF0QjtBQUtBLElBQU1LLG9CQUFvQixHQUFHO0FBQzNCUCxTQUFPLEVBQUU7QUFBRUMsV0FBTyxFQUFFLENBQVg7QUFBY0MsS0FBQyxFQUFFO0FBQWpCLEdBRGtCO0FBRTNCQyxVQUFRLEVBQUU7QUFBRUYsV0FBTyxFQUFFLENBQVg7QUFBY0MsS0FBQyxFQUFFO0FBQWpCO0FBRmlCLENBQTdCOztBQUtBLElBQU1NLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEIsU0FDRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFB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QSxJQURGLEVBRUU7QUFBRyxRQUFJLEVBQUMsK0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFGRixDQVBGLEVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLG9CQWJGLENBREYsQ0FERixDQTFDRixDQURGLENBREYsQ0FERjtBQXNFRCxDQXZFRDs7S0FBTUMsTztBQXlFU0Esc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGVCb3guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbi8vSWNvbnNcbmltcG9ydCB7IEZhVHdpdHRlciB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgRmFHaXRodWIgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IEZhTGlua2VkaW4gfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IFRpTG9jYXRpb24gfSBmcm9tIFwicmVhY3QtaWNvbnMvdGlcIjtcbmltcG9ydCB7IFRpTWFpbCB9IGZyb20gXCJyZWFjdC1pY29ucy90aVwiO1xuaW1wb3J0IHsgVGlQaG9uZSB9IGZyb20gXCJyZWFjdC1pY29ucy90aVwiO1xuaW1wb3J0IHsgRmlDYWxlbmRhciB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuXG4vL0ZyYW1lciBNb3Rpb25cbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5jb25zdCB5Q29udGFpbmVyVmFyaWFudHMgPSB7XG4gIGluaXRpYWw6IHsgb3BhY2l0eTogMCwgeTogLTIwIH0sXG4gIGNvbXBsZXRlOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgICB5OiAwLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHN0YWdnZXJDaGlsZHJlbjogMC41LFxuICAgIH0sXG4gIH0sXG59O1xuY29uc3QgeUF4aXNWYXJpYW50cyA9IHtcbiAgaW5pdGlhbDogeyBvcGFjaXR5OiAwLCB5OiAtMjAgfSxcbiAgY29tcGxldGU6IHsgb3BhY2l0eTogMSwgeTogMCB9LFxufTtcblxuY29uc3QgcmV2ZXJzZVlBeGlzVmFyaWFudHMgPSB7XG4gIGluaXRpYWw6IHsgb3BhY2l0eTogMCwgeTogMjAgfSxcbiAgY29tcGxldGU6IHsgb3BhY2l0eTogMSwgeTogMCB9LFxufTtcblxuY29uc3QgU2lkZUJveCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbS1vbmVcIj5cbiAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cInNpZGVib3hcIj5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJzaWRlYm94LWNvbnRlbnRcIlxuICAgICAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICAgICAgICBhbmltYXRlPVwiY29tcGxldGVcIlxuICAgICAgICAgIHZhcmlhbnRzPXt5Q29udGFpbmVyVmFyaWFudHN9XG4gICAgICAgID5cbiAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJuYW1lLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPG1vdGlvbi5oMSB2YXJpYW50cz17eUF4aXNWYXJpYW50c30+XG4gICAgICAgICAgICAgIERpbWl0cmlcbiAgICAgICAgICAgICAgPHN0cm9uZz4gTWljaGVsPC9zdHJvbmc+XG4gICAgICAgICAgICA8L21vdGlvbi5oMT5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgPG1vdGlvbi5kaXYgdmFyaWFudHM9e3lBeGlzVmFyaWFudHN9IGNsYXNzTmFtZT1cInRpdGxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgU29mdHdhcmUgRGV2ZWxvcGVyXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXt5QXhpc1ZhcmlhbnRzfSBjbGFzc05hbWU9XCJzb2NpYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9cIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiVHdpdHRlclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNvY2lhbC1saW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1pY29uXCI+XG4gICAgICAgICAgICAgICAgPEZhVHdpdHRlciAvPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0RpbWl0cmlNaWNoZWxcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiR2l0aHViXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic29jaWFsLWxpbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWljb25cIj5cbiAgICAgICAgICAgICAgICA8RmFHaXRodWIgLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9kaW1pdHJpLW1pY2hlbC02ODEyNzMxYjQvXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkxpbmtlZCBJblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNvY2lhbC1saW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZhTGlua2VkaW4gLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgPG1vdGlvbi5kaXYgdmFyaWFudHM9e3JldmVyc2VZQXhpc1ZhcmlhbnRzfSBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxGaUNhbGVuZGFyIC8+IE5vdmVtYmVyIDE4XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8VGlMb2NhdGlvbiAvPiBCb3N0b24sIE1BXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8VGlNYWlsIC8+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmRpbWl0cmkuZGV2QGljbG91ZC5jb21cIj5cbiAgICAgICAgICAgICAgICAgICAgZGltaXRyaS5kZXZAaWNsb3VkLmNvbVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPFRpUGhvbmUgLz4gKDYxNyktMzIyLTQzMTVcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlQm94O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SideBox.js\n");

/***/ })

})