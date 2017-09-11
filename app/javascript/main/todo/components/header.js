import React from 'react';
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getSet, getSetPropTypes } from '@launchpadlab/lp-utils'
import * as actions from '../actions'

const propTypes = {
  createItem: PropTypes.func.isRequired,
  ...getSetPropTypes('inputValue')
}

function TodoHeader({
  createItem,
  inputValue,
  setInputValue
}) {
   return (
    <header className="header">
      <h1>Todos</h1>
      <form
        onSubmit={ (e) => {
          e.preventDefault()
          createItem(inputValue)
          setInputValue('')
      }}>
        <input className="new-todo"
          placeholder="What needs to be done?"
          onChange={ e => setInputValue(e.target.value) }
          value={ inputValue }/>
      </form>
    </header>
  )
}

TodoHeader.propTypes = propTypes

const mapDispatchToProps = {
  createItem: actions.createItem
}

export default compose(
  connect(null, mapDispatchToProps),
  getSet('inputValue', { initialValues: { inputValue: '' }})
)(TodoHeader)
