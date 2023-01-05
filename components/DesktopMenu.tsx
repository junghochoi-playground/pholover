import { HStack, Box, Text, Image } from '@chakra-ui/react'
import InstagramIcon from '../assets/icons/instagram_icon.svg'
const DesktopMenu = () => {
    return (
        <HStack p={4} spacing={6} display={{ base: 'none', md: 'flex' }}>
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
    )
}

export default DesktopMenu
