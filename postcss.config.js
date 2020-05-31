module.exports = {
  plugins: [
    require('postcss-easy-import'),
    require('precss'),
    require('postcss-preset-env'),
    require('cssnano')
  ]
}