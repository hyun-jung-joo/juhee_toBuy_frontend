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

const Gra = styled.div`
  position: relative;
  background: linear-gradient(to right, #e02d11, #05bba2);
  width: 100%;
  height: 2px;
  border: none; /* 선 없애기 */
`;
const FormContent = styled.div`
  height: auto;
  margin: 43px 32px;
  margin-bottom: 0;
`;
const ImgWrapper = styled.div`
  width: 100%;
`;
const PayImg = styled.div`
  width: 220px;
  margin: 0 auto;
  position: relative;
`;
const PlusImg = styled.div`
  position: absolute;
  right: -16px;
  bottom: -13px;
`;
const ProductName = styled.div`
  color: #000;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  height: 80px;
  padding-top: 12px;
  box-sizing: border-box;
`;
const ProductWrapper = styled.div`
  height: 56px;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const QuantityWrapper = styled.div`
  display: inline;
`;
const Whole = styled.span``;
const Quantity = styled.span``;
const Count = styled.span``;
const PriceWrapper = styled.div`
  display: inline;
`;
const Price = styled.span``;
const Won = styled.span``;

const TypeHeader = styled.div`
  height: 50px;
  position: relative;
  text-align: left;
  margin-bottom: 3px;
`;
const TypeHeaderContent = styled.div`
  bottom: 4px;
  left: 10px;
  position: absolute;
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 0 10px;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
const Type = styled.div`
  display: inline;
`;
const CardImg = styled.div`
  display: inline;
`;
const WhenHeader = styled.div`
  height: 50px;
  position: relative;
  text-align: left;
  margin-bottom: 3px;
`;
const WhenHeaderContent = styled.div`
  bottom: 4px;
  left: 10px;
  position: absolute;
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const When = styled.div`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-align: left;
  padding: 13px 10px 0;
`;

const Submit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
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
  background: white;
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

const PayHistory = () => {
  const submitStyle = {
    width: "222px",
    height: "53px",
    padding: "10px",
    borderRadius: "6px",
    background: "#05BBA2",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    border: "none",
    color: "white",
  };
  const navigate = useNavigate();
  const navigateToBack = () => {
    window.history.back();
  };
  const navigateToMypage = () => {
    navigate("/MypageMain");
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

        <Body>
          <FormContent>
            <ImgWrapper>
              <PayImg>
                <img
                  src={`${process.env.PUBLIC_URL}/images/productSample.png`}
                  width="220px"
                  height="220px"
                ></img>
                <PlusImg>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/plus.png`}
                    width="48px"
                    height="48px"
                  ></img>
                </PlusImg>
              </PayImg>
            </ImgWrapper>
            <ProductName>상품명</ProductName>
            <Gra></Gra>
            <ProductWrapper>
              <QuantityWrapper>
                <Whole>총 </Whole>
                <Quantity>N</Quantity>
                <Count> 개</Count>
              </QuantityWrapper>
              <PriceWrapper>
                <Price>00,000</Price>
                <Won> 원</Won>
              </PriceWrapper>
            </ProductWrapper>
            <TypeHeader>
              <TypeHeaderContent>결제 유형</TypeHeaderContent>
            </TypeHeader>
            <Gra></Gra>
            <CardWrapper>
              <Type>일반 카드 결제</Type>
              <CardImg>
                <img
                  src={`${process.env.PUBLIC_URL}/images/card.png`}
                  width="110px"
                  height="65px"
                />
              </CardImg>
            </CardWrapper>
            <WhenHeader>
              <WhenHeaderContent>결제 일시</WhenHeaderContent>
            </WhenHeader>
            <Gra></Gra>
            <When>2023.08.18 00:00 pm</When>
          </FormContent>
          <Submit onClick={navigateToMypage}>
            <button formAction="" style={submitStyle}>
              확인
            </button>
          </Submit>
          <CoachMark>
            <img
              src={`${process.env.PUBLIC_URL}/images/coachmark.png`}
              width="48px"
            />
          </CoachMark>
        </Body>
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
          <My onClick={goMyPage}>
            <img src={`${process.env.PUBLIC_URL}/images/me.png`} width="26px" />
          </My>
        </BottomBar>
      </BodyWrapper>
    </Container>
  );
};

export default PayHistory;
