import { Container, Box } from '@chakra-ui/react'

import Navbar from '../components/Navbar'
import bg from '../assets/pictures/bg.jpg'

const Test = () => {
    return (
        <>
            <Navbar />
            <Box
                backgroundImage={bg.src}
                backgroundSize={'cover'}
                backgroundPosition={'35% 50%'}
                backgroundColor={
                    'linear-gradient(rgba(255, 0, 0, 0.45), rgba(255, 0, 0, 0.45)), url(../assets/pictures/bg.png)'
                }
                h={'88vh'}
                _after={{
                    content: '""',
                    position: 'absolute',
                    height: '88vh',
                    width: '100%',

                    background: 'rgba(0,0,0,0.5)',
                }}
            ></Box>
        </>
    )
}

export default Test
