webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Hero.tsx":
/*!*********************************!*\
  !*** ./src/components/Hero.tsx ***!
  \*********************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Hero\", function() { return Hero; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/user/Documents/projects/websites/academic-project-website-template/src/components/Hero.tsx\",\n    _this = undefined;\n\n\n\nvar institutions = {\n  1: \"Oxford University\",\n  2: \"Harvard University\"\n};\nvar authors = [{\n  'name': 'Luke Melas-Kyraizi',\n  'institutions': [1, 2]\n}, {\n  'name': 'Luke Kyraizi-Melas',\n  'institutions': [2]\n}];\nvar Hero = function Hero(_ref) {\n  var title = _ref.title;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_app__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      fontSize: \"calc(20px + 0.5vw)\",\n      pt: \"5vh\",\n      pb: \"1vh\",\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n      direction: \"row\",\n      children: authors.map(function (author) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: [author.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"sup\", {\n            children: [\" \", author.institutions.toString()]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n      direction: \"row\",\n      children: Object.entries(institutions).map(function (tuple) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"sup\", {\n            children: [tuple[0], \"  \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, _this), tuple[1]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      fontSize: \"calc(16px + 0.5vw)\",\n      children: \"Authors\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 3\n  }, _this);\n};\n_c = Hero;\nHero.defaultProps = {\n  title: 'Academic Project Template'\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Hero\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVyby50c3g/YTIyZiJdLCJuYW1lcyI6WyJpbnN0aXR1dGlvbnMiLCJhdXRob3JzIiwiSGVybyIsInRpdGxlIiwibWFwIiwiYXV0aG9yIiwibmFtZSIsInRvU3RyaW5nIiwiT2JqZWN0IiwiZW50cmllcyIsInR1cGxlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CLEtBQUcsbUJBRGdCO0FBRW5CLEtBQUc7QUFGZ0IsQ0FBckI7QUFLQSxJQUFNQyxPQUFPLEdBQUcsQ0FDZDtBQUNFLFVBQVEsb0JBRFY7QUFFRSxrQkFBZ0IsQ0FBQyxDQUFELEVBQUksQ0FBSjtBQUZsQixDQURjLEVBS2Q7QUFDRSxVQUFRLG9CQURWO0FBRUUsa0JBQWdCLENBQUMsQ0FBRDtBQUZsQixDQUxjLENBQWhCO0FBV08sSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxzQkFDbEIscUVBQUMsa0RBQUQ7QUFBQSw0QkFDRSxxRUFBQyx3REFBRDtBQUFTLGNBQVEsRUFBQyxvQkFBbEI7QUFBdUMsUUFBRSxFQUFDLEtBQTFDO0FBQWdELFFBQUUsRUFBQyxLQUFuRDtBQUFBLGdCQUEwREE7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsc0RBQUQ7QUFBTyxlQUFTLEVBQUMsS0FBakI7QUFBQSxnQkFFSUYsT0FBTyxDQUFDRyxHQUFSLENBQVksVUFBQ0MsTUFBRDtBQUFBLDRCQUNWO0FBQUEscUJBQ0dBLE1BQU0sQ0FBQ0MsSUFEVixlQUVFO0FBQUEsNEJBQU9ELE1BQU0sQ0FBQ0wsWUFBUCxDQUFvQk8sUUFBcEIsRUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURVO0FBQUEsT0FBWjtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQVlFLHFFQUFDLHNEQUFEO0FBQU8sZUFBUyxFQUFDLEtBQWpCO0FBQUEsZ0JBRUlDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlVCxZQUFmLEVBQTZCSSxHQUE3QixDQUFpQyxVQUFBTSxLQUFLO0FBQUEsNEJBQ3BDO0FBQUEsa0NBQ0U7QUFBQSx1QkFBTUEsS0FBSyxDQUFDLENBQUQsQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFR0EsS0FBSyxDQUFDLENBQUQsQ0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRG9DO0FBQUEsT0FBdEM7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkYsZUFzQkUscUVBQUMsd0RBQUQ7QUFBUyxjQUFRLEVBQUMsb0JBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURrQjtBQUFBLENBQWI7S0FBTVIsSTtBQTJCYkEsSUFBSSxDQUFDUyxZQUFMLEdBQW9CO0FBQ2xCUixPQUFLLEVBQUU7QUFEVyxDQUFwQiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0hlcm8udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxleCwgSGVhZGluZywgU3RhY2sgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnbmV4dC9hcHAnXG5cbmNvbnN0IGluc3RpdHV0aW9ucyA9IHtcbiAgMTogXCJPeGZvcmQgVW5pdmVyc2l0eVwiLFxuICAyOiBcIkhhcnZhcmQgVW5pdmVyc2l0eVwiLFxufVxuXG5jb25zdCBhdXRob3JzID0gW1xuICB7XG4gICAgJ25hbWUnOiAnTHVrZSBNZWxhcy1LeXJhaXppJyxcbiAgICAnaW5zdGl0dXRpb25zJzogWzEsIDJdXG4gIH0sXG4gIHtcbiAgICAnbmFtZSc6ICdMdWtlIEt5cmFpemktTWVsYXMnLFxuICAgICdpbnN0aXR1dGlvbnMnOiBbMl1cbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgSGVybyA9ICh7IHRpdGxlIH06IHsgdGl0bGU6IHN0cmluZyB9KSA9PiAoXG4gIDxDb250YWluZXI+XG4gICAgPEhlYWRpbmcgZm9udFNpemU9XCJjYWxjKDIwcHggKyAwLjV2dylcIiBwdD1cIjV2aFwiIHBiPVwiMXZoXCI+e3RpdGxlfTwvSGVhZGluZz5cbiAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCI+XG4gICAgICB7XG4gICAgICAgIGF1dGhvcnMubWFwKChhdXRob3IpID0+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICB7YXV0aG9yLm5hbWV9XG4gICAgICAgICAgICA8c3VwPiB7YXV0aG9yLmluc3RpdHV0aW9ucy50b1N0cmluZygpfTwvc3VwPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIDwvU3RhY2s+XG4gICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiPlxuICAgICAge1xuICAgICAgICBPYmplY3QuZW50cmllcyhpbnN0aXR1dGlvbnMpLm1hcCh0dXBsZSA9PlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPHN1cD57dHVwbGVbMF19ICA8L3N1cD5cbiAgICAgICAgICAgIHt0dXBsZVsxXX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICA8L1N0YWNrPlxuICAgIDxIZWFkaW5nIGZvbnRTaXplPVwiY2FsYygxNnB4ICsgMC41dncpXCI+QXV0aG9yczwvSGVhZGluZz5cbiAgPC9Db250YWluZXI+XG4pXG5cbkhlcm8uZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogJ0FjYWRlbWljIFByb2plY3QgVGVtcGxhdGUnLFxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Hero.tsx\n");

/***/ })

})