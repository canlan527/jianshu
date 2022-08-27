import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ListWrapper,
  ListItem,
  ListItemInfo,
  ItemTitle,
  ItemDesc,
  ListImg,
  ItemInfo,
  ReadMore,
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
    return (
      <ListWrapper>
        {this.props.blogList.map((item) => (
          <ListItem key={item.get("id")}>
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

        <ReadMore>阅读更多</ReadMore>
      </ListWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    blogList: state.getIn(["home", "blogList"]),
  };
};

export default connect(mapStateToProps, null)(List);
