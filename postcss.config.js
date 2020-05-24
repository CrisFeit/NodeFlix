module.exports = {
  plugins: [
    require('postcss-easy-import'),
    require('autoprefixer'),
    require('postcss-preset-env'),
    require('cssnano')
  ]
}