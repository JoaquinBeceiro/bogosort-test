import React from "react";
import styled from "styled-components";

const StyledLine = styled.div`
  width: 1%;
  height: ${({ height }) => `${height}%`};
  background-color: #f44336;
  transition: all 0.1s ease-out;
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
`;

const Line = ({ height }) => {
  return <StyledLine height={height} />;
};

export default Line;
