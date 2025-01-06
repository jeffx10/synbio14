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
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document