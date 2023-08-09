// Modal.js
import React from "react";
import styled from "styled-components";
const OutModal = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.4);
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

const Modalbody = styled.div`
  position: absolute;
  width: 300px;
  height: 500px;
  padding: 40px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`;

const ModalCloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  color: rgba(0, 0, 0, 0.7);
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
`;

function FirstpageModal(props) {
  function closeModal() {
    props.closeModal();
  }

  return (
    <OutModal onClick={closeModal}>
      <BodyWrapper>
        <Modalbody onClick={(e) => e.stopPropagation()}>
          {props.children}
          <ModalCloseBtn onClick={closeModal}>✖</ModalCloseBtn>
        </Modalbody>
      </BodyWrapper>
    </OutModal>
  );
}

export default FirstpageModal;
