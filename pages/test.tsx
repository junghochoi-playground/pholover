import { Container, Box, Text, Flex, Heading } from '@chakra-ui/react'

import Navbar from '../components/Navbar'
import bg from '../assets/pictures/bg_dark.jpg'

const Test = () => {
    return (
        <>
            <Navbar />
            <Flex
                backgroundImage={bg.src}
                backgroundSize={'cover'}
                backgroundPosition={{
                    base: '43%, 50%',
                    md: '35%, 50%',
                }}
                // backgroundPosition={'35% 50%'}
                // backgroundPosition={'43% 50%'}
                backgroundColor={
                    'linear-gradient(rgba(255, 0, 0, 0.45), rgba(255, 0, 0, 0.45)), url(../assets/pictures/bg.png)'
                }
                h={'88vh'}
                // _after={{
                //     content: '""',
                //     position: 'absolute',
                //     height: '88vh',
                //     width: '100%',
                //     background: 'rgba(0,0,0,0.5)',
                // }}
                // justifyContent={'center'}
                flexDirection={'column'}
                justifyContent={'center'}
            >
                <Box marginLeft={{ base: 5, sm: 10, md: 20 }}>
                    <Heading
                        color={'white'}
                        fontSize={{ base: 40, sm: 50, md: 60 }}
                        textDecoration={'underline'}
                        textUnderlineOffset={4}
                        textDecorationThickness={'2px'}
                    >
                        Pho Lover
                    </Heading>
                    <br />
                    <br />
                    <br />
                    <Heading
                        color={'white'}
                        fontSize={{ base: 30, sm: 40, md: 50 }}
                    >
                        Palidsade Park's <br /> Vietnamese and Korean <br />{' '}
                        Fusion Restaurant
                    </Heading>
                </Box>
            </Flex>
            <Container>
                <Flex justifyContent={'space-around'}>
                    <Box>
                        <Heading fontFamily={'Open Sans'}>Location</Heading>
                        <Text>20 E Columbia Ave, Palisades Park, NJ 07650</Text>
                    </Box>
                    <Box>Food Delivery</Box>
                </Flex>
            </Container>
        </>
    )
}

export default Test
