const path = require('path');

module.exports = {
    publicPath: '/assets/',
    assetsPath: path.join(__dirname, '..', 'dist', 'assets'),
    commonLoaders: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            include: path.join(__dirname, '..', 'app'),
            exclude: path.join(__dirname, '..', 'node_modules'),
        },
    ],
};