
const wp = require('@cypress/webpack-preprocessor');
const config = require('../../webpack.config');
const { addMatchImageSnapshotPlugin, } = require('cypress-image-snapshot/plugin');
console.log('in plugins/index.js above module.export');

module.exports = (on) => {
    addMatchImageSnapshotPlugin(on);

    const options = {
    webpackOptions: config(null, {mode: 'dev'}),

  };
  on('file:preprocessor', wp(options));
};
