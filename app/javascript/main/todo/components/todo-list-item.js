import React from 'react';
import PropTypes from 'prop-types'
import { ItemForm } from '../forms'
import { compose } from 'redux'
import { toggle, togglePropTypes } from '@launchpadlab/lp-hoc'
import classnames from 'classnames'
import * as effects from 'effects'

const propTypes = {
  item: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  editingActive: PropTypes.bool,
  setEditing: PropTypes.func,
  ...togglePropTypes('editing'),
}

const defaultProps = {}

function TodoItem ({
  item: {
    id,
    text,
    completed,
  },
  onToggle,
  onEdit,
  onDelete,
  editing,
  setEditing,
}) {
  return (
    <li className={ classnames({ 'completed': completed }) }>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={ completed }
          onClick={ () => effects.toggleComplete({ id }).then(() => onToggle(id)) }
        />
        { 
          !editing &&
          <label onDoubleClick={ () => setEditing(true) }>
            { text }
          </label>
        }
      </div>
      {
        editing &&
        <ItemForm
          onSubmit={ effects.editItem }
          onSubmitSuccess={ item => {
            onEdit(item)
            setEditing(false) 
          }}
          initialValues={{ text, id }}
        />
      }
      {
        !editing &&
        <button
          className="destroy"
          onClick={ () => effects.destroyItem({ id }).then(() => onDelete(id)) }
        >
        </button>
      }
    </li>
  )
}

TodoItem.propTypes = propTypes

TodoItem.defaultProps = defaultProps

export default compose(
  toggle('editing'),
)(TodoItem)