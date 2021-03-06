const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const packageJSON = require('../package.json');
const commonConfig = require('./webpack.common');

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8081/'
    },
    devServer: {
        port: 8081,
        historyApiFallback: true
        // historyApiFallback: {
        //     index: 'index.html'
        // }
    },
    plugins: [
        
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap.js'
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