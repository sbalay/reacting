import webpack from 'webpack';

export default {
  entry: [
    './entry.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devtool: '#inline-source-map',
  historyApiFallback: true,
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel', 'eslint'],
        exclude: /node_modules/
      }
    ]
  }
};
