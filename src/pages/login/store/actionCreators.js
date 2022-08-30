import axios from "axios";
import * as actionTypes from './constants'

const changeLoginState = (account, status) => ({
  type: actionTypes.LOGIN,
  username: account,
  status,
})

export const login = (account, status) => {
  return (dispatch) => {
    axios.get('/api/login.json').then(res => {
      const { data } = res.data;
      const action = changeLoginState(account, status);
      dispatch(action)
    })
  }
}

export const logout = () => ({
  type: actionTypes.LOGOUT, 
  value: false,
})