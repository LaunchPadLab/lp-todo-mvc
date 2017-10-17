import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { compose } from 'redux'
import { AutoSubmitInput } from 'components'

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  form: PropTypes.string.isRequired
}

const defaultProps = {}

function ItemForm ({ handleSubmit }) {
  return (
    <form onSubmit={ handleSubmit }>
      <Field
        name="text"
        component={ AutoSubmitInput }
        className="editInput"
        autoFocus
      />
    </form>
  )
}

ItemForm.propTypes = propTypes

ItemForm.defaultProps = defaultProps

export default compose(
  reduxForm({
    form: 'item-form'
  })
)(ItemForm)