import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../utils/theme'

import localFont from '@next/font/local'

const lifeSaverFont = localFont({src: '../assets/fonts/LifeSavers-Regular.ttf'})


export default function App({ Component, pageProps }: AppProps) {



  return (
    <ThemeProvider theme={theme}>
     <Component {...pageProps} />
    </ThemeProvider>

  )
}
