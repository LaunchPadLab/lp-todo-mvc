import React from 'react'
import { authHooks } from 'utils'
import { Route, IndexRoute } from 'react-router'
import * as Views from './views'
import { TODO_ROUTE } from 'config'

console.log(TODO_ROUTE)

const Routes = (
  <Route path={ TODO_ROUTE } { ...authHooks }>
    <IndexRoute component={ Views.TodoShow } />
  </Route>
)

export default Routes
