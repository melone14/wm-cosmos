import { useEffect, useState } from "react";
import GlobalStyle from "./theme/GlobalStyle";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

const StyledText = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.H500};
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StyledText>init</StyledText>
      </ThemeProvider>
    </>
  );
};

export default App;
