import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100vw;
  height: 15vh;
  position: absolute;
  bottom: 0;
`;

const Text1 = styled.p`
  display: inline-block;
  width: 14.861111vw;
  min-width: 202px;
  color: ${({ theme }) => theme.colors.footerText};
  font-size: ${({ theme }) => theme.fontSize.H100};
  letter-spacing: 0.4;
  position: absolute;
  left: 11.458333vw;
  bottom: 3.125vh;
`;

const Text2 = styled(Text1)`
  width: 13.541667vw;
  min-width: 192px;
  left: 75.069444vw;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <Text1>Copyright © Usertive & SpaceX API</Text1>
      <Text2>Recruiment Task / Summer 2021</Text2>
    </StyledFooter>
  );
};
