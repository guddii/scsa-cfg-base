const path = require("path");
const nodeExternals = require("webpack-node-externals");

/**
 * Webpack configuration for production builds
 * of server bundles
 *
 * @param {object} [env] Node env parameter
 * @param {object} [argv] Commandline parameter
 * @returns webpack.Configuration
 */
module.exports = (env, argv) => {
    return {
        entry: {
            server: "./src/server/entry/prod"
        },
        externals: [
            nodeExternals({
                whitelist: [
                    "@scsa/base",
                    "@scsa/styling",
                    "@scsa/styling/src/dev",
                    "@scsa/messaging"
                ]
            })
        ],
        mode: "production",
        module: {
            rules: [
                {
                    loader: "ts-loader",
                    options: { allowTsInNodeModules: true },
                    test: /\.ts?$/
                }
            ]
        },
        node: {
            Buffer: false,
            __dirname: false,
            __filename: false,
            console: false,
            global: false,
            process: false
        },
        output: {
            filename: "[name].js",
            path: path.join(process.cwd(), "dist", "server"),
            publicPath: "/"
        },
        resolve: {
            extensions: [".ts", ".js"]
        },
        target: "node"
    };
};
