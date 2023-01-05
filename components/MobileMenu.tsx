import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Flex,
    Text,
    useDisclosure,
    Button,
    Box,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const SideMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Flex
            display={{ base: 'flex', md: 'none' }}
            alignItems={'center'}
            mr={10}
        >
            <Button
                onClick={onOpen}
                bg={'transparent'}
                _hover={{
                    bg: 'brand.yellow.darker',
                }}
            >
                <HamburgerIcon boxSize={10} color={'black'} />
            </Button>

            <Drawer
                placement={'right'}
                onClose={onClose}
                isOpen={isOpen}
                size={'xs'}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <Text>Hello World</Text>
                </DrawerContent>
            </Drawer>
        </Flex>
    )
}

export default SideMenu
