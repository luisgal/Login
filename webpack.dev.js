const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CWP_Config = new CleanWebpackPlugin();

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HWP_Config_Login = new HtmlWebpackPlugin({
    favicon: "./src/img/icons/favicon.ico",
    template: './src/html/login.html',
    filename: 'views/html/login.jsp',
    chunks: ['login']
});
const HWP_Config_Account = new HtmlWebpackPlugin({
    favicon: "./src/img/icons/favicon.ico",
    template: './src/html/createAccount.html',
    filename: 'views/html/createAccount.jsp',
    chunks: ['createAccount']
});
const HWP_Config_Loby = new HtmlWebpackPlugin({
    favicon: "./src/img/icons/favicon.ico",
    template: './src/html/loby.html',
    filename: 'views/html/loby.jsp',
    chunks: ['loby']
});
const HWP_Config_Preguntas = new HtmlWebpackPlugin({
    favicon: "./src/img/icons/favicon.ico",
    template: './src/html/preguntas.html',
    filename: 'views/html/preguntas.jsp',
    chunks: ['preguntas']
});
const HWP_Config_Examenes = new HtmlWebpackPlugin({
    favicon: "./src/img/icons/favicon.ico",
    template: './src/html/examenes.html',
    filename: 'views/html/examenes.jsp',
    chunks: ['examenes']
});
const HWP_Config_NewExam = new HtmlWebpackPlugin({
    favicon: "./src/img/icons/favicon.ico",
    template: './src/html/newExam.html',
    filename: 'views/html/newExam.jsp',
    chunks: ['newExam']
});
const HWP_Config_NewPregunta = new HtmlWebpackPlugin({
    favicon: "./src/img/icons/favicon.ico",
    template: './src/html/newPregunta.html',
    filename: 'views/html/newPregunta.jsp',
    chunks: ['newPregunta']
});

const MiniCSSWebpackPlugin = require('mini-css-extract-plugin');
const MCSSWP_Config = new MiniCSSWebpackPlugin({
    filename: "views/css/[name].css"
});

const config = merge(common, {
    mode: 'development',
    output: {
        filename: 'views/js/[name].bundle.js',
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
        HWP_Config_NewExam,
        HWP_Config_NewPregunta
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
                        outputPath: "views/img",
                        publicPath: '../img'  
                    }
                }
            }
        ]
    }
});


module.exports = config;