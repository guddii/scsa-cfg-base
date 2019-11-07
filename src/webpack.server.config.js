const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = (env, argv) => {
    const SERVER_PATH = (argv.mode === "production") ?
        "./src/server/production" :
        "./src/server/development";

    return ({
        entry: {
            server: SERVER_PATH
        },
        externals: [nodeExternals()],

        mode: argv.mode,
        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    use: "ts-loader"
                }
            ]
        },
        node: {
            __dirname: false,
            __filename: false
        },
        output: {
            filename: "[name].js",
            path: path.join(process.cwd(), "dist"),
            publicPath: "/"
        },
        resolve: {
            extensions: [".ts", ".js"]
        },
        target: "node"
    });
};