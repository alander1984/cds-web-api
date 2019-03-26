const path = require('path');

module.exports = {
  entry: { 
    app: ['./src/main.js','./src/api/routes.js', './src/api/permissions.js', './src/api/token.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'var',
    library: 'CDSAPI'
  },
  externals: {
  'Config': JSON.stringify(require('./config/default.json'))
  },
  node: {
    fs: 'empty'
  }
};