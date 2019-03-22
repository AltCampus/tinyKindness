(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./client/src/components/Profile.js":
/*!******************************************!*\
  !*** ./client/src/components/Profile.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_authActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/actions/authActions */ \"./client/src/store/actions/authActions.js\");\n/* harmony import */ var _Tags__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Tags */ \"./client/src/components/Tags.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar Profile =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Profile, _Component);\n\n  function Profile(props) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Profile);\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Profile).call(this, props));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"displayTags\", function (tags) {\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", null, tags.map(function (tag) {\n        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Tags__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n          tag: tag,\n          key: tag._id\n        });\n      }));\n    });\n\n    _this.state = {\n      isLoading: true\n    };\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Profile, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      // get data for profile\n      var token = localStorage.getItem('token');\n      var username = location.href.slice(location.href.indexOf('@') + 1);\n      this.props.dispatch(_store_actions_authActions__WEBPACK_IMPORTED_MODULE_9__[\"default\"].getUserProfile({\n        token: token,\n        username: username\n      }, function (userStatus) {\n        if (userStatus) {\n          _this2.setState({\n            isLoading: false\n          });\n        }\n      }));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var user = this.props.user;\n      var isLoading = this.state.isLoading;\n      return isLoading ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"p\", null, \"Loading...\") : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"main\", {\n        className: \"profile\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"profile-wrapper wrapper\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"button\", {\n        className: \"btn edit-btn\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"i\", {\n        className: \"fas fa-pencil-alt\"\n      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"user-info\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"h3\", {\n        className: \"user-name\"\n      }, user.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"a\", {\n        href: 'https://twitter.com/' + user.username,\n        target: \"_blankl\",\n        className: \"twitter-link\"\n      }, user.username), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"p\", {\n        className: \"user-bio\"\n      }, user.bio)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"user-details\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"user-mini-section\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"h4\", {\n        className: \"user-mini-head\"\n      }, \"Introductions \"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, user.introductions && this.displayTags(user.introductions))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"user-mini-section\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"h4\", {\n        className: \"user-mini-head\"\n      }, \"Feedbacks\"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, user.feedback && this.displayTags(user.feedback))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"user-mini-section\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"h4\", {\n        className: \"user-mini-head\"\n      }, \"Resources\"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, user.resources && this.displayTags(user.resources)))))));\n    }\n  }]);\n\n  return Profile;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    user: state.profileUser || {}\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(mapStateToProps)(Profile));\n\n//# sourceURL=webpack:///./client/src/components/Profile.js?");

/***/ }),

/***/ "./client/src/components/Tags.js":
/*!***************************************!*\
  !*** ./client/src/components/Tags.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n // TODO:\n// 1 - Complete Delete Tag Function\n\nvar Tags =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Tags, _Component);\n\n  function Tags() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Tags);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Tags)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"deleteTag\", function () {// this.setSate({\n      // })\n    });\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Tags, [{\n    key: \"render\",\n    value: function render() {\n      // console.log(this.props.tag);\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"span\", {\n        className: \"tags\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"span\", {\n        className: \"tag\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"span\", {\n        className: \"tag-head\"\n      }, this.props.tag.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"button\", {\n        onClick: this.deleteTag,\n        className: \"tag-remove\"\n      }, \"x\")));\n    }\n  }]);\n\n  return Tags;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tags);\n\n//# sourceURL=webpack:///./client/src/components/Tags.js?");

/***/ }),

/***/ "./client/src/store/actions/authActions.js":
/*!*************************************************!*\
  !*** ./client/src/store/actions/authActions.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./client/src/store/actions/types.js\");\n\nvar URI = 'http://localhost:8001/api/v1';\nvar authActions = {\n  getUserData: function getUserData(_ref, cb) {\n    var token = _ref.token;\n    return function (dispatch) {\n      fetch(\"\".concat(URI, \"/users\"), {\n        headers: {\n          Authorization: token\n        }\n      }).then(function (res) {\n        if (res.status !== 401 || res.status !== 404) {\n          res.json().then(function (user) {\n            dispatch({\n              type: _types__WEBPACK_IMPORTED_MODULE_0__[\"GET_USER_DATA\"],\n              user: user\n            });\n            cb(true);\n          });\n        }\n      });\n    };\n  },\n  getUserProfile: function getUserProfile(_ref2, cb) {\n    var token = _ref2.token,\n        username = _ref2.username;\n    return function (dispatch) {\n      fetch(\"\".concat(URI, \"/profile/@\").concat(username), {\n        headers: {\n          Authorization: token\n        }\n      }).then(function (res) {\n        if (res.status === 200) {\n          res.json().then(function (user) {\n            console.log(user);\n            dispatch({\n              type: _types__WEBPACK_IMPORTED_MODULE_0__[\"SET_USER_PROFILE\"],\n              user: user\n            });\n            cb(true);\n          });\n        }\n      });\n    };\n  },\n  updateUser: function updateUser(user) {\n    return function (dispatch) {\n      fetch(\"\");\n    };\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (authActions);\n\n//# sourceURL=webpack:///./client/src/store/actions/authActions.js?");

/***/ })

}]);