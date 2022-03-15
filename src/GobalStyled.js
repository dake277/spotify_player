import { createGlobalStyle } from 'styled-components'
import prox from './fonts/prox.woff';

export default createGlobalStyle`
ul {
    list-style-type: none;
    padding: 0;
}
textarea, select, input, button { outline: none; }
body {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: .015em;
    font-weight: var(--glue-font-weight-normal);
    color: #b3b3b3;
    text-transform: none;
    font-family: sans-serif;

    @font-face {
      font-family: 'Prox';
      src: url(${prox}) format('woff');
      font-style: normal;
    }
}

::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-track {
  background: rgb(0,0,0,0.8); 
}
 
::-webkit-scrollbar-thumb {
  background: #888; 
}

::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
`