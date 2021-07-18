import React from 'react'
import {View, StyleSheet, Animated} from 'react-native'
import { COLORS, SIZES } from '../../constants'

const Dots = ({items, scrollX}) => {
  return (
    <View style={{height: 30}}>
      <View style={styles.dots}>
        {items.map((_, index) => <Dot index={index} scrollX={scrollX} />)}
      </View>
    </View>
  )
}

const Dot = ({index, scrollX}) => {
  
  const dotPosition = Animated.divide(scrollX, SIZES.width)  

  const opacity = dotPosition.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.3, 1, 0.3],
    extrapolate: 'clamp'
  })

  const dotSize = dotPosition.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
    extrapolate: 'clamp'
  })

  const dotColor = dotPosition.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [COLORS.darkgray, COLORS.primary, COLORS.darkgray],
    extrapolate: 'clamp'
  })

  return (
    <Animated.View 
      key={`dot-${index}`}
      opacity={opacity}
      style={{
        ...styles.dot,
        width: dotSize,
        height: dotSize,
        backgroundColor: dotColor 
      }}
    />
  )
}

const styles = StyleSheet.create({
  dots: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.padding
  },
  dot: {
    borderRadius: SIZES.radius,
    marginHorizontal: 6 
  }
})


export default Dots
