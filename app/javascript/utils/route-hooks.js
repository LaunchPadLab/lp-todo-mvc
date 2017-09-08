import { setUserCanNavigate } from '../main/user/actions'
import { NON_NAVIGABLE_ROUTES } from 'config'

export function checkIfNavigableRoute (path) {
  // checks to see if route should show the sidebar and header nav options
  return !NON_NAVIGABLE_ROUTES.map(route => new RegExp(route).test(path)).some(val => val)
}

export function checkIfUserCanNavigate (store) {
  if (!store) return
  const state = store.getState(),
        currentPath = state.routing.locationBeforeTransitions.pathname,
        isNavigable = checkIfNavigableRoute(currentPath)
  store.dispatch(setUserCanNavigate(isNavigable))
}

export const routeHooks = {
  onUpdate: checkIfUserCanNavigate,
}
