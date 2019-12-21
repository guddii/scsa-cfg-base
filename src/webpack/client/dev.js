const webpack = require("webpack");
const prodConfig = require("./prod");

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
        mode: "production",
        watch: true
    };
    return { ...prodConfig(), ...config };
};
