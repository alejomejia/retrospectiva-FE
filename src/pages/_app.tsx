import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalCSS from 'utils/styled/global'
import theme from 'utils/styled/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalCSS />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
