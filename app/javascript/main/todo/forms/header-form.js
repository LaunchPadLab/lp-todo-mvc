import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { compose } from 'redux'
import HeaderInput from './header-input'

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  form: PropTypes.string.isRequired
}

function HeaderForm({ handleSubmit }) {
  return (
    <form onSubmit={ handleSubmit }>
      <Field
        name="text"
        label={ false }
        component={ HeaderInput }
        className="new-todo"
        placeholder="What needs to be done?"
      />
    </form>
  )
}

HeaderForm.propTypes = propTypes

export default compose(
  reduxForm({
    form: 'header-form'
  })
)(HeaderForm)