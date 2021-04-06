import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, FONTS, globalStyles, SIZES } from '../../constants'
import useSelectedCategory from '../../hooks/useSelectedCategory'

const Category = ({categoryData}) => {
  const {selectedCategory, setCategoryHandler} = useSelectedCategory()
  const isSelectedCategory = categoryData.id === selectedCategory?.id

  const onSelectCategory = () => {
    setCategoryHandler(categoryData)
  }

  return (
    <TouchableOpacity style={{...styles.categoryButton, backgroundColor: isSelectedCategory? COLORS.primary : COLORS.white}} onPress={onSelectCategory} >
      <View style={{...styles.imageContainer, backgroundColor: isSelectedCategory? COLORS.white : COLORS.lightGray}}>
        <Image 
          source={categoryData.icon}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <Text 
        style={{...styles.title, color: isSelectedCategory? COLORS.white : COLORS.black}}
      >
        {categoryData.name}
      </Text>
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
    ...FONTS.body5
  }
})


export default Category
