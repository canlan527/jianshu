import * as actionTypes from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
});

export default (state = defaultState, action) => {
  if(action.type = actionTypes.SEARCH_FOCUS) {
    return state.set('focused', action.value)
  }
  
  return state;
}