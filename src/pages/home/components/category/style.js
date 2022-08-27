import styled from "styled-components";

export const CateWrapper = styled.div`
  width: 100%;
  margin: 2px 0 10px -18px;
  overflow: hidden;
  position: relative;
`;
export const CateItem = styled.div`
  float: left;
  width: 110px;
  height: 32px;
  margin: 0 0 18px 18px;
  background: #f7f7f7;
  font-size: 14px;
  color: #424242;
  border: 1px solid #f7f7f7;
  border-radius: 4px;
  line-height: 32px;
  display: flex;
  cursor: pointer;
  &:hover {
    background: #f9f9f9;
    color: #666;
  }
`;

export const CateImg = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 8px;
  .img {
    width: 32px;
    height: 32px;
  }
`;
export const SeeMore = styled.div`
  position: absolute;
  bottom: 12px;
  right: 15px;
  font-size:12px;
  color: #ccc;
  cursor: pointer;
`;


