import { SET_LIST, ADD_ITEM } from './actions'
import { set } from '../../utils'
import { handleActions } from 'redux-actions'
import { selectorForSlice } from '@launchpadlab/lp-utils'

const reducerKey = 'todo'
const slice = 'root.todo'

const initialState = {
  list: 'all',
  items: [
    {
      text: 'EXAMPLE take out trash',
      completed: false
    }
  ]
}

const reducer = handleActions({
  [SET_LIST]: (state, action) => set('list', action.payload, state),
  [ADD_ITEM]: (state, action) => {
    const collection = state.items
    return set('item', [...collection, action.payload], state)
  }
}, initialState)

// function reducer(state = initialState, action) {
//   // write comments describing handers
//   const handlers = {
//     [SET_FILTER]: (state, action) => set('filter', action.payload, state)
//   }
//
//   const myHandler = handlers[action.type]
//   return myHandler ? myHandler(state, action) : state
//   switch (action.type) {
//     case SET_FILTER:
//       return set('filter', action.payload, state)
//     default:
//       return state
//   }
// }

const select = selectorForSlice(slice)

const selectors = {
  list: select('list'),
  items: select('items')
}

export { reducer, reducerKey, selectors }
