const CopyWebpackPlugin = require('copy-webpack-plugin');
const CWP_Config = new CopyWebpackPlugin({
    patterns: [
        { from: './src/data', to: 'Login_WAD/data' }
    ]
}); 

const config = {
    entry: {
        login: './src/js/login',
        createAccount: './src/js/createAccount',
        loby: './src/js/loby',
        preguntas: './src/js/preguntas',
        examenes: './src/js/examenes',
        newExam: './src/js/newExam',
        newPregunta: './src/js/newPregunta'
    },
    plugins: [
        CWP_Config
    ],
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /.html$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    }
};

module.exports = config;