const path = require('path')
const htmlWPP = require('html-webpack-plugin')

module.exports = {
    entry: './src/start.js'
    ,
    output: {
        filename: "index.[contenthash].js",
        path: path.resolve(__dirname, 'build')
    },
    mode: "production",
    module: {
        rules: [
        {
            test:/\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ]
        }, //scss
        {
            test: /\.pug$/,
            use: [
                {loader: "html-loader"},
                {loader: "pug-html-loader", options: {"pretty": true}}
            ]
        },  //pug
        ]
    },
    plugins: [
        new htmlWPP({
            filename: "index.html",
            template: path.join(__dirname, 'public/app.pug')
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        port: 3000,
    },
    stats: 'errors-only',
}