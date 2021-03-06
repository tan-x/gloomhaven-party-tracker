import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-stroke: .1px rgb(140, 140, 140);
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  .body {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgb(240, 224, 175);
    // background: url(https://i.pinimg.com/originals/6b/72/23/6b7223d0def9fb19401c5758808f4178.jpg) no-repeat fixed center;
    background-size: cover;
    scroll-behavior: smooth;
    height: 100%;
    width: 100%;
    text-rendering: optimizeLegibility;
    overflow: hidden;
  }

  .clickable:hover {
    cursor: pointer
  }

  .scrollview {
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    margin-top: 70px;
    padding-top: 60px;
    padding-bottom: 80px;
    height: 100%;
    min-height: 90%;
    width: 100%;
    overflow: scroll;
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
    box-shadow: 0 3px 18px black;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-stroke: .1px rgb(80, 80, 80);
  }

  .title {
    text-shadow: 0 5px 14px black;
  }

  .drawer {
    margin-top: 70px;
    z-index: 91;
    font-family: inherit;
    color: whitesmoke;
    text-shadow: 0 1 10px black;
    border-radius: 4px;
    border: none;
  }

  .drawer-dimmer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    flex: 1;
    border: none;
    background-color: rgba(240, 240, 240, .3);
  }

  #drawerArrow {
    position: absolute;
    bottom: -18px;
    left: 50%;
    z-index: 3;
    transform: translate(-50%, 50%);
    font-size: 20px;
    color: white;
    color: rgb(226, 201, 147);
    text-shadow: 0 2px 15px black;
  }

  .menuItem {
    font-size: calc(16px + 1.5vw);
    margin: -5px 0 -5px 5px;
    text-shadow: 0 0 10px black;
  }

  #menuToggle {
    border-radius: 5px;
    height: calc(250px + .4vw);
    width: 54vw;
    z-index: 2;
    filter: drop-shadow(0 5px 10px rgba(140, 140, 140, .5));
  }

  #menuToggle-dimmer {
    // clip-path: polygon(100% 54%, 100% 76%, 80% 100%, 20% 100%, 0 76%, 0 54%);
    position: absolute;
    top: 0;
    left: 0;
    height: calc(250px + .4vw);
    width: 54vw;
    z-index: 3;
    background-color: rgba(240, 240, 240, .3);
  }

  #menuToggle-shadow {
    // filter: drop-shadow(0 5px 10px rgba(140, 140, 140, .5));
    z-index: 1;
    position: absolute;
    top: -132px;
    left: 0;
    transform: translate(42.5%, -10%);
  }

  #menuArrow {
    position: absolute;
    bottom: -18px;
    left: 50%;
    z-index: 3;
    transform: translate(-50%, 50%);
    font-size: 20px;
    color: white;
    color: rgb(226, 201, 147);
    text-shadow: 0 2px 15px black;
  }

  #subtitle-text {
    margin-top: -22px;
    color: rgb(248,225,184);
    // text-shadow: 0 0 10px grey;
  }

  div > span {
    font-size: 30px;
    z-index: 2;
  }

  #subtitle > h2 {
    background: -webkit-linear-gradient(top, #f8e1b8, #ebd5ae, #DF9F28);
    background: linear-gradient(top, #f8e1b8, #ebd5ae, #DF9F28);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
    letter-spacing: 4px;
  }

  h2 > span {
    background: -webkit-linear-gradient(top, #f8e1b8, #ebd5ae, #DF9F28);
    background: linear-gradient(top, #f8e1b8, #ebd5ae, #DF9F28);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
    font-size: calc(14px + .8vw);
    position: relative;
    top: -3px;
    letter-spacing: 2px;
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
    display: none;
    width: 7vh;
    pointer-events: none;
    max-height: 50px;
    // filter: invert(100%) sepia(100%) saturate(2022%) hue-rotate(287deg)
    //   brightness(72%) contrast(189%);
  }

  .addChar {
    position: absolute;
    top: 90px;
    left: 3%;
    height: fit-content;
    width: calc(35px + 3vw);
    min-width: fit-content;
    padding: 2px;
    background: rgba(245, 245, 245, .6);
    border: 1px outset gray;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 90;
    color: gray;
  }

  .addChar:hover {
    color: black;
  }

  .addChar > h2 {
    margin: -5px;
  }

  .addChar > p {
    font-size: 1.8vh;
    margin: 0;
  }

  #addChar-name {
    height: 1.6rem;
    font-size: 1.2rem;
    text-align: center;
    box-shadow: 0 0 10px rgb(215, 215, 215);
  }

  .xpicon {
    width: 80px;
    pointer-events: none;
    max-height: 80px;
    // filter: invert(100%) sepia(100%) saturate(2022%) hue-rotate(287deg)
    //   brightness(72%) contrast(189%);
    // position: absolute;
    // top: 44%;
    // left: 50%;
    // transform: translate(-50%, -50%);
  }

  .xpnum {
    font-size: 33px;
    position: absolute;
    color: whitesmoke!important;
    top: 14%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
  }

  .xpdiv {
    position: relative;
    height: 100px;
  }

  .lvlbox {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    padding: 10px
  }

  .lvlup-exit {
    opacity: 0;
    margin: 0;
    text-shadow: 0 0 14px white;
  }

  .lvlup-exit-active {
    opacity: 0;
    margin: 0;
    text-shadow: 0 0 14px white;
    transistion: all 1s;
  }

  .lvlup-enter {
    margin: 0;
    opacity: 1;
  }

  .lvlup-enter-active {
    margin: 0;
    opacity: 1;
    transistion: all 1s ease-in-out;
  }

  .playerCard {
    background-position: center center;
    background-size: cover;
    border-radius: 3px;
    box-shadow: 0 2px 15px gray;
    min-width: 200px;
    min-height: 255px;
    max-width 400px;
    width: 20vw;
    height: 35vh;
    margin: 0 30px 30px;
    z-index: 500;
  }

  .card-dimmer {
    height: 100%;
    width: 100%;
    background: rgba(245, 245, 245, .5);
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction:column;
    color: black;
    text-shadow: 0 0 5px white;
    padding: 18px;
    border-radius: 3px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-stroke: .1px rgb(140, 140, 140);
    transition: background .6s ease-in-out;
  }

  .card-dimmer:hover {
    background: rgba(245, 245, 245, .4);
    transition: background .6s ease-in-out;
  }

  .card-dimmer > h2, h4 {
    margin: -4px;
  }

  .ruleline {
    width: 90%;
    position: absolute;
    filter: opacity(65%) saturate(10%);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .card-border {
    position: absolute;
    top:-4.2%;
    left: -8%;
    width: 55%;
    height: 55%;
    filter: brightness(110%) sepia(80%) drop-shadow(0 3px 10px rgba(0, 0, 0, 0.7));
  }

  .card-borderbtm {
    position: absolute;
    bottom:-3.5%;
    right: -6.5%;
    width: 45%;
    height: 45%;
    transform: rotate(180deg);
    filter: brightness(110%) sepia(80%) drop-shadow(0 -3px 10px rgba(0, 0, 0, 0.7));
  }

  h2 {
    font-size: 2.4rem;
  }

  .card-class-logo {
    height: 5vh;
    max-height: 50px;
    z-index: 20;
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
    position: relative;
    width: 100%;
    height: 70%;
  }

  .stats > h3, h4 {
    margin: 0;
  }

  .options {
    display: flex;
    justify-content: center;
    align-self: flex-end;
    position: relative;
    // bottom: 0;
    // left: 0;
    width: 100%;
  }

  .options > button {
    margin: 4px;
    border: 1px solid gray;
    border-radius: 5px;
    background: rgba(245, 245, 245, .6);
    box-shadow: 0 0 10px rgba(115, 115, 115, .5);
    font-family: inherit;
    font-size: 1.2rem;
    z-index: 2;
  }

  #xpbutton {
    box-shadow: 0 0 10px rgba(115, 115, 115, .5);
  }

  .stats > button {
    margin: 4px;
    border: 1px solid gray;
    border-radius: 5px;
    background: rgba(245, 245, 245, .6);
    font-family: inherit;
    font-size: calc(1.1rem + 1vw);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-stroke: .1px rgb(140, 140, 140);
    box-shadow: 0 0 10px rgba(115, 115, 115, .5);
  }

  #goldIn {
    width: 50px;
    height: 2rem;
    font-family: inherit;
    font-size: 1.2rem;
    text-align: center;
    box-shadow: 0 0 10px rgb(215, 215, 215);
  }

  .gold-row {
    min-width: 90%;
    justify-content: center;
  }

  .gold-row > button {
    margin: 8px;
    border: 1px solid gray;
    border-radius: 2px;
    background: rgba(245, 245, 245, .6);
    font-family: inherit;
    font-size: 1.4rem;
    min-width: fit-content;
    width: 1.9rem;
    height: 1.9rem;
    box-shadow: 0 0 10px rgb(215, 215, 215);
  }

  .columnFlex {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .columnFlex > button {
    margin: 10px;
    border: 1px solid gray;
    border-radius: 2px;
    background: rgba(245, 245, 245, .6);
    font-family: inherit;
    font-size: 1.2rem;
  }

  #updateGold {
    height: 2.2rem;
  }

  .additem {
    margin: 10px;
    border: 1px solid gray;
    border-radius: 2px;
    background: rgba(245, 245, 245, .6);
    font-family: inherit;
    font-size: 1.1rem;
  }

  .additem:hover {
    cursor:pointer;
  }

  .modal {
    background-position: center center;
    width: fit-content;
    min-width: 250px;
    max-width: 92vw;
    height: fit-content;
    min-height: fit-content;
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
    min-height: fit-content;
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

  #shop-filter {
    margin-bottom: 10px;
    font-family: inherit;
    font-size: calc(12px + .6vw);
  }

  #trade-filter {
    margin-top: 10px;
    font-family: inherit;
    font-size: calc(12px + .6vw);
  }

  .perk-row {
    display: flex;
    align-items: center;
    width: 100%;
    margin-right: 10px;
  }

  .perk-text {
    width: 74%;
    text-align: left;
    white-space: nowrap;
  }

  .perk-icon {
    width: calc(12px + 1vw);
    min-width: 16px;
    margin-bottom: 3px;
    margin-right: -2px;
    vertical-align: bottom;
  }

  .perk-div {
    width: 90vw;
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
    box-shadow: 0 1px 5px rgba(0,0,0,0.5);
    padding: 5.5px;
    border-radius: 3px;
    display: inline-block;
    position: relative;
  }

  .checkbox:hover {
    cursor:pointer;
  }

  .checks {
    padding: 9px;
    margin: 1px;
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

  .unlock-row {
    display: flex;
    justify-content: row;
    align-items: center;
    width: 100%;
    margin-right: 10px;
  }

  .unlock-text {
    font-size: calc(16px + 1vw) !important;
  }

  .unlock-blur {
    filter: blur(6px);
  }

  .unlock-num {
    font-size: calc(16px + 1vw) !important;
    margin: 2px;
  }

  #unlock-filter {
    margin-bottom: 10px;
    font-family: inherit;
    font-size: calc(12px + .6vw);
  }

  input {
    margin: 2px;
  }

  input, button, select, option {
    outline: none;
  }

  input:focus {
    border-color: black;
  }

  input:hover {
    
    border-color: black;
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
      padding: 5px;
    }
    .stats {
      height: 50%;
    }
    .card-class-logo {
      height: 4.5vh;
    }
    .body {
      flex-direction: column;
    }
    .body {
      background-attachment: initial;
    }
  }

  @media screen and (max-width: 390px) {
    p {
      font-size: 12px;
    }
    .perk-text {
      overflow: scroll
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

  @media screen and (max-width: 380px) {
    .perk-text {
      overflow: scroll
    }
  }

  @media screen and (min-width: 1000px) {
    .modal-perks {
      min-width: 380px;
      width: 40%;
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
      min-width: 380px;
      width: 40%;
    }
    .modal-perks {
      min-width: 380px;
      width: fit-content;
    }
    .modal-header {
      font-size: calc(12px + 1.5vw);
    }
    p {
      font-size: calc(10px + 1vw);
    }
  }

  @media screen and (max-height: 560px) {
    // .scrollview {
    //   flex-direction: row;
    //   align-items: center;
    //   justify-content center;
    //   padding: 50px;
    // }
    .playerCard {
      height: 55vh;
    }
  }
`;
