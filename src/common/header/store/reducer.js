import * as actionTypes from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalPage:1,
  mouseIn: false,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', action.value)
    case actionTypes.GET_HOT_WORDS:
      return state.merge({
        'list': action.data,
        'totalPage':  action.totalPage
      })
    case actionTypes.CHANGE_MOUSE_IN:
      return state.set('mouseIn', action.value)
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state;
  }
}