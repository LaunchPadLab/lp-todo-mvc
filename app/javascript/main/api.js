import { configureApi } from '@launchpadlab/lp-requests'
import { middleware as configureMiddleware } from '@launchpadlab/lp-redux-api'
// import { API_URL, SIGN_IN_ROUTE } from 'config'
// import { getAuthToken, clearAuthToken } from 'auth'

/* Configure middleware and api services */

// Before hook for adding headers dynamically - return value will be added to request config
function before() {
  // const token = getAuthToken()
  // const deviceId = localStorage.getItem('deviceId')
  // const tokenHeaders = token ? { 'Authorization': `Bearer ${ token }` } : null
  // const deviceIdHeaders = deviceId ? { 'deviceId': `${ deviceId }` } : null
  // return {
  //   headers: { ...tokenHeaders, ...deviceIdHeaders },
  // }
}

function onUnauthorized() {
  // clearAuthToken()
  // window.location = SIGN_IN_ROUTE
}

export const config = {
  // root: API_URL,
  // mode: 'cors',
  // before,
  // onUnauthorized,
  // successDataPath: 'data.attributes',
}

export const middleware = configureMiddleware(config)
export const api = configureApi(config)
