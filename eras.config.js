const baseConfig = require('./webpack.common.js');
const merge = require('webpack-merge');

module.exports = merge(baseConfig, {
    externals: {
        'Config': JSON.stringify(require('./config/eras.json'))
    },
});