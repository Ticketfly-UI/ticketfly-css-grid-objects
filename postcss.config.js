/* global module */
module.exports = {
  input: 'index.css',
  output: 'build/ticketfly-css-grid-objects.css',

  use: [
    'postcss-import',
    'postcss-cssnext'
  ]
};
