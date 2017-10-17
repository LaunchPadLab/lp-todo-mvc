import PropTypes from 'prop-types'

export const DISPLAY_FILTER_ALL = 'DISPLAY_FILTER_ALL'
export const DISPLAY_FILTER_ACTIVE = 'DISPLAY_FILTER_ACTIVE'
export const DISPLAY_FILTER_COMPLETED = 'DISPLAY_FILTER_COMPLETED'

export const displayFilter = PropTypes.oneOf([
  DISPLAY_FILTER_ALL,
  DISPLAY_FILTER_ACTIVE,
  DISPLAY_FILTER_COMPLETED,
])

export const todoItem = PropTypes.shape({
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
})