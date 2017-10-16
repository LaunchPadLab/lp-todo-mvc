import React from 'react'
import {
  // IndexRedirect,
  // IndexRoute,
  Route, 
  Router, 
  browserHistory
} from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import initializeStore from './store'
import { views } from './todo'
// import { hasDirtyForm } from 'utils'
// import { isAuthenticated } from 'lp-requests'

const TodoShow = views.TodoShow

const store = initializeStore()

/*
 * Make the routing information available in the store
 */
const history = syncHistoryWithStore(browserHistory, store)

function Routes () {


/*
 * Initialize Store
 */
  return (
    <Provider store={ store }>
      <Router history={ history }>
        <Route path="/" component={ TodoShow }>
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

export default Routes
