import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  text-align: center;
  background-color: #fff;
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
  overflow: auto; /* 스크롤이 있는 경우 내용을 스크롤합니다. */
`;

const Infoimg = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  padding: 4px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const Logoimg = styled.div`
  width: 369px;
  height: 212.029px;
  flex-shrink: 0;
`;

const Box1 = styled.div`
  display: flex;
  width: 280px;
  padding: 20px 0px;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  background: #e02d11;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Jointext = styled.div`
  color: #fff;
  text-align: center;
  font-family: S-Core Dream;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Box2 = styled.div`
  display: flex;
  width: 280px;
  padding: 20px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: #05bba2;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Logintext = styled.div`
  color: #fff;
  text-align: center;
  font-family: S-Core Dream;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Box3 = styled.div`
display: inline-flex;
padding: 20px 48px 18px 47px;
justify-content: center;
align-items: center;

border-radius: 6px;
background: #FFF;
box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.25);

Show 1 more color

`;

const Prevideologotext = styled.div`
  text-align: center;
  font-family: Sonsie One;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: linear-gradient(180deg, #e02d11 0%, #05bba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Prevideotext = styled.div`
  color: #60716f;
  font-family: S-Core Dream;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Login = () => {
  const navigate = useNavigate();
  const navigateTologinpage = () => {
    navigate("/login");
  };

  const navigateTosignup = () => {
    navigate("/signup");
  };

  const navigateTonosign = () => {
    navigate("/NoSign");
  };

  return (
    <Container>
      <BodyWrapper>
        <Infoimg>
          <img src={`${process.env.PUBLIC_URL}/images/info.png`} alt="info" />
        </Infoimg>

        <Logoimg>
          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" />
        </Logoimg>

        <Box1 onClick={navigateTologinpage}>
          <Jointext>회원가입</Jointext>
        </Box1>
        <Box2 onClick={navigateTosignup}>
          <Logintext>로그인</Logintext>
        </Box2>
        <Box3 onClick={navigateTonosign}>
          <Prevideologotext>To buy</Prevideologotext>
          <Prevideotext>시연 영상</Prevideotext>
        </Box3>
      </BodyWrapper>
    </Container>
  );
};
export default Login;
