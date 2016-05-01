import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import glob from 'glob';

const cssExtract = new ExtractTextPlugin('styles.css');

export default {
  entry: [
    './src/main.js',
    ...glob.sync('./src/**/*.scss')
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
    publicPath: '/build/'
  },
  devtool: '#inline-source-map',
  historyApiFallback: true,
  plugins: [
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
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        loader: 'file'
      }
    ]
  }
}
