module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/login.js": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst HomeLogoTitle = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/HomeLogoTitle */ \"./components/HomeLogoTitle.js\")), {\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../components/HomeLogoTitle */ \"./components/HomeLogoTitle.js\")],\n    modules: ['../components/HomeLogoTitle']\n  }\n});\n\nfunction login(props) {\n  return __jsx(\"div\", {\n    style: {\n      height: \"100vh\"\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    style: {\n      display: \"flex\",\n      height: \"100vh\"\n    }\n  }, __jsx(HomeLogoTitle, null), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    style: {\n      flex: \"1\",\n\n      /* additionally, equal width */\n      padding: \"1em\"\n    }\n  }, __jsx(\"section\", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    style: {\n      justifyContent: 'center'\n    }\n  }, __jsx(\"p\", {\n    className: \"loginTitle\"\n  }, \"Login\")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"FormGroup\"], {\n    style: {\n      width: '50vh'\n    }\n  }, __jsx(\"p\", {\n    className: \"email\"\n  }, \"Email\"), __jsx(\"input\", {\n    type: \"email\",\n    name: \"email\",\n    id: \"exampleEmail\",\n    placeholder: \"with a placeholder\"\n  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"FormGroup\"], {\n    style: {\n      width: '50vh'\n    }\n  }, __jsx(\"p\", {\n    className: \"password\"\n  }, \"Password\"), __jsx(\"input\", {\n    type: \"password\",\n    name: \"password\",\n    id: \"examplePassword\",\n    placeholder: \"password placeholder\"\n  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    style: {\n      justifyContent: 'center'\n    }\n  }, \"       \", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    className: \"loginButton\"\n  }, \"Login\")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], null), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], null)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    style: {\n      marginTop: '5%'\n    }\n  }, \" Don't have an account yet? Join Orange Pick\"))))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (login);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcz8zYjY5Il0sIm5hbWVzIjpbIkhvbWVMb2dvVGl0bGUiLCJkeW5hbWljIiwibG9naW4iLCJwcm9wcyIsImhlaWdodCIsImRpc3BsYXkiLCJmbGV4IiwicGFkZGluZyIsImp1c3RpZnlDb250ZW50Iiwid2lkdGgiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxNQUFNQSxhQUFhLEdBQUdDLG1EQUFPLENBQUMsTUFBTSxpSkFBUDtBQUFBO0FBQUEsd0NBQWMsa0VBQWQ7QUFBQSxjQUFjLDZCQUFkO0FBQUE7QUFBQSxFQUE3Qjs7QUFFQSxTQUFTQyxLQUFULENBQWVDLEtBQWYsRUFBcUI7QUFDakIsU0FDSTtBQUFLLFNBQUssRUFBRztBQUFDQyxZQUFNLEVBQUM7QUFBUjtBQUFiLEtBQ0EsTUFBQyw4Q0FBRDtBQUFLLFNBQUssRUFBRTtBQUFDQyxhQUFPLEVBQUUsTUFBVjtBQUFpQkQsWUFBTSxFQUFDO0FBQXhCO0FBQVosS0FDSSxNQUFDLGFBQUQsT0FESixFQUlJLE1BQUMsOENBQUQ7QUFBSyxTQUFLLEVBQUU7QUFBQ0UsVUFBSSxFQUFFLEdBQVA7O0FBQVk7QUFDWkMsYUFBTyxFQUFFO0FBRFQ7QUFBWixLQUVnQix1QkFDWixNQUFDLCtDQUFELFFBQ0ksTUFBQyw4Q0FBRDtBQUFLLFNBQUssRUFBRTtBQUFDQyxvQkFBYyxFQUFDO0FBQWhCO0FBQVosS0FFUTtBQUFHLGFBQVMsRUFBQztBQUFiLGFBRlIsQ0FESixFQU1JLE1BQUMsOENBQUQsUUFDSSxNQUFDLG9EQUFEO0FBQVcsU0FBSyxFQUFFO0FBQUNDLFdBQUssRUFBQztBQUFQO0FBQWxCLEtBQ1E7QUFBRyxhQUFTLEVBQUM7QUFBYixhQURSLEVBRVE7QUFBTyxRQUFJLEVBQUMsT0FBWjtBQUFvQixRQUFJLEVBQUMsT0FBekI7QUFBaUMsTUFBRSxFQUFDLGNBQXBDO0FBQW1ELGVBQVcsRUFBQztBQUEvRCxJQUZSLENBREosQ0FOSixFQWFJLE1BQUMsOENBQUQsUUFDSSxNQUFDLG9EQUFEO0FBQVcsU0FBSyxFQUFFO0FBQUNBLFdBQUssRUFBQztBQUFQO0FBQWxCLEtBQ1E7QUFBRyxhQUFTLEVBQUM7QUFBYixnQkFEUixFQUVRO0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFBdUIsUUFBSSxFQUFDLFVBQTVCO0FBQXVDLE1BQUUsRUFBQyxpQkFBMUM7QUFBNEQsZUFBVyxFQUFDO0FBQXhFLElBRlIsQ0FESixDQWJKLEVBb0JJLE1BQUMsOENBQUQ7QUFBSyxTQUFLLEVBQUU7QUFBQ0Qsb0JBQWMsRUFBQztBQUFoQjtBQUFaLGdCQUE4QyxNQUFDLGlEQUFEO0FBQVEsYUFBUyxFQUFDO0FBQWxCLGFBQTlDLENBcEJKLEVBd0JJLE1BQUMsOENBQUQsUUFDSSxNQUFDLDhDQUFELE9BREosRUFHSSxNQUFDLDhDQUFELE9BSEosQ0F4QkosRUE4QkksTUFBQyw4Q0FBRDtBQUFLLFNBQUssRUFBRTtBQUFDRSxlQUFTLEVBQUM7QUFBWDtBQUFaLG9EQTlCSixDQURZLENBRmhCLENBSkosQ0FEQSxDQURKO0FBb0RIOztBQUljUixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2xvZ2luLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybSxGb3JtR3JvdXAsSW5wdXQsQ29udGFpbmVyLCBSb3csIENvbCxCdXR0b24sTW9kYWwsIE1vZGFsSGVhZGVyLCBNb2RhbEJvZHksIE1vZGFsRm9vdGVyIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5jb25zdCBIb21lTG9nb1RpdGxlID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvSG9tZUxvZ29UaXRsZScpKVxuXG5mdW5jdGlvbiBsb2dpbihwcm9wcyl7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IHN0eWxlPSB7e2hlaWdodDpcIjEwMHZoXCJ9fT5cbiAgICAgICAgPFJvdyBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLGhlaWdodDpcIjEwMHZoXCJ9fT5cbiAgICAgICAgICAgIDxIb21lTG9nb1RpdGxlLz5cbiAgICAgICAgICAgIHsvKiB0aGUgc2Vjb25kIGNvbHVtbiBpcyB0aGUgcmlnaHQgaGFuZCBzaWRlICovfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8Q29sIHN0eWxlPXt7ZmxleDogXCIxXCIsIC8qIGFkZGl0aW9uYWxseSwgZXF1YWwgd2lkdGggKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMWVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiA+XG4gICAgICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3tqdXN0aWZ5Q29udGVudDonY2VudGVyJ319PiBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibG9naW5UaXRsZVwiPkxvZ2luPC9wPiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgICAgICAgICAgIDxSb3c+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cCBzdHlsZT17e3dpZHRoOic1MHZoJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlbWFpbFwiPkVtYWlsPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJleGFtcGxlRW1haWxcIiBwbGFjZWhvbGRlcj1cIndpdGggYSBwbGFjZWhvbGRlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICAgICAgICAgICAgPFJvdz4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwIHN0eWxlPXt7d2lkdGg6JzUwdmgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBpZD1cImV4YW1wbGVQYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmQgcGxhY2Vob2xkZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3tqdXN0aWZ5Q29udGVudDonY2VudGVyJ319PiAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImxvZ2luQnV0dG9uXCI+TG9naW48L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICA8Um93IHN0eWxlPXt7bWFyZ2luVG9wOic1JSd9fT4gRG9uJ3QgaGF2ZSBhbiBhY2NvdW50IHlldD8gSm9pbiBPcmFuZ2UgUGlja1xuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICBcblxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBsb2dpblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/login.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/handy/Documents/OrangePick-Node/Dashboard/pages/login.js */"./pages/login.js");


/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dynamic\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIj82ZDNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvZHluYW1pYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/dynamic\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reactstrap\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCI/MjQ5MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdHN0cmFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///reactstrap\n");

/***/ })

/******/ });