/* ----------- RESOURCES ----------- */
import Head from 'next/head'
import { SSRProvider } from 'react-bootstrap'
import { appWithTranslation } from 'next-i18next'
import { CustomThemeProvider } from 'Context/ThemeContext'
import { AuthProvider } from 'Context/AuthContenxt'

/* ----------- STYLES ----------- */
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
        <AuthProvider>
          <SSRProvider>
            <Component {...pageProps} />
          </SSRProvider>
        </AuthProvider>
      </CustomThemeProvider>
    </>
  )
}

export default appWithTranslation(App)