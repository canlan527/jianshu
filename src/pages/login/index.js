import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { actionCreators } from "./store";
import { LoginWrapper, LoginBox, Input, LoginBtn } from "./style";

class Login extends PureComponent {
  render() {
    const { loginStatus } = this.props;

    if (!loginStatus) {
      return (<LoginWrapper>
        <LoginBox>
          <div className="login-title">请登录查看</div>
          <div className="login-item">
            <label className="label" htmlFor="login-input">
              用户名：
            </label>
            <Input
              innerRef={(dom) => (this.accountDom = dom)}
              id="login-input"
              placeholder=""
            ></Input>
          </div>

          <div className="login-item">
            <label className="label" htmlFor="password">
              密码：
            </label>
            <Input
              innerRef={(dom) => (this.pwdDom = dom)}
              id="password"
              placeholder=""
              type="password"
            ></Input>
          </div>
          <LoginBtn
            onClick={() => this.props.handleLogin(this.accountDom, this.pwdDom)}
          >
            登录
          </LoginBtn>
        </LoginBox>
      </LoginWrapper>)
    } else {
      return <Redirect to="/"></Redirect>;
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(["login", "loginStatus"]),
});

const mapDispatch = (dispatch) => ({
  handleLogin(accountElem, pwdElem) {
    const status = accountElem.value && pwdElem.value ? true : false;
    const action = actionCreators.login(accountElem.value, status);
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(Login);
