import { createGlobalStyle } from 'styled-components'
import theme from '../theme'

const GlobalStyle = createGlobalStyle`
  html {
    -webkit-tap-highlight-color: transparent;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-tap-highlight-color: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${theme.fonts.body};
    font-size: 1.6rem;
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
  }

  html,
  body,
  #__next {
    height: 100%;
  }
`

export default GlobalStyle
