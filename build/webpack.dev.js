const { join } = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [process.ANALYZE && new BundleAnalyzerPlugin()].filter(Boolean),
  devServer: {
    contentBase: join(__dirname, '../dist'),
    host: '0.0.0.0',
    port: 8000,
    hot: true,
    compress: true,
    historyApiFallback: true, // 解决启动后刷新404
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        pathRewrite: { '^/api': '' }, // 可转换
        changeOrigin: true,
      },
    },
  },
})
