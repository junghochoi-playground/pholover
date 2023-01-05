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

import DesktopMenu from '../components/DesktopMenu'
import MobileMenu from '../components/MobileMenu'

import LogoIcon from '../assets/pictures/logo_icon.png'

const Navbar = () => {
    const theme = useTheme()

    return (
        <Flex
            direction={'row'}
            justifyContent={'space-between'}
            backgroundColor={'brand.yellow.regular'}
            h={'12vh'}
        >
            <HStack p={4} pr={1}>
                <Image src={LogoIcon.src} boxSize={70} />
                <Heading as={'h4'}>Pho Lover</Heading>
            </HStack>

            {/* Desktop Menu */}
            <DesktopMenu />
            {/* Mobile Menu */}
            <MobileMenu />
        </Flex>
    )
}

export default Navbar
