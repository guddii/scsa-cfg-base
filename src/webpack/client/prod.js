const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

/**
 * Webpack configuration for production builds
 * of client bundles
 *
 * @param {ProcessEnv} [env] Node env parameter
 * @param {Process.argv} [argv] Commandline parameter
 * @returns webpack.Configuration
 */
module.exports = (env, argv) => {
    return {
        entry: {
            MessagingBridge: "./src/client/entry/MessagingBridge",
            MessageBus: "./src/client/entry/MessageBus"
        },
        mode: "production",
        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    options: { allowTsInNodeModules: true },
                    loader: "ts-loader"
                },
                {
                    test: /\.pug?$/,
                    use: "pug-loader"
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader"]
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[name].[ext]",
                                publicPath: 'fonts/',
                                outputPath: "fonts/"
                            }
                        }
                    ]
                }
            ]
        },
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})]
        },
        output: {
            filename: "[name].js",
            path: path.join(process.cwd(), "dist", "client"),
            publicPath: "/"
        },
        plugins: [
            new webpack.EnvironmentPlugin({
                SCSA_ENDPOINT_SETTINGS: "local"
            }),
            new MiniCssExtractPlugin({
                chunkFilename: "[id].css",
                filename: "[name].css"
            })
        ],
        resolve: {
            extensions: [".ts", ".js"]
        },
        target: "web"
    };
};
