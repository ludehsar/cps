(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./resources/js/shared/components/CardChart.js":
/*!*****************************************************!*\
  !*** ./resources/js/shared/components/CardChart.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_5__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var styles = function styles(theme) {
  return {
    cardContentInner: {
      marginTop: theme.spacing(-4)
    }
  };
};

function labelFormatter(label) {
  return Object(date_fns_format__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(label * 1000), "MMMM d, p yyyy");
}

function calculateMin(data, yKey, factor) {
  var max = Number.POSITIVE_INFINITY;
  data.forEach(function (element) {
    if (max > element[yKey]) {
      max = element[yKey];
    }
  });
  return Math.round(max - max * factor);
}

var itemHeight = 216;
var options = ["1 Week", "1 Month", "6 Months"];

function CardChart(props) {
  var color = props.color,
      data = props.data,
      title = props.title,
      classes = props.classes,
      theme = props.theme,
      height = props.height;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("1 Month"),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedOption = _useState4[0],
      setSelectedOption = _useState4[1];

  var handleClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
    setAnchorEl(event.currentTarget);
  }, [setAnchorEl]);
  var formatter = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (value) {
    return [value, title];
  }, [title]);
  var getSubtitle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    switch (selectedOption) {
      case "1 Week":
        return "Last week";

      case "1 Month":
        return "Last month";

      case "6 Months":
        return "Last 6 months";

      default:
        throw new Error("No branch selected in switch-statement");
    }
  }, [selectedOption]);
  var processData = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    var seconds;

    switch (selectedOption) {
      case "1 Week":
        seconds = 60 * 60 * 24 * 7;
        break;

      case "1 Month":
        seconds = 60 * 60 * 24 * 31;
        break;

      case "6 Months":
        seconds = 60 * 60 * 24 * 31 * 6;
        break;

      default:
        throw new Error("No branch selected in switch-statement");
    }

    var minSeconds = new Date() / 1000 - seconds;
    var arr = [];

    for (var i = 0; i < data.length; i += 1) {
      if (minSeconds < data[i].timestamp) {
        arr.unshift(data[i]);
      }
    }

    return arr;
  }, [data, selectedOption]);
  var handleClose = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setAnchorEl(null);
  }, [setAnchorEl]);
  var selectOption = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (selectedOption) {
    setSelectedOption(selectedOption);
    handleClose();
  }, [setSelectedOption, handleClose]);
  var isOpen = Boolean(anchorEl);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    pt: 2,
    px: 2,
    pb: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    display: "flex",
    justifyContent: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "subtitle1"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "body2",
    color: "textSecondary"
  }, getSubtitle())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
    "aria-label": "More",
    "aria-owns": isOpen ? "long-menu" : undefined,
    "aria-haspopup": "true",
    onClick: handleClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_5___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
    id: "long-menu",
    anchorEl: anchorEl,
    open: isOpen,
    onClose: handleClose,
    PaperProps: {
      style: {
        maxHeight: itemHeight,
        width: 200
      }
    },
    disableScrollLock: true
  }, options.map(function (option) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
      key: option,
      selected: option === selectedOption,
      onClick: function onClick() {
        selectOption(option);
      },
      name: option
    }, option);
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    className: classes.cardContentInner,
    height: height
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_2__["ResponsiveContainer"], {
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_2__["AreaChart"], {
    data: processData(),
    type: "number"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_2__["XAxis"], {
    dataKey: "timestamp",
    type: "number",
    domain: ["dataMin", "dataMax"],
    hide: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_2__["YAxis"], {
    domain: [calculateMin(data, "value", 0.05), "dataMax"],
    hide: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_2__["Area"], {
    type: "monotone",
    dataKey: "value",
    stroke: color,
    fill: color
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    labelFormatter: labelFormatter,
    formatter: formatter,
    cursor: false,
    contentStyle: {
      border: "none",
      padding: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[1]
    },
    labelStyle: theme.typography.body1,
    itemStyle: {
      fontSize: theme.typography.body1.fontSize,
      letterSpacing: theme.typography.body1.letterSpacing,
      fontFamily: theme.typography.body1.fontFamily,
      lineHeight: theme.typography.body1.lineHeight,
      fontWeight: theme.typography.body1.fontWeight
    }
  }))))));
}

CardChart.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles, {
  withTheme: true
})(CardChart));

/***/ })

}]);