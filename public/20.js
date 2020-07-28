(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./resources/js/shared/components/ImageCropper.js":
/*!********************************************************!*\
  !*** ./resources/js/shared/components/ImageCropper.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_cropper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cropper */ "./node_modules/react-cropper/dist/react-cropper.js");
/* harmony import */ var react_cropper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_cropper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _functions_shadeColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/shadeColor */ "./resources/js/shared/functions/shadeColor.js");





var styles = {
  cropperWrapper: {
    "& img": {
      height: "auto",
      width: "100%",
      maxWidth: "100%"
    }
  },
  "@global": {
    ".cropper-container": {
      direction: "ltr",
      fontSize: "0",
      lineHeight: "0",
      position: "relative",
      M: "none",
      touchAction: "none",
      W: "none",
      fallbacks: [{
        M: "none"
      }, {
        M: "none"
      }],
      userSelect: "none"
    },
    ".cropper-container img": {
      display: "block",
      height: "100%",
      imageOrientation: "0deg",
      maxHeight: "none !important",
      maxWidth: "none !important",
      minHeight: "0 !important",
      minWidth: "0 !important",
      width: "100%"
    },
    ".cropper-wrap-box, .cropper-canvas, .cropper-drag-box, .cropper-crop-box, .cropper-modal": {
      bottom: "0",
      left: "0",
      position: "absolute",
      right: "0",
      top: "0"
    },
    ".cropper-wrap-box, .cropper-canvas": {
      overflow: "hidden"
    },
    ".cropper-drag-box": {
      backgroundColor: "#fff",
      opacity: "0"
    },
    ".cropper-modal": {
      backgroundColor: "#000",
      opacity: "0.5"
    },
    ".cropper-view-box": {
      display: "block",
      height: "100%",
      outline: function outline(props) {
        return "1px solid ".concat(props.color);
      },
      outlineColor: function outlineColor(props) {
        return "1px solid ".concat(Object(_functions_shadeColor__WEBPACK_IMPORTED_MODULE_4__["default"])(props.color, 0.75));
      },
      overflow: "hidden",
      width: "100%"
    },
    ".cropper-dashed": {
      border: "0 dashed #eee",
      display: "block",
      opacity: "0.5",
      position: "absolute"
    },
    ".cropper-dashed.dashed-h": {
      borderBottomWidth: 1,
      borderTopWidth: 1,
      height: "calc(100% / 3)",
      left: "0",
      top: "calc(100% / 3)",
      width: "100%"
    },
    ".cropper-dashed.dashed-v": {
      borderLeftWidth: 1,
      borderRightWidth: 1,
      height: "100%",
      left: "calc(100% / 3)",
      top: "0",
      width: "calc(100% / 3)"
    },
    ".cropper-center": {
      display: "block",
      height: "0",
      left: "50%",
      opacity: "0.75",
      position: "absolute",
      top: "50%",
      width: "0"
    },
    ".cropper-center::before, .cropper-center::after": {
      backgroundColor: "#eee",
      content: "' '",
      display: "block",
      position: "absolute"
    },
    ".cropper-center::before": {
      height: 1,
      left: -3,
      top: "0",
      width: 7
    },
    ".cropper-center::after": {
      height: 7,
      left: "0",
      top: -3,
      width: 1
    },
    ".cropper-face, .cropper-line, .cropper-point": {
      display: "block",
      height: "100%",
      opacity: "0.1",
      position: "absolute",
      width: "100%"
    },
    ".cropper-face": {
      backgroundColor: "#fff",
      left: "0",
      top: "0"
    },
    ".cropper-line": {
      backgroundColor: function backgroundColor(props) {
        return props.color;
      }
    },
    ".cropper-line.line-e": {
      cursor: "ew-resize",
      right: -3,
      top: "0",
      width: 5
    },
    ".cropper-line.line-n": {
      cursor: "ns-resize",
      height: 5,
      left: "0",
      top: -3
    },
    ".cropper-line.line-w": {
      cursor: "ew-resize",
      left: -3,
      top: "0",
      width: 5
    },
    ".cropper-line.line-s": {
      bottom: -3,
      cursor: "ns-resize",
      height: 5,
      left: "0"
    },
    ".cropper-point": {
      backgroundColor: function backgroundColor(props) {
        return props.color;
      },
      height: 5,
      opacity: "0.75",
      width: 5
    },
    ".cropper-point.point-e": {
      cursor: "ew-resize",
      marginTop: -3,
      right: -3,
      top: "50%"
    },
    ".cropper-point.point-n": {
      cursor: "ns-resize",
      left: "50%",
      marginLeft: -3,
      top: -3
    },
    ".cropper-point.point-w": {
      cursor: "ew-resize",
      left: -3,
      marginTop: -3,
      top: "50%"
    },
    ".cropper-point.point-s": {
      bottom: -3,
      cursor: "s-resize",
      left: "50%",
      marginLeft: -3
    },
    ".cropper-point.point-ne": {
      cursor: "nesw-resize",
      right: -3,
      top: -3
    },
    ".cropper-point.point-nw": {
      cursor: "nwse-resize",
      left: -3,
      top: -3
    },
    ".cropper-point.point-sw": {
      bottom: -3,
      cursor: "nesw-resize",
      left: -3
    },
    ".cropper-point.point-se": {
      bottom: -3,
      cursor: "nwse-resize",
      height: 20,
      opacity: "1",
      right: -3,
      width: 20
    },
    "@media (min-width: 768px)": {
      ".cropper-point.point-se": {
        height: 15,
        width: 15
      }
    },
    "@media (min-width: 992px)": {
      ".cropper-point.point-se": {
        height: 10,
        width: 10
      }
    },
    "@media (min-width: 1200px)": {
      ".cropper-point.point-se": {
        height: 5,
        opacity: "0.75",
        width: 5
      }
    },
    ".cropper-point.point-se::before": {
      backgroundColor: function backgroundColor(props) {
        return props.color;
      },
      bottom: "-50%",
      content: "' '",
      display: "block",
      height: "200%",
      opacity: "0",
      position: "absolute",
      right: "-50%",
      width: "200%"
    },
    ".cropper-invisible": {
      opacity: "0"
    },
    ".cropper-bg": {
      backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC')"
    },
    ".cropper-hide": {
      display: "block",
      height: "0",
      position: "absolute",
      width: "0"
    },
    ".cropper-hidden": {
      display: "none !important"
    },
    ".cropper-move": {
      cursor: "move"
    },
    ".cropper-crop": {
      cursor: "crosshair"
    },
    ".cropper-disabled .cropper-drag-box, .cropper-disabled .cropper-face, .cropper-disabled .cropper-line, .cropper-disabled .cropper-point": {
      cursor: "not-allowed"
    }
  }
};

function ImageCropper(props) {
  var onCrop = props.onCrop,
      classes = props.classes,
      src = props.src,
      aspectRatio = props.aspectRatio,
      setCropFunction = props.setCropFunction;
  var cropper = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var crop = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    onCrop(cropper.current.getCroppedCanvas().toDataURL());
  }, [onCrop, cropper]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setCropFunction(crop);
  }, [setCropFunction, crop]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.cropperWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_cropper__WEBPACK_IMPORTED_MODULE_2___default.a, {
    ref: cropper,
    src: src,
    guides: false,
    zoomable: false,
    viewMode: 3,
    aspectRatio: aspectRatio,
    cropmove: aspectRatio ? null : function () {
      var cropBoxData = cropper.current.getCropBoxData();
      var cropBoxWidth = cropBoxData.width;
      var aspRatio = cropBoxWidth / cropBoxData.height;

      if (aspRatio < 1) {
        cropper.current.setCropBoxData({
          height: cropBoxWidth / 1
        });
      } else if (aspRatio > 16 / 9) {
        cropper.current.setCropBoxData({
          height: cropBoxWidth / (16 / 9)
        });
      }
    }
  }));
}

ImageCropper.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onCrop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  setCropFunction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  aspectRatio: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(ImageCropper));

/***/ })

}]);