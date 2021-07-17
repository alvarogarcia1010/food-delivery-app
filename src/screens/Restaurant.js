import React from 'react'
import { View, SafeAreaView, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import FoodInfo from '../components/Foods/FoodInfo'
import OrderDetail from '../components/Foods/OrderDetail'
import { icons, images, globalStyles, SIZES, COLORS, FONTS } from '../constants'
import useRestaurant from '../hooks/useRestaurant'

const Header = ({restaurantName, onBackButton}) => (
  <View style={styles.header}>
    <TouchableOpacity style={styles.backButton} onPress={onBackButton}>
      <Image 
        source={icons.back}
        resizeMode='contain'
        style={{
          width: 30,
          height: 30
        }}
      />
    </TouchableOpacity>

    <View style={globalStyles.center}>
      <View style={styles.headerTitle}>
        <Text style={{...FONTS.h3 }}>{restaurantName}</Text>
      </View>
    </View>

    <TouchableOpacity style={styles.listButton}>
      <Image 
        source={icons.list}
        resizeMode='contain'
        style={{
          width: 30,
          height: 30
        }}
      />
    </TouchableOpacity>
  </View>
)

const Restaurant = ({route, navigation}) => {
  const { restaurant, currentLocation } = useRestaurant(route.params)

  return (
    <SafeAreaView style={globalStyles.container}>
      <Header 
        restaurantName={restaurant?.name || 'AlvaroRestaurant'}
        onBackButton={() => navigation.goBack()}
      />
      <FoodInfo menu={restaurant?.menu} />
      <OrderDetail />
      <Text>Restaurant</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row'
  },
  backButton: {
    width: 50,
    paddingLeft: SIZES.padding * 2,
    justifyContent: 'center'
  },
  headerTitle: {
    paddingHorizontal: SIZES.padding *3,
    height: 50,
    backgroundColor: COLORS.lightGray3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius
  },
  listButton: {
    width: 50,
    paddingRight: SIZES.padding * 2,
    justifyContent: 'center'
  }
})


export default Restaurant
