require('dotenv/config')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',

  devServer: {
    proxy: {
      '/': 'http://localhost:' + process.env.PORT
    }
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c|pc|postc)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ]
      }
    ]
  }
})