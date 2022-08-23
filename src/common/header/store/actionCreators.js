import * as actionTypes from './constants'

export const searchFocusAction = (value) => ({
  type: actionTypes.SEARCH_FOCUS,
  value,
})