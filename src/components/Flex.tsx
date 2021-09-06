import { ComponentProps } from 'react'
import styled from 'styled-components'
import { flexbox, FlexboxProps } from 'styled-system'
import Box from './Box'

type Props = FlexboxProps

const Flex = styled(Box)<Props>`
  display: flex;

  ${flexbox}
`

export default Flex
