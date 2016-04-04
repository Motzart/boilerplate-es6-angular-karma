var webpackConfig = require('./webpack.config');

module.exports = function (config) {
    config.set({

        basePath: '.',

        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        files: [
            {pattern: 'test-context.js', watched: false}
        ],

        exclude: [],

        preprocessors: {
            'test-context.js': ['webpack']
        },

        reporters: ['progress'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: false,

        webpack: webpackConfig,

        browsers: ['Chrome'],

        singleRun: true

    });
};