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
const HWP_Config_Loby = new HtmlWebpackPlugin({
    favicon: "./src/img/icons/favicon.ico",
    template: './src/html/loby.html',
    filename: 'html/loby.html',
    chunks: ['loby']
});
const HWP_Config_Preguntas = new HtmlWebpackPlugin({
    favicon: "./src/img/icons/favicon.ico",
    template: './src/html/preguntas.html',
    filename: 'html/preguntas.html',
    chunks: ['preguntas']
});
const HWP_Config_Examenes = new HtmlWebpackPlugin({
    favicon: "./src/img/icons/favicon.ico",
    template: './src/html/examenes.html',
    filename: 'html/examenes.html',
    chunks: ['examenes']
});
const HWP_Config_NewExam = new HtmlWebpackPlugin({
    favicon: "./src/img/icons/favicon.ico",
    template: './src/html/newExam.html',
    filename: 'html/newExam.html',
    chunks: ['newExam']
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
        CWP_Config,
        MCSSWP_Config,
        HWP_Config_Login,
        HWP_Config_Account,
        HWP_Config_Loby,
        HWP_Config_Preguntas,
        HWP_Config_Examenes,
        HWP_Config_NewExam
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
                test: /.(svg|png|jpg|gif)$/,
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