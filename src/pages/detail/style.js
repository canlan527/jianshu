import styled from "styled-components";

export const DetailWrapper = styled.div`
  width: 100%;
  // height: 100%;
  background: #f5f5f5;
  padding: 8px 0 88px 0;
  position: relative;
  box-sizing: border-box;
`;

export const DetailContainer = styled.div`
  width: 1000px;
  padding: 50px 20px;
  background: #fff;
  margin: 0 auto;
`;

export const DetailBlogArea = styled.div`
  padding-bottom: 40px;
`;

export const BlogTitleInfo = styled.div`
  font-size: 32px;
  font-weight: bold;
`;
export const BlogAuthorInfoHead = styled.div`
  width: 100%;
  height: 60px;
  padding: 10px 0;
  margin: 12px 0;
  display: flex;
`;

export const BlogAuthorImg = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 14px;
  .img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  transform: translateY(-3px);
  .name {
    font-weight: bold;
  }
`;

export const AuthorInfoSide = styled.div`
  width: 100%;
  display: flex;
  font-size: 12px;
  color: #929292;
  .author-item {
    margin-right: 8px;
    &.author-price {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #ec7259;
      .price-number {
        transform: translateY(-1px); 
      }
      .iconfont {
        font-size: 13px;
        margin-right: 3px;
        transform: translateY(-2px);
      }
    }
  }
`;

export const BlogContent = styled.div`
  color: #424242;
  text-align: center;
  p {
    text-align: left;
    margin-bottom: 20px;
    line-height: 1.8;
    word-break: break-word;
  }
  img {
    width: 820px;
    height: auto;
    margin: 0 auto 12px;
  }
`;

export const BlogSideInfo = styled.div`
  width: 100%;
  margin: 18px 0;
  .iconfont {
    padding: 10px;
    margin-right: 12px;
    width: 36px;
    height: 36px;
    color: #bbb;
    font-size: 18px;
    border-radius: 50%;
    border: 1px solid #ccc;
    line-height: 36px;
    text-align: center;
    &:hover {
      color: #aaa;
      cursor: pointer;
    }
  }
`;

export const BlogSideInfoTop = styled.div`
  width: 200px;
  color: #bbb;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0 14px 0;
  margin-bottom: 12px;
`;

export const BlogSideInfoMid = styled.div`
  line-height: 18px;
  width: 100%;
  text-align: center;
  .support {
    margin-bottom: 18px;
  }
  .tip {
    font-weight: bold;
  }
  .support-btn {
    display: inline-block;
    font-size: 16px;
    border: 1px solid #ec7259;
    background: #ec7259;
    padding: 8px 16px;
    color: #fff;
    border-radius: 17px;
    margin: 20px 0;
    cursor: pointer;
    &:hover {
      background: #ec6166;
    }
  }
  .support-text {
    color: #727272;
    margin: 12px 0;
  }
`;

export const DetailBtnArea = styled.div`
  position: fixed;
  top: 200px;
  left: calc((100vw - 1200px)/2 - 78px);
  width: 74px;
  padding: 12px;
  text-align: center;
  box-sizing: border-box;
  .detail-btn {
    width: 100%;
    .btn {
      background: #fff;
      width: 46px;
      height: 46px;
      color: #777;
      border-radius: 50%;
      line-height: 46px;
      text-align: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 1px 1px 17px 4px rgba(100,100,100,0.1);
      transition: .2s ease-in;
      cursor: pointer;
      &:hover {
        transform: translate(2px,2px);
      }
      .iconfont {
        color: #777;
        font-size: 17px;
        &:hover {
          color: #aaa;
        }
      }
    }
    .text {
      font-size:13px;
      color: #a3a3a3;
      margin: 12px 0 18px 0;
    }
  }
`;

export const DetailBottom = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  width: 100%;
  background: #fff;
`;
