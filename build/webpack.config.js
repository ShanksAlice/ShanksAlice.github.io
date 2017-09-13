var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // context: path.resolve(__dirname, '../src/js'),
    // entry: ['./client.js'],
    entry: [
        'react-hot-loader/patch',
        // activate HMR for React

        'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates


        path.resolve(__dirname, '../app/client.js')
    ],

    // entry: {
    //     home: "./home.js",
    //     about: "./about.js",
    //     contact: "./contact.js"
    // },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: './',
        filename: '[name].[chunkhash].js',
        chunkFilename: '[id].[chunkhash].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            // {
            //     test.pdf: /\.css$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: "style-loader",
            //         use: "css-loader"
            //     })
            // },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?module&localIdentName=[name]__[local]___[hash:base64:5]',
                ],
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader",
            },
            // {
            //     test.pdf: /\.(png|svg|jpg|gif)$/,
            //     use: [
            //         'file-loader'
            //     ]
            // },
            {test: /\.(png|jpg)$/, loader: 'url-loader'}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                // this assumes your vendor imports exist in the node_modules directory
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: path.resolve(__dirname, '../src/index.html'),
            inject: true
        }),
        new ExtractTextPlugin("styles.css"),
    ]
};

if (process.env.NODE_ENV === 'production') {
    module.exports.entry = path.resolve(__dirname, '../src/js/client.js');
    module.exports.devtool = '#source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
