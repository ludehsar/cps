(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

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