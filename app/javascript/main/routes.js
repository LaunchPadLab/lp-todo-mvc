import React from 'react'
import { Route, Router, browserHistory, IndexRedirect } from 'react-router'
// import initializeStore from './store'
// import { Provider } from 'react-redux'
// import { syncHistoryWithStore } from 'react-router-redux'
// import Layout from './layout'
import { routeHooks } from 'utils'
import { routes as TodoRoutes } from './todo'
// import { routes as ExternalReputationRoutes } from './external-reputation'
// import { routes as PatientIndexRoutes } from './patient-index'
// import { routes as PatientDetailsRoutes } from './patient-details'
// import { routes as PatientIntakeRoutes } from './patient-intake'
// import { routes as PatientSentimentRoutes } from './patient-sentiment'
// import { routes as StyleguideRoutes } from './styleguide'
// import { routes as SurveyAdministrationRoutes } from './survey-administration'
// import { routes as SurveyRoutes } from './surveys'
// import { routes as TabletRoutes } from './tablet'
// import { routes as TaskRoutes } from './tasks'
// import { routes as UserRoutes } from './user'
// import { PATIENT_SENTIMENT_ROUTE } from 'config'
// import '../../scss/application.scss'

// const store = initializeStore()
/*
 * Make the routing information available in the store
 */
// const history = syncHistoryWithStore(browserHistory, store)

const Routes = (
  /*
   * React Redux `Provider` component to enable the `connect` function to
   * connect to the Redux store.
   */
  // <Provider store={ store }>
  // <Router history={ history } onUpdate={ routeHooks.onUpdate.bind(null, store) }>
  
    <Router>
      {/* Components get passed down as children of Layout */}
      {/* <Route path="/" component={ Layout }> */}
      <Route path="/">
        {/* <IndexRedirect to={PATIENT_SENTIMENT_ROUTE} /> */}
        { TodoRoutes }
        {/* { ExternalReputationRoutes }
        { PatientIndexRoutes }
        { PatientDetailsRoutes }
        { PatientIntakeRoutes }
        { PatientSentimentRoutes }
        { StyleguideRoutes }
        { SurveyAdministrationRoutes }
        { SurveyRoutes }
        { TabletRoutes }
        { TaskRoutes }
        { UserRoutes } */}
      </Route>
    </Router>
  // </Provider>
)

export default Routes
