import React from "react"
import { ThemeProvider } from "styled-components"
import Navigation from "../components/Navigation/Navigation"
import GlobalStyle from "../assets/styles/globalStyles"
import { theme } from "../utils/theme"

const MainLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Navigation />
    {children}
  </ThemeProvider>
)

export default MainLayout
