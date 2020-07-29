(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./resources/js/shared/components/ButtonCircularProgress.js":
/*!******************************************************************!*\
  !*** ./resources/js/shared/components/ButtonCircularProgress.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");




var styles = function styles(theme) {
  return {
    circularProgress: {
      color: theme.palette.secondary.main
    }
  };
};

function ButtonCircularProgress(props) {
  var size = props.size,
      classes = props.classes;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    color: "secondary.main",
    pl: 1.5,
    display: "flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CircularProgress"], {
    size: size ? size : 24,
    thickness: size ? size / 5 * 24 : 5,
    className: classes.circularProgress
  }));
}

ButtonCircularProgress.propTypes = {
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles, {
  withTheme: true
})(ButtonCircularProgress));

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

/***/ }),

/***/ "./resources/js/shared/components/HighlightedInformation.js":
/*!******************************************************************!*\
  !*** ./resources/js/shared/components/HighlightedInformation.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");





var styles = function styles(theme) {
  return {
    main: {
      backgroundColor: theme.palette.warning.light,
      border: "".concat(theme.border.borderWidth, "px solid ").concat(theme.palette.warning.main),
      padding: theme.spacing(2),
      borderRadius: theme.shape.borderRadius
    }
  };
};

function HighlighedInformation(props) {
  var className = props.className,
      children = props.children,
      classes = props.classes;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.main, className ? className : null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "body2"
  }, children));
}

HighlighedInformation.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array]).isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles, {
  withTheme: true
})(HighlighedInformation));

/***/ }),

/***/ "./resources/js/shared/components/ModalBackdrop.js":
/*!*********************************************************!*\
  !*** ./resources/js/shared/components/ModalBackdrop.js ***!
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



var styles = {
  backdrop: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1200,
    position: "fixed",
    touchAction: "none",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  }
};

function ModalBackdrop(props) {
  var classes = props.classes,
      open = props.open;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Backdrop"], {
    open: open,
    className: classes.backdrop
  });
}

ModalBackdrop.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  open: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(ModalBackdrop));

/***/ }),

/***/ "./resources/js/shared/components/NavigationDrawer.js":
/*!************************************************************!*\
  !*** ./resources/js/shared/components/NavigationDrawer.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4__);






var styles = function styles(theme) {
  return {
    closeIcon: {
      marginRight: theme.spacing(0.5)
    },
    headSection: {
      width: 200
    },
    blackList: {
      backgroundColor: theme.palette.common.black,
      height: "100%"
    },
    noDecoration: {
      textDecoration: "none !important"
    }
  };
};

function NavigationDrawer(props) {
  var width = props.width,
      open = props.open,
      onClose = props.onClose,
      anchor = props.anchor,
      classes = props.classes,
      menuItems = props.menuItems,
      selectedItem = props.selectedItem,
      theme = props.theme;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.onresize = function () {
      if (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["isWidthUp"])("sm", width) && open) {
        onClose();
      }
    };
  }, [width, open, onClose]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Drawer"], {
    variant: "temporary",
    open: open,
    onClose: onClose,
    anchor: anchor
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Toolbar"], {
    className: classes.headSection
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
    style: {
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(0),
      height: "100%",
      justifyContent: anchor === "left" ? "flex-start" : "flex-end"
    },
    disableGutters: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemIcon"], {
    className: classes.closeIcon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
    onClick: onClose,
    "aria-label": "Close Navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default.a, {
    color: "primary"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
    className: classes.blackList
  }, menuItems.map(function (element) {
    if (element.link) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        key: element.name,
        to: element.link,
        className: classes.noDecoration,
        onClick: onClose
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
        button: true,
        selected: selectedItem === element.name
        /**
         * We disable ripple as it will make a weird animation
         * with primary and secondary color
         */
        ,
        disableRipple: true,
        disableTouchRipple: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemIcon"], null, element.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
        primary: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
          variant: "subtitle1",
          className: "text-white"
        }, element.name)
      })));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
      button: true,
      key: element.name,
      onClick: element.onClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemIcon"], null, element.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
      primary: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
        variant: "subtitle1",
        className: "text-white"
      }, element.name)
    }));
  })));
}

NavigationDrawer.propTypes = {
  anchor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  open: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  menuItems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  selectedItem: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["withWidth"])()(Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles, {
  withTheme: true
})(NavigationDrawer)));

/***/ }),

/***/ "./resources/js/shared/components/PropsRoute.js":
/*!******************************************************!*\
  !*** ./resources/js/shared/components/PropsRoute.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var renderMergedProps = function renderMergedProps(component) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  var finalProps = Object.assign.apply(Object, [{}].concat(rest));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component, finalProps);
};
/**
 * Wrapper around the Router component, which makes it pass the properties
 * to it's child.
 * Taken from https://github.com/ReactTraining/react-router/issues/4105
 */


var PropsRoute = function PropsRoute(_ref) {
  var component = _ref.component,
      rest = _objectWithoutProperties(_ref, ["component"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], _extends({}, rest, {
    render: function render(routeProps) {
      return renderMergedProps(component, routeProps, rest);
    }
  }));
};

PropsRoute.propTypes = {
  component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node])
};
/* harmony default export */ __webpack_exports__["default"] = (PropsRoute);

/***/ }),

/***/ "./resources/js/shared/components/ShareButton.js":
/*!*******************************************************!*\
  !*** ./resources/js/shared/components/ShareButton.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _ColoredButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ColoredButton */ "./resources/js/shared/components/ColoredButton.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/**
 * Losely based on: https://sharingbuttons.io/
 */

function ShareButton(props) {
  var type = props.type,
      title = props.title,
      description = props.description,
      rest = _objectWithoutProperties(props, ["type", "title", "description"]);

  var site = window.location.href;
  title = encodeURIComponent(title);
  description = encodeURIComponent(description);

  switch (type) {
    case "Facebook":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ColoredButton__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
        color: "#3b5998",
        href: "https://facebook.com/sharer/sharer.php?u=".concat(site),
        startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["SvgIcon"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: "M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"
        }))
      }, rest), "Share on Facebook");

    case "Twitter":
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ColoredButton__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
          color: "#55acee",
          href: "https://twitter.com/intent/tweet/?text=".concat(description, "&amp;url=").concat(site),
          startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["SvgIcon"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
            d: "M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"
          }))
        }, rest), "Share on Twitter");
      }

    case "Tumblr":
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ColoredButton__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
          color: "#35465c",
          href: "https://www.tumblr.com/widgets/share/tool/preview?posttype=link&title=".concat(title, "&caption=").concat(description, "&content=").concat(site, "&canonicalUrl=").concat(site, "&shareSource=tumblr_share_button"),
          startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["SvgIcon"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
            d: "M13.5.5v5h5v4h-5V15c0 5 3.5 4.4 6 2.8v4.4c-6.7 3.2-12 0-12-4.2V9.5h-3V6.7c1-.3 2.2-.7 3-1.3.5-.5 1-1.2 1.4-2 .3-.7.6-1.7.7-3h3.8z"
          }))
        }, rest), "Share on Tumblr");
      }

    case "E-Mail":
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ColoredButton__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
          color: "#777",
          href: "mailto:?subject=".concat(title, "&amp;body=").concat(site),
          startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["SvgIcon"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
            d: "M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.25 14.43l-3.5 2c-.08.05-.17.07-.25.07-.17 0-.34-.1-.43-.25-.14-.24-.06-.55.18-.68l3.5-2c.24-.14.55-.06.68.18.14.24.06.55-.18.68zm4.75.07c-.1 0-.2-.03-.27-.08l-8.5-5.5c-.23-.15-.3-.46-.15-.7.15-.22.46-.3.7-.14L12 13.4l8.23-5.32c.23-.15.54-.08.7.15.14.23.07.54-.16.7l-8.5 5.5c-.08.04-.17.07-.27.07zm8.93 1.75c-.1.16-.26.25-.43.25-.08 0-.17-.02-.25-.07l-3.5-2c-.24-.13-.32-.44-.18-.68s.44-.32.68-.18l3.5 2c.24.13.32.44.18.68z"
          }))
        }, rest), "Share by E-Mail");
      }

    case "Pinterest":
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ColoredButton__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
          color: "#bd081c",
          href: "https://pinterest.com/pin/create/button/?url=".concat(site, "&amp;media=").concat(site, "&amp;description=").concat(description),
          startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["SvgIcon"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
            d: "M12.14.5C5.86.5 2.7 5 2.7 8.75c0 2.27.86 4.3 2.7 5.05.3.12.57 0 .66-.33l.27-1.06c.1-.32.06-.44-.2-.73-.52-.62-.86-1.44-.86-2.6 0-3.33 2.5-6.32 6.5-6.32 3.55 0 5.5 2.17 5.5 5.07 0 3.8-1.7 7.02-4.2 7.02-1.37 0-2.4-1.14-2.07-2.54.4-1.68 1.16-3.48 1.16-4.7 0-1.07-.58-1.98-1.78-1.98-1.4 0-2.55 1.47-2.55 3.42 0 1.25.43 2.1.43 2.1l-1.7 7.2c-.5 2.13-.08 4.75-.04 5 .02.17.22.2.3.1.14-.18 1.82-2.26 2.4-4.33.16-.58.93-3.63.93-3.63.45.88 1.8 1.65 3.22 1.65 4.25 0 7.13-3.87 7.13-9.05C20.5 4.15 17.18.5 12.14.5z"
          }))
        }, rest), "Share on Pinterest");
      }

    case "LinkedIn":
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ColoredButton__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
          color: "#0077b5",
          href: "https://www.linkedin.com/shareArticle?mini=true&amp;url=".concat(site, "&amp;title=").concat(title, "&amp;summary=").concat(description, "&amp;source=").concat(site),
          startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["SvgIcon"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
            d: "M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z"
          }))
        }, rest), "Share on LinkedIn");
      }

    case "Reddit":
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ColoredButton__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
          color: "#5f99cf",
          href: "https://reddit.com/submit/?url=".concat(site, "&amp;resubmit=true&amp;&title=").concat(title),
          startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["SvgIcon"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
            d: "M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.75-1.64-6.07-1.72.08-1.1.4-3.05 1.52-3.7.72-.4 1.73-.24 3 .5C17.2 6.3 18.46 7.5 20 7.5c1.65 0 3-1.35 3-3s-1.35-3-3-3c-1.38 0-2.54.94-2.88 2.22-1.43-.72-2.64-.8-3.6-.25-1.64.94-1.95 3.47-2 4.55-2.33.08-4.45.7-6.1 1.72C4.86 8.98 3.96 8.5 3 8.5c-1.65 0-3 1.35-3 3 0 1.32.84 2.44 2.05 2.84-.03.22-.05.44-.05.66 0 3.86 4.5 7 10 7s10-3.14 10-7c0-.22-.02-.44-.05-.66 1.2-.4 2.05-1.54 2.05-2.84zM2.3 13.37C1.5 13.07 1 12.35 1 11.5c0-1.1.9-2 2-2 .64 0 1.22.32 1.6.82-1.1.85-1.92 1.9-2.3 3.05zm3.7.13c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9.8 4.8c-1.08.63-2.42.96-3.8.96-1.4 0-2.74-.34-3.8-.95-.24-.13-.32-.44-.2-.68.15-.24.46-.32.7-.18 1.83 1.06 4.76 1.06 6.6 0 .23-.13.53-.05.67.2.14.23.06.54-.18.67zm.2-2.8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5.7-2.13c-.38-1.16-1.2-2.2-2.3-3.05.38-.5.97-.82 1.6-.82 1.1 0 2 .9 2 2 0 .84-.53 1.57-1.3 1.87z"
          }))
        }, rest), "Share on Reddit");
      }

    case "XING":
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ColoredButton__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
          color: "#1a7576",
          href: "https://www.xing.com/app/user?op=share;url=".concat(site, ";title=").concat(description),
          startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["SvgIcon"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
            d: "M10.2 9.7l-3-5.4C7.2 4 7 4 6.8 4h-5c-.3 0-.4 0-.5.2v.5L4 10 .4 16v.5c0 .2.2.3.4.3h5c.3 0 .4 0 .5-.2l4-6.6v-.5zM24 .2l-.5-.2H18s-.2 0-.3.3l-8 14v.4l5.2 9c0 .2 0 .3.3.3h5.4s.3 0 .4-.2c.2-.2.2-.4 0-.5l-5-8.8L24 .7V.2z"
          }))
        }, rest), "Share on XING");
      }

    case "WhatsApp":
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ColoredButton__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
          color: "#25d366",
          href: "whatsapp://send?text=".concat(description),
          startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["SvgIcon"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
            d: "M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z"
          }))
        }, rest), "Share on WhatsApp");
      }

    case "Hacker News":
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ColoredButton__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
          color: "#ff6600",
          href: "https://news.ycombinator.com/submitlink?u=".concat(site, "&amp;&t=").concat(description),
          startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["SvgIcon"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
            "fill-rule": "evenodd",
            d: "M60.94 82.314L17 0h20.08l25.85 52.093c.397.927.86 1.888 1.39 2.883.53.994.995 2.02 1.393 3.08.265.4.463.764.596 1.095.13.334.262.63.395.898.662 1.325 1.26 2.618 1.79 3.877.53 1.26.993 2.42 1.39 3.48 1.06-2.254 2.22-4.673 3.48-7.258 1.26-2.585 2.552-5.27 3.877-8.052L103.49 0h18.69L77.84 83.308v53.087h-16.9v-54.08z"
          }))
        }, rest), "Share on Hacker News");
      }

    case "VK":
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ColoredButton__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
          color: "#507299",
          href: "https://vk.com/share.php?title=".concat(description, "&amp;&url=").concat(site),
          startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["SvgIcon"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
            d: "M21.547 7h-3.29a.743.743 0 0 0-.655.392s-1.312 2.416-1.734 3.23C14.734 12.813 14 12.126 14 11.11V7.603A1.104 1.104 0 0 0 12.896 6.5h-2.474a1.982 1.982 0 0 0-1.75.813s1.255-.204 1.255 1.49c0 .42.022 1.626.04 2.64a.73.73 0 0 1-1.272.503 21.54 21.54 0 0 1-2.498-4.543.693.693 0 0 0-.63-.403h-2.99a.508.508 0 0 0-.48.685C3.005 10.175 6.918 18 11.38 18h1.878a.742.742 0 0 0 .742-.742v-1.135a.73.73 0 0 1 1.23-.53l2.247 2.112a1.09 1.09 0 0 0 .746.295h2.953c1.424 0 1.424-.988.647-1.753-.546-.538-2.518-2.617-2.518-2.617a1.02 1.02 0 0 1-.078-1.323c.637-.84 1.68-2.212 2.122-2.8.603-.804 1.697-2.507.197-2.507z"
          }))
        }, rest), "Share on VK");
      }

    case "Telegram":
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ColoredButton__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
          color: "#54A9EB",
          href: "https://telegram.me/share/url?text=".concat(description, "&amp;&url=").concat(site),
          startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["SvgIcon"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
            d: "M.707 8.475C.275 8.64 0 9.508 0 9.508s.284.867.718 1.03l5.09 1.897 1.986 6.38a1.102 1.102 0 0 0 1.75.527l2.96-2.41a.405.405 0 0 1 .494-.013l5.34 3.87a1.1 1.1 0 0 0 1.046.135 1.1 1.1 0 0 0 .682-.803l3.91-18.795A1.102 1.102 0 0 0 22.5.075L.706 8.475z"
          }))
        }, rest), "Share on Telegram");
      }

    default:
      {
        throw new Error("No branch taken in switch-statement: ".concat(type, " is not a valid type."));
      }
  }
}

ShareButton.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ShareButton);

/***/ }),

/***/ "./resources/js/shared/components/VisibilityPasswordTextField.js":
/*!***********************************************************************!*\
  !*** ./resources/js/shared/components/VisibilityPasswordTextField.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "./node_modules/@material-ui/icons/Visibility.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ "./node_modules/@material-ui/icons/VisibilityOff.js");
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function VisibilityPasswordTextField(props) {
  var isVisible = props.isVisible,
      onVisibilityChange = props.onVisibilityChange,
      rest = _objectWithoutProperties(props, ["isVisible", "onVisibilityChange"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], _extends({}, rest, {
    type: isVisible ? "text" : "password",
    InputProps: {
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputAdornment"], {
        position: "end"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
        "aria-label": "Toggle password visibility",
        onClick: function onClick() {
          onVisibilityChange(!isVisible);
        },
        onMouseDown: function onMouseDown(event) {
          event.preventDefault();
        }
      }, isVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_2___default.a, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_3___default.a, null)))
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (VisibilityPasswordTextField);

/***/ }),

/***/ "./resources/js/shared/components/WaveBorder.js":
/*!******************************************************!*\
  !*** ./resources/js/shared/components/WaveBorder.js ***!
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
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var styles = {
  waves: {
    position: "relative",
    width: "100%",
    marginBottom: -7,
    height: "7vw",
    minHeight: "7vw"
  },
  "@keyframes moveForever": {
    from: {
      transform: "translate3d(-90px, 0, 0)"
    },
    to: {
      transform: "translate3d(85px, 0, 0)"
    }
  },
  parallax: {
    "& > use": {
      animation: "$moveForever 4s cubic-bezier(0.62, 0.5, 0.38, 0.5) infinite",
      animationDelay: function animationDelay(props) {
        return "-".concat(props.animationNegativeDelay, "s");
      }
    }
  }
};
/**
 *  https://codepen.io/csspoints/pen/WNeOEqd
 */

function WaveBorder(props) {
  var id = String(Math.random());

  var className = props.className,
      lowerColor = props.lowerColor,
      upperColor = props.upperColor,
      classes = props.classes,
      animationNegativeDelay = props.animationNegativeDelay,
      rest = _objectWithoutProperties(props, ["className", "lowerColor", "upperColor", "classes", "animationNegativeDelay"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: className,
    style: {
      background: upperColor
    }
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: classes.waves,
    xmlns: "http://www.w3.org/2000/svg",
    xlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 24 150 28",
    preserveAspectRatio: "none",
    shapeRendering: "auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: id,
    d: "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    className: classes.parallax
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    href: "#".concat(id),
    x: "48",
    y: "0",
    fill: lowerColor
  }))));
}

WaveBorder.propTypes = {
  lowerColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  upperColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  animationNegativeDelay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(WaveBorder));

/***/ }),

/***/ "./resources/js/shared/components/ZoomImage.js":
/*!*****************************************************!*\
  !*** ./resources/js/shared/components/ZoomImage.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Tabs_ScrollbarSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Tabs/ScrollbarSize */ "./node_modules/@material-ui/core/Tabs/ScrollbarSize.js");
/* harmony import */ var _material_ui_core_Tabs_ScrollbarSize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs_ScrollbarSize__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var styles = function styles(theme) {
  return {
    backdrop: {
      zIndex: theme.zIndex.modal,
      backgroundColor: "rgba(0, 0, 0, 0.8)"
    },
    portalImgWrapper: {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      zIndex: theme.zIndex.modal,
      cursor: "pointer"
    },
    portalImgInnerWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    portalImg: {
      objectFit: "contain",
      maxWidth: "100%",
      maxHeight: "100%"
    }
  };
};

function ZoomImage(props) {
  var alt = props.alt,
      src = props.src,
      zoomedImgProps = props.zoomedImgProps,
      classes = props.classes,
      rest = _objectWithoutProperties(props, ["alt", "src", "zoomedImgProps", "classes"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      zoomedIn = _useState2[0],
      setZoomedIn = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      scrollbarSize = _useState4[0],
      setScrollbarSize = _useState4[1];

  var zoomIn = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setZoomedIn(true);
  }, [setZoomedIn]);
  var zoomOut = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setZoomedIn(false);
  }, [setZoomedIn]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (zoomedIn) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "".concat(scrollbarSize, "px");
      document.querySelector("header").style.paddingRight = "".concat(scrollbarSize, "px");
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
      document.querySelector("header").style.paddingRight = "0px";
    }
  }, [zoomedIn, scrollbarSize]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tabs_ScrollbarSize__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onChange: setScrollbarSize
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Backdrop"], {
    open: zoomedIn,
    className: classes.backdrop,
    onClick: zoomOut
  }), zoomedIn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Portal"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: zoomOut,
    className: classes.portalImgWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.portalImgInnerWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", _extends({
    alt: alt,
    src: src,
    className: classes.portalImg
  }, zoomedImgProps))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", _extends({
    alt: alt,
    src: src,
    onClick: zoomIn,
    style: {
      cursor: "pointer"
    }
  }, rest)));
}

ZoomImage.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  zoomedImgProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles, {
  withTheme: true
})(ZoomImage));

/***/ }),

/***/ "./resources/js/shared/functions/smoothScrollTop.js":
/*!**********************************************************!*\
  !*** ./resources/js/shared/functions/smoothScrollTop.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * When called scrolls smooth to the top of the page.
 * globLastC prevents shaky animations when scrolling to
 * bottom while topscrolling.
 */
var globLastC = Infinity;

function smoothScrollTopRec() {
  var c = document.documentElement.scrollTop || document.body.scrollTop;

  if (c > 0 && globLastC > c) {
    globLastC = c;
    window.requestAnimationFrame(smoothScrollTopRec);
    window.scrollTo(0, c - c / 8);
  } else {
    globLastC = Infinity;
  }
}

function smoothScrollTop() {
  /**
   * Normally this gets called from componentDidMount()
   * Not waiting a tiny fraction of time can lead
   * to shaky behaviour
   */
  setTimeout(function () {
    smoothScrollTopRec();
  }, 10);
}

/* harmony default export */ __webpack_exports__["default"] = (smoothScrollTop);

/***/ }),

/***/ "./resources/js/standard/components/Main.js":
/*!**************************************************!*\
  !*** ./resources/js/standard/components/Main.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aos_dist_aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos/dist/aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos_dist_aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _navigation_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/NavBar */ "./resources/js/standard/components/navigation/NavBar.js");
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/Footer */ "./resources/js/standard/components/footer/Footer.js");
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _cookies_CookieRulesDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cookies/CookieRulesDialog */ "./resources/js/standard/components/cookies/CookieRulesDialog.js");
/* harmony import */ var _cookies_CookieConsent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cookies/CookieConsent */ "./resources/js/standard/components/cookies/CookieConsent.js");
/* harmony import */ var _dummy_data_blogPosts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dummy_data/blogPosts */ "./resources/js/standard/dummy_data/blogPosts.js");
/* harmony import */ var _register_login_DialogSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register_login/DialogSelector */ "./resources/js/standard/components/register_login/DialogSelector.js");
/* harmony import */ var _Routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Routing */ "./resources/js/standard/components/Routing.js");
/* harmony import */ var _shared_functions_smoothScrollTop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/functions/smoothScrollTop */ "./resources/js/shared/functions/smoothScrollTop.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
















aos_dist_aos__WEBPACK_IMPORTED_MODULE_2___default.a.init({
  once: true
});

var styles = function styles(theme) {
  return {
    wrapper: {
      backgroundColor: theme.palette.common.white,
      overflowX: "hidden"
    }
  };
};

var Alert = function Alert(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_13__["default"], _extends({
    elevation: 6,
    variant: "filled"
  }, props));
};

function Main(props) {
  var classes = props.classes;

  var _useSnackbar = Object(notistack__WEBPACK_IMPORTED_MODULE_14__["useSnackbar"])(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      selectedTab = _useState2[0],
      setSelectedTab = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isMobileDrawerOpen = _useState4[0],
      setIsMobileDrawerOpen = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      blogPosts = _useState6[0],
      setBlogPosts = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState8 = _slicedToArray(_useState7, 2),
      dialogOpen = _useState8[0],
      setDialogOpen = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isCookieRulesDialogOpen = _useState10[0],
      setIsCookieRulesDialogOpen = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState12 = _slicedToArray(_useState11, 2),
      user = _useState12[0],
      setUser = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState14 = _slicedToArray(_useState13, 2),
      isLoggedIn = _useState14[0],
      setIsLoggedIn = _useState14[1];

  var selectHome = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    Object(_shared_functions_smoothScrollTop__WEBPACK_IMPORTED_MODULE_12__["default"])();
    setSelectedTab("Home");
  }, [setSelectedTab]);
  var selectBlog = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    Object(_shared_functions_smoothScrollTop__WEBPACK_IMPORTED_MODULE_12__["default"])();
    setSelectedTab("Blog");
  }, [setSelectedTab]);
  var openLoginDialog = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setDialogOpen("login");
    setIsMobileDrawerOpen(false);
  }, [setDialogOpen, setIsMobileDrawerOpen]);
  var closeDialog = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setDialogOpen(null);
  }, [setDialogOpen]);
  var openRegisterDialog = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setDialogOpen("register");
    setIsMobileDrawerOpen(false);
  }, [setDialogOpen, setIsMobileDrawerOpen]);
  var openTermsDialog = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setDialogOpen("termsOfService");
  }, [setDialogOpen]);
  var handleMobileDrawerOpen = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsMobileDrawerOpen(true);
  }, [setIsMobileDrawerOpen]);
  var handleMobileDrawerClose = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsMobileDrawerOpen(false);
  }, [setIsMobileDrawerOpen]);
  var openChangePasswordDialog = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setDialogOpen("changePassword");
  }, [setDialogOpen]);
  var handleCookieRulesDialogOpen = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsCookieRulesDialogOpen(true);
  }, [setIsCookieRulesDialogOpen]);
  var handleCookieRulesDialogClose = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsCookieRulesDialogOpen(false);
  }, [setIsCookieRulesDialogOpen]);
  var getUserData = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    axios.get('/api/user').then(function (res) {
      setUser(res.data);
      setIsLoggedIn(true);
    })["catch"](function () {
      setUser(null);
      setIsLoggedIn(false);
    });
    ;
  }, [setUser, setIsLoggedIn]);
  var logoutUser = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    axios.post("/logout").then(function () {
      window.location.reload();
    })["catch"](function () {
      enqueueSnackbar('Something went wrong!', {
        variant: 'error'
      });
    });
  });
  var sendVerificationMail = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    axios.post('/email/resend').then(function () {
      enqueueSnackbar('Successfully sent mail!', {
        variant: 'success'
      });
    })["catch"](function () {
      enqueueSnackbar('Something went wrong!', {
        variant: 'error'
      });
    });
  });
  var onChangePasswordMailSentSuccess = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    enqueueSnackbar('Mail will be sent in 5 minutes. Please check your mailbox.', {
      variant: 'success'
    });
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getUserData();
  }, [getUserData]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Snackbar"], {
    open: isLoggedIn && user.email_verified_at === null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Alert, {
    severity: "error"
  }, "You haven't verified your email. Please check your email for a verification link. If you did not receive the email, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    style: {
      color: 'white'
    },
    onClick: sendVerificationMail
  }, "click here to request another"), ". Please check your spam folders too.")), !isCookieRulesDialogOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cookies_CookieConsent__WEBPACK_IMPORTED_MODULE_8__["default"], {
    handleCookieRulesDialogOpen: handleCookieRulesDialogOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_register_login_DialogSelector__WEBPACK_IMPORTED_MODULE_10__["default"], {
    openLoginDialog: openLoginDialog,
    dialogOpen: dialogOpen,
    onClose: closeDialog,
    openTermsDialog: openTermsDialog,
    openRegisterDialog: openRegisterDialog,
    openChangePasswordDialog: openChangePasswordDialog,
    onChangePasswordMailSentSuccess: onChangePasswordMailSentSuccess
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cookies_CookieRulesDialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: isCookieRulesDialogOpen,
    onClose: handleCookieRulesDialogClose
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navigation_NavBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selectedTab: selectedTab,
    openLoginDialog: openLoginDialog,
    openRegisterDialog: openRegisterDialog,
    onChangePasswordMailSentSuccess: onChangePasswordMailSentSuccess,
    mobileDrawerOpen: isMobileDrawerOpen,
    handleMobileDrawerOpen: handleMobileDrawerOpen,
    handleMobileDrawerClose: handleMobileDrawerClose,
    isLoggedIn: isLoggedIn,
    userData: user,
    handleUserData: setUser,
    handleUserLogout: logoutUser
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Routing__WEBPACK_IMPORTED_MODULE_11__["default"], {
    blogPosts: blogPosts,
    selectHome: selectHome,
    selectBlog: selectBlog
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null));
}

Main.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles, {
  withTheme: true
})( /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(Main)));

/***/ }),

/***/ "./resources/js/standard/components/Routing.js":
/*!*****************************************************!*\
  !*** ./resources/js/standard/components/Routing.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _shared_components_PropsRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/PropsRoute */ "./resources/js/shared/components/PropsRoute.js");
/* harmony import */ var _home_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/Home */ "./resources/js/standard/components/home/Home.js");
/* harmony import */ var _blog_Blog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog/Blog */ "./resources/js/standard/components/blog/Blog.js");
/* harmony import */ var _blog_BlogPost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog/BlogPost */ "./resources/js/standard/components/blog/BlogPost.js");








function Routing(props) {
  var blogPosts = props.blogPosts,
      selectBlog = props.selectBlog,
      selectHome = props.selectHome;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, blogPosts.map(function (post) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_PropsRoute__WEBPACK_IMPORTED_MODULE_3__["default"]
    /* We cannot use the url here as it contains the get params */
    , {
      path: post.url,
      component: _blog_BlogPost__WEBPACK_IMPORTED_MODULE_6__["default"],
      title: post.title,
      key: post.title,
      src: post.imageSrc,
      date: post.date,
      content: post.content,
      otherArticles: blogPosts.filter(function (blogPost) {
        return blogPost.id !== post.id;
      })
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_PropsRoute__WEBPACK_IMPORTED_MODULE_3__["default"], {
    exact: true,
    path: "/blog",
    component: _blog_Blog__WEBPACK_IMPORTED_MODULE_5__["default"],
    selectBlog: selectBlog,
    blogPosts: blogPosts
  }), ")", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_PropsRoute__WEBPACK_IMPORTED_MODULE_3__["default"], {
    path: "/",
    component: _home_Home__WEBPACK_IMPORTED_MODULE_4__["default"],
    selectHome: selectHome
  }), ")");
}

Routing.propTypes = {
  blogposts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
  selectHome: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  selectBlog: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(Routing));

/***/ }),

/***/ "./resources/js/standard/components/blog/Blog.js":
/*!*******************************************************!*\
  !*** ./resources/js/standard/components/blog/Blog.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _BlogCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BlogCard */ "./resources/js/standard/components/blog/BlogCard.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var styles = function styles(theme) {
  var _blogContentWrapper;

  return {
    blogContentWrapper: (_blogContentWrapper = {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    }, _defineProperty(_blogContentWrapper, theme.breakpoints.up("sm"), {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4)
    }), _defineProperty(_blogContentWrapper, "maxWidth", 1280), _defineProperty(_blogContentWrapper, "width", "100%"), _blogContentWrapper),
    wrapper: {
      minHeight: "60vh"
    },
    noDecoration: {
      textDecoration: "none !important"
    }
  };
};

function getVerticalBlogPosts(width, blogPosts) {
  var gridRows = [[], [], []];
  var rows;
  var xs;

  if (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["isWidthUp"])("md", width)) {
    rows = 3;
    xs = 4;
  } else if (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["isWidthUp"])("sm", width)) {
    rows = 2;
    xs = 6;
  } else {
    rows = 1;
    xs = 12;
  }

  blogPosts.forEach(function (blogPost, index) {
    gridRows[index % rows].push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      key: blogPost.id,
      item: true,
      xs: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      mb: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BlogCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      src: blogPost.imageSrc,
      title: blogPost.title,
      snippet: blogPost.snippet,
      date: blogPost.date,
      url: blogPost.url
    }))));
  });
  return gridRows.map(function (element, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      key: index,
      item: true,
      xs: xs
    }, element);
  });
}

function Blog(props) {
  var classes = props.classes,
      width = props.width,
      blogPosts = props.blogPosts,
      selectBlog = props.selectBlog;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    selectBlog();
  }, [selectBlog]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    display: "flex",
    justifyContent: "center",
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.wrapper, "lg-p-top")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.blogContentWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    spacing: 3
  }, getVerticalBlogPosts(width, blogPosts))));
}

Blog.propTypes = {
  selectBlog: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  blogposts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["withWidth"])()(Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles, {
  withTheme: true
})(Blog)));

/***/ }),

/***/ "./resources/js/standard/components/blog/BlogCard.js":
/*!***********************************************************!*\
  !*** ./resources/js/standard/components/blog/BlogCard.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");







var styles = function styles(theme) {
  return {
    img: {
      width: "100%",
      height: "auto",
      marginBottom: 8
    },
    card: {
      boxShadow: theme.shadows[2]
    },
    noDecoration: {
      textDecoration: "none !important"
    },
    title: {
      transition: theme.transitions.create(["background-color"], {
        duration: theme.transitions.duration.complex,
        easing: theme.transitions.easing.easeInOut
      }),
      cursor: "pointer",
      color: theme.palette.secondary.main,
      "&:hover": {
        color: theme.palette.secondary.dark
      },
      "&:active": {
        color: theme.palette.primary.dark
      }
    },
    link: {
      transition: theme.transitions.create(["background-color"], {
        duration: theme.transitions.duration.complex,
        easing: theme.transitions.easing.easeInOut
      }),
      cursor: "pointer",
      color: theme.palette.primary.main,
      "&:hover": {
        color: theme.palette.primary.dark
      }
    },
    showFocus: {
      "&:focus span": {
        color: theme.palette.secondary.dark
      }
    }
  };
};

function BlogCard(props) {
  var classes = props.classes,
      url = props.url,
      src = props.src,
      date = props.date,
      title = props.title,
      snippet = props.snippet;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Card"], {
    className: classes.card
  }, src && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: url,
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: src,
    className: classes.img,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    p: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "body2",
    color: "textSecondary"
  }, Object(date_fns_format__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(date * 1000), "PPP", {
    awareOfUnicodeTokens: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: url,
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.noDecoration, classes.showFocus)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "h6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.title
  }, title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "body1",
    color: "textSecondary"
  }, snippet, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: url,
    className: classes.noDecoration,
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.link
  }, " read more...")))));
}

BlogCard.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  snippet: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles, {
  withTheme: true
})(BlogCard));

/***/ }),

/***/ "./resources/js/standard/components/blog/BlogPost.js":
/*!***********************************************************!*\
  !*** ./resources/js/standard/components/blog/BlogPost.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _BlogCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BlogCard */ "./resources/js/standard/components/blog/BlogCard.js");
/* harmony import */ var _shared_components_ShareButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/ShareButton */ "./resources/js/shared/components/ShareButton.js");
/* harmony import */ var _shared_components_ZoomImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/ZoomImage */ "./resources/js/shared/components/ZoomImage.js");
/* harmony import */ var _shared_functions_smoothScrollTop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/functions/smoothScrollTop */ "./resources/js/shared/functions/smoothScrollTop.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var styles = function styles(theme) {
  var _blogContentWrapper;

  return {
    blogContentWrapper: (_blogContentWrapper = {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    }, _defineProperty(_blogContentWrapper, theme.breakpoints.up("sm"), {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4)
    }), _defineProperty(_blogContentWrapper, "maxWidth", 1280), _defineProperty(_blogContentWrapper, "width", "100%"), _blogContentWrapper),
    wrapper: {
      minHeight: "60vh"
    },
    img: {
      width: "100%",
      height: "auto"
    },
    card: {
      boxShadow: theme.shadows[4]
    }
  };
};

function BlogPost(props) {
  var classes = props.classes,
      date = props.date,
      title = props.title,
      src = props.src,
      content = props.content,
      otherArticles = props.otherArticles;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.title = "WaVer - ".concat(title);
    Object(_shared_functions_smoothScrollTop__WEBPACK_IMPORTED_MODULE_8__["default"])();
  }, [title]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("lg-p-top", classes.wrapper),
    display: "flex",
    justifyContent: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.blogContentWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    md: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    className: classes.card
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    pt: 3,
    pr: 3,
    pl: 3,
    pb: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "body1",
    color: "textSecondary"
  }, Object(date_fns_format__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(date * 1000), "PPP", {
    awareOfUnicodeTokens: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_ZoomImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.img,
    src: src,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    p: 3
  }, content, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    pt: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    spacing: 1,
    container: true
  }, ["Facebook", "Twitter", "Reddit", "Tumblr"].map(function (type, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      item: true,
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_ShareButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
      type: type,
      title: "React SaaS Template",
      description: "I found an awesome template for an webapp using React!",
      disableElevation: true,
      variant: "contained",
      className: "text-white",
      classes: {
        label: "text-white"
      }
    }));
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h6",
    paragraph: true
  }, "Other arcticles"), otherArticles.map(function (blogPost) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      key: blogPost.id,
      mb: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BlogCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: blogPost.title,
      snippet: blogPost.snippet,
      date: blogPost.date,
      url: "".concat(blogPost.url).concat(blogPost.params)
    }));
  })))));
}

BlogPost.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  otherArticles: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles, {
  withTheme: true
})(BlogPost));

/***/ }),

/***/ "./resources/js/standard/components/cookies/CookieConsent.js":
/*!*******************************************************************!*\
  !*** ./resources/js/standard/components/cookies/CookieConsent.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _fetchIpData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetchIpData */ "./resources/js/standard/components/cookies/fetchIpData.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var styles = function styles(theme) {
  return {
    snackbarContent: {
      borderBotttomLeftRadius: 0,
      borderBottomRightRadius: 0,
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }
  };
};

var europeanCountryCodes = ["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PO", "PT", "RO", "SE", "SI", "SK"];

function CookieConsent(props) {
  var classes = props.classes,
      handleCookieRulesDialogOpen = props.handleCookieRulesDialogOpen;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isVisible = _useState2[0],
      setIsVisible = _useState2[1];

  var openOnEuCountry = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    _fetchIpData__WEBPACK_IMPORTED_MODULE_4__["default"].then(function (data) {
      if (data && data.country && !europeanCountryCodes.includes(data.country)) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    })["catch"](function () {
      setIsVisible(true);
    });
  }, [setIsVisible]);
  /**
   * Set a persistent cookie
   */

  var onAccept = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set("remember-cookie-snackbar", "", {
      expires: 365
    });
    setIsVisible(false);
  }, [setIsVisible]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("remember-cookie-snackbar") === undefined) {
      openOnEuCountry();
    }
  }, [openOnEuCountry]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Snackbar"], {
    className: classes.snackbarContent,
    open: isVisible,
    message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      className: "text-white"
    }, "We use cookies to ensure you get the best experience on our website.", " "),
    action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      mr: 1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      color: "primary",
      onClick: handleCookieRulesDialogOpen
    }, "More details")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      color: "primary",
      onClick: onAccept
    }, "Got it!"))
  });
}

CookieConsent.propTypes = {
  handleCookieRulesDialogOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles, {
  withTheme: true
})(CookieConsent));

/***/ }),

/***/ "./resources/js/standard/components/cookies/CookieRulesDialog.js":
/*!***********************************************************************!*\
  !*** ./resources/js/standard/components/cookies/CookieRulesDialog.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "./node_modules/@material-ui/icons/ArrowBack.js");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_components_ColoredButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/ColoredButton */ "./resources/js/shared/components/ColoredButton.js");






var styles = function styles(theme) {
  return {
    dialogActions: {
      justifyContent: "flex-start",
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    dialog: {
      zIndex: 1400
    },
    backIcon: {
      marginRight: theme.spacing(1)
    }
  };
};

function CookieRulesDialog(props) {
  var classes = props.classes,
      onClose = props.onClose,
      open = props.open,
      theme = props.theme;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Dialog"], {
    open: open,
    scroll: "paper",
    onClose: onClose,
    className: classes.dialog
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogTitle"], null, "Our Cookie Policy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    color: "primary",
    paragraph: true
  }, "What Are Cookies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true
  }, "As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality. For more general information on cookies see the Wikipedia article on HTTP Cookies."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    color: "primary",
    paragraph: true
  }, "How We Use Cookies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true
  }, "We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    color: "primary",
    paragraph: true
  }, "Disabling Cookies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true
  }, "You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    color: "primary",
    paragraph: true
  }, "The Cookies We Set"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true
  }, "Account related cookies:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true
  }, "If you create an account with us then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out however in some cases they may remain afterwards to remember your site preferences when logged out. We use cookies to remember that you accepted this message."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true
  }, "Login related cookies:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true
  }, "We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true
  }, "Site preferences cookies:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true
  }, "In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    color: "primary",
    paragraph: true
  }, "Third Party Cookies:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true
  }, "In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true
  }, "Third party analytics are used to track and measure usage of this site so that we can continue to produce engaging content. These cookies may track things such as how long you spend on the site or pages you visit which helps us to understand how we can improve the site for you."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    color: "primary",
    paragraph: true
  }, "More Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true
  }, "Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site. This Cookies Policy was created with the help of the Cookies Policy Template Generator and the Terms and Conditions Template."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true
  }, "However if you are still looking for more information then you can contact us by sending an email to tim.v.kaenel@gmail.com.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogActions"], {
    className: classes.dialogActions
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_ColoredButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: onClose,
    variant: "contained",
    color: theme.palette.common.black
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.backIcon
  }), "Back")));
}

CookieRulesDialog.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  open: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles, {
  withTheme: true
})(CookieRulesDialog));

/***/ }),

/***/ "./resources/js/standard/components/cookies/fetchIpData.js":
/*!*****************************************************************!*\
  !*** ./resources/js/standard/components/cookies/fetchIpData.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var fetchIpData = new Promise(function (resolve, reject) {
  var ajax = new XMLHttpRequest();

  if (window.location.href.includes("localhost")) {
    /**
     *  Resolve with dummydata, GET call will be rejected,
     *  since ipinfos server is configured that way
     */
    resolve({
      data: {
        country: "DE"
      }
    });
    return;
  }

  ajax.open("GET", "https://ipinfo.io/json");

  ajax.onload = function () {
    var response = JSON.parse(ajax.responseText);

    if (response) {
      resolve(response);
    } else {
      reject();
    }
  };

  ajax.onerror = reject;
  ajax.send();
});
/* harmony default export */ __webpack_exports__["default"] = (fetchIpData);

/***/ }),

/***/ "./resources/js/standard/components/footer/Footer.js":
/*!***********************************************************!*\
  !*** ./resources/js/standard/components/footer/Footer.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Phone */ "./node_modules/@material-ui/icons/Phone.js");
/* harmony import */ var _material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_components_WaveBorder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/WaveBorder */ "./resources/js/shared/components/WaveBorder.js");
/* harmony import */ var _material_ui_core_styles_transitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles/transitions */ "./node_modules/@material-ui/core/styles/transitions.js");
/* harmony import */ var _material_ui_core_styles_transitions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_transitions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_components_ColoredButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/ColoredButton */ "./resources/js/shared/components/ColoredButton.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var styles = function styles(theme) {
  var _footerInner;

  return {
    footerInner: (_footerInner = {
      backgroundColor: theme.palette.common.darkBlack,
      paddingTop: theme.spacing(8),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingBottom: theme.spacing(6)
    }, _defineProperty(_footerInner, theme.breakpoints.up("sm"), {
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(16),
      paddingRight: theme.spacing(16),
      paddingBottom: theme.spacing(10)
    }), _defineProperty(_footerInner, theme.breakpoints.up("md"), {
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
      paddingBottom: theme.spacing(10)
    }), _footerInner),
    brandText: {
      fontFamily: "'Baloo Bhaijaan', cursive",
      fontWeight: 400,
      color: theme.palette.common.white
    },
    footerLinks: {
      marginTop: theme.spacing(2.5),
      marginBot: theme.spacing(1.5),
      color: theme.palette.common.white
    },
    infoIcon: {
      color: "".concat(theme.palette.common.white, " !important"),
      backgroundColor: "#33383b !important"
    },
    socialIcon: {
      fill: theme.palette.common.white,
      backgroundColor: "#33383b",
      borderRadius: theme.shape.borderRadius,
      "&:hover": {
        backgroundColor: theme.palette.primary.light
      }
    },
    link: {
      cursor: "Pointer",
      color: theme.palette.common.white,
      transition: _material_ui_core_styles_transitions__WEBPACK_IMPORTED_MODULE_6___default.a.create(["color"], {
        duration: theme.transitions.duration.shortest,
        easing: theme.transitions.easing.easeIn
      }),
      "&:hover": {
        color: theme.palette.primary.light
      }
    },
    whiteBg: {
      backgroundColor: theme.palette.common.white
    }
  };
};

var infos = [{
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_3___default.a, null),
  description: "+1 555 123456"
}, {
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_4___default.a, null),
  description: "support@company.com"
}];
var socialIcons = [{
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    role: "img",
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "GitHub"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
  })),
  label: "Github",
  href: "https://github.com/dunky11/react-saas-template"
}, {
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    role: "img",
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Facebook"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"
  })),
  label: "Facebook",
  href: "https://facebook.com"
}, {
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    role: "img",
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "LinkedIn"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  })),
  label: "LinkedIn",
  href: "https://www.linkedin.com/"
}, {
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    role: "img",
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Twitter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
  })),
  label: "Twitter",
  href: "https://www.twitter.com/"
}];

function Footer(props) {
  var classes = props.classes,
      theme = props.theme,
      width = props.width;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "lg-p-top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_WaveBorder__WEBPACK_IMPORTED_MODULE_5__["default"], {
    upperColor: "#FFFFFF",
    lowerColor: theme.palette.common.darkBlack,
    animationNegativeDelay: 4
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.footerInner
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["isWidthUp"])("md", width) ? 10 : 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    md: 6,
    lg: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    display: "flex",
    flexDirection: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mb: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    variant: "outlined",
    multiline: true,
    placeholder: "Get in touch with us",
    inputProps: {
      "aria-label": "Get in Touch"
    },
    InputProps: {
      className: classes.whiteBg
    },
    rows: 4,
    fullWidth: true,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_ColoredButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: theme.palette.common.white,
    variant: "outlined",
    type: "submit"
  }, "Send Message")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Hidden"], {
    mdDown: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    md: 6,
    lg: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    display: "flex",
    justifyContent: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, infos.map(function (info, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      display: "flex",
      mb: 1,
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      mr: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
      className: classes.infoIcon,
      tabIndex: -1,
      disabled: true
    }, info.icon)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      variant: "h6",
      className: "text-white"
    }, info.description)));
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    md: 6,
    lg: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    paragraph: true,
    className: "text-white"
  }, "About the Company"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    style: {
      color: "#8f9296"
    },
    paragraph: true
  }, "Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    display: "flex"
  }, socialIcons.map(function (socialIcon, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      key: index,
      mr: index !== socialIcons.length - 1 ? 1 : 0
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
      "aria-label": socialIcon.label,
      className: classes.socialIcon,
      href: socialIcon.href
    }, socialIcon.icon));
  }))))));
}

Footer.propTypes = {
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withWidth"])()(Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles, {
  withTheme: true
})(Footer)));

/***/ }),

/***/ "./resources/js/standard/components/home/FeatureCard.js":
/*!**************************************************************!*\
  !*** ./resources/js/standard/components/home/FeatureCard.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");




var styles = function styles(theme) {
  return {
    iconWrapper: {
      borderRadius: theme.shape.borderRadius,
      textAlign: "center",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: theme.spacing(3),
      padding: theme.spacing(1) * 1.5
    }
  };
};

function shadeColor(hex, percent) {
  var f = parseInt(hex.slice(1), 16);
  var t = percent < 0 ? 0 : 255;
  var p = percent < 0 ? percent * -1 : percent;
  var R = f >> 16;
  var G = f >> 8 & 0x00ff;
  var B = f & 0x0000ff;
  return "#".concat((0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1));
}

function FeatureCard(props) {
  var classes = props.classes,
      Icon = props.Icon,
      color = props.color,
      headline = props.headline,
      text = props.text;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    // We will set color and fill here, due to some prios complications
    className: classes.iconWrapper,
    style: {
      color: color,
      backgroundColor: shadeColor(color, 0.5),
      fill: color
    }
  }, Icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h5",
    paragraph: true
  }, headline), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body1",
    color: "textSecondary"
  }, text));
}

FeatureCard.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  Icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  headline: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles, {
  withTheme: true
})(FeatureCard));

/***/ }),

/***/ "./resources/js/standard/components/home/FeatureSection.js":
/*!*****************************************************************!*\
  !*** ./resources/js/standard/components/home/FeatureSection.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Code */ "./node_modules/@material-ui/icons/Code.js");
/* harmony import */ var _material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Build */ "./node_modules/@material-ui/icons/Build.js");
/* harmony import */ var _material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Computer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Computer */ "./node_modules/@material-ui/icons/Computer.js");
/* harmony import */ var _material_ui_icons_Computer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Computer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/BarChart */ "./node_modules/@material-ui/icons/BarChart.js");
/* harmony import */ var _material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_HeadsetMic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/HeadsetMic */ "./node_modules/@material-ui/icons/HeadsetMic.js");
/* harmony import */ var _material_ui_icons_HeadsetMic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_HeadsetMic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/CalendarToday */ "./node_modules/@material-ui/icons/CalendarToday.js");
/* harmony import */ var _material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Cloud__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Cloud */ "./node_modules/@material-ui/icons/Cloud.js");
/* harmony import */ var _material_ui_icons_Cloud__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Cloud__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Message */ "./node_modules/@material-ui/icons/Message.js");
/* harmony import */ var _material_ui_icons_Message__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Message__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Cancel */ "./node_modules/@material-ui/icons/Cancel.js");
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _calculateSpacing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./calculateSpacing */ "./resources/js/standard/components/home/calculateSpacing.js");
/* harmony import */ var _FeatureCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FeatureCard */ "./resources/js/standard/components/home/FeatureCard.js");














var iconSize = 30;
var features = [{
  color: "#00C853",
  headline: "Feature 1",
  text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      fontSize: iconSize
    }
  }),
  mdDelay: "0",
  smDelay: "0"
}, {
  color: "#6200EA",
  headline: "Feature 2",
  text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_8___default.a, {
    style: {
      fontSize: iconSize
    }
  }),
  mdDelay: "200",
  smDelay: "200"
}, {
  color: "#0091EA",
  headline: "Feature 3",
  text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Message__WEBPACK_IMPORTED_MODULE_10___default.a, {
    style: {
      fontSize: iconSize
    }
  }),
  mdDelay: "400",
  smDelay: "0"
}, {
  color: "#d50000",
  headline: "Feature 4",
  text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Computer__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      fontSize: iconSize
    }
  }),
  mdDelay: "0",
  smDelay: "200"
}, {
  color: "#DD2C00",
  headline: "Feature 5",
  text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      fontSize: iconSize
    }
  }),
  mdDelay: "200",
  smDelay: "0"
}, {
  color: "#64DD17",
  headline: "Feature 6",
  text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_HeadsetMic__WEBPACK_IMPORTED_MODULE_7___default.a, {
    style: {
      fontSize: iconSize
    }
  }),
  mdDelay: "400",
  smDelay: "200"
}, {
  color: "#304FFE",
  headline: "Feature 7",
  text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Cloud__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      fontSize: iconSize
    }
  }),
  mdDelay: "0",
  smDelay: "0"
}, {
  color: "#C51162",
  headline: "Feature 8",
  text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Code__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      fontSize: iconSize
    }
  }),
  mdDelay: "200",
  smDelay: "200"
}, {
  color: "#00B8D4",
  headline: "Feature 9",
  text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: {
      fontSize: iconSize
    }
  }),
  mdDelay: "400",
  smDelay: "0"
}];

function FeatureSection(props) {
  var width = props.width;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundColor: "#FFFFFF"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid lg-p-top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h3",
    align: "center",
    className: "lg-mg-bottom"
  }, "Features"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: Object(_calculateSpacing__WEBPACK_IMPORTED_MODULE_12__["default"])(width)
  }, features.map(function (element) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      xs: 6,
      md: 4,
      "data-aos": "zoom-in-up",
      "data-aos-delay": Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["isWidthUp"])("md", width) ? element.mdDelay : element.smDelay,
      key: element.headline
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FeatureCard__WEBPACK_IMPORTED_MODULE_13__["default"], {
      Icon: element.icon,
      color: element.color,
      headline: element.headline,
      text: element.text
    }));
  })))));
}

FeatureSection.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withWidth"])()(FeatureSection));

/***/ }),

/***/ "./resources/js/standard/components/home/HeadSection.js":
/*!**************************************************************!*\
  !*** ./resources/js/standard/components/home/HeadSection.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _dummy_data_images_headerImage_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dummy_data/images/headerImage.jpg */ "./resources/js/standard/dummy_data/images/headerImage.jpg");
/* harmony import */ var _dummy_data_images_headerImage_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dummy_data_images_headerImage_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_components_WaveBorder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/WaveBorder */ "./resources/js/shared/components/WaveBorder.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var styles = function styles(theme) {
  var _extraLargeButton, _card, _container;

  return {
    extraLargeButtonLabel: _defineProperty({
      fontSize: theme.typography.body1.fontSize
    }, theme.breakpoints.up("sm"), {
      fontSize: theme.typography.h6.fontSize
    }),
    extraLargeButton: (_extraLargeButton = {
      paddingTop: theme.spacing(1.5),
      paddingBottom: theme.spacing(1.5)
    }, _defineProperty(_extraLargeButton, theme.breakpoints.up("xs"), {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    }), _defineProperty(_extraLargeButton, theme.breakpoints.up("lg"), {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    }), _extraLargeButton),
    card: (_card = {
      boxShadow: theme.shadows[4],
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    }, _defineProperty(_card, theme.breakpoints.up("xs"), {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    }), _defineProperty(_card, theme.breakpoints.up("sm"), {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    }), _defineProperty(_card, theme.breakpoints.up("md"), {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5)
    }), _defineProperty(_card, theme.breakpoints.up("lg"), {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6)
    }), _defineProperty(_card, theme.breakpoints.down("lg"), {
      width: "auto"
    }), _card),
    wrapper: {
      position: "relative",
      backgroundColor: theme.palette.secondary.main,
      paddingBottom: theme.spacing(2)
    },
    image: {
      maxWidth: "100%",
      verticalAlign: "middle",
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[4]
    },
    container: (_container = {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(12)
    }, _defineProperty(_container, theme.breakpoints.down("md"), {
      marginBottom: theme.spacing(9)
    }), _defineProperty(_container, theme.breakpoints.down("sm"), {
      marginBottom: theme.spacing(6)
    }), _defineProperty(_container, theme.breakpoints.down("sm"), {
      marginBottom: theme.spacing(3)
    }), _container),
    containerFix: _defineProperty({}, theme.breakpoints.up("md"), {
      maxWidth: "none !important"
    }),
    waveBorder: {
      paddingTop: theme.spacing(4)
    }
  };
};

function HeadSection(props) {
  var classes = props.classes,
      theme = props.theme,
      width = props.width;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("lg-p-top", classes.wrapper)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("container-fluid", classes.container)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    display: "flex",
    justifyContent: "center",
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: classes.card,
    "data-aos-delay": "200",
    "data-aos": "zoom-in"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.containerFix, "container")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    justifyContent: "space-between",
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12,
    md: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    mb: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["isWidthUp"])("lg", width) ? "h3" : "h4"
  }, "Free Template for building an SaaS app using Material-UI")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    mb: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["isWidthUp"])("lg", width) ? "h6" : "body1",
    color: "textSecondary"
  }, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "contained",
    color: "secondary",
    fullWidth: true,
    className: classes.extraLargeButton,
    classes: {
      label: classes.extraLargeButtonLabel
    },
    href: "https://github.com/dunky11/react-saas-template"
  }, "Download from GitHub")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Hidden"], {
    smDown: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _dummy_data_images_headerImage_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    className: classes.image,
    alt: "header example"
  }))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_WaveBorder__WEBPACK_IMPORTED_MODULE_5__["default"], {
    upperColor: theme.palette.secondary.main,
    lowerColor: "#FFFFFF",
    className: classes.waveBorder,
    animationNegativeDelay: 2
  }));
}

HeadSection.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["withWidth"])()(Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles, {
  withTheme: true
})(HeadSection)));

/***/ }),

/***/ "./resources/js/standard/components/home/Home.js":
/*!*******************************************************!*\
  !*** ./resources/js/standard/components/home/Home.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HeadSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeadSection */ "./resources/js/standard/components/home/HeadSection.js");
/* harmony import */ var _FeatureSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FeatureSection */ "./resources/js/standard/components/home/FeatureSection.js");
/* harmony import */ var _PricingSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PricingSection */ "./resources/js/standard/components/home/PricingSection.js");






function Home(props) {
  var selectHome = props.selectHome;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    selectHome();
  }, [selectHome]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeadSection__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FeatureSection__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PricingSection__WEBPACK_IMPORTED_MODULE_4__["default"], null));
}

Home.propTypes = {
  selectHome: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./resources/js/standard/components/home/PriceCard.js":
/*!************************************************************!*\
  !*** ./resources/js/standard/components/home/PriceCard.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Check */ "./node_modules/@material-ui/icons/Check.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_3__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var styles = function styles(theme) {
  return {
    card: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      marginTop: theme.spacing(2),
      border: "3px solid ".concat(theme.palette.primary.dark),
      borderRadius: theme.shape.borderRadius * 2
    },
    cardHightlighted: _defineProperty({
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      border: "3px solid ".concat(theme.palette.primary.dark),
      borderRadius: theme.shape.borderRadius * 2,
      backgroundColor: theme.palette.primary.main
    }, theme.breakpoints.down("xs"), {
      marginTop: theme.spacing(2)
    }),
    title: {
      color: theme.palette.primary.main
    }
  };
};

function PriceCard(props) {
  var classes = props.classes,
      theme = props.theme,
      title = props.title,
      pricing = props.pricing,
      features = props.features,
      highlighted = props.highlighted;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: highlighted ? classes.cardHightlighted : classes.card
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mb: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: highlighted ? "h5" : "h6",
    className: highlighted ? "text-white" : classes.title
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mb: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: highlighted ? "h3" : "h4",
    className: highlighted ? "text-white" : null
  }, pricing)), features.map(function (feature, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      display: "flex",
      alignItems: "center",
      mb: 1,
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_3___default.a, {
      style: {
        color: highlighted ? theme.palette.common.white : theme.palette.primary.dark
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      ml: 1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      className: highlighted ? "text-white" : null,
      variant: highlighted ? "h6" : "body1"
    }, feature)));
  }));
}

PriceCard.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  pricing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]).isRequired,
  highlighted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles, {
  withTheme: true
})(PriceCard));

/***/ }),

/***/ "./resources/js/standard/components/home/PricingSection.js":
/*!*****************************************************************!*\
  !*** ./resources/js/standard/components/home/PricingSection.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _PriceCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PriceCard */ "./resources/js/standard/components/home/PriceCard.js");
/* harmony import */ var _calculateSpacing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calculateSpacing */ "./resources/js/standard/components/home/calculateSpacing.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var styles = function styles(theme) {
  var _containerFix;

  return {
    containerFix: (_containerFix = {}, _defineProperty(_containerFix, theme.breakpoints.down("md"), {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6)
    }), _defineProperty(_containerFix, theme.breakpoints.down("sm"), {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    }), _defineProperty(_containerFix, theme.breakpoints.down("xs"), {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }), _defineProperty(_containerFix, "overflow", "hidden"), _defineProperty(_containerFix, "paddingTop", theme.spacing(1)), _defineProperty(_containerFix, "paddingBottom", theme.spacing(1)), _containerFix),
    cardWrapper: _defineProperty({}, theme.breakpoints.down("xs"), {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340
    }),
    cardWrapperHighlighted: _defineProperty({}, theme.breakpoints.down("xs"), {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 360
    })
  };
};

function PricingSection(props) {
  var width = props.width,
      classes = props.classes;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg-p-top",
    style: {
      backgroundColor: "#FFFFFF"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h3",
    align: "center",
    className: "lg-mg-bottom"
  }, "Pricing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("container-fluid", classes.containerFix)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    spacing: Object(_calculateSpacing__WEBPACK_IMPORTED_MODULE_5__["default"])(width),
    className: classes.gridContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    lg: 3,
    className: classes.cardWrapper,
    "data-aos": "zoom-in-up"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PriceCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Starter",
    pricing: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "$14.99", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      display: "inline"
    }, " / month")),
    features: ["Feature 1", "Feature 2", "Feature 3"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    className: classes.cardWrapperHighlighted,
    xs: 12,
    sm: 6,
    lg: 3,
    "data-aos": "zoom-in-up",
    "data-aos-delay": "200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PriceCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    highlighted: true,
    title: "Premium",
    pricing: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "$29.99", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      display: "inline"
    }, " / month")),
    features: ["Feature 1", "Feature 2", "Feature 3"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    className: classes.cardWrapper,
    xs: 12,
    sm: 6,
    lg: 3,
    "data-aos": "zoom-in-up",
    "data-aos-delay": Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["isWidthUp"])("md", width) ? "400" : "0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PriceCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Business",
    pricing: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "$49.99", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      display: "inline"
    }, " / month")),
    features: ["Feature 1", "Feature 2", "Feature 3"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    className: classes.cardWrapper,
    xs: 12,
    sm: 6,
    lg: 3,
    "data-aos": "zoom-in-up",
    "data-aos-delay": Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["isWidthUp"])("md", width) ? "600" : "200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PriceCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Tycoon",
    pricing: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "$99.99", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      display: "inline"
    }, " / month")),
    features: ["Feature 1", "Feature 2", "Feature 3"]
  })))));
}

PricingSection.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles, {
  withTheme: true
})(Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["withWidth"])()(PricingSection)));

/***/ }),

/***/ "./resources/js/standard/components/home/calculateSpacing.js":
/*!*******************************************************************!*\
  !*** ./resources/js/standard/components/home/calculateSpacing.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/withWidth */ "./node_modules/@material-ui/core/esm/withWidth/index.js");
/**
 * This calculates the spacing for the
 * grid container component based on the viewsize
 */


function calculateSpacing(width) {
  if (Object(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_0__["isWidthUp"])("lg", width)) {
    return 5;
  }

  if (Object(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_0__["isWidthUp"])("md", width)) {
    return 4;
  }

  if (Object(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_0__["isWidthUp"])("sm", width)) {
    return 3;
  }

  return 2;
}

/* harmony default export */ __webpack_exports__["default"] = (calculateSpacing);

/***/ }),

/***/ "./resources/js/standard/components/navigation/NavBar.js":
/*!***************************************************************!*\
  !*** ./resources/js/standard/components/navigation/NavBar.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_HowToReg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/HowToReg */ "./node_modules/@material-ui/icons/HowToReg.js");
/* harmony import */ var _material_ui_icons_HowToReg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_HowToReg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_LockOpen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/LockOpen */ "./node_modules/@material-ui/icons/LockOpen.js");
/* harmony import */ var _material_ui_icons_LockOpen__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOpen__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_School__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/School */ "./node_modules/@material-ui/icons/School.js");
/* harmony import */ var _material_ui_icons_School__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_School__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Explore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Explore */ "./node_modules/@material-ui/icons/Explore.js");
/* harmony import */ var _material_ui_icons_Explore__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Explore__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Book__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Book */ "./node_modules/@material-ui/icons/Book.js");
/* harmony import */ var _material_ui_icons_Book__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Book__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Person */ "./node_modules/@material-ui/icons/Person.js");
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/PowerSettingsNew */ "./node_modules/@material-ui/icons/PowerSettingsNew.js");
/* harmony import */ var _material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shared_components_NavigationDrawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/NavigationDrawer */ "./resources/js/shared/components/NavigationDrawer.js");















var styles = function styles(theme) {
  return {
    appBar: {
      boxShadow: theme.shadows[6],
      backgroundColor: theme.palette.common.white
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between"
    },
    menuButtonText: {
      fontSize: theme.typography.body1.fontSize,
      fontWeight: theme.typography.h6.fontWeight
    },
    brandText: {
      fontFamily: "'Baloo Bhaijaan', cursive",
      fontWeight: 400
    },
    noDecoration: {
      textDecoration: "none !important"
    }
  };
};

function NavBar(props) {
  var classes = props.classes,
      openRegisterDialog = props.openRegisterDialog,
      openLoginDialog = props.openLoginDialog,
      handleMobileDrawerOpen = props.handleMobileDrawerOpen,
      handleMobileDrawerClose = props.handleMobileDrawerClose,
      mobileDrawerOpen = props.mobileDrawerOpen,
      selectedTab = props.selectedTab,
      isLoggedIn = props.isLoggedIn,
      userData = props.userData,
      handleUserData = props.handleUserData,
      handleUserLogout = props.handleUserLogout;
  var menuItems = [{
    link: "/",
    name: "Home",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: "text-white"
    })
  }, {
    link: "/course",
    name: "Courses",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_School__WEBPACK_IMPORTED_MODULE_8___default.a, {
      className: "text-white"
    })
  }, {
    link: "/blog",
    name: "Blog",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Book__WEBPACK_IMPORTED_MODULE_10___default.a, {
      className: "text-white"
    })
  }, {
    name: "Register",
    onClick: openRegisterDialog,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_HowToReg__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: "text-white"
    })
  }, {
    name: "Login",
    onClick: openLoginDialog,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_LockOpen__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: "text-white"
    })
  }];

  if (isLoggedIn == true) {
    menuItems = [{
      link: "/",
      name: "Home",
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: "text-white"
      })
    }, {
      link: "/course",
      name: "Courses",
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_School__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: "text-white"
      })
    }, {
      link: "/ladders",
      name: "Ladders",
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Explore__WEBPACK_IMPORTED_MODULE_9___default.a, {
        className: "text-white"
      })
    }, {
      link: "/blog",
      name: "Blog",
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Book__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: "text-white"
      })
    }, {
      link: "/profile",
      name: userData.username,
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: "text-white"
      })
    }, {
      name: "Logout",
      onClick: handleUserLogout,
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_12___default.a, {
        className: "text-white"
      })
    }];
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["AppBar"], {
    position: "fixed",
    className: classes.appBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Toolbar"], {
    className: classes.toolbar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h4",
    className: classes.brandText,
    display: "inline",
    color: "primary"
  }, "CPS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h4",
    className: classes.brandText,
    display: "inline",
    color: "secondary"
  }, "Academy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Hidden"], {
    mdUp: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
    className: classes.menuButton,
    onClick: handleMobileDrawerOpen,
    "aria-label": "Open Navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_4___default.a, {
    color: "primary"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Hidden"], {
    smDown: true
  }, menuItems.map(function (element) {
    if (element.link) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        key: element.name,
        to: element.link,
        className: classes.noDecoration,
        onClick: handleMobileDrawerClose
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        color: "secondary",
        size: "large",
        classes: {
          text: classes.menuButtonText
        }
      }, element.name));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      color: "secondary",
      size: "large",
      onClick: element.onClick,
      classes: {
        text: classes.menuButtonText
      },
      key: element.name
    }, element.name);
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_NavigationDrawer__WEBPACK_IMPORTED_MODULE_13__["default"], {
    menuItems: menuItems,
    anchor: "right",
    open: mobileDrawerOpen,
    selectedItem: selectedTab,
    onClose: handleMobileDrawerClose
  }));
}

NavBar.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  handleMobileDrawerOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  handleMobileDrawerClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  mobileDrawerOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  selectedTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  openRegisterDialog: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  openLoginDialog: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  isLoggedIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  userData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  handleUserData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  handleUserLogout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles, {
  withTheme: true
})( /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(NavBar)));

/***/ }),

/***/ "./resources/js/standard/components/register_login/ChangePasswordDialog.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/standard/components/register_login/ChangePasswordDialog.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _shared_components_ButtonCircularProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/ButtonCircularProgress */ "./resources/js/shared/components/ButtonCircularProgress.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var styles = function styles(theme) {
  return {
    dialogContent: {
      paddingTop: theme.spacing(2)
    },
    dialogActions: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  };
};

function ChangePassword(props) {
  var status = props.status,
      setStatus = props.setStatus,
      onSuccess = props.onSuccess,
      onClose = props.onClose,
      classes = props.classes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var inputEmail = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var sendPasswordEmail = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setStatus(null);
    setIsLoading(true);
    axios.post('/password/email', {
      email: inputEmail.current.value
    }).then(function () {
      setIsLoading(false);
      onSuccess();
      onClose();
    })["catch"](function (res) {
      var errors = res.response.data.errors;
      if (errors.email) setStatus(errors.email[0]);
      setIsLoading(false);
      return;
    });
  }, [setIsLoading, setStatus, inputEmail, onSuccess, onClose]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Dialog"], {
    open: true,
    hideBackdrop: true,
    onClose: onClose,
    disableBackdropClick: isLoading,
    disableEscapeKeyDown: isLoading,
    maxWidth: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      sendPasswordEmail();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogContent"], {
    className: classes.dialogContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true
  }, "Enter your email address below and we will send you verification code to reset your password."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    variant: "outlined",
    margin: "dense",
    required: true,
    fullWidth: true,
    error: status === "We can't find a user with that email address.",
    label: "Email Address",
    inputRef: inputEmail,
    autoFocus: true,
    autoComplete: "off",
    type: "email",
    onChange: function onChange() {
      if (status === "We can't find a user with that email address.") {
        setStatus(null);
      }
    },
    helperText: function () {
      if (status === "We can't find a user with that email address.") {
        return status;
      }

      return null;
    }(),
    FormHelperTextProps: {
      error: true
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogActions"], {
    className: classes.dialogActions
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: onClose,
    disabled: isLoading
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "submit",
    variant: "contained",
    color: "secondary",
    disabled: isLoading
  }, "Reset password", isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_ButtonCircularProgress__WEBPACK_IMPORTED_MODULE_3__["default"], null)))));
}

ChangePassword.propTypes = {
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  status: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  setStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles, {
  withTheme: true
})(ChangePassword));

/***/ }),

/***/ "./resources/js/standard/components/register_login/DialogSelector.js":
/*!***************************************************************************!*\
  !*** ./resources/js/standard/components/register_login/DialogSelector.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RegisterDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegisterDialog */ "./resources/js/standard/components/register_login/RegisterDialog.js");
/* harmony import */ var _TermsOfServiceDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TermsOfServiceDialog */ "./resources/js/standard/components/register_login/TermsOfServiceDialog.js");
/* harmony import */ var _LoginDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoginDialog */ "./resources/js/standard/components/register_login/LoginDialog.js");
/* harmony import */ var _ChangePasswordDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChangePasswordDialog */ "./resources/js/standard/components/register_login/ChangePasswordDialog.js");
/* harmony import */ var _shared_components_ModalBackdrop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/ModalBackdrop */ "./resources/js/shared/components/ModalBackdrop.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function DialogSelector(props) {
  var dialogOpen = props.dialogOpen,
      openTermsDialog = props.openTermsDialog,
      openRegisterDialog = props.openRegisterDialog,
      openLoginDialog = props.openLoginDialog,
      openChangePasswordDialog = props.openChangePasswordDialog,
      onChangePasswordMailSentSuccess = props.onChangePasswordMailSentSuccess,
      onClose = props.onClose;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      loginStatus = _useState2[0],
      setLoginStatus = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      registerStatus = _useState4[0],
      setRegisterStatus = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState6 = _slicedToArray(_useState5, 2),
      changePasswordStatus = _useState6[0],
      setChangePasswordStatus = _useState6[1];

  var _onClose = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setLoginStatus(null);
    setRegisterStatus(null);
    setChangePasswordStatus(null);
    onClose();
  }, [onClose, setLoginStatus, setRegisterStatus, setChangePasswordStatus]);

  var printDialog = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    switch (dialogOpen) {
      case "register":
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RegisterDialog__WEBPACK_IMPORTED_MODULE_2__["default"], {
          onClose: _onClose,
          openTermsDialog: openTermsDialog,
          status: registerStatus,
          setStatus: setRegisterStatus
        });

      case "termsOfService":
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TermsOfServiceDialog__WEBPACK_IMPORTED_MODULE_3__["default"], {
          onClose: openRegisterDialog
        });

      case "login":
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginDialog__WEBPACK_IMPORTED_MODULE_4__["default"], {
          onClose: _onClose,
          status: loginStatus,
          setStatus: setLoginStatus,
          openChangePasswordDialog: openChangePasswordDialog
        });

      case "changePassword":
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChangePasswordDialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
          status: changePasswordStatus,
          setStatus: setChangePasswordStatus,
          onClose: openLoginDialog,
          onSuccess: onChangePasswordMailSentSuccess
        });

      default:
    }
  }, [dialogOpen, openChangePasswordDialog, openLoginDialog, openRegisterDialog, openTermsDialog, _onClose, loginStatus, registerStatus, changePasswordStatus, setLoginStatus, setRegisterStatus, setChangePasswordStatus]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, dialogOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_ModalBackdrop__WEBPACK_IMPORTED_MODULE_6__["default"], {
    open: true
  }), printDialog());
}

DialogSelector.propTypes = {
  dialogOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  openLoginDialog: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  openTermsDialog: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  openRegisterDialog: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  openChangePasswordDialog: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onChangePasswordMailSentSuccess: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DialogSelector);

/***/ }),

/***/ "./resources/js/standard/components/register_login/LoginDialog.js":
/*!************************************************************************!*\
  !*** ./resources/js/standard/components/register_login/LoginDialog.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _shared_components_FormDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/FormDialog */ "./resources/js/shared/components/FormDialog.js");
/* harmony import */ var _shared_components_HighlightedInformation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/HighlightedInformation */ "./resources/js/shared/components/HighlightedInformation.js");
/* harmony import */ var _shared_components_ButtonCircularProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/ButtonCircularProgress */ "./resources/js/shared/components/ButtonCircularProgress.js");
/* harmony import */ var _shared_components_VisibilityPasswordTextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/VisibilityPasswordTextField */ "./resources/js/shared/components/VisibilityPasswordTextField.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var styles = function styles(theme) {
  return {
    forgotPassword: {
      marginTop: theme.spacing(2),
      color: theme.palette.primary.main,
      cursor: "pointer",
      "&:enabled:hover": {
        color: theme.palette.primary.dark
      },
      "&:enabled:focus": {
        color: theme.palette.primary.dark
      }
    },
    disabledText: {
      cursor: "auto",
      color: theme.palette.text.disabled
    },
    formControlLabel: {
      marginRight: 0
    }
  };
};

function LoginDialog(props) {
  var setStatus = props.setStatus,
      history = props.history,
      classes = props.classes,
      onClose = props.onClose,
      openChangePasswordDialog = props.openChangePasswordDialog,
      status = props.status;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isPasswordVisible = _useState4[0],
      setIsPasswordVisible = _useState4[1];

  var loginUsername = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var loginPassword = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var loginRememberToken = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var login = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsLoading(true);
    setStatus(null);
    axios.post('/login', {
      username: loginUsername.current.value,
      password: loginPassword.current.value,
      remember: loginRememberToken.current.checked
    }).then(function () {
      setIsLoading(false);
      window.location.reload();
    })["catch"](function (res) {
      setIsLoading(false);
      var errors = res.response.data.errors;
      if (errors.username) setStatus("These credentials do not match our records.");
    });
  }, [setIsLoading, loginUsername, loginPassword, setStatus]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_FormDialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
    open: true,
    onClose: onClose,
    loading: isLoading,
    method: "post",
    onFormSubmit: function onFormSubmit(e) {
      e.preventDefault();
      login();
    },
    hideBackdrop: true,
    headline: "Login",
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
      variant: "outlined",
      margin: "normal",
      error: status === "These credentials do not match our records.",
      required: true,
      fullWidth: true,
      label: "Username",
      inputRef: loginUsername,
      autoFocus: true,
      autoComplete: "off",
      type: "text",
      onChange: function onChange() {
        if (status === "These credentials do not match our records.") {
          setStatus(null);
        }
      },
      helperText: status === "These credentials do not match our records." ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "These credentials do not match our records.") : "",
      FormHelperTextProps: {
        error: true
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_VisibilityPasswordTextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
      variant: "outlined",
      margin: "normal",
      required: true,
      fullWidth: true,
      error: status === "These credentials do not match our records.",
      label: "Password",
      inputRef: loginPassword,
      autoComplete: "off",
      onChange: function onChange() {
        if (status === "These credentials do not match our records.") {
          setStatus(null);
        }
      },
      FormHelperTextProps: {
        error: true
      },
      onVisibilityChange: setIsPasswordVisible,
      isVisible: isPasswordVisible
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControlLabel"], {
      className: classes.formControlLabel,
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
        color: "primary",
        inputRef: loginRememberToken
      }),
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
        variant: "body1"
      }, "Remember me")
    })),
    actions: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      type: "submit",
      fullWidth: true,
      variant: "contained",
      color: "secondary",
      disabled: isLoading,
      size: "large"
    }, "Login", isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_ButtonCircularProgress__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      align: "center",
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.forgotPassword, isLoading ? classes.disabledText : null),
      color: "primary",
      onClick: isLoading ? null : openChangePasswordDialog,
      tabIndex: 0,
      role: "button",
      onKeyDown: function onKeyDown(event) {
        // For screenreaders listen to space and enter events
        if (!isLoading && event.keyCode === 13 || event.keyCode === 32) {
          openChangePasswordDialog();
        }
      }
    }, "Forgot Password?"))
  }));
}

LoginDialog.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  openChangePasswordDialog: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  status: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles)(LoginDialog)));

/***/ }),

/***/ "./resources/js/standard/components/register_login/RegisterDialog.js":
/*!***************************************************************************!*\
  !*** ./resources/js/standard/components/register_login/RegisterDialog.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _shared_components_FormDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/FormDialog */ "./resources/js/shared/components/FormDialog.js");
/* harmony import */ var _shared_components_HighlightedInformation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/HighlightedInformation */ "./resources/js/shared/components/HighlightedInformation.js");
/* harmony import */ var _shared_components_ButtonCircularProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/ButtonCircularProgress */ "./resources/js/shared/components/ButtonCircularProgress.js");
/* harmony import */ var _shared_components_VisibilityPasswordTextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/VisibilityPasswordTextField */ "./resources/js/shared/components/VisibilityPasswordTextField.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var styles = function styles(theme) {
  return {
    link: {
      transition: theme.transitions.create(["background-color"], {
        duration: theme.transitions.duration.complex,
        easing: theme.transitions.easing.easeInOut
      }),
      cursor: "pointer",
      color: theme.palette.primary.main,
      "&:enabled:hover": {
        color: theme.palette.primary.dark
      },
      "&:enabled:focus": {
        color: theme.palette.primary.dark
      }
    }
  };
};

function RegisterDialog(props) {
  var setStatus = props.setStatus,
      theme = props.theme,
      onClose = props.onClose,
      openTermsDialog = props.openTermsDialog,
      status = props.status,
      classes = props.classes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      hasTermsOfServiceError = _useState4[0],
      setHasTermsOfServiceError = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isPasswordVisible = _useState6[0],
      setIsPasswordVisible = _useState6[1];

  var registerName = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var registerEmail = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var registerCFHandle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var registerUsername = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var registerPassword = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var registerPasswordRepeat = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var registerTermsCheckbox = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var register = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!registerTermsCheckbox.current.checked) {
      setHasTermsOfServiceError(true);
      return;
    }

    if (registerPassword.current.value !== registerPasswordRepeat.current.value) {
      setStatus("passwordsDontMatch");
      return;
    }

    if (registerPassword.current.value.length < 8) {
      setStatus("passwordTooShort");
      return;
    }

    setStatus(null);
    setIsLoading(true);
    axios.post('/register', {
      name: registerName.current.value,
      email: registerEmail.current.value,
      cf_handle: registerCFHandle.current.value,
      username: registerUsername.current.value,
      password: registerPassword.current.value,
      password_confirmation: registerPasswordRepeat.current.value
    }).then(function () {
      setIsLoading(false);
      window.location.reload();
    })["catch"](function (res) {
      var errors = res.response.data.errors;
      if (errors.name) setStatus("somethingWentWrong");
      if (errors.email) setStatus(errors.email[0]);
      if (errors.cf_handle) setStatus("somethingWentWrong");
      if (errors.username) setStatus(errors.username[0]);
      if (errors.password) setStatus("somethingWentWrong");
      if (errors.password_confirmation) setStatus("somethingWentWrong");
      setIsLoading(false);
      return;
    });
  }, [setIsLoading, setStatus, setHasTermsOfServiceError, registerPassword, registerPasswordRepeat, registerTermsCheckbox]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_FormDialog__WEBPACK_IMPORTED_MODULE_3__["default"], {
    loading: isLoading,
    onClose: onClose,
    open: true,
    method: "post",
    headline: "Register",
    onFormSubmit: function onFormSubmit(e) {
      e.preventDefault();
      register();
    },
    hideBackdrop: true,
    hasCloseIcon: true,
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
      variant: "outlined",
      margin: "normal",
      required: true,
      fullWidth: true,
      error: status === "somethingWentWrong",
      label: "Full Name",
      inputRef: registerName,
      autoFocus: true,
      autoComplete: "off",
      type: "text",
      onChange: function onChange() {
        if (status === "somethingWentWrong") {
          setStatus(null);
        }
      },
      helperText: function () {
        if (status === "somethingWentWrong") {
          return "Something went wrong.";
        }

        return null;
      }(),
      FormHelperTextProps: {
        error: true
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
      variant: "outlined",
      margin: "normal",
      required: true,
      fullWidth: true,
      error: status === "The email has already been taken.",
      label: "Email Address",
      inputRef: registerEmail,
      autoComplete: "off",
      type: "email",
      onChange: function onChange() {
        if (status === "The email has already been taken.") {
          setStatus(null);
        }
      },
      helperText: function () {
        if (status === "The email has already been taken.") {
          return status;
        }

        return null;
      }(),
      FormHelperTextProps: {
        error: true
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
      variant: "outlined",
      margin: "normal",
      required: true,
      fullWidth: true,
      error: status === "somethingWentWrong",
      label: "Codeforces Handle",
      inputRef: registerCFHandle,
      autoComplete: "off",
      type: "text",
      onChange: function onChange() {
        if (status === "somethingWentWrong") {
          setStatus(null);
        }
      },
      helperText: function () {
        if (status === "somethingWentWrong") {
          return "Something went wrong.";
        }

        return null;
      }(),
      FormHelperTextProps: {
        error: true
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
      variant: "outlined",
      margin: "normal",
      required: true,
      fullWidth: true,
      error: status === "The username has already been taken.",
      label: "Username",
      inputRef: registerUsername,
      autoComplete: "off",
      type: "text",
      onChange: function onChange() {
        if (status === "The username has already been taken.") {
          setStatus(null);
        }
      },
      helperText: function () {
        if (status === "The username has already been taken.") {
          return status;
        }

        return null;
      }(),
      FormHelperTextProps: {
        error: true
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_VisibilityPasswordTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "outlined",
      margin: "normal",
      required: true,
      fullWidth: true,
      error: status === "passwordTooShort" || status === "passwordsDontMatch" || status === "somethingWentWrong",
      label: "Password",
      inputRef: registerPassword,
      autoComplete: "off",
      onChange: function onChange() {
        if (status === "passwordTooShort" || status === "passwordsDontMatch" || status === "somethingWentWrong") {
          setStatus(null);
        }
      },
      helperText: function () {
        if (status === "passwordTooShort") {
          return "Create a password at least 8 characters long.";
        }

        if (status === "passwordsDontMatch") {
          return "Your passwords dont match.";
        }

        if (status === "somethingWentWrong") {
          return "Something went wrong.";
        }

        return null;
      }(),
      FormHelperTextProps: {
        error: true
      },
      isVisible: isPasswordVisible,
      onVisibilityChange: setIsPasswordVisible
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_VisibilityPasswordTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "outlined",
      margin: "normal",
      required: true,
      fullWidth: true,
      error: status === "passwordTooShort" || status === "passwordsDontMatch" || status === "somethingWentWrong",
      label: "Repeat Password",
      inputRef: registerPasswordRepeat,
      autoComplete: "off",
      onChange: function onChange() {
        if (status === "passwordTooShort" || status === "passwordsDontMatch" || status === "somethingWentWrong") {
          setStatus(null);
        }
      },
      helperText: function () {
        if (status === "passwordTooShort") {
          return "Create a password at least 8 characters long.";
        }

        if (status === "passwordsDontMatch") {
          return "Your passwords dont match.";
        }

        if (status === "somethingWentWrong") {
          return "Something went wrong.";
        }
      }(),
      FormHelperTextProps: {
        error: true
      },
      isVisible: isPasswordVisible,
      onVisibilityChange: setIsPasswordVisible
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControlLabel"], {
      style: {
        marginRight: 0
      },
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
        color: "primary",
        inputRef: registerTermsCheckbox,
        onChange: function onChange() {
          setHasTermsOfServiceError(false);
        }
      }),
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        variant: "body1"
      }, "I agree to the", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: classes.link,
        onClick: isLoading ? null : openTermsDialog,
        tabIndex: 0,
        role: "button",
        onKeyDown: function onKeyDown(event) {
          // For screenreaders listen to space and enter events
          if (!isLoading && event.keyCode === 13 || event.keyCode === 32) {
            openTermsDialog();
          }
        }
      }, " ", "terms of service"))
    }), hasTermsOfServiceError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormHelperText"], {
      error: true,
      style: {
        display: "block",
        marginTop: theme.spacing(-1)
      }
    }, "In order to create an account, you have to accept our terms of service.")),
    actions: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "submit",
      fullWidth: true,
      variant: "contained",
      size: "large",
      color: "secondary",
      disabled: isLoading
    }, "Register", isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_ButtonCircularProgress__WEBPACK_IMPORTED_MODULE_5__["default"], null))
  });
}

RegisterDialog.propTypes = {
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  openTermsDialog: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  status: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  setStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles, {
  withTheme: true
})(RegisterDialog));

/***/ }),

/***/ "./resources/js/standard/components/register_login/TermsOfServiceDialog.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/standard/components/register_login/TermsOfServiceDialog.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "./node_modules/@material-ui/icons/ArrowBack.js");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_components_ColoredButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/ColoredButton */ "./resources/js/shared/components/ColoredButton.js");






var styles = function styles(theme) {
  return {
    termsConditionsListitem: {
      marginLeft: theme.spacing(3),
      marginTop: theme.spacing(1)
    },
    dialogActions: {
      justifyContent: "flex-start",
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    backIcon: {
      marginRight: theme.spacing(1)
    }
  };
};

function TermsOfServiceDialog(props) {
  var classes = props.classes,
      onClose = props.onClose,
      theme = props.theme;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Dialog"], {
    open: true,
    scroll: "paper",
    onClose: onClose,
    hideBackdrop: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogTitle"], null, "Terms and Conditions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    color: "primary",
    paragraph: true
  }, "Introduction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true
  }, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true
  }, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    color: "primary",
    paragraph: true
  }, "Intellectual Property Rights"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true
  }, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true
  }, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    color: "primary",
    paragraph: true
  }, "Restrictions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true
  }, "You are specifically restricted from all of the following:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.termsConditionsListitem
  }, "- Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.termsConditionsListitem
  }, "- Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.termsConditionsListitem
  }, "- Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.termsConditionsListitem
  }, "- Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.termsConditionsListitem
  }, "- Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.termsConditionsListitem
  }, "- Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.termsConditionsListitem
  }, "- Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.termsConditionsListitem,
    paragraph: true
  }, "- Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true
  }, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    color: "primary",
    paragraph: true
  }, "Your Content"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true
  }, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true
  }, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    color: "primary",
    paragraph: true
  }, "No warranties"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true
  }, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    color: "primary",
    paragraph: true
  }, "Limitation of liability"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true
  }, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    color: "primary",
    paragraph: true
  }, "Indemnification"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true
  }, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    color: "primary",
    paragraph: true
  }, "Severability"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true
  }, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    color: "primary",
    paragraph: true
  }, "Variation of Terms"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true
  }, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    color: "primary",
    paragraph: true
  }, "Assignment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true
  }, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    color: "primary",
    paragraph: true
  }, "Entire Agreement"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true
  }, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    color: "primary",
    paragraph: true
  }, "Governing Law & Jurisdiction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true
  }, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogActions"], {
    className: classes.dialogActions
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_ColoredButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: onClose,
    variant: "contained",
    color: theme.palette.common.black
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.backIcon
  }), "Back")));
}

TermsOfServiceDialog.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles, {
  withTheme: true
})(TermsOfServiceDialog));

/***/ }),

/***/ "./resources/js/standard/dummy_data/blogPosts.js":
/*!*******************************************************!*\
  !*** ./resources/js/standard/dummy_data/blogPosts.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _images_blogPost1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/blogPost1.jpg */ "./resources/js/standard/dummy_data/images/blogPost1.jpg");
/* harmony import */ var _images_blogPost1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_blogPost1_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_blogPost2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/blogPost2.jpg */ "./resources/js/standard/dummy_data/images/blogPost2.jpg");
/* harmony import */ var _images_blogPost2_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_blogPost2_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_blogPost3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/blogPost3.jpg */ "./resources/js/standard/dummy_data/images/blogPost3.jpg");
/* harmony import */ var _images_blogPost3_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_blogPost3_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_blogPost4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/blogPost4.jpg */ "./resources/js/standard/dummy_data/images/blogPost4.jpg");
/* harmony import */ var _images_blogPost4_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_blogPost4_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_blogPost5_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/blogPost5.jpg */ "./resources/js/standard/dummy_data/images/blogPost5.jpg");
/* harmony import */ var _images_blogPost5_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_blogPost5_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_blogPost6_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/blogPost6.jpg */ "./resources/js/standard/dummy_data/images/blogPost6.jpg");
/* harmony import */ var _images_blogPost6_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_blogPost6_jpg__WEBPACK_IMPORTED_MODULE_7__);








var content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
  variant: "h6",
  paragraph: true
}, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
  paragraph: true
}, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
  paragraph: true
}, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
  variant: "h6",
  paragraph: true
}, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
  paragraph: true
}, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
  paragraph: true
}, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
  paragraph: true
}, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
  paragraph: true
}, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
  variant: "h6",
  paragraph: true
}, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
  paragraph: true
}, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
  paragraph: true
}, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."));
/* harmony default export */ __webpack_exports__["default"] = ([{
  title: "Post 1",
  id: 1,
  date: 1576281600,
  imageSrc: _images_blogPost1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
  snippet: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  content: content
}, {
  title: "Post 2",
  id: 2,
  date: 1576391600,
  imageSrc: _images_blogPost2_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
  snippet: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  content: content
}, {
  title: "Post 3",
  id: 3,
  date: 1577391600,
  imageSrc: _images_blogPost3_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
  snippet: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  content: content
}, {
  title: "Post 4",
  id: 4,
  date: 1572281600,
  imageSrc: _images_blogPost4_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
  snippet: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  content: content
}, {
  title: "Post 5",
  id: 5,
  date: 1573281600,
  imageSrc: _images_blogPost5_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
  snippet: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  content: content
}, {
  title: "Post 6",
  id: 6,
  date: 1575281600,
  imageSrc: _images_blogPost6_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
  snippet: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  content: content
}]);

/***/ }),

/***/ "./resources/js/standard/dummy_data/images/blogPost1.jpg":
/*!***************************************************************!*\
  !*** ./resources/js/standard/dummy_data/images/blogPost1.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/blogPost1.jpg?2b466f14430eac13337c9452ff05635c";

/***/ }),

/***/ "./resources/js/standard/dummy_data/images/blogPost2.jpg":
/*!***************************************************************!*\
  !*** ./resources/js/standard/dummy_data/images/blogPost2.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/blogPost2.jpg?f574380de5938344b4dafe04d833270f";

/***/ }),

/***/ "./resources/js/standard/dummy_data/images/blogPost3.jpg":
/*!***************************************************************!*\
  !*** ./resources/js/standard/dummy_data/images/blogPost3.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/blogPost3.jpg?8d115020e50d1cdeeb160b7a2f3a88fb";

/***/ }),

/***/ "./resources/js/standard/dummy_data/images/blogPost4.jpg":
/*!***************************************************************!*\
  !*** ./resources/js/standard/dummy_data/images/blogPost4.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/blogPost4.jpg?29e641ea808c1389ddc7973e7e6b37c8";

/***/ }),

/***/ "./resources/js/standard/dummy_data/images/blogPost5.jpg":
/*!***************************************************************!*\
  !*** ./resources/js/standard/dummy_data/images/blogPost5.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/blogPost5.jpg?eed51f556c7b96ada363087472035509";

/***/ }),

/***/ "./resources/js/standard/dummy_data/images/blogPost6.jpg":
/*!***************************************************************!*\
  !*** ./resources/js/standard/dummy_data/images/blogPost6.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/blogPost6.jpg?070efa17c85068a75cf78b4e6874a570";

/***/ }),

/***/ "./resources/js/standard/dummy_data/images/headerImage.jpg":
/*!*****************************************************************!*\
  !*** ./resources/js/standard/dummy_data/images/headerImage.jpg ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/headerImage.jpg?863c192b97b0ba7fb245afd8b6c11cb6";

/***/ })

}]);