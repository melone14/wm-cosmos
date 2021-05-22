import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  *, *::before, *::after {
    
    box-sizing: border-box;
    border: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    outline: 0 !important;
    padding: 0;
    margin: 0;
  }

  button, button:focus, input:focus, textarea:focus, select:focus {
    outline: 0 !important;
  }

  body {
    font-family: 'Inter', sans-serif;
    color: rgba(255,255,255,1);
    background-color: rgba(34, 27, 58, 1)
  }

  /* width */
::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgba(34, 26, 60, 1);
  border-radius: 8px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(83, 71, 125, 1);
  border-radius: 8px;
  height: 76px;
}
`;

export default GlobalStyle;
