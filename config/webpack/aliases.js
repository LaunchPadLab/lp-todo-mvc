// Webpack aliases

const path = require('path')

function aliases (basePath) {
  return {
    'utils': path.join(basePath, 'js/utils'),
    'lp-components': '@launchpadlab/lp-components',
    'lp-form': '@launchpadlab/lp-form',
    'lp-redux-api': '@launchpadlab/lp-redux-api',
    'lp-requests': '@launchpadlab/lp-requests',
    'lp-utils': '@launchpadlab/lp-utils',
    'components': path.join(basePath, 'js/components'),
    'reducer': path.join(basePath, 'js/main/reducer'),
    'types': path.join(basePath, 'js/main/types'),
    'api-actions': path.join(basePath, 'js/main/api-actions'),
    'effects': path.join(basePath, 'js/main/effects'),
    'images': path.join(basePath, 'images'),
    'config': path.join(basePath, 'js/config'),
    'colors': path.join(basePath, 'js/colors'),
    'api': path.join(basePath, 'js/main/api'),
    'auth': path.join(basePath, 'js/main/auth'),
  }
}

module.exports = aliases