const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CWP_Config = new CleanWebpackPlugin();

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HWP_Config_Login = new HtmlWebpackPlugin({
    favicon: "./src/img/icons/favicon.ico",
    template: './src/html/login.html',
    filename: 'Login_WAD/views/html/login.html',
    chunks: ['login'],
    minify: {
        removeAttributeQuotes:  true,
        collapseWhitespace: true,
        removeComments: true
    }
});
const HWP_Config_Account = new HtmlWebpackPlugin({
    favicon: "./src/img/icons/favicon.ico",
    template: './src/html/createAccount.html',
    filename: 'Login_WAD/views/html/createAccount.html',
    chunks: ['createAccount'],
    minify: {
        removeAttributeQuotes:  true,
        collapseWhitespace: true,
        removeComments: true
    }
});
const HWP_Config_Loby = new HtmlWebpackPlugin({
    favicon: "./src/img/icons/favicon.ico",
    template: './src/html/loby.html',
    filename: 'Login_WAD/views/html/loby.html',
    chunks: ['loby'],
    minify: {
        removeAttributeQuotes:  true,
        collapseWhitespace: true,
        removeComments: true
    }
});
const HWP_Config_Preguntas = new HtmlWebpackPlugin({
    favicon: "./src/img/icons/favicon.ico",
    template: './src/html/preguntas.html',
    filename: 'Login_WAD/views/html/preguntas.html',
    chunks: ['preguntas'],
    minify: {
        removeAttributeQuotes:  true,
        collapseWhitespace: true,
        removeComments: true
    }
});
const HWP_Config_Examenes = new HtmlWebpackPlugin({
    favicon: "./src/img/icons/favicon.ico",
    template: './src/html/examenes.html',
    filename: 'Login_WAD/views/html/examenes.html',
    chunks: ['examenes'],
    minify: {
        removeAttributeQuotes:  true,
        collapseWhitespace: true,
        removeComments: true
    }
});
const HWP_Config_NewExam = new HtmlWebpackPlugin({
    favicon: "./src/img/icons/favicon.ico",
    template: './src/html/newExam.html',
    filename: 'Login_WAD/views/html/newExam.html',
    chunks: ['newExam'],
    minify: {
        removeAttributeQuotes:  true,
        collapseWhitespace: true,
        removeComments: true
    }
});
const HWP_Config_NewPregunta = new HtmlWebpackPlugin({
    favicon: "./src/img/icons/favicon.ico",
    template: './src/html/newPregunta.html',
    filename: 'Login_WAD/views/html/newPregunta.html',
    chunks: ['nav'],
    minify: {
        removeAttributeQuotes:  true,
        collapseWhitespace: true,
        removeComments: true
    }
});
const HWP_Config_ResolverPregunta = new HtmlWebpackPlugin({
    favicon: "./src/img/icons/favicon.ico",
    template: './src/html/resolverPregunta.html',
    filename: 'views/html/resolverPregunta.html',
    chunks: ['nav'],
    minify: {
        removeAttributeQuotes:  true,
        collapseWhitespace: true,
        removeComments: true
    }
})
const HWP_Config_VerPregunta = new HtmlWebpackPlugin({
    favicon: "./src/img/icons/favicon.ico",
    template: './src/html/verPregunta.html',
    filename: 'views/html/verPregunta.html',
    chunks: ['nav'],
    minify: {
        removeAttributeQuotes:  true,
        collapseWhitespace: true,
        removeComments: true
    }
})

const TerserPlugin = require('terser-webpack-plugin');
const TP_Config = new TerserPlugin();

const MiniCSSWebpackPlugin = require('mini-css-extract-plugin');
const MCSSWP_Config = new MiniCSSWebpackPlugin({
    filename: "Login_WAD/views/css/[name].css"
});

const OptimizeCSSAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const OCSSAP_Congif = new OptimizeCSSAssetsWebpackPlugin();

const config = merge(common, {
    mode: 'production',
    output: {
        filename: 'Login_WAD/views/js/[name].[contentHash].bundle.js',
        path: path.resolve(__dirname, "loginProd")
    },
    optimization: {
        minimizer: [
            OCSSAP_Congif, 
            TP_Config,
            HWP_Config_Login,
            HWP_Config_Account,
            HWP_Config_Loby,
            HWP_Config_Preguntas,
            HWP_Config_Examenes,
            HWP_Config_NewExam,
            HWP_Config_NewPregunta,
            HWP_Config_ResolverPregunta,
            HWP_Config_VerPregunta
        ]
    },
    plugins: [
        MCSSWP_Config,
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
                test: /.(svg|png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: "Login_WAD/views/img",
                        publicPath: '../img'   
                    }
                }
            }
        ]
    }
});

module.exports = config;