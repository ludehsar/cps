(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./resources/js/admin/components/courses/AddNewCourseDialog.js":
/*!*********************************************************************!*\
  !*** ./resources/js/admin/components/courses/AddNewCourseDialog.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tinymce/tinymce-react */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _shared_components_FormDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/FormDialog */ "./resources/js/shared/components/FormDialog.js");
/* harmony import */ var _shared_components_ColoredButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/ColoredButton */ "./resources/js/shared/components/ColoredButton.js");
/* harmony import */ var _shared_components_HighlightedInformation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/HighlightedInformation */ "./resources/js/shared/components/HighlightedInformation.js");
/* harmony import */ var _shared_components_ButtonCircularProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/ButtonCircularProgress */ "./resources/js/shared/components/ButtonCircularProgress.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var styles = {//
};

var AddNewCourseDialog = function AddNewCourseDialog(props) {
  var open = props.open,
      onClose = props.onClose,
      onSuccess = props.onSuccess;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      status = _useState4[0],
      setStatus = _useState4[1];

  var inputCourseName = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var inputCourseDescription = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var inputCoursePrice = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var addNewCourse = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (inputCoursePrice.current.value < '0') {
      setStatus('invalidCoursePrice');
      return;
    }

    setIsLoading(true);
    axios.post('/api/courses/new', {
      course_name: inputCourseName.current.value,
      course_description: inputCourseDescription.current.value,
      course_price: inputCoursePrice.current.value
    }).then(function () {
      setIsLoading(false);
      onSuccess();
    })["catch"](function (err) {
      console.log(err);
      setIsLoading(false);
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_FormDialog__WEBPACK_IMPORTED_MODULE_4__["default"], {
    open: open,
    onClose: onClose,
    loading: isLoading,
    method: "post",
    onFormSubmit: function onFormSubmit(e) {
      e.preventDefault();
      addNewCourse();
    },
    hideBackdrop: true,
    headline: "Add A New Course",
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
      variant: "outlined",
      margin: "normal",
      required: true,
      fullWidth: true,
      label: "Course Name",
      inputRef: inputCourseName,
      autoFocus: true,
      autoComplete: "off",
      type: "text",
      FormHelperTextProps: {
        error: false
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
      variant: "outlined",
      margin: "normal",
      required: true,
      fullWidth: true,
      label: "Course Description",
      inputRef: inputCourseDescription,
      autoComplete: "off",
      type: "text",
      multiline: true,
      rows: "5",
      rowsMax: "5",
      FormHelperTextProps: {
        error: false
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
      variant: "outlined",
      margin: "normal",
      error: status === "invalidCoursePrice",
      required: true,
      fullWidth: true,
      label: "Course Price",
      inputRef: inputCoursePrice,
      autoComplete: "off",
      type: "number",
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["InputAdornment"], {
          position: "start"
        }, "\u09F3")
      },
      defaultValue: "0",
      onChange: function onChange() {
        if (status === "invalidCoursePrice") {
          setStatus(null);
        }
      },
      helperText: status === "invalidCoursePrice" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Invalid price.") : "",
      FormHelperTextProps: {
        error: true
      }
    })),
    actions: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      type: "submit",
      fullWidth: true,
      variant: "contained",
      color: "secondary",
      disabled: isLoading,
      size: "large"
    }, "Create A New Course", isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_ButtonCircularProgress__WEBPACK_IMPORTED_MODULE_7__["default"], null)))
  }));
};

AddNewCourseDialog.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onSuccess: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles, {
  withTheme: true
})(AddNewCourseDialog));

/***/ }),

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

/***/ "./resources/js/shared/components/DialogTitleWithCloseIcon.js":
/*!********************************************************************!*\
  !*** ./resources/js/shared/components/DialogTitleWithCloseIcon.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3__);





function DialogTitleWithCloseIcon(props) {
  var theme = props.theme,
      paddingBottom = props.paddingBottom,
      onClose = props.onClose,
      disabled = props.disabled,
      title = props.title,
      disablePadding = props.disablePadding;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogTitle"], {
    style: {
      paddingBottom: paddingBottom ? paddingBottom && disablePadding ? 0 : paddingBottom : theme.spacing(3),
      paddingLeft: disablePadding ? 0 : null,
      paddingRight: disablePadding ? 0 : null,
      paddingTop: disablePadding ? 0 : theme.spacing(2),
      width: "100%"
    },
    disableTypography: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    display: "flex",
    justifyContent: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h5"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    onClick: onClose,
    style: {
      marginRight: -12,
      marginTop: -10
    },
    disabled: disabled,
    "aria-label": "Close"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default.a, null))));
}

DialogTitleWithCloseIcon.propTypes = {
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  paddingBottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  disablePadding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withTheme"])(DialogTitleWithCloseIcon));

/***/ }),

/***/ "./resources/js/shared/components/FormDialog.js":
/*!******************************************************!*\
  !*** ./resources/js/shared/components/FormDialog.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _DialogTitleWithCloseIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DialogTitleWithCloseIcon */ "./resources/js/shared/components/DialogTitleWithCloseIcon.js");





var styles = function styles(theme) {
  return {
    dialogPaper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingBottom: theme.spacing(3),
      maxWidth: 420
    },
    actions: {
      marginTop: theme.spacing(2)
    },
    dialogPaperScrollPaper: {
      maxHeight: "none"
    },
    dialogContent: {
      paddingTop: 0,
      paddingBottom: 0
    }
  };
};
/**
 * A Wrapper around the Dialog component to create centered
 * Login, Register or other Dialogs.
 */


function FormDialog(props) {
  var classes = props.classes,
      open = props.open,
      onClose = props.onClose,
      loading = props.loading,
      headline = props.headline,
      onFormSubmit = props.onFormSubmit,
      content = props.content,
      actions = props.actions,
      hideBackdrop = props.hideBackdrop;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Dialog"], {
    open: open,
    onClose: onClose,
    disableBackdropClick: loading,
    disableEscapeKeyDown: loading,
    classes: {
      paper: classes.dialogPaper,
      paperScrollPaper: classes.dialogPaperScrollPaper
    },
    hideBackdrop: hideBackdrop ? hideBackdrop : false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DialogTitleWithCloseIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: headline,
    onClose: onClose,
    disabled: loading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogContent"], {
    className: classes.dialogContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: onFormSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: "100%",
    className: classes.actions
  }, actions))));
}

FormDialog.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  open: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  headline: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  onFormSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired,
  hideBackdrop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles, {
  withTheme: true
})(FormDialog));

/***/ })

}]);