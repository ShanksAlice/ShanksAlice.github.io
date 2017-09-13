// import express from 'express';
// import webpack from 'webpack';
// import webpackConfig from '../webpack/webpack.config.dev-client';

var babel = require('babel-register');
var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('../webpack/webpack.config.dev-client');
var path = require('path');
var fs = require('fs');

var configFilePath = path.join(__dirname, 'config.json');
var fileExists = fs.existsSync(configFilePath);
var config = {
    port: 3100,
    routes: [
        '/', '/home', '/about', '/feature', '/join', '/jobDetail',
        '/library', '/form', '/updateInfo', '/partner', '/formSubmitted'
    ]
};

if (!fileExists) {
    console.log('找不到配置文件 ' + configFilePath + ', 使用默认值');
} else {
    var configFile = require(configFilePath);
    config.port = configFile.port || config.port;
    config.routes = configFile.routes || config.routes;
}


var routes = require('./routes');

var bodyParser = require('body-parser');


var render = require('../dist/assets/SSR');
var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
}));

var validRoutes = config.routes;
app.get('/*', function (req, res) {
    var url = req.originalUrl.split(/(\?|#)/)[0];
    if (validRoutes.includes(url)) {
        req.url = url;
        render.default(req, res);
    } else {
        req.next();
    }
});

app.get('/assets/logo.jpg', function (req, res) {
    res.sendFile(path.join(__dirname, '/../src/assets/logo.jpg'));
});

app.get('/style/*', express.static(path.resolve(path.join(__dirname, '/../src/'))));
app.get('/pdf/*', express.static(path.resolve(path.join(__dirname, '/../src/'))));

routes(app);

app.get('*', function (req, res) {
    res.sendFile(path.resolve(path.join(__dirname, './404.html')));
});


var port = config.port;
app.listen(port);
console.log(`Listening on port ${port}`);