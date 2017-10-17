import React from 'react';
import PropTypes from 'prop-types'
import { HeaderForm } from '../forms'
import * as effects from 'effects'

const propTypes = {
  onCreate: PropTypes.func,
}

const defaultProps = {}

function HeaderInput ({ onCreate }) {
   return (
    <HeaderForm
       onSubmit={ effects.createItem }
       onSubmitSuccess={ (item, _, { reset }) => {
        onCreate(item)
        reset()
       }}
    />
  )
}

HeaderInput.propTypes = propTypes

HeaderInput.defaultProps = defaultProps

export default HeaderInput
