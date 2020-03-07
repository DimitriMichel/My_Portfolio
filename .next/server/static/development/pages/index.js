module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/MainBox.js":
/*!*******************************!*\
  !*** ./components/MainBox.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_static_images_tide_mobile_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/static/images/tide-mobile.png */ "./public/static/images/tide-mobile.png");
/* harmony import */ var _public_static_images_tide_mobile_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_tide_mobile_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_images_react_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/static/images/react.png */ "./public/static/images/react.png");
/* harmony import */ var _public_static_images_react_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_react_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_static_images_redux_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/static/images/redux.png */ "./public/static/images/redux.png");
/* harmony import */ var _public_static_images_redux_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_redux_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_static_images_node_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/static/images/node-icon.png */ "./public/static/images/node-icon.png");
/* harmony import */ var _public_static_images_node_icon_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_node_icon_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_static_images_firebase_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/static/images/firebase.png */ "./public/static/images/firebase.png");
/* harmony import */ var _public_static_images_firebase_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_firebase_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_static_images_pluto_mobile_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/static/images/pluto-mobile.png */ "./public/static/images/pluto-mobile.png");
/* harmony import */ var _public_static_images_pluto_mobile_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_pluto_mobile_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_static_videos_bakery_mp4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/static/videos/bakery.mp4 */ "./public/static/videos/bakery.mp4");
/* harmony import */ var _public_static_videos_bakery_mp4__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_static_videos_bakery_mp4__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_static_images_bakery_mobile_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/static/images/bakery-mobile.png */ "./public/static/images/bakery-mobile.png");
/* harmony import */ var _public_static_images_bakery_mobile_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_bakery_mobile_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_static_images_antd_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/static/images/antd.png */ "./public/static/images/antd.png");
/* harmony import */ var _public_static_images_antd_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_antd_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_static_images_next_js_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/static/images/next-js.png */ "./public/static/images/next-js.png");
/* harmony import */ var _public_static_images_next_js_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_next_js_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_static_videos_tide_mp4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/static/videos/tide.mp4 */ "./public/static/videos/tide.mp4");
/* harmony import */ var _public_static_videos_tide_mp4__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_static_videos_tide_mp4__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_static_videos_pluto_mp4__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/static/videos/pluto.mp4 */ "./public/static/videos/pluto.mp4");
/* harmony import */ var _public_static_videos_pluto_mp4__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_static_videos_pluto_mp4__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_Animations_animConfig__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/Animations/animConfig */ "./utils/Animations/animConfig.js");
var _jsxFileName = "/Users/dimitripl/Documents/Portfolio/components/MainBox.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //Image/Video & Icon Imports












 //Framer Motion




const MainBox = () => {
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_13__["AnimatePresence"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("div", {
    className: "grid-item-two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("div", {
    className: "mainbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("div", {
    className: "mainbox-content-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("div", {
    className: "about-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_13__["motion"].div, {
    initial: "exit",
    animate: "enter",
    exit: "exit",
    className: "about-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_13__["motion"].p, {
    variants: _utils_Animations_animConfig__WEBPACK_IMPORTED_MODULE_14__["yAxisVariants"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "Hello, my name is Dimitri Michel and I'm a passionate Software Developer.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }), "I believe ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "anything"), " can be overcome through commitment and hard work and I'm always up for learning new things."))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_13__["motion"].div, {
    initial: "exit",
    animate: "enter",
    exit: "exit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_13__["motion"].h1, {
    variants: _utils_Animations_animConfig__WEBPACK_IMPORTED_MODULE_14__["xAxisVariants"],
    className: "projects-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Projects")), __jsx("div", {
    className: "projects-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx("div", {
    className: "project-one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("div", {
    className: "project-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("h3", {
    className: "project-details-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "Tide"), __jsx("p", {
    className: "project-details-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Tide is a mini social network. It first began with an", " ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "API "), "built with ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "NodeJS"), " connecting to a scalable", " ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "Google Firebase"), " database.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }), "On the front end ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "React"), " and ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "Redux"), " was used to to maintain global and local state changes.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  })), __jsx("div", {
    className: "project-buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("a", {
    className: "button",
    role: "button",
    href: "https://tide.dimitrimichel.com/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx("button", {
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, "Launch")), __jsx("a", {
    className: "button",
    role: "button",
    href: "https://github.com/DimitriMichel/Tide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("button", {
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, "Github")))), __jsx("div", {
    className: "project-card-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, __jsx("div", {
    className: "icons-card-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx("div", {
    className: "icons-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx("div", {
    className: "icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx("div", {
    className: "build-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx("div", {
    className: "list-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx("img", {
    src: _public_static_images_react_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  })), __jsx("div", {
    className: "list-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, __jsx("img", {
    src: _public_static_images_redux_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  })), __jsx("div", {
    className: "list-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx("img", {
    src: _public_static_images_node_icon_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  })), __jsx("div", {
    className: "list-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, __jsx("img", {
    src: _public_static_images_firebase_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }))))), __jsx("div", {
    className: "project-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, __jsx("video", {
    autoPlay: "autoplay",
    loop: "loop",
    height: "auto",
    width: "100%",
    muted: "muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx("source", {
    src: _public_static_videos_tide_mp4__WEBPACK_IMPORTED_MODULE_11___default.a,
    type: "video/mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }))), __jsx("div", {
    className: "project-card-mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, __jsx("img", {
    src: _public_static_images_tide_mobile_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "Mobile image of a Social Media Project Called Tide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }))))), __jsx("div", {
    className: "project-one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, __jsx("div", {
    className: "project-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, __jsx("h3", {
    className: "project-details-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, "Pluto"), __jsx("p", {
    className: "project-details-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, "Pluto is statistical application completely built in", " ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, "React"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }), "Pluto returns the financial data of all 530+ members of the United States congress, including each individuals members vote attendance, Top 10 Donors, as well as their top investments and industrial donors.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  })), __jsx("div", {
    className: "project-buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, __jsx("a", {
    className: "button",
    role: "button",
    href: "https://pluto.dimitrimichel.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }, __jsx("button", {
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, "Launch")), __jsx("a", {
    className: "button",
    role: "button",
    href: "https://github.com/DimitriMichel/Pluto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, __jsx("button", {
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, "Github")))), __jsx("div", {
    className: "project-card-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }, __jsx("div", {
    className: "icons-card-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, __jsx("div", {
    className: "icons-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, __jsx("div", {
    className: "icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }, __jsx("div", {
    className: "build-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }, __jsx("div", {
    className: "list-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }, __jsx("img", {
    src: _public_static_images_react_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: undefined
  })), __jsx("div", {
    className: "list-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }, __jsx("img", {
    src: _public_static_images_antd_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  }))))), __jsx("div", {
    className: "project-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }, __jsx("video", {
    autoPlay: "autoplay",
    loop: "loop",
    height: "auto",
    width: "100%",
    muted: "muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }, __jsx("source", {
    src: _public_static_videos_pluto_mp4__WEBPACK_IMPORTED_MODULE_12___default.a,
    type: "video/mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }))), __jsx("div", {
    className: "project-card-mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  }, __jsx("img", {
    src: _public_static_images_pluto_mobile_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "Mobile image of a Social Media Project Called Tide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: undefined
  }))))), __jsx("div", {
    className: "project-one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: undefined
  }, __jsx("div", {
    className: "project-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  }, __jsx("h3", {
    className: "project-details-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: undefined
  }, "Heavenly Bakery"), __jsx("p", {
    className: "project-details-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, "Heavenly bakery is a static site built with ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: undefined
  }, "NextJS"), " ", "and deployed to Zeit.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: undefined
  }), "Heavenly bakery is Server Rendered and leverages the speed and simplicity of static sites to delivery a fluid experience.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: undefined
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: undefined
  })), __jsx("div", {
    className: "project-buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: undefined
  }, __jsx("a", {
    className: "button",
    role: "button",
    href: "https://bakery.dimitrimichel.com/ ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: undefined
  }, __jsx("button", {
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: undefined
  }, "Launch")), __jsx("a", {
    className: "button",
    role: "button",
    href: "https:///github.com/DimitriMichel/Bakery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: undefined
  }, __jsx("button", {
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: undefined
  }, "Github")))), __jsx("div", {
    className: "project-card-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: undefined
  }, __jsx("div", {
    className: "icons-card-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: undefined
  }, __jsx("div", {
    className: "icons-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: undefined
  }, __jsx("div", {
    className: "icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: undefined
  }, __jsx("div", {
    className: "build-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: undefined
  }, __jsx("div", {
    className: "list-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: undefined
  }, __jsx("img", {
    src: _public_static_images_react_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: undefined
  })), __jsx("div", {
    className: "list-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: undefined
  }, __jsx("img", {
    src: _public_static_images_next_js_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: undefined
  }))))), __jsx("div", {
    className: "project-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: undefined
  }, __jsx("video", {
    autoPlay: "autoplay",
    loop: "loop",
    height: "auto",
    width: "100%",
    muted: "muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: undefined
  }, __jsx("source", {
    src: _public_static_videos_bakery_mp4__WEBPACK_IMPORTED_MODULE_7___default.a,
    type: "video/mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: undefined
  }))), __jsx("div", {
    className: "project-card-mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: undefined
  }, __jsx("img", {
    src: _public_static_images_bakery_mobile_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "Mobile image of a Social Media Project Called Tide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: undefined
  }))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (MainBox);

/***/ }),

/***/ "./components/SideBox.js":
/*!*******************************!*\
  !*** ./components/SideBox.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ti */ "react-icons/ti");
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ti__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_Animations_animConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/Animations/animConfig */ "./utils/Animations/animConfig.js");
var _jsxFileName = "/Users/dimitripl/Documents/Portfolio/components/SideBox.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //Icons








 //Framer Motion




const SideBox = () => {
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["AnimatePresence"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("div", {
    className: "grid-item-one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
    initial: "exit",
    animate: "enter",
    exit: "exit",
    className: "sidebox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
    variants: _utils_Animations_animConfig__WEBPACK_IMPORTED_MODULE_6__["yAxisVariants"],
    className: "name-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Dimitri", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, " Michel"))), __jsx("div", {
    className: "title-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "Software Developer"), __jsx("div", {
    className: "social-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://facebook.com",
    className: "social-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("span", {
    className: "font-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaTwitter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }))), __jsx("a", {
    href: "https://facebook.com",
    className: "social-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("span", {
    className: "font-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaGithub"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }))), __jsx("a", {
    href: "https://facebook.com",
    className: "social-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaLinkedin"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }))), __jsx("div", {
    className: "details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("div", {
    className: "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiCalendar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }), " November 18"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_2__["TiLocation"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }), " Boston, MA"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_2__["TiMail"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }), " ", __jsx("a", {
    href: "mailto:dimitri.dev@icloud.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, "dimitri.dev@icloud.com")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx(react_icons_ti__WEBPACK_IMPORTED_MODULE_2__["TiPhone"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }), " (617)-322-4315"))), __jsx("div", {
    className: "download-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx("div", {
    className: "download-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__["AiOutlineCloudDownload"], {
    size: 25,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  })), __jsx("span", {
    className: "download-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, " Download Resume")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SideBox);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SideBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SideBox */ "./components/SideBox.js");
/* harmony import */ var _components_MainBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MainBox */ "./components/MainBox.js");
var _jsxFileName = "/Users/dimitripl/Documents/Portfolio/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const HomePage = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "site-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "box-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(_components_SideBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx(_components_MainBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./public/static/images/antd.png":
/*!***************************************!*\
  !*** ./public/static/images/antd.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABiCAYAAACrpQYOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjI5MzIyN0U1ODRCMTFFQThGREFDNjE0M0IzMjZGMTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjI5MzIyN0Q1ODRCMTFFQThGREFDNjE0M0IzMjZGMTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDBBNTJBRjk1NjcxMTFFQTg2NkNDMTcyQzdDNTlCRTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDBBNTJBRkE1NjcxMTFFQTg2NkNDMTcyQzdDNTlCRTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Kt9zpAAAS7ElEQVR42uyde5Ac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"

/***/ }),

/***/ "./public/static/images/bakery-mobile.png":
/*!************************************************!*\
  !*** ./public/static/images/bakery-mobile.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bakery-mobile-36a79cd3c3e5717d363cefc9747526a0.png";

/***/ }),

/***/ "./public/static/images/firebase.png":
/*!*******************************************!*\
  !*** ./public/static/images/firebase.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAACKCAYAAABRsp/hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUZEQ0UyMTY1ODY1MTFFQThGREFDNjE0M0IzMjZGMTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUZEQ0UyMTU1ODY1MTFFQThGREFDNjE0M0IzMjZGMTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzY4ODg2RTI1NUUxMTFFQUE0QzQ5N0RGQ0RDMzJFMjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzY4ODg2RTM1NUUxMTFFQUE0QzQ5N0RGQ0RDMzJFMjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6YPme0AAAT6klEQVR42uydCXRT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"

/***/ }),

/***/ "./public/static/images/next-js.png":
/*!******************************************!*\
  !*** ./public/static/images/next-js.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABdCAYAAABeibN2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUZEQ0UyMUE1ODY1MTFFQThGREFDNjE0M0IzMjZGMTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUZEQ0UyMTk1ODY1MTFFQThGREFDNjE0M0IzMjZGMTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUUyMzFFNzk1NkMxMTFFQUFFMENEOURBMTBEQ0Y5NDQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUUyMzFFN0E1NkMxMTFFQUFFMENEOURBMTBEQ0Y5NDQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz79TZKkAAAIAklEQVR42uxdCWwV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"

/***/ }),

/***/ "./public/static/images/node-icon.png":
/*!********************************************!*\
  !*** ./public/static/images/node-icon.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABwCAYAAADlu6WeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODEzODEyREI1ODY1MTFFQThGREFDNjE0M0IzMjZGMTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODEzODEyREE1ODY1MTFFQThGREFDNjE0M0IzMjZGMTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzY4ODg2REU1NUUxMTFFQUE0QzQ5N0RGQ0RDMzJFMjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzY4ODg2REY1NUUxMTFFQUE0QzQ5N0RGQ0RDMzJFMjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7hgQn/AAAYc0lEQVR42uxdB3yV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"

/***/ }),

/***/ "./public/static/images/pluto-mobile.png":
/*!***********************************************!*\
  !*** ./public/static/images/pluto-mobile.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/pluto-mobile-12947e5111037437ca3e4e4ef6ff1a27.png";

/***/ }),

/***/ "./public/static/images/react.png":
/*!****************************************!*\
  !*** ./public/static/images/react.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABVCAYAAACy2jEbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODEzODEyRTM1ODY1MTFFQThGREFDNjE0M0IzMjZGMTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODEzODEyRTI1ODY1MTFFQThGREFDNjE0M0IzMjZGMTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTZBMTI5Nzk1NURCMTFFQUE0QzQ5N0RGQ0RDMzJFMjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTZBMTI5N0E1NURCMTFFQUE0QzQ5N0RGQ0RDMzJFMjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz50nZOYAAARHklEQVR42tRdCZQV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"

/***/ }),

/***/ "./public/static/images/redux.png":
/*!****************************************!*\
  !*** ./public/static/images/redux.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABZCAYAAADFGPFgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODEzODEyREY1ODY1MTFFQThGREFDNjE0M0IzMjZGMTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODEzODEyREU1ODY1MTFFQThGREFDNjE0M0IzMjZGMTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTZBMTI5N0Q1NURCMTFFQUE0QzQ5N0RGQ0RDMzJFMjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTZBMTI5N0U1NURCMTFFQUE0QzQ5N0RGQ0RDMzJFMjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6MNIQbAAANMUlEQVR42uxdCbRV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"

/***/ }),

/***/ "./public/static/images/tide-mobile.png":
/*!**********************************************!*\
  !*** ./public/static/images/tide-mobile.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/tide-mobile-9a082cf275b16c5ff4ad0d605e5e0960.png";

/***/ }),

/***/ "./public/static/videos/bakery.mp4":
/*!*****************************************!*\
  !*** ./public/static/videos/bakery.mp4 ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/videos/bakery-c0efa2210e33e20902f906ee99c66031.mp4";

/***/ }),

/***/ "./public/static/videos/pluto.mp4":
/*!****************************************!*\
  !*** ./public/static/videos/pluto.mp4 ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/videos/pluto-a3f8a0a46fc205722941d1dd04793a54.mp4";

/***/ }),

/***/ "./public/static/videos/tide.mp4":
/*!***************************************!*\
  !*** ./public/static/videos/tide.mp4 ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/videos/tide-35923b77d25970a23105d17458ad26ac.mp4";

/***/ }),

/***/ "./utils/Animations/animConfig.js":
/*!****************************************!*\
  !*** ./utils/Animations/animConfig.js ***!
  \****************************************/
/*! exports provided: yAxisVariants, yAxisVariantsSlow, yAxisVariantsSlower, yAxisVariantsSlowest, xAxisVariants, xAxisVariantsSlow, xAxisVariantsSlowFromRight, xAxisVariantsSlower */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yAxisVariants", function() { return yAxisVariants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yAxisVariantsSlow", function() { return yAxisVariantsSlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yAxisVariantsSlower", function() { return yAxisVariantsSlower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yAxisVariantsSlowest", function() { return yAxisVariantsSlowest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xAxisVariants", function() { return xAxisVariants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xAxisVariantsSlow", function() { return xAxisVariantsSlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xAxisVariantsSlowFromRight", function() { return xAxisVariantsSlowFromRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xAxisVariantsSlower", function() { return xAxisVariantsSlower; });
//animation configs & variants

/*EASING CONFIG*/
const easing = [0.175, 0.85, 0.42, 0.96];
/*EASING ANIMATION DIRECTION*/

const yAxisVariants = {
  exit: {
    y: 40,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: easing
    }
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};
const yAxisVariantsSlow = {
  exit: {
    y: 150,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: easing
    }
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: easing
    }
  }
};
const yAxisVariantsSlower = {
  exit: {
    y: 150,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing
    }
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: easing
    }
  }
};
const yAxisVariantsSlowest = {
  exit: {
    y: 150,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing
    }
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 3.2,
      ease: easing
    }
  }
};
const xAxisVariants = {
  exit: {
    x: -50,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing
    }
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};
const xAxisVariantsSlow = {
  exit: {
    x: -250,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing
    }
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: easing
    }
  }
};
const xAxisVariantsSlowFromRight = {
  exit: {
    x: 250,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing
    }
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: easing
    }
  }
};
const xAxisVariantsSlower = {
  exit: {
    x: 150,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing
    }
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: easing
    }
  }
}; //Activate animation when div enters viewport

/*   IN VIEW SKELETON */

/*
            <InView triggerOnce={true}>
              {({ inView, ref }) => (
                  <div ref={ref}>
                    <div>
                      {inView ? ():()}</div></div>)}</InView>
* */

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dimitripl/Documents/Portfolio/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "react-icons/ti":
/*!*********************************!*\
  !*** external "react-icons/ti" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ti");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map