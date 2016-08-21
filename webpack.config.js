var path = require('path');
var webpack = require('webpack');

var VendorChunkPlugin = require('webpack-vendor-chunk-plugin');

module.exports = {
    entry: {
      app: "./app/app.js",
      vendor: ['react', 'jquery', 'materialize-css']
    },
    output: {
        filename: "public/js/[name].js",
        sourceMapFilename: "public/js/[name].map"
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
              test: /\.jsx?/, 
              loader: 'babel',
              exclude: /node_modules/
            },
            {
              test: /\.css/,
              loader: 'style!css'
            },
            {
              test: /\.(png|woff|woff2|eot|ttf|svg)$/,
              loader: 'url-loader?limit=100000&name=public/fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery",
          React: "react"
      }),
      new webpack.optimize.CommonsChunkPlugin(['app', 'vendor'], 'public/js/[name].js'),
      new webpack.optimize.UglifyJsPlugin({ mangle: false, compress: { warnings: false }})

    ]
}
