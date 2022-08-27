import React, { Component } from "react";
import {connect} from 'react-redux';
import { CateWrapper, CateItem, CateImg, SeeMore } from "./style";

class Category extends Component {
  render() {
    return (
      <CateWrapper>
        {
          this.props.cateList.map(item => (
            <CateItem key={item.get('id')}>
              <CateImg>
                <img
                  className="img"
                  src={item.get('imgUrl')}
                />
              </CateImg>
              {item.get('text')}
            </CateItem>
          ))
        }
        <SeeMore> &gt;&gt;&gt; 查看更多分类专栏.. </SeeMore>
      </CateWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cateList: state.getIn(['home','cateList'])
  }
}

export default connect(mapStateToProps, null)(Category);