import React from 'react'
import PropTypes from 'prop-types'
import TodoListItem from './todo-list-item'

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const defaultProps = {}

function Todolist ({ items }) {
  return (
    <ul className="todo-list">
      { 
        items.map(item => 
          <TodoListItem key={ item.id } item={ item }/>
        )
      }
    </ul>
  )
}

Todolist.propTypes = propTypes

Todolist.defaultProps = defaultProps

export default Todolist
