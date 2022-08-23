import React from "react";
import {connect} from 'react-redux';
import { CSSTransition } from "react-transition-group";
import { actionCreators } from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button,
} from "./style";


const Header = (props) => {
  const { focused, handleInputFocus, handleInputBlur } = props;
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">
          <i className="iconfont">&#xe61a;</i>
          下载App
        </NavItem>
        <NavItem className="left">
          <i className="iconfont">&#xe825;</i>
          会员
        </NavItem>
        <NavItem className="left">
          <i className="iconfont">&#xe64f;</i>
          IT技术
        </NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <i className="iconfont font-a">&#xe76a;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition in={focused} timeout={200} classNames="slide">
            <NavSearch
              className={focused ? "focused" : ""}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>
            &#xe6ac;
          </i>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className="writting">
          <i className="iconfont">&#xe600;</i>
          写文章
        </Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = actionCreators.searchFocusAction(true)
      dispatch(action)
    },
    handleInputBlur() {
      const action = actionCreators.searchFocusAction(false)
      dispatch(action)
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Header);


