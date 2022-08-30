import styled from 'styled-components';

export const LoginWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f5f5f5;
`;

export const LoginBox = styled.div`
  width: 420px;
  padding: 50px 20px;
  background: #fff;
  box-shadow: 0 0 4px 3px (0,0,0,.1);
  margin:200px auto;
  .login-title {
    margin-bottom: 35px;
    font-size: 32px;
    font-weight: bold;
    line-height: 40px;
    text-align: center;
  }
  .login-item {
    margin: 0 auto;
  }
  .label {
    display: inline-block;
    width: 70px;
    color: #727272; 
    text-align: right;
  }
`;

export const Input = styled.input`
  width: 70%;
  height: 32px;
  font-size:18px;
  color: #777;
  line-height: 32px;
  margin-bottom: 20px;
`;

export const LoginBtn = styled.div`
  width: 160px;
  height: 38px;
  color: #fff;
  border-radius: 15px;
  background: #3194d0;
  line-height: 38px;
  text-align: center;
  margin: 18px auto 0;
  cursor: pointer;
`;