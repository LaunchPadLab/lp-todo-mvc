import React from 'react';
import PropTypes from 'prop-types'
import { ItemForm } from '../forms'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getSetPropTypes, toggle } from '@launchpadlab/lp-utils'
import classnames from 'classnames'
import * as effects from '../../effects'
import * as actions from '../actions'

const propTypes = {
  item: PropTypes.object.isRequired,
  editItem: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  destroyItem: PropTypes.func.isRequired,
  editingActive: PropTypes.bool,
  setEditing: PropTypes.func,
  ...getSetPropTypes('inputValue')
}

function TodoItem({
  item,
  editItem,
  destroyItem,
  toggleComplete,
  editingActive,
  setEditing,
}) {
  return (
    <li className={classnames({ 'completed': item.completed })}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={item.completed}
          onClick={
            () => effects.toggleCompleteRequest(item)
                         .then(toggleComplete)}/>
        {!editingActive &&
          <label onDoubleClick={() => setEditing(true)}>
            {item.text}
          </label>
        }
      </div>

      {editingActive &&
        <ItemForm
          onSubmit={ effects.editItemRequest }
          onSubmitSuccess={
            (item) => {
              editItem(item)
              setEditing(false) }}
          initialValues={{ text: item.text, id: item.id }}
        />}


      {!editingActive &&
        <button
          className="destroy"
          onClick={ 
            () => effects.destroyItemRequest({ id: item.id })
                         .then(destroyItem)}>
        </button>
      }
    </li>
  )
}

TodoItem.propTypes = propTypes

const mapDispatchToProps = {
  toggleComplete: actions.toggleComplete,
  destroyItem: actions.destroyItem,
  editItem: actions.editItem,
}

export default compose(
  connect(null, mapDispatchToProps),
  toggle('editing')
)(TodoItem)