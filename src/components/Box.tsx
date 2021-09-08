import styled from 'styled-components'
import {
  space,
  SpaceProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  border,
  BorderProps,
} from 'styled-system'

type Props = SpaceProps & ColorProps & LayoutProps & BorderProps

const Box = styled.div<Props>({}, layout, space, color, border)

export default Box
