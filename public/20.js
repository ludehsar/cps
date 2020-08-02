(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./resources/js/admin/components/Main.js":
/*!***********************************************!*\
  !*** ./resources/js/admin/components/Main.js ***!
  \***********************************************/
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
/* harmony import */ var _Routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Routing */ "./resources/js/admin/components/Routing.js");
/* harmony import */ var _navigation_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation/NavBar */ "./resources/js/admin/components/navigation/NavBar.js");
/* harmony import */ var _shared_components_ConsecutiveSnackbarMessages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/ConsecutiveSnackbarMessages */ "./resources/js/shared/components/ConsecutiveSnackbarMessages.js");
/* harmony import */ var _shared_functions_smoothScrollTop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/functions/smoothScrollTop */ "./resources/js/shared/functions/smoothScrollTop.js");
/* harmony import */ var _dummy_data_persons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dummy_data/persons */ "./resources/js/admin/dummy_data/persons.js");
/* harmony import */ var _subscription_LazyLoadAddBalanceDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./subscription/LazyLoadAddBalanceDialog */ "./resources/js/admin/components/subscription/LazyLoadAddBalanceDialog.js");
/* harmony import */ var _courses_LazyLoadAddNewCourseDialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./courses/LazyLoadAddNewCourseDialog */ "./resources/js/admin/components/courses/LazyLoadAddNewCourseDialog.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var styles = function styles(theme) {
  return {
    main: _defineProperty({
      marginLeft: theme.spacing(9),
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    }, theme.breakpoints.down("xs"), {
      marginLeft: 0
    })
  };
};

function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [array[j], array[i]];
    array[i] = _ref[0];
    array[j] = _ref[1];
  }
}

function Main(props) {
  var classes = props.classes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      selectedTab = _useState2[0],
      setSelectedTab = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      CardChart = _useState4[0],
      setCardChart = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      hasFetchedCardChart = _useState6[0],
      setHasFetchedCardChart = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState8 = _slicedToArray(_useState7, 2),
      EmojiTextArea = _useState8[0],
      setEmojiTextArea = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      hasFetchedEmojiTextArea = _useState10[0],
      setHasFetchedEmojiTextArea = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState12 = _slicedToArray(_useState11, 2),
      ImageCropper = _useState12[0],
      setImageCropper = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState14 = _slicedToArray(_useState13, 2),
      hasFetchedImageCropper = _useState14[0],
      setHasFetchedImageCropper = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState16 = _slicedToArray(_useState15, 2),
      Dropzone = _useState16[0],
      setDropzone = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState18 = _slicedToArray(_useState17, 2),
      hasFetchedDropzone = _useState18[0],
      setHasFetchedDropzone = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState20 = _slicedToArray(_useState19, 2),
      DateTimePicker = _useState20[0],
      setDateTimePicker = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState22 = _slicedToArray(_useState21, 2),
      hasFetchedDateTimePicker = _useState22[0],
      setHasFetchedDateTimePicker = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState24 = _slicedToArray(_useState23, 2),
      transactions = _useState24[0],
      setTransactions = _useState24[1];

  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState26 = _slicedToArray(_useState25, 2),
      ladders = _useState26[0],
      setLadders = _useState26[1];

  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    views: [],
    profit: []
  }),
      _useState28 = _slicedToArray(_useState27, 2),
      statistics = _useState28[0],
      setStatistics = _useState28[1];

  var _useState29 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState30 = _slicedToArray(_useState29, 2),
      posts = _useState30[0],
      setPosts = _useState30[1];

  var _useState31 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState32 = _slicedToArray(_useState31, 2),
      targets = _useState32[0],
      setTargets = _useState32[1];

  var _useState33 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState34 = _slicedToArray(_useState33, 2),
      messages = _useState34[0],
      setMessages = _useState34[1];

  var _useState35 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState36 = _slicedToArray(_useState35, 2),
      isAccountActivated = _useState36[0],
      setIsAccountActivated = _useState36[1];

  var _useState37 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState38 = _slicedToArray(_useState37, 2),
      isAddBalanceDialogOpen = _useState38[0],
      setIsAddBalanceDialogOpen = _useState38[1];

  var _useState39 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState40 = _slicedToArray(_useState39, 2),
      isAddNewCourseDialogOpen = _useState40[0],
      setIsAddNewCourseDialogOpen = _useState40[1];

  var _useState41 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState42 = _slicedToArray(_useState41, 2),
      pushMessageToSnackbar = _useState42[0],
      setPushMessageToSnackbar = _useState42[1];

  var _useState43 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState44 = _slicedToArray(_useState43, 2),
      user = _useState44[0],
      setUser = _useState44[1];

  var _useState45 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState46 = _slicedToArray(_useState45, 2),
      isLoggedIn = _useState46[0],
      setIsLoggedIn = _useState46[1];

  var _useState47 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState48 = _slicedToArray(_useState47, 2),
      needToRefetchCourses = _useState48[0],
      setNeedToRefetchCourses = _useState48[1];

  var fetchRandomTargets = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    var targets = [];

    for (var i = 0; i < 35; i += 1) {
      var randomPerson = _dummy_data_persons__WEBPACK_IMPORTED_MODULE_8__["default"][Math.floor(Math.random() * _dummy_data_persons__WEBPACK_IMPORTED_MODULE_8__["default"].length)];
      var target = {
        id: i,
        number1: Math.floor(Math.random() * 251),
        number2: Math.floor(Math.random() * 251),
        number3: Math.floor(Math.random() * 251),
        number4: Math.floor(Math.random() * 251),
        name: randomPerson.name,
        profilePicUrl: randomPerson.profilePicUrl,
        isActivated: Math.round(Math.random()) ? true : false
      };
      targets.push(target);
    }

    setTargets(targets);
  }, [setTargets]);
  var openAddBalanceDialog = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsAddBalanceDialogOpen(true);
  }, [setIsAddBalanceDialogOpen]);
  var closeAddBalanceDialog = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsAddBalanceDialogOpen(false);
  }, [setIsAddBalanceDialogOpen]);
  var openAddNewCourseDialog = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsAddNewCourseDialogOpen(true);
  }, [setIsAddNewCourseDialogOpen]);
  var closeAddNewCourseDialog = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsAddNewCourseDialogOpen(false);
  }, [setIsAddNewCourseDialogOpen]);
  var onPaymentSuccess = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    pushMessageToSnackbar({
      text: "Your balance has been updated."
    });
    setIsAddBalanceDialogOpen(false);
  }, [pushMessageToSnackbar, setIsAddBalanceDialogOpen]);
  var onNewCourseCreatedSuccess = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    pushMessageToSnackbar({
      text: "Your course has been successfully created."
    });
    setIsAddNewCourseDialogOpen(false);
    setNeedToRefetchCourses(true);
  }, [pushMessageToSnackbar, setIsAddNewCourseDialogOpen, setNeedToRefetchCourses]);
  var toggleAccountActivation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (pushMessageToSnackbar) {
      if (isAccountActivated) {
        pushMessageToSnackbar({
          text: "Your account is now deactivated."
        });
      } else {
        pushMessageToSnackbar({
          text: "Your account is now activated."
        });
      }
    }

    setIsAccountActivated(!isAccountActivated);
  }, [pushMessageToSnackbar, isAccountActivated, setIsAccountActivated]);
  var selectDashboard = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    Object(_shared_functions_smoothScrollTop__WEBPACK_IMPORTED_MODULE_7__["default"])();
    setSelectedTab("Dashboard");

    if (!hasFetchedCardChart) {
      setHasFetchedCardChart(true);
      Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, /*! ../../shared/components/CardChart */ "./resources/js/shared/components/CardChart.js")).then(function (Component) {
        setCardChart(Component["default"]);
      });
    }
  }, [setSelectedTab, setCardChart, hasFetchedCardChart, setHasFetchedCardChart]);
  var selectLadder = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    Object(_shared_functions_smoothScrollTop__WEBPACK_IMPORTED_MODULE_7__["default"])();
    setSelectedTab("Ladder");
  }, [setSelectedTab]);
  var selectUser = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    Object(_shared_functions_smoothScrollTop__WEBPACK_IMPORTED_MODULE_7__["default"])();
    setSelectedTab("User");
  }, [setSelectedTab]);
  var selectCourse = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    Object(_shared_functions_smoothScrollTop__WEBPACK_IMPORTED_MODULE_7__["default"])();
    setSelectedTab("Course");
  }, [setSelectedTab]);
  var selectPosts = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    Object(_shared_functions_smoothScrollTop__WEBPACK_IMPORTED_MODULE_7__["default"])();
    document.title = "WaVer - Posts";
    setSelectedTab("Posts");

    if (!hasFetchedEmojiTextArea) {
      setHasFetchedEmojiTextArea(true);
      Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(7), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, /*! ../../shared/components/EmojiTextArea */ "./resources/js/shared/components/EmojiTextArea.js")).then(function (Component) {
        setEmojiTextArea(Component["default"]);
      });
    }

    if (!hasFetchedImageCropper) {
      setHasFetchedImageCropper(true);
      Promise.all(/*! import() */[__webpack_require__.e(14), __webpack_require__.e(19)]).then(__webpack_require__.bind(null, /*! ../../shared/components/ImageCropper */ "./resources/js/shared/components/ImageCropper.js")).then(function (Component) {
        setImageCropper(Component["default"]);
      });
    }

    if (!hasFetchedDropzone) {
      setHasFetchedDropzone(true);
      Promise.all(/*! import() */[__webpack_require__.e(10), __webpack_require__.e(18)]).then(__webpack_require__.bind(null, /*! ../../shared/components/Dropzone */ "./resources/js/shared/components/Dropzone.js")).then(function (Component) {
        setDropzone(Component["default"]);
      });
    }

    if (!hasFetchedDateTimePicker) {
      setHasFetchedDateTimePicker(true);
      Promise.all(/*! import() */[__webpack_require__.e(5), __webpack_require__.e(17)]).then(__webpack_require__.bind(null, /*! ../../shared/components/DateTimePicker */ "./resources/js/shared/components/DateTimePicker.js")).then(function (Component) {
        setDateTimePicker(Component["default"]);
      });
    }
  }, [setSelectedTab, setEmojiTextArea, setImageCropper, setDropzone, setDateTimePicker, hasFetchedEmojiTextArea, setHasFetchedEmojiTextArea, hasFetchedImageCropper, setHasFetchedImageCropper, hasFetchedDropzone, setHasFetchedDropzone, hasFetchedDateTimePicker, setHasFetchedDateTimePicker]);
  var selectSubscription = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    Object(_shared_functions_smoothScrollTop__WEBPACK_IMPORTED_MODULE_7__["default"])();
    document.title = "WaVer - Subscription";
    setSelectedTab("Subscription");
  }, [setSelectedTab]);
  var getPushMessageFromChild = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (pushMessage) {
    setPushMessageToSnackbar(function () {
      return pushMessage;
    });
  }, [setPushMessageToSnackbar]);
  var getUserData = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    axios.get('/api/user').then(function (res) {
      setUser(res.data);
      setIsLoggedIn(true);
    }, [setUser, setIsLoggedIn]);
  }, [setUser, setIsLoggedIn]);
  var logoutUser = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    axios.post("/logout").then(function () {
      window.location.reload();
    });
  });
  var fetchAllLadders = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    axios.get('/api/ladders').then(function (res) {
      setLadders(res.data);
    });
  }, [setLadders]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getUserData();
    fetchAllLadders();
  }, [getUserData, fetchAllLadders]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_courses_LazyLoadAddNewCourseDialog__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: isAddNewCourseDialogOpen,
    onClose: closeAddNewCourseDialog,
    onSuccess: onNewCourseCreatedSuccess
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_subscription_LazyLoadAddBalanceDialog__WEBPACK_IMPORTED_MODULE_9__["default"], {
    open: isAddBalanceDialogOpen,
    onClose: closeAddBalanceDialog,
    onSuccess: onPaymentSuccess
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navigation_NavBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    selectedTab: selectedTab,
    messages: messages,
    isLoggedIn: isLoggedIn,
    userData: user,
    handleUserData: setUser,
    handleUserLogout: logoutUser
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_ConsecutiveSnackbarMessages__WEBPACK_IMPORTED_MODULE_6__["default"], {
    getPushMessageFromChild: getPushMessageFromChild
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.main)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Routing__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isAccountActivated: isAccountActivated,
    ImageCropper: ImageCropper,
    EmojiTextArea: EmojiTextArea,
    CardChart: CardChart,
    Dropzone: Dropzone,
    DateTimePicker: DateTimePicker,
    toggleAccountActivation: toggleAccountActivation,
    pushMessageToSnackbar: pushMessageToSnackbar,
    transactions: transactions,
    ladders: ladders,
    statistics: statistics,
    posts: posts,
    targets: targets,
    selectDashboard: selectDashboard,
    selectLadder: selectLadder,
    selectUser: selectUser,
    selectCourse: selectCourse,
    selectPosts: selectPosts,
    selectSubscription: selectSubscription,
    openAddBalanceDialog: openAddBalanceDialog,
    openAddNewCourseDialog: openAddNewCourseDialog,
    setTargets: setTargets,
    setPosts: setPosts,
    needToRefetchCourses: needToRefetchCourses,
    setNeedToRefetchCourses: setNeedToRefetchCourses
  })));
}

Main.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles, {
  withTheme: true
})( /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(Main)));

/***/ }),

/***/ "./resources/js/admin/components/Routing.js":
/*!**************************************************!*\
  !*** ./resources/js/admin/components/Routing.js ***!
  \**************************************************/
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
/* harmony import */ var _dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/Dashboard */ "./resources/js/admin/components/dashboard/Dashboard.js");
/* harmony import */ var _subscription_Subscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscription/Subscription */ "./resources/js/admin/components/subscription/Subscription.js");
/* harmony import */ var _ladders_Ladder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ladders/Ladder */ "./resources/js/admin/components/ladders/Ladder.js");
/* harmony import */ var _users_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users/User */ "./resources/js/admin/components/users/User.js");
/* harmony import */ var _courses_Course__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./courses/Course */ "./resources/js/admin/components/courses/Course.js");
/* harmony import */ var _posts_Posts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./posts/Posts */ "./resources/js/admin/components/posts/Posts.js");
/* harmony import */ var _courses_CourseDetails__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./courses/CourseDetails */ "./resources/js/admin/components/courses/CourseDetails.js");
/* harmony import */ var _ladders_problems_LadderProblem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ladders/problems/LadderProblem */ "./resources/js/admin/components/ladders/problems/LadderProblem.js");
/* harmony import */ var _shared_components_PropsRoute__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/components/PropsRoute */ "./resources/js/shared/components/PropsRoute.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var styles = function styles(theme) {
  var _wrapper;

  return {
    wrapper: (_wrapper = {
      margin: theme.spacing(1),
      width: "auto"
    }, _defineProperty(_wrapper, theme.breakpoints.up("xs"), {
      width: "95%",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4)
    }), _defineProperty(_wrapper, theme.breakpoints.up("sm"), {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto"
    }), _defineProperty(_wrapper, theme.breakpoints.up("md"), {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: "82.5%",
      marginLeft: "auto",
      marginRight: "auto"
    }), _defineProperty(_wrapper, theme.breakpoints.up("lg"), {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: "70%",
      marginLeft: "auto",
      marginRight: "auto"
    }), _wrapper)
  };
};

function Routing(props) {
  var classes = props.classes,
      EmojiTextArea = props.EmojiTextArea,
      ImageCropper = props.ImageCropper,
      Dropzone = props.Dropzone,
      DateTimePicker = props.DateTimePicker,
      pushMessageToSnackbar = props.pushMessageToSnackbar,
      posts = props.posts,
      transactions = props.transactions,
      ladders = props.ladders,
      toggleAccountActivation = props.toggleAccountActivation,
      CardChart = props.CardChart,
      statistics = props.statistics,
      targets = props.targets,
      setTargets = props.setTargets,
      setPosts = props.setPosts,
      isAccountActivated = props.isAccountActivated,
      selectDashboard = props.selectDashboard,
      selectLadder = props.selectLadder,
      selectUser = props.selectUser,
      selectCourse = props.selectCourse,
      selectPosts = props.selectPosts,
      selectSubscription = props.selectSubscription,
      openAddBalanceDialog = props.openAddBalanceDialog,
      openAddNewCourseDialog = props.openAddNewCourseDialog,
      needToRefetchCourses = props.needToRefetchCourses,
      setNeedToRefetchCourses = props.setNeedToRefetchCourses;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_PropsRoute__WEBPACK_IMPORTED_MODULE_12__["default"], {
    path: "/admin/ladders/:id",
    component: _ladders_problems_LadderProblem__WEBPACK_IMPORTED_MODULE_11__["default"],
    selectLadder: selectLadder
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_PropsRoute__WEBPACK_IMPORTED_MODULE_12__["default"], {
    path: "/admin/ladders",
    component: _ladders_Ladder__WEBPACK_IMPORTED_MODULE_6__["default"],
    ladders: ladders,
    selectLadder: selectLadder
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_PropsRoute__WEBPACK_IMPORTED_MODULE_12__["default"], {
    path: "/admin/users",
    component: _users_User__WEBPACK_IMPORTED_MODULE_7__["default"],
    pushMessageToSnackbar: pushMessageToSnackbar,
    selectUser: selectUser
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_PropsRoute__WEBPACK_IMPORTED_MODULE_12__["default"], {
    path: "/admin/courses/:id",
    component: _courses_CourseDetails__WEBPACK_IMPORTED_MODULE_10__["default"],
    selectCourse: selectCourse
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_PropsRoute__WEBPACK_IMPORTED_MODULE_12__["default"], {
    path: "/admin/courses",
    component: _courses_Course__WEBPACK_IMPORTED_MODULE_8__["default"],
    pushMessageToSnackbar: pushMessageToSnackbar,
    selectCourse: selectCourse,
    openAddNewCourseDialog: openAddNewCourseDialog,
    needToRefetchCourses: needToRefetchCourses,
    setNeedToRefetchCourses: setNeedToRefetchCourses
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_PropsRoute__WEBPACK_IMPORTED_MODULE_12__["default"], {
    path: "/admin/posts",
    component: _posts_Posts__WEBPACK_IMPORTED_MODULE_9__["default"],
    selectPosts: selectPosts,
    EmojiTextArea: EmojiTextArea,
    ImageCropper: ImageCropper,
    Dropzone: Dropzone,
    DateTimePicker: DateTimePicker,
    posts: posts,
    setPosts: setPosts,
    pushMessageToSnackbar: pushMessageToSnackbar
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_PropsRoute__WEBPACK_IMPORTED_MODULE_12__["default"], {
    path: "/admin/subscription",
    component: _subscription_Subscription__WEBPACK_IMPORTED_MODULE_5__["default"],
    transactions: transactions,
    pushMessageToSnackbar: pushMessageToSnackbar,
    selectSubscription: selectSubscription,
    openAddBalanceDialog: openAddBalanceDialog
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_PropsRoute__WEBPACK_IMPORTED_MODULE_12__["default"], {
    path: "",
    component: _dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_4__["default"],
    toggleAccountActivation: toggleAccountActivation,
    pushMessageToSnackbar: pushMessageToSnackbar,
    CardChart: CardChart,
    statistics: statistics,
    targets: targets,
    setTargets: setTargets,
    isAccountActivated: isAccountActivated,
    selectDashboard: selectDashboard
  })));
}

Routing.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  EmojiTextArea: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType,
  ImageCropper: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType,
  Dropzone: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType,
  DateTimePicker: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType,
  pushMessageToSnackbar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  setTargets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setPosts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  posts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  transactions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  ladders: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  toggleAccountActivation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  CardChart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType,
  statistics: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  targets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  isAccountActivated: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  selectDashboard: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  selectLadder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  selectUser: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  selectCourse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  selectPosts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  selectSubscription: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  openAddBalanceDialog: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  openAddNewCourseDialog: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  needToRefetchCourses: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  setNeedToRefetchCourses: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles, {
  withTheme: true
})( /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(Routing)));

/***/ }),

/***/ "./resources/js/admin/components/courses/Course.js":
/*!*********************************************************!*\
  !*** ./resources/js/admin/components/courses/Course.js ***!
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
/* harmony import */ var _CourseDataTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CourseDataTable */ "./resources/js/admin/components/courses/CourseDataTable.js");
/* harmony import */ var _CourseInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CourseInfo */ "./resources/js/admin/components/courses/CourseInfo.js");





var styles = {
  divider: {
    backgroundColor: "rgba(0, 0, 0, 0.26)"
  }
};

function Course(props) {
  var classes = props.classes,
      selectCourse = props.selectCourse,
      openAddNewCourseDialog = props.openAddNewCourseDialog,
      needToRefetchCourses = props.needToRefetchCourses,
      setNeedToRefetchCourses = props.setNeedToRefetchCourses;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(selectCourse, [selectCourse]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    disablePadding: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CourseInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    openAddNewCourseDialog: openAddNewCourseDialog
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    className: classes.divider
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CourseDataTable__WEBPACK_IMPORTED_MODULE_3__["default"], {
    needToRefetchCourses: needToRefetchCourses,
    setNeedToRefetchCourses: setNeedToRefetchCourses
  })));
}

Course.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  selectCourse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  openAddNewCourseDialog: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  needToRefetchCourses: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  setNeedToRefetchCourses: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Course));

/***/ }),

/***/ "./resources/js/admin/components/courses/CourseDataTable.js":
/*!******************************************************************!*\
  !*** ./resources/js/admin/components/courses/CourseDataTable.js ***!
  \******************************************************************/
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
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_components_EnhancedTableHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/EnhancedTableHead */ "./resources/js/shared/components/EnhancedTableHead.js");
/* harmony import */ var _shared_components_ColorfulChip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/ColorfulChip */ "./resources/js/shared/components/ColorfulChip.js");
/* harmony import */ var _shared_functions_unixToDateString__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/functions/unixToDateString */ "./resources/js/shared/functions/unixToDateString.js");
/* harmony import */ var _shared_components_HighlightedInformation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/HighlightedInformation */ "./resources/js/shared/components/HighlightedInformation.js");
/* harmony import */ var _shared_functions_currencyPrettyPrint__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/functions/currencyPrettyPrint */ "./resources/js/shared/functions/currencyPrettyPrint.js");
/* harmony import */ var _material_ui_icons_Pageview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Pageview */ "./node_modules/@material-ui/icons/Pageview.js");
/* harmony import */ var _material_ui_icons_Pageview__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Pageview__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var styles = function styles(theme) {
  var _contentWrapper;

  return {
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2)
      }
    },
    tableWrapper: {
      overflowX: "auto",
      width: "100%"
    },
    blackBackground: {
      backgroundColor: theme.palette.primary.main
    },
    contentWrapper: (_contentWrapper = {
      padding: theme.spacing(3)
    }, _defineProperty(_contentWrapper, theme.breakpoints.down("xs"), {
      padding: theme.spacing(2)
    }), _defineProperty(_contentWrapper, "width", "100%"), _contentWrapper),
    dBlock: {
      display: "block !important"
    },
    dNone: {
      display: "none !important"
    },
    firstData: {
      paddingLeft: theme.spacing(3)
    },
    noDecoration: {
      textDecoration: "none !important"
    }
  };
};

var LinearIndeterminate = function LinearIndeterminate(props) {
  var classes = props.classes;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["LinearProgress"], null));
};

var columns = Object(memoize_one__WEBPACK_IMPORTED_MODULE_11__["default"])(function (classes) {
  return [{
    selector: "id",
    name: "#",
    sortable: true
  }, {
    selector: "course_name",
    name: "Course Name",
    sortable: true
  }, {
    selector: "course_description",
    name: "Description",
    sortable: false
  }, {
    selector: "user.name",
    name: "Mentor",
    sortable: true
  }, {
    selector: "course_price",
    name: "Course Price",
    sortable: true
  }, {
    cell: function cell(row) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/admin/courses/" + row.id,
        className: classes.noDecoration
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        variant: "outlined",
        size: "small"
      }, "View"));
    },
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
    name: 'Action'
  }];
});

function CourseDataTable(props) {
  var theme = props.theme,
      classes = props.classes,
      needToRefetchCourses = props.needToRefetchCourses,
      setNeedToRefetchCourses = props.setNeedToRefetchCourses;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState6 = _slicedToArray(_useState5, 2),
      totalRows = _useState6[0],
      setTotalRows = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(10),
      _useState8 = _slicedToArray(_useState7, 2),
      perPage = _useState8[0],
      setPerPage = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState10 = _slicedToArray(_useState9, 2),
      currentPage = _useState10[0],
      setCurrentPage = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState12 = _slicedToArray(_useState11, 2),
      searchQuery = _useState12[0],
      setSearchQuery = _useState12[1];

  var inputSearch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var fetchCourses = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : currentPage;
    setLoading(true);
    axios.get("/api/courses?page=" + page + "&per_page=" + perPage + "&q=" + searchQuery).then(function (res) {
      setData(res.data.data);
      setTotalRows(res.data.total);
      setLoading(false);
    });
  }, [setLoading, setData, perPage, searchQuery, setTotalRows]);
  var handlePageChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (page) {
    setCurrentPage(page);
    fetchCourses(page);
  }, [setCurrentPage, fetchCourses]);
  var handlePerRowsChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (newPerPage, page) {
    setPerPage(newPerPage);
  }, [setPerPage]);
  var handleSearchQueryChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setSearchQuery(inputSearch.current.value);
  }, [setSearchQuery, inputSearch]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function (async) {
    fetchCourses();

    if (needToRefetchCourses) {
      fetchCourses();
      setNeedToRefetchCourses(false);
    }
  }, [fetchCourses, needToRefetchCourses, setNeedToRefetchCourses]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.tableWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DataTable, {
    noHeader: true,
    columns: columns(classes),
    data: data,
    defaultSortField: "id",
    highlightOnHover: true,
    striped: true,
    progressPending: loading,
    progressComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinearIndeterminate, {
      classes: classes
    }),
    persistTableHead: true,
    pagination: true,
    paginationServer: true,
    paginationTotalRows: totalRows,
    onChangeRowsPerPage: handlePerRowsChange,
    onChangePage: handlePageChange,
    subHeader: true,
    subHeaderComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
      id: "outlined-basic",
      label: "Search",
      variant: "outlined",
      size: "small",
      style: {
        margin: '5px'
      },
      inputRef: inputSearch,
      onChange: handleSearchQueryChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: {
        margin: '5px'
      },
      color: "action"
    })),
    subHeaderAlign: "left"
  }));
}

CourseDataTable.propTypes = {
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  needToRefetchCourses: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  setNeedToRefetchCourses: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles, {
  withTheme: true
})(CourseDataTable));

/***/ }),

/***/ "./resources/js/admin/components/courses/CourseDetails.js":
/*!****************************************************************!*\
  !*** ./resources/js/admin/components/courses/CourseDetails.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\Projects\\cps\\resources\\js\\admin\\components\\courses\\CourseDetails.js: Unexpected token, expected \",\" (37:28)\n\n\u001b[0m \u001b[90m 35 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mTypography\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 36 | \u001b[39m      \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mBox\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 37 | \u001b[39m      {{isAddClassPaperOpen \u001b[33m?\u001b[39m (\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                            \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 38 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33mTypography\u001b[39m variant\u001b[33m=\u001b[39m\u001b[32m\"subtitle1\"\u001b[39m gutterBottom\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 39 | \u001b[39m          \u001b[33mClasses\u001b[39m \u001b[33mInformation\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 40 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mTypography\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at Object._raise (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:745:17)\n    at Object.raiseWithData (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:738:17)\n    at Object.raise (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:732:17)\n    at Object.unexpected (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:8806:16)\n    at Object.expect (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:8792:28)\n    at Object.parseObj (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:10438:14)\n    at Object.parseExprAtom (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:10054:28)\n    at Object.parseExprAtom (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:4637:20)\n    at Object.parseExprSubscripts (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:9655:23)\n    at Object.parseMaybeUnary (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:9635:21)\n    at Object.parseExprOps (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:9505:23)\n    at Object.parseMaybeConditional (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:9478:23)\n    at Object.parseMaybeAssign (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:9433:21)\n    at Object.parseExpression (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:9385:23)\n    at Object.jsxParseExpressionContainer (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:4488:30)\n    at Object.jsxParseElementAt (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:4582:36)\n    at Object.jsxParseElement (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:4625:17)\n    at Object.parseExprAtom (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:4632:19)\n    at Object.parseExprSubscripts (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:9655:23)\n    at Object.parseMaybeUnary (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:9635:21)\n    at Object.parseExprOps (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:9505:23)\n    at Object.parseMaybeConditional (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:9478:23)\n    at Object.parseMaybeAssign (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:9433:21)\n    at Object.parseParenAndDistinguishExpression (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:10266:28)\n    at Object.parseExprAtom (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:10006:21)\n    at Object.parseExprAtom (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:4637:20)\n    at Object.parseExprSubscripts (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:9655:23)\n    at Object.parseMaybeUnary (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:9635:21)\n    at Object.parseExprOps (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:9505:23)\n    at Object.parseMaybeConditional (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:9478:23)\n    at Object.parseMaybeAssign (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:9433:21)\n    at Object.parseExpression (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:9385:23)\n    at Object.parseReturnStatement (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:11522:28)\n    at Object.parseStatementContent (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:11203:21)\n    at Object.parseStatement (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:11155:17)\n    at Object.parseBlockOrModuleBlockBody (D:\\Projects\\cps\\node_modules\\@babel\\parser\\lib\\index.js:11730:25)");

/***/ }),

/***/ "./resources/js/admin/components/courses/CourseInfo.js":
/*!*************************************************************!*\
  !*** ./resources/js/admin/components/courses/CourseInfo.js ***!
  \*************************************************************/
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
  toolbar: {
    justifyContent: "space-between"
  }
};

function CourseInfo(props) {
  var classes = props.classes,
      openAddNewCourseDialog = props.openAddNewCourseDialog;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
    className: classes.toolbar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: "Courses",
    secondary: "All courses information"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "contained",
    color: "secondary",
    onClick: openAddNewCourseDialog,
    disableElevation: true
  }, "Add New Course"));
}

CourseInfo.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  openAddNewCourseDialog: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(CourseInfo));

/***/ }),

/***/ "./resources/js/admin/components/courses/LazyLoadAddNewCourseDialog.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/admin/components/courses/LazyLoadAddNewCourseDialog.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function LazyLoadAddNewCourseDialog(props) {
  var open = props.open,
      onClose = props.onClose,
      onSuccess = props.onSuccess;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      AddNewCourseDialog = _useState2[0],
      setAddNewCourseDialog = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      hasFetchedAddNewCourseDialog = _useState4[0],
      setHasFetchedAddBlanceDialog = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (open && !hasFetchedAddNewCourseDialog) {
      setHasFetchedAddBlanceDialog(true);
      Promise.all(/*! import() */[__webpack_require__.e(15), __webpack_require__.e(21)]).then(__webpack_require__.bind(null, /*! ./AddNewCourseDialog */ "./resources/js/admin/components/courses/AddNewCourseDialog.js")).then(function (Component) {
        setAddNewCourseDialog(function () {
          return Component["default"];
        });
      });
    }
  }, [open, hasFetchedAddNewCourseDialog, setHasFetchedAddBlanceDialog, setAddNewCourseDialog]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, AddNewCourseDialog && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AddNewCourseDialog, {
    open: open,
    onClose: onClose,
    onSuccess: onSuccess
  }));
}

LazyLoadAddNewCourseDialog.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onSuccess: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LazyLoadAddNewCourseDialog);

/***/ }),

/***/ "./resources/js/admin/components/dashboard/AccountInformationArea.js":
/*!***************************************************************************!*\
  !*** ./resources/js/admin/components/dashboard/AccountInformationArea.js ***!
  \***************************************************************************/
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
/* harmony import */ var _material_ui_icons_Loop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Loop */ "./node_modules/@material-ui/icons/Loop.js");
/* harmony import */ var _material_ui_icons_Loop__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Loop__WEBPACK_IMPORTED_MODULE_4__);






var styles = function styles(theme) {
  return {
    paper: {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    },
    toolbar: {
      justifyContent: "space-between"
    },
    scaleMinus: {
      transform: "scaleX(-1)"
    },
    "@keyframes spin": {
      from: {
        transform: "rotate(359deg)"
      },
      to: {
        transform: "rotate(0deg)"
      }
    },
    spin: {
      animation: "$spin 2s infinite linear"
    },
    listItemSecondaryAction: {
      paddingRight: theme.spacing(1)
    }
  };
};

function AccountInformationArea(props) {
  var classes = props.classes,
      toggleAccountActivation = props.toggleAccountActivation,
      isAccountActivated = props.isAccountActivated;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
    className: classes.paper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Toolbar"], {
    className: classes.toolbar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    mr: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
    primary: "Status",
    secondary: isAccountActivated ? "Activated" : "Not activated",
    className: "mr-2"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemIcon"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Loop__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(isAccountActivated ? classes.spin : null, classes.scaleMinus)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemSecondaryAction"], {
    className: classes.listItemSecondaryAction
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
    color: "secondary",
    checked: isAccountActivated,
    onClick: toggleAccountActivation,
    inputProps: {
      "aria-label": isAccountActivated ? "Deactivate Account" : "Activate Account"
    }
  }))));
}

AccountInformationArea.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  toggleAccountActivation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  isAccountActivated: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles, {
  withTheme: true
})(AccountInformationArea));

/***/ }),

/***/ "./resources/js/admin/components/dashboard/Dashboard.js":
/*!**************************************************************!*\
  !*** ./resources/js/admin/components/dashboard/Dashboard.js ***!
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
/* harmony import */ var _SettingsArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SettingsArea */ "./resources/js/admin/components/dashboard/SettingsArea.js");
/* harmony import */ var _UserDataArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserDataArea */ "./resources/js/admin/components/dashboard/UserDataArea.js");
/* harmony import */ var _AccountInformationArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AccountInformationArea */ "./resources/js/admin/components/dashboard/AccountInformationArea.js");
/* harmony import */ var _StatisticsArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StatisticsArea */ "./resources/js/admin/components/dashboard/StatisticsArea.js");








function Dashboard(props) {
  var selectDashboard = props.selectDashboard,
      CardChart = props.CardChart,
      statistics = props.statistics,
      toggleAccountActivation = props.toggleAccountActivation,
      pushMessageToSnackbar = props.pushMessageToSnackbar,
      targets = props.targets,
      setTargets = props.setTargets,
      isAccountActivated = props.isAccountActivated;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(selectDashboard, [selectDashboard]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StatisticsArea__WEBPACK_IMPORTED_MODULE_6__["default"], {
    CardChart: CardChart,
    data: statistics
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mt: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "subtitle1",
    gutterBottom: true
  }, "Your Account")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AccountInformationArea__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isAccountActivated: isAccountActivated,
    toggleAccountActivation: toggleAccountActivation
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mt: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "subtitle1",
    gutterBottom: true
  }, "Settings")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SettingsArea__WEBPACK_IMPORTED_MODULE_3__["default"], {
    pushMessageToSnackbar: pushMessageToSnackbar
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserDataArea__WEBPACK_IMPORTED_MODULE_4__["default"], {
    pushMessageToSnackbar: pushMessageToSnackbar,
    targets: targets,
    setTargets: setTargets
  }));
}

Dashboard.propTypes = {
  CardChart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType,
  statistics: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  toggleAccountActivation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  pushMessageToSnackbar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  targets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  setTargets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  isAccountActivated: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  selectDashboard: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./resources/js/admin/components/dashboard/Settings1.js":
/*!**************************************************************!*\
  !*** ./resources/js/admin/components/dashboard/Settings1.js ***!
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
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/withWidth */ "./node_modules/@material-ui/core/esm/withWidth/index.js");
/* harmony import */ var _shared_components_Bordered__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/Bordered */ "./resources/js/shared/components/Bordered.js");
/* harmony import */ var _shared_components_ButtonCircularProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/ButtonCircularProgress */ "./resources/js/shared/components/ButtonCircularProgress.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var styles = function styles(theme) {
  return {
    numberInput: {
      width: 110
    },
    numberInputInput: {
      padding: "9px 34px 9px 14.5px"
    },
    dBlock: {
      display: "block"
    },
    listItemLeftPadding: {
      paddingRight: theme.spacing(3)
    },
    expansionPanelDetails: {
      paddintTop: theme.spacing(0),
      justifyContent: "flex-end"
    }
  };
};

var inputOptions = ["None", "Slow", "Normal", "Fast"];

function Settings1(props) {
  var classes = props.classes,
      pushMessageToSnackbar = props.pushMessageToSnackbar;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isSaveLoading = _useState2[0],
      setIsSaveLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isDefaultLoading = _useState4[0],
      setIsDefaultLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("None"),
      _useState6 = _slicedToArray(_useState5, 2),
      option1 = _useState6[0],
      setOption1 = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("None"),
      _useState8 = _slicedToArray(_useState7, 2),
      option2 = _useState8[0],
      setOption2 = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("None"),
      _useState10 = _slicedToArray(_useState9, 2),
      option3 = _useState10[0],
      setOption3 = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("None"),
      _useState12 = _slicedToArray(_useState11, 2),
      option4 = _useState12[0],
      setOption4 = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("2 Days"),
      _useState14 = _slicedToArray(_useState13, 2),
      option5 = _useState14[0],
      setOption5 = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(7500),
      _useState16 = _slicedToArray(_useState15, 2),
      option6 = _useState16[0],
      setOption6 = _useState16[1];

  var handleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;

    if (name === "option6") {
      if (value > 7500 || value < 1000) {
        return;
      }
    }

    switch (name) {
      case "option1":
        {
          setOption1(value);
          break;
        }

      case "option2":
        {
          setOption2(value);
          break;
        }

      case "option3":
        {
          setOption3(value);
          break;
        }

      case "option4":
        {
          setOption4(value);
          break;
        }

      case "option5":
        {
          setOption5(value);
          break;
        }

      case "option6":
        {
          setOption6(value);
          break;
        }

      default:
        throw new Error("No branch selected in switch statement.");
    }
  }, [setOption1, setOption2, setOption3, setOption4, setOption5, setOption6]);
  var resetState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsSaveLoading(false);
    setIsDefaultLoading(false);
    setOption1("None");
    setOption2("None");
    setOption3("None");
    setOption4("None");
    setOption5("2 Days");
    setOption6(7500);
  }, [setIsSaveLoading, setIsDefaultLoading, setOption1, setOption2, setOption3, setOption4, setOption5, setOption6]);
  var onSetDefault = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsDefaultLoading(true);
    setTimeout(function () {
      pushMessageToSnackbar({
        text: "Your settings have been reset to default"
      });
      resetState();
    }, 1500);
  }, [pushMessageToSnackbar, resetState]);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsSaveLoading(true);
    setTimeout(function () {
      pushMessageToSnackbar({
        text: "Your settings have been saved"
      });
      setIsSaveLoading(false);
    }, 1500);
  }, [setIsSaveLoading, pushMessageToSnackbar]);
  var inputs = [{
    state: option1,
    label: "Option 1",
    stateName: "option1"
  }, {
    state: option2,
    label: "Option 2",
    stateName: "option2"
  }, {
    state: option3,
    label: "Option 3",
    stateName: "option3"
  }, {
    state: option4,
    label: "Option 4",
    stateName: "option4"
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Accordion"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AccordionSummary"], {
    expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3___default.a, null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], null, "Settings 1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AccordionDetails"], {
    className: classes.dBlock
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    disablePadding: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_Bordered__WEBPACK_IMPORTED_MODULE_5__["default"], {
    disableVerticalPadding: true,
    disableBorderRadius: true
  }, inputs.map(function (element, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      className: "listItemLeftPadding",
      disableGutters: true,
      divider: true,
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      variant: "body2"
    }, element.label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
      variant: "outlined"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemSecondaryAction"], {
      className: classes.ListItemSecondaryAction
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      value: element.state,
      onChange: handleChange,
      input: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["OutlinedInput"], {
        name: element.stateName,
        labelWidth: 0,
        className: classes.numberInput,
        classes: {
          input: classes.numberInputInput
        }
      }),
      MenuProps: {
        disableScrollLock: true
      }
    }, inputOptions.map(function (innerElement) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
        value: innerElement,
        key: innerElement
      }, innerElement);
    })))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    className: "listItemLeftPadding",
    disableGutters: true,
    divider: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body2"
  }, "Option 5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemSecondaryAction"], {
    className: classes.ListItemSecondaryAction
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    value: option5,
    onChange: handleChange,
    input: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["OutlinedInput"], {
      name: "option5",
      labelWidth: 0,
      className: classes.numberInput,
      classes: {
        input: classes.numberInputInput
      }
    }),
    MenuProps: {
      disableScrollLock: true
    }
  }, ["Always", "6 Hours", "12 Hours", "1 Day", "2 Days", "3 Days", "1 Week"].map(function (element) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
      value: element,
      key: element
    }, element);
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    className: "listItemLeftPadding",
    disableGutters: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body2"
  }, "Option 6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemSecondaryAction"], {
    className: classes.ListItemSecondaryAction
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["OutlinedInput"], {
    labelWidth: 0,
    name: "option6",
    value: option6,
    type: "number",
    onChange: handleChange,
    className: classes.numberInput,
    classes: {
      input: classes.numberInputInput
    },
    inputProps: {
      step: 20
    }
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AccordionDetails"], {
    className: classes.expansionPanelDetails
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mr: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: onSetDefault,
    disabled: isSaveLoading || isDefaultLoading
  }, "Default ", isDefaultLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_ButtonCircularProgress__WEBPACK_IMPORTED_MODULE_6__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "contained",
    color: "secondary",
    disabled: isSaveLoading || isDefaultLoading,
    onClick: onSubmit
  }, "Save ", isSaveLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_ButtonCircularProgress__WEBPACK_IMPORTED_MODULE_6__["default"], null))));
}

Settings1.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  pushMessageToSnackbar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_4__["default"])()(Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles, {
  withTheme: true
})(Settings1)));

/***/ }),

/***/ "./resources/js/admin/components/dashboard/Settings2.js":
/*!**************************************************************!*\
  !*** ./resources/js/admin/components/dashboard/Settings2.js ***!
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
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_components_HelpIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/HelpIcon */ "./resources/js/shared/components/HelpIcon.js");
/* harmony import */ var _shared_components_Bordered__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/Bordered */ "./resources/js/shared/components/Bordered.js");
/* harmony import */ var _shared_components_ButtonCircularProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/ButtonCircularProgress */ "./resources/js/shared/components/ButtonCircularProgress.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var styles = function styles(theme) {
  var _numberInput, _listItem;

  return {
    numberInput: (_numberInput = {
      width: 120
    }, _defineProperty(_numberInput, theme.breakpoints.down("sm"), {
      width: 80
    }), _defineProperty(_numberInput, "@media (max-width: 350px)", {
      width: 65
    }), _numberInput),
    numberInputInput: {
      padding: "9px 14.5px",
      "@media (max-width: 380px)": {
        padding: "9px 8.5px"
      },
      "@media (max-width: 350px)": {
        padding: "9px 6.5px"
      }
    },
    listItem: (_listItem = {}, _defineProperty(_listItem, theme.breakpoints.up("sm"), {
      paddingLeft: theme.spacing(4)
    }), _defineProperty(_listItem, "paddingLeft", 100), _listItem),
    expansionPanelDetails: {
      paddingTop: theme.spacing(0),
      justifyContent: "flex-end"
    },
    dBlock: {
      display: "block"
    }
  };
};

function Settings2(props) {
  var pushMessageToSnackbar = props.pushMessageToSnackbar,
      classes = props.classes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isDefaultLoading = _useState2[0],
      setIsDefaultLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isSaveLoading = _useState4[0],
      setIsSaveLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      option1 = _useState6[0],
      setOption1 = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      option2 = _useState8[0],
      setOption2 = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      option3 = _useState10[0],
      setOption3 = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState12 = _slicedToArray(_useState11, 2),
      option4 = _useState12[0],
      setOption4 = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState14 = _slicedToArray(_useState13, 2),
      option5 = _useState14[0],
      setOption5 = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("Both"),
      _useState16 = _slicedToArray(_useState15, 2),
      option6 = _useState16[0],
      setOption6 = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("2 weeks"),
      _useState18 = _slicedToArray(_useState17, 2),
      option7 = _useState18[0],
      setOption7 = _useState18[1];

  var resetState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsDefaultLoading(false);
    setIsSaveLoading(false);
    setOption1(false);
    setOption2(false);
    setOption3(false);
    setOption4(false);
    setOption5(false);
    setOption6("Both");
    setOption7("2 weeks");
  }, [setOption1, setOption2, setOption3, setOption4, setOption5, setOption6, setOption7]);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsSaveLoading(true);
    setTimeout(function () {
      pushMessageToSnackbar({
        text: "Your settings have been saved"
      });
      setIsSaveLoading(false);
    }, 1500);
  }, [pushMessageToSnackbar, setIsSaveLoading]);
  var onSetDefault = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsDefaultLoading(true);
    setTimeout(function () {
      pushMessageToSnackbar({
        text: "Your settings have been reset to default"
      });
      resetState();
    }, 1500);
  }, [pushMessageToSnackbar, resetState, setIsDefaultLoading]);
  var handleInputChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;

    switch (name) {
      case "option6":
        {
          setOption6(value);
          break;
        }

      case "option7":
        {
          setOption7(value);
          break;
        }

      default:
        throw new Error("No branch selected in switch statement");
    }
  }, [setOption6, setOption7]);

  var handleCheckboxChange = function handleCheckboxChange(name) {
    return function (event) {
      switch (name) {
        case "option1":
          setOption1(event.target.checked);
          break;

        case "option2":
          setOption2(event.target.checked);
          break;

        case "option3":
          setOption3(event.target.checked);
          break;

        case "option4":
          setOption4(event.target.checked);
          break;

        case "option5":
          setOption5(event.target.checked);
          break;

        default:
          throw new Error("No branch selected in switch statement.");
      }
    };
  };

  var inputs = [{
    title: "Option 1",
    secondaryAction: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
      value: "option1",
      color: "primary",
      checked: option1,
      onChange: handleCheckboxChange("option1")
    })
  }, {
    title: "Option 2",
    secondaryAction: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
      value: "option2",
      color: "primary",
      checked: option2,
      onChange: handleCheckboxChange("option2")
    })
  }, {
    title: "Option 3",
    secondaryAction: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
      value: "option3",
      color: "primary",
      checked: option3,
      onChange: handleCheckboxChange("option3")
    }),
    helpText: "You can add some further explanation here."
  }, {
    title: "Option 4",
    secondaryAction: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
      value: "option4",
      color: "primary",
      checked: option4,
      onChange: handleCheckboxChange("option4")
    })
  }, {
    title: "Option 5",
    secondaryAction: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
      value: "option5",
      color: "primary",
      checked: option5,
      onChange: handleCheckboxChange("option5")
    })
  }, {
    title: "Option 6",
    secondaryAction: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      value: option6,
      input: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["OutlinedInput"], {
        onChange: handleInputChange,
        labelWidth: 0,
        className: classes.numberInput,
        classes: {
          input: classes.numberInputInput
        },
        name: "option6"
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
      value: "Both"
    }, "Both"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
      value: "Male+"
    }, "Male+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
      value: "Female+"
    }, "Female+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
      value: "Only male"
    }, "Only male"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
      value: "Only female"
    }, "Only female")),
    helpText: "You can add some further explanation here."
  }, {
    title: "Option 7",
    secondaryAction: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      value: option7,
      input: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["OutlinedInput"], {
        onChange: handleInputChange,
        labelWidth: 0,
        className: classes.numberInput,
        classes: {
          input: classes.numberInputInput
        },
        name: "option7"
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
      value: "None"
    }, "None"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
      value: "6 hours"
    }, "6 hours"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
      value: "12 hours"
    }, "12 hours"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
      value: "1 day"
    }, "1 day"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
      value: "3 days"
    }, "3 days"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
      value: "1 week"
    }, "1 week"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
      value: "2 weeks"
    }, "2 weeks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
      value: "1 month"
    }, "1 month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
      value: "3 months"
    }, "3 months"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
      value: "6 months"
    }, "6 months")),
    helpText: "You can add some further explanation here."
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Accordion"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AccordionSummary"], {
    expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3___default.a, null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], null, "Settings 2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AccordionDetails"], {
    className: classes.dBlock
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    disablePadding: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_Bordered__WEBPACK_IMPORTED_MODULE_5__["default"], {
    disableVerticalPadding: true,
    disableBorderRadius: true
  }, inputs.map(function (element, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      key: index,
      divider: index !== inputs.length - 1,
      className: "listItemLeftPadding"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      variant: "body2"
    }, element.title, element.helpText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_HelpIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: element.helpText
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemSecondaryAction"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
      variant: "outlined"
    }, element.secondaryAction)));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AccordionDetails"], {
    className: classes.expansionPanelDetails
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mr: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: onSetDefault,
    disabled: isSaveLoading || isDefaultLoading
  }, "Default ", isDefaultLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_ButtonCircularProgress__WEBPACK_IMPORTED_MODULE_6__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "contained",
    color: "secondary",
    onClick: onSubmit,
    disabled: isSaveLoading || isDefaultLoading
  }, "Save ", isSaveLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_ButtonCircularProgress__WEBPACK_IMPORTED_MODULE_6__["default"], null))));
}

Settings2.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  pushMessageToSnackbar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles, {
  withTheme: true
})(Settings2));

/***/ }),

/***/ "./resources/js/admin/components/dashboard/SettingsArea.js":
/*!*****************************************************************!*\
  !*** ./resources/js/admin/components/dashboard/SettingsArea.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Settings1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Settings1 */ "./resources/js/admin/components/dashboard/Settings1.js");
/* harmony import */ var _Settings2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Settings2 */ "./resources/js/admin/components/dashboard/Settings2.js");





function SettingsArea(props) {
  var pushMessageToSnackbar = props.pushMessageToSnackbar;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Settings1__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pushMessageToSnackbar: pushMessageToSnackbar
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Settings2__WEBPACK_IMPORTED_MODULE_3__["default"], {
    pushMessageToSnackbar: pushMessageToSnackbar
  }));
}

SettingsArea.propTypes = {
  pushMessageToSnackbar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (SettingsArea);

/***/ }),

/***/ "./resources/js/admin/components/dashboard/StatisticsArea.js":
/*!*******************************************************************!*\
  !*** ./resources/js/admin/components/dashboard/StatisticsArea.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");




function StatisticsArea(props) {
  var theme = props.theme,
      CardChart = props.CardChart,
      data = props.data;
  return CardChart && data.profit.length >= 2 && data.views.length >= 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardChart, {
    data: data.profit,
    color: theme.palette.secondary.light,
    height: "70px",
    title: "Profit"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardChart, {
    data: data.views,
    color: theme.palette.primary.light,
    height: "70px",
    title: "Views"
  })));
}

StatisticsArea.propTypes = {
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  CardChart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withTheme"])(StatisticsArea));

/***/ }),

/***/ "./resources/js/admin/components/dashboard/UserDataArea.js":
/*!*****************************************************************!*\
  !*** ./resources/js/admin/components/dashboard/UserDataArea.js ***!
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
/* harmony import */ var _material_ui_icons_PlayCircleOutline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/PlayCircleOutline */ "./node_modules/@material-ui/icons/PlayCircleOutline.js");
/* harmony import */ var _material_ui_icons_PlayCircleOutline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PlayCircleOutline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_PauseCircleOutline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/PauseCircleOutline */ "./node_modules/@material-ui/icons/PauseCircleOutline.js");
/* harmony import */ var _material_ui_icons_PauseCircleOutline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PauseCircleOutline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_components_EnhancedTableHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/EnhancedTableHead */ "./resources/js/shared/components/EnhancedTableHead.js");
/* harmony import */ var _shared_functions_stableSort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/functions/stableSort */ "./resources/js/shared/functions/stableSort.js");
/* harmony import */ var _shared_functions_getSorting__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/functions/getSorting */ "./resources/js/shared/functions/getSorting.js");
/* harmony import */ var _shared_components_HighlightedInformation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/HighlightedInformation */ "./resources/js/shared/components/HighlightedInformation.js");
/* harmony import */ var _shared_components_ConfirmationDialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/ConfirmationDialog */ "./resources/js/shared/components/ConfirmationDialog.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var styles = function styles(theme) {
  return {
    tableWrapper: {
      overflowX: "auto"
    },
    alignRight: {
      display: "flex",
      flexDirection: "row-reverse",
      alignItems: "center",
      paddingLeft: theme.spacing(2)
    },
    blackIcon: {
      color: theme.palette.common.black
    },
    avatar: {
      width: 28,
      height: 28
    },
    firstData: {
      paddingLeft: theme.spacing(3)
    },
    iconButton: {
      padding: theme.spacing(1)
    },
    dBlock: {
      display: "block"
    },
    dNone: {
      display: "none"
    }
  };
};

var rows = [{
  id: "icon",
  numeric: true,
  label: ""
}, {
  id: "name",
  numeric: false,
  label: "Name"
}, {
  id: "number1",
  numeric: false,
  label: "Category 1"
}, {
  id: "number2",
  numeric: false,
  label: "Category 2"
}, {
  id: "number3",
  numeric: false,
  label: "Category 3"
}, {
  id: "number4",
  numeric: false,
  label: "Category 4"
}, {
  id: "actions",
  numeric: false,
  label: ""
}];
var rowsPerPage = 25;

function CustomTable(props) {
  var pushMessageToSnackbar = props.pushMessageToSnackbar,
      classes = props.classes,
      targets = props.targets,
      setTargets = props.setTargets;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("asc"),
      _useState2 = _slicedToArray(_useState, 2),
      order = _useState2[0],
      setOrder = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      orderBy = _useState4[0],
      setOrderBy = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState6 = _slicedToArray(_useState5, 2),
      page = _useState6[0],
      setPage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isDeleteTargetDialogOpen = _useState8[0],
      setIsDeleteTargetDialogOpen = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState10 = _slicedToArray(_useState9, 2),
      deleteTargetDialogRow = _useState10[0],
      setDeleteTargetDialogRow = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isDeleteTargetLoading = _useState12[0],
      setIsDeleteTargetLoading = _useState12[1];

  var handleRequestSort = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (__, property) {
    var _orderBy = property;
    var _order = "desc";

    if (orderBy === property && order === "desc") {
      _order = "asc";
    }

    setOrder(_order);
    setOrderBy(_orderBy);
  }, [setOrder, setOrderBy, order, orderBy]);
  var deleteTarget = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsDeleteTargetLoading(true);
    setTimeout(function () {
      setIsDeleteTargetDialogOpen(false);
      setIsDeleteTargetLoading(false);

      var _targets = _toConsumableArray(targets);

      var index = _targets.findIndex(function (element) {
        return element.id === deleteTargetDialogRow.id;
      });

      _targets.splice(index, 1);

      setTargets(_targets);
      pushMessageToSnackbar({
        text: "Your friend has been removed"
      });
    }, 1500);
  }, [setIsDeleteTargetDialogOpen, setIsDeleteTargetLoading, pushMessageToSnackbar, setTargets, deleteTargetDialogRow, targets]);
  var handleChangePage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (_, page) {
    setPage(page);
  }, [setPage]);
  var handleDeleteTargetDialogClose = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsDeleteTargetDialogOpen(false);
  }, [setIsDeleteTargetDialogOpen]);
  var handleDeleteTargetDialogOpen = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (row) {
    setIsDeleteTargetDialogOpen(true);
    setDeleteTargetDialogRow(row);
  }, [setIsDeleteTargetDialogOpen, setDeleteTargetDialogRow]);
  var toggleTarget = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (row) {
    var _targets = _toConsumableArray(targets);

    var index = _targets.findIndex(function (element) {
      return element.id === row.id;
    });

    row.isActivated = !row.isActivated;
    _targets[index] = row;

    if (row.isActivated) {
      pushMessageToSnackbar({
        text: "The row is now activated"
      });
    } else {
      pushMessageToSnackbar({
        text: "The row is now deactivated"
      });
    }

    setTargets(_targets);
  }, [pushMessageToSnackbar, targets, setTargets]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Accordion"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AccordionSummary"], {
    expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5___default.a, null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], null, "Some user data")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_ConfirmationDialog__WEBPACK_IMPORTED_MODULE_11__["default"], {
    open: isDeleteTargetDialogOpen,
    title: "Confirmation",
    content: deleteTargetDialogRow ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Do you really want to remove the friend ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, deleteTargetDialogRow.name), " from your list?") : null,
    onClose: handleDeleteTargetDialogClose,
    onConfirm: deleteTarget,
    loading: isDeleteTargetLoading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.tableWrapper
  }, targets.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Table"], {
    "aria-labelledby": "tableTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_EnhancedTableHead__WEBPACK_IMPORTED_MODULE_7__["default"], {
    order: order,
    orderBy: orderBy,
    onRequestSort: handleRequestSort,
    rowCount: targets.length,
    rows: rows
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableBody"], null, Object(_shared_functions_stableSort__WEBPACK_IMPORTED_MODULE_8__["default"])(targets, Object(_shared_functions_getSorting__WEBPACK_IMPORTED_MODULE_9__["default"])(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (row, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableRow"], {
      hover: true,
      tabIndex: -1,
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
      component: "th",
      scope: "row",
      className: classes.firstData
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      className: classes.avatar,
      src: row.profilePicUrl
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
      component: "th",
      scope: "row"
    }, row.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
      component: "th",
      scope: "row"
    }, row.number1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
      component: "th",
      scope: "row"
    }, row.number2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
      component: "th",
      scope: "row"
    }, row.number3), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
      component: "th",
      scope: "row"
    }, row.number4), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
      component: "th",
      scope: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      display: "flex",
      justifyContent: "flex-end"
    }, row.isActivated ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
      className: classes.iconButton,
      onClick: function onClick() {
        toggleTarget(row);
      },
      "aria-label": "Pause"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_PauseCircleOutline__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: classes.blackIcon
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
      className: classes.iconButton,
      color: "primary",
      onClick: function onClick() {
        toggleTarget(row);
      },
      "aria-label": "Resume"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_PlayCircleOutline__WEBPACK_IMPORTED_MODULE_3___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
      className: classes.iconButton,
      onClick: function onClick() {
        handleDeleteTargetDialogOpen(row);
      },
      "aria-label": "Delete"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: classes.blackIcon
    })))));
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    m: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_HighlightedInformation__WEBPACK_IMPORTED_MODULE_10__["default"], null, "No friends added yet."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.alignRight
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TablePagination"], {
    component: "div",
    count: targets.length,
    rowsPerPage: rowsPerPage,
    page: page,
    backIconButtonProps: {
      "aria-label": "Previous Page"
    },
    nextIconButtonProps: {
      "aria-label": "Next Page"
    },
    onChangePage: handleChangePage,
    classes: {
      select: classes.dNone,
      selectIcon: classes.dNone,
      actions: targets.length > 0 ? classes.dBlock : classes.dNone,
      caption: targets.length > 0 ? classes.dBlock : classes.dNone
    },
    labelRowsPerPage: ""
  }))));
}

CustomTable.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  targets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  setTargets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  pushMessageToSnackbar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles, {
  withTheme: true
})(CustomTable));

/***/ }),

/***/ "./resources/js/admin/components/ladders/Ladder.js":
/*!*********************************************************!*\
  !*** ./resources/js/admin/components/ladders/Ladder.js ***!
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
/* harmony import */ var _LadderTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LadderTable */ "./resources/js/admin/components/ladders/LadderTable.js");
/* harmony import */ var _LadderInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LadderInfo */ "./resources/js/admin/components/ladders/LadderInfo.js");





var styles = {
  divider: {
    backgroundColor: "rgba(0, 0, 0, 0.26)"
  }
};

function Ladder(props) {
  var classes = props.classes,
      ladders = props.ladders,
      selectLadder = props.selectLadder;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(selectLadder, [selectLadder]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    disablePadding: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LadderInfo__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    className: classes.divider
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LadderTable__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ladders: ladders
  })));
}

Ladder.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  ladders: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  selectLadder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Ladder));

/***/ }),

/***/ "./resources/js/admin/components/ladders/LadderInfo.js":
/*!*************************************************************!*\
  !*** ./resources/js/admin/components/ladders/LadderInfo.js ***!
  \*************************************************************/
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
  toolbar: {
    justifyContent: "space-between"
  }
};

function LadderInfo(props) {
  var classes = props.classes;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
    className: classes.toolbar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: "Ladders",
    secondary: "Collected from a2oj.com"
  }));
}

LadderInfo.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(LadderInfo));

/***/ }),

/***/ "./resources/js/admin/components/ladders/LadderTable.js":
/*!**************************************************************!*\
  !*** ./resources/js/admin/components/ladders/LadderTable.js ***!
  \**************************************************************/
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
/* harmony import */ var _shared_components_EnhancedTableHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/EnhancedTableHead */ "./resources/js/shared/components/EnhancedTableHead.js");
/* harmony import */ var _shared_components_ColorfulChip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/ColorfulChip */ "./resources/js/shared/components/ColorfulChip.js");
/* harmony import */ var _shared_functions_unixToDateString__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/functions/unixToDateString */ "./resources/js/shared/functions/unixToDateString.js");
/* harmony import */ var _shared_components_HighlightedInformation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/HighlightedInformation */ "./resources/js/shared/components/HighlightedInformation.js");
/* harmony import */ var _shared_functions_currencyPrettyPrint__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/functions/currencyPrettyPrint */ "./resources/js/shared/functions/currencyPrettyPrint.js");
/* harmony import */ var _material_ui_icons_Pageview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Pageview */ "./node_modules/@material-ui/icons/Pageview.js");
/* harmony import */ var _material_ui_icons_Pageview__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Pageview__WEBPACK_IMPORTED_MODULE_9__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var styles = function styles(theme) {
  var _contentWrapper;

  return {
    tableWrapper: {
      overflowX: "auto",
      width: "100%"
    },
    blackBackground: {
      backgroundColor: theme.palette.primary.main
    },
    contentWrapper: (_contentWrapper = {
      padding: theme.spacing(3)
    }, _defineProperty(_contentWrapper, theme.breakpoints.down("xs"), {
      padding: theme.spacing(2)
    }), _defineProperty(_contentWrapper, "width", "100%"), _contentWrapper),
    dBlock: {
      display: "block !important"
    },
    dNone: {
      display: "none !important"
    },
    firstData: {
      paddingLeft: theme.spacing(3)
    },
    noDecoration: {
      textDecoration: "none !important"
    }
  };
};

var rows = [{
  id: "id",
  label: "#"
}, {
  id: "ladder_name",
  label: "Name"
}, {
  id: "ladder_description",
  label: "Description"
}, {
  id: "ladder_difficulty",
  label: "Difficulty"
}, {
  id: "action",
  label: "Action"
}];

function LadderTable(props) {
  var ladders = props.ladders,
      theme = props.theme,
      classes = props.classes;

  if (ladders.length > 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.tableWrapper
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Table"], {
      "aria-labelledby": "tableTitle"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_EnhancedTableHead__WEBPACK_IMPORTED_MODULE_4__["default"], {
      rowCount: ladders.length,
      rows: rows
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TableBody"], null, ladders.map(function (ladder, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TableRow"], {
        hover: true,
        tabIndex: -1,
        key: index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TableCell"], {
        component: "th",
        scope: "row",
        className: classes.firstData
      }, ladder.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TableCell"], {
        component: "th",
        scope: "row"
      }, ladder.ladder_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TableCell"], {
        component: "th",
        scope: "row"
      }, ladder.ladder_description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TableCell"], {
        component: "th",
        scope: "row"
      }, ladder.ladder_difficulty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TableCell"], {
        component: "th",
        scope: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/admin/ladders/" + ladder.id,
        className: classes.noDecoration
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        variant: "outlined",
        size: "small"
      }, "View"))));
    }))));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.contentWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_HighlightedInformation__WEBPACK_IMPORTED_MODULE_7__["default"], null, "No ladders received yet."));
}

LadderTable.propTypes = {
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  ladders: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles, {
  withTheme: true
})(LadderTable));

/***/ }),

/***/ "./resources/js/admin/components/ladders/problems/LadderProblem.js":
/*!*************************************************************************!*\
  !*** ./resources/js/admin/components/ladders/problems/LadderProblem.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _LadderProblemTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LadderProblemTable */ "./resources/js/admin/components/ladders/problems/LadderProblemTable.js");
/* harmony import */ var _LadderProblemInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LadderProblemInfo */ "./resources/js/admin/components/ladders/problems/LadderProblemInfo.js");





var styles = {
  divider: {
    backgroundColor: "rgba(0, 0, 0, 0.26)"
  }
};

function LadderProblem(props) {
  var classes = props.classes,
      selectLadder = props.selectLadder;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(selectLadder, [selectLadder]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    disablePadding: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LadderProblemInfo__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    className: classes.divider
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LadderProblemTable__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
}

LadderProblem.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  selectLadder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(LadderProblem));

/***/ }),

/***/ "./resources/js/admin/components/ladders/problems/LadderProblemInfo.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/admin/components/ladders/problems/LadderProblemInfo.js ***!
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var styles = {
  toolbar: {
    justifyContent: "space-between"
  }
};

function LadderProblemInfo(props) {
  var classes = props.classes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      ladder = _useState2[0],
      setLadder = _useState2[1];

  var fetchLadder = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (id) {
    axios.get('/api/ladders/' + id).then(function (res) {
      setLadder(res.data);
    });
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var url = window.location.href;
    var urlArr = url.split("/");
    var id = urlArr[urlArr.length - 1];
    fetchLadder(id);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
    className: classes.toolbar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: ladder ? ladder.ladder_name : 'Invalid Ladder',
    secondary: ladder ? ladder.ladder_description : 'Invalid ladder.'
  }));
}

LadderProblemInfo.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(LadderProblemInfo));

/***/ }),

/***/ "./resources/js/admin/components/ladders/problems/LadderProblemTable.js":
/*!******************************************************************************!*\
  !*** ./resources/js/admin/components/ladders/problems/LadderProblemTable.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _shared_components_EnhancedTableHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/EnhancedTableHead */ "./resources/js/shared/components/EnhancedTableHead.js");
/* harmony import */ var _shared_components_HighlightedInformation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/HighlightedInformation */ "./resources/js/shared/components/HighlightedInformation.js");
/* harmony import */ var _material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Link */ "./node_modules/@material-ui/icons/Link.js");
/* harmony import */ var _material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_5__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var styles = function styles(theme) {
  var _contentWrapper;

  return {
    tableWrapper: {
      overflowX: "auto",
      width: "100%"
    },
    blackBackground: {
      backgroundColor: theme.palette.primary.main
    },
    contentWrapper: (_contentWrapper = {
      padding: theme.spacing(3)
    }, _defineProperty(_contentWrapper, theme.breakpoints.down("xs"), {
      padding: theme.spacing(2)
    }), _defineProperty(_contentWrapper, "width", "100%"), _contentWrapper),
    dBlock: {
      display: "block !important"
    },
    dNone: {
      display: "none !important"
    },
    firstData: {
      paddingLeft: theme.spacing(3)
    },
    noDecoration: {
      textDecoration: "none !important"
    }
  };
};

var columns = [{
  id: "id",
  label: "#"
}, {
  id: "problem_title",
  label: "Title"
}, {
  id: "online_judge",
  label: "Online Judge"
}, {
  id: "problem_difficulty",
  label: "Difficulty"
}, {
  id: 'action',
  label: "Action"
}];

function LadderProblemTable(props) {
  var theme = props.theme,
      classes = props.classes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState4 = _slicedToArray(_useState3, 2),
      tableItemFirstId = _useState4[0],
      setTableItemFirstId = _useState4[1];

  var fetchLadderProblems = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (dataSource) {
    axios.get(dataSource).then(function (res) {
      setData(res.data);
      setTableItemFirstId(res.data[0].id);
    });
  }, [setData, setTableItemFirstId]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function (async) {
    var url = window.location.href;
    var urlArr = url.split("/");
    var id = urlArr[urlArr.length - 1];
    var dataSource = "/api/ladders/" + id + "/problems";
    fetchLadderProblems(dataSource);
  }, [fetchLadderProblems]);

  if (data.length > 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.tableWrapper
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Table"], {
      size: "small",
      "aria-labelledby": "tableTitle"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_EnhancedTableHead__WEBPACK_IMPORTED_MODULE_3__["default"], {
      rowCount: data.length,
      rows: columns
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableBody"], null, data.map(function (problem, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableRow"], {
        hover: true,
        tabIndex: -1,
        key: index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
        component: "th",
        scope: "row",
        className: classes.firstData
      }, problem.id - tableItemFirstId + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
        component: "th",
        scope: "row"
      }, problem.problem_title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
        component: "th",
        scope: "row"
      }, problem.online_judge), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
        component: "th",
        scope: "row"
      }, problem.problem_difficulty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
        component: "th",
        scope: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        variant: "outlined",
        size: "small",
        href: problem.problem_url,
        target: "_blank"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_5___default.a, null))));
    }))));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.contentWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_HighlightedInformation__WEBPACK_IMPORTED_MODULE_4__["default"], null, "No problems from this ladder received yet."));
}

LadderProblemTable.propTypes = {
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles, {
  withTheme: true
})(LadderProblemTable));

/***/ }),

/***/ "./resources/js/admin/components/navigation/Balance.js":
/*!*************************************************************!*\
  !*** ./resources/js/admin/components/navigation/Balance.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _shared_functions_currencyPrettyPrint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/functions/currencyPrettyPrint */ "./resources/js/shared/functions/currencyPrettyPrint.js");




var styles = {
  input: {
    padding: "0px 9px",
    cursor: "pointer"
  },
  outlinedInput: {
    width: 90,
    height: 40,
    cursor: "pointer"
  },
  wrapper: {
    display: "flex",
    alignItems: "center"
  }
};

function Balance(props) {
  var balance = props.balance,
      classes = props.classes,
      openAddBalanceDialog = props.openAddBalanceDialog;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["OutlinedInput"], {
    value: balance === null ? "" : Object(_shared_functions_currencyPrettyPrint__WEBPACK_IMPORTED_MODULE_3__["default"])(balance),
    className: classes.outlinedInput,
    classes: {
      input: classes.input
    },
    readOnly: true,
    labelWidth: 0,
    onClick: openAddBalanceDialog
  }));
}

Balance.propTypes = {
  balance: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  openAddBalanceDialog: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Balance));

/***/ }),

/***/ "./resources/js/admin/components/navigation/MessageListItem.js":
/*!*********************************************************************!*\
  !*** ./resources/js/admin/components/navigation/MessageListItem.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Error */ "./node_modules/@material-ui/icons/Error.js");
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/formatDistance */ "./node_modules/date-fns/esm/formatDistance/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function MessageListItem(props) {
  var message = props.message,
      divider = props.divider;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasErrorOccurred = _useState2[0],
      setHasErrorOccurred = _useState2[1];

  var handleError = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setHasErrorOccurred(true);
  }, [setHasErrorOccurred]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    divider: divider
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemAvatar"], null, hasErrorOccurred ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_3___default.a, {
    color: "secondary"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
    src: hasErrorOccurred ? null : message.profilePicUrl,
    onError: handleError
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: message.text,
    secondary: "".concat(Object(date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_4__["default"])(message.date * 1000, new Date()), " ago")
  }));
}

MessageListItem.propTypes = {
  message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  divider: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (MessageListItem);

/***/ }),

/***/ "./resources/js/admin/components/navigation/MessagePopperButton.js":
/*!*************************************************************************!*\
  !*** ./resources/js/admin/components/navigation/MessagePopperButton.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Message */ "./node_modules/@material-ui/icons/Message.js");
/* harmony import */ var _material_ui_icons_Message__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Message__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MessageListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MessageListItem */ "./resources/js/admin/components/navigation/MessageListItem.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var styles = function styles(theme) {
  return {
    tabContainer: {
      overflowY: "auto",
      maxHeight: 350
    },
    popoverPaper: _defineProperty({
      width: "100%",
      maxWidth: 350,
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(1)
    }, theme.breakpoints.down("sm"), {
      maxWidth: 270
    }),
    divider: {
      marginTop: -2
    },
    noShadow: {
      boxShadow: "none !important"
    }
  };
};

function MessagePopperButton(props) {
  var classes = props.classes,
      messages = props.messages;
  var anchorEl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var handleClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);
  var handleClickAway = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsOpen(false);
  }, [setIsOpen]);
  var id = isOpen ? "scroll-playground" : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    onClick: handleClick,
    buttonRef: anchorEl,
    "aria-label": "Open Messages",
    "aria-describedby": id,
    color: "primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Message__WEBPACK_IMPORTED_MODULE_3___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
    disableScrollLock: true,
    id: id,
    open: isOpen,
    anchorEl: anchorEl.current,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    classes: {
      paper: classes.popoverPaper
    },
    onClose: handleClickAway
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AppBar"], {
    position: "static",
    color: "inherit",
    className: classes.noShadow
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    pt: 1,
    pl: 2,
    pb: 1,
    pr: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "subtitle1"
  }, "Messages")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    className: classes.divider
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    dense: true,
    className: classes.tabContainer
  }, messages.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "You haven't received any messages yet.")) : messages.map(function (element, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessageListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      message: element,
      divider: index !== messages.length - 1
    });
  }))));
}

MessagePopperButton.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  messages: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles, {
  withTheme: true
})(MessagePopperButton));

/***/ }),

/***/ "./resources/js/admin/components/navigation/NavBar.js":
/*!************************************************************!*\
  !*** ./resources/js/admin/components/navigation/NavBar.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "./node_modules/@material-ui/icons/Dashboard.js");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Image */ "./node_modules/@material-ui/icons/Image.js");
/* harmony import */ var _material_ui_icons_Image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/AccountBalance */ "./node_modules/@material-ui/icons/AccountBalance.js");
/* harmony import */ var _material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/PowerSettingsNew */ "./node_modules/@material-ui/icons/PowerSettingsNew.js");
/* harmony import */ var _material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_SupervisorAccount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/SupervisorAccount */ "./node_modules/@material-ui/icons/SupervisorAccount.js");
/* harmony import */ var _material_ui_icons_SupervisorAccount__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SupervisorAccount__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Archive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Archive */ "./node_modules/@material-ui/icons/Archive.js");
/* harmony import */ var _material_ui_icons_Archive__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Archive__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/People */ "./node_modules/@material-ui/icons/People.js");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_MenuBook__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/MenuBook */ "./node_modules/@material-ui/icons/MenuBook.js");
/* harmony import */ var _material_ui_icons_MenuBook__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MenuBook__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _MessagePopperButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./MessagePopperButton */ "./resources/js/admin/components/navigation/MessagePopperButton.js");
/* harmony import */ var _SideDrawer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SideDrawer */ "./resources/js/admin/components/navigation/SideDrawer.js");
/* harmony import */ var _Balance__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Balance */ "./resources/js/admin/components/navigation/Balance.js");
/* harmony import */ var _shared_components_NavigationDrawer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/components/NavigationDrawer */ "./resources/js/shared/components/NavigationDrawer.js");
/* harmony import */ var _dummy_data_images_profilePicture_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../dummy_data/images/profilePicture.jpg */ "./resources/js/admin/dummy_data/images/profilePicture.jpg");
/* harmony import */ var _dummy_data_images_profilePicture_jpg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_dummy_data_images_profilePicture_jpg__WEBPACK_IMPORTED_MODULE_18__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















var styles = function styles(theme) {
  var _appBarToolbar, _drawerPaper;

  return {
    appBar: _defineProperty({
      boxShadow: theme.shadows[6],
      backgroundColor: theme.palette.common.white,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    }, theme.breakpoints.down("xs"), {
      width: "100%",
      marginLeft: 0
    }),
    appBarToolbar: (_appBarToolbar = {
      display: "flex",
      justifyContent: "space-between",
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
    }, _defineProperty(_appBarToolbar, theme.breakpoints.up("sm"), {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }), _defineProperty(_appBarToolbar, theme.breakpoints.up("md"), {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }), _defineProperty(_appBarToolbar, theme.breakpoints.up("lg"), {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    }), _appBarToolbar),
    accountAvatar: _defineProperty({
      backgroundColor: theme.palette.secondary.main,
      height: 24,
      width: 24,
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    }, theme.breakpoints.down("xs"), {
      marginLeft: theme.spacing(1.5),
      marginRight: theme.spacing(1.5)
    }),
    drawerPaper: (_drawerPaper = {
      height: "100%vh",
      whiteSpace: "nowrap",
      border: 0,
      width: theme.spacing(7),
      overflowX: "hidden",
      marginTop: theme.spacing(8)
    }, _defineProperty(_drawerPaper, theme.breakpoints.up("sm"), {
      width: theme.spacing(9)
    }), _defineProperty(_drawerPaper, "backgroundColor", theme.palette.common.black), _drawerPaper),
    smBordered: _defineProperty({}, theme.breakpoints.down("xs"), {
      borderRadius: "50% !important"
    }),
    menuLink: {
      textDecoration: "none",
      color: theme.palette.text.primary
    },
    iconListItem: {
      width: "auto",
      borderRadius: theme.shape.borderRadius,
      paddingTop: 11,
      paddingBottom: 11,
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    textPrimary: {
      color: theme.palette.primary.main
    },
    mobileItemSelected: {
      backgroundColor: "".concat(theme.palette.primary.main, " !important")
    },
    brandText: {
      fontFamily: "'Baloo Bhaijaan', cursive",
      fontWeight: 400
    },
    username: {
      paddingLeft: 0,
      paddingRight: theme.spacing(2)
    },
    justifyCenter: {
      justifyContent: "center"
    },
    permanentDrawerListItem: {
      justifyContent: "center",
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    },
    noDecoration: {
      textDecoration: "none !important"
    },
    menuButtonText: {
      fontSize: theme.typography.body1.fontSize,
      fontWeight: theme.typography.h6.fontWeight
    }
  };
};

function NavBar(props) {
  var selectedTab = props.selectedTab,
      messages = props.messages,
      classes = props.classes,
      width = props.width,
      openAddBalanceDialog = props.openAddBalanceDialog,
      isLoggedIn = props.isLoggedIn,
      userData = props.userData,
      handleUserData = props.handleUserData,
      handleUserLogout = props.handleUserLogout; // Will be use to make website more accessible by screen readers

  var links = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isMobileOpen = _useState2[0],
      setIsMobileOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isSideDrawerOpen = _useState4[0],
      setIsSideDrawerOpen = _useState4[1];

  var openMobileDrawer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsMobileOpen(true);
  }, [setIsMobileOpen]);
  var closeMobileDrawer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsMobileOpen(false);
  }, [setIsMobileOpen]);
  var openDrawer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsSideDrawerOpen(true);
  }, [setIsSideDrawerOpen]);
  var closeDrawer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsSideDrawerOpen(false);
  }, [setIsSideDrawerOpen]);
  var menuItems = [{
    link: "/admin/dashboard",
    name: "Dashboard",
    onClick: closeMobileDrawer,
    icon: {
      desktop: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: selectedTab === "Dashboard" ? classes.textPrimary : "text-white",
        fontSize: "small"
      }),
      mobile: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: "text-white"
      })
    }
  }, {
    link: "/admin/ladders",
    name: "Ladder",
    onClick: closeMobileDrawer,
    icon: {
      desktop: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Archive__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: selectedTab === "Ladder" ? classes.textPrimary : "text-white",
        fontSize: "small"
      }),
      mobile: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Archive__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: "text-white"
      })
    }
  }, {
    link: "/admin/users",
    name: "User",
    onClick: closeMobileDrawer,
    icon: {
      desktop: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_12___default.a, {
        className: selectedTab === "User" ? classes.textPrimary : "text-white",
        fontSize: "small"
      }),
      mobile: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_12___default.a, {
        className: "text-white"
      })
    }
  }, {
    link: "/admin/courses",
    name: "Course",
    onClick: closeMobileDrawer,
    icon: {
      desktop: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_MenuBook__WEBPACK_IMPORTED_MODULE_13___default.a, {
        className: selectedTab === "Course" ? classes.textPrimary : "text-white",
        fontSize: "small"
      }),
      mobile: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_MenuBook__WEBPACK_IMPORTED_MODULE_13___default.a, {
        className: "text-white"
      })
    }
  }, {
    link: "/admin/posts",
    name: "Posts",
    onClick: closeMobileDrawer,
    icon: {
      desktop: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Image__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: selectedTab === "Posts" ? classes.textPrimary : "text-white",
        fontSize: "small"
      }),
      mobile: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Image__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "text-white"
      })
    }
  }, {
    link: "/admin/subscription",
    name: "Subscription",
    onClick: closeMobileDrawer,
    icon: {
      desktop: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: selectedTab === "Subscription" ? classes.textPrimary : "text-white",
        fontSize: "small"
      }),
      mobile: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: "text-white"
      })
    }
  }, {
    link: "/",
    name: "Logout",
    onClick: handleUserLogout,
    icon: {
      desktop: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: "text-white",
        fontSize: "small"
      }),
      mobile: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: "text-white"
      })
    }
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["AppBar"], {
    position: "sticky",
    className: classes.appBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Toolbar"], {
    className: classes.appBarToolbar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Hidden"], {
    smUp: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    mr: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
    "aria-label": "Open Navigation",
    onClick: openMobileDrawer,
    color: "primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default.a, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Hidden"], {
    xsDown: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h4",
    className: classes.brandText,
    display: "inline",
    color: "primary"
  }, "CPS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h4",
    className: classes.brandText,
    display: "inline",
    color: "secondary"
  }, "Academy"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessagePopperButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
    messages: messages
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
    disableGutters: true,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.iconListItem, classes.smBordered)
  }, Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["isWidthUp"])("sm", width) && isLoggedIn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
    className: classes.username,
    primary: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      color: "textPrimary"
    }, userData.name)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/",
    className: classes.noDecoration
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    color: "secondary",
    size: "large",
    classes: {
      text: classes.menuButtonText
    }
  }, "Landing Page")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/docs",
    className: classes.noDecoration
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    color: "secondary",
    size: "large",
    classes: {
      text: classes.menuButtonText
    }
  }, "Docs"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Hidden"], {
    xsDown: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Drawer"] //  both drawers can be combined into one for performance
  , {
    variant: "permanent",
    classes: {
      paper: classes.drawerPaper
    },
    open: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["List"], null, menuItems.map(function (element, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: element.link,
      className: classes.menuLink,
      onClick: element.onClick,
      key: index,
      ref: function ref(node) {
        links.current[index] = node;
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
      title: element.name,
      placement: "right",
      key: element.name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
      selected: selectedTab === element.name,
      button: true,
      divider: index !== menuItems.length - 1,
      className: classes.permanentDrawerListItem,
      onClick: function onClick() {
        links.current[index].click();
      },
      "aria-label": element.name === "Logout" ? "Logout" : "Go to ".concat(element.name)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemIcon"], {
      className: classes.justifyCenter
    }, element.icon.desktop))));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_NavigationDrawer__WEBPACK_IMPORTED_MODULE_17__["default"], {
    menuItems: menuItems.map(function (element) {
      return {
        link: element.link,
        name: element.name,
        icon: element.icon.mobile,
        onClick: element.onClick
      };
    }),
    anchor: "left",
    open: isMobileOpen,
    selectedItem: selectedTab,
    onClose: closeMobileDrawer
  }));
}

NavBar.propTypes = {
  messages: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object).isRequired,
  selectedTab: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  isLoggedIn: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  userData: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  handleUserData: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  handleUserLogout: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["withWidth"])()(Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles, {
  withTheme: true
})(NavBar)));

/***/ }),

/***/ "./resources/js/admin/components/navigation/SideDrawer.js":
/*!****************************************************************!*\
  !*** ./resources/js/admin/components/navigation/SideDrawer.js ***!
  \****************************************************************/
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




var drawerWidth = 240;
var styles = {
  toolbar: {
    minWidth: drawerWidth
  }
};

function SideDrawer(props) {
  var classes = props.classes,
      onClose = props.onClose,
      open = props.open;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
    anchor: "right",
    open: open,
    variant: "temporary",
    onClose: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
    disableGutters: true,
    className: classes.toolbar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    pl: 3,
    pr: 3,
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6"
  }, "A Sidedrawer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    onClick: onClose,
    color: "primary",
    "aria-label": "Close Sidedrawer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default.a, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], null));
}

SideDrawer.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  open: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(SideDrawer));

/***/ }),

/***/ "./resources/js/admin/components/posts/AddPost.js":
/*!********************************************************!*\
  !*** ./resources/js/admin/components/posts/AddPost.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _shared_components_ActionPaper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/ActionPaper */ "./resources/js/shared/components/ActionPaper.js");
/* harmony import */ var _shared_components_ButtonCircularProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/ButtonCircularProgress */ "./resources/js/shared/components/ButtonCircularProgress.js");
/* harmony import */ var _AddPostOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddPostOptions */ "./resources/js/admin/components/posts/AddPostOptions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function AddPost(props) {
  var pushMessageToSnackbar = props.pushMessageToSnackbar,
      Dropzone = props.Dropzone,
      EmojiTextArea = props.EmojiTextArea,
      DateTimePicker = props.DateTimePicker,
      ImageCropper = props.ImageCropper,
      onClose = props.onClose;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      files = _useState2[0],
      setFiles = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Date()),
      _useState4 = _slicedToArray(_useState3, 2),
      uploadAt = _useState4[0],
      setUploadAt = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState8 = _slicedToArray(_useState7, 2),
      cropperFile = _useState8[0],
      setCropperFile = _useState8[1];

  var acceptDrop = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (file) {
    setFiles([file]);
  }, [setFiles]);
  var onDrop = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (acceptedFiles, rejectedFiles) {
    if (acceptedFiles.length + rejectedFiles.length > 1) {
      pushMessageToSnackbar({
        isErrorMessage: true,
        text: "You cannot upload more than one file at once"
      });
    } else if (acceptedFiles.length === 0) {
      pushMessageToSnackbar({
        isErrorMessage: true,
        text: "The file you wanted to upload isn't an image"
      });
    } else if (acceptedFiles.length === 1) {
      var file = acceptedFiles[0];
      file.preview = URL.createObjectURL(file);
      file.key = new Date().getTime();
      setCropperFile(file);
    }
  }, [pushMessageToSnackbar, setCropperFile]);
  var onCropperClose = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setCropperFile(null);
  }, [setCropperFile]);
  var deleteItem = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setCropperFile(null);
    setFiles([]);
  }, [setCropperFile, setFiles]);
  var onCrop = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (dataUrl) {
    var file = _objectSpread({}, cropperFile);

    file.preview = dataUrl;
    acceptDrop(file);
    setCropperFile(null);
  }, [acceptDrop, cropperFile, setCropperFile]);
  var handleUpload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setLoading(true);
    setTimeout(function () {
      pushMessageToSnackbar({
        text: "Your post has been uploaded"
      });
      onClose();
    }, 1500);
  }, [setLoading, onClose, pushMessageToSnackbar]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_ActionPaper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    helpPadding: true,
    maxWidth: "md",
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddPostOptions__WEBPACK_IMPORTED_MODULE_5__["default"], {
      EmojiTextArea: EmojiTextArea,
      Dropzone: Dropzone,
      files: files,
      onDrop: onDrop,
      deleteItem: deleteItem,
      DateTimePicker: DateTimePicker,
      uploadAt: uploadAt,
      onChangeUploadAt: setUploadAt,
      onCrop: onCrop,
      ImageCropper: ImageCropper,
      cropperFile: cropperFile,
      onCropperClose: onCropperClose
    }),
    actions: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      mr: 1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: onClose,
      disabled: loading
    }, "Back")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: handleUpload,
      variant: "contained",
      color: "secondary",
      disabled: files.length === 0 || loading
    }, "Upload ", loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_ButtonCircularProgress__WEBPACK_IMPORTED_MODULE_4__["default"], null)))
  }));
}

AddPost.propTypes = {
  pushMessageToSnackbar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  Dropzone: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType,
  EmojiTextArea: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType,
  DateTimePicker: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType,
  ImageCropper: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType
};
/* harmony default export */ __webpack_exports__["default"] = (AddPost);

/***/ }),

/***/ "./resources/js/admin/components/posts/AddPostOptions.js":
/*!***************************************************************!*\
  !*** ./resources/js/admin/components/posts/AddPostOptions.js ***!
  \***************************************************************/
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
/* harmony import */ var _shared_components_Bordered__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/Bordered */ "./resources/js/shared/components/Bordered.js");
/* harmony import */ var _shared_components_ImageCropperDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/ImageCropperDialog */ "./resources/js/shared/components/ImageCropperDialog.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var styles = function styles(theme) {
  return {
    floatButtonWrapper: {
      position: "absolute",
      top: theme.spacing(1),
      right: theme.spacing(1),
      zIndex: 1000
    },
    inputRoot: {
      width: 190,
      "@media (max-width:  400px)": {
        width: 160
      },
      "@media (max-width:  360px)": {
        width: 140
      },
      "@media (max-width:  340px)": {
        width: 120
      }
    },
    uploadIcon: {
      fontSize: 48,
      transition: theme.transitions.create(["color", "box-shadow", "border"], {
        duration: theme.transitions.duration["short"],
        easing: theme.transitions.easing.easeInOut
      })
    },
    imgWrapper: {
      position: "relative"
    },
    img: {
      width: "100%",
      border: "1px solid rgba(0, 0, 0, 0.23)",
      borderRadius: theme.shape.borderRadius,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0
    },
    uploadText: {
      transition: theme.transitions.create(["color", "box-shadow", "border"], {
        duration: theme.transitions.duration["short"],
        easing: theme.transitions.easing.easeInOut
      })
    },
    numberInput: {
      width: 110
    },
    numberInputInput: {
      padding: "9px 34px 9px 14.5px"
    },
    emojiTextArea: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      marginRight: -1
    },
    dNone: {
      display: "none"
    }
  };
};

var inputOptions = ["None", "Slow", "Normal", "Fast"];

function AddPostOptions(props) {
  var Dropzone = props.Dropzone,
      classes = props.classes,
      files = props.files,
      deleteItem = props.deleteItem,
      onDrop = props.onDrop,
      EmojiTextArea = props.EmojiTextArea,
      ImageCropper = props.ImageCropper,
      DateTimePicker = props.DateTimePicker,
      cropperFile = props.cropperFile,
      onCrop = props.onCrop,
      onCropperClose = props.onCropperClose,
      uploadAt = props.uploadAt,
      onChangeUploadAt = props.onChangeUploadAt;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("None"),
      _useState2 = _slicedToArray(_useState, 2),
      option1 = _useState2[0],
      setOption1 = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("None"),
      _useState4 = _slicedToArray(_useState3, 2),
      option2 = _useState4[0],
      setOption2 = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("None"),
      _useState6 = _slicedToArray(_useState5, 2),
      option3 = _useState6[0],
      setOption3 = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("None"),
      _useState8 = _slicedToArray(_useState7, 2),
      option4 = _useState8[0],
      setOption4 = _useState8[1];

  var handleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;

    switch (name) {
      case "option1":
        setOption1(value);
        break;

      case "option2":
        setOption2(value);
        break;

      case "option3":
        setOption3(value);
        break;

      case "option4":
        setOption4(value);
        break;

      default:
        throw new Error("No branch selected in switch-statement.");
    }
  }, [setOption1, setOption2, setOption3, setOption4]);
  var printFile = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (files[0]) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.imgWrapper
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "uploaded item",
        src: files[0].preview,
        className: classes.img,
        style: {
          height: 151
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.floatButtonWrapper
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
        onClick: deleteItem
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default.a, null))));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dropzone, {
      accept: "image/png, image/jpeg",
      onDrop: onDrop,
      fullHeight: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classes.uploadText
    }, "Click / Drop file ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " here"));
  }, [onDrop, files, classes, deleteItem]);
  var inputs = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])([{
    state: option1,
    label: "Option 1",
    stateName: "option1"
  }, {
    state: option2,
    label: "Option 2",
    stateName: "option2"
  }, {
    state: option3,
    label: "Option 3",
    stateName: "option3"
  }, {
    state: option4,
    label: "Option 4",
    stateName: "option4"
  }], [option1, option2, option3, option4]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, ImageCropper && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_ImageCropperDialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
    open: cropperFile ? true : false,
    ImageCropper: ImageCropper,
    src: cropperFile ? cropperFile.preview : "",
    onCrop: onCrop,
    onClose: onCropperClose,
    aspectRatio: 4 / 3
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true,
    variant: "h6"
  }, "Upload Image"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mb: 2
  }, EmojiTextArea && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EmojiTextArea, {
    inputClassName: classes.emojiTextArea,
    maxCharacters: 2200,
    rightContent: printFile(),
    emojiSet: "google"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    paragraph: true,
    variant: "h6"
  }, "Options"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    disablePadding: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_Bordered__WEBPACK_IMPORTED_MODULE_4__["default"], {
    disableVerticalPadding: true,
    disableBorderRadius: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    divider: true,
    disableGutters: true,
    className: "listItemLeftPadding"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body2"
  }, "Upload at")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemSecondaryAction"], null, DateTimePicker && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DateTimePicker, {
    value: uploadAt,
    format: "yyyy/MM/dd hh:mm a",
    onChange: onChangeUploadAt,
    disablePast: true
  }))), inputs.map(function (element, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      className: "listItemLeftPadding",
      disableGutters: true,
      divider: index !== inputs.length - 1,
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      variant: "body2"
    }, element.label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
      variant: "outlined"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemSecondaryAction"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      value: element.state,
      onChange: handleChange,
      input: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["OutlinedInput"], {
        name: element.stateName,
        labelWidth: 0,
        className: classes.numberInput,
        classes: {
          input: classes.numberInputInput
        }
      }),
      MenuProps: {
        disableScrollLock: true
      }
    }, inputOptions.map(function (innerElement) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
        value: innerElement,
        key: innerElement
      }, innerElement);
    })))));
  }))));
}

AddPostOptions.propTypes = {
  onEmojiTextareaChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  DateTimePicker: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType,
  EmojiTextArea: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType,
  Dropzone: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType,
  ImageCropper: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  cropperFile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onCrop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onCropperClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  files: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  deleteItem: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onDrop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  characters: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  uploadAt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date),
  onChangeUploadAt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles, {
  withTheme: true
})(AddPostOptions));

/***/ }),

/***/ "./resources/js/admin/components/posts/PostContent.js":
/*!************************************************************!*\
  !*** ./resources/js/admin/components/posts/PostContent.js ***!
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
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_components_SelfAligningImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/SelfAligningImage */ "./resources/js/shared/components/SelfAligningImage.js");
/* harmony import */ var _shared_components_HighlightedInformation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/HighlightedInformation */ "./resources/js/shared/components/HighlightedInformation.js");
/* harmony import */ var _shared_components_ConfirmationDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/ConfirmationDialog */ "./resources/js/shared/components/ConfirmationDialog.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var styles = {
  dBlock: {
    display: "block"
  },
  dNone: {
    display: "none"
  },
  toolbar: {
    justifyContent: "space-between"
  }
};
var rowsPerPage = 25;

function PostContent(props) {
  var pushMessageToSnackbar = props.pushMessageToSnackbar,
      setPosts = props.setPosts,
      posts = props.posts,
      openAddPostModal = props.openAddPostModal,
      classes = props.classes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isDeletePostDialogOpen = _useState4[0],
      setIsDeletePostDialogOpen = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isDeletePostDialogLoading = _useState6[0],
      setIsDeletePostDialogLoading = _useState6[1];

  var closeDeletePostDialog = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsDeletePostDialogOpen(false);
    setIsDeletePostDialogLoading(false);
  }, [setIsDeletePostDialogOpen, setIsDeletePostDialogLoading]);
  var deletePost = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsDeletePostDialogLoading(true);
    setTimeout(function () {
      var _posts = _toConsumableArray(posts);

      var index = _posts.find(function (element) {
        return element.id === deletePost.id;
      });

      _posts.splice(index, 1);

      setPosts(_posts);
      pushMessageToSnackbar({
        text: "Your post has been deleted"
      });
      closeDeletePostDialog();
    }, 1500);
  }, [posts, setPosts, setIsDeletePostDialogLoading, pushMessageToSnackbar, closeDeletePostDialog]);
  var onDelete = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsDeletePostDialogOpen(true);
  }, [setIsDeletePostDialogOpen]);
  var handleChangePage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (__, page) {
    setPage(page);
  }, [setPage]);
  var printImageGrid = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (posts.length > 0) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        p: 1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        container: true,
        spacing: 1
      }, posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (element) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          item: true,
          xs: 6,
          sm: 4,
          md: 3,
          key: element.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_SelfAligningImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
          src: element.src,
          title: element.name,
          timeStamp: element.timestamp,
          options: [{
            name: "Delete",
            onClick: function onClick() {
              onDelete(element);
            },
            icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default.a, null)
          }]
        }));
      })));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      m: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_HighlightedInformation__WEBPACK_IMPORTED_MODULE_5__["default"], null, "No posts added yet. Click on \"NEW\" to create your first one."));
  }, [posts, onDelete, page]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
    className: classes.toolbar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6"
  }, "Your Posts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "contained",
    color: "secondary",
    onClick: openAddPostModal,
    disableElevation: true
  }, "Add Post")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], null), printImageGrid(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TablePagination"], {
    component: "div",
    count: posts.length,
    rowsPerPage: rowsPerPage,
    page: page,
    backIconButtonProps: {
      "aria-label": "Previous Page"
    },
    nextIconButtonProps: {
      "aria-label": "Next Page"
    },
    onChangePage: handleChangePage,
    classes: {
      select: classes.dNone,
      selectIcon: classes.dNone,
      actions: posts.length > 0 ? classes.dBlock : classes.dNone,
      caption: posts.length > 0 ? classes.dBlock : classes.dNone
    },
    labelRowsPerPage: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_ConfirmationDialog__WEBPACK_IMPORTED_MODULE_6__["default"], {
    open: isDeletePostDialogOpen,
    title: "Confirmation",
    content: "Do you really want to delete the post?",
    onClose: closeDeletePostDialog,
    loading: isDeletePostDialogLoading,
    onConfirm: deletePost
  }));
}

PostContent.propTypes = {
  openAddPostModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  posts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  setPosts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  pushMessageToSnackbar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(PostContent));

/***/ }),

/***/ "./resources/js/admin/components/posts/Posts.js":
/*!******************************************************!*\
  !*** ./resources/js/admin/components/posts/Posts.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PostContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostContent */ "./resources/js/admin/components/posts/PostContent.js");
/* harmony import */ var _AddPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddPost */ "./resources/js/admin/components/posts/AddPost.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Posts(props) {
  var selectPosts = props.selectPosts,
      EmojiTextArea = props.EmojiTextArea,
      ImageCropper = props.ImageCropper,
      Dropzone = props.Dropzone,
      DateTimePicker = props.DateTimePicker,
      pushMessageToSnackbar = props.pushMessageToSnackbar,
      posts = props.posts,
      setPosts = props.setPosts;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isAddPostPaperOpen = _useState2[0],
      setIsAddPostPaperOpen = _useState2[1];

  var openAddPostModal = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsAddPostPaperOpen(true);
  }, [setIsAddPostPaperOpen]);
  var closeAddPostModal = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsAddPostPaperOpen(false);
  }, [setIsAddPostPaperOpen]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    selectPosts();
  }, [selectPosts]);

  if (isAddPostPaperOpen) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddPost__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onClose: closeAddPostModal,
      EmojiTextArea: EmojiTextArea,
      ImageCropper: ImageCropper,
      Dropzone: Dropzone,
      DateTimePicker: DateTimePicker,
      pushMessageToSnackbar: pushMessageToSnackbar
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PostContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    openAddPostModal: openAddPostModal,
    posts: posts,
    setPosts: setPosts,
    pushMessageToSnackbar: pushMessageToSnackbar
  });
}

Posts.propTypes = {
  EmojiTextArea: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType,
  ImageCropper: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType,
  Dropzone: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType,
  DateTimePicker: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType,
  posts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  setPosts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  pushMessageToSnackbar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  selectPosts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Posts);

/***/ }),

/***/ "./resources/js/admin/components/subscription/LazyLoadAddBalanceDialog.js":
/*!********************************************************************************!*\
  !*** ./resources/js/admin/components/subscription/LazyLoadAddBalanceDialog.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function LazyLoadAddBalanceDialog(props) {
  var open = props.open,
      onClose = props.onClose,
      onSuccess = props.onSuccess;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      AddBalanceDialog = _useState2[0],
      setAddBalanceDialog = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      hasFetchedAddBalanceDialog = _useState4[0],
      setHasFetchedAddBlanceDialog = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (open && !hasFetchedAddBalanceDialog) {
      setHasFetchedAddBlanceDialog(true);
      Promise.all(/*! import() */[__webpack_require__.e(11), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, /*! ./AddBalanceDialog */ "./resources/js/admin/components/subscription/AddBalanceDialog.js")).then(function (Component) {
        setAddBalanceDialog(function () {
          return Component["default"];
        });
      });
    }
  }, [open, hasFetchedAddBalanceDialog, setHasFetchedAddBlanceDialog, setAddBalanceDialog]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, AddBalanceDialog && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AddBalanceDialog, {
    open: open,
    onClose: onClose,
    onSuccess: onSuccess
  }));
}

LazyLoadAddBalanceDialog.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onSuccess: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LazyLoadAddBalanceDialog);

/***/ }),

/***/ "./resources/js/admin/components/subscription/Subscription.js":
/*!********************************************************************!*\
  !*** ./resources/js/admin/components/subscription/Subscription.js ***!
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
/* harmony import */ var _SubscriptionTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubscriptionTable */ "./resources/js/admin/components/subscription/SubscriptionTable.js");
/* harmony import */ var _SubscriptionInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SubscriptionInfo */ "./resources/js/admin/components/subscription/SubscriptionInfo.js");





var styles = {
  divider: {
    backgroundColor: "rgba(0, 0, 0, 0.26)"
  }
};

function Subscription(props) {
  var transactions = props.transactions,
      classes = props.classes,
      openAddBalanceDialog = props.openAddBalanceDialog,
      selectSubscription = props.selectSubscription;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(selectSubscription, [selectSubscription]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    disablePadding: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SubscriptionInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    openAddBalanceDialog: openAddBalanceDialog
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    className: classes.divider
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SubscriptionTable__WEBPACK_IMPORTED_MODULE_3__["default"], {
    transactions: transactions
  })));
}

Subscription.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  transactions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  selectSubscription: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  openAddBalanceDialog: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Subscription));

/***/ }),

/***/ "./resources/js/admin/components/subscription/SubscriptionInfo.js":
/*!************************************************************************!*\
  !*** ./resources/js/admin/components/subscription/SubscriptionInfo.js ***!
  \************************************************************************/
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
  toolbar: {
    justifyContent: "space-between"
  }
};

function SubscriptionInfo(props) {
  var classes = props.classes,
      openAddBalanceDialog = props.openAddBalanceDialog;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
    className: classes.toolbar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: "Status",
    secondary: "Premium Account"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "contained",
    color: "secondary",
    onClick: openAddBalanceDialog,
    disableElevation: true
  }, "Add Balance"));
}

SubscriptionInfo.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  openAddBalanceDialog: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(SubscriptionInfo));

/***/ }),

/***/ "./resources/js/admin/components/subscription/SubscriptionTable.js":
/*!*************************************************************************!*\
  !*** ./resources/js/admin/components/subscription/SubscriptionTable.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _shared_components_EnhancedTableHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/EnhancedTableHead */ "./resources/js/shared/components/EnhancedTableHead.js");
/* harmony import */ var _shared_components_ColorfulChip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/ColorfulChip */ "./resources/js/shared/components/ColorfulChip.js");
/* harmony import */ var _shared_functions_unixToDateString__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/functions/unixToDateString */ "./resources/js/shared/functions/unixToDateString.js");
/* harmony import */ var _shared_components_HighlightedInformation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/HighlightedInformation */ "./resources/js/shared/components/HighlightedInformation.js");
/* harmony import */ var _shared_functions_currencyPrettyPrint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/functions/currencyPrettyPrint */ "./resources/js/shared/functions/currencyPrettyPrint.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var styles = function styles(theme) {
  var _contentWrapper;

  return {
    tableWrapper: {
      overflowX: "auto",
      width: "100%"
    },
    blackBackground: {
      backgroundColor: theme.palette.primary.main
    },
    contentWrapper: (_contentWrapper = {
      padding: theme.spacing(3)
    }, _defineProperty(_contentWrapper, theme.breakpoints.down("xs"), {
      padding: theme.spacing(2)
    }), _defineProperty(_contentWrapper, "width", "100%"), _contentWrapper),
    dBlock: {
      display: "block !important"
    },
    dNone: {
      display: "none !important"
    },
    firstData: {
      paddingLeft: theme.spacing(3)
    }
  };
};

var rows = [{
  id: "description",
  numeric: false,
  label: "Action"
}, {
  id: "balanceChange",
  numeric: false,
  label: "Balance change"
}, {
  id: "date",
  numeric: false,
  label: "Date"
}, {
  id: "paidUntil",
  numeric: false,
  label: "Paid until"
}];
var rowsPerPage = 25;

function SubscriptionTable(props) {
  var transactions = props.transactions,
      theme = props.theme,
      classes = props.classes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  var handleChangePage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (_, page) {
    setPage(page);
  }, [setPage]);

  if (transactions.length > 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.tableWrapper
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Table"], {
      "aria-labelledby": "tableTitle"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_EnhancedTableHead__WEBPACK_IMPORTED_MODULE_3__["default"], {
      rowCount: transactions.length,
      rows: rows
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableBody"], null, transactions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (transaction, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableRow"], {
        hover: true,
        tabIndex: -1,
        key: index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
        component: "th",
        scope: "row",
        className: classes.firstData
      }, transaction.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
        component: "th",
        scope: "row"
      }, transaction.balanceChange > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_ColorfulChip__WEBPACK_IMPORTED_MODULE_4__["default"], {
        label: "+".concat(Object(_shared_functions_currencyPrettyPrint__WEBPACK_IMPORTED_MODULE_7__["default"])(transaction.balanceChange)),
        color: theme.palette.secondary.main
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_ColorfulChip__WEBPACK_IMPORTED_MODULE_4__["default"], {
        label: Object(_shared_functions_currencyPrettyPrint__WEBPACK_IMPORTED_MODULE_7__["default"])(transaction.balanceChange),
        color: theme.palette.error.dark
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
        component: "th",
        scope: "row"
      }, Object(_shared_functions_unixToDateString__WEBPACK_IMPORTED_MODULE_5__["default"])(transaction.timestamp)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
        component: "th",
        scope: "row"
      }, transaction.paidUntil ? Object(_shared_functions_unixToDateString__WEBPACK_IMPORTED_MODULE_5__["default"])(transaction.paidUntil) : ""));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TablePagination"], {
      component: "div",
      count: transactions.length,
      rowsPerPage: rowsPerPage,
      page: page,
      backIconButtonProps: {
        "aria-label": "Previous Page"
      },
      nextIconButtonProps: {
        "aria-label": "Next Page"
      },
      onChangePage: handleChangePage,
      classes: {
        select: classes.dNone,
        selectIcon: classes.dNone,
        actions: transactions.length > 0 ? classes.dBlock : classes.dNone,
        caption: transactions.length > 0 ? classes.dBlock : classes.dNone
      },
      labelRowsPerPage: ""
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.contentWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_components_HighlightedInformation__WEBPACK_IMPORTED_MODULE_6__["default"], null, "No transactions received yet."));
}

SubscriptionTable.propTypes = {
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  transactions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles, {
  withTheme: true
})(SubscriptionTable));

/***/ }),

/***/ "./resources/js/admin/components/users/User.js":
/*!*****************************************************!*\
  !*** ./resources/js/admin/components/users/User.js ***!
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
/* harmony import */ var _UserDataTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserDataTable */ "./resources/js/admin/components/users/UserDataTable.js");
/* harmony import */ var _UserInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserInfo */ "./resources/js/admin/components/users/UserInfo.js");





var styles = {
  divider: {
    backgroundColor: "rgba(0, 0, 0, 0.26)"
  }
};

function User(props) {
  var classes = props.classes,
      selectUser = props.selectUser;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(selectUser, [selectUser]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    disablePadding: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserInfo__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    className: classes.divider
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserDataTable__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
}

User.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  selectUser: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(User));

/***/ }),

/***/ "./resources/js/admin/components/users/UserDataTable.js":
/*!**************************************************************!*\
  !*** ./resources/js/admin/components/users/UserDataTable.js ***!
  \**************************************************************/
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
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_components_EnhancedTableHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/EnhancedTableHead */ "./resources/js/shared/components/EnhancedTableHead.js");
/* harmony import */ var _shared_components_ColorfulChip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/ColorfulChip */ "./resources/js/shared/components/ColorfulChip.js");
/* harmony import */ var _shared_functions_unixToDateString__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/functions/unixToDateString */ "./resources/js/shared/functions/unixToDateString.js");
/* harmony import */ var _shared_components_HighlightedInformation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/HighlightedInformation */ "./resources/js/shared/components/HighlightedInformation.js");
/* harmony import */ var _shared_functions_currencyPrettyPrint__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/functions/currencyPrettyPrint */ "./resources/js/shared/functions/currencyPrettyPrint.js");
/* harmony import */ var _material_ui_icons_Pageview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Pageview */ "./node_modules/@material-ui/icons/Pageview.js");
/* harmony import */ var _material_ui_icons_Pageview__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Pageview__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var styles = function styles(theme) {
  var _contentWrapper;

  return {
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2)
      }
    },
    tableWrapper: {
      overflowX: "auto",
      width: "100%"
    },
    blackBackground: {
      backgroundColor: theme.palette.primary.main
    },
    contentWrapper: (_contentWrapper = {
      padding: theme.spacing(3)
    }, _defineProperty(_contentWrapper, theme.breakpoints.down("xs"), {
      padding: theme.spacing(2)
    }), _defineProperty(_contentWrapper, "width", "100%"), _contentWrapper),
    dBlock: {
      display: "block !important"
    },
    dNone: {
      display: "none !important"
    },
    firstData: {
      paddingLeft: theme.spacing(3)
    },
    noDecoration: {
      textDecoration: "none !important"
    }
  };
};

var LinearIndeterminate = function LinearIndeterminate(props) {
  var classes = props.classes;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["LinearProgress"], null));
};

var columns = Object(memoize_one__WEBPACK_IMPORTED_MODULE_11__["default"])(function (clickHandler) {
  return [{
    selector: "id",
    name: "#",
    sortable: true
  }, {
    selector: "name",
    name: "Name",
    sortable: true
  }, {
    selector: "email",
    name: "Email",
    sortable: true
  }, {
    selector: "username",
    name: "Username",
    sortable: true
  }, {
    selector: "cf_handle",
    name: "CF Handle",
    sortable: true
  }, {
    selector: "institution",
    name: "Institution",
    sortable: true
  }, {
    cell: function cell(row) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        variant: "outlined",
        size: "small",
        "data-id": row.id,
        onClick: clickHandler
      }, "View");
    },
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
    name: 'Action'
  }];
});

function UserDataTable(props) {
  var theme = props.theme,
      classes = props.classes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState6 = _slicedToArray(_useState5, 2),
      totalRows = _useState6[0],
      setTotalRows = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(10),
      _useState8 = _slicedToArray(_useState7, 2),
      perPage = _useState8[0],
      setPerPage = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState10 = _slicedToArray(_useState9, 2),
      searchQuery = _useState10[0],
      setSearchQuery = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState12 = _slicedToArray(_useState11, 2),
      currentPage = _useState12[0],
      setCurrentPage = _useState12[1];

  var inputSearch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var fetchUsers = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : currentPage;
    setLoading(true);
    axios.get("/api/users?page=" + page + "&per_page=" + perPage + "&q=" + searchQuery).then(function (res) {
      setData(res.data.data);
      setTotalRows(res.data.total);
      setLoading(false);
    });
  }, [setLoading, setData, perPage, searchQuery, setTotalRows]);
  var handlePageChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (page) {
    setCurrentPage(page);
    fetchCourses(page);
  }, [setCurrentPage, fetchUsers]);
  var handlePerRowsChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (newPerPage, page) {
    setPerPage(newPerPage);
  }, [setPerPage]);
  var handleSearchQueryChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setSearchQuery(inputSearch.current.value);
  }, [setSearchQuery, inputSearch]);
  var handleAction = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    console.log(e.currentTarget.dataset.id);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function (async) {
    fetchUsers();
  }, [fetchUsers]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.tableWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DataTable, {
    noHeader: true,
    columns: columns(handleAction),
    data: data,
    defaultSortField: "id",
    highlightOnHover: true,
    striped: true,
    progressPending: loading,
    progressComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinearIndeterminate, {
      classes: classes
    }),
    persistTableHead: true,
    pagination: true,
    paginationServer: true,
    paginationTotalRows: totalRows,
    onChangeRowsPerPage: handlePerRowsChange,
    onChangePage: handlePageChange,
    subHeader: true,
    subHeaderComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
      id: "outlined-basic",
      label: "Search",
      variant: "outlined",
      size: "small",
      style: {
        margin: '5px'
      },
      inputRef: inputSearch,
      onChange: handleSearchQueryChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: {
        margin: '5px'
      },
      color: "action"
    })),
    subHeaderAlign: "left"
  }));
}

UserDataTable.propTypes = {
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles, {
  withTheme: true
})(UserDataTable));

/***/ }),

/***/ "./resources/js/admin/components/users/UserInfo.js":
/*!*********************************************************!*\
  !*** ./resources/js/admin/components/users/UserInfo.js ***!
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
  toolbar: {
    justifyContent: "space-between"
  }
};

function UserInfo(props) {
  var classes = props.classes;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
    className: classes.toolbar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: "Users",
    secondary: "Restricted data"
  }));
}

UserInfo.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(UserInfo));

/***/ }),

/***/ "./resources/js/admin/dummy_data/images/image1.jpg":
/*!*********************************************************!*\
  !*** ./resources/js/admin/dummy_data/images/image1.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/image1.jpg?e69e6026a423d9ec529b57455907b2b1";

/***/ }),

/***/ "./resources/js/admin/dummy_data/images/image10.jpg":
/*!**********************************************************!*\
  !*** ./resources/js/admin/dummy_data/images/image10.jpg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/image10.jpg?8bb0c1c3f829049e059c5af0d0417f64";

/***/ }),

/***/ "./resources/js/admin/dummy_data/images/image2.jpg":
/*!*********************************************************!*\
  !*** ./resources/js/admin/dummy_data/images/image2.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/image2.jpg?1191dc67c78553a89fe1d8f7c671fdfe";

/***/ }),

/***/ "./resources/js/admin/dummy_data/images/image3.jpg":
/*!*********************************************************!*\
  !*** ./resources/js/admin/dummy_data/images/image3.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/image3.jpg?bda67d264e2b4b06614c31670c6a8948";

/***/ }),

/***/ "./resources/js/admin/dummy_data/images/image4.jpg":
/*!*********************************************************!*\
  !*** ./resources/js/admin/dummy_data/images/image4.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/image4.jpg?79ebeb1fee81de72e553c9b30632711e";

/***/ }),

/***/ "./resources/js/admin/dummy_data/images/image5.jpg":
/*!*********************************************************!*\
  !*** ./resources/js/admin/dummy_data/images/image5.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/image5.jpg?39a17f69e21b46e0cecbf738282960b6";

/***/ }),

/***/ "./resources/js/admin/dummy_data/images/image6.jpg":
/*!*********************************************************!*\
  !*** ./resources/js/admin/dummy_data/images/image6.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/image6.jpg?8b868e181cca8220ca5e725a1f7b984d";

/***/ }),

/***/ "./resources/js/admin/dummy_data/images/image7.jpg":
/*!*********************************************************!*\
  !*** ./resources/js/admin/dummy_data/images/image7.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/image7.jpg?e052cbd6b2db7efc7de674d3047c998c";

/***/ }),

/***/ "./resources/js/admin/dummy_data/images/image8.jpg":
/*!*********************************************************!*\
  !*** ./resources/js/admin/dummy_data/images/image8.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/image8.jpg?b23293625f3b70e68020633ce1427566";

/***/ }),

/***/ "./resources/js/admin/dummy_data/images/image9.jpg":
/*!*********************************************************!*\
  !*** ./resources/js/admin/dummy_data/images/image9.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/image9.jpg?b43804d383d9ba29df937e93cca4f1c1";

/***/ }),

/***/ "./resources/js/admin/dummy_data/images/profilePicture.jpg":
/*!*****************************************************************!*\
  !*** ./resources/js/admin/dummy_data/images/profilePicture.jpg ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/profilePicture.jpg?3068bc41f0dff0fc6b48442dad234a06";

/***/ }),

/***/ "./resources/js/admin/dummy_data/persons.js":
/*!**************************************************!*\
  !*** ./resources/js/admin/dummy_data/persons.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_image1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/image1.jpg */ "./resources/js/admin/dummy_data/images/image1.jpg");
/* harmony import */ var _images_image1_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_image1_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_image2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/image2.jpg */ "./resources/js/admin/dummy_data/images/image2.jpg");
/* harmony import */ var _images_image2_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_image2_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_image3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/image3.jpg */ "./resources/js/admin/dummy_data/images/image3.jpg");
/* harmony import */ var _images_image3_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_image3_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_image4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/image4.jpg */ "./resources/js/admin/dummy_data/images/image4.jpg");
/* harmony import */ var _images_image4_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_image4_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_image5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/image5.jpg */ "./resources/js/admin/dummy_data/images/image5.jpg");
/* harmony import */ var _images_image5_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_image5_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_image6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/image6.jpg */ "./resources/js/admin/dummy_data/images/image6.jpg");
/* harmony import */ var _images_image6_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_image6_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_image7_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/image7.jpg */ "./resources/js/admin/dummy_data/images/image7.jpg");
/* harmony import */ var _images_image7_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_image7_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_image8_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/image8.jpg */ "./resources/js/admin/dummy_data/images/image8.jpg");
/* harmony import */ var _images_image8_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_image8_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_image9_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/image9.jpg */ "./resources/js/admin/dummy_data/images/image9.jpg");
/* harmony import */ var _images_image9_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_image9_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_image10_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/image10.jpg */ "./resources/js/admin/dummy_data/images/image10.jpg");
/* harmony import */ var _images_image10_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_image10_jpg__WEBPACK_IMPORTED_MODULE_9__);










/* harmony default export */ __webpack_exports__["default"] = ([{
  profilePicUrl: _images_image1_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
  name: "Markus"
}, {
  profilePicUrl: _images_image2_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
  name: "David"
}, {
  profilePicUrl: _images_image3_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
  name: "Arold"
}, {
  profilePicUrl: _images_image4_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
  name: "Joanic"
}, {
  profilePicUrl: _images_image5_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
  name: "Sophia"
}, {
  profilePicUrl: _images_image6_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
  name: "Aaron"
}, {
  profilePicUrl: _images_image7_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
  name: "Steven"
}, {
  profilePicUrl: _images_image8_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
  name: "Felix"
}, {
  profilePicUrl: _images_image9_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
  name: "Vivien"
}, {
  profilePicUrl: _images_image10_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
  name: "Leonie"
}]);

/***/ }),

/***/ "./resources/js/shared/components/ActionPaper.js":
/*!*******************************************************!*\
  !*** ./resources/js/shared/components/ActionPaper.js ***!
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




var styles = function styles(theme) {
  return {
    helpPadding: {
      "@media (max-width:  400px)": {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
      }
    },
    fullWidth: {
      width: "100%"
    }
  };
};

function ActionPaper(props) {
  var theme = props.theme,
      classes = props.classes,
      title = props.title,
      content = props.content,
      maxWidth = props.maxWidth,
      actions = props.actions,
      helpPadding = props.helpPadding,
      fullWidthActions = props.fullWidthActions;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    pt: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    style: {
      maxWidth: theme.breakpoints.values[maxWidth]
    }
  }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogTitle"], null, title), content && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogContent"], {
    classes: helpPadding ? {
      root: classes.helpPadding
    } : null
  }, content), actions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    pb: 2,
    pr: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogActions"], {
    classes: {
      action: fullWidthActions ? classes.fullWidth : null
    }
  }, actions))));
}

ActionPaper.propTypes = {
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
  maxWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
  helpPadding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  fullWidthActions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles, {
  withTheme: true
})(ActionPaper));

/***/ }),

/***/ "./resources/js/shared/components/Bordered.js":
/*!****************************************************!*\
  !*** ./resources/js/shared/components/Bordered.js ***!
  \****************************************************/
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
    wrapper: {
      border: "".concat(theme.border.borderWidth, "px solid ").concat(theme.border.borderColor)
    },
    greyed: {
      border: "".concat(theme.border.borderWidth, "px solid rgba(0, 0, 0, 0.23)")
    }
  };
};

function Bordered(props) {
  var classes = props.classes,
      theme = props.theme,
      disableVerticalPadding = props.disableVerticalPadding,
      disableBorderRadius = props.disableBorderRadius,
      children = props.children,
      variant = props.variant;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: variant === "greyed" ? classes.greyed : classes.wrapper,
    style: {
      paddingLeft: disableVerticalPadding ? 0 : theme.spacing(2),
      paddingRight: disableVerticalPadding ? 0 : theme.spacing(2),
      borderRadius: disableBorderRadius ? 0 : theme.shape.borderRadius
    }
  }, children);
}

Bordered.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  disableVerticalPadding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  disableBorderRadius: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array]),
  variant: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles, {
  withTheme: true
})(Bordered));

/***/ }),

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

/***/ "./resources/js/shared/components/ColorfulChip.js":
/*!********************************************************!*\
  !*** ./resources/js/shared/components/ColorfulChip.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _functions_shadeColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions/shadeColor */ "./resources/js/shared/functions/shadeColor.js");





function ColorfulChip(props) {
  var color = props.color,
      label = props.label,
      className = props.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Chip"], {
    style: {
      color: color,
      backgroundColor: Object(_functions_shadeColor__WEBPACK_IMPORTED_MODULE_3__["default"])(color, 0.7)
    },
    label: label,
    className: className ? className : null
  });
}

ColorfulChip.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
};
/* harmony default export */ __webpack_exports__["default"] = (ColorfulChip);

/***/ }),

/***/ "./resources/js/shared/components/ConfirmationDialog.js":
/*!**************************************************************!*\
  !*** ./resources/js/shared/components/ConfirmationDialog.js ***!
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
/* harmony import */ var _ButtonCircularProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ButtonCircularProgress */ "./resources/js/shared/components/ButtonCircularProgress.js");





function ConfirmationDialog(props) {
  var open = props.open,
      onClose = props.onClose,
      loading = props.loading,
      title = props.title,
      content = props.content,
      onConfirm = props.onConfirm;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Dialog"], {
    open: open,
    onClose: onClose,
    disableBackdropClick: loading,
    disableEscapeKeyDown: loading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogTitle"], null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogContentText"], null, content)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogActions"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: onClose,
    disabled: loading
  }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "secondary",
    onClick: onConfirm,
    variant: "contained",
    disabled: loading
  }, "Yes ", loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonCircularProgress__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
}

ConfirmationDialog.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]),
  onConfirm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (ConfirmationDialog);

/***/ }),

/***/ "./resources/js/shared/components/ConsecutiveSnackbarMessages.js":
/*!***********************************************************************!*\
  !*** ./resources/js/shared/components/ConsecutiveSnackbarMessages.js ***!
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var styles = function styles(theme) {
  return {
    root: {
      backgroundColor: theme.palette.primary.main,
      paddingTop: 0,
      paddingBottom: 0
    }
  };
};

function ConsecutiveSnackbars(props) {
  var classes = props.classes,
      getPushMessageFromChild = props.getPushMessageFromChild;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState4 = _slicedToArray(_useState3, 2),
      messageInfo = _useState4[0],
      setMessageInfo = _useState4[1];

  var queue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]);
  var processQueue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (queue.current.length > 0) {
      setMessageInfo(queue.current.shift());
      setIsOpen(true);
    }
  }, [setMessageInfo, setIsOpen, queue]);
  var handleClose = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (_, reason) {
    if (reason === "clickaway") {
      return;
    }

    setIsOpen(false);
  }, [setIsOpen]);
  var pushMessage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (message) {
    queue.current.push({
      message: message,
      key: new Date().getTime()
    });

    if (isOpen) {
      // immediately begin dismissing current message
      // to start showing new one
      setIsOpen(false);
    } else {
      processQueue();
    }
  }, [queue, isOpen, setIsOpen, processQueue]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getPushMessageFromChild(pushMessage);
  }, [getPushMessageFromChild, pushMessage]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Snackbar"], {
    disableWindowBlurListener: true,
    key: messageInfo.key,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left"
    },
    open: isOpen,
    autoHideDuration: 6000,
    onClose: handleClose,
    onExited: processQueue,
    ContentProps: {
      classes: {
        root: classes.root
      }
    },
    message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, messageInfo.message ? messageInfo.message.text : null)
  });
}

ConsecutiveSnackbars.propTypes = {
  getPushMessageFromChild: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles, {
  withTheme: true
})(ConsecutiveSnackbars));

/***/ }),

/***/ "./resources/js/shared/components/EnhancedTableHead.js":
/*!*************************************************************!*\
  !*** ./resources/js/shared/components/EnhancedTableHead.js ***!
  \*************************************************************/
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
    tableSortLabel: {
      cursor: "text",
      userSelect: "auto",
      color: "inherit !important"
    },
    noIcon: {
      "& path": {
        display: "none !important"
      }
    },
    paddingFix: {
      paddingLeft: theme.spacing(3)
    }
  };
};

function EnhancedTableHead(props) {
  var order = props.order,
      orderBy = props.orderBy,
      rows = props.rows,
      onRequestSort = props.onRequestSort,
      classes = props.classes;
  var createSortHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (property) {
    return function (event) {
      onRequestSort(event, property);
    };
  }, [onRequestSort]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TableHead"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TableRow"], null, rows.map(function (row, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TableCell"], {
      key: index,
      align: row.numeric ? "right" : "inherit",
      padding: "default",
      sortDirection: orderBy === row.name ? order : false,
      className: index === 0 ? classes.paddingFix : null
    }, onRequestSort ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
      title: "Sort",
      placement: row.numeric ? "bottom-end" : "bottom-start",
      enterDelay: 300
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TableSortLabel"], {
      active: orderBy === row.id,
      direction: order,
      onClick: createSortHandler(row.id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      variant: "body2"
    }, row.label))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TableSortLabel"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.tableSortLabel, classes.noIcon)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      variant: "body2",
      className: classes.label
    }, row.label)));
  })));
}

EnhancedTableHead.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onRequestSort: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  order: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  orderBy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  rows: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles, {
  withTheme: true
})(EnhancedTableHead));

/***/ }),

/***/ "./resources/js/shared/components/HelpIcon.js":
/*!****************************************************!*\
  !*** ./resources/js/shared/components/HelpIcon.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_HelpOutline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/HelpOutline */ "./node_modules/@material-ui/icons/HelpOutline.js");
/* harmony import */ var _material_ui_icons_HelpOutline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_HelpOutline__WEBPACK_IMPORTED_MODULE_3__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var styles = function styles(theme) {
  return {
    tooltipTypo: _objectSpread(_objectSpread({
      whiteSpace: "pre-line !important"
    }, theme.typography.caption), {}, {
      color: theme.palette.common.white
    }),
    tooltip: {
      verticalAlign: "middle",
      fontSize: "1.25rem"
    },
    helpIcon: {
      marginLeft: theme.spacing(1),
      "@media (max-width: 350px)": {
        marginLeft: theme.spacing(0.5)
      },
      transition: theme.transitions.create(["color"], {
        duration: theme.transitions.duration["short"],
        easing: theme.transitions.easing.easeInOut
      })
    }
  };
};

function HelpIcon(props) {
  var classes = props.classes,
      title = props.title;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isHovered = _useState2[0],
      setIsHovered = _useState2[1];

  var onMouseOver = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsHovered(true);
  }, []);
  var onMouseLeave = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsHovered(false);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      variant: "body2",
      className: classes.tooltipTypo
    }, title),
    className: classes.tooltip,
    enterTouchDelay: 300
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_HelpOutline__WEBPACK_IMPORTED_MODULE_3___default.a
  /**
   * We have to use onMouseOver and not onMouseEnter, because if we have overlapping
   * tooltips, the onMouseEnter wont fire when the old tooltip is fading
   * */
  , {
    onMouseOver: onMouseOver,
    onFocus: onMouseOver,
    onBlur: onMouseLeave,
    onMouseLeave: onMouseLeave,
    color: isHovered ? "primary" : "inherit",
    className: classes.helpIcon,
    style: {
      cursor: isHovered ? "pointer" : "auto"
    }
  }));
}

HelpIcon.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node])
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles, {
  withTheme: true
})(HelpIcon));

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

/***/ "./resources/js/shared/components/ImageCropperDialog.js":
/*!**************************************************************!*\
  !*** ./resources/js/shared/components/ImageCropperDialog.js ***!
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var styles = function styles(theme) {
  return {
    dialogPaper: {
      maxWidth: "".concat(theme.breakpoints.values.md, "px !important")
    },
    dialogContent: {
      paddingTop: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2)
    }
  };
};

function ImageCropperDialog(props) {
  var ImageCropper = props.ImageCropper,
      classes = props.classes,
      onClose = props.onClose,
      open = props.open,
      src = props.src,
      onCrop = props.onCrop,
      aspectRatio = props.aspectRatio;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      crop = _useState2[0],
      setCrop = _useState2[1];

  var getCropFunctionFromChild = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (cropFunction) {
    setCrop(function () {
      return cropFunction;
    });
  }, [setCrop]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Dialog"], {
    open: open,
    onEscapeKeyDown: onClose,
    classes: {
      paper: classes.dialogPaper
    },
    style: {
      overflowX: "visible"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogContent"], {
    className: classes.dialogContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageCropper, {
    src: src,
    setCropFunction: getCropFunctionFromChild,
    onCrop: onCrop,
    aspectRatio: aspectRatio,
    color: "#3399FF"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogActions"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mr: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: onClose
  }, "Close")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "contained",
    color: "secondary",
    onClick: crop
  }, "Crop")));
}

ImageCropperDialog.propTypes = {
  ImageCropper: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  open: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  onCrop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  aspectRatio: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles, {
  withTheme: true
})(ImageCropperDialog));

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

/***/ "./resources/js/shared/components/SelfAligningImage.js":
/*!*************************************************************!*\
  !*** ./resources/js/shared/components/SelfAligningImage.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _VertOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VertOptions */ "./resources/js/shared/components/VertOptions.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var styles = {
  imageContainer: {
    width: "100%",
    paddingTop: "100%",
    overflow: "hidden",
    position: "relative"
  },
  image: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto"
  }
};

function SelfAligningImage(props) {
  var classes = props.classes,
      src = props.src,
      title = props.title,
      timeStamp = props.timeStamp,
      options = props.options,
      roundedBorder = props.roundedBorder,
      theme = props.theme;
  var img = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      hasMoreWidthThanHeight = _useState2[0],
      setHasMoreWidthThanHeight = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      hasLoaded = _useState4[0],
      setHasLoaded = _useState4[1];

  var onLoad = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (img.current.naturalHeight < img.current.naturalWidth) {
      setHasMoreWidthThanHeight(true);
    } else {
      setHasMoreWidthThanHeight(false);
    }

    setHasLoaded(true);
  }, [img, setHasLoaded, setHasMoreWidthThanHeight]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.imageContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: {
      height: hasMoreWidthThanHeight ? "100%" : "auto",
      width: hasMoreWidthThanHeight ? "auto" : "100%",
      display: hasLoaded ? "block" : "none",
      borderRadius: roundedBorder ? theme.shape.borderRadius : 0
    },
    ref: img,
    className: classes.image,
    onLoad: onLoad,
    src: src,
    alt: ""
  }), title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["GridListTileBar"], {
    title: title,
    subtitle: Object(date_fns_format__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(timeStamp * 1000), "PP - k:mm", {
      awareOfUnicodeTokens: true
    }),
    actionIcon: options.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VertOptions__WEBPACK_IMPORTED_MODULE_4__["default"], {
      color: theme.palette.common.white,
      items: options
    })
  }));
}

SelfAligningImage.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  timeStamp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  roundedBorder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  options: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles, {
  withTheme: true
})(SelfAligningImage));

/***/ }),

/***/ "./resources/js/shared/components/VertOptions.js":
/*!*******************************************************!*\
  !*** ./resources/js/shared/components/VertOptions.js ***!
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
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_3__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var styles = {
  listItemtext: {
    paddingLeft: "0 !important"
  }
};

function VertOptions(props) {
  var items = props.items,
      classes = props.classes,
      color = props.color;
  var anchorEl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var handleClose = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsOpen(false);
  }, [setIsOpen]);
  var handleOpen = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsOpen(true);
  }, [setIsOpen]);
  var id = isOpen ? "scroll-playground" : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    onClick: handleOpen,
    buttonRef: anchorEl,
    style: {
      color: color ? color : null
    },
    "aria-describedby": id,
    "aria-label": "More Options"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      color: color ? color : null
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
    id: id,
    open: isOpen,
    anchorEl: anchorEl.current,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "center"
    },
    onClose: handleClose,
    disableScrollLock: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuList"], {
    dense: true
  }, items.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
      key: item.name,
      onClick: function onClick() {
        handleClose();
        item.onClick();
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], null, item.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
      className: classes.listItemtext
    }, item.name));
  }))));
}

VertOptions.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(VertOptions));

/***/ }),

/***/ "./resources/js/shared/functions/currencyPrettyPrint.js":
/*!**************************************************************!*\
  !*** ./resources/js/shared/functions/currencyPrettyPrint.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function currencyPrettyPrint(cents) {
  var dollars = cents / 100;
  return dollars.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

/* harmony default export */ __webpack_exports__["default"] = (currencyPrettyPrint);

/***/ }),

/***/ "./resources/js/shared/functions/getSorting.js":
/*!*****************************************************!*\
  !*** ./resources/js/shared/functions/getSorting.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

function getSorting(order, orderBy) {
  return order === "desc" ? function (a, b) {
    return desc(a, b, orderBy);
  } : function (a, b) {
    return -desc(a, b, orderBy);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (getSorting);

/***/ }),

/***/ "./resources/js/shared/functions/shadeColor.js":
/*!*****************************************************!*\
  !*** ./resources/js/shared/functions/shadeColor.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function shadeColor(color, percent) {
  var f = parseInt(color.slice(1), 16);
  var t = percent < 0 ? 0 : 255;
  var p = percent < 0 ? percent * -1 : percent;
  var R = f >> 16;
  var G = f >> 8 & 0x00ff;
  var B = f & 0x0000ff;
  return "#".concat((0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1));
}

/* harmony default export */ __webpack_exports__["default"] = (shadeColor);

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

/***/ "./resources/js/shared/functions/stableSort.js":
/*!*****************************************************!*\
  !*** ./resources/js/shared/functions/stableSort.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stableSort(array, cmp) {
  var stabilizedThis = array.map(function (el, index) {
    return [el, index];
  });
  stabilizedThis.sort(function (a, b) {
    var order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(function (el) {
    return el[0];
  });
}

/* harmony default export */ __webpack_exports__["default"] = (stableSort);

/***/ }),

/***/ "./resources/js/shared/functions/unixToDateString.js":
/*!***********************************************************!*\
  !*** ./resources/js/shared/functions/unixToDateString.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function unixToDateString(unix) {
  var date = new Date(unix * 1000);
  return "".concat(date.getDate(), ".").concat(date.getMonth() + 1, ".").concat(date.getFullYear());
}

/* harmony default export */ __webpack_exports__["default"] = (unixToDateString);

/***/ })

}]);