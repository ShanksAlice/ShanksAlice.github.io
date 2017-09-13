/**
 * Created by huangling on 16/5/2017.
 */
const { publicPath, assetsPath, commonLoaders } = require('./common.config.js');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    name: 'SSR',
    context: path.join(__dirname, '..', 'app'),
    entry: './SSR.js',
    output: {
        path: assetsPath,
        filename: 'SSR.js',
        libraryTarget: 'commonjs2',
        publicPath,
    },
    target: 'node',
    externals: nodeExternals(),
    module: {
        loaders: commonLoaders.concat([
            {
                test: /\.css$/,
                loader: 'css-loader/locals?module&localIdentName=[name]__[local]___[hash:base64:5]'
            }
        ]),
    },
};