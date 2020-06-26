import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
//   body {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background: ${({ theme }) => theme.primaryDark};
//     color: ${({ theme }) => theme.primaryLight};
//     height: 100vh;
//     text-rendering: optimizeLegibility;
//   }
  header {
    background-color: white;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .App-logo {
    width: 4vw;
    pointer-events: none;
  }
  
  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }
  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  h1 {
    font-size: 3rem;
    text-align: center;
    text-transform: uppercase;
  }
  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
  }
  div {
    text-align: center;
  }
  small {
    display: block;
  }
  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }
`