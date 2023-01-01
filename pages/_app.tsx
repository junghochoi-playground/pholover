import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { extendTheme, ChakraProvider } from '@chakra-ui/react'

// import { theme } from '../utils/theme'

import localFont from '@next/font/local'
import { useTheme } from '@chakra-ui/react'

const lifeSaverFont = localFont({
    src: '../assets/fonts/LifeSavers-Regular.ttf',
})

const colors = {
    brand: {
        yellow: '#FEDB4D',
    },
}

const fonts = {
    heading: 'LifeSaver',
}
const theme = extendTheme({ colors, fonts })

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}
