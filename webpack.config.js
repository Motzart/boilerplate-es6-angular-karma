'use strict';
const appConfig = require('./config');

const path = require('path'),
    webpack = require('webpack'),
    autoprefixer = require('autoprefixer'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
    entry: [
        './src/main.js'
    ],
    resolve: {
        root: [
            __dirname
        ]
    },
    output: {
        path: path.join(__dirname, '/build/'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015', 'stage-0'] }},
            {test: /\.jade$/, loader: 'jade-loader'},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('css!postcss')},
            {test: /\.scss$/, loader:  ExtractTextPlugin.extract('style', 'css!postcss!sass')}
            // TODO add file loader when working with layout
            // {test: /\.(png|jpg|svg|ttf|eot|woff||woff2)$/, loader:  'file?name=[path]'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ filename: 'index.html', template: path.resolve(__dirname, 'src', 'index.jade') }),
        new ExtractTextPlugin('styles.css', {allChunks: true, disable: appConfig.env === 'dev'}),
        new webpack.optimize.CommonsChunkPlugin({ name: 'common' })
    ],
    postcss: [
        autoprefixer()
    ]

    //TODO add uglify option for prod builds
};

appConfig.setEnvConfigurations(webpackConfig);

module.exports = webpackConfig;