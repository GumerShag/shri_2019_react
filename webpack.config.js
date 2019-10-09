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
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts']
    },
    devServer: {
        contentBase: path.join(__dirname, '/build'),
        port: 8080,
        historyApiFallback: {
            rewrites: [
                {from: /\/style.css/, to: '/style.css'},
                {from: /\/index_bundle.js/, to: '/index_bundle.js'},
                {from: /\/blob\/master/, to: '/index.html'},
                {from: /\/tree\/master/, to: '/index.html'},
                {
                    from: /assets\/\D+.svg/, to: function (context) {
                        return '/src/client/css/' + context.match[0];
                    }
                }
            ]
        }
    },
    module: {
        rules: [
            {
                test: /(\.tsx?)$/,
                loader: 'awesome-typescript-loader'
            },
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