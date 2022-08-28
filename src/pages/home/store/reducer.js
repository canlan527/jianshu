import { fromJS } from 'immutable';
import * as actionTypes from './contants';

const defaultState = fromJS({
  cateList: [],
  blogList: [],
  recommendList: [],
  writerList: [],
  blogPage: 1,
  totalPage: 6
});


export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.GET_HOME_DATA:
      return state.merge({
        cateList: action.cateList,
        blogList: action.blogList,
        recommendList: action.recommendList,
        writerList: action.writerList,
      });
    case actionTypes.LOAD_MORE_BLOG:
      return state.merge({
        blogList: state.get('blogList').concat(action.data), // 将新获取的blogList拼接在state.blogList后
        blogPage: action.nextPage, // 设置页数
      });
    default:
      return state;
  }
}
