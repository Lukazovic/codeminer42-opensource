import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import Text from './Text'

type Props = {
  disabled?: boolean
}

const Button = styled(Text)<Props>`
  display: inline-flex;
  align-items: center;

  line-height: 1;
  color: ${themeGet('colors.white')};
  opacity: 1;
  outline: none;
  cursor: pointer;
  transition: opacity 0.2s ease;
  border-radius: 50vh;
  border: none;
  text-decoration: none;

  &:hover :not(&:disabled) {
    opacity: 0.8;
  }

  &:disabled {
    background-color: ${themeGet('colors.gray.600')};
    cursor: auto;
  }
`

Button.defaultProps = {
  as: 'button',
  px: '4',
  py: '1',
  minHeight: '36px',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  color: 'white',
  bg: 'red',
}

export default Button
