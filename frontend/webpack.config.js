const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require("eslint-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const plugins = [
    new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "./index.html",
    }),
    new ESLintPlugin(),
]

if (process.env.NODE_ENV === 'development') {
    plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        // contentBase: path.join(__dirname, "dist"),
        // compress: true,
        port: 3000,
        // host: "0.0.0.0",
        // watchContentBase: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: [".js", ".jsx"],
                },
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                exclude: /node_modules/,
                use: ["file-loader?name=[name].[ext]"],
            },
        ]
    },
    plugins
}
