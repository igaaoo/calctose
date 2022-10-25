import { View, Image, ImageBackground, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import Circle from '../../../assets/circle.png'

import { styles } from './styles'

interface CalcProps {
  value: number
  lactose: number
}

export function Calc({ value, lactose }: CalcProps) {
  return (
    <View style={styles.container}>
      <ImageBackground source={Circle} style={styles.circle}>
        <Text style={styles.value}>
          {value ? value : 0}
          {'\n'}FCC
        </Text>
        <View style={styles.lacActive}>
          <Text style={styles.itemValue}>{lactose}g</Text>
        </View>
        <TouchableOpacity style={styles.lacTotal}>
          <Text style={[styles.itemValue, styles.help]}>?</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}
