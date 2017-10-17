import React from 'react'
import {
  Router, 
  Route,
  IndexRedirect,
  browserHistory,
} from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import initializeStore from './store'
import { routes as TodoRoutes } from './todo'
import Layout from './layout'

const store = initializeStore()

// Make the routing information available in the store
const history = syncHistoryWithStore(browserHistory, store)

function Routes () {
  return (
    <Provider store={ store }>
      <Router history={ history }>
        <Route path="/" component={ Layout }>
          <IndexRedirect to="todo" />
          { TodoRoutes }
        </Route>
      </Router>
    </Provider>
  )
}

export default Routes
