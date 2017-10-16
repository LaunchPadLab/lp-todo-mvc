import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired
}
      
const defaultProps = {}

function FilterSelector ({ filter, setFilter }) {
  return (
    <div>
      <ul className="filters">
        <li>
          <a
            href="#"
            className={ classnames({ 'selected': filter === 'all' }) }
            onClick={ () => setFilter('all') }
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#"
            className={ classnames({ 'selected': filter === 'active' }) }
            onClick={ () => setFilter('active') }
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#"
            className={ classnames({ 'selected': filter === 'completed' }) }
            onClick={ () => setFilter('completed') }
          >
            Completed
          </a>
        </li>
      </ul>
    </div>
  )
}

FilterSelector.propTypes = propTypes
FilterSelector.defaultProps = defaultProps

export default FilterSelector
