import { ComponentProps } from 'react'
import styled from 'styled-components'
import { flexbox, typography } from 'styled-system'
import css from '@styled-system/css'
import themeGet from '@styled-system/theme-get'
import Link from 'next/link'
import Box from './Box'

export const Flex = styled(Box)`
  display: flex;

  ${flexbox}
`

type TextProps = ComponentProps<typeof Box> & {
  textTransform?: 'uppercase' | 'lowercase' | 'none'
}

export const Text = styled<TextProps>(Box)`
  ${typography}

  &&& {
    text-transform: ${(props) => props.textTransform};
  }
`

Text.defaultProps = {
  as: 'p',
  mt: 0,
  mb: 0,
}

export const Heading = styled(Text)``

Heading.defaultProps = {
  as: 'h2',
  fontStyle: 'italic',
  textTransform: 'uppercase',
}

export const Container = styled(Box)``

Container.defaultProps = {
  width: 1,
  maxWidth: '1024px',
  m: '0 auto',
  px: ['3', '4'],
}

export const Section = styled(Box)``

Section.defaultProps = {
  as: 'section',
  py: ['5', '6'],
}

export const Button = styled(Text)`
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

  &:hover {
    opacity: 0.8;
  }
`

Button.defaultProps = {
  as: 'button',
}

export const A = ({ href, ...props }) => (
  <Link href={href} passHref>
    <Text
      as='a'
      color='black'
      fontSize='inherit'
      bg='transparent'
      css={css({
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'opacity .2s ease',
        ':hover': {
          opacity: 0.8,
        },
      })}
      {...props}
    />
  </Link>
)

const icons = {
  star: 'M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z',
  fork: 'M164.571 841.143c0-30.286-24.571-54.857-54.857-54.857s-54.857 24.571-54.857 54.857 24.571 54.857 54.857 54.857 54.857-24.571 54.857-54.857zM164.571 182.857c0-30.286-24.571-54.857-54.857-54.857s-54.857 24.571-54.857 54.857 24.571 54.857 54.857 54.857 54.857-24.571 54.857-54.857zM530.286 256c0-30.286-24.571-54.857-54.857-54.857s-54.857 24.571-54.857 54.857 24.571 54.857 54.857 54.857 54.857-24.571 54.857-54.857zM585.143 256c0 40.571-22.286 76-54.857 94.857-1.714 206.286-148 252-245.143 282.857-90.857 28.571-120.571 42.286-120.571 97.714v14.857c32.571 18.857 54.857 54.286 54.857 94.857 0 60.571-49.143 109.714-109.714 109.714s-109.714-49.143-109.714-109.714c0-40.571 22.286-76 54.857-94.857v-468.571c-32.571-18.857-54.857-54.286-54.857-94.857 0-60.571 49.143-109.714 109.714-109.714s109.714 49.143 109.714 109.714c0 40.571-22.286 76-54.857 94.857v284c29.143-14.286 60-24 88-32.571 106.286-33.714 166.857-58.857 168-178.286-32.571-18.857-54.857-54.286-54.857-94.857 0-60.571 49.143-109.714 109.714-109.714s109.714 49.143 109.714 109.714z',
}

type IconProps = {
  name: keyof typeof icons
  color: string
}

export const Icon = ({ name, color = 'black', ...props }: IconProps) => (
  <Box
    as='svg'
    display='inline-block'
    size='18px'
    viewBox='0 0 1024 1024'
    css={css({
      verticalAlign: 'middle',
      fill: color,
    })}
    {...props}
  >
    <path d={icons[name]} />
  </Box>
)

export const Logo = (props) => (
  <Box as='svg' width='60px' height='60px' viewBox='0 0 300 300' {...props}>
    <defs>
      <filter id='filter-1'>
        <feColorMatrix
          in='SourceGraphic'
          type='matrix'
          values='0 0 0 0 0.000000 0 0 0 0 0.000000 0 0 0 0 0.000000 0 0 0 1.000000 0'
        ></feColorMatrix>
      </filter>
    </defs>
    <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g filter='url(#filter-1)' id='Group-40'>
        <g transform='translate(24.000000, 71.000000)'>
          <polygon
            id='Path'
            fill='#2F2F2F'
            points='150.416508 72.5305784 163.262424 52.9323567 227.660581 157.995225 250.408387 143.580202 163.262424 -5.68434189e-14 134.633605 48.0474169'
          ></polygon>
          <polygon
            id='Path'
            fill='#2F2F2F'
            points='22.4965698 157.995225 87.399589 52.9323567 151.797746 157.995225 174.545552 143.580202 87.399589 9.9475983e-14 2.98427949e-13 144.594642'
          ></polygon>
          <path
            d='M232.329932,0.803408232 C242.804404,0.803408232 251.295641,9.43616305 251.295641,20.0852058 C251.295641,30.7342485 242.804404,39.3670034 232.329932,39.3670034 C221.85546,39.3670034 213.364223,30.7342485 213.364223,20.0852058 C213.364223,9.43616305 221.85546,0.803408232 232.329932,0.803408232 Z M232.329932,8.83749055 C226.219823,8.83749055 221.266602,13.8732642 221.266602,20.0852058 C221.266602,26.2971474 226.219823,31.332921 232.329932,31.332921 C238.44004,31.332921 243.393262,26.2971474 243.393262,20.0852058 C243.393262,13.8732642 238.44004,8.83749055 232.329932,8.83749055 Z'
            id='Combined-Shape'
            fill='#2F2F2F'
          ></path>
        </g>
      </g>
    </g>
  </Box>
)
