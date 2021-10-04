import {
  A,
  Button,
  Container,
  Flex,
  Heading,
  Section,
  Text,
} from '@/components'
import Logo from './Logo'

const hacktoberUrl = 'https://hacktoberfest.digitalocean.com/'

const Hacktoberfest = () => (
  <Section bg='hacktoberfest.black'>
    <Container>
      <A display='block' maxWidth='600px' margin='0 auto' href={hacktoberUrl}>
        <Logo />
      </A>

      <Flex flexDirection='column' alignItems='center' mt='5'>
        <Button
          as={A}
          minHeight='48px'
          bg='hacktoberfest.orange'
          fontFamily='hacktoberfest'
          href={hacktoberUrl}
        >
          Subscribe Now
        </Button>

        {/*<Heading
          as='h3'
          mt='5'
          fontFamily='hacktoberfest'
          fontSize='7'
          fontStyle='none'
          color='white'
        >
          Are you a miner?
        </Heading>

        <Text mt='4' fontFamily='hacktoberfest' fontSize='6' color='white'>
          Have 1 Pull Requested accepted to win 1 custom limited edition
          T-Shirt.
        </Text>*/}
      </Flex>
    </Container>
  </Section>
)

export default Hacktoberfest
