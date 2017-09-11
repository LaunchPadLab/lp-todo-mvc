import {
  SET_LIST,
  CREATE_ITEM,
  EDIT_ITEM,
  TOGGLE_ITEM_CHECK,
  DESTROY_ITEM
} from './actions'

import {
  set,
  last,
  cloneDeep,
  updateArray,
  getIndexOf,
} from '../../utils'

import { handleActions } from 'redux-actions'
import { selectorForSlice } from '@launchpadlab/lp-utils'

// Reducer Keys
const reducerKey = 'todo'
const slice = 'root.todo'

// Custom Functions
const updateItems = (items, itemToUpdate) => {
  const itemIndex = getIndexOf(items, item => item.id === itemToUpdate.id)
  return updateArray(items, itemToUpdate, itemIndex)
}

const getItemId = (array) => {
  if (array.length === 0) {
    return 1
  } else {
    return last(array).id + 1
  }
}

const buildItem = (text, id) => {
  return {
    text: text,
    completed: false,
    id: id
  }
}

const removeItem = (array, index) => {
  const clonedArray = cloneDeep(array)
  clonedArray.splice(index, 1)
  return clonedArray
}

// Set Initial State
const initialState = {
  list: 'all',
  items: [
    {
      text: 'EXAMPLE take out trash',
      completed: false,
      id: 1
    }
  ]
}

// Define Reducer with desired actions
const reducer = handleActions({
  [SET_LIST]: (state, action) => set('list', action.payload, state),

  [CREATE_ITEM]: (state, action) => {
    const itemCollection = state.items
    const id = getItemId(itemCollection)
    const item = buildItem(action.payload.text, id)
    return set('items', [...itemCollection, item], state)
  },

  [EDIT_ITEM]: (state, action) => {
    const itemCollection = state.items
    const item = itemCollection.find((item) => item.id === action.payload.id)
    const newItem = { ...item, text: action.payload.text }
    const updatedCollection = updateItems(itemCollection, newItem)
    return set('items', updatedCollection, state)
  },

  [TOGGLE_ITEM_CHECK]: (state, action) => {
    const itemCollection = state.items
    const item = itemCollection.find((item) => item.id === action.payload.id)
    const toggledItem = { ...item, completed: !item.completed }
    const updatedCollection = updateItems(itemCollection, toggledItem)
    return set('items', updatedCollection, state)
  },

  [DESTROY_ITEM]: (state, action) => {
    const itemCollection = state.items
    const itemToRemove = action.payload
    const itemIndex = getIndexOf(itemCollection, item => item.id === itemToRemove.id)
    const updatedCollection = removeItem(itemCollection, itemIndex)
    return set('items', updatedCollection, state)
  }

}, initialState)

// Set selector path
const select = selectorForSlice(slice)

// Define selectors
const selectors = {
  list: select('list'),
  items: select('items'),
}

export { reducer, reducerKey, selectors }
