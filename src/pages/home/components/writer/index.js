import React, { PureComponent } from "react";
import { actionCreators } from "../../store";
import { connect } from "react-redux";
import ChangePage from "../../../../common/changePage";
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
    const { list, page, totalPage, handlePageChange } = this.props;
    const newList = list.toJS();
    let renderList = [];

    if (newList.length) {
      for (let i = (page - 1) * 5; i < page * 5; i++) {
        if (i < newList.length) {
          renderList.push(
            <WriterItem key={newList[i].id}>
              <WriterImg>
                <img src={newList[i].avatar} alt="" className="img" />
              </WriterImg>
              <WriterInfo>
              <div className="name">{newList[i].name}</div>
              <div className="desc">
                写了{newList[i].TotalWords}字 · {newList[i].like}喜欢
              </div>
            </WriterInfo>
              <WriterFollow>+ 关注</WriterFollow>
            </WriterItem>
          );
        }
      }
    }

    return (
      <WriterWrapper>
        <WriterHeader>
          推荐作者
          <div onClick={() => handlePageChange(page, totalPage, this.changePageRef)}>
            <ChangePage ref={(dom) => (this.changePageRef = dom)}></ChangePage>
          </div>
        </WriterHeader>
        <WriterList>
          {renderList}
        </WriterList>
        <WriterFooter>查看全部 &gt;</WriterFooter>
      </WriterWrapper>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(["home", "writerList"]),
  page: state.getIn(["home", "writerPage"]),
  totalPage: state.getIn(["home", "writerTotalPage"]),
});

const mapDispatch = (dispatch) => ({
  handlePageChange(page, totalPage, changePageRef) {
    console.log(page, totalPage, changePageRef);
    changePageRef.handleChange();
    // 处理page totalPage
    page = page < totalPage ? ++page : 1;
    const action = actionCreators.changeWriterPage(page)
    dispatch(action)
  },
});

export default connect(mapState, mapDispatch)(Writer);
