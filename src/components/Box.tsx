import { ElementType } from 'react'
import styled from 'styled-components'
import {
  compose,
  space,
  SpaceProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  border,
  BorderProps,
} from 'styled-system'

type Props = SpaceProps &
  ColorProps &
  LayoutProps &
  BorderProps & {
    as?: ElementType
  }

const Box = styled.div<Props>({}, compose(layout, space, color, border))

export default Box
