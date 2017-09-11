import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './item'
import { compose } from 'redux'
import { filter } from 'lodash'
import { connect } from 'react-redux'
import { selectors } from '../reducer'

const propTypes = {
  items: PropTypes.array.isRequired,
  activeItems: PropTypes.array.isRequired,
  completedItems: PropTypes.array.isRequired,
  list: PropTypes.string.isRequired
}

function TodoList({ items, list, activeItems, completedItems }) {
  return (
    <ul className="todo-list">
      { list === 'all' &&
        items.map((item, i) => {
          return <TodoItem key={ i } item={ item }/>
        })
      }
      { list === 'active' &&
        activeItems.map((item, i) => {
          return <TodoItem key={i} item={item} />
        })
      }
      { list === 'completed' &&
        completedItems.map((item, i) => {
          return <TodoItem key={i} item={item} />
        })
      }
    </ul>
  )
}

TodoList.propTypes = propTypes

const mapStateToProps = (state) => {
  return {
    list: selectors.list(state),
    items: selectors.items(state),
    activeItems: filter(selectors.items(state), { completed: false }),
    completedItems: filter(selectors.items(state), {completed: true})
  }
}

export default compose(
  connect(mapStateToProps)
)(TodoList)
