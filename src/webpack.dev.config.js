const path = require("path");
const webpack = require("webpack");

const HtmlWebPackPlugin = require("html-webpack-plugin");

const hotMiddlewareScript = "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000";

module.exports = {
    devtool: "#source-map",
    entry: {
        main: [hotMiddlewareScript, "./src/index"]
    },
    mode: "development",
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
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            }
        ]
    },
    output: {
        filename: "[name].js",
        path: path.join(process.cwd(), "dist"),
        publicPath: "/"
    },
    plugins: [
        new HtmlWebPackPlugin({
            excludeChunks: ["server"],
            filename: "./index.html",
            template: "./src/index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve: {
        extensions: [".ts", ".js"]
    },
    target: "web"
};