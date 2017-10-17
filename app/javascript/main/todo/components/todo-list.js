import React from 'react'
import PropTypes from 'prop-types'
import TodoListItem from './todo-list-item'

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

const defaultProps = {}

function Todolist ({ 
  items,
  onToggle,
  onEdit,
  onDelete,
}) {
  return (
    <ul className="todo-list">
      { 
        items.map(item => 
          <TodoListItem 
            key={ item.id } 
            item={ item }
            onToggle={ onToggle }
            onEdit={ onEdit }
            onDelete={ onDelete }
          />
        )
      }
    </ul>
  )
}

Todolist.propTypes = propTypes

Todolist.defaultProps = defaultProps

export default Todolist
