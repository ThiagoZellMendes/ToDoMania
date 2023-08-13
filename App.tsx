import React from "react"
import { StatusBar } from "expo-status-bar"
import { ThemeProvider } from "styled-components/native"
import  theme  from "./src/global/styles/theme"
import { Header } from "./src/components/header/Header"
import { Input } from "./src/components/form/input/Input"

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Input />
      <StatusBar style="light" />
    </ThemeProvider>
  )
}
