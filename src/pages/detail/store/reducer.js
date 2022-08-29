import { fromJS } from 'immutable';
import * as actionTypes from './constants';

const defaultState = fromJS({
  title: '',
  content: '',
  showToTop: false,
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_BLOG_DATA:
      return state.merge({
        title: action.title,
        content: action.content,
      });
    case actionTypes.SET_TO_TOP:
      return state.set('showToTop', action.value);
    default:
      return state;
  }
}