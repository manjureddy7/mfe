const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const packageJSON = require('../package.json');
const commonConfig = require('./webpack.common');

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8082/'
    },
    devServer: {
        port: 8082,
        historyApiFallback: true,
        // historyApiFallback: {
        //     index: 'index.html'
        // }
    },
    plugins: [
        
        new ModuleFederationPlugin({
            name: 'auth',
            filename: 'remoteEntry.js',
            exposes: {
                './AuthApp': './src/bootstrap.js'
            },
            shared: packageJSON.dependencies
        })
    ]
};

module.exports = merge(commonConfig, devConfig)