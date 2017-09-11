import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { compose } from 'redux'
import ItemInput from './item-input'

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  form: PropTypes.string.isRequired
}

function ItemForm({ handleSubmit, submit, form }) {
  return (
    <form 
      onSubmit={ handleSubmit }
    >
      <Field
        name="text"
        component={ ItemInput }
        submitForm={ () => submit(form) }/>
    </form>
    
  )
}

ItemForm.propTypes = propTypes



export default compose(
  reduxForm({
    form: 'item-form'  })
)(ItemForm)
