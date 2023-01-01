import { Container, Box } from '@chakra-ui/react'

import Navbar from '../components/Navbar'
import bg from '../assets/pictures/bg.png'

const Test = () => {
    return (
        <>
            <Navbar />
            <Box
                backgroundColor={'rgba(0,0,0,1)'}
                backgroundImage={bg.src}
                h={'88vh'}
            ></Box>
        </>
    )
}

export default Test
