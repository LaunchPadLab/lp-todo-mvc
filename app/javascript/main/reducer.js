import { combineReducers } from 'redux';

import {
  reducer as todoReducer,
  reducerKey as todoReducerKey
} from './todo'

const reducerKey = 'root'

const reducer = combineReducers({
  [todoReducerKey]: todoReducer,
})

export { reducer, reducerKey }
