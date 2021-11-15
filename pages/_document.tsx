// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { appConfig } from '../appConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={appConfig.locale}>
        <Head>
          <link
            rel="shortcut icon"
            href="images/favicon.ico"
            type="image/x-icon"
          />
          <link rel="apple-touch-icon" href="images/apple-touch-icon.png" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="images/apple-touch-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="images/apple-touch-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="images/apple-touch-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="images/apple-touch-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="images/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="images/apple-touch-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="images/apple-touch-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="images/apple-touch-icon-180x180.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
