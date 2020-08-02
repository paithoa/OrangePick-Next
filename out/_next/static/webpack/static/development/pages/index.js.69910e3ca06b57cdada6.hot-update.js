webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-modal */ \"./node_modules/react-responsive-modal/dist/index.js\");\n/* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive_modal__WEBPACK_IMPORTED_MODULE_3__);\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar DynamicComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/Card */ \"./components/Card.js\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ../components/Card */ \"./components/Card.js\")];\n    },\n    modules: ['../components/Card']\n  }\n});\n_c2 = DynamicComponent;\nvar ModalExample = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c3 = function _c3() {\n  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/Modal */ \"./components/Modal.js\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ../components/Modal */ \"./components/Modal.js\")];\n    },\n    modules: ['../components/Modal']\n  }\n});\n_c4 = ModalExample;\n\nfunction Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log(\"Current State is \".concat(open));\n  });\n  return (// border bottom\n    __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n      fluid: true\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n      style: {\n        borderBottom: \"5px solid #FFF1EA\",\n        marginLeft: '5%',\n        marginRight: '5%',\n        marginTop: '2%'\n      }\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      sm: true,\n      style: {\n        fontFamily: 'Komu A',\n        fontSize: '40px',\n        fontWeight: 'bold'\n      }\n    }, \"ORANGEPICK\"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      sm: true\n    }, __jsx(\"p\", {\n      style: {\n        paddingTop: '5%',\n        textAlign: \"center\",\n        font: \"Bold 16px/19px Josefin Sans\",\n        letterSpacing: \"0px\",\n        color: \"#130D0D\",\n        opacity: \"1\"\n      }\n    }, \"Discovery\")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      sm: true\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      style: {\n        paddingTop: '3%',\n        background: \"#FE6F21\",\n        \"float\": 'right',\n        textAlign: \"center\",\n        borderRadius: \"10px\",\n        padding: \"0\",\n        border: \"none\"\n      }\n    }, __jsx(\"p\", {\n      style: {\n        textAlign: \"center\",\n        font: \"Bold 16px/19px Josefin Sans\",\n        color: \"#130D0D\",\n        opacity: \"1\",\n        marginTop: '3%',\n        paddingTop: '5%',\n        paddingLeft: '3%',\n        paddingRight: '3%'\n      }\n    }, \"Login/Sign Up\")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n      style: {\n        justifyContent: 'center',\n        alignItems: 'center',\n        fontFamily: 'Span'\n      }\n    }, __jsx(\"p\", {\n      style: {\n        fontFamily: 'Span',\n        fontSize: '34px',\n        fontWeight: 'lighter',\n        marginTop: '2%'\n      }\n    }, \" Launched on OrangePick today \")), __jsx(\"div\", {\n      onClick: function onClick() {\n        return setOpen(true);\n      }\n    }, __jsx(DynamicComponent, {\n      onClick: function onClick() {\n        return setOpen(true);\n      }\n    })), __jsx(ModalExample, null)) //before container row then the card\n\n  );\n}\n\n_s(Index, \"dFCHWuBen6y1c6iHZyYUdNUVHl8=\");\n\n_c5 = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"DynamicComponent$dynamic\");\n$RefreshReg$(_c2, \"DynamicComponent\");\n$RefreshReg$(_c3, \"ModalExample$dynamic\");\n$RefreshReg$(_c4, \"ModalExample\");\n$RefreshReg$(_c5, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkR5bmFtaWNDb21wb25lbnQiLCJkeW5hbWljIiwiTW9kYWxFeGFtcGxlIiwiSW5kZXgiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImJvcmRlckJvdHRvbSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIm1hcmdpblRvcCIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJwYWRkaW5nVG9wIiwidGV4dEFsaWduIiwiZm9udCIsImxldHRlclNwYWNpbmciLCJjb2xvciIsIm9wYWNpdHkiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImJvcmRlciIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsZ0JBQWdCLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLCtIQUFOO0FBQUEsQ0FBRDtBQUFBO0FBQUE7QUFBQSxrQ0FBYyxnREFBZDtBQUFBO0FBQUEsY0FBYyxvQkFBZDtBQUFBO0FBQUEsRUFBaEM7TUFBTUQsZ0I7QUFDTixJQUFNRSxZQUFZLEdBQUdELG1EQUFPLE9BQUM7QUFBQSxTQUFJLGlJQUFKO0FBQUEsQ0FBRDtBQUFBO0FBQUE7QUFBQSxrQ0FBWSxrREFBWjtBQUFBO0FBQUEsY0FBWSxxQkFBWjtBQUFBO0FBQUEsRUFBNUI7TUFBTUMsWTs7QUFDTixTQUFTQyxLQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsS0FBRCxDQURoQjtBQUFBLE1BQ1BDLElBRE87QUFBQSxNQUNGQyxPQURFOztBQUlkQyx5REFBUyxDQUFFLFlBQU07QUFDYkMsV0FBTyxDQUFDQyxHQUFSLDRCQUFnQ0osSUFBaEM7QUFDSCxHQUZRLENBQVQ7QUFHQSxTQUNFO0FBQ0EsVUFBQyxvREFBRDtBQUFXLFdBQUs7QUFBaEIsT0FDQSxNQUFDLDhDQUFEO0FBQUssV0FBSyxFQUFFO0FBQUNLLG9CQUFZLEVBQUUsbUJBQWY7QUFBbUNDLGtCQUFVLEVBQUMsSUFBOUM7QUFBbURDLG1CQUFXLEVBQUMsSUFBL0Q7QUFBb0VDLGlCQUFTLEVBQUM7QUFBOUU7QUFBWixPQUNFLE1BQUMsOENBQUQ7QUFBSyxRQUFFLE1BQVA7QUFBUSxXQUFLLEVBQUU7QUFBQ0Msa0JBQVUsRUFBQyxRQUFaO0FBQXFCQyxnQkFBUSxFQUFDLE1BQTlCO0FBQXFDQyxrQkFBVSxFQUFDO0FBQWhEO0FBQWYsb0JBREYsRUFFRSxNQUFDLDhDQUFEO0FBQUssUUFBRTtBQUFQLE9BQVM7QUFBRyxXQUFLLEVBQUU7QUFBR0Msa0JBQVUsRUFBQyxJQUFkO0FBQ0dDLGlCQUFTLEVBQUUsUUFEZDtBQUVHQyxZQUFJLEVBQUUsNkJBRlQ7QUFHR0MscUJBQWEsRUFBRSxLQUhsQjtBQUlHQyxhQUFLLEVBQUUsU0FKVjtBQUtHQyxlQUFPLEVBQUU7QUFMWjtBQUFWLG1CQUFULENBRkYsRUFRRSxNQUFDLDhDQUFEO0FBQUssUUFBRTtBQUFQLE9BQ0UsTUFBQyxpREFBRDtBQUFRLFdBQUssRUFBRTtBQUFDTCxrQkFBVSxFQUFDLElBQVo7QUFBaUJNLGtCQUFVLEVBQUMsU0FBNUI7QUFBc0MsaUJBQU0sT0FBNUM7QUFBb0RMLGlCQUFTLEVBQUUsUUFBL0Q7QUFBeUVNLG9CQUFZLEVBQUUsTUFBdkY7QUFBOEZDLGVBQU8sRUFBRSxHQUF2RztBQUEyR0MsY0FBTSxFQUFFO0FBQW5IO0FBQWYsT0FDSTtBQUFHLFdBQUssRUFBRztBQUFDUixpQkFBUyxFQUFFLFFBQVo7QUFDQ0MsWUFBSSxFQUFFLDZCQURQO0FBRUNFLGFBQUssRUFBRSxTQUZSO0FBR0NDLGVBQU8sRUFBRSxHQUhWO0FBR2NULGlCQUFTLEVBQUMsSUFIeEI7QUFHNkJJLGtCQUFVLEVBQUMsSUFIeEM7QUFHNkNVLG1CQUFXLEVBQUMsSUFIekQ7QUFHOERDLG9CQUFZLEVBQUM7QUFIM0U7QUFBWCx1QkFESixDQURGLENBUkYsQ0FEQSxFQWtCQSxNQUFDLDhDQUFEO0FBQUssV0FBSyxFQUFHO0FBQUNDLHNCQUFjLEVBQUUsUUFBakI7QUFBMkJDLGtCQUFVLEVBQUUsUUFBdkM7QUFBaURoQixrQkFBVSxFQUFDO0FBQTVEO0FBQWIsT0FDSTtBQUFHLFdBQUssRUFBSTtBQUFDQSxrQkFBVSxFQUFDLE1BQVo7QUFBbUJDLGdCQUFRLEVBQUMsTUFBNUI7QUFBbUNDLGtCQUFVLEVBQUMsU0FBOUM7QUFBd0RILGlCQUFTLEVBQUM7QUFBbEU7QUFBWix3Q0FESixDQWxCQSxFQXFCQTtBQUFLLGFBQU8sRUFBRTtBQUFBLGVBQUtQLE9BQU8sQ0FBQyxJQUFELENBQVo7QUFBQTtBQUFkLE9BQ0EsTUFBQyxnQkFBRDtBQUFrQixhQUFPLEVBQUc7QUFBQSxlQUFLQSxPQUFPLENBQUMsSUFBRCxDQUFaO0FBQUE7QUFBNUIsTUFEQSxDQXJCQSxFQXdCQSxNQUFDLFlBQUQsT0F4QkEsQ0FGRixDQTRCRTs7QUE1QkY7QUE4QkQ7O0dBckNRSCxLOztNQUFBQSxLO0FBc0NNQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgLCB7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLEJ1dHRvbiB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlLW1vZGFsJztcbmNvbnN0IER5bmFtaWNDb21wb25lbnQgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vY29tcG9uZW50cy9DYXJkJykpXG5jb25zdCBNb2RhbEV4YW1wbGUgPSBkeW5hbWljKCgpPT5pbXBvcnQoJy4uL2NvbXBvbmVudHMvTW9kYWwnKSlcbmZ1bmN0aW9uIEluZGV4KCl7XG4gIGNvbnN0IFtvcGVuLHNldE9wZW5dPSB1c2VTdGF0ZShmYWxzZSlcbiAgXG4gIFxuICB1c2VFZmZlY3QoICgpID0+IHsgXG4gICAgICBjb25zb2xlLmxvZyhgQ3VycmVudCBTdGF0ZSBpcyAke29wZW59YClcbiAgfSlcbiAgcmV0dXJuKFxuICAgIC8vIGJvcmRlciBib3R0b21cbiAgICA8Q29udGFpbmVyIGZsdWlkPlxuICAgIDxSb3cgc3R5bGU9e3tib3JkZXJCb3R0b206IFwiNXB4IHNvbGlkICNGRkYxRUFcIixtYXJnaW5MZWZ0Oic1JScsbWFyZ2luUmlnaHQ6JzUlJyxtYXJnaW5Ub3A6JzIlJ319PlxuICAgICAgPENvbCBzbSBzdHlsZT17e2ZvbnRGYW1pbHk6J0tvbXUgQScsZm9udFNpemU6JzQwcHgnLGZvbnRXZWlnaHQ6J2JvbGQnfX0+T1JBTkdFUElDSzwvQ29sPlxuICAgICAgPENvbCBzbSA+PHAgc3R5bGU9e3sgIHBhZGRpbmdUb3A6JzUlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogXCJCb2xkIDE2cHgvMTlweCBKb3NlZmluIFNhbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiBcIjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMxMzBEMERcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBcIjFcIiB9fT5EaXNjb3Zlcnk8L3A+PC9Db2w+XG4gICAgICA8Q29sIHNtPlxuICAgICAgICA8QnV0dG9uIHN0eWxlPXt7cGFkZGluZ1RvcDonMyUnLGJhY2tncm91bmQ6XCIjRkU2RjIxXCIsZmxvYXQ6J3JpZ2h0Jyx0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGJvcmRlclJhZGl1czogXCIxMHB4XCIscGFkZGluZzogXCIwXCIsYm9yZGVyOiBcIm5vbmVcIn19PlxuICAgICAgICAgICAgPHAgc3R5bGU9IHt7dGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogXCJCb2xkIDE2cHgvMTlweCBKb3NlZmluIFNhbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMxMzBEMERcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiMVwiLG1hcmdpblRvcDonMyUnLHBhZGRpbmdUb3A6JzUlJyxwYWRkaW5nTGVmdDonMyUnLHBhZGRpbmdSaWdodDonMyUnfX0+TG9naW4vU2lnbiBVcDwvcD5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ29sPlxuICAgIDwvUm93PlxuICAgIDxSb3cgc3R5bGU9IHt7anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZm9udEZhbWlseTonU3BhbicgfX0gPlxuICAgICAgICA8cCBzdHlsZSA9IHt7Zm9udEZhbWlseTonU3BhbicsZm9udFNpemU6JzM0cHgnLGZvbnRXZWlnaHQ6J2xpZ2h0ZXInLG1hcmdpblRvcDonMiUnfX0+IExhdW5jaGVkIG9uIE9yYW5nZVBpY2sgdG9kYXkgPC9wPlxuICAgIDwvUm93PlxuICAgIDxkaXYgb25DbGljaz17KCk9PiBzZXRPcGVuKHRydWUpfT5cbiAgICA8RHluYW1pY0NvbXBvbmVudCBvbkNsaWNrPSB7KCk9PiBzZXRPcGVuKHRydWUpfT48L0R5bmFtaWNDb21wb25lbnQ+XG4gICAgPC9kaXY+XG4gICAgPE1vZGFsRXhhbXBsZT48L01vZGFsRXhhbXBsZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgICAvL2JlZm9yZSBjb250YWluZXIgcm93IHRoZW4gdGhlIGNhcmRcbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG5cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})