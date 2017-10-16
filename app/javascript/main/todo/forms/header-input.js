import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'

const propTypes = {
  input: PropTypes.object.isRequired
}

function HeaderInput({ input: { value, onChange }, meta, ...rest }) {
  return (
    <input
      onChange={ onChange }
      value={ value }
      { ...rest }
    />
  )
}

HeaderInput.propTypes = propTypes

export default compose(
)(HeaderInput)

