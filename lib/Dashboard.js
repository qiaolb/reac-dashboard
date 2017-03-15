(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by joe on 2017/3/14.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Circle = function (_React$Component) {
  _inherits(Circle, _React$Component);

  function Circle() {
    _classCallCheck(this, Circle);

    return _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).apply(this, arguments));
  }

  _createClass(Circle, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          strokeWidth = _props.strokeWidth,
          trailWidth = _props.trailWidth,
          strokeColor = _props.strokeColor,
          trailColor = _props.trailColor,
          strokeLinecap = _props.strokeLinecap,
          value = _props.value,
          minValue = _props.minValue,
          maxValue = _props.maxValue,
          style = _props.style,
          className = _props.className,
          openWidth = _props.openWidth,
          restProps = _objectWithoutProperties(_props, ['prefixCls', 'strokeWidth', 'trailWidth', 'strokeColor', 'trailColor', 'strokeLinecap', 'value', 'minValue', 'maxValue', 'style', 'className', 'openWidth']);

      var radius = 50 - strokeWidth / 2;
      var pathString = 'M 50,50 m 0,' + radius + '\n     a ' + radius + ',' + radius + ' 0 1 1 0,-' + 2 * radius + '\n     a ' + radius + ',' + radius + ' 0 1 1 0,' + 2 * radius;

      var len = Math.PI * 2 * radius;

      var trailPathStyle = {
        strokeDasharray: len - openWidth + 'px ' + len + 'px',
        strokeDashoffset: '-' + openWidth / 2 + 'px',
        transition: 'stroke-dashoffset 0.3s ease 0s, stroke 0.3s ease'
      };
      var strokePathStyle = {
        strokeDasharray: (value - minValue) / (maxValue - minValue) * (len - openWidth) + 'px ' + len + 'px',
        strokeDashoffset: '-' + openWidth / 2 + 'px',
        transition: 'stroke-dashoffset 0.3s ease 0s, stroke 0.3s ease'
      };

      return _react2.default.createElement(
        'svg',
        _extends({
          className: prefixCls + '-circle ' + className,
          viewBox: '0 0 100 100',
          style: style
        }, restProps),
        _react2.default.createElement('path', {
          className: prefixCls + '-circle-trail',
          d: pathString,
          stroke: trailColor,
          strokeWidth: trailWidth || strokeWidth,
          fillOpacity: '0',
          style: trailPathStyle
        }),
        _react2.default.createElement('path', {
          className: prefixCls + '-circle-path',
          d: pathString,
          strokeLinecap: strokeLinecap,
          stroke: strokeColor,
          strokeWidth: strokeWidth,
          fillOpacity: '0',
          ref: function ref(path) {
            _this2.path = path;
          },
          style: strokePathStyle
        })
      );
    }
  }]);

  return Circle;
}(_react2.default.Component);

exports.default = Circle;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Circle = __webpack_require__(1);

var _Circle2 = _interopRequireDefault(_Circle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by joe on 16/9/2.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Dashboard = function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
  }

  _createClass(Dashboard, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          className = _props.className,
          _props$value = _props.value,
          value = _props$value === undefined ? 0 : _props$value,
          _props$minValue = _props.minValue,
          minValue = _props$minValue === undefined ? 100 : _props$minValue,
          _props$maxValue = _props.maxValue,
          maxValue = _props$maxValue === undefined ? 100 : _props$maxValue,
          status = _props.status,
          format = _props.format,
          trailColor = _props.trailColor,
          strokeColor = _props.strokeColor,
          openWidth = _props.openWidth,
          type = _props.type,
          strokeWidth = _props.strokeWidth,
          width = _props.width,
          showInfo = _props.showInfo,
          restProps = _objectWithoutProperties(_props, ["prefixCls", "className", "value", "minValue", "maxValue", "status", "format", "trailColor", "strokeColor", "openWidth", "type", "strokeWidth", "width", "showInfo"]);

      var circleSize = this.props.width || 132;
      var circleStyle = {
        width: circleSize,
        height: circleSize,
        fontSize: circleSize * 0.16 + 6
      };

      var circleWidth = strokeWidth || 6;

      // prefixCls = 'dashboard';
      var textFormatter = format || function (value, minValue, maxValue) {
        return (value - minValue) / (maxValue - minValue) + "%";
      };

      var progressInfo = void 0;

      if (showInfo) {
        progressInfo = _react2.default.createElement(
          "span",
          { className: prefixCls + "-text" },
          textFormatter(value, minValue, maxValue)
        );
      }

      return _react2.default.createElement(
        "div",
        { className: prefixCls + " " + prefixCls + "-circle " + prefixCls + "-status-normal " + prefixCls + "-show-info" },
        _react2.default.createElement(
          "div",
          { className: prefixCls + "-inner", style: circleStyle },
          _react2.default.createElement(_Circle2.default, {
            value: value,
            minValue: minValue,
            maxValue: maxValue,
            strokeWidth: circleWidth,
            trailWidth: circleWidth,
            strokeColor: strokeColor,
            trailColor: trailColor,
            prefixCls: prefixCls,
            openWidth: openWidth,
            className: className
          }),
          progressInfo
        )
      );
    }
  }]);

  return Dashboard;
}(_react2.default.Component);

exports.default = Dashboard;

/***/ })
/******/ ]);
});