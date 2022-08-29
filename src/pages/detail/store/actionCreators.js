import axios from 'axios';
import * as actionTypes from './constants';

const initBlogData = (data) => ({
  type: actionTypes.GET_BLOG_DATA,
  title: data.title,
  content: data.content,
})


export const getBlogData = (id) => {
  return (dispatch) => {
    axios.get(`/api/detail.json?id=${id}`).then(res => {
      const { data } = res.data;
      const action = initBlogData(data)
      dispatch(action)
    })
  }
}

export const setToTopAction = (value) => ({
  type: actionTypes.SET_TO_TOP,
  value,
})