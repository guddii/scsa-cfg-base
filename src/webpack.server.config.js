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
    resolve: {
      extensions: [".ts", ".js"]
    },
    output: {
      path: path.join(process.cwd(), "dist"),
      publicPath: "/",
      filename: "[name].js"
    },
    mode: argv.mode,
    target: "node",
    node: {
      __dirname: false,
      __filename: false
    },
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: "ts-loader"
        }
      ]
    }
  });
};