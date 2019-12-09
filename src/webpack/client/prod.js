const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path");

/**
 * Webpack configuration for production builds
 * of client bundles
 *
 * @param {object} [env] Node env parameter
 * @param {object} [argv] Commandline parameter
 * @returns webpack.Configuration
 */
module.exports = (env, argv) => {
    return {
        entry: {
            client: "./src/client/index"
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
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader"]
                }
            ]
        },
        optimization: {
            minimizer: [
                new OptimizeCSSAssetsPlugin({})
            ]
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
