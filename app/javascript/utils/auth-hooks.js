import flip from 'lodash/flip'
import { isAuthenticated } from 'auth'

// Auth hooks for react router

function requireAuth (callback, replace, nextState) {
  if (!isAuthenticated()) {
    replace({
      pathname: '/sign-in',
      state: { redirectUrl: nextState.location.pathname }
    })
  }
}

function excludeAuth (callback, replace) {
  if (isAuthenticated()) replace('/')
  callback()
}

export const authHooks = {
  onEnter: flip(requireAuth),
  onChange: flip(requireAuth),
}

export const noAuthHooks = {
  onEnter: flip(excludeAuth),
  onChange: flip(excludeAuth),
}
