import styled from 'styled-components'
import {
  space,
  SpaceProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
} from 'styled-system'

type Props = SpaceProps & ColorProps & LayoutProps

const Box = styled.div<Props>({}, layout, space, color)

export default Box
