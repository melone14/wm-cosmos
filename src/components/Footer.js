import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 1111px;
  height: 16px;
  /* border: 1px solid red; */
  position: absolute;
  bottom: 24px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.footerText};
  font-size: ${({ theme }) => theme.fontSize.H100};
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <Text>Copyright © Usertive & SpaceX API</Text>
      <Text>Recruiment Task / Summer 2021</Text>
    </StyledFooter>
  );
};
