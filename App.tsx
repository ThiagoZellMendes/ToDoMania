import { StatusBar } from "expo-status-bar"
import React from "react"
import { ThemeProvider } from "styled-components/native"
import theme from "./src/global/styles/theme"
import Home from "./src/screens/home"

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <Home/>
    </ThemeProvider>
  )
}
