import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../../constants';
import Button from '../UI/Button';

const DeliveryInfo = ({restaurant}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.courier}>
          <Image source={restaurant?.courier.avatar} style={styles.avatar} />

          <View style={styles.courierInfo}>
            {/* Name & Rating */}
            <View style={styles.rating}>
              <Text style={{...FONTS.h4}}>{restaurant?.courier.name}</Text>
              
              <View style={{flexDirection: 'row'}}>
                <Image source={icons.star} style={styles.starIcon} />
                <Text style={{...FONTS.body3}}>{restaurant?.rating}</Text>
              </View>
            </View>

            {/* Restaurant */}
            <Text style={{color: COLORS.darkgray, ...FONTS.body4}}>
              {restaurant?.name}
            </Text>
          </View>
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <Button
            label="Call"
            color="primary"
            onPress={() => console.log('Call')}
          />

          <Button
            label="Cancel"
            color="secondary"
            onPress={() => console.log('Cancel')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 15,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: SIZES.width * 0.9,
    padding: SIZES.padding * 2,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
  },
  courier: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  courierInfo: {
    flex: 1,
    marginLeft: SIZES.padding,
  },
  rating: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  starIcon: {
    width: 18,
    height: 18,
    tintColor: COLORS.primary,
    marginRight: SIZES.padding,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: SIZES.padding * 2,
    justifyContent: 'space-between',
  },
});

export default DeliveryInfo;
