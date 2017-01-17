var path = require('path');
var config = require('../config');
var utils = require('./utils');
var projectRoot = path.resolve(__dirname, '../');

//当前线程环境变量.
var env = process.env.NODE_ENV;

// check env & config/index.js to decide whether to enable CSS source maps for the
// various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap);
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap);
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd;

module.exports = {
    //入口文件配置.
    entry: {
        app: ['babel-polyfill', './src/index.js']
    },
    //输出配置
    output: {
        path: config.build.assetsRoot, //文件输出地址.
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath, //公共路径.
        filename: '[name].[hash].js', //基于文件的md5生成Hash名称的script来防止缓存.
    },
    //这些选项改变模块如何解决.
    resolve: {
        //省略的扩展名.
        extensions: ['', '.js', '.vue', '.json'],
        fallback: [path.join(__dirname, '../node_modules')],
        //模块别名地址,方便后续直接引用别名，无须写长长的地址，注意如果后续不能识别该别名,需要先设置root.
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components')
        }
    },
    //与resolve相同，但只用于解决WebPACK的程序包加载.
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    //配置项目中不同类型的模块如何处理.
    module: {
        //加载前的处理(下面的配置是进行语法检查)
        preLoaders: [
            {
                test: /\.vue$/,
                loader: 'eslint',
                include: projectRoot,
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'eslint',
                include: projectRoot,
                exclude: /node_modules/
            }
        ],
        //加载配置.
        loaders: [
            //加载vue
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            //加载js
            {
                test: /\.js$/, //正则.
                loader: 'babel', 
                include: projectRoot,
                exclude: /node_modules/
            },
            //加载json
            {
                test: /\.json$/,
                loader: 'json'
            },
            //加载图片
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            //加载字体
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    //配置语法检查模块->ESLint是js中目前比较流行的插件化的静态代码检测工具.
    eslint: {
        formatter: require('eslint-friendly-formatter')
    },
    //vue配置.
    vue: {
        loaders: utils.cssLoaders({ sourceMap: useCssSourceMap }),
        postcss: [
            require('autoprefixer')({
                browsers: ['last 2 versions']
            })
        ]
    }
}
