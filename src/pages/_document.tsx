import 'dotenv/config'
import React from 'react'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'


import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const { renderPage } = ctx;

    try {
      ctx.renderPage = () =>
        renderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles( <App {...props} />)
        });

     const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [...React.Children.toArray(initialProps.styles), sheet.getStyleElement()]
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang='pt-BR'>
        <Head>
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" /> 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}