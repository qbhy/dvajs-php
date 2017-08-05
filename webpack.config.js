module.exports = {
    entry: './src/server.js',
    output: {
        path: __dirname + "/build",
        filename: 'server.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    },
                    {
                        loader: 'jsx-loader',
                    }
                ]
            },
        ]
    }
};