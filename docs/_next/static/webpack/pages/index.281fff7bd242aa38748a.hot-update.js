webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Hero.tsx":
/*!*********************************!*\
  !*** ./src/components/Hero.tsx ***!
  \*********************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Hero\", function() { return Hero; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/Users/user/Documents/projects/websites/academic-project-website-template/src/components/Hero.tsx\",\n    _this = undefined;\n\n\n\nvar institutions = {\n  1: \"Oxford University\",\n  2: \"Harvard University\"\n};\nvar authors = [{\n  'name': 'Luke Melas-Kyraizi',\n  'institutions': [1, 2]\n}, {\n  'name': 'Luke Kyraizi-Melas',\n  'institutions': [2]\n}];\nvar Hero = function Hero(_ref) {\n  var title = _ref.title;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_app__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      fontSize: \"calc(20px + 0.5vw)\",\n      pt: \"5vh\",\n      pb: \"1vh\",\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_app__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n      children: authors.map(function (author) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            children: [author.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"sup\", {\n              children: [\" \", author.institutions.toString()]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 30\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_app__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n      children: Object.entries(institutions).map(function (tuple, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"sup\", {\n              children: [tuple[0], \"  \"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 14\n            }, _this), tuple[1]]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      fontSize: \"calc(16px + 0.5vw)\",\n      children: \"Authors\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 3\n  }, _this);\n};\n_c = Hero;\nHero.defaultProps = {\n  title: 'Academic Project Template'\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Hero\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVyby50c3g/YTIyZiJdLCJuYW1lcyI6WyJpbnN0aXR1dGlvbnMiLCJhdXRob3JzIiwiSGVybyIsInRpdGxlIiwibWFwIiwiYXV0aG9yIiwibmFtZSIsInRvU3RyaW5nIiwiT2JqZWN0IiwiZW50cmllcyIsInR1cGxlIiwiaW5kZXgiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CLEtBQUcsbUJBRGdCO0FBRW5CLEtBQUc7QUFGZ0IsQ0FBckI7QUFLQSxJQUFNQyxPQUFPLEdBQUcsQ0FDZDtBQUNFLFVBQVEsb0JBRFY7QUFFRSxrQkFBZ0IsQ0FBQyxDQUFELEVBQUksQ0FBSjtBQUZsQixDQURjLEVBS2Q7QUFDRSxVQUFRLG9CQURWO0FBRUUsa0JBQWdCLENBQUMsQ0FBRDtBQUZsQixDQUxjLENBQWhCO0FBV08sSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxzQkFDbEIscUVBQUMsa0RBQUQ7QUFBQSw0QkFDRSxxRUFBQyx3REFBRDtBQUFTLGNBQVEsRUFBQyxvQkFBbEI7QUFBdUMsUUFBRSxFQUFDLEtBQTFDO0FBQWdELFFBQUUsRUFBQyxLQUFuRDtBQUFBLGdCQUEwREE7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsa0RBQUQ7QUFBQSxnQkFFSUYsT0FBTyxDQUFDRyxHQUFSLENBQVksVUFBQ0MsTUFBRDtBQUFBLDRCQUFZO0FBQUEsaUNBQ3RCO0FBQUEsdUJBQU9BLE1BQU0sQ0FBQ0MsSUFBZCxlQUFtQjtBQUFBLDhCQUFPRCxNQUFNLENBQUNMLFlBQVAsQ0FBb0JPLFFBQXBCLEVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEc0IseUJBQVo7QUFBQSxPQUFaO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBVUUscUVBQUMsa0RBQUQ7QUFBQSxnQkFFSUMsTUFBTSxDQUFDQyxPQUFQLENBQWVULFlBQWYsRUFBNkJJLEdBQTdCLENBQWlDLFVBQUNNLEtBQUQsRUFBUUMsS0FBUjtBQUFBLDRCQUFrQjtBQUFBLGlDQUNqRDtBQUFBLG9DQUFHO0FBQUEseUJBQU1ELEtBQUssQ0FBQyxDQUFELENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFILEVBQTJCQSxLQUFLLENBQUMsQ0FBRCxDQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEaUQseUJBQWxCO0FBQUEsT0FBakM7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkYsZUFrQkUscUVBQUMsd0RBQUQ7QUFBUyxjQUFRLEVBQUMsb0JBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURrQjtBQUFBLENBQWI7S0FBTVIsSTtBQXVCYkEsSUFBSSxDQUFDVSxZQUFMLEdBQW9CO0FBQ2xCVCxPQUFLLEVBQUU7QUFEVyxDQUFwQiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0hlcm8udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxleCwgSGVhZGluZyB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICduZXh0L2FwcCdcblxuY29uc3QgaW5zdGl0dXRpb25zID0ge1xuICAxOiBcIk94Zm9yZCBVbml2ZXJzaXR5XCIsXG4gIDI6IFwiSGFydmFyZCBVbml2ZXJzaXR5XCIsXG59XG5cbmNvbnN0IGF1dGhvcnMgPSBbXG4gIHtcbiAgICAnbmFtZSc6ICdMdWtlIE1lbGFzLUt5cmFpemknLFxuICAgICdpbnN0aXR1dGlvbnMnOiBbMSwgMl1cbiAgfSxcbiAge1xuICAgICduYW1lJzogJ0x1a2UgS3lyYWl6aS1NZWxhcycsXG4gICAgJ2luc3RpdHV0aW9ucyc6IFsyXVxuICB9XG5dXG5cbmV4cG9ydCBjb25zdCBIZXJvID0gKHsgdGl0bGUgfTogeyB0aXRsZTogc3RyaW5nIH0pID0+IChcbiAgPENvbnRhaW5lcj5cbiAgICA8SGVhZGluZyBmb250U2l6ZT1cImNhbGMoMjBweCArIDAuNXZ3KVwiIHB0PVwiNXZoXCIgcGI9XCIxdmhcIj57dGl0bGV9PC9IZWFkaW5nPlxuICAgIDxDb250YWluZXI+XG4gICAgICB7XG4gICAgICAgIGF1dGhvcnMubWFwKChhdXRob3IpID0+IDw+XG4gICAgICAgICAgPHNwYW4+e2F1dGhvci5uYW1lfTxzdXA+IHthdXRob3IuaW5zdGl0dXRpb25zLnRvU3RyaW5nKCl9PC9zdXA+PC9zcGFuPlxuICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIDwvQ29udGFpbmVyPlxuICAgIDxDb250YWluZXI+XG4gICAgICB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGluc3RpdHV0aW9ucykubWFwKCh0dXBsZSwgaW5kZXgpID0+IDw+XG4gICAgICAgICAgPHA+PHN1cD57dHVwbGVbMF19ICA8L3N1cD57dHVwbGVbMV19PC9wPlxuICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIDwvQ29udGFpbmVyPlxuICAgIDxIZWFkaW5nIGZvbnRTaXplPVwiY2FsYygxNnB4ICsgMC41dncpXCI+QXV0aG9yczwvSGVhZGluZz5cbiAgPC9Db250YWluZXI+XG4pXG5cbkhlcm8uZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogJ0FjYWRlbWljIFByb2plY3QgVGVtcGxhdGUnLFxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Hero.tsx\n");

/***/ })

})