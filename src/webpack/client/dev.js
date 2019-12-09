const webpack = require("webpack");
const prodConfig = require("./prod");

/**
 * Hot middleware script
 *
 * @param script Base path
 * @returns string
 */
const hotMiddlewareScript = script => {
    script = script || "webpack-hot-middleware/client";
    script += "?path=/__webpack_hmr";
    script += "&timeout=20000";
    script += "&reload=true";
    return script;
};

/**
 * Webpack configuration for the development
 * of client bundles
 *
 * @extends ./prodConfig
 * @param {ProcessEnv} [env] Node env parameter
 * @param {Process.argv} [argv] Commandline parameter
 * @returns webpack.Configuration
 */
module.exports = (env, argv) => {
    const config = {
        devtool: "inline-source-map",
        entry: {
            client: [hotMiddlewareScript(), "./src/client/index"]
        },
        mode: "development",
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
                    use: ["style-loader", "css-loader"]
                }
            ]
        },
        plugins: [
            new webpack.EnvironmentPlugin({
                SCSA_ENDPOINT_SETTINGS: "local"
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ]
    };
    return { ...prodConfig(), ...config };
};
