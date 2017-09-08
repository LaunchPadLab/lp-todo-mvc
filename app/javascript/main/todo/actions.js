export const SET_LIST = 'SET_LIST'

export function setList(list) {
  return {
    type: SET_LIST,
    payload: list
  }
}

export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: item
  }
}
