/*
 * @Author: 可以清心
 * @Description: 
 * @Date: 2023-06-27 19:28:04
 * @LastEditTime: 2023-06-27 19:44:01
 */
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const config = require('./config');

module.exports = {
    entry: {
        main: './packages/cascader/index.js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: config.alias,
        modules: ['node_modules']
    },
    output: {
        filename: "cascader.umd.js",
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.(jsx?|babel|es6)$/,
                include: process.cwd(),
                exclude: config.jsexclude,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        preserveWhitespace: false
                    }
                }
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    mode: 'development'
}