import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap');

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
 body{
    min-height:100vh;
    background-color:#fff;
    font-family:"Red Hat Display", sans-serif;
    line-height: 1.5;
  font-weight: 400;
  display:flex;
  justify-content:center;
  align-items:center;
}
html {
  font-size: 62.5%;
}
`;
