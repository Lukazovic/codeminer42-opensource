import styled from 'styled-components'
import Box from './Box'

const Section = styled(Box)``

Section.defaultProps = {
  as: 'section',
  py: ['5', '6'],
}

export default Section
