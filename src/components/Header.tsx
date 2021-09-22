import Icon from './Icon'
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
      justifyContent='space-between'
      height='60px'
    >
      <A href='/'>
        <Flex alignItems='center'>
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
        </Flex>
      </A>

      <Flex justifyContent='space-between' width='100px'>
        <Flex
          as='span'
          alignItems='center'
          justifyContent='center'
          backgroundColor='gray.100'
          borderRadius='50%'
          size='30px'
        >
          <A
            href='https://www.linkedin.com/company/codeminer42'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Icon name='linkedin' />
          </A>
        </Flex>

        <Flex
          as='span'
          alignItems='center'
          justifyContent='center'
          backgroundColor='gray.100'
          borderRadius='50%'
          size='30px'
        >
          <A
            href='https://www.facebook.com/codeminer42'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Icon name='facebook' />
          </A>
        </Flex>

        <Flex
          as='span'
          alignItems='center'
          justifyContent='center'
          backgroundColor='gray.100'
          borderRadius='50%'
          size='30px'
        >
          <A
            href='https://twitter.com/codeminer42'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Icon name='twitter' />
          </A>
        </Flex>
      </Flex>
    </Flex>
  </Box>
)

export default Header
