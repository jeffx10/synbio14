/*
* File: src/pages/_app.tsx
* Description: Root application component that wraps all pages.
* Handles global state, themes, and layouts.
*/

import type { AppProps } from 'next/app'
import '@/styles/globals.css'

// TODO: Add global state management if needed
// TODO: Add theme provider
// TODO: Add analytics implementation
const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
