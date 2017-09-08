// Webpack aliases

const path = require('path')

function aliases (basePath) {
  return {
    'utils': path.join(basePath, 'app/javascript/utils'),
    'lp-components': '@launchpadlab/lp-components',
    'lp-form': '@launchpadlab/lp-form',
    'lp-redux-api': '@launchpadlab/lp-redux-api',
    'lp-requests': '@launchpadlab/lp-requests',
    'lp-utils': '@launchpadlab/lp-utils',
    'components': path.join(basePath, 'app/javascript/components'),
    'reducer': path.join(basePath, 'app/javascript/main/reducer'),
    'types': path.join(basePath, 'app/javascript/main/types'),
    'api-actions': path.join(basePath, 'app/javascript/main/api-actions'),
    'effects': path.join(basePath, 'app/javascript/main/effects'),
    'images': path.join(basePath, 'images'),
    'config': path.join(basePath, 'app/javascript/config'),
    'colors': path.join(basePath, 'app/javascript/colors'),
    'api': path.join(basePath, 'app/javascript/main/api'),
    'auth': path.join(basePath, 'app/javascript/main/auth'),
  }
}

module.exports = aliases