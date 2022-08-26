import { fromJS } from 'immutable';

const defaultState = fromJS({
  cateList: [
    {
      id: 1,
      text: '简单摄影',
      imgUrl: 'https://img.zcool.cn/community/0147f9596c6d58a8012193a30cb880.jpg@1280w_1l_2o_100sh.jpg'
    },
    {
      id: 2,
      text: '复杂摄影',
      imgUrl: 'https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/2cf5e0fe9925bc31e55ee74050df8db1ca1370e3.jpg'
    },
  ]
});


export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}