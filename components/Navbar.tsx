import {
    Flex,
    Spacer,
    Box,
    Text,
    Image,
    HStack,
    Heading,
} from '@chakra-ui/react'
import { useTheme } from '@chakra-ui/react'

import LogoIcon from '../assets/pictures/logo_icon.png'
import InstagramIcon from '../assets/icons/instagram_icon.svg'

const Navbar = () => {
    const theme = useTheme()

    return (
        <Flex
            direction={'row'}
            justifyContent={'space-between'}
            backgroundColor={'brand.yellow'}
            h={'12vh'}
        >
            <HStack p={4}>
                <Image src={LogoIcon.src} boxSize={70} />
                <Heading as={'h4'}>Pho Lover</Heading>
            </HStack>

            <HStack p={4} spacing={6}>
                <Box backgroundColor={'black'} px={4} py={1} borderRadius={50}>
                    <Text
                        fontSize={20}
                        fontFamily={'LifeSaver'}
                        fontWeight={900}
                        color={'white'}
                    >
                        View the Menu
                    </Text>
                </Box>

                <Box mx={2}>
                    <Text
                        fontSize={20}
                        fontWeight={'bolder'}
                        fontFamily={'LifeSaver'}
                    >
                        Home
                    </Text>
                </Box>

                <Box mx={2}>
                    <Text
                        fontSize={20}
                        fontWeight={'bolder'}
                        fontFamily={'LifeSaver'}
                    >
                        About
                    </Text>
                </Box>

                <Box mx={2}>
                    <Image src={InstagramIcon.src} boxSize={10} />
                </Box>
            </HStack>
        </Flex>
    )
}

export default Navbar
