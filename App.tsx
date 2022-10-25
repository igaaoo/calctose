import React from 'react'
import { useFonts, Inter_800ExtraBold, Inter_400Regular } from '@expo-google-fonts/inter'
import { StatusBar } from 'expo-status-bar'

import { StyleSheet, Text, View } from 'react-native'
import { Loading } from './src/components/Loading/Loading'
import { Home } from './src/screens/Home'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_800ExtraBold,
    Inter_400Regular,
  })

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {fontsLoaded ? <Home /> : <Loading />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
