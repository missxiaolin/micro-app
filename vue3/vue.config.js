const path = require('path')
const { name } = require('./package.json')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const port = 9005

module.exports = {
    lintOnSave: false,
    outputDir: 'dist',
    assetsDir: 'static',
    filenameHashing: true,
    publicPath: '/',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        disableHostCheck: true,
        port,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src')
            }
        },
        output: {
            // 把子应用打包成umd 格式 commonjs 浏览器 node 环境
            libraryTarget: 'umd',
            filename: 'vue3.js',
            library: 'vue3',
            jsonpFunction: `webpackJsonp_${name}`
        }
    }
}
