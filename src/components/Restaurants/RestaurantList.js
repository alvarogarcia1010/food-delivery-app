import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { SIZES } from '../../constants'
import useSelectedCategory from '../../hooks/useSelectedCategory'
import Restaurant from './Restaurant'

const RestaurantList = () => {
  const { restaurants } = useSelectedCategory()

  const renderItem = ({item}) => <Restaurant restaurantData={item} />
  
  return (
    <FlatList 
      data={restaurants}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.restaurantList}
    />  
  )
}

const styles = StyleSheet.create({
  restaurantList: {
    paddingHorizontal: SIZES.padding * 2,
    paddingBottom: 30
  }
})


export default RestaurantList
