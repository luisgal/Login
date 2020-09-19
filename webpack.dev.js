const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CWP_Config = new CleanWebpackPlugin();

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HWP_Config_Login = new HtmlWebpackPlugin({
    template: './src/html/login.html',
    filename: 'Login_WAD/views/html/login.html',
    chunks: ['login']
});
const HWP_Config_Account = new HtmlWebpackPlugin({
    template: './src/html/createAccount.html',
    filename: 'Login_WAD/views/html/createAccount.html',
    chunks: ['createAccount']
});
const HWP_Config_Loby = new HtmlWebpackPlugin({
    template: './src/html/loby.html',
    filename: 'Login_WAD/views/html/loby.html',
    chunks: ['loby']
});
const HWP_Config_Preguntas = new HtmlWebpackPlugin({
    template: './src/html/preguntas.html',
    filename: 'Login_WAD/views/html/preguntas.html',
    chunks: ['preguntas']
});
const HWP_Config_Examenes = new HtmlWebpackPlugin({
    template: './src/html/examenes.html',
    filename: 'Login_WAD/views/html/examenes.html',
    chunks: ['examenes']
});
const HWP_Config_NewExam = new HtmlWebpackPlugin({
    template: './src/html/newExam.html',
    filename: 'Login_WAD/views/html/newExam.html',
    chunks: ['newExam']
});
const HWP_Config_NewPregunta = new HtmlWebpackPlugin({
    template: './src/html/newPregunta.html',
    filename: 'Login_WAD/views/html/newPregunta.html',
    chunks: ['newPregunta']
});

const MiniCSSWebpackPlugin = require('mini-css-extract-plugin');
const MCSSWP_Config = new MiniCSSWebpackPlugin({
    filename: "Login_WAD/views/css/[name].css"
});

const config = merge(common, {
    mode: 'development',
    output: {
        filename: 'Login_WAD/views/js/[name].bundle.js',
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
            }
        ]
    }
});


module.exports = config;