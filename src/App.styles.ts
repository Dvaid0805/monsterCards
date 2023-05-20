import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(
        to left,
        rgba(7, 27, 82, 1) 0%,
        rgba(0, 128, 128, 1) 100%
    );
    text-align: center;
  }
`;

export const AppWrapper = styled.div`
  h1 {
    margin-top: 75px;
    margin-bottom: 50px;
    font-size: 112px;
    color: #0ccac4;
    font-family: 'Bigelow Rules', sans-serif;
  }
`;
