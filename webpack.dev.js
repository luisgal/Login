const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CWP_Config = new CleanWebpackPlugin();

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HWP_Config_Login = new HtmlWebpackPlugin({
    favicon: "./src/img/icons/favicon.ico",
    template: './src/html/login.html',
    filename: 'html/login.html',
    chunks: ['login']
});
const HWP_Config_Account = new HtmlWebpackPlugin({
    favicon: "./src/img/icons/favicon.ico",
    template: './src/html/createAccount.html',
    filename: 'html/createAccount.html',
    chunks: ['createAccount']
});

const MiniCSSWebpackPlugin = require('mini-css-extract-plugin');
const MCSSWP_Config = new MiniCSSWebpackPlugin({
    filename: "css/[name].css"
});

const config = merge(common, {
    mode: 'development',
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, "loginDev")
    },
    plugins: [
        MCSSWP_Config,
        HWP_Config_Login,
        HWP_Config_Account,
        CWP_Config
    ],
    module: {
        rules: [
            {
                test: /.css$/,
                use: [
                    {loader: MiniCSSWebpackPlugin.loader},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /.(svg|png|jpg|gif|ico)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: "img",
                        publicPath: '../img'  
                    }
                }
            }
        ]
    }
});


module.exports = config;