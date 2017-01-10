var config = require('../config')
var webpack = require('webpack')

//webpack合并工具模块.
var merge = require('webpack-merge')

//使用工具.
var utils = require('./utils')

//导入webpack基础配置.
var baseWebpackConfig = require('./webpack.base.conf')

//这个插件用来简化创建服务于 webpack bundle 的 HTML 文件,尤其是对于在文件名中包含了 hash 值，而这个值在每次编译的时候都发生变化的情况.你既可以让这个插件来帮助你自动生成 HTML 文件，也可以使用 lodash 模板加载生成的 bundles，或者自己加载这些 bundles。
var HtmlWebpackPlugin = require('html-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

//合并基础webpack和开发环境的webpack配置.
module.exports = merge(baseWebpackConfig, {
    //配置项目中不同类型的模块如何处理.
    module: {
        loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
    },
    //eval-source-map is faster for development
    devtool: '#eval-source-map',
    //插件配置.
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
})
