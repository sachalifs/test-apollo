const path = require('path')

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  }
}
