import React from 'react'
import { enableScreens } from 'react-native-screens'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { DripsyProvider } from 'dripsy'
import { QueryClientProvider, QueryClient } from 'react-query'
import { theme } from 'app/theme'
import { HelloWorld } from 'app/hello-world'

enableScreens(true)

const client = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <DripsyProvider theme={theme}>
        <SafeAreaProvider>
          <StatusBar style="dark" />
          <HelloWorld />
        </SafeAreaProvider>
      </DripsyProvider>
    </QueryClientProvider>
  )
}
