const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJSON = require('../package.json');

const commonConfig = require('./webpack.common');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        // historyApiFallback: {
        //     index: 'index.html'
        // }
        historyApiFallback: true // without this route reload not working
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js'
            },
            // shared: {
            //     react: {
            //         singleton: true
            //     },
            //     'react-dom': {
            //         singleton: true
            //     }
            // }
            shared: packageJSON.dependencies
        })
    ]
};

module.exports = merge(commonConfig, devConfig)