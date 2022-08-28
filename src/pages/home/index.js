import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import Category from "./components/category";
import List from "./components/list";
import Writer from "./components/writer";
import Recommend from "./components/recommend";
import ToTop from "../../common/toTop";
import { HomeWrapper, HomLeftSection, HomeRightSection } from "./style";

class Home extends PureComponent {

  componentDidMount() {
    this.props.getHomeData();
    this.props.getWriterListData();
    this.bindEvent();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.handleScrollTop)
  }

  bindEvent() {
    window.addEventListener('scroll', this.props.handleScrollTop)
  }

  render() {
    const { showScrollTop } = this.props;
    return (
      <div ref={(dom) => this.homeRef = dom}>
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
          { showScrollTop ? <ToTop></ToTop> : null }
        </HomeWrapper>
      </div>
        
    );
  }
}

const mapState = (state) => ({
  showScrollTop: state.getIn(["home", "showScrollTop"]),
});

const mapDispatch = (dispatch) => {
  return {
    getHomeData() {
      const action = actionCreators.fetchData();
      dispatch(action);
    },
    getWriterListData() {
      const action = actionCreators.fetchWriterData();
      dispatch(action);
    },
    handleScrollTop(e) {
      const scrollTop = document.documentElement.scrollTop;
      if(scrollTop > 1000) {
        const action = actionCreators.changeScrollTop(true);
        dispatch(action)
      } else {
        const action = actionCreators.changeScrollTop(false);
        dispatch(action)
      }
    }
  };
};

export default connect(mapState, mapDispatch)(Home);
