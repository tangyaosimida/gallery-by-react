/**
 * Created by tangyao-pc on 2017/6/22.
 */
/**
 * Created by tangyao-pc on 2017/6/14.
 */
const webpack = require('webpack');
// var path = require('path');



module.exports = {

    //页面入口文件配置
    // entry:[
    //
    //     // 写在入口文件之前
    //     "webpack-dev-server/client?http://127.0.0.1:3000",
    //     "webpack/hot/only-dev-server",
    //
    //     //入口文件
    //     './app/main.js'
    // ],
    // output: {
    //     path: __dirname+'/build',
    //     filename: 'test.bundle.js'
    // },


    entry:{

        "gallery":'./app/GalleryByReactApp.js',
        "index":'./app/index.js'
    },
    output: {
        path: __dirname+'/build',
        filename: '[name].bundle.js'
    },

    //webpack配置最重要的部分loaders部分
    module: {
        loaders:[
            {
                //-loader可以省略，多个loader之间用！连接起来
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },

            //.js 文件使用 jsx-loader 来编译处理
            // {
            //     test: [/\.js$/, /\.jsx$/],
            //     exclude: '/node_modules/',
            //     loader: ['react-hot-loader', 'babel-loader?presets[]=react,presets[]=es2015']
            // },

            {
                test:/\.js|jsx$/,
                loader:'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                // exclude: /node_modules/
            },


            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            // 配置信息的参数“?limit=8192”表示将所有小于8kb的图片都转为base64形式
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test:/\.json$/,
                loader:'json-loader'
            }
        ]
    },
    //引入模块时自动补全操作，可省略.js等
    resolve: {
        extensions: ['.jsx', '.js', '.json', '.css']
    },
    //实时监听文件的变化，并打包处理
    watch: true,

    watchOptions: {

    },

    devServer: {
        hot:true,
        inline:true
    },

    //插件项
    plugins: [

        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./config/manifest.json'),
        }),

        //热启动插件
        // new webpack.HotModuleReplacementPlugin()
        // new webpack.DllReferencePlugin({
        //     context: __dirname,
        //     manifest: require('./config/manifest.json'),
        // }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })

    ]
}