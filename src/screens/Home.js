import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons, images, globalStyles, SIZES, COLORS, FONTS } from '../constants'

const Header = () => (
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
        <Text style={{...FONTS.h3 }}>Location</Text>
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

const Home = () => {

  return (
    <SafeAreaView style={globalStyles.container}>
      <Header/>
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
  }
})

export default Home
