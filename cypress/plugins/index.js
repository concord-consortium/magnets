
const wp = require('@cypress/webpack-preprocessor');
const config = require('../../webpack.config');
const { addMatchImageSnapshotPlugin, } = require('../../node_modules/cypress-image-snapshot/plugin');

module.exports = (on) => {
  const options = {
    webpackOptions: config(null, {mode: 'dev'}),

  };
  on('file:preprocessor', wp(options));

  addMatchImageSnapshotPlugin(on);

};
