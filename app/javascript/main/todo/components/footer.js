import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { selectors } from '../reducer'
import { filter } from 'lodash'
import classnames from 'classnames'
import * as actions from '../actions'

const propTypes = {
  completedCount: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  list: PropTypes.string.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  setList: PropTypes.func.isRequired
}
      
const defaultProps = {
  completedCount: 0,
  onClearCompleted: () => {}
}

function TodoFooter ({
  completedCount,
  count,
  list,
  onClearCompleted,
  setList
}) {
  return (
    <div className="footer">
      <span className="todo-count">
        <strong>{ count }</strong> items left
      </span>
      <ul className="filters">
        <li>
          <a href="#/"
            className={ classnames({'selected': list === 'all' }) }
            onClick={ () => setList('all') }>
            All
          </a>
        </li>
        <li>
          <a href="#/active"
            className={ classnames({'selected': list === 'active' }) }
            onClick={ () => setList('active') }>
            Active
          </a>
        </li>
        <li>
          <a href="#/completed"
            className={ classnames({'selected': list === 'completed' }) }
            onClick={ () => setList('completed') }>
            Completed
          </a>
        </li>
      </ul>
      { completedCount > 0
        ? <button
            className="clear-completed"
            onClick={ onClearCompleted }>
            Clear completed
          </button>
        : <span></span>
      }
    </div>
  )
}

TodoFooter.propTypes = propTypes
TodoFooter.defaultProps = defaultProps

const mapStateToProps = (state) => {
  return {
    list: selectors.list(state),
    count: filter(selectors.items(state), {completed: false}).length
  }
}

const mapDispatchToProps = {
  setList: actions.setList
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(TodoFooter)
