import React from 'react'
import { authHooks } from 'utils'
import { Route, IndexRoute } from 'react-router'
import * as Views from './views'
import { TODO_ROUTE } from 'config'

const Routes = (
  <Route path={ TODO_ROUTE } { ...authHooks }>
    <IndexRoute component={ Views.Show } />
  </Route>
)

export default Routes
