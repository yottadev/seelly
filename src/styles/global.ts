import { createGlobalStyle } from "styled-components";
import colors from "./variables";

const GlobalStyle = createGlobalStyle`
  body, html, #root {
    font-family: 'Montserrat';
    margin: 0;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  p {
    margin: 0px;
  }

  /* Pedro, estado inicial da transição de 
rotas quando a rota vai ser inserida*/
.fade-enter {
  transform: translateX(-100%);
  z-index: 1;
  display: flex;
}

/* Pedro, estado final da transição de 
rotas após a rota ser inserida*/
.fade-enter.fade-enter-active {
  transform: translateX(0);
  display: flex;
  transition: opacity 250ms ease-out, transform 300ms ease;
}

/* Pedro, estado inicial da transição de 
rotas quando a rota vai ser removida*/
.fade-exit {
  display: none;
  transform: translateX(0);
}

/* Pedro, lol, estado final da transição de
rotas quando a rota vai ser removida*/
.fade-exit.fade-exit-active {
  transform: translateX(100%);
  display: none;
  transition: opacity 250ms ease-out, transform 300ms ease;
}

`;

export default GlobalStyle;
