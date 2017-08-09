const path = require('path');

module.exports = {
    entry: {
        server: './src/server.js',
        app: './src/client.js',
    },
    output: {
        path: __dirname + "/build",
        filename: '[name].js'
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