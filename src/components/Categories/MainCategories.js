import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { icons, images, globalStyles, SIZES, COLORS, FONTS } from '../../constants'
import useCategories from '../../hooks/useCategories'
import Category from './Category'


const MainCategories = () => {
  const categories = useCategories()

  const renderItem = ({item}) => <Category {...item} onSelectCategory={() => {}} />

  return (
    <View style={styles.mainCategories}>
      <Text style={{...FONTS.h1}}>Main</Text>
      <Text style={{...FONTS.h1}}>Categories</Text>

      <FlatList 
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.categoriesList}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainCategories: {
    padding: SIZES.padding * 2
  },
  categoriesList: {
    paddingVertical: SIZES.padding * 2
  }
})


export default MainCategories
