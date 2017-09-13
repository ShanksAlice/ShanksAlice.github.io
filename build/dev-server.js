/**
 * Created by huangling on 14/05/2017.
 */
// 引入必要的模块
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.dev.config');
var path = require('path');
var fs = require('fs');
var db = require('../server/db');

var bodyParser = require('body-parser');

// 创建一个express实例
var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// 调用webpack并把配置传递过去
var compiler = webpack(config);

// 使用 webpack-dev-middleware 中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
});

// // 使用 webpack-hot-middleware 中间件
// var hotMiddleware = require('webpack-hot-middleware')(compiler);
//
// // webpack插件，监听html文件改变事件
// compiler.plugin('compilation', function (compilation) {
//     compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
//         // 发布事件
//         hotMiddleware.publish({ action: 'reload' });
//         cb()
//     })
// });

// 注册中间件
app.use(devMiddleware);
// 注册中间件
// app.use(hotMiddleware);

app.get('/assets/*', function(req, res) {
    res.sendFile(path.resolve(path.join(__dirname, '/../src/' + req.originalUrl)));
});

app.get('/style/fonts/*', function(req, res) {
    var url = req.originalUrl.split('?')[0];
    res.sendFile(path.resolve(path.join(__dirname, '/../src/' + url)));
});

app.get('/style/*', function(req, res) {
    res.sendFile(path.resolve(path.join(__dirname, '/../src/' + req.originalUrl)));
});

app.post('/db/add', function (req, res) {
    db.insertDocuments([req.body], function () {
        console.log('erwrwr');
        res.end();
    })
});

app.get('/db/get', function (req, res) {
    db.findDocuments({}, function (docs) {
        res.send(docs);
    })
});

app.get('*', function (req, res) {
    res.sendFile(path.resolve(path.join(__dirname, '/../src/404.html')));
});

// 监听 8888端口，开启服务器
app.listen(8080, function (err) {
    if (err) {
        console.log(err);
        return
    }
    console.log('Listening at http://localhost:8080')
});