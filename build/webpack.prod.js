const { merge } = require('webpack-merge')
const WebpackCommon = require('./webpack.common.js')

const config = merge(WebpackCommon, {
    
})

console.log(config)

module.exports = config