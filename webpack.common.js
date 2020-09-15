const path = require('path');

const config = {
    entry: {
        login: './src/js/login',
        createAccount: './src/js/createAccount'
    },
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
    },
};

module.exports = config;