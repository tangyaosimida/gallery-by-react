/**
 * Created by tangyao-pc on 2017/6/22.
 */


import React from 'react'
import ReactDOM from 'react-dom'

var HelloMessage = React.createClass({

    //初始化state的值
    getInitialState:function () {
        return {
            value:"Hello Runoob!"
        };
    },

    handleChange:function (event) {
        this.setState({value:event.target.value})
    },

    render:function () {

        window.console.log("渲染中");
        var value = this.state.value;
        return(
            <div>

                <img src={require('../assets/images/3.jpg')} alt="加载图片出错了"/>

                <input type="text" value={value} onChange={this.handleChange} />

                <h4>{value}</h4>
            </div>
        )
    },


    //状态监控
    componentWillMount:function () {
        window.console.log("将要插入");
    },
    componentDidMount:function () {
        window.console.log("已经插入");
    },

    componentWillUpdate:function () {
        window.console.log("将要更新");
    },
    componentDidUpdate:function () {
        window.console.log("已经更新");
    }


    });



ReactDOM.render(<HelloMessage/>,document.getElementById('test'));