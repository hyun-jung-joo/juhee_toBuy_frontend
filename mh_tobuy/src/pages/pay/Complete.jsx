import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  text-align: center;
  //   background-color: #f5f0e4;
  -ms-overflow-style: none;
  overflow: hidden;

  @media (hover: hover) {
    width: 390px;
    margin: 0 auto;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const BodyWrapper = styled.div`
  flex: 1;
  overflow: auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-bottom: 60px;
`;

const Topbar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding: 10px;
  align-items: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Back = styled.div`
  width: 30px;
  cursor: pointer;
`;

const Logo = styled.div`
  cursor: pointer;
`;

const Video = styled.div`
  cursor: pointer;
  width: 30px;
`;

const Body = styled.div`
  height: 752px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex-shrink: 0;
`;

const CoachMark = styled.div`
  position: fixed;
  bottom: 80px;
  text-align: right;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  @media (hover: hover) {
    width: 390px;
    margin: 0 auto;
  }
`;
const BottomBar = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 60px;
  position: fixed;
  bottom: 0;
  width: 100%;
  @media (hover: hover) {
    width: 390px;
    margin: 0 auto;
  }
`;

const Menu = styled.div`
  width: 30px;
  cursor: pointer;
`;

const Search = styled.div`
  width: 30px;
  cursor: pointer;
`;

const Home = styled.div`
  width: 30px;
  cursor: pointer;
`;

const My = styled.div`
  width: 30px;
  cursor: pointer;
`;

const Logo1 = styled.div`
  cursor: pointer;
  width: 300px;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 50px;
`;

const ProductWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 78px;
  padding-top: 2px;
  height: 78px;
  border-radius: 6px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 22px;
`;
const ProductImg = styled.div`
  margin-top: 2px;
`;
const ProductInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  margin-left: 9px;
  width: 70%;
  margin-bottom: 9px;
`;
const ProductName = styled.div`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 80px;
  margin-right: auto;
`;
const PriceWrapper = styled.div`
<<<<<<< HEAD
color: #000;
=======
color: #000;
    font-family: S-Core Dream;
>>>>>>> 09df5173a9857bb44610563be75a793192a2553e
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: left;
    margin-left: auto;
}`;
const Price = styled.span``;
const Won = styled.span``;
const QuantityWrapper = styled.div`
  color: #60716f;
<<<<<<< HEAD
  font-size: 16px;
=======
  font-family: S-Core Dream;
  font-size: 16px;
>>>>>>> 09df5173a9857bb44610563be75a793192a2553e
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Whole = styled.span``;
const Quantity = styled.span``;
const Count = styled.span``;

const Ment = styled.div`
  width: 300px;
  height: 58px;

  font-family: "S-Core Dream";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  text-align: center;

  color: #000000;

  margin: auto;
  margin-top: 40px;
`;

const Check = styled.div`
  position: relatvie;
  margin: auto;
  margin-top: 40px;
`;

const Complete = () => {
  const navigate = useNavigate();
  const navigateToBack = () => {
    window.history.back();
  };

  const goMenu = () => {
    navigate("/Category");
  };
  const goSearch = () => {
    navigate("/Main");
  };
  const goMain = () => {
    navigate("/Main");
  };
  const goMyPage = () => {
    navigate("/MypageMain");
  };

  return (
    <Container>
      <BodyWrapper>
        <Topbar>
          <Back onClick={navigateToBack}>
            <img
              src={`${process.env.PUBLIC_URL}/images/left.png`}
              alt="back"
              width="12px"
            />
          </Back>
          <Logo>
            <img
              src={`${process.env.PUBLIC_URL}/images/로고3.png`}
              alt="logo"
              width="90px"
            />
          </Logo>
          <Video>
            <img
              src={`${process.env.PUBLIC_URL}/images/carousel-video.png`}
              width="30px"
              alt="video"
            />
          </Video>
        </Topbar>

        <Logo1>
          <img
            src={`${process.env.PUBLIC_URL}/images/로고3.png`}
            width="300px"
          />
        </Logo1>

        <ProductWrapper>
          <ProductImg>
            <img
              src={`${process.env.PUBLIC_URL}/images/productSample.png`}
              width="70px"
              height="70px"
            ></img>
          </ProductImg>
          <ProductInfoWrapper>
            <ProductName>상품명</ProductName>
            <QuantityWrapper>
              <Whole>총 </Whole>
              <Quantity>N</Quantity>
              <Count> 개</Count>
            </QuantityWrapper>
            <PriceWrapper>
              <Price>00,000</Price>
              <Won> 원</Won>
            </PriceWrapper>
          </ProductInfoWrapper>
        </ProductWrapper>
        <Ment>
          해당 상품의 결제과 완료되었습니다!
          <br />
          마이페이지-결제내역에서
          <br />
          확인 가능합니다.
        </Ment>
        <Check>
          <img
            src={`${process.env.PUBLIC_URL}/images/checkBtn.png`}
            width="300px"
          />
        </Check>
        <BottomBar>
          <Menu onClick={goMenu}>
            <img
              src={`${process.env.PUBLIC_URL}/images/menu.png`}
              width="26px"
            />
          </Menu>
          <Search onClick={goSearch}>
            <img
              src={`${process.env.PUBLIC_URL}/images/search.png`}
              width="26px"
            />
          </Search>
          <Home onClick={goMain}>
            <img
              src={`${process.env.PUBLIC_URL}/images/home.png`}
              width="26px"
            />
          </Home>
          a
          <My onClick={goMyPage}>
            <img src={`${process.env.PUBLIC_URL}/images/me.png`} width="26px" />
          </My>
        </BottomBar>
      </BodyWrapper>
    </Container>
  );
};

export default Complete;
