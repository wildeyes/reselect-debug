module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'index.js',
    library: 'reselectDebug',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};