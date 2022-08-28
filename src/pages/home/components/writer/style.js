import styled from 'styled-components';

export const WriterWrapper = styled.div`
  width: 100%;
`;

export const WriterHeader = styled.div`
  font-size: 14px;
  color: #969696;
  padding: 12px 0 8px 0;
  display:flex;
  align-items: center;
  justify-content: space-between;
`;


export const WriterList = styled.ul`
  width: 100%;
  margin-bottom: 22px;
`;

export const WriterItem = styled.li`
  width: 100%;
  margin: 18px 0;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const WriterInfo = styled.h3`
  color: #333;
  font-size:14px;
  font-weight: bold;
  flex: 1;
  line-height: 23px;
  .name {
    cursor: pointer;
  }
  .desc {
    font-size: 12px;
    font-weight: normal;
    color: #949494;
  }
`;

export const WriterImg = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 10px;
  .img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const WriterFollow = styled.div`
  width: 40px;
  margin-top: 5px;
  padding: 0;
  font-size: 13px;
  color: #42c02e;
  cursor: pointer;
`;

export const WriterFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  width: 100%;
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #f5f5f5;
  }
`;
