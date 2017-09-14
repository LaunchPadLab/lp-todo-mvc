import React from 'react'
import { 
  TodoHeader, 
  TodoList, 
  TodoFooter 
} from '../components';
// import { compose } from 'redux'
// import { connect } from 'react-redux'
// import { selectors } from '../reducer'
// import classnames from 'classnames'
// import * as actions from '../actions'

function Show() {
  return (
    <section className="todoapp">
      <TodoHeader />
      <section className="main">
        <input type="checkbox" className="toggle-all"/>
        <TodoList />
      </section>
      <TodoFooter />
    </section>
  )
}

export default Show
