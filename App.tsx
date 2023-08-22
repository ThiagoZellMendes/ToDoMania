import React from "react"
import { StatusBar } from "expo-status-bar"
import AppLoading from "expo-app-loading"
import { ThemeProvider } from "styled-components/native"
import theme from "./src/global/styles/theme"
import Home from "./src/screens/home"

import {
  Inter_400Regular,
  useFonts,
} from "@expo-google-fonts/inter"

export default function App() {
  const [FontsLoaded] = useFonts({
    Inter_400Regular
  })

  if (!FontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <Home/>
    </ThemeProvider>
  )
}
