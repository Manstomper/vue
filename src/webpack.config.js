const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', 'public'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'vue-style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  /*resolve: {
    fallback: {
      buffer: require.resolve('buffer'),
      crypto: require.resolve('crypto-browserify'),
      net: require.resolve(''),
      stream: require.resolve('stream-browserify'),
      timers: require.resolve('timers-browserify'),
      tls: require.resolve(''),
      util: require.resolve('util'),
      url: require.resolve('url'),
    },
  },*/
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new VueLoaderPlugin(),
  ],
};
