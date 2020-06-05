const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'app/client'),
    entry: [
        './js/index.js',
        './style/style.pcss',
    ],

    output: {
        path: path.resolve(__dirname, 'app/server/assets')
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