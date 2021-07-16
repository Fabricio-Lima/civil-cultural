import Head from 'next/head'
import GlobalStyle from 'Styles/globalStyles'

import { CustomThemeProvider, ThemeContext } from 'Context/ThemeContext'
import { useTheme } from 'Hooks/useTheme'



export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <CustomThemeProvider>
        <Component {...pageProps} />
        <GlobalStyle/>
      </CustomThemeProvider>
    </>
  )
}


