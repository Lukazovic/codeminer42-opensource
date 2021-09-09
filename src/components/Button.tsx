import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import Text from './Text'

const Button = styled(Text)`
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  padding: 0 ${themeGet('space.4')}px;
  font-family: inherit;
  font-size: inherit;
  line-height: 1;
  color: ${themeGet('colors.white')};
  background-color: ${themeGet('colors.red')};
  opacity: 1;
  outline: none;
  cursor: pointer;
  transition: opacity 0.2s ease;
  border-radius: 50vh;
  border: none;
  text-decoration: none;

  &:hover :not(.disabled) {
    opacity: 0.8;
  }
`

Button.defaultProps = {
  as: 'button',
}

export default Button
