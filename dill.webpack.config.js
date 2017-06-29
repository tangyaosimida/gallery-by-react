/**
 * Created by tangyao-pc on 2017/6/15.
 */
const webpack = require('webpack');

module.exports = {
    entry: {
        vendor: ['react', 'react-dom', 'react-router']
    },
    output: {
        path: __dirname+'/dist/',
        filename: 'js/[name].js',
        library: '[name]'               // 必填项，将此dll包暴露到window上，给app.js调用
    },
    plugins: [
        new webpack.DllPlugin({
            context: __dirname,                // 必填项，用来标志manifest中的路径
            path: './config/manifest.json',    // 必填项，存放manifest的路径
            name: '[name]'                     // 必填项，manifest的name
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};