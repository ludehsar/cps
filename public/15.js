(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

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

/***/ })

}]);