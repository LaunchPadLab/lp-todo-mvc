import React from 'react'
import PropTypes from 'prop-types'
import { TodoItem } from '../components'
import { compose } from 'redux'
import { filter } from 'lodash'
import { connect } from 'react-redux'
import { selectors } from '../reducer'
import { onMount } from '@launchpadlab/lp-utils'
import { LoadingIndicator }from '../../../components'
import { selectors as apiSelectors } from '@launchpadlab/lp-redux-api'

import * as apiActions from '../../api-actions'

const propTypes = {
  items: PropTypes.array.isRequired,
  activeItems: PropTypes.array.isRequired,
  completedItems: PropTypes.array.isRequired,
  list: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired
}

function TodoList ({ 
  items, 
  list, 
  activeItems, 
  completedItems,
  isLoading 
}) {
  return (
      <section className="main">
        <input type="checkbox" className="toggle-all"/>
    <div className="loading-indicator">
      { isLoading &&
        <LoadingIndicator />
      }
      <ul className="todo-list">
        { list === 'all' &&
          items.map((item, i) => {
            return <TodoItem key={ i } item={ item }/>
          })
        }
        { list === 'active' &&
          activeItems.map((item, i) => {
            return <TodoItem key={i} item={item} />
          })
        }
        { list === 'completed' &&
          completedItems.map((item, i) => {
            return <TodoItem key={i} item={item} />
          })
        }
      </ul>
    </div>
      </section>
  )
}

TodoList.propTypes = propTypes

const mapStateToProps = (state) => {
  return {
    list: selectors.list(state),
    items: selectors.items(state),
    activeItems: filter(selectors.items(state), { completed: false }),
    completedItems: filter(selectors.items(state), {completed: true}),
    isLoading: apiSelectors.isLoading(state, apiActions.REQ_FETCH_TODOS)
  }
}

const mapDispatchToProps = {
  fetchTodos: apiActions.fetchTodos
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  onMount('fetchTodos')
)(TodoList)
