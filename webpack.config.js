const path = require('path');

module.exports = {
    context: __dirname,
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: './bundle.js'
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', {

                    }]
                }
            }
        }]
    },
    mode: 'development',
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '*']
    }
};