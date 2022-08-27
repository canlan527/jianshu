import axios from 'axios';
import * as actionTypes from './contants';


const getHomeData = (data) => ({
  type: actionTypes.GET_HOME_DATA,
  cateList: data.cateList,
  blogList: data.blogList,
  recommendList: data.recommendList,
  writerList: data.writerList,
})

export const fetchData = () => {
  return (dispatch) => {
    axios.get('/api/homeData.json').then(res => {
      const {data} = res.data;
      const action = getHomeData(data);
      dispatch(action);
    })
  }
}