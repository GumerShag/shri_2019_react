const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [{
    entry: './src/client/index.js',
    output: {
        path: path.join(__dirname, '/build'),
        filename: "index_bundle.js"
    },
    name: 'ui',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.s?css$/,
                use: [          {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../',
                        hmr: process.env.NODE_ENV === 'development',
                    },
                },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                    ]
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/client/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })

    ]
}];