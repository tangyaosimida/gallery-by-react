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

/**
 * Created by tangyao-pc on 2017/6/23.
 */

__webpack_require__(4);

//获取图片相关的数据
var imageDatas = __webpack_require__(9);
//将图片名信息转化成图片URL路径信息
imageDatas = function (imageDatasArr) {

        for (var i = 0, j = imageDatasArr.length; i < j; i++) {

                var singleImageData = imageDatasArr[i];

                singleImageData.imageURL = "./assets/images/" + singleImageData.fileName;

                // window.console.log(singleImageData);

                imageDatasArr[i] = singleImageData;
        }

        return imageDatasArr;
}(imageDatas);

//获取区间内的一个随机值

function getRangeRandom(low, high) {

        return Math.floor(Math.random() * (high - low) + low);
}

//产生随机正负30度的旋转角度
function get30DegRandom() {

        return (Math.random() > 0.5 ? '' : '-') + Math.floor(Math.random() * 35);
}

var ImgFigure = _react2.default.createClass({
        displayName: 'ImgFigure',


        //imgFigure的点击处理函数

        handleClick: function handleClick(e) {

                if (this.props.arrange.isCenter) {
                        this.props.inverse();
                } else {
                        this.props.center();
                }

                // alert("hello");


                e.stopPropagation();

                e.preventDefault();
        },

        render: function render() {

                var styleObj = {};

                //如果props属性中指定了这张图片的位置，则使用

                if (this.props.arrange.pos) {

                        styleObj = this.props.arrange.pos;
                }

                //如果图片的旋转角度有值并且不为0，则添加这个旋转角度

                if (this.props.arrange.rotate) {

                        ['MozTransform', 'msTransform', 'WebkitTransform', 'transform'].forEach(function (value, index) {

                                styleObj[value] = 'rotate(' + this.props.arrange.rotate + 'deg)';
                        }.bind(this));
                }

                if (this.props.arrange.isCenter) {

                        styleObj.zIndex = 11;
                }

                var imgFigureClassName = "img-figure";

                imgFigureClassName += this.props.arrange.isInverse ? ' is-inverse' : '';

                window.console.log(imgFigureClassName);

                return _react2.default.createElement(
                        'figure',
                        { className: imgFigureClassName, style: styleObj, onClick: this.handleClick },
                        _react2.default.createElement('img', { src: this.props.data.imageURL, alt: 'loading problems...' }),
                        _react2.default.createElement(
                                'figcaption',
                                null,
                                _react2.default.createElement(
                                        'h2',
                                        { className: 'img-title' },
                                        this.props.data.title
                                ),
                                _react2.default.createElement(
                                        'div',
                                        { className: 'img-back', onClick: this.handleClick },
                                        _react2.default.createElement(
                                                'p',
                                                { style: { color: 'gray' } },
                                                this.props.data.desc
                                        )
                                )
                        )
                );
        }

});

//添加控制组件子组件
var ControllerUnit = _react2.default.createClass({
        displayName: 'ControllerUnit',


        handleClick: function handleClick(e) {

                if (this.props.arrange.isCenter) {

                        this.props.inverse();
                } else {

                        this.props.center();
                }

                e.preventDefault();
                e.stopPropagation();
        },

        render: function render() {

                var controllerUnitClassName = "controller-unit";

                if (this.props.arrange.isCenter) {

                        controllerUnitClassName += " is-center";
                }

                return _react2.default.createElement('span', { className: controllerUnitClassName, onClick: this.handleClick });
        }

});

var GalleryByReactApp = _react2.default.createClass({
        displayName: 'GalleryByReactApp',


        Constant: {

                centerPos: {
                        left: 0,
                        top: 0
                },

                hPosRange: { //水平方向的取值范围
                        leftSecX: [0, 0],
                        rightSecX: [0, 0],
                        y: [0, 0]
                },
                vPosRange: { //垂直方向的取值范围

                        x: [0, 0],
                        topY: [0, 0]
                }

        },

        //利用闭包，选择要居中的图片
        center: function center(index) {
                return function () {
                        this.rearrange(index);
                }.bind(this);
        },

        getInitialState: function getInitialState() {
                return {
                        imgsArrangeArr: [
                                /* {
                                 pos:{    //绝对定位位置信息
                                 left:'0',
                                 top:'0'
                                 },
                                 rotate:0 , //旋转角度
                                 isInverse : false // 表示图片的正反面
                                 isCenter:false
                                 }
                                 */
                        ]
                };
        },

        /*
        *翻转图片@param index 输入当前被执行翻转操作的图片对应的图片信息数组得index值
        * return一个闭包函数，其内是一个真正待执行的函数
            */

        inverse: function inverse(index) {

                return function () {
                        var imgsArrageArr = this.state.imgsArrangeArr;
                        imgsArrageArr[index].isInverse = !imgsArrageArr[index].isInverse;

                        //触发视图的重新渲染
                        this.setState({

                                imgsArrangeArr: imgsArrageArr
                        });
                }.bind(this);
        },

        /*
        *重新布局所有图片
        *
        */
        rearrange: function rearrange(centerIndex) {

                var imgsArrangeArr = this.state.imgsArrangeArr,
                    Contant = this.Constant,
                    centerPos = Contant.centerPos,
                    hPosRange = Contant.hPosRange,
                    vPosRange = Contant.vPosRange,
                    hPosRangeLeftSecX = hPosRange.leftSecX,
                    hPosRangeRightSecX = hPosRange.rightSecX,
                    hPosRangeY = hPosRange.y,

                //上侧区域图片y的取值范围与x的取值范围
                vPosRangeTopY = vPosRange.topY,
                    vPostRangeX = vPosRange.x,
                    imgsArrangeTopArr = [],

                //放一张或者两张图片
                topImgNum = Math.floor(Math.random() * 2),
                    topImgSpliceIndex = 0,
                    imgsArrangeCenterArr = imgsArrangeArr.splice(centerIndex, 1);

                //首先居中centerIndex的图片,居中的图片不旋转，并标记其为居中的图片
                imgsArrangeCenterArr[0] = {

                        pos: centerPos,
                        rotate: 0,
                        isCenter: true
                };

                //取出要布局上侧图片的状态信息

                topImgSpliceIndex = Math.floor(Math.random() * (imgsArrangeArr.length - topImgNum));

                imgsArrangeTopArr = imgsArrangeArr.splice(topImgSpliceIndex, topImgNum);

                //布局位于上侧的图片

                imgsArrangeTopArr.forEach(function (value, index) {

                        imgsArrangeTopArr[index] = {
                                pos: {
                                        top: getRangeRandom(vPosRangeTopY[0], vPosRangeTopY[1]),

                                        left: getRangeRandom(vPostRangeX[0], vPostRangeX[1])
                                },
                                rotate: get30DegRandom(),
                                isCenter: false
                        };
                });

                window.console.log(imgsArrangeTopArr);

                //布局两侧图片的状态信息
                for (var i = 0, j = imgsArrangeArr.length, k = j / 2; i < j; i++) {

                        var hPosRangeLORX = null;
                        //前半部分布局左边，右半部分布局右边

                        if (i < k) {
                                hPosRangeLORX = hPosRangeLeftSecX;
                        } else {

                                hPosRangeLORX = hPosRangeRightSecX;
                        }
                        imgsArrangeArr[i] = {
                                pos: {
                                        top: getRangeRandom(hPosRangeY[0], hPosRangeY[1]),
                                        left: getRangeRandom(hPosRangeLORX[0], hPosRangeLORX[1])
                                },
                                rotate: get30DegRandom(),
                                isCenter: false
                        };
                }

                // alert(topImgSpliceIndex);
                imgsArrangeTopArr.forEach(function (value, index) {
                        imgsArrangeArr.splice(topImgSpliceIndex, 0, imgsArrangeTopArr[index]);
                });

                //让第centerIndex张图片居中显示
                imgsArrangeArr.splice(centerIndex, 0, imgsArrangeCenterArr[0]);
                window.console.log(imgsArrangeArr);

                this.setState({

                        imgsArrangeArr: imgsArrangeArr
                });
        },

        //组件加载完毕后，为每张图片计算其位置的范围
        componentDidMount: function componentDidMount() {

                //实现拿到舞台大小
                var stageDOM = _reactDom2.default.findDOMNode(this.refs.stage),
                    stageW = stageDOM.scrollWidth,
                    stageH = stageDOM.scrollHeight,
                    halfStageW = Math.floor(stageW / 2),
                    halfStageH = Math.floor(stageH / 2);

                //拿到一个imageFigure的大小
                var imgFigureDOM = _reactDom2.default.findDOMNode(this.refs.imgFigure0),
                    imgW = imgFigureDOM.scrollWidth,
                    imgH = imgFigureDOM.scrollHeight,
                    halfImgW = Math.floor(imgW / 2),
                    halfImgH = Math.floor(imgH / 2);

                //计算中心图片的未知点
                this.Constant.centerPos = {
                        left: halfStageW - halfImgW,
                        top: halfStageH - halfImgH
                };

                //计算左侧，右侧区域图片排布位置的取值范围
                this.Constant.hPosRange.leftSecX[0] = -halfImgW;
                this.Constant.hPosRange.leftSecX[1] = halfStageW - halfImgW * 3;
                this.Constant.hPosRange.rightSecX[0] = halfStageW + halfImgW;
                this.Constant.hPosRange.rightSecX[1] = stageW - halfImgW;
                this.Constant.hPosRange.y[0] = -halfImgH;
                this.Constant.hPosRange.y[1] = stageH - halfImgH;

                //计算上侧区域图片排布位置的取值范围
                this.Constant.vPosRange.topY[0] = -halfImgH;
                this.Constant.vPosRange.topY[1] = halfStageH - halfImgH * 3;
                this.Constant.vPosRange.x[0] = halfStageW - imgW;
                this.Constant.vPosRange.x[1] = halfStageW;

                //让第一张图片居中，并对所有图片进行排版
                this.rearrange(5);
        },

        render: function render() {

                var controllerUnits = [],
                    imgFigures = [];

                //index为数组下标的索引
                imageDatas.forEach(function (value, index) {

                        if (!this.state.imgsArrangeArr[index]) {

                                window.console.log("设置出错");

                                this.state.imgsArrangeArr[index] = {

                                        pos: {
                                                left: 0,
                                                top: 0
                                        },

                                        rotate: 0,
                                        isInverse: false, //默认正面的
                                        isCenter: false

                                };
                        }

                        //图片标签与数组联系起来
                        imgFigures.push(_react2.default.createElement(ImgFigure, { data: value, ref: 'imgFigure' + index,
                                arrange: this.state.imgsArrangeArr[index], inverse: this.inverse(index),
                                center: this.center(index) }));

                        controllerUnits.push(_react2.default.createElement(ControllerUnit, { arrange: this.state.imgsArrangeArr[index],
                                inverse: this.inverse(index),
                                center: this.center(index) }));
                }.bind(this));

                return _react2.default.createElement(
                        'section',
                        { className: 'stage', ref: 'stage' },
                        _react2.default.createElement(
                                'section',
                                { className: 'img-sec' },
                                imgFigures
                        ),
                        _react2.default.createElement(
                                'nav',
                                { className: 'controller-nav' },
                                controllerUnits
                        )
                );
        }

});

_reactDom2.default.render(_react2.default.createElement(GalleryByReactApp, null), document.getElementById("content"));

module.exports = GalleryByReactApp;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(7)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./index.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "\r\nhtml,body{\r\n    /*width: 100%;*/\r\n    /*height: 100%;*/\r\n    background-color: #222;\r\n    color: white;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.content{\r\n    width: 100%;\r\n    background-color: white;\r\n}\r\n\r\n/*stage -- start */\r\n.stage{\r\n\r\n    position:relative;\r\n\r\n    width: 100%;\r\n    height: 750px;\r\n\r\n\r\n}\r\n\r\n/*stage -- end */\r\n\r\n.img-sec{\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n    overflow:hidden;\r\n    background-color:#E8F2FC;\r\n\r\n    perspective: 1800px;\r\n\r\n}\r\n\r\n.img-figure{\r\n\r\n    position: absolute;\r\n\r\n    width: 300px;\r\n    height: 350px;\r\n    margin: 0;\r\n    padding: 30px;\r\n    box-sizing: border-box;\r\n    cursor: pointer;\r\n    background-color: #fff;\r\n\r\n    /*让子元素也有相同的3D转换，这一句十分重要，动画变换transition定义*/\r\n    transform-style: preserve-3d;\r\n\r\n    transition:transform .6s ease-in-out, left .6s ease-in-out, top .6s ease-in-out;\r\n\r\n    transform-origin:0 50% 0;\r\n\r\n    box-shadow: 2px 1px 10px pink;\r\n\r\n}\r\n\r\n\r\n\r\nfigcaption{\r\n\r\n    text-align: center;\r\n}\r\n\r\nfigcaption .img-title{\r\n\r\n    margin: 20px 0 0 0;\r\n    color:#a7a0a2 ;\r\n    font-size: 16px;\r\n}\r\n\r\n.is-inverse{\r\n\r\n\r\n    transform:translate(300px) rotateY(180deg);\r\n}\r\n\r\nfigcaption .img-back{\r\n\r\n    position: absolute;\r\n    left: 0;\r\n    top:0;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 20px;\r\n    overflow: auto;\r\n\r\n    background-color: #fff;\r\n\r\n    box-sizing: border-box;\r\n\r\n    /*默认翻转过去，并且翻转过去后的背面内容影藏掉,这两句十分重要*/\r\n    transform: rotateY(180deg);\r\n    backface-visibility: hidden;\r\n}\r\n\r\nimg{\r\n\r\n    width: 240px;\r\n    height: 240px;\r\n}\r\n\r\n\r\n.controller-nav{\r\n\r\n    position: absolute;\r\n    z-index: 101;\r\n    left: 0;\r\n    text-align: center;\r\n    width: 100%;\r\n    bottom: 30px;\r\n\r\n}\r\n\r\n\r\n\r\n.controller-unit{\r\n    display: inline-block;\r\n    width: 30px;\r\n    height: 30px;\r\n    margin: 0px 5px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n\r\n    vertical-align: middle;\r\n\r\n    background-color: #aaa;\r\n    border-radius: 50%;\r\n\r\n    transform: scale(.5);\r\n\r\n}\r\n\r\n.is-center{\r\n\r\n    background-color: red;\r\n    transform: scale(1);\r\n}", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(8);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [{
	"fileName": "1.jpg",
	"title": "@Beautiful dreams!",
	"desc": "happiness can be found even in the darkest of times. - albus dumbledore"
}, {
	"fileName": "2.jpg",
	"title": "Love is PAIN",
	"desc": "hand and catch you fell out of the tears, but not cut the fundus you"
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
	"desc": "first i need your hand ,then forever can begin"
}, {
	"fileName": "6.jpg",
	"title": "FANTASTIC BABY",
	"desc": "be happy. it’s one way of being wise.- sidonie gabrielle colette"
}, {
	"fileName": "7.jpg",
	"title": "NO NO NO",
	"desc": "A-PINK"
}, {
	"fileName": "8.jpg",
	"title": "i can put the  past you're so natural, i think i rea",
	"desc": "TARA"
}, {
	"fileName": "9.jpg",
	"title": "Heaven",
	"desc": "INFINITE"
}, {
	"fileName": "10.jpg",
	"title": "DIOR",
	"desc": "fading is true while flowering is past"
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
	"desc": "fake friends never betray in front of you. they always do it behind you. "
}, {
	"fileName": "14.jpg",
	"title": "love",
	"desc": "WE ARE YOUNG"
}, {
	"fileName": "15.jpg",
	"title": "loving you",
	"desc": "fallen into the trap,for you are too greedy,it's not because of others' cunning"
}, {
	"fileName": "16.jpg",
	"title": "happy hey",
	"desc": "follow your heart, but be quiet for a while first. learn to trust your heart."
}];

/***/ })
/******/ ]);