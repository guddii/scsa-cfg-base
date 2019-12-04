const webpack = require("webpack");
const prodConfig = require("./prod");

/**
 * Webpack configuration for the development
 * of server bundles
 *
 * @extends ./prodConfig
 * @param {object} [env] Node env parameter
 * @param {object} [argv] Commandline parameter
 * @returns webpack.Configuration
 */
module.exports = (env, argv) => {
    const config = {
        entry: {
            server: ["./src/server/entry/dev"]
        },
        mode: "development",
        plugins: [
            new webpack.EnvironmentPlugin({
                SCSA_ENDPOINT_SETTINGS: 'development'
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ]
    };

    return { ...prodConfig(), ...config };
};
