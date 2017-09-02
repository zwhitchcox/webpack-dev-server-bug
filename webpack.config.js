'use strict';

module.exports = {
  context: __dirname,
  entry: ['./app.js', '../../client/index.js?http://localhost:8080/'],
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ]
  },
};
