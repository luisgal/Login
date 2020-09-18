const path = require('path');
const prod = require('./webpack.prod');
const { merge } = require('webpack-merge');

const config = merge(prod, {
    output: {
        filename: 'views/js/[name].[contentHash].bundle.js',
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8081
    },

})

module.exports = config;