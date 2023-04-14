import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 300px;
  display: flex;
`;

const StyledTimeContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  span:first-child {
    font-size: 26px;
  }
`;

const Line = ({ isActive = false }) => {
  const [ms, setMs] = useState(0);

  const roundedValue = (value) => Math.floor(value);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setMs((ms) => ms + 1);
      }, 1);
    } else if (!isActive && ms !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, ms]);

  return (
    <StyledContainer>
      <StyledTimeContainer>
        <span>{roundedValue((ms / (1000 * 60 * 60)) % 24)}</span>
        <span>Hours</span>
      </StyledTimeContainer>
      <StyledTimeContainer>
        <span>{roundedValue((ms / 1000 / 60) % 60)}</span>
        <span>Minutes</span>
      </StyledTimeContainer>
      <StyledTimeContainer>
        <span>{roundedValue((ms / 1000) % 60)}</span>
        <span>Seconds</span>
      </StyledTimeContainer>
      <StyledTimeContainer>
        <span>{roundedValue(ms % 1000)}</span>
        <span>MS</span>
      </StyledTimeContainer>
    </StyledContainer>
  );
};

export default Line;
