const path = require('path');
const { name } = require('./package.json')

function resolve(dir) {
  return path.join(__dirname, dir);
}

const packageName = 'vue2';
const port = 9004;

module.exports = {
  lintOnSave: false,
  outputDir: 'dist', // 打包的目录
  assetsDir: 'static', // 打包的静态资源
  filenameHashing: true, // 打包出来的文件，会带有hash信息
  publicPath: 'http://localhost:9004',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: false,
    disableHostCheck: true,
    port,
    headers: {
      'Access-Control-Allow-Origin': '*', // 本地服务的跨域内容
    },
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    output: {
      // 把子应用打包成 umd 库格式 commonjs 浏览器，node环境
      // library: `${packageName}`,
      // libraryTarget: 'umd',
      libraryTarget: 'umd',
      filename: 'vue2.js',
      library: 'vac',
      jsonpFunction: `webpackJsonp_${name}`
    },
  },
};
