// entry > output 

const path = require('path');
const workboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            //? makes the s optional, $ means all files that end with this
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',

    plugins: [
      new workboxPlugin.GenerateSW({
        swDest: 'sw.js',
        clientsClaim: true,
        skipWaiting: true,
        runtimeCaching: [
          {
              urlPattern: /images/,
              handler: 'cacheFirst'
          },
          {
              urlPattern: /.*/,
              handler: 'networkFirst'
          }
        ]
      })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};
