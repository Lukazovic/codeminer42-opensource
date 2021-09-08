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
} from 'styled-system'

type Props = SpaceProps &
  ColorProps &
  LayoutProps & {
    as?: ElementType
  }

const Box = styled.div<Props>({}, compose(layout, space, color))

export default Box
