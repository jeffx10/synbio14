/*
* File: src/pages/_document.tsx
* Description: Custom Document component for modifying the initial HTML structure.
* Handles meta tags, fonts, and other HTML document requirements.
*/

import { Html, Head, Main, NextScript } from 'next/document'

// TODO: Add favicon and other static assets
const Document = () => {
  return (
    <Html lang="en">
      <Head>
        {/* Basic favicon */}
        <link rel="icon" href="/favicon.png" />
        {/* Alternative PNG favicon */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document