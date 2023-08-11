import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  text-align: center;
  //   background-color: #f5f0e4;
  font-family: "Inter", sans-serif;

  @media (hover: hover) {
    width: 390px;
    margin: 0 auto;
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

const Header = styled.div`
  height: 82px;
  position: relative;
`;
const HeaderContent = styled.div`
  position: absolute;
  bottom: 16px;
  left: 22px;
  color: #000;
  text-align: center;
  font-family: S-Core Dream;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Gra = styled.div`
  position: relative;
  background: linear-gradient(to right, #e02d11, #05bba2);
  width: 100%;
  height: 2px;
  border: none; /* 선 없애기 */
`;
const List = styled.div`
  margin-top: 36px;
  height: auto;
`;
const ContentBox = styled.div`
  height: 84px;
  margin-top: 28px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
const Ad = styled.div``;
const Circle = styled.div`
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  width: 72px;
  height: 72px;
  margin-left: 8px;
  position: relative;
`;
const CardImg = styled.div`
  margin-top: 13px;
`;
const AmountWrapper = styled.div`
  color: #60716f;
  text-align: center;
  font-family: S-Core Dream;
  font-size: 10.4px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: absolute;
  left: 13px;
  top: 46.43px;
`;
const Plus = styled.span``;
const Amount = styled.span``;
const Won = styled.span``;

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
export const ModalContainer = styled.div`
  // Modal을 구현하는데 전체적으로 필요한 CSS를 구현
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ModalBackdrop = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
  z-index: 1; //위치지정 요소
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ModalBtn = styled.button`
  background-color: var(--coz-purple-600);
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ExitBtn = styled(ModalBtn)`
  background-color: #05bba2;
  border-radius: 6px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  text-decoration: none;
  height: 40px;
  display: flex;
  width: 102px;
  padding: 9px 0px;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: S-Core Dream;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: absolute;
  bottom: 22px;
`;

export const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있다.
  role: "dialog",
}))`
  // Modal창 CSS를 구현합니다.
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 322px;
  height: 166px;
  flex-shrink: 0;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: relative;
  > div.desc {
    margin: 50px;
    margin: 50px;
    color: #000;
    font-family: S-Core Dream;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const Charge = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navigateToBack = () => {
    window.history.back();
  };

  const openModalHandler = () => {
    // isOpen의 상태를 변경하는 메소드를 구현
    // !false -> !true -> !false
    setIsOpen(!isOpen);
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
          <Header>
            <HeaderContent>카드 잔액 충전하기</HeaderContent>
          </Header>
          <Gra></Gra>
          <List>
            <ContentBox>
              <Ad>
                <img
                  src={`${process.env.PUBLIC_URL}/images/ad.png`}
                  width="272px"
                  height="84px"
                />
              </Ad>
              <Circle onClick={openModalHandler}>
                <CardImg>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/charge.png`}
                    width="35.657px"
                    height="35.657px"
                  />
                </CardImg>
                <AmountWrapper>
                  <Plus>+</Plus>
                  <Amount>10,000</Amount>
                  <Won>원</Won>
                </AmountWrapper>
              </Circle>
              {isOpen ? (
                <ModalBackdrop onClick={openModalHandler}>
                  <ModalView onClick={(e) => e.stopPropagation()}>
                    <div className="desc">
                      카드잔액 {Amount.firstChild}원이 충전 되었습니다!{" "}
                    </div>
                    <ExitBtn onClick={openModalHandler}>확인</ExitBtn>
                  </ModalView>
                </ModalBackdrop>
              ) : null}
            </ContentBox>

            <ContentBox>
              <Ad>
                <img
                  src={`${process.env.PUBLIC_URL}/images/ad2.png`}
                  width="272px"
                  height="84px"
                />
              </Ad>
              <Circle>
                <CardImg>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/charge.png`}
                    width="35.657px"
                    height="35.657px"
                  />
                </CardImg>
                <AmountWrapper>
                  <Plus>+</Plus>
                  <Amount>20,000</Amount>
                  <Won>원</Won>
                </AmountWrapper>
              </Circle>
            </ContentBox>

            <ContentBox>
              <Ad>
                <img
                  src={`${process.env.PUBLIC_URL}/images/ad3.png`}
                  width="272px"
                  height="84px"
                />
              </Ad>
              <Circle>
                <CardImg>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/charge.png`}
                    width="35.657px"
                    height="35.657px"
                  />
                </CardImg>
                <AmountWrapper>
                  <Plus>+</Plus>
                  <Amount>30,000</Amount>
                  <Won>원</Won>
                </AmountWrapper>
              </Circle>
            </ContentBox>

            <ContentBox>
              <Ad>
                <img
                  src={`${process.env.PUBLIC_URL}/images/ad4.png`}
                  width="272px"
                  height="84px"
                />
              </Ad>
              <Circle>
                <CardImg>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/charge.png`}
                    width="35.657px"
                    height="35.657px"
                  />
                </CardImg>
                <AmountWrapper>
                  <Plus>+</Plus>
                  <Amount>40,000</Amount>
                  <Won>원</Won>
                </AmountWrapper>
              </Circle>
            </ContentBox>

            <ContentBox>
              <Ad>
                <img
                  src={`${process.env.PUBLIC_URL}/images/ad5.png`}
                  width="272px"
                  height="84px"
                />
              </Ad>
              <Circle>
                <CardImg>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/charge.png`}
                    width="35.657px"
                    height="35.657px"
                  />
                </CardImg>
                <AmountWrapper>
                  <Plus>+</Plus>
                  <Amount>50,000</Amount>
                  <Won>원</Won>
                </AmountWrapper>
              </Circle>
            </ContentBox>
          </List>
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

export default Charge;
