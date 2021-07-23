import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../../constants';
import {isIphoneX} from 'react-native-iphone-x-helper';

const OrderDetail = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.orderDetail}>
        <Text style={{...FONTS.h3}}>Items in Cart</Text>
        <Text style={{...FONTS.h3}}>$ 40.00</Text>
      </View>

      <View style={styles.orderDetail}>
        <View style={{flexDirection: 'row'}}>
          <Image source={icons.pin} resizeMode="contain" style={styles.icon} />
          <Text style={{...FONTS.h4}}>Location</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Image
            source={icons.master_card}
            resizeMode="contain"
            style={styles.icon}
          />
          <Text style={{...FONTS.h4}}>**** 8888</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('OrderDelivery')}>
          <Text style={{color: COLORS.white, ...FONTS.h2}}>Order now</Text>
        </Pressable>
      </View>

      {isIphoneX() && <View style={styles.blankSpace}></View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  orderDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SIZES.padding * 2,
    paddingHorizontal: SIZES.padding * 3,
    borderBottomColor: COLORS.lightGray2,
    borderBottomWidth: 1,
  },
  buttonContainer: {
    padding: SIZES.padding * 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: COLORS.darkgray,
    marginRight: SIZES.padding,
  },
  button: {
    width: SIZES.width * 0.9,
    padding: SIZES.padding,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    borderRadius: SIZES.radius,
  },
  blankSpace: {
    position: 'absolute',
    bottom: -34,
    left: 0,
    right: 0,
    height: 34,
    backgroundColor: COLORS.white,
  },
});

export default OrderDetail;
