import { createGlobalStyle } from 'styled-components'

export const ResetStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`

export const GlobalStyle = createGlobalStyle`
  :root {
    --light-grey: #e4e4e4;
    --grey: #adadad;
    --dark-grey: #333;
    --light-blue: #d2e9ff;
    --blue: #4A85BD;
    --dark-blue: #0A68A8;
    --wine: #C4515B;
    --red: #b72330;
  }
  
  html {
    font-size: 62.5%;
    height: 100%;
  }

  body {
    min-width: 360px;
    height: 100%;
    min-height: 100%;
    font-size: 1.4rem;
    line-height: normal;
    font-family: 'Open Sans', sans-serif;
    color: var(--dark-grey);
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
    
  }

  input, button {
    font-family: 'Open Sans', sans-serif;
  }

  #app {
    height: 100%;
    min-height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
  }

  input[type="checkbox"]{
    cursor: pointer;
    
    & + label {
      cursor: pointer;
    }
  }

`
