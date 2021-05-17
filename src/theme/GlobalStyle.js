import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  *, *::before, *::after {
    
    box-sizing: border-box;
    border: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    outline: 0 !important;
  }

  button, button:focus, input:focus, textarea:focus, select:focus {
    outline: 0 !important;
  }

  body {
    font-family: 'Inter', sans-serif;
    color: rgba(255,255,255,1);
    background-color: rgba(34, 27, 58, 1)
  }
`;

export default GlobalStyle;
