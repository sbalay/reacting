import webpack from 'webpack';

export default {
  entry: [
    './entry.js',
    './styles.js'
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
