import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  text-align: center;
  background-color: #fffff;
  -ms-overflow-style: none;

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
  justify-content: space-between;
  height: 60px;
  padding: 10px;
  align-items: center;

  background-color: #fffff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Back = styled.div`
  width: 30px;
  cursor: pointer;
`;

const Toptitle = styled.div`
  margin: auto;

  color: #081c19;
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

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* 수직 가운데 정렬 */
  margin: auto;
`;
const Body = styled.div`
  margin: 0 auto;
  display: flex;
  height: 650px;
  padding-top: 30px;
  gap: 20px;
  flex-direction: column;
  align-items: flex-start;

  flex-shrink: 0;
`;

const Logo = styled.div`
  width: 278.452px;
  height: 250px;
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
  margin-top: %;
  margin-left: 87%;
  margin-bottom: 10%;
`;

const InputBox = styled.div`
  display: flex;

  margin: 0 auto;
  margin-top: 10px;
  width: 335px;
  height: 45px;
  padding: 5px;
  align-items: center;

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
const FindLinks = styled.div`
  margin-bottom: -10%;
  margin-left: 55%;
  display: flex;
  gap: 10px; /* 아이디 찾기와 비밀번호 찾기 간격 조정 */
`;

const Findidment = styled.div`
  color: #05bba2;
  display: flex;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-decoration-line: underline;
  cursor: pointer;
`;

const Findpwment = styled.div`
  color: #05bba2;
  display: flex;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-decoration-line: underline;
  cursor: pointer;
`;

const LoginBox = styled.div`
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

const LoginText = styled.div`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const MiddleMentBox = styled.div`
  display: flex;
  margin: auto;
  margin-top: 0.5%;
`;
const Memberq = styled.div`
  color: #320f0a;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const Signup = styled.div`
  margin-top: -15%;
  color: #e02d11;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-decoration-line: underline;
  cursor: pointer;
`;

const Ment = styled.div`
  margin-top: 0;

  width: 270px;
  margin: 0 auto;
  display: flex;
  color: #000;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
const MentTB = styled.div`
  margin: 0 auto;
  text-align: center;
  display: flex;
  background: linear-gradient(180deg, #e02d11 0%, #05bba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Mentmint = styled.div`
  cursor: pointer;

  margin: 0 auto;
  text-align: center;
  cursor: pointer;
  display: flex;
  color: #05bba2;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-decoration-line: underline;
`;
const ModalBackdrop = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
  z-index: 1; //위치지정 요소
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);

  width: 390px;
  margin: 0 auto;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const ExitBtn = styled.div`
  display: flex;
  margin: 0 auto;

  font-size: 35px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
`;

const CmLogo = styled.div`
  display: flex;
  margin: auto;
  margin-top: -0%;
  flex-shrink: 0;
`;

const MentBox = styled.div`
  margin-top: 15%;
  height: 60px;
`;

const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  width: 90%;
  height: 90%;
  background-color: #ffffff;
  overflow-y: auto; /* 스크롤을 추가 */

  div.desc {
    margin: 50px;
    font-size: 20px;
    color: var(--coz-purple-600);
  }
`;
const Login = () => {
  const navigate = useNavigate();
  const navigateToFirstpage = () => {
    navigate("/");
  };

  const navigateTofindid = () => {
    navigate("/Findid");
  };

  const navigateTofindpw = () => {
    navigate("/Findpw");
  };

  const navigateToSignup = () => {
    navigate("/Signup");
  };

  const navigateToCategory = () => {
    navigate("/Category");
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  //스크롤 방지
  useEffect(() => {
    if (isOpen) {
      // 모달 창이 열려 있는 경우에는 스크롤 방지
      document.body.style.cssText = `
        position: fixed; 
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;`;
    } else {
      // 모달 창이 닫혀 있는 경우에는 스크롤 가능하도록 설정
      document.body.style.cssText = "";
    }

    return () => {
      if (isOpen) {
        const scrollY = document.body.style.top;
        document.body.style.cssText = "";
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      }
    };
  }, [isOpen]);

  const openModalHandler = () => {
    // isOpen의 상태를 변경하는 메소드를 구현
    // !false -> !true -> !false
    setIsOpen(!isOpen);
  };

  const url1 =
    "https://harvest-machine-d20.notion.site/77980ca8efd3435e9915e88b830a5ca4";
  const url2 =
    "https://harvest-machine-d20.notion.site/d76bf5b332524288a9db8d1857c6bc19";
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
          <Toptitle>로그인</Toptitle>
          <Close>
            <img
              src={`${process.env.PUBLIC_URL}/images/close.png`}
              alt="close"
              onClick={navigateToFirstpage}
            />
          </Close>
        </Topbar>
        <Body>
          <BoxContainer>
            <Infoimg>
              <img
                src={`${process.env.PUBLIC_URL}/images/coachmark.png`}
                alt="coachmark"
                width="48px"
                onClick={openModalHandler}
              />
            </Infoimg>
            <Logo>
              <img
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="logo"
              />
            </Logo>

            {isOpen ? (
              <ModalBackdrop onClick={openModalHandler}>
                <ModalView onClick={(e) => e.stopPropagation()}>
                  <ExitBtn onClick={openModalHandler}>x</ExitBtn>
                  <CmLogo>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/coachmark2.png`}
                      alt="coachmark2"
                      width="300"
                      height="700"
                    />
                  </CmLogo>
                </ModalView>
              </ModalBackdrop>
            ) : null}
            <InputBox>
              <Input
                type="text"
                placeholder="아이디 (이메일)"
                onChange={(e) => setUsername(e.target.value)}
              />
            </InputBox>
            <InputBox>
              <Input
                type="text"
                placeholder="비밀번호"
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputBox>
          </BoxContainer>
          <FindLinks>
            <Findidment onClick={navigateTofindid}>아이디 찾기</Findidment>
            <Findpwment onClick={navigateTofindpw}>비밀번호 찾기</Findpwment>
          </FindLinks>
          <LoginBox onClick={navigateToCategory}>
            <LoginText>로그인</LoginText>
          </LoginBox>
          <MiddleMentBox>
            <p>
              <Memberq>아직 회원이 아니신가요?</Memberq>
              <br />
              <Signup onClick={navigateToSignup}>회원가입</Signup>
            </p>
          </MiddleMentBox>
        </Body>
        <MentBox>
          <Ment>
            계속 진행시 <MentTB>투 바이</MentTB>의{" "}
            <Mentmint
              onClick={() => {
                window.open(url1);
              }}
            >
              서비스 이용약관
            </Mentmint>
            에 동의하고
          </Ment>

          <Ment>
            <Mentmint
              onClick={() => {
                window.open(url2);
              }}
            >
              개인정보 처리방침
            </Mentmint>
            을 읽었음을 인정하는 것으로 간주됩니다.
          </Ment>
        </MentBox>
      </BodyWrapper>
    </Container>
  );
};
export default Login;
