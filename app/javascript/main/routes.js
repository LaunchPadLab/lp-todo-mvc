import React from 'react'
// import PropTypes from 'prop-types'
import {
  // IndexRedirect,
  // IndexRoute,
  Route, 
  Router, 
  browserHistory
} from 'react-router'
import { Provider } from 'react-redux'
// import { syncHistoryWithStore } from 'react-router-redux'
import initializeStore from './store'
// import { hasDirtyForm } from 'utils'
// import { isAuthenticated } from 'lp-requests'
import { views } from './todo'
const TodoShow = views.TodoShow

// const propTypes = {
//   timezones: PropTypes.arrayOf(PropTypes.object).isRequired,
//   intervalTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
// }

/*
 * Make the routing information available in the store
 */
// const history = syncHistoryWithStore(browserHistory, store)

// Confirm page transitions when there are incomplete forms

// function onRouteChange(previousState, nextState, replace, callback) {
//   const state = store.getState()
//   if (hasDirtyForm(state)) {
//     return window.confirm('Do you want to leave this page? Changes you made will not be saved.')
//       ? callback()
//       : null
//   }
//   return callback()
// }

// Confirm out-of-app transitions

// window.onbeforeunload = event => {
//   const state = store.getState()
//   if (hasDirtyForm(state)) (event || window.event).returnValue = 'You have unsaved changes.'
// }

function Routes () {


/*
 * Initialize Store
 */
  const store = initializeStore()

  return (
    <Provider store={ store }>
      <Router history={browserHistory}>
        <Route path="/" component={TodoShow}>
          {/* <IndexRedirect to="todos" /> */}

          {/* Public Routes */}

          {/* <UnauthorizedRoute authFunction={isAuthenticated} redirect="/summits">
            <Route path="sign-in" component={User.views.SignIn} />
            <Route path="sign-up" component={User.views.SignUp} />
          </UnauthorizedRoute> */}
          {/* <Route path="forgot-password" component={User.views.ForgotPassword} />
          <Route path="forgot-password-confirmation" component={User.views.ForgotPasswordConfirmation} />
          <Route path="reset-password/:token" component={User.views.ResetPassword} />
          <Route path="confirm-account/:token" component={User.views.ConfirmAccount} />
          <Route path="accept-invite/:token" component={User.views.AcceptInvite} /> */}

          {/* Authorized Routes */}

          {/* <AuthorizedRoute authFunction={isAuthenticated} redirect="/sign-in">

            ** authorized routes go here **

          </AuthorizedRoute> */}
        </Route>
      </Router>
    </Provider>
  )
}
// Routes.propTypes = propTypes

export default Routes
