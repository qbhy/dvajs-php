const path = require('path');

module.exports = {
    entry: './src/render.js',
    output: {
        path: __dirname + "/build",
        filename: 'render.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ]
            },
        ]
    }
};