import { api } from './api'

export function toggleCompleteRequest(item) {
  return api.patch(`/todos/${ item.id }/toggle_complete`)
}

export function editItemRequest({ id, text }) {
  const payload = {
    text: text
  }
  return api.patch(`/todos/${ id }/update_text`, { todo: payload })
}

export function createItemResponse({ text }) {
  const payload = {
    text: text,
    completed: false
  }
  return api.post('/todos', { todo: payload })
}

export function destroyItemRequest({ id }) {
  return api.destroy(`/todos/${ id }`)
}