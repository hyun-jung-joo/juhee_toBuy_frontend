import React, { useState } from "react";
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
  font-family: "Inter", sans-serif;
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
  margin-top: 10px;
`;
const ProductImg = styled.div``;
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
  font-family: S-Core Dream;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 80px;
  margin-right: auto;
`;
const PriceWrapper = styled.div`
color: #000;
    font-family: S-Core Dream;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: left;
    margin-left: auto;
}`;
const Price = styled.span``;
const Won = styled.span``;
const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 65px;
  align-items: center;
  padding: 0 18px;
  color: #000;
  font-family: S-Core Dream;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const QuantityWrapper = styled.div`
  color: #60716f;
  font-family: S-Core Dream;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Whole = styled.span``;
const Quantity = styled.span``;
const Count = styled.span``;
const TotalPrice = styled.span``;

const Gra = styled.div`
  position: relative;
  background: linear-gradient(to right, #e02d11, #05bba2);
  width: 100%;
  height: 2px;
  border: none; /* 선 없애기 */
`;
const HowHeader = styled.div`
  height: 70px;
  position: relative;
  margin-bottom: 1px;
`;
const HowHeaderContent = styled.div`
  font-family: "S-Core Dream";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: absolute;
  top: 37px;
  left: 29px;
`;
const MyCardWrapper = styled.div`
  display: inline;
`;
const MyCard = styled.div``;
const MyCardImg = styled.div``;
const Content = styled.div``;
const PayWrapper = styled.div``;
const PayHeader = styled.div``;
const PayBtn = styled.div``;
const CardinfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  margin-left: 16px;
`;
const NumWrapper = styled.div`
  text-align: left;
  width: 220px;
  margin-right: auto;
  color: #000;
  font-family: S-Core Dream;
  font-size: 10px;
  font-style: normal;
  line-height: normal;
`;
const PwWrapper = styled.div`
  text-align: left;
  width: 220px;
  margin-right: auto;
`;
const CVCWrapper = styled.div`
  text-align: left;
  width: 70px;
  margin-right: auto;
  display: inline-block;
`;
const DateWrapper = styled.div`
  text-align: left;
  width: 110px;
  margin-right: auto;
  display: inline-block;
`;
const Num = styled.span`
  font-weight: 500;
  width: 49px;
  text-align: left;
  display: inline-block;
`;
const Unum = styled.span`
  font-weight: 300;
`;
const Pw = styled.span`
  color: #000;
  font-family: S-Core Dream;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 49px;
  text-align: left;
  display: inline-block;
`;
const Upw = styled.span`
  color: #000;
  font-family: S-Core Dream;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
const CVC = styled.span`
  color: #000;
  font-family: S-Core Dream;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 49px;
  text-align: left;
  display: inline-block;
`;
const Ucvc = styled.span`
  color: #000;
  font-family: S-Core Dream;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
const Date = styled.span`
  color: #000;
  font-family: S-Core Dream;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 78px;
  text-align: left;
  display: inline-block;
`;
const Udate = styled.span`
  color: #000;
  font-family: S-Core Dream;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
const QuickPayWrapper = styled.div``;
const QuickPayHeader = styled.div``;
const QuickPayBtn = styled.div``;
const QuickPayImg = styled.div``;

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

const Payment = () => {
  const navigate = useNavigate();
  const navigateToBack = () => {
    window.history.back();
  };
  const [inputStatus, setInputStatus] = useState("");

  const handleClickRadioButton = (radioBtnName) => {
    setInputStatus(radioBtnName);
  };

  const filterStyle = {
    filter:
      "invert(56%) sepia(93%) saturate(2412%) hue-rotate(133deg) brightness(95%) contrast(96%)",
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
              <PriceWrapper>
                <Price>00,000</Price>
                <Won> 원</Won>
              </PriceWrapper>
            </ProductInfoWrapper>
          </ProductWrapper>

          <TotalWrapper>
            <QuantityWrapper>
              <Whole>총 </Whole>
              <Quantity>N</Quantity>
              <Count> 개</Count>
            </QuantityWrapper>
            <PriceWrapper>
              <Whole>총 </Whole>
              <TotalPrice>00,000</TotalPrice>
              <Won> 원</Won>
            </PriceWrapper>
          </TotalWrapper>
          <Gra></Gra>
          <HowHeader>
            <HowHeaderContent>결제수단</HowHeaderContent>
            <MyCardWrapper>
              <MyCard>내 카드 정보 확인하기</MyCard>
              <MyCardImg>
                <img
                  src={`${process.env.PUBLIC_URL}/images/charge.png`}
                  width="16px"
                  height="16px"
                  style={filterStyle}
                ></img>
              </MyCardImg>
            </MyCardWrapper>
          </HowHeader>
          <Content>
            <PayWrapper>
              <PayHeader>
                <PayBtn
                  type="radio"
                  id="paybtn"
                  checked={inputStatus === "paybtn"}
                  onClick={() => handleClickRadioButton("paybtn")}
                />
                <label htmlFor="paybtn">일반 카드결제</label>
              </PayHeader>
              <CardinfoWrapper>
                <NumWrapper>
                  <Num>카드번호</Num>
                  <Unum>0000 0000 0000 0000</Unum>
                </NumWrapper>
                <PwWrapper>
                  <Pw>비밀번호</Pw>
                  <Upw>0000</Upw>
                </PwWrapper>
                <CVCWrapper>
                  <CVC>CVC</CVC>
                  <Ucvc>000</Ucvc>
                </CVCWrapper>
                <DateWrapper>
                  <Date>유효기간 년/월</Date>
                  <Udate>25/08</Udate>
                </DateWrapper>
              </CardinfoWrapper>
            </PayWrapper>
            <QuickPayWrapper>
              <QuickPayHeader>
                <PayBtn
                  type="radio"
                  id="quickpaybtn"
                  checked={inputStatus === "quickpaybtn"}
                  onClick={() => handleClickRadioButton("quickpaybtn")}
                />
                <label htmlFor="paybtn">간편 카드결제</label>
              </QuickPayHeader>
              <QuickPayImg>
                <img
                  src={`${process.env.PUBLIC_URL}/images/quickpay.png`}
                  width="266px"
                  height="156px"
                ></img>
              </QuickPayImg>
            </QuickPayWrapper>
          </Content>
          <Gra></Gra>
          <TotalWrapper>
            <Whole>총 결제금액</Whole>
            <PriceWrapper>
              <TotalPrice>00,000</TotalPrice>
              <Won> 원</Won>
            </PriceWrapper>
          </TotalWrapper>
          <CoachMark>
            <img
              src={`${process.env.PUBLIC_URL}/images/coachmark.png`}
              width="48px"
            />
          </CoachMark>
        </Body>

        <BottomBar>
          <Menu>
            <img
              src={`${process.env.PUBLIC_URL}/images/menu.png`}
              width="26px"
            />
          </Menu>
          <Search>
            <img
              src={`${process.env.PUBLIC_URL}/images/search.png`}
              width="26px"
            />
          </Search>
          <Home>
            <img
              src={`${process.env.PUBLIC_URL}/images/home.png`}
              width="26px"
            />
          </Home>
          <My>
            <img src={`${process.env.PUBLIC_URL}/images/me.png`} width="26px" />
          </My>
        </BottomBar>
      </BodyWrapper>
    </Container>
  );
};

export default Payment;
