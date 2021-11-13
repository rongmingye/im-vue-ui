const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '..', 'lib'),
        filename: 'im.common.js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            packages: path.resolve(__dirname, '../packages')
        }
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
                use: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env.HTTP_ENV': JSON.stringify(process.env.HTTP_ENV)
        }),
        new CleanWebpackPlugin()
    ]
}