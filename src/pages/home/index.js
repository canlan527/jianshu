import React, { Component } from "react";
import { connect } from 'react-redux';
import { actionCreators } from './store'
import Category from "./components/category";
import List from "./components/list";
import Writer from "./components/writer";
import Recommend from "./components/recommend";

import { HomeWrapper, HomLeftSection, HomeRightSection } from "./style";
 class Home extends Component {

  componentDidMount() {
    this.props.getHomeData();
  }

  render() {
    return (
      <div>
        <HomeWrapper>
          <HomLeftSection>
            <img
              className="banner-img"
              src="https://upload.jianshu.io/admin_banners/web_images/5055/348f9e194f4062a17f587e2963b7feb0b0a5a982.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
              alt=""
            />
            <Category></Category>
            <List></List>
          </HomLeftSection>
          <HomeRightSection>
            <Recommend></Recommend>
            <Writer></Writer>
          </HomeRightSection>
        </HomeWrapper>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    getHomeData() {
      const action = actionCreators.fetchData()
      dispatch(action)
    }
  }
}

export default connect(null, mapDispatch)(Home);