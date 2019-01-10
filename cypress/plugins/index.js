
const wp = require('@cypress/webpack-preprocessor');
const config = require('../../webpack.config');
const {addMatchImageSnapshotPlugin,} = require('cypress-image-snapshot/plugin');

module.exports = (on) => {
  const options = {
    webpackOptions: config(null, {mode: 'dev'}),

  };
  on('file:preprocessor', wp(options))
};

module.exports = (on, config) => {
    addMatchImageSnapshotPlugin(on, config);
};