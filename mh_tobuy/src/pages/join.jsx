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
  height: 24px;
  cursor: pointer;
`;

const Toptitle = styled.div`
  margin: auto;
  margin-left: 5%;
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

const Body = styled.div`
  display: flex;
  height: 752px;
  padding: 30px 14px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex-shrink: 0;
`;

const HeadBox = styled.div`
  display: flex;
  display: flex;
  width: 355px;
  height: 80px;
  padding: 10px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  background-color: #fff;
  margin-left: -1.5%;
  margin-top: -5%;
`;

const Infomsg = styled.div`
  color: #000;
  font-size: 21px;
  font-style: normal;
  font-weight: 550;
  line-height: normal;
  text-align: left;
`;

const Infoimg = styled.div`
  display: flex;
  width: 30px;
  height: 48px;
  padding: 4px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-left: 15%;
  margin-top: -10%;
`;

const InputBox = styled.div`
  display: flex;
  margin: -2%;
  margin-top: 1%;
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

const Prevideopage = () => {
  const navigate = useNavigate();
  const navigateToFirstpage = () => {
    navigate("/");
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    if (confirmPassword !== newPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  };

  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);

    if (password !== newConfirmPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      // 비밀번호 일치, 회원가입 로직 실행
      console.log("회원가입 성공");
    } else {
      // 비밀번호 불일치
      console.log("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <Container>
      <BodyWrapper>
        <Topbar>
          <Back>
            <img
              src={`${process.env.PUBLIC_URL}/images/backbutton.png`}
              alt="back"
              onClick={navigateToFirstpage}
            />
          </Back>
          <Toptitle>회원가입</Toptitle>
          <Close>
            <img
              src={`${process.env.PUBLIC_URL}/images/close.png`}
              alt="close"
              onClick={navigateToFirstpage}
            />
          </Close>
        </Topbar>
        <Body>
          <HeadBox>
            <Infomsg>
              어서오세요 <br />
              <span style={{ color: "#05bba2" }}>회원정보</span>를 입력해주세요!
            </Infomsg>
            <Infoimg>
              <img
                src={`${process.env.PUBLIC_URL}/images/info.png`}
                alt="info"
                onClick={navigateToFirstpage}
              />
            </Infoimg>
          </HeadBox>
          <InputBox>
            <Input
              type="text"
              placeholder="아이디 (이메일)"
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputBox>
          <br />
          <InputBox>
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="비밀번호"
            />
            <button type="button" onClick={togglePasswordVisibility}>
              {showPassword ? "Hide" : "Show"}
            </button>
          </InputBox>

          <InputBox>
            <Input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="비밀번호 재입력"
            />
            <button type="button" onClick={toggleConfirmPasswordVisibility}>
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </InputBox>
          {!passwordMatch && <p>비밀번호가 일치하지 않습니다.</p>}
          <br />
          <InputBox>
            <Input
              type="text"
              placeholder="이름"
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputBox>
          <InputBox>
            <Input
              type="phone"
              placeholder="전화번호"
              onChange={(e) => setPhone(e.target.value)}
            />
          </InputBox>
          <button type="submit" onClick={handleSubmit}>
            Sign Up
          </button>
        </Body>
      </BodyWrapper>
    </Container>
  );
};
export default Prevideopage;
