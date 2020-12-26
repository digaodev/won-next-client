import { ThemeProvider } from 'styled-components'
import { addDecorator } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'

addDecorator(withNextRouter())

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
