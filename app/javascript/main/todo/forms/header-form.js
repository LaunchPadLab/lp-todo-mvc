import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { compose } from 'redux'
import { Input } from 'components'

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  form: PropTypes.string.isRequired
}

const defaultProps = {}

function HeaderForm ({ handleSubmit }) {
  return (
    <form onSubmit={ handleSubmit }>
      <Field
        name="text"
        component={ Input }
        className="new-todo"
        placeholder="What needs to be done?"
      />
    </form>
  )
}

HeaderForm.propTypes = propTypes

HeaderForm.defaultProps = defaultProps

export default compose(
  reduxForm({
    form: 'header-form'
  })
)(HeaderForm)