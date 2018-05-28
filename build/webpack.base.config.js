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
    path: path.resolve(__dirname, '../dist'), // 控制 index.html 资源目录的初始位置
    filename: '[name].js',
    publicPath: 'static' // 资源的访问路径，部署到生产环境下不同的服务器中 需要配置一下
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        include: [resolve('src')],
        // exclude: /node_modules/,
        use: [
          {
            loader: "eslint-loader"
          }
        ]
      },
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
        include: [resolve('src')],
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
      filename: 'index.html'
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
