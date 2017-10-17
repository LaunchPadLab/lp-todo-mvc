import { createAction } from 'redux-actions'

export const toggleComplete = createAction('TOGGLE_COMPLETE')
export const setFilter = createAction('SET_FILTER')
export const createItem = createAction('CREATE_ITEM')
export const destroyItem = createAction('DESTROY_ITEM')
export const editItem = createAction('EDIT_ITEM')