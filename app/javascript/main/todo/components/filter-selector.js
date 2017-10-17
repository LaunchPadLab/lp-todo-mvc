import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import * as Types from 'types'

const propTypes = {
  filter: Types.displayFilter.isRequired,
  setFilter: PropTypes.func.isRequired
}
      
const defaultProps = {}

function FilterSelector ({ filter, setFilter }) {
  // eslint-disable-next-line react/prop-types
  function FilterButton ({ value, ...rest }) { 
    return (
      <a
        className={ classnames({ 'selected': filter === value }) }
        onClick={ () => setFilter(value) }
        { ...rest }
      />
    )
  }
  return (
    <div>
      <ul className="filters">
        <li>
          <FilterButton value={ Types.DISPLAY_FILTER_ALL }> All </FilterButton>
        </li>
        <li>
          <FilterButton value={ Types.DISPLAY_FILTER_ACTIVE }> Active </FilterButton>
        </li>
        <li>
          <FilterButton value={ Types.DISPLAY_FILTER_COMPLETED }> Completed </FilterButton>
        </li>
      </ul>
    </div>
  )
}

FilterSelector.propTypes = propTypes

FilterSelector.defaultProps = defaultProps

export default FilterSelector
