import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  .body {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    background: url(https://i.pinimg.com/originals/6b/72/23/6b7223d0def9fb19401c5758808f4178.jpg) no-repeat fixed center;
    color: ${({ theme }) => theme.primaryLight};
    height: 100vh;
    text-rendering: optimizeLegibility;
  }
  header {
    background: url(./assets/woodgrain.jpg);
  background-repeat: none;
  height: 70px;
  color: whitesmoke;
  letter-spacing: 6px;
  text-shadow: 0 5px 14px black;
  box-shadow: 0 1px 5px black;
  -webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
-webkit-text-stroke: .1px rgb(80, 80, 80);
  }

  .dimmer {
    display: flex;
  justify-content: space-around;
  align-items: center;
    flex: 1;
    background-color: rgba(240, 240, 240, .3);
  }

  .logo {
    // margin-top: 20px;
    height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
}

.header-class-logo {
  width: 8vh;
  filter: opacity(50%)
}
  
.App-logo {
  width: 8vh;
  pointer-events: none;
  filter: invert(100%) sepia(100%) saturate(1822%) hue-rotate(290deg)
    brightness(80%) contrast(119%);
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
    font-size: 4rem;
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
`;
