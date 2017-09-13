/**
 * Created by huangling on 14/05/2017.
 */
// nodejs 中的path模块
var path = require('path');
var webpack = require('webpack');
// 引入基本配置
var config = require('./webpack.config');

config.output.publicPath = '/';
config.output.filename = '[name].[hash].js';

config.devtool = 'inline-source-map';

config.devServer = {
    hot: true,
    // enable HMR on the server

    contentBase: path.resolve(__dirname, '../dist'),
    // match the output path

    publicPath: '/'
    // match the output `publicPath`
};

config.plugins = config.plugins.concat([
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
]);


// 动态向入口配置中注入 webpack-hot-middleware/client
// var devClient = './build/dev-client';
// Object.keys(config.entry).forEach(function (name, i) {
//     var extras = [devClient];
//     config.entry[name] = extras.concat(config.entry[name])
// });

module.exports = config;