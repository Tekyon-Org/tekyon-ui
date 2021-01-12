const path = require('path');

// Whether it is development mode
const DEVMODE = true;

module.exports = {
    entry: './init.js',
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, ''),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            [
                              "@babel/plugin-proposal-class-properties"
                            ]
                        ]
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.handlebars$/,
                loader: "handlebars-loader"
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    mode: DEVMODE===true ? 'development' : 'production',
    devServer: {
        contentBase: path.join(__dirname, ''),
        compress: true,
        port: 8080
    }
};