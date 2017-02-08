var webpack = require("webpack"),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    pxtorem = require('postcss-pxtorem'),
    autoprefixer = require('autoprefixer');

//px转rem的配置，37.5是以iphone6为基准的，具体看设计图
//响应式设计中 mediaQuery要设为true，不然把mediaQuery的px值也转为rem单位，会导致宽度查询失效
var pxtoremOpts = {
    rootValue: 37.5,
    unitPrecision: 5,
    propWhiteList: [],
    selectorBlackList: [],
    replace: true,
    mediaQuery: true,
    minPixelValue: 2
};

var src = path.resolve(__dirname, './src'); // 源码目录

var mockport, hashType, devtool;

var isProductEnv = process.env.NODE_ENV === 'production';
//default to dev environment
function env(dev, product) {
    if (!product) {
        product = dev;
    }
    return isProductEnv ? product : dev;
}
//开发环境和上线环境需要区分
if (process.env.NODE_ENV === 'production') {
    //上线环境
    // 配置2：hasType
    // 在上线环境使用chunkhash
    hashType = 'chunkhash';
    // 配置3：devtool
    // 在上线环境中，devtool为空值
    devtool = '';
} else { //其他都是开发环境

    //配置1：mockport
    //bizdp在启动webpack-dev-server时会默认把bizmock监听的随机端口号从命令行中传递过来
    //eg:webpack-dev-server --mockport 8888
    process.argv.forEach(function(val, index) {
        if (val === '--mockport') {
            mockport = process.argv[index + 1];
            return false;
        }
    });

    //配置2：hasType
    // 在开发环境中要使用hash代替chunkhash
    // webpack-dev-server不支持chunkhash
    hashType = 'hash';
    // 配置3：devtool
    // 在上线环境中，devtool为source-map
    devtool = 'source-map';
}

var config = {
    entry: {
        app: "./index.js",
        vendor: [
            '@bizfe/biz-fetch',
            'react',
            'react-dom',
            'react-router',
            'echarts/lib/echarts'
        ],

    },
    output: {
        path: 'dist',
        filename: env('[name].js','[name].[' + hashType + '].js'),
        publicPath: '/dist/',
        chunkFilename: env('[name].js','[name].[' + hashType + '].js')
    },
    resolve: {
        modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
        extensions: ['', '.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json'],
    },



    module: {
        loaders: [
        {
            test: /\.(less)$/i,
            loader: ExtractTextPlugin.extract("css?-autoprefixer!postcss!less")
        }, {
            test: /\.(css)$/i,
            loader: ExtractTextPlugin.extract('css?-autoprefixer!postcss')

        }, {
            //eot文件等后面会加上?v=4.0.0导致loader匹配不上，所以后面再加上正则匹配
            test: /\.(jpg|png|jpg|png|woff|woff2|eot|ttf|svg|gif)([\?]?.*)$/,
            loader: "url?name=[name].[ext]"
        }, {
            test: /\.(js|jsx)$/i,
            exclude: /node_modules/,
            loader: 'babel',
        }]
    },
        //postcss引用的库
    postcss: function() {
        return [require('postcss-flexboxfixer'), autoprefixer({browsers: ['iOS >= 8', 'Android >= 4.1']}),  pxtorem(pxtoremOpts)];
    },
    plugins: [
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /^\.\/zh\-cn$/),
        // //生成vendor chunk，抽取第三方模块单独打包成独立的chunk
        // new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.[hash].js'),
        // //抽取webpack loader公共部分的代码到manifest.js中，避免每次打包时hash发生变化
        // new webpack.optimize.CommonsChunkPlugin({
        //     names: ['vendor', 'manifest']
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: env('vendor.js', 'vendor.[' + hashType + '].js'),
            chunks: ['app', 'vendor']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            filename: env('manifest.js', 'manifest.[' + hashType + '].js'), //仅包含webpack运行时环境和映射表
            chunks: ['vendor']
        }),

        new ExtractTextPlugin(env('[name].css', '[name].[' + hashType + '].css'), {
            allChunks: false
        }),
        //传入process.env.NODE_ENV参数，以供代码配置使用
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isProductEnv ? '"production"' : '"dev"'
             }
        })
    ],
    devServer: {
        proxy: {
            '*.action': {
                target: 'http://localhost:' + mockport,
                bypass: function(req, res, proxyOptions) {
                    //处理jsp页面默认的action
                    if (req.headers.accept.indexOf('html') != -1) {
                        return 'app.html';
                    }
                }
            },
        }
    },
    devtool: devtool
};

if (process.env.NODE_ENV === 'production') {

    config.plugins.push(
        new HtmlWebpackPlugin({
            template: './appBuild.html',
            filename: 'index.html',
            inject: true,
            chunks: ['app', 'vendor', 'manifest']
        })
    );
    //只有线上环境和qa环境在build的时候才需要压缩
    //devserver不能压缩，因为如果压缩，内存打包非常慢
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: false,
        sourceMap: false
    }))
}

module.exports = config;
