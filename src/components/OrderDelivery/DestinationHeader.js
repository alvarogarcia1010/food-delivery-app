import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import {COLORS, FONTS, icons, SIZES} from '../../constants';

const DestinationHeader = ({streetName, distance, duration}) => {
  return (
    <View style={styles.header}>
      <View style={styles.destinationHeader}>
        <Image
          source={icons.red_pin}
          style={styles.pinIcon}
        />

        <View style={styles.textContainer}>
          <Text style={{...FONTS.body3}}>
            {streetName} ({distance.toFixed(2)} kms)
          </Text>
        </View>

        <Text style={{...FONTS.body3}}>{Math.ceil(duration)} mins</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 15,
    left: 0,
    right: 0,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  destinationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    width: SIZES.width * 0.9,
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding * 2,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
  },
  textContainer: {
    flex: 1
  },
  pinIcon: {
    width: 30,
    height: 30,
    marginRight: SIZES.padding,
  }
})


export default DestinationHeader
