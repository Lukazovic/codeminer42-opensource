import {
  Button,
  Careers,
  Container,
  Flex,
  Footer,
  Header,
  Heading,
  Icon,
  Section,
  Text,
} from '@/components'
import Box from '@/components/Box'
import { Hacktoberfest } from '@/hacktoberfest'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Open Source - By Codeminer42</title>
        <meta
          name='description'
          content='Free and Open Source Software projects by Codeminer42'
        />
      </Head>

      <Header />

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

                <Text mt={['3', '3', '4']} height='95px'>
                  Fork and Evolution of the Fulcrum project - An agile project
                  planning tool and Pivotal Tracker drop-in replacement
                </Text>

                <Flex mt={3} justifyContent='center'>
                  <Button
                    as='a'
                    href='https://github.com/Codeminer42/cm42-central'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Check Repository
                  </Button>
                </Flex>
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

                <Text mt={['3', '3', '4']} height='95px'>
                  A simple electronic punch clock to track hours spent on
                  projects
                </Text>

                <Flex mt={3} justifyContent='center'>
                  <Button
                    as='a'
                    href='https://github.com/Codeminer42/Punchclock'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Check Repository
                  </Button>
                </Flex>
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

                <Text mt={['3', '3', '4']} height='95px'>
                  Marvin is a chat bot built on the Hubot framework
                </Text>
                <Flex mt={3} justifyContent='center'>
                  <Button
                    as='a'
                    href='https://github.com/Codeminer42/marvin-cm42'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Check Repository
                  </Button>
                </Flex>
              </Box>
            </Flex>
          </Container>
        </Section>

        <Hacktoberfest />

        <Careers />
      </Box>

      <Footer />
    </>
  )
}

export default Home
