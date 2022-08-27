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
  ],
  blogList: [
    {
      id: 'b-1',
      title: '别在婚姻里要求“精神交流”',
      desc: '昨天，有友友问我：“你爱看书，你老公不爱看书，你俩怎么实现精神交流呢？” 看到“精神交流”四个字，我顿时失笑！ 也许，在友友心里，夫妻之间就得实...',
      imgUrl: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA116KOs.img?h=348&w=600&m=6&q=60&u=t&o=t&l=f&f=jpg',
      like: 100,
      comment: 20,
      price: '30',
      author: '冬日之恋'
    },
    {
      id: 'b-2',
      title: '啥也不干，賺点小钱',
      desc: '昨没有意外，忙忙碌碌的。 底层的小市民，不管怎么着，每天都在为了吃什么发愁。今天吃完了明天吃什么？周而复始… 老弟打电话来，说工地1万多工资没给，...',
      imgUrl: '',
      like: 92,
      comment: 7,
      price: '14.6',
      author: 'CiCione'
    },
    {
      id: 'b-3',
      title: '收到平台的邀请之后',
      desc: '我们在平台上写文久了，往往会有一些意外的收获。这不，在某条上，昨天我意外收到了平台发来的一个通知：亲爱的用户你好！恭喜你获得今日头条“内容品鉴官...',
      imgUrl: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA117a0e.img?h=348&w=600&m=6&q=60&u=t&o=t&l=f&f=jpg',
      like: 483,
      comment: 72,
      price: '50.4',
      author: '牛牛平常'
    },
    {
      id: 'b-4',
      title: '别在婚姻里要求“精神交流”',
      desc: '昨天，有友友问我：“你爱看书，你老公不爱看书，你俩怎么实现精神交流呢？” 看到“精神交流”四个字，我顿时失笑！ 也许，在友友心里，夫妻之间就得实...',
      imgUrl: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA116KOs.img?h=348&w=600&m=6&q=60&u=t&o=t&l=f&f=jpg',
      like: 100,
      comment: 20,
      price: '30',
      author: '冬日之恋'
    },
    {
      id: 'b-5',
      title: '啥也不干，賺点小钱',
      desc: '昨没有意外，忙忙碌碌的。 底层的小市民，不管怎么着，每天都在为了吃什么发愁。今天吃完了明天吃什么？周而复始… 老弟打电话来，说工地1万多工资没给，...',
      imgUrl: '',
      like: 92,
      comment: 7,
      price: '14.6',
      author: 'CiCione'
    },
    {
      id: 'b-6',
      title: '收到平台的邀请之后',
      desc: '我们在平台上写文久了，往往会有一些意外的收获。这不，在某条上，昨天我意外收到了平台发来的一个通知：亲爱的用户你好！恭喜你获得今日头条“内容品鉴官...',
      imgUrl: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA117a0e.img?h=348&w=600&m=6&q=60&u=t&o=t&l=f&f=jpg',
      like: 483,
      comment: 72,
      price: '50.4',
      author: '牛牛平常'
    },
  ],
});


export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}