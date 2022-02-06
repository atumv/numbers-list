import * as styled from 'styled-components';

import FiraSansRW from 'assets/fonts/FiraSans-Regular.woff';
import FiraSansRW2 from 'assets/fonts/FiraSans-Regular.woff2';

export const GlobalStyles = styled.createGlobalStyle`
  @font-face {
    font-family: 'Fira Sans';
    src: local('Fira Sans'), url(${FiraSansRW}) format('woff'),
      url(${FiraSansRW2}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: 'Fira Sans', 'Roboto', 'Open Sans', 'Arial', sans-serif;
  }

  html {
    overflow-y: scroll;
  }

  body {
    min-height: 100vh;
    word-break: break-word;
    margin: 0;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
