import React from 'react'
import WebpackerReact from 'webpacker-react'
import { Route, Router, browserHistory } from 'react-router'
import initializeStore from './store'
import { Provider } from 'react-redux'
import { views } from './todo'

/*
 * Initialize Store
 */
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
      <Provider store={ store }>
        <Router history={ browserHistory }>
          <Route path="/" component={ TodoShow }/>
        </Router>
      </Provider>
  )
}
