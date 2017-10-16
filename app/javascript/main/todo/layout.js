import React from 'react'
import PropTypes from 'prop-types'
import { 
  TodoHeader, 
  TodoFooter 
} from './components'

const propTypes = {
  children: PropTypes.node,
}

const defaultProps = {}

function Layout ({ children }) {
  return (
    <section className="todoapp">
      <TodoHeader />
        { children }
      <TodoFooter />
    </section>
  )
}

Layout.propTypes = propTypes

Layout.defaultProps = defaultProps

export default Layout
