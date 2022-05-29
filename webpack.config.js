const path = require('path'); // add this for path context in loader
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                // loader: 'css-loader',
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpe?g|svg|png|gif|ico|eot|ttf|woff2?|otf|jpg)(\?v=\d+\.\d+\.\d+)?$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // injects bundle.js to our new index.html
            inject: true,
            // copys the content of the existing index.html to the new /build index.html
            template:  path.resolve('./index.html'),
        }),
    ]
}