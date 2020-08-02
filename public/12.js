(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./resources/js/admin/components/subscription/AddBalanceDialog.js":
/*!************************************************************************!*\
  !*** ./resources/js/admin/components/subscription/AddBalanceDialog.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _stripe_StripeCardForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stripe/StripeCardForm */ "./resources/js/admin/components/subscription/stripe/StripeCardForm.js");
/* harmony import */ var _stripe_StripeIBANForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stripe/StripeIBANForm */ "./resources/js/admin/components/subscription/stripe/StripeIBANForm.js");
/* harmony import */ var _shared_components_FormDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/FormDialog */ "./resources/js/shared/components/FormDialog.js");
/* harmony import */ var _shared_components_ColoredButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/ColoredButton */ "./resources/js/shared/components/ColoredButton.js");
/* harmony import */ var _shared_components_HighlightedInformation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/HighlightedInformation */ "./resources/js/shared/components/HighlightedInformation.js");
/* harmony import */ var _shared_components_ButtonCircularProgress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/ButtonCircularProgress */ "./resources/js/shared/components/ButtonCircularProgress.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var stripePromise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__["loadStripe"])("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
var paymentOptions = ["Credit Card", "SEPA Direct Debit"];
var AddBalanceDialog = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["withTheme"])(function (props) {
  var open = props.open,
      theme = props.theme,
      onClose = props.onClose,
      onSuccess = props.onSuccess;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("Credit Card"),
      _useState4 = _slicedToArray(_useState3, 2),
      paymentOption = _useState4[0],
      setPaymentOption = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState6 = _slicedToArray(_useState5, 2),
      stripeError = _useState6[0],
      setStripeError = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState8 = _slicedToArray(_useState7, 2),
      name = _useState8[0],
      setName = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState10 = _slicedToArray(_useState9, 2),
      email = _useState10[0],
      setEmail = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState12 = _slicedToArray(_useState11, 2),
      amount = _useState12[0],
      setAmount = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState14 = _slicedToArray(_useState13, 2),
      amountError = _useState14[0],
      setAmountError = _useState14[1];

  var elements = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__["useElements"])();
  var stripe = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__["useStripe"])();

  var onAmountChange = function onAmountChange(amount) {
    if (amount < 0) {
      return;
    }

    if (amountError) {
      setAmountError("");
    }

    setAmount(amount);
  };

  var getStripePaymentInfo = function getStripePaymentInfo() {
    switch (paymentOption) {
      case "Credit Card":
        {
          return {
            type: "card",
            card: elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__["CardElement"]),
            billing_details: {
              name: name
            }
          };
        }

      case "SEPA Direct Debit":
        {
          return {
            type: "sepa_debit",
            sepa_debit: elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__["IbanElement"]),
            billing_details: {
              email: email,
              name: name
            }
          };
        }

      default:
        throw new Error("No case selected in switch statement");
    }
  };

  var renderPaymentComponent = function renderPaymentComponent() {
    switch (paymentOption) {
      case "Credit Card":
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
          mb: 2
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_stripe_StripeCardForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
          stripeError: stripeError,
          setStripeError: setStripeError,
          setName: setName,
          name: name,
          amount: amount,
          amountError: amountError,
          onAmountChange: onAmountChange
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_components_HighlightedInformation__WEBPACK_IMPORTED_MODULE_10__["default"], null, "You can check this integration using the credit card number", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, "4242 4242 4242 4242 04 / 24 24 242 42424")));

      case "SEPA Direct Debit":
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
          mb: 2
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_stripe_StripeIBANForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
          stripeError: stripeError,
          setStripeError: setStripeError,
          setName: setName,
          setEmail: setEmail,
          name: name,
          email: email,
          amount: amount,
          amountError: amountError,
          onAmountChange: onAmountChange
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_components_HighlightedInformation__WEBPACK_IMPORTED_MODULE_10__["default"], null, "You can check this integration using the IBAN", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, "DE89370400440532013000")));

      default:
        throw new Error("No case selected in switch statement");
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_components_FormDialog__WEBPACK_IMPORTED_MODULE_8__["default"], {
    open: open,
    onClose: onClose,
    headline: "Add Balance",
    hideBackdrop: false,
    loading: loading,
    onFormSubmit: /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var _yield$stripe$createP, error;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                if (!(amount <= 0)) {
                  _context.next = 4;
                  break;
                }

                setAmountError("Can't be zero");
                return _context.abrupt("return");

              case 4:
                if (stripeError) {
                  setStripeError("");
                }

                setLoading(true);
                _context.next = 8;
                return stripe.createPaymentMethod(getStripePaymentInfo());

              case 8:
                _yield$stripe$createP = _context.sent;
                error = _yield$stripe$createP.error;

                if (!error) {
                  _context.next = 14;
                  break;
                }

                setStripeError(error.message);
                setLoading(false);
                return _context.abrupt("return");

              case 14:
                onSuccess();

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(),
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
      pb: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
      mb: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
      container: true,
      spacing: 1
    }, paymentOptions.map(function (option) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        key: option
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_components_ColoredButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        variant: option === paymentOption ? "contained" : "outlined",
        disableElevation: true,
        onClick: function onClick() {
          setStripeError("");
          setPaymentOption(option);
        },
        color: theme.palette.common.black
      }, option));
    }))), renderPaymentComponent()),
    actions: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      fullWidth: true,
      variant: "contained",
      color: "secondary",
      type: "submit",
      size: "large",
      disabled: loading
    }, "Pay with Stripe ", loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_components_ButtonCircularProgress__WEBPACK_IMPORTED_MODULE_11__["default"], null)))
  });
});
AddBalanceDialog.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onSuccess: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};

function Wrapper(props) {
  var open = props.open,
      onClose = props.onClose,
      onSuccess = props.onSuccess;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__["Elements"], {
    stripe: stripePromise
  }, open && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AddBalanceDialog, {
    open: open,
    onClose: onClose,
    onSuccess: onSuccess
  }));
}

AddBalanceDialog.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onSuccess: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "./resources/js/admin/components/subscription/stripe/StripeCardForm.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/admin/components/subscription/stripe/StripeCardForm.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _StripeTextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StripeTextField */ "./resources/js/admin/components/subscription/stripe/StripeTextField.js");






function StripeCardForm(props) {
  var stripeError = props.stripeError,
      setStripeError = props.setStripeError,
      amount = props.amount,
      amountError = props.amountError,
      onAmountChange = props.onAmountChange,
      name = props.name,
      setName = props.setName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 2,
    justify: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    variant: "outlined",
    margin: "none",
    required: true,
    label: "Your Name",
    value: name,
    onChange: function onChange(event) {
      setName(event.target.value);
    },
    fullWidth: true,
    autoFocus: true,
    autoComplete: "off",
    type: "text"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    required: true,
    value: amount,
    onChange: function onChange(event) {
      onAmountChange(parseInt(event.target.value));
    },
    error: amountError ? true : false,
    helperText: amountError,
    variant: "outlined",
    fullWidth: true,
    type: "number",
    margin: "none",
    label: "Amount",
    InputProps: {
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputAdornment"], {
        position: "start"
      }, "$")
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StripeTextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    margin: "none",
    fullWidth: true,
    label: "Credit Card",
    error: stripeError ? true : false,
    helperText: stripeError,
    variant: "outlined",
    required: true,
    StripeElement: _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__["CardElement"],
    onChange: function onChange() {
      if (stripeError) {
        setStripeError("");
      }
    }
  })));
}

StripeCardForm.propTypes = {
  stripeError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  setStripeError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  amount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  onAmountChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  amountError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  setName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (StripeCardForm);

/***/ }),

/***/ "./resources/js/admin/components/subscription/stripe/StripeIBANForm.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/admin/components/subscription/stripe/StripeIBANForm.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _StripeTextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StripeTextField */ "./resources/js/admin/components/subscription/stripe/StripeTextField.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__);






function StripeIBANForm(props) {
  var stripeError = props.stripeError,
      setStripeError = props.setStripeError,
      amount = props.amount,
      amountError = props.amountError,
      onAmountChange = props.onAmountChange,
      name = props.name,
      setName = props.setName,
      email = props.email,
      setEmail = props.setEmail;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 2,
    justify: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    variant: "outlined",
    margin: "none",
    required: true,
    label: "Your Name",
    value: name,
    onChange: function onChange(event) {
      setName(event.target.value);
    },
    fullWidth: true,
    autoFocus: true,
    autoComplete: "off",
    type: "text"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    required: true,
    value: amount,
    onChange: function onChange(event) {
      onAmountChange(parseInt(event.target.value));
    },
    error: amountError ? true : false,
    helperText: amountError,
    variant: "outlined",
    fullWidth: true,
    type: "number",
    margin: "none",
    label: "Amount",
    InputProps: {
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputAdornment"], {
        position: "start"
      }, "$")
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    required: true,
    variant: "outlined",
    fullWidth: true,
    value: email,
    onChange: function onChange(event) {
      setEmail(event.target.value);
    },
    type: "email",
    margin: "none",
    label: "Email"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StripeTextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    margin: "none",
    variant: "outlined",
    fullWidth: true,
    label: "IBAN",
    error: stripeError ? true : false,
    helperText: stripeError,
    required: true,
    StripeElement: _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__["IbanElement"],
    stripeOptions: {
      supportedCountries: ["SEPA"]
    },
    onChange: function onChange() {
      if (stripeError) {
        setStripeError("");
      }
    }
  })));
}

StripeIBANForm.propTypes = {
  stripeError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  setStripeError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  amount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  onAmountChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  amountError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  setName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  email: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  setEmail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (StripeIBANForm);

/***/ }),

/***/ "./resources/js/admin/components/subscription/stripe/StripeTextField.js":
/*!******************************************************************************!*\
  !*** ./resources/js/admin/components/subscription/stripe/StripeTextField.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function MyInputComponent(props) {
  var Component = props.component,
      inputRef = props.inputRef,
      other = _objectWithoutProperties(props, ["component", "inputRef"]); // implement `InputElement` interface


  react__WEBPACK_IMPORTED_MODULE_0___default.a.useImperativeHandle(inputRef, function () {
    return {
      focus: function focus() {} // logic to focus the rendered component from 3rd party belongs here
      // hiding the value e.g. react-stripe-elements

    };
  }); // `Component` will be your `SomeThirdPartyComponent` from below

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, other);
}

function StripeTextField(props) {
  var stripeOptions = props.stripeOptions,
      StripeElement = props.StripeElement,
      select = props.select,
      theme = props.theme,
      rest = _objectWithoutProperties(props, ["stripeOptions", "StripeElement", "select", "theme"]);

  var options = _objectSpread({
    style: {
      base: _objectSpread(_objectSpread({}, theme.typography.body1), {}, {
        color: theme.palette.text.primary,
        fontSize: "16px",
        fontSmoothing: "antialiased",
        "::placeholder": {
          color: theme.palette.text.secondary
        }
      }),
      invalid: {
        iconColor: theme.palette.error.main,
        color: theme.palette.error.main
      }
    }
  }, stripeOptions);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], _extends({
    InputLabelProps: {
      shrink: true
    },
    inputProps: {
      component: StripeElement,
      options: options
    },
    InputProps: {
      inputComponent: MyInputComponent
    }
  }, rest));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["withTheme"])(StripeTextField));

/***/ })

}]);