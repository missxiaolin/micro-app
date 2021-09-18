const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        path: ['./index.js']
    },
    module: {
        rules: [
            {
                test: /\.js(|x)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(c|sc)ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'url-loader'
                }
            }
        ]
    },
    optimization: {
        splitChunks: false,
        minimize: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'react.js',
        library: 'react',
        librartTarget: 'umd',
        umdNamedDefine: true,
        publicPath: 'http://localhost:9002/'
    },
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*',
            contentBase: path.resolve(__dirname, 'dist'),
            compress: true,
            port: 9002,
            historyApiFallback: true,
            hot: true
        }
    }
}



