import React from 'react'
import { Route, IndexRoute } from 'react-router'
import * as views from './views'

const Routes = (
  <Route path="/todo">
    <IndexRoute component={ views.Todo }/>
  </Route>
)

export default Routes