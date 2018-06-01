(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["async-home"],{

/***/ "H1Td":
/*!**********************************!*\
  !*** ./src/pages/home/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"ivGQ\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"CoHH\");\n/* harmony import */ var _components_widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/widget */ \"yTwl\");\n/* harmony import */ var _store_text_store_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/text-store/action */ \"xSYX\");\n/* harmony import */ var _services_context_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/context/theme */ \"obJv\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __assign = (undefined && undefined.__assign) || Object.assign || function(t) {\r\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n        s = arguments[i];\r\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n            t[p] = s[p];\r\n    }\r\n    return t;\r\n};\r\n\r\n\r\n\r\n\r\n\r\nvar HomePage = /** @class */ (function (_super) {\r\n    __extends(HomePage, _super);\r\n    function HomePage() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.newState = function () {\r\n            _this.props.homePageSetText(\"State Change\");\r\n        };\r\n        return _this;\r\n    }\r\n    HomePage.prototype.render = function () {\r\n        console.log(this.props.text);\r\n        return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null,\r\n            \"Home\",\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"button\", { onClick: this.newState }, \"New Text State\"),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_services_context_theme__WEBPACK_IMPORTED_MODULE_4__[\"ThemeContext\"].Provider, { value: \"light\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components_widget__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null))));\r\n    };\r\n    HomePage.prototype.componentDidMount = function () {\r\n        this.props.homePageSetText(\"New state\");\r\n    };\r\n    return HomePage;\r\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]));\r\nvar mapStateToProps = function (state) {\r\n    return __assign({}, state.stateText);\r\n};\r\nvar mapDispatchToProps = function (dispatch) {\r\n    return {\r\n        homePageSetText: function (text) {\r\n            dispatch(Object(_store_text_store_action__WEBPACK_IMPORTED_MODULE_3__[\"setText\"])(text));\r\n        }\r\n    };\r\n};\r\nvar connected = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(HomePage);\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (connected);\r\n// export default HomePage;\r\n\n\n//# sourceURL=webpack:///./src/pages/home/index.tsx?");

/***/ }),

/***/ "oY6R":
/*!**************************************************!*\
  !*** ./src/services/context/theme/theme-hoc.tsx ***!
  \**************************************************/
/*! exports provided: withTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withTheme\", function() { return withTheme; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"ivGQ\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"obJv\");\n\r\n\r\nfunction withTheme(Component) {\r\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_index__WEBPACK_IMPORTED_MODULE_1__[\"ThemeContext\"].Consumer, null, function (theme) {\r\n        return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](Component, { theme: theme });\r\n    }));\r\n}\r\n\n\n//# sourceURL=webpack:///./src/services/context/theme/theme-hoc.tsx?");

/***/ }),

/***/ "obJv":
/*!**********************************************!*\
  !*** ./src/services/context/theme/index.tsx ***!
  \**********************************************/
/*! exports provided: ThemeContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ThemeContext\", function() { return ThemeContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"ivGQ\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\r\nvar ThemeContext = react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"](\"light\");\r\n\n\n//# sourceURL=webpack:///./src/services/context/theme/index.tsx?");

/***/ }),

/***/ "pO9v":
/*!****************************************************!*\
  !*** ./src/pages/home/components/inner-widget.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"ivGQ\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar InnerWidget = /** @class */ (function (_super) {\r\n    __extends(InnerWidget, _super);\r\n    function InnerWidget() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    InnerWidget.prototype.render = function () {\r\n        return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null,\r\n            \"Inner Widget\",\r\n            this.props.theme));\r\n    };\r\n    return InnerWidget;\r\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (InnerWidget);\r\n\n\n//# sourceURL=webpack:///./src/pages/home/components/inner-widget.tsx?");

/***/ }),

/***/ "yTwl":
/*!**********************************************!*\
  !*** ./src/pages/home/components/widget.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"ivGQ\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _inner_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inner-widget */ \"pO9v\");\n/* harmony import */ var _services_context_theme_theme_hoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/context/theme/theme-hoc */ \"oY6R\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\nvar HomeWidget = /** @class */ (function (_super) {\r\n    __extends(HomeWidget, _super);\r\n    function HomeWidget() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    HomeWidget.prototype.render = function () {\r\n        var innerWidget = Object(_services_context_theme_theme_hoc__WEBPACK_IMPORTED_MODULE_2__[\"withTheme\"])(_inner_widget__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n        return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null,\r\n            \"Widget\",\r\n            innerWidget));\r\n    };\r\n    return HomeWidget;\r\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeWidget);\r\n\n\n//# sourceURL=webpack:///./src/pages/home/components/widget.tsx?");

/***/ })

}]);