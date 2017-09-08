import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './item'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { selectors } from '../reducer'
import classnames from 'classnames'
import * as actions from '../actions'

const propTypes = {
  items: PropTypes.object.isRequired
}

function TodoList({ items }) {
  return (
    <ul className="todo-list">
      { items.map((item, i) => {
          return <TodoItem key={ i } item={ item }/>
        })
      }
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    items: selectors.items(state),
  }
}

export default compose(
  connect(mapStateToProps)
)(TodoList)
