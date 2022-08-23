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
