import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { actionCreators } from './store'
import ToTop from '../../common/toTop';
import {
  DetailWrapper,
  DetailContainer,
  DetailBlogArea,
  BlogTitleInfo,
  BlogAuthorInfoHead,
  BlogAuthorImg,
  AuthorInfo,
  AuthorInfoSide,
  BlogContent,
  BlogSideInfo,
  BlogSideInfoTop,
  BlogSideInfoMid,
  DetailBtnArea,
} from "./style";
class Detail extends Component {

  componentDidMount() {
    this.bindEvent()
    this.props.getData(this.props.match.params.id)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.handleScroll)
  }

  bindEvent = () => {
    window.addEventListener('scroll', this.props.handleScroll)
  }


  render() {

    const { title, content, showToTop, match }  = this.props;
    const renderContent = content ? content : '<div>暂无内容</div>'
    return (
      <DetailWrapper>
        <DetailContainer>
          <DetailBlogArea>
            <BlogTitleInfo>{match.params.id + title}</BlogTitleInfo>
            <BlogAuthorInfoHead>
              <BlogAuthorImg>
                <img
                  className="img"
                  src="https://cdn.jsdelivr.net/gh/canlan527/pics@main/w5.jpeg"
                  alt=""
                />
              </BlogAuthorImg>
              <AuthorInfo>
                <span className="name">东风无痕</span>
                <AuthorInfoSide>
                  <div className="author-item author-price">
                    <i className="iconfont price">&#xe91f;</i>
                    <span className="price-number">6</span>
                  </div>
                  <div className="author-item date-time">
                    2022.05.18 17:55:42
                  </div>
                  <div className="author-item words-count">字数 999</div>
                  <div className="author-item readed-count">阅读 1,011</div>
                </AuthorInfoSide>
              </AuthorInfo>
            </BlogAuthorInfoHead>

            <BlogContent dangerouslySetInnerHTML={{__html: renderContent}}>
            </BlogContent>

            <BlogSideInfo>
              <BlogSideInfoTop>
                <div className="action up">
                  <i className="iconfont">&#xe601;</i>
                  22人点赞
                </div>
                <div className="action down">
                  <i className="iconfont">&#xe628;</i>
                </div>
              </BlogSideInfoTop>
              <BlogSideInfoMid>
                <div className="support tip">"小礼物走一走，来简书关注我"</div>
                <span className="support support-btn">赞赏支持</span>
                <div className="support support-text">
                  还没有人赞赏，支持一下
                </div>
              </BlogSideInfoMid>
            </BlogSideInfo>
          </DetailBlogArea>
          <DetailBtnArea>
            <div className="detail-btn">
              <div className="btn">
                <i className="iconfont">&#xe601;</i>
              </div>
              <div className="text">22赞</div>
            </div>
            <div className="detail-btn">
              <div className="btn">赏</div>
              <div className="text">6</div>
            </div>
            <div className="detail-btn">
              <div className="btn">
                <i className="iconfont">&#xe61a;</i>
              </div>
              <div className="text">回主页</div>
            </div>
          </DetailBtnArea>
        </DetailContainer>
        { showToTop ? <ToTop></ToTop> : null }
      </DetailWrapper>
    );
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content']),
  showToTop: state.getIn(['detail', 'showToTop'])
})

const mapDispatch = (dispatch) => ({
  getData(id) {
    const action = actionCreators.getBlogData(id);
    dispatch(action);
  },
  handleScroll() {
    const scrollTop = document.documentElement.scrollTop;
    const value = scrollTop > 720 ? true : false;
    const action = actionCreators.setToTopAction(value)
    dispatch(action)
  }
})

export default connect(mapState, mapDispatch)(withRouter(Detail))