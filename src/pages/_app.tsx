import type { AppProps } from 'next/app'

import GlobalCSS from 'utils/styled/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalCSS />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
