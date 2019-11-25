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
 * @param {object} [env] Node env parameter
 * @param {object} [argv] Commandline parameter
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
                    use: "ts-loader"
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                }
            ]
        },
        plugins: [new webpack.HotModuleReplacementPlugin()]
    };
    return { ...prodConfig(), ...config };
};
