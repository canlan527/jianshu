import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './contants';


const getHomeData = (data) => ({
  type: actionTypes.GET_HOME_DATA,
  cateList: data.cateList,
  blogList: data.blogList,
  recommendList: data.recommendList,
})

// 分页
const getBlogData = (data, nextPage) => ({
  type: actionTypes.LOAD_MORE_BLOG,
  data: fromJS(data),
  nextPage,
})

const getWriterList = (data) => ({
  type: actionTypes.GET_WRITER_DATA,
  data: fromJS(data),
  writerTotalPage: Math.ceil(data.length / 5),
})

// 获取首页各组件的数据
export const fetchData = () => {
  return (dispatch) => {
    axios.get('/api/homeData.json').then(res => {
      const {data} = res.data;
      const action = getHomeData(data);
      dispatch(action);
    })
  }
}

// 首页列表发送加载更多请求
export const loadMoreAction = (page) => {
  return (dispatch) => {
    axios.get(`./api/blogList.json?page=${page}`).then(res => {
      const {data} = res.data;
      const action = getBlogData(data, page)
      dispatch(action)
    })
  }
}

// 处理滚动到顶部
export const changeScrollTop = (value) => ({
  type: actionTypes.CHANGE_SCROLL_TOP_SHOW,
  value,
})

// 获取作者列表数据
export const fetchWriterData = () => {
  return (dispatch) => {
    axios.get('/api/writerList.json').then(res => {
      const {data} = res.data;
      const action = getWriterList(data);
      dispatch(action)
    })
  }
}

// 作者区域分页处理
export const changeWriterPage = (page) =>({
  type: actionTypes.CHANGE_WRITER_PAGE,
  page,
});
