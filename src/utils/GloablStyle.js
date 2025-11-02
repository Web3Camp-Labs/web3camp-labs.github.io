import { createGlobalStyle } from "styled-components";
import "../assets/fonts.scss";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "AdobeGurmukhi-Bold";
    src: url("https://web3camp.us/AdobeGurmukhi-Bold.otf");
  }
  @font-face {
    font-family: "Helvetica";
    src: url('https://web3camp.us/Helvetica.ttc');
  }

  html,
  body {
    padding: 0;
    margin: 0;
    background: #fff;
    color: #000;
    overflow-x: hidden;
  }
  * {
    padding: 0;
    margin: 0;
    font-family:"Open Sans", sans-serif
  }

  a{
    text-decoration: none;
    color: #666666;
  }

  ul,li{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .titleBold{
    font-family: "Jost-Bold";
    font-size: 48px;
  }
  .mainContent{
    margin: 0 auto;
    width: 1270px;
  }
  
  
`;
export default GlobalStyle
