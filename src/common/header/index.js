import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";
import { Link } from "react-router-dom";
import ChangePage from "../changePage";
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

const getListArea = (props) => {
  const changePageRef = React.createRef();
  const {
    focused,
    mouseIn,
    list,
    page,
    totalPage,
    handleMouseIn,
    handleMouseLeave,
    handlePageChange,
  } = props;
  const newList = list.toJS(); // list是immutable类型的数据，不能遍历，需要转成js对象
  const infoItemList = []; // 存放固定长度的热搜item

  if (newList.length) {
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      if (i < newList.length) {
        // i取值不能超过list长度，不然会出错，取到超出范围的i值
        infoItemList.push(
          <SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>
        );
      }
    }
  }

  if (focused || mouseIn) {
    // 聚焦和鼠标移入的时候都展示SearchInfo框
    return (
      <SearchInfo onMouseEnter={handleMouseIn} onMouseLeave={handleMouseLeave}>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch
            onClick={() => handlePageChange(page, totalPage, changePageRef)}
          >
            <ChangePage ref={changePageRef}></ChangePage>
          </SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>{infoItemList}</SearchInfoList>
      </SearchInfo>
    );
  }
};

const Header = (props) => {
  const { focused, handleInputFocus, handleInputBlur, list } = props;
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo />
      </Link>
      <Nav>
        <Link to="/">
          <NavItem className="left active">首页</NavItem>
        </Link>
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
              onFocus={() => handleInputFocus(list)}
              onBlur={handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>
            &#xe6ac;
          </i>
          {getListArea(props)}
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
};

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      // console.log(list);
      !list.size && dispatch(actionCreators.getHotwords());
      dispatch(actionCreators.searchFocusAction(true));
    },
    handleInputBlur() {
      const action = actionCreators.searchFocusAction(false);
      dispatch(action);
    },
    handleMouseIn() {
      const action = actionCreators.mouseInAction(true);
      dispatch(action);
    },
    handleMouseLeave() {
      const action = actionCreators.mouseInAction(false);
      dispatch(action);
    },
    handlePageChange(page, totalPage, changePageRef) {
      changePageRef.current.handleChange(); // 调用ChangePage的handleChange方法
      if (page < totalPage) {
        // 当前页小于总页码的时候
        page++; // 页码新增
        const action = actionCreators.changePageAction(page);
        dispatch(action);
      } else {
        // 当当前页超过总页码的时候，就变成第一页
        const action = actionCreators.changePageAction(1);
        dispatch(action);
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
