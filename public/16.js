(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./resources/js/shared/components/ColoredButton.js":
/*!*********************************************************!*\
  !*** ./resources/js/shared/components/ColoredButton.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function ColoredButton(props) {
  var color = props.color,
      children = props.children,
      theme = props.theme;
  var buttonTheme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["createMuiTheme"])(_objectSpread(_objectSpread({}, theme), {}, {
    palette: {
      primary: {
        main: color
      }
    }
  }));

  var buttonProps = function (_ref) {
    var color = _ref.color,
        theme = _ref.theme,
        children = _ref.children,
        o = _objectWithoutProperties(_ref, ["color", "theme", "children"]);

    return o;
  }(props);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MuiThemeProvider"], {
    theme: buttonTheme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], _extends({}, buttonProps, {
    color: "primary"
  }), children));
}

ColoredButton.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(ColoredButton));

/***/ }),

/***/ "./resources/js/shared/components/Dropzone.js":
/*!****************************************************!*\
  !*** ./resources/js/shared/components/Dropzone.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _ColoredButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ColoredButton */ "./resources/js/shared/components/ColoredButton.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







var styles = {
  button: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.23)",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  fullHeight: {
    height: "100%"
  }
};

function getColor(isDragAccept, isDragReject, theme) {
  if (isDragAccept) {
    return theme.palette.success.main;
  }

  if (isDragReject) {
    return theme.palette.error.dark;
  }

  return theme.palette.common.black;
}

function Dropzone(props) {
  var onDrop = props.onDrop,
      accept = props.accept,
      fullHeight = props.fullHeight,
      children = props.children,
      classes = props.classes,
      style = props.style,
      theme = props.theme;

  var _useDropzone = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_2__["useDropzone"])({
    accept: accept,
    onDrop: onDrop
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragAccept = _useDropzone.isDragAccept,
      isDragReject = _useDropzone.isDragReject;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], _extends({}, getRootProps(), {
    height: "100%"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", getInputProps()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ColoredButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fullWidth: true,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(fullHeight ? classes.fullHeight : null, classes.button),
    variant: "outlined",
    color: getColor(isDragAccept, isDragReject, theme),
    style: style
  }, children));
}

Dropzone.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onDrop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  accept: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  fullHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func])
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles, {
  withTheme: true
})(Dropzone));

/***/ })

}]);