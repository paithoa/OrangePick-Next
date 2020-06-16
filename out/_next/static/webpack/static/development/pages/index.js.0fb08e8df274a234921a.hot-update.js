webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n // import { Modal } from 'react-responsive-modal';\n\nvar DynamicComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/Card */ \"./components/Card.js\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ../components/Card */ \"./components/Card.js\")];\n    },\n    modules: ['../components/Card']\n  }\n}); //const ModalExample = dynamic(()=>import('../components/Modal'))\n\n_c2 = DynamicComponent;\n\nfunction Index(props) {\n  _s();\n\n  var className = props.className;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      modal = _useState[0],\n      setModal = _useState[1];\n\n  var toggle = function toggle() {\n    return setModal(!modal);\n  };\n\n  return (// border bottom\n    __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n      fluid: true\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n      style: {\n        borderBottom: \"5px solid #FFF1EA\",\n        marginLeft: '5%',\n        marginRight: '5%',\n        marginTop: '2%'\n      }\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      sm: true,\n      style: {\n        fontFamily: 'Komu A',\n        fontSize: '40px',\n        fontWeight: 'bold'\n      }\n    }, \"ORANGEPICK\"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      sm: true\n    }, __jsx(\"p\", {\n      style: {\n        paddingTop: '5%',\n        textAlign: \"center\",\n        font: \"Bold 16px/19px Josefin Sans\",\n        letterSpacing: \"0px\",\n        color: \"#130D0D\",\n        opacity: \"1\"\n      }\n    }, \"Discovery\")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      sm: true\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      style: {\n        paddingTop: '3%',\n        background: \"#FE6F21\",\n        \"float\": 'right',\n        textAlign: \"center\",\n        borderRadius: \"10px\",\n        padding: \"0\",\n        border: \"none\"\n      }\n    }, __jsx(\"p\", {\n      style: {\n        textAlign: \"center\",\n        font: \"Bold 16px/19px Josefin Sans\",\n        color: \"#130D0D\",\n        opacity: \"1\",\n        marginTop: '3%',\n        paddingTop: '5%',\n        paddingLeft: '3%',\n        paddingRight: '3%'\n      }\n    }, \"Login/Sign Up\")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n      style: {\n        justifyContent: 'center',\n        alignItems: 'center',\n        fontFamily: 'Span'\n      }\n    }, __jsx(\"p\", {\n      style: {\n        fontFamily: 'Span',\n        fontSize: '34px',\n        fontWeight: 'lighter',\n        marginTop: '2%'\n      }\n    }, \" Launched on OrangePick today \")), __jsx(\"div\", {\n      onClick: toggle\n    }, __jsx(DynamicComponent, {\n      onClick: function onClick() {\n        return setOpen(true);\n      }\n    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Modal\"], {\n      isOpen: modal,\n      toggle: toggle,\n      className: className,\n      size: 'lg'\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"ModalHeader\"], {\n      toggle: toggle,\n      style: {\n        backgroundColor: \"rgb(112,112,112,0.2)\"\n      }\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], null, __jsx(\"img\", {\n      src: \"/marketlanecoffee.png\"\n    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      xs: \"auto\"\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], null, __jsx(\"p\", {\n      className: \"titleDetails\"\n    }, \"Market Lane Coffee\")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], null, \"Address\")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, \"Lorem ipsum dolor sit amet\")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      xs: \"2\"\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n      style: {\n        background: \" #FFFFFF 0% 0% no-repeat padding-box\",\n        boxShadow: \"0px 3px 6px #00000029\",\n        borderRadius: \"10px\",\n        verticalAlign: \"top\",\n        display: \"inline-block\",\n        textAlign: \"center\",\n        opacity: \"1\",\n        marginRight: '50%',\n        paddingBottom: '10%',\n        paddingTop: '10%',\n        paddingRight: '10%',\n        paddingLeft: '10%'\n      }\n    }, __jsx(\"img\", {\n      style: {\n        display: \"block\",\n        margin: \"0 auto\"\n      },\n      src: \"/orange.png\",\n      \"data-tip\": \"Add to Orange Pick\"\n    }), __jsx(ReactTooltip, {\n      backgroundColor: \"silver\"\n    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n      style: {\n        background: \" #FFFFFF 0% 0% no-repeat padding-box\",\n        boxShadow: \"0px 3px 6px #00000029\",\n        borderRadius: \"10px\",\n        verticalAlign: \"top\",\n        display: \"inline-block\",\n        textAlign: \"center\",\n        opacity: \"1\",\n        marginRight: '50%',\n        marginTop: '10%',\n        marginBottom: '10%',\n        paddingBottom: '10%',\n        paddingTop: '10%',\n        paddingRight: '10%',\n        paddingLeft: '10%'\n      }\n    }, __jsx(\"img\", {\n      style: {\n        display: \"block\",\n        margin: \"0 auto\"\n      },\n      src: \"/boat.png\"\n    }), __jsx(\"p\", {\n      style: {\n        display: \"block\",\n        margin: \"0 auto\"\n      }\n    }, \"232\"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"ModalBody\"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], null, \"Box\"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], null, \"3 Websites\")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, \"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\")))) //before container row then the card\n\n  );\n}\n\n_s(Index, \"FxRBWQPa/dKnwvdbY5qed8chvVc=\");\n\n_c3 = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"DynamicComponent$dynamic\");\n$RefreshReg$(_c2, \"DynamicComponent\");\n$RefreshReg$(_c3, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkR5bmFtaWNDb21wb25lbnQiLCJkeW5hbWljIiwiSW5kZXgiLCJwcm9wcyIsImNsYXNzTmFtZSIsInVzZVN0YXRlIiwibW9kYWwiLCJzZXRNb2RhbCIsInRvZ2dsZSIsImJvcmRlckJvdHRvbSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIm1hcmdpblRvcCIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJwYWRkaW5nVG9wIiwidGV4dEFsaWduIiwiZm9udCIsImxldHRlclNwYWNpbmciLCJjb2xvciIsIm9wYWNpdHkiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImJvcmRlciIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwic2V0T3BlbiIsImJhY2tncm91bmRDb2xvciIsImJveFNoYWRvdyIsInZlcnRpY2FsQWxpZ24iLCJkaXNwbGF5IiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpbiIsIm1hcmdpbkJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7QUFDQTtDQUVBOztBQUNBLElBQU1BLGdCQUFnQixHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSwrSEFBTjtBQUFBLENBQUQ7QUFBQTtBQUFBO0FBQUEsa0NBQWMsZ0RBQWQ7QUFBQTtBQUFBLGNBQWMsb0JBQWQ7QUFBQTtBQUFBLEVBQWhDLEMsQ0FDQTs7TUFETUQsZ0I7O0FBR04sU0FBU0UsS0FBVCxDQUFlQyxLQUFmLEVBQXFCO0FBQUE7O0FBQUEsTUFHakJDLFNBSGlCLEdBSWZELEtBSmUsQ0FHakJDLFNBSGlCOztBQUFBLGtCQU1PQyxzREFBUSxDQUFDLEtBQUQsQ0FOZjtBQUFBLE1BTVpDLEtBTlk7QUFBQSxNQU1MQyxRQU5LOztBQVFuQixNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFB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LEVBQUM7QUFBekIsT0FBYjtBQUFpRCxTQUFHLEVBQUM7QUFBckQsTUFQeEIsRUFRd0I7QUFBRyxXQUFLLEVBQUk7QUFBQ0YsZUFBTyxFQUFDLE9BQVQ7QUFBa0JFLGNBQU0sRUFBQztBQUF6QjtBQUFaLGFBUnhCLENBYlIsQ0FyQkYsQ0FERixDQURGLEVBcURFLE1BQUMsb0RBQUQsUUFDRSxNQUFDLDhDQUFELFFBQ0UsTUFBQyw4Q0FBRCxjQURGLEVBS0UsTUFBQyw4Q0FBRCxxQkFMRixDQURGLEVBVUUsTUFBQyw4Q0FBRCx5Y0FWRixDQXJERixDQXhCRixDQUZGLENBc0dFOztBQXRHRjtBQXdHRDs7R0FqSFFsQyxLOztNQUFBQSxLO0FBa0hNQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgLCB7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLEJ1dHRvbixNb2RhbCwgTW9kYWxIZWFkZXIsIE1vZGFsQm9keSwgTW9kYWxGb290ZXIgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbi8vIGltcG9ydCB7IE1vZGFsIH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZS1tb2RhbCc7XG5jb25zdCBEeW5hbWljQ29tcG9uZW50ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvQ2FyZCcpKVxuLy9jb25zdCBNb2RhbEV4YW1wbGUgPSBkeW5hbWljKCgpPT5pbXBvcnQoJy4uL2NvbXBvbmVudHMvTW9kYWwnKSlcblxuZnVuY3Rpb24gSW5kZXgocHJvcHMpe1xuICBjb25zdCB7XG4gICAgXG4gICAgY2xhc3NOYW1lXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRNb2RhbCghbW9kYWwpO1xuICByZXR1cm4oXG4gICAgLy8gYm9yZGVyIGJvdHRvbVxuICAgIDxDb250YWluZXIgZmx1aWQ+XG4gICAgPFJvdyBzdHlsZT17e2JvcmRlckJvdHRvbTogXCI1cHggc29saWQgI0ZGRjFFQVwiLG1hcmdpbkxlZnQ6JzUlJyxtYXJnaW5SaWdodDonNSUnLG1hcmdpblRvcDonMiUnfX0+XG4gICAgICA8Q29sIHNtIHN0eWxlPXt7Zm9udEZhbWlseTonS29tdSBBJyxmb250U2l6ZTonNDBweCcsZm9udFdlaWdodDonYm9sZCd9fT5PUkFOR0VQSUNLPC9Db2w+XG4gICAgICA8Q29sIHNtID48cCBzdHlsZT17eyAgcGFkZGluZ1RvcDonNSUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250OiBcIkJvbGQgMTZweC8xOXB4IEpvc2VmaW4gU2Fuc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzEzMEQwRFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiMVwiIH19PkRpc2NvdmVyeTwvcD48L0NvbD5cbiAgICAgIDxDb2wgc20+XG4gICAgICAgIDxCdXR0b24gc3R5bGU9e3twYWRkaW5nVG9wOiczJScsYmFja2dyb3VuZDpcIiNGRTZGMjFcIixmbG9hdDoncmlnaHQnLHRleHRBbGlnbjogXCJjZW50ZXJcIiwgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixwYWRkaW5nOiBcIjBcIixib3JkZXI6IFwibm9uZVwifX0+XG4gICAgICAgICAgICA8cCBzdHlsZT0ge3t0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250OiBcIkJvbGQgMTZweC8xOXB4IEpvc2VmaW4gU2Fuc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzEzMEQwRFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogXCIxXCIsbWFyZ2luVG9wOiczJScscGFkZGluZ1RvcDonNSUnLHBhZGRpbmdMZWZ0OiczJScscGFkZGluZ1JpZ2h0OiczJSd9fT5Mb2dpbi9TaWduIFVwPC9wPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Db2w+XG4gICAgPC9Sb3c+XG4gICAgPFJvdyBzdHlsZT0ge3tqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBmb250RmFtaWx5OidTcGFuJyB9fSA+XG4gICAgICAgIDxwIHN0eWxlID0ge3tmb250RmFtaWx5OidTcGFuJyxmb250U2l6ZTonMzRweCcsZm9udFdlaWdodDonbGlnaHRlcicsbWFyZ2luVG9wOicyJSd9fT4gTGF1bmNoZWQgb24gT3JhbmdlUGljayB0b2RheSA8L3A+XG4gICAgPC9Sb3c+XG4gICAgPGRpdiBvbkNsaWNrPXt0b2dnbGV9PlxuICAgIDxEeW5hbWljQ29tcG9uZW50IG9uQ2xpY2s9IHsoKT0+IHNldE9wZW4odHJ1ZSl9PjwvRHluYW1pY0NvbXBvbmVudD5cbiAgICA8L2Rpdj5cbiAgICAgIDxNb2RhbCBpc09wZW49e21vZGFsfSB0b2dnbGU9e3RvZ2dsZX0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IHNpemU9eydsZyd9PlxuICAgICAgICA8TW9kYWxIZWFkZXIgdG9nZ2xlPXt0b2dnbGV9c3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCJyZ2IoMTEyLDExMiwxMTIsMC4yKVwifX0gPlxuICAgICAgICAgIDxSb3cgPlxuICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgIDxpbWcgc3JjID0gXCIvbWFya2V0bGFuZWNvZmZlZS5wbmdcIj48L2ltZz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8Q29sIHhzPVwiYXV0b1wiPlxuICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtcInRpdGxlRGV0YWlsc1wifT5NYXJrZXQgTGFuZSBDb2ZmZWU8L3A+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICAgIEFkZHJlc3NcbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldFxuICAgICAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sICB4cz1cIjJcIj5cbiAgICAgICAgICAgIDxSb3cgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwiMHB4IDNweCA2cHggIzAwMDAwMDI5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBcIjFcIixtYXJnaW5SaWdodDonNTAlJyxwYWRkaW5nQm90dG9tOicxMCUnLHBhZGRpbmdUb3A6JzEwJScscGFkZGluZ1JpZ2h0OicxMCUnLHBhZGRpbmdMZWZ0OicxMCUnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGUgPXt7ZGlzcGxheTpcImJsb2NrXCIsIG1hcmdpbjpcIjAgYXV0b1wifX0gc3JjPVwiL29yYW5nZS5wbmdcIiBkYXRhLXRpcD1cIkFkZCB0byBPcmFuZ2UgUGlja1wiPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RUb29sdGlwIGJhY2tncm91bmRDb2xvcj1cInNpbHZlclwiLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICA8Um93IHN0eWxlPXt7YmFja2dyb3VuZDpcIiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIjBweCAzcHggNnB4ICMwMDAwMDAyOVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwidG9wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogXCIxXCIsbWFyZ2luUmlnaHQ6JzUwJScsbWFyZ2luVG9wOicxMCUnLG1hcmdpbkJvdHRvbTonMTAlJyxwYWRkaW5nQm90dG9tOicxMCUnLHBhZGRpbmdUb3A6JzEwJScscGFkZGluZ1JpZ2h0OicxMCUnLHBhZGRpbmdMZWZ0OicxMCUnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGUgPXt7ZGlzcGxheTpcImJsb2NrXCIsIG1hcmdpbjpcIjAgYXV0b1wifX0gc3JjPVwiL2JvYXQucG5nXCI+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlID0ge3tkaXNwbGF5OlwiYmxvY2tcIiwgbWFyZ2luOlwiMCBhdXRvXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMzJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICA8L01vZGFsSGVhZGVyPlxuICAgICAgICA8TW9kYWxCb2R5PlxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgQm94XG4gICAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgIDMgV2Vic2l0ZXNcbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cblxuICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgIDwvTW9kYWxCb2R5PlxuICAgICAgICB7LyogPE1vZGFsRm9vdGVyPlxuICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17dG9nZ2xlfT5EbyBTb21ldGhpbmc8L0J1dHRvbj57JyAnfVxuICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXt0b2dnbGV9PkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICA8L01vZGFsRm9vdGVyPiAqL31cbiAgICAgIDwvTW9kYWw+XG5cbiAgICA8L0NvbnRhaW5lcj5cbiAgICAvL2JlZm9yZSBjb250YWluZXIgcm93IHRoZW4gdGhlIGNhcmRcbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG5cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})