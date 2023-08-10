import React from "react"
import { StatusBar } from "expo-status-bar"
import { Text } from "react-native"
import { ThemeProvider } from "styled-components/native"
import  theme  from "./src/global/styles/theme"
import { Header } from "./src/components/header/Header"

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <StatusBar style="light" />
    </ThemeProvider>
  )
}
