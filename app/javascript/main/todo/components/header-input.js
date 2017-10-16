import React from 'react';
import PropTypes from 'prop-types'
import { HeaderForm } from '../forms'
import * as effects from '../../effects'

const propTypes = {
  createItem: PropTypes.func,
}

const defaultProps = {}

function HeaderInput ({ createItem }) {
   return (
    <HeaderForm
       onSubmit={ effects.createItemResponse }
       onSubmitSuccess={ (item, _, { reset }) => {
        createItem(item)
        reset()
       }}
    />
  )
}

HeaderInput.propTypes = propTypes

HeaderInput.defaultProps = defaultProps

export default HeaderInput
