import styled from "styled-components";

const StyledLogo = styled.div`
  width: 116px;
  height: 23.98px;
  position: absolute;
  top: -136px;
  left: 155px;
  background: url("/assets/logo.png");
`;

export const Logo = () => {
  return <StyledLogo></StyledLogo>;
};
