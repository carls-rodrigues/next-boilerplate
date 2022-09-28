/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'
import hteme from 'styles/theme'

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
