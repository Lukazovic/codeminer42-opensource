import React, { ComponentProps } from 'react'
import { StyledComponentPropsWithRef } from 'styled-components'
import css from '@styled-system/css'
import Link from 'next/link'
import Text from './Text'

type Props = ComponentProps<typeof Text> & {
  href: string
}

const A: React.FC<Props> = ({ href, ...props }) => (
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

export default A
