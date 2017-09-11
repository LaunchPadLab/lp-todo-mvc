import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'

const propTypes = {
  input: PropTypes.object.isRequired,
  submitForm: PropTypes.func.isRequired,

}

function ItemInput({ input: { value, onChange, name }, submitForm }) {
  return (
    <input
      name={name}
      value={ value }
      onChange={ onChange }
      onBlur={ submitForm }
      className="editInput"
      autoFocus
    />
  )
}

{/* onBlur={submitForm} */}
ItemInput.propTypes = propTypes



export default compose(
)(ItemInput)
