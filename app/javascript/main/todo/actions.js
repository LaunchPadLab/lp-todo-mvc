export const SET_LIST = 'SET_LIST'
export const CREATE_ITEM = 'CREATE_ITEM'
export const EDIT_ITEM = 'EDIT_ITEM'
export const TOGGLE_ITEM_CHECK= 'TOGGLE_ITEM_CHECK'
export const DESTROY_ITEM = 'DESTROY_ITEM'

export function setList(list) {
  return {
    type: SET_LIST,
    payload: list
  }
}

export function createItem(text) {
  return {
    type: CREATE_ITEM,
    payload: { text }
  }
}

export function editItem(id, text) {
  return {
    type: EDIT_ITEM,
    payload: { id, text }
  }
}

export function toggleItemCheck(id) {
  return {
    type: TOGGLE_ITEM_CHECK,
    payload: { id }
  }
}

export function destroyItem(item) {
  return {
    type: DESTROY_ITEM,
    payload: item
  }
}
