const path = require('path')
const { name } = require('./package.json')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const port = 9004

module.exports = {
    outputDir: 'dist',
    assetsDir: 'static',
    filenameHashing: true,
    publicPath: 'http://localhost:9004',
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
            // 把子应用打包成umd 格式
            libraryTarget: 'umd',
            filename: 'vue2.js',
            library: 'vue2',
            jsonpFunction: `webpackJsonp_${name}`
        }
    }
}
