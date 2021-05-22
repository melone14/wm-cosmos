import styled from "styled-components";

const StyledDot = styled.div`
  width: 1.041667vh;
  height: 1.041667vh;
  background: ${(props) => props.color};
  border-radius: 50%;
  z-index: 400;
  position: absolute;
  top: ${(props) => props.top}%;
  ${(props) =>
    props.left ? `left: ${props.left}%` : `right: ${props.right}%`};
`;

export const Dot = ({ left, right, top, color }) => {
  return <StyledDot left={left} right={right} top={top} color={color} />;
};
