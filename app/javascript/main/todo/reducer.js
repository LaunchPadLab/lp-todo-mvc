import { REQ_FETCH_TODOS } from 'api-actions'
import * as actions from './actions'
import {
  set,
  getOr,
} from 'utils'
import { createSelector } from 'reselect'
import { handleActions } from 'redux-actions'
import { selectorForSlice } from '@launchpadlab/lp-redux-utils'
import { setFromRequest } from '@launchpadlab/lp-redux-api'

// Reducer Keys
const reducerKey = 'todo'
const slice = 'root.todo'

const initialState = {
  filter: 'all',
  todos: {}
}

const reducer = handleActions({
  ...setFromRequest(REQ_FETCH_TODOS, 'todos'),
  [actions.setFilter]: (state, { payload: filter }) => set('filter', filter, state),
  [actions.createItem]: (state, { payload: newItem }) => {
    const itemCollection = getOr([], 'todos.success', state)
    return set('todos.success', [ ...itemCollection, newItem ], state)
  },
  [actions.editItem]: (state, { payload: { id, text } }) => {
    const itemCollection = getOr([], 'todos.success', state)
    const newItemCollection = itemCollection.map(item => {
      return (item.id === id) ? { ...item, text } : item
    })
    return set('todos.success', newItemCollection, state)
  },
  [actions.toggleComplete]: (state, { payload: id }) => {
    const itemCollection = getOr([], 'todos.success', state)
    const newItemCollection = itemCollection.map(item => {
      return (item.id === id) ? { ...item, completed: !item.completed } : item
    })
    return set('todos.success', newItemCollection, state)
  },
  [actions.destroyItem]: (state, { payload: id }) => {
    const itemCollection = getOr([], 'todos.success', state)
    const newItemCollection = itemCollection.filter(item => item.id !== id)
    return set('todos.success', newItemCollection, state)
  }
}, initialState)

// Set selector path
const select = selectorForSlice(slice)

// Pure selectors
const selectors = {
  filter: select('filter'),
  items: select('todos.success', []),
}

// Computed selectors

selectors.activeItems = createSelector(
  [ selectors.items ],
  function (items) {
    return items.filter(item => !item.completed)
  }
)

selectors.completedItems = createSelector(
  [ selectors.items ],
  function (items) {
    return items.filter(item => item.completed)
  }
)

selectors.displayedItems = createSelector(
  [ selectors.filter, selectors.items, selectors.activeItems, selectors.completedItems ],
  function (filter, items, activeItems, completedItems) {
    if (filter === 'active') return activeItems
    if (filter === 'completed') return completedItems
    return items
  }
)

export { reducer, reducerKey, selectors }
