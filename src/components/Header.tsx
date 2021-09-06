import A from './A'
import Box from './Box'
import Container from './Container'
import Flex from './Flex'
import Heading from './Heading'
import Logo from './Logo'
import Text from './Text'

const Header = () => (
  <Box as='header'>
    <Flex
      as={Container}
      alignItems='center'
      justifyContent={['center', 'space-between']}
      height='60px'
    >
      <A as={Flex} href='/' alignItems='center'>
        <Logo />

        <Heading
          as='h1'
          ml='2'
          fontFamily='logo'
          fontSize={['6', '6', '7']}
          fontWeight='600'
          fontStyle='normal'
        >
          Code
          <Text as='span' color='gray.600'>
            Miner
          </Text>
        </Heading>
      </A>
    </Flex>
  </Box>
)

export default Header
