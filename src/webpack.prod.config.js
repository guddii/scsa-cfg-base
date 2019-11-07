const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    devtool: "#source-map",
    entry: {
        main: "./src/index"
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    output: {
        filename: "[name].js",
        path: path.join(process.cwd(), "dist"),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader"
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.jpg$/,
                use: [{ loader: "url-loader" }]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: "./index.html",
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            chunkFilename: "[id].css",
            filename: "[name].css"
        })
    ],
    target: "web"
};