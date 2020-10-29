import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
${({ theme }) => css`
  html {
    height: 100%;

    body {
      height: 100%;
      background: ${theme.colors.background};
      color: ${theme.colors.black};
      border-color: ${theme.colors.black};
      a {
        color: ${theme.colors.black};
      }
      a:hover {
         color: #00F
      }
      #main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: sans-serif;
        height: 100%;
        padding: 15px;
      }
    }
  }
`}
`