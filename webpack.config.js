const path = require('path');

// Whether it is development mode
const DEVMODE = true;

module.exports = {
    entry: './Core.js',
    output: {
        filename: 'tekyonui.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }],
                exclude: /node_modules/
            }
        ]
    },
    mode: DEVMODE===true ? 'development' : 'production',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080
    }
};