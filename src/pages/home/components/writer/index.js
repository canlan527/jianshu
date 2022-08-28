import React, { PureComponent } from "react";
import {connect} from 'react-redux';
import {
  WriterWrapper,
  WriterHeader,
  WriterList,
  WriterItem,
  WriterInfo,
  WriterImg,
  WriterFollow,
  WriterFooter,
} from "./style";

class Writer extends PureComponent {
  render() {
  const {list}  = this.props;
  return (
      <WriterWrapper>
        <WriterHeader>推荐作者</WriterHeader>
        <WriterList>
          {list.map(item => (
            <WriterItem key={item.get("id")}>
              <WriterImg>
                <img src={item.get("avatar")} alt="" className="img" />
              </WriterImg>
              <WriterInfo>
                <div className="name">{item.get("name")}</div>
                <div className="desc">写了{item.get('TotalWords')}字 · {item.get('like')}喜欢</div>
              </WriterInfo>
              <WriterFollow>+ 关注</WriterFollow>
            </WriterItem>
          ))}
        </WriterList>
        <WriterFooter>查看全部 &gt;</WriterFooter>
      </WriterWrapper>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'writerList'])
})

export default connect(mapState, null)(Writer)