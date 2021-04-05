import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, FONTS, globalStyles, SIZES } from '../../constants'

const Category = ({name, icon, onSelectCategory}) => {
  return (
    <TouchableOpacity style={styles.categoryButton} onPress={onSelectCategory} >
      <View style={styles.imageContainer}>
        <Image 
          source={icon}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  categoryButton: {
    padding: SIZES.padding,
    paddingBottom: SIZES.padding * 2,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.padding,
    ...globalStyles.shadow
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white
  },
  image: {
    width: 30,
    height: 30,
  },
  title: {
    marginTop: SIZES.padding,
    color: COLORS.white,
    ...FONTS.body5
  }
})


export default Category
