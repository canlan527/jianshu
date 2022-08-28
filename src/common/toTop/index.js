import React, { Component } from "react";
import { ToTopBox } from "./style";

export default class ToTop extends Component {
  handleScrollTop = () => {
    window.scrollTo(0, 0);
  }
  render() {
    return <ToTopBox onClick={this.handleScrollTop}>
      <i className="iconfont">&#xe84d;</i>
      </ToTopBox>;
  }
}

