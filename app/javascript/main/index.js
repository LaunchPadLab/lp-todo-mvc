// import React from 'react'
// import PropTypes from 'prop-types'
// import { IndexRedirect, IndexRoute, Route, Router, browserHistory } from 'react-router'
// import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
// import { Provider } from 'react-redux'
// import { views } from './todo'

import Routes from './routes'
import WebpackerReact from 'webpacker-react'
import ReactDOM from 'react-dom'

// ReactDOM.render(Routes, document.getE lementById('root'))

/*
 * Register the app so WebpackerReact can find it
 */

// WebpackerReact.setup(Routes)

ReactDOM.render(Routes, document.getElementById('root'))
// For now we need to assign our view components to a const
// In future iterations, this should not be the case

// const Todo = views.Show
/*
 * Build the application
 */

// function MainApp () {
//   return(
//     <div>
//       <Todo/>
//     </div>
//   )
// }