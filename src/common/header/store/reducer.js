import * as actionTypes from './constants'

const defaultState = {
  focused: false,
};

export default (state = defaultState, action) => {
  if(action.type = actionTypes.SEARCH_FOCUS) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.focused = action.value;
    return newState;
  }
  
  return state;
}