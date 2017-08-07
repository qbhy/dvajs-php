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
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env'],
                            plugins: ['transform-runtime'],
                            modules: true,

                        }
                    },
                    {
                        // exclude: /(node_modules|bower_components)/,
                        loader: 'jsx-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.ts$/,
                // exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        modules: true
                    }
                }
            },
        ]
    }
};