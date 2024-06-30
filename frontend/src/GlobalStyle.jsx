import { createGlobalStyle } from "styled-components";
 export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
   body{
    height: 200vh;
   }
  :root
    {
        --primary-text-color : #1764cb;
        --secondary-text-color :#312A2E;
    }

    a{
        text-decoration: none;
    }
    h1{
        font-family: 'circular',Arial, Helvetica, sans-serif;
    }
    p{
        font-size: 1rem;
    }
    .container{
        padding-inline-start: 20px;
        padding-inline-end: 20px;
    }
`;