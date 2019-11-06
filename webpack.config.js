const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        filename: 'main.bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader"
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Custom template',
            template: 'src/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "style.css",
            chunkFilename: "lazyloaded.css"
        }),
    ]
};
