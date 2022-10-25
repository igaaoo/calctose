import React, { useState } from 'react'

import DropDownPicker from 'react-native-dropdown-picker'

import { Text } from 'react-native'
import { styles } from './styles'

interface SearchBarProps {
  category: string
  setCategory: React.Dispatch<React.SetStateAction<string>>
}

export function SearchBar({ category, setCategory }: SearchBarProps) {
  const [loading, setLoading] = useState(false)

  const [open, setOpen] = useState(false)
  const [items, setItems] = useState([
    { label: 'Drinks', value: 'drinks' },
    { label: 'Fast Food', value: 'fastfood' },
  ])

  return (
    <DropDownPicker
      loading={loading}
      open={open}
      value={category}
      items={items}
      setOpen={setOpen}
      setValue={setCategory}
      setItems={setItems}
      style={styles.dropdown}
      textStyle={styles.text}
      dropDownContainerStyle={styles.itemsContainer}
      dropDownDirection="BOTTOM"
    />
  )
}
