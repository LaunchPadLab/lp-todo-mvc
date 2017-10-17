import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
}

const defaultProps = {}

function Input ({ 
  input: { value, onChange }, 
  meta, // eslint-disable-line no-unused-vars
  ...rest
}) {
  return (
    <input
      onChange={ onChange }
      value={ value }
      { ...rest }
    />
  )
}

Input.propTypes = propTypes

Input.defaultProps = defaultProps

export default Input

