const path = require("path");
const webpack = require("webpack");

const HtmlWebPackPlugin = require("html-webpack-plugin");

const hotMiddlewareScript = "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000";

module.exports = {
    devtool: "#source-map",
    entry: {
        main: [hotMiddlewareScript, "./src/index"]
    },
    output: {
        filename: "[name].js",
        path: path.join(process.cwd(), "dist"),
        publicPath: "/"
    },
    resolve: {
        extensions: [".ts", ".js"]
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
                        //options: { minimize: true }
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
    plugins: [
        new HtmlWebPackPlugin({
            excludeChunks: ["server"],
            filename: "./index.html",
            template: "./src/index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    target: "web"
};