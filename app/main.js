/**
 * Created by tangyao-pc on 2017/6/22.
 */


import React from 'react'
import ReactDOM from 'react-dom'

var App = React.createClass({

    render:function () {

        return(
            <div>
                <h2>陌上花开，可缓缓归矣!</h2>
                <p>请叫我可爱多女士</p>
            </div>

        );

    }

});

ReactDOM.render(<App/>,document.getElementById('test'));