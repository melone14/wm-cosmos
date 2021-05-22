import styled from "styled-components";

const StyledLogo = styled.img`
  width: 8.0555%;
  height: 3.125%;
  position: absolute;
  top: 4.6875%;
  left: 11.4583%;
`;

export const Logo = () => {
  return <StyledLogo src="/assets/logoSVG.svg"></StyledLogo>;
};
