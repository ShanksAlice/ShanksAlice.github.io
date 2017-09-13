/**
 * Created by huangling on 16/5/2017.
 */

const {publicPath, assetsPath, commonLoaders} = require('./common.config.js');
const webpack = require('webpack');
const path = require('path');
require("babel-polyfill");

module.exports = {
    // devtool: 'inline-source-map',
    name: 'client',
    context: path.join(__dirname, '..', 'app'),
    entry: ["babel-polyfill", './client.js'],
    output: {
        path: assetsPath,
        publicPath,
        filename: 'bundle.js',
    },
    module: {
        loaders: commonLoaders.concat([
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?module&localIdentName=[name]__[local]___[hash:base64:5]',
                ],
            }
        ]),
    },
};