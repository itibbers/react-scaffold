const { join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

// TODO
// postcss
// 提取公共代码

module.exports = {
  entry: {
    app: join(__dirname, '../src/index.js'),
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux'],
  },
  output: {
    path: join(__dirname, '../dist'),
    filename: '[name].[hash:5].js',
    chunkFilename: '[name].[chunkhash:5].js',
  },
  resolve: {
    alias: {
      '@': join(__dirname, '../src'),
      pages: join(__dirname, '../src/pages'),
      components: join(__dirname, '../src/components'),
      actions: join(__dirname, '../src/redux/actions'),
      reducers: join(__dirname, '../src/redux/reducers'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // 缓存编译结果
        use: 'babel-loader?cacheDirectory=true',
        include: join(__dirname, '../src'),
      },
      {
        test: /\.css$/,
        use: [
          // 'style-loader',
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                localIdentName: '[local]-[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: join(__dirname, '../public/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:5].css',
      chunkFilename: '[id].[contenthash:5].css',
    }),
    new AntdDayjsWebpackPlugin(),
  ],
}
