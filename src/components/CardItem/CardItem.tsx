import { View, Text, TouchableOpacity, Image, ImageSourcePropType } from 'react-native'
import React from 'react'

import { styles } from './styles'

interface CardItemProps {
  image: ImageSourcePropType
  lac: string
  name: string
  qnt: string
  unity: string
  setCartData: React.Dispatch<React.SetStateAction<any[]>>
  cartData: any[]
}

export function CardItem({
  name,
  lac,
  image,
  qnt,
  unity,
  setCartData,
  cartData,
}: CardItemProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        setCartData([...cartData, { image, lac }])
      }}
    >
      <Image source={image} resizeMode="cover" style={styles.itemImage} />
      <Text style={styles.itemName}>{name}</Text>

      <View style={styles.qntContainer}>
        <Text style={styles.itemValue}>
          {qnt}
          {unity}
        </Text>
      </View>

      <View style={styles.lacContainer}>
        <Text style={styles.itemValue}>~{lac}g</Text>
      </View>
    </TouchableOpacity>
  )
}
