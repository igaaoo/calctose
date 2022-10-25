import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { MiniCard } from '../MiniCard/MiniCard'
import React, { useState } from 'react'

const Milk = require('../../assets/Drinks/milk.png')
const Pizza = require('../../assets/FastFood/pizza.png')

import { styles } from './styles'

interface CartProps {
  data: any[]
  setData: React.Dispatch<React.SetStateAction<any[]>>
}

export function Cart({ data, setData }: CartProps) {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => <MiniCard image={item.image} lac={item.lac} />}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.contentList}
        showsHorizontalScrollIndicator={false}
      />
      <TouchableOpacity style={styles.button} onPress={() => setData([])}>
        <Text style={styles.buttonText}>Clear</Text>
      </TouchableOpacity>
    </View>
  )
}
