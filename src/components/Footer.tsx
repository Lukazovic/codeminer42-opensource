import A from './A'
import Box from './Box'
import Container from './Container'
import Flex from './Flex'

const Footer = () => (
  <Box as='footer' height={['45px', '52px']} bg='blue'>
    <Container
      as={Flex}
      alignItems='center'
      justifyContent='center'
      height='100%'
      px='3'
    >
      <A
        href='https://www.codeminer42.com/'
        color='white'
        fontSize={['4', '5']}
      >
        © Codeminer42
      </A>
    </Container>
  </Box>
)

export default Footer
