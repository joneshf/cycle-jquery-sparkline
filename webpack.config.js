module.exports = {
  entry: {
    index: ['./index.js'],
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', },
    ],
  },
  output: {
    filename: '[name].bundle.js',
  },
};
