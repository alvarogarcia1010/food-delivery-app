import React from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import Animated from 'react-native-reanimated'
import { COLORS, FONTS, SIZES } from '../../constants'

const FoodInfo = ({menu}) => {
  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      scrollEventThrottle={16}
      snapToAlignment='center'
      showHorizontalScrollIndicator={false}
      //onScroll
    >
      {menu.map((item, index) => (
        <View
          key={`menu-${index}`}
          style={styles.foodContainer}
        >
          <View
            style={styles.foodItem}
          >
            {/* Food Image */}
            <Image 
              source={item.photo}
              resizeMode='cover'
              style={styles.foodImage}
            />

            {/* Quantity */}
            <View style={style.foodQuantity}>
              <TouchableOpacity 
                style={styles.minusButton}
              >
                <Text style={{ ...FONTS.body1}}>-</Text>
              </TouchableOpacity>

              <View style={styles.quantityText}>
                <Text style={{ ...FONTS.h2}}>5</Text>
              </View>

              <TouchableOpacity 
                style={styles.plusButton}
              >
                <Text style={{ ...FONTS.body1}}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Name And Description */}
        </View>
      ))}
    </Animated.ScrollView>
  )
}

const styles = StyleSheet.create({
  foodContainer: {
    alignItems: 'center'
  },
  foodItem: {
    height: SIZES.height * 0.35
  },
  foodImage: {
    width: SIZES.width,
    height: '100%'
  },
  foodQuantity: {
    position: 'absolute',
    bottom: -20,
    width: SIZES.width,
    height: 50,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  minusButton: {
    width: 50,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25
  },
  quantityText: {
    width: 50,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justityContent: 'center'
  },
  plusButton: {
    width: 50,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25
  },
})


export default FoodInfo
