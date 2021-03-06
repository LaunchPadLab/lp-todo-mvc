import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import { middleware as apiMiddleware } from './api'
import { reducer as apiReducer } from '@launchpadlab/lp-redux-api'
import { reducer as rootReducer, reducerKey as rootKey } from './reducer'

function initializeStore () {
  /*
   * Combine the reducers into one that Redux can handle. The keys below are
   * important as data in the store will be namespaced them and each reducer
   * only receives the slice of state according to the key.
   */
  const reducer = combineReducers({
    form: formReducer,
    [rootKey]: rootReducer,
    routing: routerReducer,
    api: apiReducer,
  })
  
  // Add support for the Redux Dev Tools in chrome.
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const enhancers = composeEnhancers(
    applyMiddleware(
      apiMiddleware,
      thunkMiddleware,
    )
  )

  const initialState = {}

  return createStore(reducer, initialState, enhancers)
}

export default initializeStore
