import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { ThemeProvider } from "styled-components"
import theme from "./src/global/styles/theme"
import { Header } from "./src/components/header/Header"

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header>
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />
        </Header>
      </>
    </ThemeProvider>
  )
}
