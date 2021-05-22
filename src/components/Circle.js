import styled from "styled-components";
import React from "react";

const Wrapper = styled.div`
  width: 45.106771vh;
  height: 45.106771vh;
  border-radius: 50%;
  position: absolute;
  top: ${(props) => props.top}%;
  ${(props) =>
    props.left ? `left: ${props.left}%` : `right: ${props.right}%`};
  background: linear-gradient(180deg, #2b2347 0%, #221b3a 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenterCircle = styled.div`
  border-radius: 50%;
  width: 32.085938vh;
  height: 32.085938vh;
  background: ${({ theme }) => theme.colors.background};
`;

export const Circle = ({ left, top, right }) => {
  return (
    <Wrapper left={left} top={top} right={right}>
      <CenterCircle />
    </Wrapper>
  );
};
