webpackHotUpdate("static/development/pages/login.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar HomeLogoTitle = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/HomeLogoTitle */ \"./components/HomeLogoTitle.js\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ../components/HomeLogoTitle */ \"./components/HomeLogoTitle.js\")];\n    },\n    modules: ['../components/HomeLogoTitle']\n  }\n});\n_c2 = HomeLogoTitle;\n\nfunction login(props) {\n  return __jsx(\"div\", {\n    style: {\n      height: \"100vh\"\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    style: {\n      display: \"flex\",\n      height: \"100vh\"\n    }\n  }, __jsx(HomeLogoTitle, null), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    style: {\n      flex: \"1\",\n\n      /* additionally, equal width */\n      padding: \"1em\"\n    }\n  }, __jsx(\"section\", {\n    className: \"section\"\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, __jsx(\"p\", {\n    className: \"loginTitle\"\n  }, \"Login\")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"FormGroup\"], null, __jsx(\"p\", {\n    className: \"email\"\n  }, \"Email\"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    type: \"email\",\n    name: \"email\",\n    id: \"exampleEmail\",\n    placeholder: \"with a placeholder\"\n  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"FormGroup\"], null, __jsx(\"p\", {\n    className: \"password\"\n  }, \"Password\"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    type: \"password\",\n    name: \"password\",\n    id: \"examplePassword\",\n    placeholder: \"password placeholder\"\n  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, \"       \", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    className: \"loginButton\"\n  }, \"Login\")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], null), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], null)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, \" Don't have an account yet? Join Orange Pick\"))))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (login);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"HomeLogoTitle$dynamic\");\n$RefreshReg$(_c2, \"HomeLogoTitle\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcz8zYjY5Il0sIm5hbWVzIjpbIkhvbWVMb2dvVGl0bGUiLCJkeW5hbWljIiwibG9naW4iLCJwcm9wcyIsImhlaWdodCIsImRpc3BsYXkiLCJmbGV4IiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBTUEsYUFBYSxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSxpSkFBTjtBQUFBLENBQUQ7QUFBQTtBQUFBO0FBQUEsa0NBQWMsa0VBQWQ7QUFBQTtBQUFBLGNBQWMsNkJBQWQ7QUFBQTtBQUFBLEVBQTdCO01BQU1ELGE7O0FBRU4sU0FBU0UsS0FBVCxDQUFlQyxLQUFmLEVBQXFCO0FBQ2pCLFNBQ0k7QUFBSyxTQUFLLEVBQUc7QUFBQ0MsWUFBTSxFQUFDO0FBQVI7QUFBYixLQUNBLE1BQUMsOENBQUQ7QUFBSyxTQUFLLEVBQUU7QUFBQ0MsYUFBTyxFQUFFLE1BQVY7QUFBaUJELFlBQU0sRUFBQztBQUF4QjtBQUFaLEtBQ0ksTUFBQyxhQUFELE9BREosRUFJSSxNQUFDLDhDQUFEO0FBQUssU0FBSyxFQUFFO0FBQUNFLFVBQUksRUFBRSxHQUFQOztBQUFZO0FBQ1pDLGFBQU8sRUFBRTtBQURUO0FBQVosS0FFZ0I7QUFBUyxhQUFTLEVBQUM7QUFBbkIsS0FDWixNQUFDLCtDQUFELFFBQ0ksTUFBQyw4Q0FBRCxRQUVRO0FBQUcsYUFBUyxFQUFDO0FBQWIsYUFGUixDQURKLEVBTUksTUFBQyw4Q0FBRCxRQUNJLE1BQUMsb0RBQUQsUUFDUTtBQUFHLGFBQVMsRUFBQztBQUFiLGFBRFIsRUFFUSxNQUFDLGdEQUFEO0FBQU8sUUFBSSxFQUFDLE9BQVo7QUFBb0IsUUFBSSxFQUFDLE9BQXpCO0FBQWlDLE1BQUUsRUFBQyxjQUFwQztBQUFtRCxlQUFXLEVBQUM7QUFBL0QsSUFGUixDQURKLENBTkosRUFhSSxNQUFDLDhDQUFELFFBQ0ksTUFBQyxvREFBRCxRQUNRO0FBQUcsYUFBUyxFQUFDO0FBQWIsZ0JBRFIsRUFFUSxNQUFDLGdEQUFEO0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFBdUIsUUFBSSxFQUFDLFVBQTVCO0FBQXVDLE1BQUUsRUFBQyxpQkFBMUM7QUFBNEQsZUFBVyxFQUFDO0FBQXhFLElBRlIsQ0FESixDQWJKLEVBb0JJLE1BQUMsOENBQUQsbUJBQVksTUFBQyxpREFBRDtBQUFRLGFBQVMsRUFBQztBQUFsQixhQUFaLENBcEJKLEVBd0JJLE1BQUMsOENBQUQsUUFDSSxNQUFDLDhDQUFELE9BREosRUFHSSxNQUFDLDhDQUFELE9BSEosQ0F4QkosRUE4QkksTUFBQyw4Q0FBRCx1REE5QkosQ0FEWSxDQUZoQixDQUpKLENBREEsQ0FESjtBQW9ESDs7QUFJY0wsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm0sRm9ybUdyb3VwLElucHV0LENvbnRhaW5lciwgUm93LCBDb2wsQnV0dG9uLE1vZGFsLCBNb2RhbEhlYWRlciwgTW9kYWxCb2R5LCBNb2RhbEZvb3RlciB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuY29uc3QgSG9tZUxvZ29UaXRsZSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9jb21wb25lbnRzL0hvbWVMb2dvVGl0bGUnKSlcblxuZnVuY3Rpb24gbG9naW4ocHJvcHMpe1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBzdHlsZT0ge3toZWlnaHQ6XCIxMDB2aFwifX0+XG4gICAgICAgIDxSb3cgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIixoZWlnaHQ6XCIxMDB2aFwifX0+XG4gICAgICAgICAgICA8SG9tZUxvZ29UaXRsZS8+XG4gICAgICAgICAgICB7LyogdGhlIHNlY29uZCBjb2x1bW4gaXMgdGhlIHJpZ2h0IGhhbmQgc2lkZSAqL31cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPENvbCBzdHlsZT17e2ZsZXg6IFwiMVwiLCAvKiBhZGRpdGlvbmFsbHksIGVxdWFsIHdpZHRoICovXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjFlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgICAgICAgICA8Um93PiBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibG9naW5UaXRsZVwiPkxvZ2luPC9wPiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgICAgICAgICAgIDxSb3c+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZW1haWxcIj5FbWFpbDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZXhhbXBsZUVtYWlsXCIgcGxhY2Vob2xkZXI9XCJ3aXRoIGEgcGxhY2Vob2xkZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgICAgICAgICAgIDxSb3c+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIGlkPVwiZXhhbXBsZVBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJwYXNzd29yZCBwbGFjZWhvbGRlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICAgICAgICAgICAgPFJvdz4gICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJsb2dpbkJ1dHRvblwiPkxvZ2luPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdz4gRG9uJ3QgaGF2ZSBhbiBhY2NvdW50IHlldD8gSm9pbiBPcmFuZ2UgUGlja1xuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICBcblxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBsb2dpblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

})