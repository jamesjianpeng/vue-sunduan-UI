const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const resolve = function(dir) {
  return path.join(__dirname, '..', dir)
}

const webpackConfig = {
  target: 'web',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        include: ['./src'],
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'vue-sunduan-selet',
      filename: resolve('index.html')
    })
  ]
}

module.exports = webpackConfig

/**
 *
 * plugins:
 *    HtmlWebpackPlugin
 *      title: 文档的标题
 *      filename: 新建一个 html 入口文件，默认是 index.html
 *
 *
 */
