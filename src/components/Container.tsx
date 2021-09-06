import styled from 'styled-components'
import Box from './Box'

const Container = styled(Box)``

Container.defaultProps = {
  width: 1,
  maxWidth: '1024px',
  m: '0 auto',
  px: ['3', '4'],
}

export default Container
