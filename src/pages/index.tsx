import type { NextPage } from 'next'
import Head from 'next/head'
import Box from '@/components/Box'
import {
  A,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Logo,
  Section,
  Text,
} from '@/components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Opensource</title>
        <meta name='description' content='Opensource' />
      </Head>

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

      <Box as='main'>
        <Section py={['5', '6', '7']}>
          <Container as={Flex} flexDirection='column'>
            <Heading mb='3' fontSize={['7', '8', '10']}>
              Open Source
            </Heading>

            <Heading
              as={Text}
              fontSize={['6', '7', '8']}
              fontWeight='700'
              color='red'
            >
              In real open source, you have the right to control your own
              destiny
            </Heading>

            <Heading
              as={Text}
              mt='3'
              ml='auto'
              fontSize={['5', '6']}
              fontWeight='700'
              color='red'
            >
              - Linus Torvalds
            </Heading>
          </Container>
        </Section>

        <Section bg='gray.100' pb={['5', '6', '7']}>
          <Container>
            <Heading color='blue' fontSize={['7', '8', '9']}>
              Projects
            </Heading>

            <Flex
              flexDirection={['column', 'column', 'row']}
              pt={['4', '4', '5']}
            >
              <Box width={[1, 1, 1 / 3]} p={['3', '4']} bg='white'>
                <Heading
                  as='h3'
                  fontSize={['6', '7']}
                  fontStyle='normal'
                  color='red'
                >
                  Central
                </Heading>

                <Flex mt='1'>
                  <Heading as='p' fontWeight='700' color='blue'>
                    <Flex as='span' alignItems='center'>
                      <Icon mr='1' name='star' color='blue' /> 282
                    </Flex>
                  </Heading>
                  <Heading as='p' fontWeight='700' color='blue' ml='3'>
                    <Flex as='span' alignItems='center'>
                      <Icon name='fork' color='blue' /> 59
                    </Flex>
                  </Heading>
                </Flex>

                <Text mt={['3', '3', '4']}>
                  Fork and Evolution of the Fulcrum project - An agile project
                  planning tool and Pivotal Tracker drop-in replacement
                </Text>
              </Box>

              <Box
                width={[1, 1, 1 / 3]}
                mt={['4', '4', 0]}
                ml={[0, 0, '4']}
                p={['3', '4']}
                bg='white'
              >
                <Heading
                  as='h3'
                  fontSize={['6', '7']}
                  fontStyle='normal'
                  color='red'
                >
                  Punchclock
                </Heading>

                <Flex mt='1'>
                  <Heading as='p' fontWeight='700' color='blue'>
                    <Flex as='span' alignItems='center'>
                      <Icon mr='1' name='star' color='blue' /> 4
                    </Flex>
                  </Heading>
                  <Heading as='p' fontWeight='700' color='blue' ml='3'>
                    <Flex as='span' alignItems='center'>
                      <Icon name='fork' color='blue' /> 1
                    </Flex>
                  </Heading>
                </Flex>

                <Text mt={['3', '3', '4']}>
                  A simple electronic punch clock to track hours spent on
                  projects
                </Text>
              </Box>

              <Box
                width={[1, 1, 1 / 3]}
                mt={['4', '4', 0]}
                ml={[0, 0, '4']}
                p={['3', '4']}
                bg='white'
              >
                <Heading
                  as='h3'
                  fontSize={['6', '7']}
                  fontStyle='normal'
                  color='red'
                >
                  Marvin
                </Heading>

                <Flex mt='1'>
                  <Heading as='p' fontWeight='700' color='blue'>
                    <Flex as='span' alignItems='center'>
                      <Icon mr='1' name='star' color='blue' /> 0
                    </Flex>
                  </Heading>
                  <Heading as='p' fontWeight='700' color='blue' ml='3'>
                    <Flex as='span' alignItems='center'>
                      <Icon name='fork' color='blue' /> 0
                    </Flex>
                  </Heading>
                </Flex>

                <Text mt={['3', '3', '4']}>
                  Marvin is a chat bot built on the Hubot framework
                </Text>
              </Box>
            </Flex>
          </Container>
        </Section>

        <Section bg='blue'>
          <Container>
            <Heading
              color='white'
              fontSize={['7', '8', '9']}
              textAlign='center'
            >
              We are hiring new talents.
            </Heading>

            <Flex justifyContent='center' mt='4'>
              <Button as={A} href='https://www.codeminer42.com/careers'>
                Apply Now
              </Button>
            </Flex>
          </Container>
        </Section>
      </Box>

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
    </>
  )
}

export default Home
