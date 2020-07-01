import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    scroll-behavior: smooth;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  .body {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: url(https://i.pinimg.com/originals/6b/72/23/6b7223d0def9fb19401c5758808f4178.jpg) no-repeat fixed center;
    background-size: cover;
    height: 100%;
    width: 100%;
    text-rendering: optimizeLegibility;
    overflow: auto;
  }

  .scrollview {

    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    margin-top: 70px;
    height: auto;
    width: 100%;
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

  .xpicon {
    width: 80px;
    pointer-events: none;
    max-height: 80px;
    filter: invert(100%) sepia(100%) saturate(2022%) hue-rotate(287deg)
      brightness(72%) contrast(189%);
    position: absolute;
    top: 44%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .xpnum {
    font-size: 33px;
    position: absolute;
    top: 18%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
  }

  .xpdiv {
    position: relative;
    height: 100px;
  }

  .playerCard {
    background-position: center center;
    background-size: cover;
    border: 1px outset;
    border-radius: 6px;
    box-shadow: 0 2px 15px gray;
    min-width: 200px;
    min-height: 235px;
    max-width 400px;
    width: 20vw;
    height: 35vh;
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

  .item-logo {
    height: calc(8px + 2vh);
    max-height: 50px;
    filter: opacity(65%)
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

  .stats > button {
    margin: 4px;
    border: 1px solid gray;
    border-radius: 2px;
    background: rgba(245, 245, 245, .4);
    font-family: inherit;
    font-size: calc(1.1rem + 1vw);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-stroke: .1px rgb(140, 140, 140);
  }

  #gold {
    width: 50px;
    font-family: inherit;
    font-size: 1.2rem;
    text-align: center;
  }

  .gold-row > button {
    margin: 8px;
    border: 1px solid gray;
    border-radius: 2px;
    background: rgba(245, 245, 245, .6);
    font-family: inherit;
    font-size: 1.8rem;
  }

  .goldSubmit {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .goldSubmit > button {
    margin: 10px;
    border: 1px solid gray;
    border-radius: 2px;
    background: rgba(245, 245, 245, .6);
    font-family: inherit;
    font-size: 1.2rem;
  }

  .additem {
    margin: 4px;
    border: 1px solid gray;
    border-radius: 2px;
    background: rgba(245, 245, 245, .6);
    font-family: inherit;
    font-size: 1.1rem;
  }

  .modal {
    background-position: center center;
    width: fit-content;
    min-width: 250px;
    max-width: 650px;
    height: fit-content;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 101;
    border: 1px outset;
    border-radius: 6px;
    box-shadow: 0 2px 15px gray;
  }

  .modal-dimmer {
    background: rgba(245, 245, 245, .6);
    height: 100%;
    min-height: 35vh;
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
    background: transparent;
  }

  .modal-header {
    margin: 0 0 10px;
    font-size: calc(18px + 1.5vw)
  }

  h3 {
    margin: -10px;
  }

  .shop-row {
    display: flex;
    align-items: center;
    justify-content: center
  }

  .perk-row {
    display: flex;
    align-items: center
  }

  .perk-text {
    width: 74%;
    text-align: left;
  }

  .checkboxes {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    text-align: right;
    padding: 4px;
  }

  .checkbox {
    -webkit-appearance: none;
    background-color: #fafafa;
    border: 1px solid #cacece;
    box-shadow: 0 1px 5px rgba(0,0,0,0.5), inset 0px -15px 10px -12px rgba(0,0,0,0.05);
    padding: 5.5px;
    border-radius: 3px;
    display: inline-block;
    position: relative;
  }

  .checks {
    padding: 9px;
    margin: 3px;
  }

  .checkbox:active, .checkbox:checked:active {
    box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px 1px 3px rgba(0,0,0,0.1);
  }
  
  .checkbox:checked {
    background-color: #be2727;
    border: 1px solid #adb8c0;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);
    color: #99a1a7;
  }

  .checks:checked {
    padding: 9px;
    margin: 3px;
  }

  input {
    margin: 2px;
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
    text-decoration: none;
  }

  p {
    margin: 3px;
  }

  @media screen and (max-width: 550px) {
    h1 {
      font-size: 28px;
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
    p {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 693px) {
    p {
      font-size: 20px;
    }
  }

  @media screen and (min-width: 856px) {
    p {
      font-size: 25px;
    }
  }

  @media screen and (min-width: 1200px) {
    
    .scrollview {
      flex-direction: row;
      align-items: center;
      justify-content center;
      padding: 50px;
    }
    .playerCard {
      height: 55vh;
    }
    .stats > h3 {
      font-size: 2.6vw;
    }
    .card-dimmer > h2 {
      font-size: 3vw;
    }
    .card-dimmer > h4 {
      font-size: 1.5vw;
    }
    .modal {
      min-width: 380px
    }
    .modal-header {
      font-size: calc(12px + 1.5vw);
    }
    p {
      font-size: calc(10px + 1vw);
    }
  }

  @media screen and (max-height: 660px) {
    .scrollview {
      flex-direction: row;
      align-items: center;
      justify-content center;
      padding: 50px;
    }
    .playerCard {
      height: 55vh;
    }
  }
`;
