import { configureApi } from '@launchpadlab/lp-requests'
import { middleware as configureMiddleware } from '@launchpadlab/lp-redux-api'

/* Configure middleware and api services */

export const config = {
  // root: '/',
  successDataPath: 'data.attributes',
}

export const middleware = configureMiddleware(config)
export const api = configureApi(config)
