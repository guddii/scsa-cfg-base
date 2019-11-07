/**
 * Webpack configurations
 * @type {{webpack: {server: {config: *}, prod: {config: *}, dev: {config: *}}}}
 */
module.exports = {
    webpack: {
        dev: {
            config: require("./src/webpack.dev.config")
        },
        prod: {
            config: require("./src/webpack.prod.config")
        },
        server: {
            config: require("./src/webpack.server.config")
        }
    }
};