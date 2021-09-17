import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: {}) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />

          <meta name='author' content='Codeminer42' />
          <meta name='Publisher' content='Codeminer42' />
          <meta name='owner' content='Codeminer42' />
          <meta
            name='keywords'
            content='software, development, developer, developers, consulting, codeminer42, codeminer 42, back-end, front-end, ruby, ruby on rails, ios, android, startup, methodology, agile, lean, git, github, quality, tests, cloud, opensource'
          />

          <meta property='og:title' content='Opensource - By Codeminer42' />
          <meta
            property='og:description'
            content='Opensource - By Codeminer42' //create description
          />
          <meta property='og:site_name' content='Opensource - By Codeminer42' />
          <meta
            property='og:url'
            content='https://opensource.codeminer42.com/'
          />
          <meta
            property='og:image'
            content='https://d2arqaup0tn1pp.cloudfront.net/assets/logo-mini-c530c4886a8496735e0d125eabd61014ac653f2d72dd2496adbe0f9d97f78959.png' // create one for opensource
          />

          <meta property='og:image:alt' content='Imersão 42 - By Codeminer42' />
          <meta property='og:locale' content='en-US' />

          <meta name='twitter:card' content='summary' />
          <meta name='twitter:site' content='@codeminer42' />
          <meta name='twitter:creator' content='@codeminer42' />
          <meta
            property='twitter:title'
            content='Opensource - By Codeminer42'
          />
          <meta
            property='twitter:description'
            content='Opensource - By Codeminer42' //create description
          />
          <meta
            property='twitter:image'
            content='https://d2arqaup0tn1pp.cloudfront.net/assets/logo-mini-c530c4886a8496735e0d125eabd61014ac653f2d72dd2496adbe0f9d97f78959.png' // create one for opensource
          />

          <link rel='icon' href='/favicon/favicon.ico' />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='https://opensource.codeminer42.com/favicon/favicon-16x16.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='https://opensource.codeminer42.com/favicon/favicon-32x32.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='https://opensource.codeminer42.com/favicon/apple-touch-icon.png'
          />
          <link
            rel='mask-icon'
            href='https://opensource.codeminer42.com/favicon/safari-pinned-tab.svg'
            color='#E22320'
          />
          <link
            rel='manifest'
            href='https://opensource.codeminer42.com/favicon/site.webmanifest'
          />
          <meta name='msapplication-TileColor' content='#E22320' />
          <meta name='theme-color' content='#E22320' />

          <meta name='robots' content='all' />
          <meta name='rating' content='general' />
          <meta name='content-language' content='en-US' />

          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Dosis:wght@600&display=swap'
            rel='stylesheet'
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
