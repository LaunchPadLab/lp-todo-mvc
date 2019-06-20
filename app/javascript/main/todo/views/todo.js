import React from 'react'
import PropTypes from 'prop-types'
import { HeaderInput, FilterSelector, TodoList } from '../components'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { selectors } from '../reducer'
import { onMount } from '@launchpadlab/lp-utils'
import { LoadingIndicator }from 'components'
import { selectors as apiSelectors } from '@launchpadlab/lp-redux-api'
import * as apiActions from 'api-actions'
import * as actions from '../actions'
import * as effects from 'effects'
import * as Types from 'types'

const propTypes = {
  filter: Types.displayFilter.isRequired,
  setFilter: PropTypes.func.isRequired,
  createItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  destroyItem: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  displayedItems: PropTypes.arrayOf(Types.todoItem).isRequired,
  completedItems: PropTypes.arrayOf(Types.todoItem).isRequired,
  activeItems: PropTypes.arrayOf(Types.todoItem).isRequired,
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
  editItem,
  destroyItem,
  toggleComplete,
}) {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>Todos</h1>
        <HeaderInput onCreate={ createItem } />
      </header>
      <section className="main">
        {
          isLoading ?
            <LoadingIndicator />
          :
            <TodoList
              items={ displayedItems }
              onToggle={ toggleComplete }
              onEdit={ editItem }
              onDelete={ destroyItem }
            />
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
            onClick={ () =>
              completedItems.forEach(item => 
                effects.destroyItem(item).then(() => destroyItem(item.id))
              )
            }
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
  toggleComplete: actions.toggleComplete,
  destroyItem: actions.destroyItem,
  editItem: actions.editItem,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  onMount('fetchTodos'),
)(Todo)
