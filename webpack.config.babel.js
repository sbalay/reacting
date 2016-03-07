import webpack from 'webpack';
import path from 'path';

export default {
  entry: [
    './src/main.js',
    './src/styles.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
    publicPath: '/build/'
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
        loaders: ['style', 'css']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel', 'eslint'],
        exclude: /node_modules/
      }
    ]
  }
};
