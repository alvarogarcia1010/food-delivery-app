import React, {useState} from 'react'
import {View, StyleSheet, Animated} from 'react-native'
import { SIZES } from '../../constants'

const Dots = () => {
  const scrollX = Animated.Value(0)
  const dotPosition = Animated.divide(scrollX, SIZES.width)
  
  return (
    <View>
      <View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  style
})


export default Dots
