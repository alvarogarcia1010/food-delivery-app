import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons, images, globalStyles, SIZES, COLORS, FONTS } from '../constants'

const Header = ({currentLocation}) => (
  <View style={styles.header}>
    <TouchableOpacity style={styles.headerButton}>
      <Image 
        source={icons.nearby}
        resizeMode='contain'
        style={styles.headerIcon}
      />
    </TouchableOpacity>

    <View style={globalStyles.center}>
      <View style={styles.headerTitle}>
        <Text style={{...FONTS.h3 }}>{currentLocation}</Text>
      </View>
    </View>

    <TouchableOpacity style={styles.headerButton}>
      <Image 
        source={icons.basket}
        resizeMode='contain'
        style={styles.headerIcon}
      />
    </TouchableOpacity>
  </View>
)

const MainCategories = () => {
  const [categories, setCategories] = useState([])

  return (
    <View style={styles.mainCategories}>
      <Text style={{...FONTS.h1}}>Main</Text>
      <Text style={{...FONTS.h1}}>Categories</Text>

      {/* <FlatList 
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={}
        contentContainerStyle={styles.categoriesList}
      /> */}
    </View>
  )
}

const Home = () => {

  
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [restaurants, setRestaurants] = useState([])
  const [currentLocation, setCurrentLocation] = useState({})


  return (
    <SafeAreaView style={globalStyles.container}>
      <Header currentLocation="Santa tecla" />
      <MainCategories/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({ 
  header: {
    flexDirection: 'row',
    height: 58,
  },
  headerButton: {
    width: 50,
    paddingHorizontal: SIZES.padding,
    justifyContent: 'center'
  },
  headerIcon: {
    width: 30,
    height: 30
  },
  headerTitle: {
    width: '70%',
    height: '100%',
    backgroundColor: COLORS.lightGray3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius
  },
  mainCategories: {
    padding: SIZES.padding * 2
  },
  categoriesList: {
    paddingVertical: SIZES.padding * 2
  }
})

export default Home
