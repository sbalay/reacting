import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const cssExtract = new ExtractTextPlugin('styles.css');

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
    new webpack.NoErrorsPlugin(),
    cssExtract
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: cssExtract.extract(['css'])
      },
      {
        test: /\.scss$/,
        loader: cssExtract.extract(['css', 'sass'])
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel', 'eslint'],
        exclude: /node_modules/
      }
    ]
  }
}
