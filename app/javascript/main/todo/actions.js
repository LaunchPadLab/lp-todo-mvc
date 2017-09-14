import { createAction } from 'redux-actions'

export const toggleComplete = createAction('TOGGLE_COMPLETE')
export const setList = createAction('SET_LIST')
export const createItem = createAction('CREATE_ITEM')
export const destroyItem = createAction('DESTROY_ITEM')
export const editItem = createAction('EDIT_ITEM')