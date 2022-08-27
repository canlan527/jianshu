import { fromJS } from 'immutable';
import * as actionTypes from './contants';

const defaultState = fromJS({
  cateList: [],
  blogList: [],
  recommendList: [],
  writerList: [],
});


export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.GET_HOME_DATA:
      return state.merge({
        cateList: action.cateList,
        blogList: action.blogList,
        recommendList: action.recommendList,
        writerList: action.writerList,
      })
    default:
      return state;
  }
}