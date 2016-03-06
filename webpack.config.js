var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './entry.js'
  ],
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  historyApiFallback: true,
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel', 'eslint']
      }
    ]
  }
};
