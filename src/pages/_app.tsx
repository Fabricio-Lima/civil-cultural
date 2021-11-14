/* Resources */
import Head from 'next/head'
import { CustomThemeProvider } from 'Context/ThemeContext'
import { appWithTranslation } from 'next-i18next'

/* Styles */
import GlobalStyle from 'Styles/globalStyles'
import 'bootstrap/dist/css/bootstrap.min.css'



export default function App(props) {
  const CustomTranslation = appWithTranslation(({Component, pageProps}) =>  <Component {...pageProps} />)
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <CustomThemeProvider>
        <GlobalStyle/>
       <CustomTranslation {...props} />
      </CustomThemeProvider>
    </>
  )
}


