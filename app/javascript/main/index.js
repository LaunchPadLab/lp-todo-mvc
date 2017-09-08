import React from 'react'
import PropTypes from 'prop-types'
import { IndexRedirect, IndexRoute, Route, Router, browserHistory } from 'react-router'
import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import * as Todo from './todo'

WebpackerReact.setup({ MainApp });

function MainApp ({}) {
  return(
    <Provider store={ store }>
      <Router history={ history }>
        <Route path="/" onChange={ onRouteChange } component={ Todo }>
        </Route>
      </Router>
    </Provider>
  )
}