const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'app/assets'),
    entry: [
        './js/index.js',
        './css/style.pcss',
    ],

    output: {
        path: path.resolve(__dirname, 'app/public/assets')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
}