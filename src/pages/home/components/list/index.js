import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../../store";
import {
  ListWrapper,
  ListItem,
  ListItemInfo,
  ItemTitle,
  ItemDesc,
  ListImg,
  ItemInfo,
  ReadMore,
  ReadNoMore,
} from "./style";

class List extends Component {
  renderListImg(url) {
    if (url) {
      return (
        <ListImg>
          <img className="img" src={url} alt="" />
        </ListImg>
      );
    } else {
      return null;
    }
  }

  render() {
    const { blogList, page, totalPage, handleLoadMore } = this.props;
    let renderReadMore = null;
    if (page >= totalPage) {
      renderReadMore = <ReadNoMore>没有更多了……</ReadNoMore>;
    } else {
      renderReadMore = (
        <ReadMore onClick={() => handleLoadMore(page, totalPage)}>
          阅读更多
        </ReadMore>
      );
    }

    return (
      <ListWrapper>
        {blogList.map((item, index) => (
          <ListItem key={index}>
            <ListItemInfo>
              <ItemTitle>{item.get("title")}</ItemTitle>
              <ItemDesc>{item.get("desc")}</ItemDesc>
              <ItemInfo>
                <div className="item-meta price">
                  <i className="iconfont price">&#xe91f;</i>
                  {item.get("price")}
                </div>
                <div className="item-meta author">{item.get("author")}</div>
                <div className="item-meta">
                  <i className="iconfont comment">&#xe62b;</i>
                  <span className="commentNumber">{item.get("comment")}</span>
                </div>
                <div className="item-meta">
                  <i className="iconfont like">&#xe707;</i>
                  <span className="likeNumber">{item.get("like")}</span>
                </div>
              </ItemInfo>
            </ListItemInfo>
            {this.renderListImg(item.get("imgUrl"))}
          </ListItem>
        ))}
        {/* <ReadMore onClick={() => handleLoadMore(page, totalPage)}>阅读更多</ReadMore> */}
        {renderReadMore}
      </ListWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    blogList: state.getIn(["home", "blogList"]),
    page: state.getIn(["home", "blogPage"]),
    totalPage: state.getIn(["home", "totalPage"]),
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleLoadMore(page, totalPage) {
    console.log(page);
    page++;
    const action = actionCreators.loadMoreAction(page);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
