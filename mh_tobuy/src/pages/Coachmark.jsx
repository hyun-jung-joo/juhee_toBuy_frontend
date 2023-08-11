import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CoachmarkContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const CoachmarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const CoachmarkMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  background-color: #fff;
  border-radius: 6px;
  z-index: 2;
`;

const Coachmark = ({ message, show }) => {
  if (!show) {
    return null;
  }

  return (
    <CoachmarkContainer>
      <CoachmarkOverlay />
      <CoachmarkMessage>{message}</CoachmarkMessage>
    </CoachmarkContainer>
  );
};

Coachmark.propTypes = {
  message: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
};

export default Coachmark;
