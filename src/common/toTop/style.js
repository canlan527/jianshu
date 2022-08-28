import styled from 'styled-components';

export const ToTopBox = styled.div`
  position: fixed;
  bottom: 100px;
  right: 260px
  width: 80px;
  height: 80px;
  border: 1px solid #ccc;
  font-size: #777;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;  
  &:hover {
    box-shadow: 1px 2px 14px 10px rgba(63,122,244, 0.4);
    transition: .3s ease-in;
    transform: translate(-5px, -1px);
  }
`;