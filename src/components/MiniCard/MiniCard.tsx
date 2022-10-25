import React from 'react'
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native'

import { styles } from './styles'

interface MiniCardProps {
  image: ImageSourcePropType
  lac: string
}

export function MiniCard({ image, lac }: MiniCardProps) {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.value}>{value}</Text> */}
      <Text style={styles.lacValue}>{lac}g</Text>
      <Image source={image} style={styles.imageCard} />
    </View>
  )
}
