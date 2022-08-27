import React, { Component } from "react";
import { connect } from "react-redux";
import { RecommendWrapper, RecommendItem } from "./style";

class Recommend extends Component {
  render() {
    return (
      <RecommendWrapper>
        {this.props.list.map((item) => (
          <RecommendItem key={item.get("id")}>
            <img className='img' src={item.get("imgUrl")} alt="" />
          </RecommendItem>
        ))}
      </RecommendWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(["home", "recommendList"]),
  };
};

export default connect(mapStateToProps, null)(Recommend);
