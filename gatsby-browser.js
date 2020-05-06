import React from "react"
import GlobalStateProvider from "./src/store/GlobalStateProvider"
import { ThemeProvider } from "emotion-theming"

import { theme } from "./src/theme/theme"

export const wrapRootElement = ({ element }) => (
  <GlobalStateProvider>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </GlobalStateProvider>
)
