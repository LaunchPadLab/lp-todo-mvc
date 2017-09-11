import React from 'react'
import { TodoHeader } from '../components';
import { TodoList } from '../components';
import { TodoFooter } from '../components';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { selectors } from '../reducer'
import classnames from 'classnames'
import * as actions from '../actions'

function Show() {
  return (
    <section className="todoapp">
      <TodoHeader />
      <section className="main">
        <input type="checkbox" className="toggle-all"
          onChange={ () => { toggleAll() } }/>
        <TodoList />
      </section>
      <TodoFooter />
    </section>
  )
}

export default Show
