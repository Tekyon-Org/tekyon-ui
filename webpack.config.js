const path = require('path');

// Whether it is development mode
const DEVMODE = true;

module.exports = {
    entry: './Core.js',
    output: {
        globalObject: 'this',
        filename: 'TekyonUI.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'TekyonUI',
        libraryTarget: 'umd'
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
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.worker\.js$/,
                use: { loader: "worker-loader" },
            }
        ]
    },
    mode: DEVMODE===true ? 'development' : 'production',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080
    },
    devtool: DEVMODE===true ? 'eval-source-map' : false
};