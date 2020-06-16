webpackHotUpdate("static/development/pages/login.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar HomeLogoTitle = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/HomeLogoTitle */ \"./components/HomeLogoTitle.js\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ../components/HomeLogoTitle */ \"./components/HomeLogoTitle.js\")];\n    },\n    modules: ['../components/HomeLogoTitle']\n  }\n});\n_c2 = HomeLogoTitle;\n\nfunction login(props) {\n  return __jsx(\"div\", {\n    style: {\n      height: \"100vh\"\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    style: {\n      display: \"flex\",\n      height: \"100vh\"\n    }\n  }, __jsx(HomeLogoTitle, null), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    style: {\n      flex: \"1\",\n\n      /* additionally, equal width */\n      padding: \"1em\"\n    }\n  }, __jsx(\"section\", {\n    className: \"section\"\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    style: {\n      justifyContent: 'center'\n    }\n  }, __jsx(\"p\", {\n    className: \"loginTitle\"\n  }, \"Login\")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"FormGroup\"], {\n    style: {\n      width: '50vh'\n    }\n  }, __jsx(\"p\", {\n    className: \"email\"\n  }, \"Email\"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    type: \"email\",\n    name: \"email\",\n    id: \"exampleEmail\",\n    placeholder: \"with a placeholder\"\n  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"FormGroup\"], {\n    style: {\n      width: '50vh'\n    }\n  }, __jsx(\"p\", {\n    className: \"password\"\n  }, \"Password\"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    type: \"password\",\n    name: \"password\",\n    id: \"examplePassword\",\n    placeholder: \"password placeholder\"\n  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, \"       \", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    className: \"loginButton\"\n  }, \"Login\")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], null), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], null)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, \" Don't have an account yet? Join Orange Pick\"))))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (login);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"HomeLogoTitle$dynamic\");\n$RefreshReg$(_c2, \"HomeLogoTitle\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcz8zYjY5Il0sIm5hbWVzIjpbIkhvbWVMb2dvVGl0bGUiLCJkeW5hbWljIiwibG9naW4iLCJwcm9wcyIsImhlaWdodCIsImRpc3BsYXkiLCJmbGV4IiwicGFkZGluZyIsImp1c3RpZnlDb250ZW50Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLElBQU1BLGFBQWEsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0saUpBQU47QUFBQSxDQUFEO0FBQUE7QUFBQTtBQUFBLGtDQUFjLGtFQUFkO0FBQUE7QUFBQSxjQUFjLDZCQUFkO0FBQUE7QUFBQSxFQUE3QjtNQUFNRCxhOztBQUVOLFNBQVNFLEtBQVQsQ0FBZUMsS0FBZixFQUFxQjtBQUNqQixTQUNJO0FBQUssU0FBSyxFQUFHO0FBQUNDLFlBQU0sRUFBQztBQUFSO0FBQWIsS0FDQSxNQUFDLDhDQUFEO0FBQUssU0FBSyxFQUFFO0FBQUNDLGFBQU8sRUFBRSxNQUFWO0FBQWlCRCxZQUFNLEVBQUM7QUFBeEI7QUFBWixLQUNJLE1BQUMsYUFBRCxPQURKLEVBSUksTUFBQyw4Q0FBRDtBQUFLLFNBQUssRUFBRTtBQUFDRSxVQUFJLEVBQUUsR0FBUDs7QUFBWTtBQUNaQyxhQUFPLEVBQUU7QUFEVDtBQUFaLEtBRWdCO0FBQVMsYUFBUyxFQUFDO0FBQW5CLEtBQ1osTUFBQywrQ0FBRCxRQUNJLE1BQUMsOENBQUQ7QUFBSyxTQUFLLEVBQUU7QUFBQ0Msb0JBQWMsRUFBQztBQUFoQjtBQUFaLEtBRVE7QUFBRyxhQUFTLEVBQUM7QUFBYixhQUZSLENBREosRUFNSSxNQUFDLDhDQUFELFFBQ0ksTUFBQyxvREFBRDtBQUFXLFNBQUssRUFBRTtBQUFDQyxXQUFLLEVBQUM7QUFBUDtBQUFsQixLQUNRO0FBQUcsYUFBUyxFQUFDO0FBQWIsYUFEUixFQUVRLE1BQUMsZ0RBQUQ7QUFBTyxRQUFJLEVBQUMsT0FBWjtBQUFvQixRQUFJLEVBQUMsT0FBekI7QUFBaUMsTUFBRSxFQUFDLGNBQXBDO0FBQW1ELGVBQVcsRUFBQztBQUEvRCxJQUZSLENBREosQ0FOSixFQWFJLE1BQUMsOENBQUQsUUFDSSxNQUFDLG9EQUFEO0FBQVcsU0FBSyxFQUFFO0FBQUNBLFdBQUssRUFBQztBQUFQO0FBQWxCLEtBQ1E7QUFBRyxhQUFTLEVBQUM7QUFBYixnQkFEUixFQUVRLE1BQUMsZ0RBQUQ7QUFBTyxRQUFJLEVBQUMsVUFBWjtBQUF1QixRQUFJLEVBQUMsVUFBNUI7QUFBdUMsTUFBRSxFQUFDLGlCQUExQztBQUE0RCxlQUFXLEVBQUM7QUFBeEUsSUFGUixDQURKLENBYkosRUFvQkksTUFBQyw4Q0FBRCxtQkFBWSxNQUFDLGlEQUFEO0FBQVEsYUFBUyxFQUFDO0FBQWxCLGFBQVosQ0FwQkosRUF3QkksTUFBQyw4Q0FBRCxRQUNJLE1BQUMsOENBQUQsT0FESixFQUdJLE1BQUMsOENBQUQsT0FISixDQXhCSixFQThCSSxNQUFDLDhDQUFELHVEQTlCSixDQURZLENBRmhCLENBSkosQ0FEQSxDQURKO0FBb0RIOztBQUljUCxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2xvZ2luLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybSxGb3JtR3JvdXAsSW5wdXQsQ29udGFpbmVyLCBSb3csIENvbCxCdXR0b24sTW9kYWwsIE1vZGFsSGVhZGVyLCBNb2RhbEJvZHksIE1vZGFsRm9vdGVyIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5jb25zdCBIb21lTG9nb1RpdGxlID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvSG9tZUxvZ29UaXRsZScpKVxuXG5mdW5jdGlvbiBsb2dpbihwcm9wcyl7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IHN0eWxlPSB7e2hlaWdodDpcIjEwMHZoXCJ9fT5cbiAgICAgICAgPFJvdyBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLGhlaWdodDpcIjEwMHZoXCJ9fT5cbiAgICAgICAgICAgIDxIb21lTG9nb1RpdGxlLz5cbiAgICAgICAgICAgIHsvKiB0aGUgc2Vjb25kIGNvbHVtbiBpcyB0aGUgcmlnaHQgaGFuZCBzaWRlICovfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8Q29sIHN0eWxlPXt7ZmxleDogXCIxXCIsIC8qIGFkZGl0aW9uYWxseSwgZXF1YWwgd2lkdGggKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMWVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3tqdXN0aWZ5Q29udGVudDonY2VudGVyJ319PiBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibG9naW5UaXRsZVwiPkxvZ2luPC9wPiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgICAgICAgICAgIDxSb3c+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cCBzdHlsZT17e3dpZHRoOic1MHZoJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlbWFpbFwiPkVtYWlsPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJleGFtcGxlRW1haWxcIiBwbGFjZWhvbGRlcj1cIndpdGggYSBwbGFjZWhvbGRlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICAgICAgICAgICAgPFJvdz4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwIHN0eWxlPXt7d2lkdGg6JzUwdmgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBpZD1cImV4YW1wbGVQYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmQgcGxhY2Vob2xkZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgICAgICAgICAgIDxSb3c+ICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibG9naW5CdXR0b25cIj5Mb2dpbjwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDxSb3c+IERvbid0IGhhdmUgYW4gYWNjb3VudCB5ZXQ/IEpvaW4gT3JhbmdlIFBpY2tcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgXG5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvZGl2PlxuICAgIClcblxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgbG9naW5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

})