(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "1sDI":
/*!********************************************!*\
  !*** ./src/store/alt-text-store/action.ts ***!
  \********************************************/
/*! exports provided: AltTextActionTypes, setAltText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AltTextActionTypes\", function() { return AltTextActionTypes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setAltText\", function() { return setAltText; });\nvar AltTextActionTypes;\r\n(function (AltTextActionTypes) {\r\n    AltTextActionTypes[\"GET_ALT_TEXT\"] = \"GET_ALT_TEXT\";\r\n    AltTextActionTypes[\"SET_ALT_TEXT\"] = \"SET_ALT_TEXT\";\r\n})(AltTextActionTypes || (AltTextActionTypes = {}));\r\nvar setAltText = function (text) {\r\n    return {\r\n        type: AltTextActionTypes.SET_ALT_TEXT,\r\n        altText: text\r\n    };\r\n};\r\n\n\n//# sourceURL=webpack:///./src/store/alt-text-store/action.ts?");

/***/ }),

/***/ "2xbW":
/*!*****************************************!*\
  !*** ./src/store/text-store/reducer.ts ***!
  \*****************************************/
/*! exports provided: textReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"textReducer\", function() { return textReducer; });\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ \"xSYX\");\nvar __assign = (undefined && undefined.__assign) || Object.assign || function(t) {\r\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n        s = arguments[i];\r\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n            t[p] = s[p];\r\n    }\r\n    return t;\r\n};\r\n\r\nvar initialState = {\r\n    text: \"Initial State\"\r\n};\r\nvar textReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    // console.log(state);\r\n    switch (action.type) {\r\n        case _action__WEBPACK_IMPORTED_MODULE_0__[\"TextActionTypes\"].SET_TEXT:\r\n            return __assign({}, state, { text: action.text });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/store/text-store/reducer.ts?");

/***/ }),

/***/ "FG4z":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducers\", function() { return reducers; });\n/* harmony import */ var _text_store_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-store/reducer */ \"2xbW\");\n/* harmony import */ var _alt_text_store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alt-text-store/reducer */ \"vpCm\");\n\r\n\r\nvar reducers = {\r\n    stateText: _text_store_reducer__WEBPACK_IMPORTED_MODULE_0__[\"textReducer\"],\r\n    stateAltText: _alt_text_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"altTextReducer\"]\r\n};\r\n\n\n//# sourceURL=webpack:///./src/store/index.ts?");

/***/ }),

/***/ "L6P6":
/*!*************************************!*\
  !*** ./src/store/configureStore.ts ***!
  \*************************************/
/*! exports provided: configureStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configureStore\", function() { return configureStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"H360\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"FG4z\");\nvar __assign = (undefined && undefined.__assign) || Object.assign || function(t) {\r\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n        s = arguments[i];\r\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n            t[p] = s[p];\r\n    }\r\n    return t;\r\n};\r\n\r\n\r\nvar configureStore = function () {\r\n    var allReducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])(__assign({}, _index__WEBPACK_IMPORTED_MODULE_1__[\"reducers\"]));\r\n    var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(allReducers);\r\n    return store;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/store/configureStore.ts?");

/***/ }),

/***/ "M0o7":
/*!*************************************************!*\
  !*** ./src/components/dynamic-import/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"ivGQ\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar DynamicImport = /** @class */ (function (_super) {\r\n    __extends(DynamicImport, _super);\r\n    function DynamicImport(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        _this.state = {\r\n            component: null\r\n        };\r\n        return _this;\r\n    }\r\n    DynamicImport.prototype.componentDidMount = function () {\r\n        var _this = this;\r\n        this.props.load()\r\n            .then(function (component) {\r\n            _this.setState({\r\n                component: component.default ? component.default : component\r\n            });\r\n        });\r\n    };\r\n    DynamicImport.prototype.render = function () {\r\n        return this.props.componentToLoad(this.state.component);\r\n    };\r\n    return DynamicImport;\r\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (DynamicImport);\r\n\n\n//# sourceURL=webpack:///./src/components/dynamic-import/index.tsx?");

/***/ }),

/***/ "gC7S":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"ivGQ\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"Y/FK\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"CoHH\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"kUCe\");\n/* harmony import */ var _components_dynamic_import__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dynamic-import */ \"M0o7\");\n/* harmony import */ var _src_components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/header */ \"vHsU\");\n/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/configureStore */ \"L6P6\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __assign = (undefined && undefined.__assign) || Object.assign || function(t) {\r\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n        s = arguments[i];\r\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n            t[p] = s[p];\r\n    }\r\n    return t;\r\n};\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar App = /** @class */ (function (_super) {\r\n    __extends(App, _super);\r\n    function App() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.Home = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components_dynamic_import__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { load: function () { return __webpack_require__.e(/*! import() | async-home */ \"async-home\").then(__webpack_require__.bind(null, /*! ./pages/home */ \"H1Td\")); }, componentToLoad: function (Component) { return Component === null\r\n                ? react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null, \"Loading\")\r\n                : react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](Component, __assign({}, props)); } })); };\r\n        _this.About = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components_dynamic_import__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { load: function () { return __webpack_require__.e(/*! import() | async-about */ \"async-about\").then(__webpack_require__.bind(null, /*! ./pages/about */ \"nRgf\")); }, componentToLoad: function (Component) { return Component === null\r\n                ? react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null, \"Loading\")\r\n                : react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](Component, __assign({}, props)); } })); };\r\n        return _this;\r\n    }\r\n    App.prototype.render = function () {\r\n        return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null,\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"HashRouter\"], { basename: process.env.PUBLIC_URL },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null,\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_src_components_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Switch\"], null,\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], { exact: true, path: \"/\", component: this.Home }),\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], { path: \"/about\", component: this.About }))))));\r\n    };\r\n    return App;\r\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]));\r\nreact_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"](react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], { store: Object(_store_configureStore__WEBPACK_IMPORTED_MODULE_6__[\"configureStore\"])() },\r\n    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](App, null)), document.getElementById(\"root\"));\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"JtWf\")))\n\n//# sourceURL=webpack:///./src/index.tsx?");

/***/ }),

/***/ "vHsU":
/*!*****************************************!*\
  !*** ./src/components/header/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"ivGQ\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"kUCe\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\nvar Header = /** @class */ (function (_super) {\r\n    __extends(Header, _super);\r\n    function Header() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    Header.prototype.render = function () {\r\n        return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null,\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], { to: \"/\" }, \"Home\"),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], { to: \"/about\" }, \"About\")));\r\n    };\r\n    return Header;\r\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\r\n\n\n//# sourceURL=webpack:///./src/components/header/index.tsx?");

/***/ }),

/***/ "vpCm":
/*!*********************************************!*\
  !*** ./src/store/alt-text-store/reducer.ts ***!
  \*********************************************/
/*! exports provided: altTextReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"altTextReducer\", function() { return altTextReducer; });\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ \"1sDI\");\nvar __assign = (undefined && undefined.__assign) || Object.assign || function(t) {\r\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n        s = arguments[i];\r\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n            t[p] = s[p];\r\n    }\r\n    return t;\r\n};\r\n\r\nvar initialState = {\r\n    altText: \"Initial Alt State\",\r\n    text: \"Text in Alt Text State\"\r\n};\r\nvar altTextReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case _action__WEBPACK_IMPORTED_MODULE_0__[\"AltTextActionTypes\"].SET_ALT_TEXT:\r\n            return __assign({}, state, { altText: action.altText });\r\n        default:\r\n            return __assign({}, state);\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/store/alt-text-store/reducer.ts?");

/***/ }),

/***/ "xSYX":
/*!****************************************!*\
  !*** ./src/store/text-store/action.ts ***!
  \****************************************/
/*! exports provided: TextActionTypes, setText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextActionTypes\", function() { return TextActionTypes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setText\", function() { return setText; });\nvar TextActionTypes;\r\n(function (TextActionTypes) {\r\n    TextActionTypes[\"GET_TEXT\"] = \"GET_TEXT\";\r\n    TextActionTypes[\"SET_TEXT\"] = \"SET_TEXT\";\r\n})(TextActionTypes || (TextActionTypes = {}));\r\n;\r\nvar setText = function (text) {\r\n    return {\r\n        type: TextActionTypes.SET_TEXT,\r\n        text: text\r\n    };\r\n};\r\n\n\n//# sourceURL=webpack:///./src/store/text-store/action.ts?");

/***/ })

},[["gC7S","manifest","vendors"]]]);