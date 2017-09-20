// Webpack aliases
const path = require('path')

function aliases (basePath) {
  return {
    'utils': path.join(basePath, 'utils'),
    'lp-components': '@launchpadlab/lp-components',
    'lp-form': '@launchpadlab/lp-form',
    'lp-redux-api': '@launchpadlab/lp-redux-api',
    'lp-requests': '@launchpadlab/lp-requests',
    'lp-utils': '@launchpadlab/lp-utils',
    'components': path.join(basePath, 'components'),
    'reducer': path.join(basePath, 'main/reducer'),
    'types': path.join(basePath, 'main/types'),
    'api-actions': path.join(basePath, 'main/api-actions'),
    'effects': path.join(basePath, 'main/effects'),
    'config': path.join(basePath, 'config'),
    'api': path.join(basePath, 'main/api'),
    'auth': path.join(basePath, 'main/auth'),
  }
}

module.exports = aliases