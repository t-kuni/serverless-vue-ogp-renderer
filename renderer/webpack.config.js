const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    target : 'web',
    entry  : {
        renderer: './renderer/src/renderer.js',
    },
    output : {
        path: path.resolve(__dirname, 'dest'),
    },
    module : {
        rules: [
            {
                test  : /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test  : /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader', 'css-loader'
                ],
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false
                        }
                    },
                    'sass-loader'
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.vue', '.js'],
        alias     : {
            'vue$': 'vue/dest/vue.esm.js'
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new CopyPlugin({
            patterns: [
                { from: "renderer/src/renderer.html" },
                { from: "renderer/src/img", to: "img" },
            ],
        }),
    ]
};