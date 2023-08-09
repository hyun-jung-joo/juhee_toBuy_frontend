import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FirstpageModal from "./firstpageModal";
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
  overflow: auto; /* 스크롤이 있는 경우 내용을 스크롤합니다. */
`;

const Infoimg = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  padding: 4px;
  margin-left: 320px;
  margin-top: 10px;
  cursor: pointer;
`;

const Logoimg = styled.div`
  width: 369px;
  height: 212.029px;
  flex-shrink: 0;
  margin-top: 100px;
`;

const Box1 = styled.div`
  display: inline-flex;
  padding: 20px 80px 18px 80px;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
  border-radius: 6px;
  background: #e02d11;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
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
  display: inline-flex;
  padding: 20px 90px 18px 90px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border-radius: 6px;
  background: #05bba2;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
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
  padding: 18px 28px 18px 40px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const Prevideologotext = styled.div`
  text-align: center;
  font-family: Sonsie One;
  font-size: 25px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-left: -10%;
  background: linear-gradient(180deg, #e02d11 0%, #05bba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Prevideotext = styled.div`
  margin-left: 10%;
  color: #60716f;
  font-family: S-Core Dream;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Firstpage = () => {
  const navigate = useNavigate();
  const navigateTologin = () => {
    navigate("/Login");
  };

  const navigateTojoin = () => {
    navigate("/Join");
  };

  const navigateToprevideopage = () => {
    navigate("/Prevideopage");
  };

  return (
    <Container>
      <BodyWrapper>
        <Infoimg>
          <img
            src={`${process.env.PUBLIC_URL}/images/info.png`}
            alt="info"
            onClick={<FirstpageModal></FirstpageModal>}
          />
        </Infoimg>

        <Logoimg>
          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" />
        </Logoimg>

        <Box1 onClick={navigateTojoin}>
          <Jointext>회원가입</Jointext>
        </Box1>
        <Box2 onClick={navigateTologin}>
          <Logintext>로그인</Logintext>
        </Box2>
        <Box3 onClick={navigateToprevideopage}>
          <Prevideologotext>To buy </Prevideologotext>
          <Prevideotext>시연 영상</Prevideotext>
        </Box3>
      </BodyWrapper>
    </Container>
  );
};
export default Firstpage;
