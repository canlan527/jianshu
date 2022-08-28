import React, { Component } from "react";
import { IconWrapper } from "./style";
export default class ChangePage extends Component {
  handleChange = () =>{
    const spinDom = this.spinRef;
    const reg = /[^0-9]/gi; // 定义截取数字的正则
    let originAngle = spinDom.style.transform.replace(reg, ""); // 拿到spinDom的原始旋转度数
    originAngle = originAngle ? parseInt(originAngle, 10) : 0; // 因为后续要累加旋转度数，这里要转换成数字类型
    spinDom.style.transform = `rotate(${360 + originAngle}deg)`; // 用360度和前一次旋转的度数累加
  }
  render() {
    return (
      <IconWrapper>
        <i ref={(dom) => (this.spinRef = dom)} className="iconfont spin">
          &#xe6aa;
        </i>
        换一批
      </IconWrapper>
    );
  }
}
