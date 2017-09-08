// Webpack aliases

const path = require('path')
function aliases (basePath) {
  return {
    'utils': path.join(basePath, 'javascript/utils'),
    'lp-components': '@launchpadlab/lp-components',
    'lp-form': '@launchpadlab/lp-form',
    'lp-redux-api': '@launchpadlab/lp-redux-api',
    'lp-requests': '@launchpadlab/lp-requests',
    'lp-utils': '@launchpadlab/lp-utils',
    'components': path.join(basePath, 'javascript/components'),
    'reducer': path.join(basePath, 'javascript/main/reducer'),
    'types': path.join(basePath, 'javascript/main/types'),
    'api-actions': path.join(basePath, 'javascript/main/api-actions'),
    'effects': path.join(basePath, 'javascript/main/effects'),
    'images': path.join(basePath, 'images'),
    'config': path.join(basePath, 'javascript/config'),
    'colors': path.join(basePath, 'javascript/colors'),
    'api': path.join(basePath, 'javascript/main/api'),
    'auth': path.join(basePath, 'javascript/main/auth'),
  }
}

module.exports = aliases