import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    return (
      <Html lang='en-US'>
        <Head>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          <link rel='icon' type='image/png' href='/images/favicon.png'></link>
        </Head>
        <body>
          <noscript>
            <iframe
              src='https://www.googletagmanager.com/ns.html?id=GTM-MX2GB8S'
              height='0'
              width='0'
              style='display:none;visibility:hidden'
            ></iframe>
          </noscript>

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
