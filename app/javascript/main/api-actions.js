import { requestWithKey } from '@launchpadlab/lp-redux-api'

export const REQ_FETCH_TODOS = 'REQ_FETCH_TODOS'

export function fetchTodos () {
  return requestWithKey(REQ_FETCH_TODOS, { url: '/todos' })
}