import Head from 'next/head'

import { GlobalStyles } from 'Styles/globalStyles'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}


