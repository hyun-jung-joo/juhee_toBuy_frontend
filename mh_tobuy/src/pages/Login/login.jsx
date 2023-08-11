import React, { useState } from "react";
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
  gap: 108px;
  flex-shrink: 0;
  background: #f5f0e4;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Back = styled.div`
  width: 30px;
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
const FindLinks = styled.div`
  margin-bottom: -10%;
  margin-left: 58%;
  display: flex;
  gap: 10px; /* 아이디 찾기와 비밀번호 찾기 간격 조정 */
`;

const Findidment = styled.div`
  color: #05bba2;
  display: flex;
  font-family: S-Core Dream;
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

  font-family: S-Core Dream;
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
  font-family: S-Core Dream;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const MiddleMentBox = styled.div`
  display: flex;
  margin: auto;
  margin-top: -5%;
`;
const Memberq = styled.div`
  color: #320f0a;
  text-align: center;
  font-family: S-Core Dream;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const Signup = styled.div`
  margin-top: -15%;
  color: #e02d11;
  font-family: S-Core Dream;
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
  font-family: S-Core Dream;
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
  font-family: S-Core Dream;
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
  font-family: S-Core Dream;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-decoration-line: underline;
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
          <FindLinks>
            <Findidment onClick={navigateTofindid}>아이디 찾기</Findidment>
            <Findpwment onClick={navigateTofindpw}>비밀번호 찾기</Findpwment>
          </FindLinks>
          <LoginBox>
            <LoginText onClick={navigateToCategory}>로그인</LoginText>
          </LoginBox>
          <MiddleMentBox>
            <p>
              <Memberq>아직 회원이 아니신가요?</Memberq>
              <br />
              <Signup onClick={navigateToSignup}>회원가입</Signup>
            </p>
          </MiddleMentBox>
        </Body>
        <Ment>
          계속 진행시 <MentTB>투 바이</MentTB>의{" "}
          <Mentmint>서비스 이용약관</Mentmint>에 동의하고
        </Ment>

        <Ment>
          <Mentmint>개인정보 처리방침</Mentmint>을 읽었음을 인정하는 것으로
          간주됩니다.
        </Ment>
      </BodyWrapper>
    </Container>
  );
};
export default Login;
