/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = vendor;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(12);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(105);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//获取图片相关的数据
/**
 * Created by tangyao-pc on 2017/6/23.
 */

var imageDatas = __webpack_require__(4);
//将图片名信息转化成图片URL路径信息
imageDatas = function (imageDatasArr) {

    for (var i = 0, j = imageDatasArr.length; i < j; i++) {

        var singleImageData = imageDatasArr[i];
        singleImageData.imageURL = __webpack_require__(5)("./" + singleImageData.fileName);

        imageDatasArr[i] = singleImageData;
    }

    return imageDatasArr;
}(imageDatas);

var GalleryByReactApp = _react2.default.createClass({
    displayName: 'GalleryByReactApp',


    render: function render() {
        return _react2.default.createElement(
            'section',
            { className: 'stage' },
            _react2.default.createElement('section', { className: 'img-sec' }),
            _react2.default.createElement('nav', { className: 'controller-nav' })
        );
    }

});

_reactDom2.default.render(_react2.default.createElement(GalleryByReactApp, null), document.getElementById("content"));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [{
	"fileName": "1.jpg",
	"title": "Heaven of time",
	"desc": "Here  he comes Here comes Speed Racer"
}, {
	"fileName": "2.jpg",
	"title": "Love is PAIN",
	"desc": "WELCOME TO CHINA...AND L LOVE YOU"
}, {
	"fileName": "3.jpg",
	"title": "JAPAN",
	"desc": "HELLO JAPAN ...THIS IS A FANTASTIC NATION"
}, {
	"fileName": "4.jpg",
	"title": "BEAUTIFUL GIRL",
	"desc": "GIRLS GENERATION..."
}, {
	"fileName": "5.jpg",
	"title": "NOBODY",
	"desc": "WONDER GIRLS"
}, {
	"fileName": "6.jpg",
	"title": "FANTASTIC BABY",
	"desc": "BIG BANG"
}, {
	"fileName": "7.jpg",
	"title": "NO NO NO",
	"desc": "A-PINK"
}, {
	"fileName": "8.jpg",
	"title": "ROLY POLY",
	"desc": "TARA"
}, {
	"fileName": "9.jpg",
	"title": "Heaven",
	"desc": "INFINITE"
}, {
	"fileName": "10.jpg",
	"title": "DIOR",
	"desc": "Here"
}, {
	"fileName": "11.jpg",
	"title": "YSL",
	"desc": "IT MEAS YISILAN HAHA"
}, {
	"fileName": "12.jpg",
	"title": "FENDY",
	"desc": "TOO MUCH PEOPLE"
}, {
	"fileName": "13.jpg",
	"title": "GUCCI",
	"desc": "WE ARE YOUNG"
}];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1.jpg": 6,
	"./10.jpg": 7,
	"./11.jpg": 8,
	"./12.jpg": 9,
	"./13.jpg": 10,
	"./2.jpg": 11,
	"./3.jpg": 12,
	"./4.jpg": 13,
	"./5.jpg": 14,
	"./6.jpg": 15,
	"./7.jpg": 16,
	"./8.jpg": 17,
	"./9.jpg": 18
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 5;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7f0c7051efde3c46ab32f2da47bdf57e.jpg";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "df808fd2f8aca3a6f43a34808dac86d0.jpg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c862872e3810915daa764fc272af5ef1.jpg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6b15e6f529b8bd8c772898514de878db.jpg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "895bbb6e208ec4e1de69184c9cddb1a7.jpg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ea0244ecb18d46b3e55acc12f4adcd30.jpg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "df8a2fe4e260732b3659165f5a5c1e8d.jpg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b433ff90eecbfeba4e7519faaa0538a6.jpg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4565fe75d506e551058123e53877512b.jpg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "29c5933bae62621489629506c5bd32b0.jpg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ac50dcc27211020fab40e1b3b515fe1d.jpg";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0f2a9f355f49ec16b2bb1c65933732db.jpg";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "46f21889ea15efe270447095f3e11008.jpg";

/***/ })
/******/ ]);