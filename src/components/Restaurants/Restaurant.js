import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { COLORS, FONTS, globalStyles, SIZES } from '../../constants'

const Restaurant = ({restaurantData}) => {
  return (
    <TouchableOpacity 
      style={styles.item}
      onPress={() => {}}
    >
      <View style={styles.imageContent}>
        <Image 
          source={restaurantData.photo} 
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.duration}>
          <Text style={styles.durationTitle}>{restaurantData.duration}</Text>
        </View>
      </View> 
      <Text style={styles.restaurantName}>{restaurantData.name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    marginBottom: SIZES.padding * 2
  },
  imageContent: {
    marginBottom: SIZES.padding
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: SIZES.radius
  },
  duration: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: SIZES.width * 0.3,
    backgroundColor: COLORS.white,
    borderTopRightRadius: SIZES.radius,
    borderBottomLeftRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    ...globalStyles.shadow
  },
  durationTitle: {
    ...FONTS.h4
  },
  restaurantName: {
    ...FONTS.body2
  }
})

export default Restaurant
