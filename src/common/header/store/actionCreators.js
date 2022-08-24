import axios from "axios";
import { fromJS } from "immutable";
import * as actionTypes from "./constants";

export const searchFocusAction = (value) => ({
  type: actionTypes.SEARCH_FOCUS,
  value,
});

const initHotwordAction = (data) => ({
  type: actionTypes.GET_HOT_WORDS,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

// 获取热门搜索接口
export const getHotwords = () => {
  return (dispatch) => {
    axios.get("/api/hotword.json").then((res) => {
      const { data } = res.data;
      console.log(data);
      const action = initHotwordAction(data);
      dispatch(action);
    });
  };
};

export const mouseInAction = (value) => ({
  type: actionTypes.CHANGE_MOUSE_IN,
  value,
})

export const changePageAction = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
})