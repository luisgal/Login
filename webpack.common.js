const path = require('path');
const common = require('./webpack.common');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HWP_1 = new HtmlWebpackPlugin({
    template: './src/html/login.html',
    filename: 'html/login.html'
});

const config = {
    mode: 'development',
    entry: {
        main: './src/js/index'
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        HWP_1
    ]
};

module.exports = config;