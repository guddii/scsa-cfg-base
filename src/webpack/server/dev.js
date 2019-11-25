const webpack = require("webpack");
const prodConfig = require("./prod");

/**
 * Webpack configuration for the development
 * of server bundles
 *
 * @param env Node env parameter
 * @param argv Commandline parameter
 * @returns webpack.Configuration
 */
module.exports = (env, argv) => {
    const config = {
        entry: {
            server: ["./src/server/entry/dev"]
        },
        mode: "development",
        plugins: [new webpack.HotModuleReplacementPlugin()]
    };

    return { ...prodConfig(), ...config };
};
