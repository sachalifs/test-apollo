const path = require('path')

const exclude = /node_modules/

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude, loader: "babel-loader" },
      { test: /\.(graphql|gql)$/, exclude, loader: 'graphql-tag/loader' }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  }
}
