import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
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
    background-size: cover;
    color: ${({ theme }) => theme.primaryLight};
    height: 100vh;
    text-rendering: optimizeLegibility;
  }
  header {
    background: url(./assets/woodgrain.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 70px;
    width: 100vw;
    z-index: 100;
    position: absolute;
    top: 0;
    color: whitesmoke;
    letter-spacing: 6px;
    text-shadow: 0 5px 14px black;
    box-shadow: 0 3px 18px black;
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
    height: 5vh;
    max-height: 50px;
    filter: opacity(65%)
  }
    
  .App-logo {
    width: 7vh;
    pointer-events: none;
    max-height: 50px;
    filter: invert(100%) sepia(100%) saturate(2022%) hue-rotate(287deg)
      brightness(72%) contrast(189%);
  }

  .playerCard {
    background-position: center center;
    background-size: cover;
    border: 1px outset;
    border-radius: 6px;
    box-shadow: 0 2px 15px gray;
    min-width: 200px;
    max-width 400px;
    width: 20vw;
    height: 40vh;
    margin: 30px;
  }

  .card-dimmer {
    height: 100%;
    width: 100%;
    background: rgba(245, 245, 245, .6);
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction:column;
    color: black;
    text-shadow: 0 0 5px white;
    padding: 18px;
    border-radius: 6px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-stroke: .1px rgb(140, 140, 140);
  }

  .card-dimmer > h2, h4 {
    margin: -4px;
  }

  h2 {
    font-size: 2.4rem;
  }

  .card-class-logo {
    height: 5vh;
    max-height: 50px;
  }

  .stats  {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .stats > h3, h4 {
    margin: 0;
  }

  .options {
    display: flex;
    justify-content: center;
    align-self: flex-end;
    // position: absolute;
    // bottom: 0;
    // left: 0;
    width: 100%;
  }

  .options > button {
    margin: 4px;
    border: 1px solid gray;
    border-radius: 2px;
    background: rgba(245, 245, 245, .6);
    font-family: inherit;
    font-size: 1.2rem;
  }

  .modal {
    background-position: center center;
    width: 60vw;
    height: 50vh;
    position: absolute;
    border: 1px outset;
    border-radius: 6px;
    box-shadow: 0 2px 15px gray;
  }

  .modal-dimmer {
    position: relative;
    background: rgba(245, 245, 245, .6);
    height: 100%;
    width: 100%;
    color: black;
    border-radius: 6px;
    padding: 10px;
  }

  .modal-close {
    font-size: 1rem;
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    border-radius: 5px;
    background: rgba(210, 0, 0, .2)
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
  // img {
  //   border-radius: 5px;
  //   height: auto;
  //   width: 10rem;
  // }
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

  @media screen and (max-width: 450px) {
    h1 {
      font-size: 26px;
    }
    h2 {
      font-size: 1.8rem;
    }
    .header-class-logo {
      height: 2vh;
      max-height: 50px;
      filter: opacity(65%)
    }
    .playerCard {
      height: 32vh;
    }
    .card-dimmer {
      padding: 10px;
    }
    .card-class-logo {
      height: 3.5vh;
    }
    .body {
      flex-direction: column;
    }
  }
`;
