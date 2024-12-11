// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="A new path forward" />
          <meta property="og:title" content="Scroll" />
          <meta property="og:description" content="Scroll - Where our AI conversations are shared, discussed, evolved" />
          <meta property="og:url" content="https://www.openscroll.me" />
          <meta name="twitter:card" content="Anonymous" />
          <meta name="twitter:title" content="S C R O L L" />
          <meta name="twitter:description" content="Scroll - Where our AI conversations are shared, discussed, evolved" />
          <link rel="canonical" href="https://www.openscroll.me" />
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
