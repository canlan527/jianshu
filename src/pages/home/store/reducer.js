import { fromJS } from "immutable";
import * as actionTypes from "./contants";

const defaultState = fromJS({
  cateList: [],
  blogList: [],
  recommendList: [],
  writerList: [],
  blogPage: 1,
  totalPage: 6,
  showScrollTop: false,
  writerPage: 1,
  writerTotalPage: 1,
});

const getHomeData = (state, action) =>
  state.merge({
    cateList: action.cateList,
    blogList: action.blogList,
    recommendList: action.recommendList,
  });

const getWriterListData = (state, action) => (
  state.merge({
    writerList: action.data,
    writerTotalPage: action.writerTotalPage
  })
)
const loadMoreBlog = (state, action) =>
  state.merge({
    blogList: state.get("blogList").concat(action.data), // 将新获取的blogList拼接在state.blogList后
    blogPage: action.nextPage, // 设置页数
  });

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_HOME_DATA:
      return getHomeData(state, action);
    case actionTypes.GET_WRITER_DATA:
      return getWriterListData(state, action);
    case actionTypes.CHANGE_WRITER_PAGE:
      return state.set('writerPage', action.page)
    case actionTypes.LOAD_MORE_BLOG:
      return loadMoreBlog(state, action);
    case actionTypes.CHANGE_SCROLL_TOP_SHOW:
      return state.set("showScrollTop", action.value);
    default:
      return state;
  }
};
