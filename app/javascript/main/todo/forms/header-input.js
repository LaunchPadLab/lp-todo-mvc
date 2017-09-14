import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'

const propTypes = {
  input: PropTypes.object.isRequired
}

function HeaderInput({ input: { value, onChange }}) {
  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      onChange={ onChange }
      value={ value }
    />
  )
}

HeaderInput.propTypes = propTypes

export default compose(
)(HeaderInput)

