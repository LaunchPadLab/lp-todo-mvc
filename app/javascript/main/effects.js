import { api } from './api'

export function toggleComplete ({ id }) {
  return api.patch(`/todos/${ id }/toggle_complete`)
}

export function editItem ({ id, text }) {
  return api.patch(`/todos/${ id }/update_text`, { todo: { text } })
}

export function createItem ({ text }) {
  return api.post('/todos', { todo: { text, completed: false } })
}

export function destroyItem ({ id }) {
  return api.destroy(`/todos/${ id }`)
}