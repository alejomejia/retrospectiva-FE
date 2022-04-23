import { createGlobalStyle } from 'styled-components'

import resetCSS from './reset'

const GlobalCSS = createGlobalStyle`
  ${resetCSS};
`

export default GlobalCSS
