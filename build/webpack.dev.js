const path = require('path')
const { merge } = require('webpack-merge')
const WebpackCommon = require('./webpack.common.js')

 const config = {
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: false,
        port: 9000,
        host: 'localhost',
    }
}

module.exports = merge(WebpackCommon, config)