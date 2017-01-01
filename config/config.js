var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'microsoft-bing-maps-api'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/microsoft-bing-maps-api-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'microsoft-bing-maps-api'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/microsoft-bing-maps-api-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'microsoft-bing-maps-api'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/microsoft-bing-maps-api-production'
  }
};

module.exports = config[env];
