/**
 * Created by tangyao-pc on 2017/6/23.
 */

require('./../assets/css/index.css');

import React from 'react'
import ReactDOM from 'react-dom'



//获取图片相关的数据
var imageDatas = require("./imageDatas.json");
//将图片名信息转化成图片URL路径信息
imageDatas = (function (imageDatasArr) {

    for(var i = 0,j =  imageDatasArr.length;i<j;i++){

        var singleImageData = imageDatasArr[i];



        singleImageData.imageURL = "./assets/images/"+ singleImageData.fileName;

        // window.console.log(singleImageData);

        imageDatasArr[i] = singleImageData;
    }

    return imageDatasArr;
})(imageDatas);


//获取区间内的一个随机值

function  getRangeRandom(low,high) {

    return Math.floor(Math.random()*(high- low)+low);

}

//产生随机正负30度的旋转角度
function get30DegRandom() {

    return ((Math.random()>0.5?'':'-')+Math.floor(Math.random()*35));

}



var ImgFigure = React.createClass({

    //imgFigure的点击处理函数

    handleClick:function (e) {

        if(this.props.arrange.isCenter){
            this.props.inverse();
        }else {
            this.props.center();
        }


        // alert("hello");


        e.stopPropagation();

        e.preventDefault();

    },

    render:function () {

        var styleObj = {};

        //如果props属性中指定了这张图片的位置，则使用

        if(this.props.arrange.pos){

            styleObj = this.props.arrange.pos;
        }

        //如果图片的旋转角度有值并且不为0，则添加这个旋转角度

        if(this.props.arrange.rotate){

            (['MozTransform','msTransform','WebkitTransform','transform']).forEach(function (value,index) {

                styleObj[value] = 'rotate(' + this.props.arrange.rotate +'deg)';

            }.bind(this));
        }

        if(this.props.arrange.isCenter){

            styleObj.zIndex = 11;
        }

        var imgFigureClassName = "img-figure";

        imgFigureClassName += this.props.arrange.isInverse?' is-inverse':'';

        window.console.log(imgFigureClassName);


        return(

            <figure className={imgFigureClassName} style={styleObj} onClick={this.handleClick}>

                <img src = {this.props.data.imageURL} alt="loading problems..."/>

                <figcaption>

                    <h2 className="img-title">{this.props.data.title}</h2>

                    <div className="img-back" onClick={this.handleClick}>

                        <p style={{color:'gray'}}>
                            {this.props.data.desc}
                        </p>

                    </div>


                </figcaption>

            </figure>

        );
    }

});



//添加控制组件子组件
var ControllerUnit = React.createClass({

    handleClick:function (e) {

        if(this.props.arrange.isCenter){

            this.props.inverse();
        }else{

            this.props.center();
        }

        e.preventDefault();
        e.stopPropagation();
    },

   render:function () {

        var controllerUnitClassName = "controller-unit";

        if(this.props.arrange.isCenter){

            controllerUnitClassName += " is-center";

        }


       return(

           <span className={controllerUnitClassName} onClick={this.handleClick}></span>


       );
   }

});



var GalleryByReactApp = React.createClass({

    Constant:{

        centerPos:{
            left:0,
            top:0
        },

        hPosRange:{//水平方向的取值范围
            leftSecX:[0,0],
            rightSecX:[0,0],
            y:[0,0]
        },
        vPosRange:{//垂直方向的取值范围

            x:[0,0],
            topY:[0,0]
        }

    },

    //利用闭包，选择要居中的图片
    center:function (index) {
        return function () {
            this.rearrange(index);
        }.bind(this);
    },



    getInitialState:function () {
        return{
            imgsArrangeArr:[
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

    inverse:function (index) {

        return function () {
            var imgsArrageArr = this.state.imgsArrangeArr;
            imgsArrageArr[index].isInverse = !imgsArrageArr[index].isInverse;

            //触发视图的重新渲染
            this.setState({

                imgsArrangeArr:imgsArrageArr
            });

        }.bind(this);


    },

     /*
    *重新布局所有图片
    *
    */
    rearrange:function (centerIndex) {

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
            topImgNum = Math.floor(Math.random()*2),
            topImgSpliceIndex = 0,

            imgsArrangeCenterArr = imgsArrangeArr.splice(centerIndex ,1);

        //首先居中centerIndex的图片,居中的图片不旋转，并标记其为居中的图片
        imgsArrangeCenterArr[0]= {

            pos:centerPos,
            rotate:0,
            isCenter:true
        };



        //取出要布局上侧图片的状态信息

        topImgSpliceIndex = Math.floor(Math.random()*(imgsArrangeArr.length - topImgNum));

        imgsArrangeTopArr = imgsArrangeArr.splice(topImgSpliceIndex,topImgNum);

        //布局位于上侧的图片

        imgsArrangeTopArr.forEach(function (value,index) {

            imgsArrangeTopArr[index]= {
                pos:{
                    top:getRangeRandom(vPosRangeTopY[0],vPosRangeTopY[1]),

                    left:getRangeRandom(vPostRangeX[0],vPostRangeX[1])
                },
                rotate:get30DegRandom(),
                isCenter:false
            }

        });

        window.console.log(imgsArrangeTopArr);


        //布局两侧图片的状态信息
        for(var i=0 ,j = imgsArrangeArr.length,k =j/2;i<j;i++){

            var hPosRangeLORX = null;
            //前半部分布局左边，右半部分布局右边

            if(i<k){
                hPosRangeLORX = hPosRangeLeftSecX;
            }else {

                hPosRangeLORX = hPosRangeRightSecX;
            }
            imgsArrangeArr[i] = {
                pos:{
                    top:getRangeRandom(hPosRangeY[0],hPosRangeY[1]),
                    left:getRangeRandom(hPosRangeLORX[0],hPosRangeLORX[1])
                },
                rotate:get30DegRandom(),
                isCenter:false
            }

        }

        // alert(topImgSpliceIndex);
        imgsArrangeTopArr.forEach(function (value,index) {
            imgsArrangeArr.splice(topImgSpliceIndex,0,imgsArrangeTopArr[index]);
        });

        //让第centerIndex张图片居中显示
        imgsArrangeArr.splice(centerIndex,0,imgsArrangeCenterArr[0]);
        window.console.log(imgsArrangeArr);

        this.setState({

            imgsArrangeArr:imgsArrangeArr
        });
    },


    //组件加载完毕后，为每张图片计算其位置的范围
    componentDidMount:function () {

        //实现拿到舞台大小
        var stageDOM = ReactDOM.findDOMNode(this.refs.stage),
             stageW = stageDOM.scrollWidth,
             stageH = stageDOM.scrollHeight,
             halfStageW = Math.floor(stageW/2),
             halfStageH  = Math.floor(stageH/2);

        //拿到一个imageFigure的大小
        var imgFigureDOM = ReactDOM.findDOMNode(this.refs.imgFigure0),
            imgW = imgFigureDOM.scrollWidth,
            imgH = imgFigureDOM.scrollHeight,
            halfImgW = Math.floor(imgW/2),
            halfImgH = Math.floor(imgH/2);

        //计算中心图片的未知点
        this.Constant.centerPos ={
            left:halfStageW - halfImgW,
            top:halfStageH - halfImgH
        };

        //计算左侧，右侧区域图片排布位置的取值范围
        this.Constant.hPosRange.leftSecX[0] = -halfImgW;
        this.Constant.hPosRange.leftSecX[1] = halfStageW - halfImgW*3;
        this.Constant.hPosRange.rightSecX[0] = halfStageW+halfImgW;
        this.Constant.hPosRange.rightSecX[1] = stageW - halfImgW;
        this.Constant.hPosRange.y[0] = -halfImgH;
        this.Constant.hPosRange.y[1] = stageH - halfImgH;

        //计算上侧区域图片排布位置的取值范围
        this.Constant.vPosRange.topY[0] = -halfImgH;
        this.Constant.vPosRange.topY[1] = halfStageH - halfImgH*3;
        this.Constant.vPosRange.x[0] = halfStageW-imgW;
        this.Constant.vPosRange.x[1] = halfStageW;


        //让第一张图片居中，并对所有图片进行排版
        this.rearrange(5);



    },



    render:function () {

        var controllerUnits = [],
            imgFigures = [];

        //index为数组下标的索引
        imageDatas.forEach(function (value,index) {

            if(!this.state.imgsArrangeArr[index]){

                window.console.log("设置出错");

                this.state.imgsArrangeArr[index] = {

                    pos:{
                        left:0,
                        top:0
                    },

                    rotate:0,
                    isInverse : false,  //默认正面的
                    isCenter:false

                }
            }


            //图片标签与数组联系起来
            imgFigures.push(<ImgFigure data = {value} ref = {'imgFigure'+index}
                 arrange = {this.state.imgsArrangeArr[index]}  inverse = {this.inverse(index)}
              center = {this.center(index)}/>);

            controllerUnits.push(<ControllerUnit arrange = {this.state.imgsArrangeArr[index]}
                                                 inverse = {this.inverse(index)}
                                                 center = {this.center(index)} />);

        }.bind(this));


        return(

            <section className="stage" ref="stage">

                <section className="img-sec">

                    {imgFigures}

                </section>

                <nav className="controller-nav">

                    {controllerUnits}

                </nav>


            </section>

        );
    }

});


ReactDOM.render(
    <GalleryByReactApp/>,

    document.getElementById("content")

);

module.exports = GalleryByReactApp;