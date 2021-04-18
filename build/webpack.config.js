const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')

export default {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[name].bundle.[hash].js'
    },
    resolve: {
        extensions: ['js', 'vue', 'json']
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.(js|es6|babel|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: path.posix.join('static', '[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugin: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            HTTP_ENV: JSON.stringify(process.env.http_env)
        })
    ]
}