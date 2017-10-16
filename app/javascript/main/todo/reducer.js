import {
  REQ_FETCH_TODOS
} from 'api-actions'
import * as actions from './actions'
import {
  set,
  cloneDeep,
  updateArray,
  getIndexOf,
  getOr,
} from 'utils'

import { handleActions } from 'redux-actions'
import { selectorForSlice } from '@launchpadlab/lp-utils'
import { setFromRequest } from '@launchpadlab/lp-redux-api'

// Reducer Keys
const reducerKey = 'todo'
const slice = 'root.todo'

// Custom Functions
const updateItems = (items, itemToUpdate) => {
  const itemIndex = getIndexOf(items, item => item.id === itemToUpdate.id)
  return updateArray(items, itemToUpdate, itemIndex)
}

const removeItem = (array, index) => {
  const clonedArray = cloneDeep(array)
  clonedArray.splice(index, 1)
  return clonedArray
}

const initialState = {
  list: 'all',
  todos: {}
}

const reducer = handleActions({

  ...setFromRequest(REQ_FETCH_TODOS, 'todos'),
  
  [actions.setList]: (state, action) => set('list', action.payload, state),

  [actions.createItem]: (state, action) => {
    const itemCollection = getOr([], 'todos.success.data.attributes', state)
    return set(
      'todos.success.data.attributes', 
      [...itemCollection, action.payload.data.attributes], state)
  },

  [actions.editItem]: (state, action) => {
    const itemCollection = getOr([], 'todos.success.data.attributes', state)
    const item = itemCollection.find((item) => item.id === action.payload.data.attributes.id)
    const newItem = { ...item, text: action.payload.data.attributes.text }
    const updatedCollection = updateItems(itemCollection, newItem)
    return set('todos.success.data.attributes', updatedCollection, state)
  },

  [actions.toggleComplete]: (state, action) => {
    const itemCollection = getOr([], 'todos.success.data.attributes', state)
    const item = itemCollection.find((item) => item.id === action.payload.data.attributes.id)
    const toggledItem = { ...item, completed: !item.completed }
    const updatedCollection = updateItems(itemCollection, toggledItem)
    return set('todos.success.data.attributes', updatedCollection, state)
  },

  [actions.destroyItem]: (state, action) => {
    const itemCollection = getOr([], 'todos.success.data.attributes', state)
    const itemIdToRemove = action.payload
    const itemIndex = 
      getIndexOf(itemCollection, item => item.id === itemIdToRemove )
    const updatedCollection = removeItem(itemCollection, itemIndex)
    return set('todos.success.data.attributes', updatedCollection, state)
  }

}, initialState)

// Set selector path
const select = selectorForSlice(slice)

// Define selectors
const selectors = {
  list: select('list'),
  items: select('todos.success.data.attributes', []),
}

export { reducer, reducerKey, selectors }
