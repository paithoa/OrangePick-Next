webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n // import { Modal } from 'react-responsive-modal';\n\nvar DynamicComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/Card */ \"./components/Card.js\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ../components/Card */ \"./components/Card.js\")];\n    },\n    modules: ['../components/Card']\n  }\n}); //const ModalExample = dynamic(()=>import('../components/Modal'))\n\n_c2 = DynamicComponent;\n\nfunction Index(props) {\n  _s();\n\n  var className = props.className;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      modal = _useState[0],\n      setModal = _useState[1];\n\n  var toggle = function toggle() {\n    return setModal(!modal);\n  };\n\n  return (// border bottom\n    __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n      fluid: true\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n      style: {\n        borderBottom: \"5px solid #FFF1EA\",\n        marginLeft: '5%',\n        marginRight: '5%',\n        marginTop: '2%'\n      }\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      sm: true,\n      style: {\n        fontFamily: 'Komu A',\n        fontSize: '40px',\n        fontWeight: 'bold'\n      }\n    }, \"ORANGEPICK\"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      sm: true\n    }, __jsx(\"p\", {\n      style: {\n        paddingTop: '5%',\n        textAlign: \"center\",\n        font: \"Bold 16px/19px Josefin Sans\",\n        letterSpacing: \"0px\",\n        color: \"#130D0D\",\n        opacity: \"1\"\n      }\n    }, \"Discovery\")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      sm: true\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      style: {\n        paddingTop: '3%',\n        background: \"#FE6F21\",\n        \"float\": 'right',\n        textAlign: \"center\",\n        borderRadius: \"10px\",\n        padding: \"0\",\n        border: \"none\"\n      }\n    }, __jsx(\"p\", {\n      style: {\n        textAlign: \"center\",\n        font: \"Bold 16px/19px Josefin Sans\",\n        color: \"#130D0D\",\n        opacity: \"1\",\n        marginTop: '3%',\n        paddingTop: '5%',\n        paddingLeft: '3%',\n        paddingRight: '3%'\n      }\n    }, \"Login/Sign Up\")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n      style: {\n        justifyContent: 'center',\n        alignItems: 'center',\n        fontFamily: 'Span'\n      }\n    }, __jsx(\"p\", {\n      style: {\n        fontFamily: 'Span',\n        fontSize: '34px',\n        fontWeight: 'lighter',\n        marginTop: '2%'\n      }\n    }, \" Launched on OrangePick today \")), __jsx(\"div\", {\n      onClick: toggle\n    }, __jsx(DynamicComponent, {\n      onClick: function onClick() {\n        return setOpen(true);\n      }\n    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Modal\"], {\n      isOpen: modal,\n      toggle: toggle,\n      className: className,\n      size: 'lg'\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"ModalHeader\"], {\n      toggle: toggle,\n      style: {\n        backgroundColor: \"rgb(112,112,112,0.2)\"\n      }\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], null, __jsx(\"img\", {\n      src: \"/marketlanecoffee.png\"\n    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      xs: \"auto\"\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n      style: {\n        marginLeft: '5%'\n      }\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      style: {\n        paddingRight: '10%'\n      }\n    }, __jsx(\"p\", {\n      className: \"titleDetails\"\n    }, \"Market Lane Coffee\")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], null, \"Address\")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n      style: {\n        marginLeft: '10%'\n      }\n    }, \"Lorem ipsum dolor sit amet\")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      xs: \"2\"\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n      style: {\n        background: \" #FFFFFF 0% 0% no-repeat padding-box\",\n        boxShadow: \"0px 3px 6px #00000029\",\n        borderRadius: \"10px\",\n        verticalAlign: \"top\",\n        display: \"inline-block\",\n        textAlign: \"center\",\n        opacity: \"1\",\n        marginRight: '50%',\n        paddingBottom: '10%',\n        paddingTop: '10%',\n        paddingRight: '20%',\n        paddingLeft: '10%'\n      }\n    }, __jsx(\"img\", {\n      style: {\n        display: \"block\",\n        margin: \"0 auto\"\n      },\n      src: \"/orangecolour.png\",\n      \"data-tip\": \"Add to Orange Pick\"\n    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n      style: {\n        background: \" #FFFFFF 0% 0% no-repeat padding-box\",\n        boxShadow: \"0px 3px 6px #00000029\",\n        borderRadius: \"10px\",\n        verticalAlign: \"top\",\n        display: \"inline-block\",\n        textAlign: \"center\",\n        opacity: \"1\",\n        marginRight: '50%',\n        marginTop: '10%',\n        marginBottom: '10%',\n        paddingBottom: '10%',\n        paddingTop: '10%',\n        paddingRight: '10%',\n        paddingLeft: '10%'\n      }\n    }, __jsx(\"img\", {\n      style: {\n        display: \"block\",\n        margin: \"0 auto\"\n      },\n      src: \"/boatcolour.png\"\n    }), __jsx(\"p\", {\n      style: {\n        display: \"block\",\n        margin: \"0 auto\"\n      }\n    }, \"232\"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"ModalBody\"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], null, \"Box\"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], null, \"3 Websites\")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, \"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\")))) //before container row then the card\n\n  );\n}\n\n_s(Index, \"FxRBWQPa/dKnwvdbY5qed8chvVc=\");\n\n_c3 = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"DynamicComponent$dynamic\");\n$RefreshReg$(_c2, \"DynamicComponent\");\n$RefreshReg$(_c3, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkR5bmFtaWNDb21wb25lbnQiLCJkeW5hbWljIiwiSW5kZXgiLCJwcm9wcyIsImNsYXNzTmFtZSIsInVzZVN0YXRlIiwibW9kYWwiLCJzZXRNb2RhbCIsInRvZ2dsZSIsImJvcmRlckJvdHRvbSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIm1hcmdpblRvcCIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJwYWRkaW5nVG9wIiwidGV4dEFsaWduIiwiZm9udCIsImxldHRlclNwYWNpbmciLCJjb2xvciIsIm9wYWNpdHkiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImJvcmRlciIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwic2V0T3BlbiIsImJhY2tncm91bmRDb2xvciIsImJveFNoYWRvdyIsInZlcnRpY2FsQWxpZ24iLCJkaXNwbGF5IiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpbiIsIm1hcmdpbkJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7QUFDQTtDQUVBOztBQUNBLElBQU1BLGdCQUFnQixHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSwrSEFBTjtBQUFBLENBQUQ7QUFBQTtBQUFBO0FBQUEsa0NBQWMsZ0RBQWQ7QUFBQTtBQUFBLGNBQWMsb0JBQWQ7QUFBQTtBQUFBLEVBQWhDLEMsQ0FDQTs7TUFETUQsZ0I7O0FBR04sU0FBU0UsS0FBVCxDQUFlQyxLQUFmLEVBQXFCO0FBQUE7O0FBQUEsTUFHakJDLFNBSGlCLEdBSWZELEtBSmUsQ0FHakJDLFNBSGlCOztBQUFBLGtCQU1PQyxzREFBUSxDQUFDLEtBQUQsQ0FOZjtBQUFBLE1BTVpDLEtBTlk7QUFBQSxNQU1MQyxRQU5LOztBQVFuQixNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFB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TnhIO0FBTThIRCxtQkFBVyxFQUFDO0FBTjFJO0FBQVosT0FPd0I7QUFBSyxXQUFLLEVBQUc7QUFBQ1EsZUFBTyxFQUFDLE9BQVQ7QUFBa0JFLGNBQU0sRUFBQztBQUF6QixPQUFiO0FBQWlELFNBQUcsRUFBQztBQUFyRCxNQVB4QixFQVF3QjtBQUFHLFdBQUssRUFBSTtBQUFDRixlQUFPLEVBQUMsT0FBVDtBQUFrQkUsY0FBTSxFQUFDO0FBQXpCO0FBQVosYUFSeEIsQ0FaUixDQXJCRixDQURGLENBREYsRUFvREUsTUFBQyxvREFBRCxRQUNFLE1BQUMsOENBQUQsUUFDRSxNQUFDLDhDQUFELGNBREYsRUFLRSxNQUFDLDhDQUFELHFCQUxGLENBREYsRUFVRSxNQUFDLDhDQUFELHljQVZGLENBcERGLENBeEJGLENBRkYsQ0FxR0U7O0FBckdGO0FBdUdEOztHQWhIUWxDLEs7O01BQUFBLEs7QUFpSE1BLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCAsIHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsQnV0dG9uLE1vZGFsLCBNb2RhbEhlYWRlciwgTW9kYWxCb2R5LCBNb2RhbEZvb3RlciB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuLy8gaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlLW1vZGFsJztcbmNvbnN0IER5bmFtaWNDb21wb25lbnQgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vY29tcG9uZW50cy9DYXJkJykpXG4vL2NvbnN0IE1vZGFsRXhhbXBsZSA9IGR5bmFtaWMoKCk9PmltcG9ydCgnLi4vY29tcG9uZW50cy9Nb2RhbCcpKVxuXG5mdW5jdGlvbiBJbmRleChwcm9wcyl7XG4gIGNvbnN0IHtcbiAgICBcbiAgICBjbGFzc05hbWVcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHNldE1vZGFsKCFtb2RhbCk7XG4gIHJldHVybihcbiAgICAvLyBib3JkZXIgYm90dG9tXG4gICAgPENvbnRhaW5lciBmbHVpZD5cbiAgICA8Um93IHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBcIjVweCBzb2xpZCAjRkZGMUVBXCIsbWFyZ2luTGVmdDonNSUnLG1hcmdpblJpZ2h0Oic1JScsbWFyZ2luVG9wOicyJSd9fT5cbiAgICAgIDxDb2wgc20gc3R5bGU9e3tmb250RmFtaWx5OidLb211IEEnLGZvbnRTaXplOic0MHB4Jyxmb250V2VpZ2h0Oidib2xkJ319Pk9SQU5HRVBJQ0s8L0NvbD5cbiAgICAgIDxDb2wgc20gPjxwIHN0eWxlPXt7ICBwYWRkaW5nVG9wOic1JScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IFwiQm9sZCAxNnB4LzE5cHggSm9zZWZpbiBTYW5zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogXCIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMTMwRDBEXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogXCIxXCIgfX0+RGlzY292ZXJ5PC9wPjwvQ29sPlxuICAgICAgPENvbCBzbT5cbiAgICAgICAgPEJ1dHRvbiBzdHlsZT17e3BhZGRpbmdUb3A6JzMlJyxiYWNrZ3JvdW5kOlwiI0ZFNkYyMVwiLGZsb2F0OidyaWdodCcsdGV4dEFsaWduOiBcImNlbnRlclwiLCBib3JkZXJSYWRpdXM6IFwiMTBweFwiLHBhZGRpbmc6IFwiMFwiLGJvcmRlcjogXCJub25lXCJ9fT5cbiAgICAgICAgICAgIDxwIHN0eWxlPSB7e3RleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IFwiQm9sZCAxNnB4LzE5cHggSm9zZWZpbiBTYW5zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMTMwRDBEXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBcIjFcIixtYXJnaW5Ub3A6JzMlJyxwYWRkaW5nVG9wOic1JScscGFkZGluZ0xlZnQ6JzMlJyxwYWRkaW5nUmlnaHQ6JzMlJ319PkxvZ2luL1NpZ24gVXA8L3A+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NvbD5cbiAgICA8L1Jvdz5cbiAgICA8Um93IHN0eWxlPSB7e2p1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGZvbnRGYW1pbHk6J1NwYW4nIH19ID5cbiAgICAgICAgPHAgc3R5bGUgPSB7e2ZvbnRGYW1pbHk6J1NwYW4nLGZvbnRTaXplOiczNHB4Jyxmb250V2VpZ2h0OidsaWdodGVyJyxtYXJnaW5Ub3A6JzIlJ319PiBMYXVuY2hlZCBvbiBPcmFuZ2VQaWNrIHRvZGF5IDwvcD5cbiAgICA8L1Jvdz5cbiAgICA8ZGl2IG9uQ2xpY2s9e3RvZ2dsZX0+XG4gICAgPER5bmFtaWNDb21wb25lbnQgb25DbGljaz0geygpPT4gc2V0T3Blbih0cnVlKX0+PC9EeW5hbWljQ29tcG9uZW50PlxuICAgIDwvZGl2PlxuICAgICAgPE1vZGFsIGlzT3Blbj17bW9kYWx9IHRvZ2dsZT17dG9nZ2xlfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc2l6ZT17J2xnJ30+XG4gICAgICAgIDxNb2RhbEhlYWRlciB0b2dnbGU9e3RvZ2dsZX1zdHlsZT17e2JhY2tncm91bmRDb2xvcjpcInJnYigxMTIsMTEyLDExMiwwLjIpXCJ9fSA+XG4gICAgICAgICAgPFJvdyA+XG4gICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgPGltZyBzcmMgPSBcIi9tYXJrZXRsYW5lY29mZmVlLnBuZ1wiPjwvaW1nPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxDb2wgeHM9XCJhdXRvXCI+XG4gICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3ttYXJnaW5MZWZ0Oic1JSd9fT5cbiAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OicxMCUnfX0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtcInRpdGxlRGV0YWlsc1wifT5NYXJrZXQgTGFuZSBDb2ZmZWU8L3A+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICAgIEFkZHJlc3NcbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICAgICAgPFJvdyBzdHlsZT17e21hcmdpbkxlZnQ6JzEwJSd9fT5cbiAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldFxuICAgICAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sICB4cz1cIjJcIj5cbiAgICAgICAgICAgIDxSb3cgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwiMHB4IDNweCA2cHggIzAwMDAwMDI5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBcIjFcIixtYXJnaW5SaWdodDonNTAlJyxwYWRkaW5nQm90dG9tOicxMCUnLHBhZGRpbmdUb3A6JzEwJScscGFkZGluZ1JpZ2h0OicyMCUnLHBhZGRpbmdMZWZ0OicxMCUnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGUgPXt7ZGlzcGxheTpcImJsb2NrXCIsIG1hcmdpbjpcIjAgYXV0b1wifX0gc3JjPVwiL29yYW5nZWNvbG91ci5wbmdcIiBkYXRhLXRpcD1cIkFkZCB0byBPcmFuZ2UgUGlja1wiPjwvaW1nPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwiMHB4IDNweCA2cHggIzAwMDAwMDI5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBcIjFcIixtYXJnaW5SaWdodDonNTAlJyxtYXJnaW5Ub3A6JzEwJScsbWFyZ2luQm90dG9tOicxMCUnLHBhZGRpbmdCb3R0b206JzEwJScscGFkZGluZ1RvcDonMTAlJyxwYWRkaW5nUmlnaHQ6JzEwJScscGFkZGluZ0xlZnQ6JzEwJSd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZSA9e3tkaXNwbGF5OlwiYmxvY2tcIiwgbWFyZ2luOlwiMCBhdXRvXCJ9fSBzcmM9XCIvYm9hdGNvbG91ci5wbmdcIj48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGUgPSB7e2Rpc3BsYXk6XCJibG9ja1wiLCBtYXJnaW46XCIwIGF1dG9cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIzMlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgIDwvTW9kYWxIZWFkZXI+XG4gICAgICAgIDxNb2RhbEJvZHk+XG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICBCb3hcbiAgICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgMyBXZWJzaXRlc1xuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlxuXG4gICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgICAgIHsvKiA8TW9kYWxGb290ZXI+XG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXt0b2dnbGV9PkRvIFNvbWV0aGluZzwvQnV0dG9uPnsnICd9XG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RvZ2dsZX0+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgIDwvTW9kYWxGb290ZXI+ICovfVxuICAgICAgPC9Nb2RhbD5cblxuICAgIDwvQ29udGFpbmVyPlxuICAgIC8vYmVmb3JlIGNvbnRhaW5lciByb3cgdGhlbiB0aGUgY2FyZFxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcblxuICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})