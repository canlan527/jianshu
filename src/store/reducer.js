import { combineReducers } from 'redux-immutable';
import { headerReducer } from '../common/header/store/'
import { homeReducer } from '../pages/home/store'
import { detailReducer } from '../pages/detail/store';

export default combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
})