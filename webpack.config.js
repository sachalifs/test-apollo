const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const exclude = /node_modules/

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude, loader: 'babel-loader' },
      { test: /\.(graphql|gql)$/, exclude, loader: 'graphql-tag/loader' },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },
  devtool: 'eval-source-map',
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new CopyPlugin([
      { from: path.join(__dirname, 'src', 'assets', 'images') }
    ])
  ],
  resolve: {
    modules: [__dirname, 'node_modules']
  }
}
