import Icon from './Icon'
import A from './A'
import Box from './Box'
import Container from './Container'
import Flex from './Flex'
import Heading from './Heading'
import Logo from './Logo'
import Text from './Text'

type mediaIcon = {
  name: 'linkedin' | 'facebook' | 'twitter' | 'github'
  link: string
}

const mediaIcons: mediaIcon[] = [
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/company/codeminer42',
  },

  {
    name: 'facebook',
    link: 'https://www.facebook.com/codeminer42',
  },

  {
    name: 'twitter',
    link: 'https://twitter.com/codeminer42',
  },
]

const Header = () => (
  <Box as='header'>
    <Flex
      as={Container}
      alignItems='center'
      justifyContent='space-between'
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

      <Flex justifyContent='space-around' width='300px'>
        {mediaIcons.map((icon) => (
          <Flex
            key={icon.name}
            as='span'
            alignItems='center'
            justifyContent='center'
            backgroundColor='gray.100'
            borderRadius='50%'
            size='30px'
          >
            <A href={icon.link} target='_blank' rel='noopener noreferrer'>
              <Icon name={icon.name} />
            </A>
          </Flex>
        ))}

        <Flex
          as='span'
          alignItems='center'
          justifyContent='center'
          backgroundColor='gray.100'
          borderRadius='50%'
          size='30px'
          marginLeft="100px"
        >
          <A
            href='http://github.com/Codeminer42/opensource'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Icon name='github' />
          </A>
        </Flex>
      </Flex>
    </Flex>
  </Box>
)

export default Header
