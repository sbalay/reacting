module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  hot: true,
  historyApiFallback: true,
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};
