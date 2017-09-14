import React from 'react';
import PropTypes from 'prop-types'
import { HeaderForm } from '../forms'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as effects from '../../effects'
import * as actions from '../actions'

const propTypes = {
  createItem: PropTypes.func,
}

function TodoHeader({
  createItem
}) {
   return (
    <header className="header">
      <h1>Todos</h1>
      <HeaderForm
         onSubmit={ effects.createItemResponse }
         onSubmitSuccess={ 
          (item, _, { reset }) => {
            createItem(item)
            reset()
         }}
      />
    </header>
  )
}

TodoHeader.propTypes = propTypes

const mapDispatchToProps = {
  createItem: actions.createItem
}

export default compose(
  connect(null, mapDispatchToProps)
)(TodoHeader)
