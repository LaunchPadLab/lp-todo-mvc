import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as formActions from 'redux-form'

const propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  submit: PropTypes.func.isRequired,
}

const defaultProps = {}

function AutoSubmitInput ({ 
  input: { value, onChange }, 
  meta: { form },
  submit,
  ...rest
}) {
  return (
    <input
      onChange={ onChange }
      value={ value }
      onBlur={ () => submit(form) }
      { ...rest }
    />
  )
}

AutoSubmitInput.propTypes = propTypes

AutoSubmitInput.defaultProps = defaultProps

const mapDispatchToProps = {
  submit: formActions.submit,
}

export default compose(
  connect(null, mapDispatchToProps),
)(AutoSubmitInput)

