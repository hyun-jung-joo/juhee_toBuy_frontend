import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  text-align: center;
  background-color: #f5f0e4;
  -ms-overflow-style: none;
  font-family: "Inter", sans-serif;

  /* 미디어 쿼리 적용 */
  @media (hover: hover) {
    width: 390px;
    margin: 0 auto;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const BodyWrapper = styled.div`
  flex: 1; /* 남은 공간을 채우도록 설정 */
  overflow: hidden; /* 스크롤이 있는 경우 내용을 스크롤합니다. */
`;

const Topbar = styled.div`
  display: flex;
  height: 60px;
  padding: 10px;
  align-items: center;
  gap: 90px;
  flex-shrink: 0;
  background: #f5f0e4;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Back = styled.div`
  width: 30px;
  height: 24px;
  cursor: pointer;
`;

const Toptitle = styled.div`
  margin: auto;
  margin-left: 5%;
  color: #081c19;
  font-family: S-Core Dream;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;

const Close = styled.div`
  margin-right: 2%;
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
`;

const Body = styled.div`
  display: flex;
  height: 650px;
  padding: 30px 14px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex-shrink: 0;
`;

const Logo = styled.div`
  margin-top: 5%;
  width: 278.452px;
  height: 160px;
  flex-shrink: 0;
`;
const Infoimg = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  padding: 4px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: -57%;
  margin-left: 87%;
  margin-bottom: 60%;
`;

const InputBox = styled.div`
  display: flex;
  margin: -2%;
  margin-top: 2%;
  width: 355px;
  height: 55px;
  padding: 10px;
  align-items: center;
  gap: 269px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 1px solid #60716f;
  background: #fff;
`;

const Input = styled.input`
  position: relative;
  align-items: center;
  width: 800px;
  height: 32px;
  background: #ffffff;
  border-radius: 6px;
  border: none;
  margin: auto;
  margin-top: 9px;
  font-size: 17px;
  &::placeholder {
    color: #60716f;
    padding-left: 10px;
  }
  &:focus {
    border: none;
    outline: none;
  }
`;

const MintBox = styled.div`
  margin: auto;
  margin-top: 10%;
  display: flex;
  width: 222px;
  height: 53px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 6px;
  background: #05bba2;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const FindText = styled.div`
  color: #fff;
  font-family: S-Core Dream;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ModalBackdrop = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
  z-index: 1; //위치지정 요소
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);

  width: 391px;
  margin: 0 auto;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const CmtxtBox = styled.div`
  display: flex;
  content-align: center;
  flex-direction: column;
`;
const Cmtextemph = styled.div`
  font-weight: 500;
  margin: 0 auto;
`;

const Cmtext = styled.div`
  display: flex;
  color: #000;
  font-family: S-Core Dream;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin: 0 auto;
`;
const BtmBox = styled.div`
  margin: 0 auto;
  margin-top: 30%;
  display: flex;
  width: 145px;
  height: 53px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 6px;
  background: #05bba2;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const Btmtext = styled.div`
  color: #fff;
  font-family: S-Core Dream;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있다.
  role: "dialog",
}))`
  // Modal창 CSS를 구현합니다.
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  width: 90%;
  heigth: 800px;
  background-color: #ffffff;

  div.desc {
    margin: 50px;
    font-size: 20px;
    color: var(--coz-purple-600);
  }
`;

const Findpw = () => {
  const navigate = useNavigate();
  const navigateToFirstpage = () => {
    navigate("/");
  };
  const navigateToLogin = () => {
    navigate("/Login");
  };

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    // isOpen의 상태를 변경하는 메소드를 구현
    // !false -> !true -> !false
    setIsOpen(!isOpen);
  };
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPhonenum] = useState("");
  return (
    <Container>
      <BodyWrapper>
        <Topbar>
          <Back>
            <img
              src={`${process.env.PUBLIC_URL}/images/backbutton.png`}
              alt="back"
              onClick={() => navigate(-1)}
            />
          </Back>
          <Toptitle>비밀번호 찾기</Toptitle>
          <Close>
            <img
              src={`${process.env.PUBLIC_URL}/images/close.png`}
              alt="close"
              onClick={navigateToFirstpage}
            />
          </Close>
        </Topbar>
        <Body>
          <Logo>
            <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" />
          </Logo>
          <Infoimg>
            <img src={`${process.env.PUBLIC_URL}/images/info.png`} alt="info" />
          </Infoimg>

          <InputBox>
            <Input
              type="text"
              placeholder="아이디 (이메일)"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputBox>
          <InputBox>
            <Input
              type="text"
              placeholder="이름"
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputBox>
          <InputBox>
            <Input
              type="text"
              placeholder="휴대폰 번호 입력"
              onChange={(e) => setPhonenum(e.target.value)}
            />
          </InputBox>

          <MintBox>
            <FindText onClick={openModalHandler}>비밀번호 찾기</FindText>
          </MintBox>
          {isOpen ? (
            <ModalBackdrop onClick={openModalHandler}>
              <ModalView onClick={(e) => e.stopPropagation()}>
                <div className="desc">
                  <CmtxtBox>
                    <Cmtext>
                      <Cmtextemph>000</Cmtextemph>
                      님의 비밀번호는
                    </Cmtext>
                  </CmtxtBox>

                  <CmtxtBox>
                    <Cmtext>
                      <Cmtextemph>PW0000</Cmtextemph>
                      입니다.
                    </Cmtext>
                  </CmtxtBox>
                  <BtmBox>
                    <Btmtext onClick={navigateToLogin}>로그인 하러가기</Btmtext>
                  </BtmBox>
                </div>
              </ModalView>
            </ModalBackdrop>
          ) : null}
        </Body>
      </BodyWrapper>
    </Container>
  );
};
export default Findpw;
