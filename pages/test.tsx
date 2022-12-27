import { Box, Container } from "@mui/system";
import { Navbar } from "../components";
import bg from '../assets/pictures/bg.png'

export default function Test() {
    return (
        <div>
            <Navbar />  

            <Box
                sx={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover'
                }}
            >

                <Container>

                </Container>

            </Box>
    
        </div>
    )
}  