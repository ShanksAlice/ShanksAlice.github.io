/**
 * Created by huangling on 16/5/2017.
 */

const path = require('path');

module.exports = {
    publicPath: '/assets/',  // correspond to the template script bundle.js
    assetsPath: path.join(__dirname, '..', 'dist', 'assets'),
    commonLoaders: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            // include: path.join(__dirname, '..', 'app'),
            exclude: path.join(__dirname, '..', 'node_modules'),
        },
    ],
};