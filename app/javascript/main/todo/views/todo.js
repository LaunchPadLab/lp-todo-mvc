import React from 'react'
import PropTypes from 'prop-types'
import { HeaderInput, FilterSelector, TodoList } from '../components'
import { compose } from 'redux'
import { filter } from 'lodash'
import { connect } from 'react-redux'
import { selectors } from '../reducer'
import { onMount } from '@launchpadlab/lp-utils'
import { LoadingIndicator }from 'components'
import { selectors as apiSelectors } from '@launchpadlab/lp-redux-api'

import * as apiActions from 'api-actions'
import * as actions from '../actions'

const propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  createItem: PropTypes.func.isRequired,
  displayedItems: PropTypes.array.isRequired,
  completedItems: PropTypes.array.isRequired,
  activeItems: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

const defaultProps = {}

function Todo ({ 
  isLoading,
  displayedItems,
  completedItems,
  activeItems,
  filter,
  setFilter,
  createItem,
}) {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>Todos</h1>
        <HeaderInput createItem={ createItem } />
      </header>
      <section className="main">
        {
          isLoading ?
            <LoadingIndicator />
          :
            <TodoList items={ displayedItems } />
        }
      </section>
      <div className="footer">
        <span className="todo-count">
          <strong>{ activeItems.length }</strong> items left
        </span>
        <FilterSelector filter={ filter } setFilter={ setFilter } />
        { 
          completedItems.length > 0 &&
          <button
            className="clear-completed"
            onClick={ () => console.warn('TODO') }
          >
            Clear completed
          </button>
        }
      </div>
      </section>
  )
}

Todo.propTypes = propTypes

Todo.defaultProps = defaultProps

function mapStateToProps (state) {
  return {
    numItemsRemaining: filter(selectors.items(state), {completed: false}).length,
    filter: selectors.filter(state),
    activeItems: selectors.activeItems(state),
    completedItems: selectors.completedItems(state),
    displayedItems: selectors.displayedItems(state),
    isLoading: apiSelectors.isLoading(state, apiActions.REQ_FETCH_TODOS)
  }
}

const mapDispatchToProps = {
  fetchTodos: apiActions.fetchTodos,
  setFilter: actions.setFilter,
  createItem: actions.createItem,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  onMount('fetchTodos'),
)(Todo)
