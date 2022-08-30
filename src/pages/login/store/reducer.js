import {fromJS} from 'immutable';
import * as actionTypes from './constants';

const defaultState = fromJS({
  username: '',
  loginStatus: false,
})

const loginfn = (state, action) => {
  console.log(action.status);
  return state.merge({
    username: action.account,
    loginStatus: action.status,
  });
}

export default (state = defaultState, action) => {
  console.log(action);
  switch(action.type) {
    case actionTypes.LOGIN: 
      return loginfn(state, action);
    case actionTypes.LOGOUT:
      return state.set('loginStatus', action.value)
    default:
      return state;
  }
}
