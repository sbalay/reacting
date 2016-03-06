import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import glob from 'glob';
import autoprefixer from 'autoprefixer';

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
        loader: cssExtract.extract(['css', 'postcss'])
      },
      {
        test: /\.scss$/,
        loader: cssExtract.extract(['css', 'postcss', 'sass'])
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel', 'eslint'],
        exclude: /node_modules/
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        loader: 'url?limit=10000'
      }
    ]
  },
  postcss () {
    return [autoprefixer];
  }
}
