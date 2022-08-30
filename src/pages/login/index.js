import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { LoginWrapper, LoginBox, Input, LoginBtn } from "./style";

class Login extends PureComponent {
  render() {
    return (
      <LoginWrapper>
        <LoginBox>
          <div className="login-title">请登录查看</div>
          <div className="login-item">
            <label className="label" htmlFor="login-input">
              用户名：
            </label>
            <Input id="login-input" placeholder=""></Input>
          </div>

          <div className="login-item">
            <label className="label" htmlFor="password">
              密码：
            </label>
            <Input id="password" placeholder="" type="password"></Input>
          </div>

          <LoginBtn>登录</LoginBtn>
        </LoginBox>
      </LoginWrapper>
    );
  }
}

export default connect(null, null)(Login);
