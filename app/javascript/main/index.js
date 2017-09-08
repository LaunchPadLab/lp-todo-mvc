import React from 'react'
import PropTypes from 'prop-types'
import WebpackerReact from 'webpacker-react'
import { IndexRedirect, IndexRoute, Route, Router, browserHistory } from 'react-router'
import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { views } from './todo'

/*
 * Register the app so WebpackerReact can find it
 */
WebpackerReact.setup({ MainApp })

// For now we need to assign our view components to a const
// In future iterations, this should not be the case

const Todo = views.Show
/*
 * Build the application
 */

function MainApp () {
  return(
    <div>
      <Todo/>
    </div>
  )
}