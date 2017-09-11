import React from 'react';
import PropTypes from 'prop-types'
import { ItemForm }from '../forms'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getSetPropTypes, toggle } from '@launchpadlab/lp-utils'
import classnames from 'classnames'
import * as actions from '../actions'

const propTypes = {
  item: PropTypes.object.isRequired,
  editItem: PropTypes.func.isRequired,
  toggleItemCheck: PropTypes.func.isRequired,
  destroyItem: PropTypes.func.isRequired,
  editingActive: PropTypes.bool,
  setEditing: PropTypes.func,
  ...getSetPropTypes('inputValue')
}

function TodoItem({
  item,
  editItem,
  destroyItem,
  toggleItemCheck,
  editingActive,
  setEditing,
}) {
  return (
    <li className={ classnames({'completed': item.completed }) }>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={ item.completed }
          onClick={ () => toggleItemCheck(item.id) }/>
          { !editingActive &&
              <label onDoubleClick={ () => setEditing(true) }>
               { item.text }
              </label>
          }
      </div>

      { editingActive &&
        <ItemForm
          onSubmit={
            ({ text }) => {
              editItem(item.id, text)
              setEditing(false)
            }}
          initialValues={{ text: item.text }}
      />}


        { !editingActive &&
          <button
            className="destroy"
            onClick={ () => destroyItem(item) }>
          </button>
        }
    </li>
  )
}

  TodoItem.propTypes = propTypes

  const mapDispatchToProps = {
    toggleItemCheck: actions.toggleItemCheck,
    destroyItem: actions.destroyItem,
    editItem: actions.editItem,
  }

  export default compose(
    connect(null, mapDispatchToProps),
    toggle('editing')
  )(TodoItem)
