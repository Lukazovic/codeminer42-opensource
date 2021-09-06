import styled from 'styled-components'
import Text from './Text'

const Heading = styled(Text)``

Heading.defaultProps = {
  as: 'h2',
  fontStyle: 'italic',
  textTransform: 'uppercase',
}

export default Heading
