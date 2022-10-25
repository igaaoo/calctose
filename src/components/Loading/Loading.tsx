import { View, ActivityIndicator } from 'react-native'
import React from 'react'

import { styles } from './styles'

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#000" />
    </View>
  )
}
