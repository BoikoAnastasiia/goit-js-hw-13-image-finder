const { merge } = require('webpack-merge');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const loadSharedConfig = require('./configs/shared');

const loadModeConfig = env => require(`./configs/${env.mode}`)(env);
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

new FaviconsWebpackPlugin('./images/logo.png'), // svg works too!
  (module.exports = env => merge(loadSharedConfig(env), loadModeConfig(env)));
