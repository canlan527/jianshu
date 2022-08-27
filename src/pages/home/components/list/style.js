import styled from 'styled-components';

export const ListWrapper = styled.ul`
  width: 600px;
  margin-right: 15px;
  border-top: 1px solid #f1f1f1;
`;

export const ListItem = styled.li`
  width: 100%;
  display: flex;
  padding: 20px 15px 12px 0;
  border-bottom: 1px solid #f1f1f1;
  box-sizing: boder-box;
`;

export const ListItemInfo = styled.div`
  flex: 1;
  padding-right: 12px;
`;

export const ItemTitle = styled.span`
  font-size: 22px;
  font-weight: bold;
  line-height: 28px;
  display: inline-block;
  color: #333;
  margin-bottom: 8px;
  cursor: pointer;
  &:hover {
    color: gray;
    font-size: 25px;
    transition: .1s ease-in;
  }
`;

export const ItemDesc = styled.div`
  font-size: 13px;
  color: #999;
  line-height:22px;
  margin-bottom: 12px;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  font-size:12px;
  color: #999;
  line-height:16px;
  .item-meta {
    margin-right:12px;
    cursor: pointer;
    &.price {
      color: #ea6f5a;
    }
    &.author {
      &:hover {
        color: #777;
      }
    }
    .iconfont {
      color: #b4b4b4;
      margin-right:3px;
      &.price {
        font-size: 13px;
        color: #ea6f5a;
      }
      &.comment {
        font-size: 12px;
        &:hover {
          color: #777;
        }
      }
      &.like {
        &:hover {
          color: #777;
        }
      }
    }
    .commentNumber, .likeNumber {
      display:inline-block;
      transform: translateY(-1px)
    }
  }   
`;


export const ListImg = styled.a`
  display: inline-block;
  width: 150px;
  height: 100px;
  margin-left: 18px;
  cursor: pointer;
  .img {
    width: 150px;
    height: 100px;
    border-radius: 4px;
  }
`;

export const ReadMore= styled.div`
  margin: 50px 0;
  width: 100%;
  font-size: 15px;
  color:#fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  background: #999;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background: #777;
  }
`;
