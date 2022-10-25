import { useEffect, useState } from 'react'
import { styles } from './styles'
import { View, FlatList, Text } from 'react-native'
import React from 'react'

import { Calc } from '../components/Calc/Calc'
import { CardItem } from '../components/CardItem/CardItem'
import { Cart } from '../components/Cart/Cart'
import { SearchBar } from '../components/SearchBar/SearchBar'

import { drinks } from '../utils/drinks'
import { fastfood } from '../utils/fastfood'

import { GetLactase } from '../utils/getLactase'

interface CategoryProps {
  image: string
  name: string
  value: number
}

export function Home() {
  const [data, setData] = useState(drinks)
  const [value, setValue] = useState('drinks')
  const [cartData, setCartData] = useState<any[]>([])

  const [lactase, setLactase] = useState(0)

  function handleChangeCategory() {
    if (value === 'drinks') {
      setData(drinks)
    } else if (value === 'fastfood') {
      setData(fastfood)
    }
  }

  function GetLactoseFromCartData() {
    let lactose = 0
    cartData.forEach(item => {
      lactose += Number(item.lac)
    })
    return lactose
  }

  useEffect(() => {
    handleChangeCategory()
  }, [value])

  useEffect(() => {
    let lactose = GetLactoseFromCartData()
    setLactase(GetLactase({ lactose }))
  }, [cartData])

  return (
    <View style={styles.container}>
      <SearchBar category={value} setCategory={setValue} />

      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => (
          <CardItem
            image={item.image}
            name={item.name}
            lac={item.lac}
            qnt={item.qnt}
            unity={item.unity}
            setCartData={setCartData}
            cartData={cartData}
          />
        )}
        keyExtractor={item => item.name}
        style={styles.containerList}
        contentContainerStyle={styles.contentList}
        showsHorizontalScrollIndicator={false}
      />

      <Cart data={cartData} setData={setCartData} />

      <Calc lactose={GetLactoseFromCartData()} value={lactase} />
    </View>
  )
}
