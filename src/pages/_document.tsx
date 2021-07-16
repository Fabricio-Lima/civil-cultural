import 'dotenv/config'
import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'


import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(
            <>
              <App {...props} />
            </>
          ),
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
          <style>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300&family=Noto+Sans+JP&family=Roboto:wght@300&display=swap" rel="stylesheet" />          
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}