import '../styles/global.css'
import type { AppProps } from 'next/app'

import { extendTheme, ChakraProvider, Heading } from '@chakra-ui/react'
import Fonts from '../components/Fonts'

// import { theme } from '../utils/theme'

const colors = {
    brand: {
        yellow: {
            regular: '#FEDB4D',
            darker: '#ECBD01',
        },
    },
}

const fonts = {
    heading: 'LifeSaver',
    body: 'Open Sans',
}
const theme = extendTheme({ colors, fonts })

console.log(theme)
export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Component {...pageProps} />
        </ChakraProvider>
    )
}
