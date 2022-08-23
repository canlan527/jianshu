const defaultState = {
  focused: false,
};

export default (state = defaultState, action) => {
  if(action.type = 'search_focus') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.focused = action.value;
    return newState;
  }
  
  return state;
}