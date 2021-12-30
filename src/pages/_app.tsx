/* Resources */
import Head from 'next/head'
import { CustomThemeProvider } from 'Context/ThemeContext'
import { appWithTranslation } from 'next-i18next'
import { SSRProvider } from 'react-bootstrap'

/* Styles */
import 'Styles/global.scss'
import 'bootstrap/dist/css/bootstrap.min.css'



function App({ Component, pageProps }) {
    return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <CustomThemeProvider>
        <SSRProvider>
          <Component {...pageProps} />
        </SSRProvider>
      </CustomThemeProvider>
    </>
  )
}

export default appWithTranslation(App)