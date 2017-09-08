import React from 'react'
import PropTypes from 'prop-types'
import WebpackerReact from 'webpacker-react'
import { IndexRedirect, IndexRoute, Route, Router, browserHistory } from 'react-router'
import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import initializeStore from './store'
import { Provider } from 'react-redux'
import { views } from './todo'


const store = initializeStore()
/*
 * Register the app so WebpackerReact can find it
 */

WebpackerReact.setup({ MainApp })

// For now we need to assign our view components to a const
// In future iterations, this might not be the case

const TodoShow = views.TodoShow

/*
 * Build the application
 */


function MainApp () {
  return(
    <div>
      <Provider store={ store }>
        <Router history={ browserHistory }>
          <Route path="/" component={ TodoShow }/>
        </Router>
      </Provider>
    </div>
  )
}
