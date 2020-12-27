const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    target : 'web',
    entry  : {
        renderer: './renderer/src/renderer.js',
    },
    output : {
        path: path.resolve(__dirname, 'dist'),
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
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
};