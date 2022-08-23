import * as actionTypes from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  list: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', action.value)
    case actionTypes.GET_HOT_WORDS:
      return state.set('list', action.data)
    default:
      return state;
  }
    
  // if(action.type === actionTypes.SEARCH_FOCUS) {
  //   return state.set('focused', action.value)
  // }
  // if(action.type === actionTypes.GET_HOT_WORDS) {
  //   return state.set('list', action.data)
  // }
  
  return state;
}