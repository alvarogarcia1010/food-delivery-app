import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Animated
} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../../constants';
import Dots from '../Dots/Dots';

const FoodInfo = ({menu}) => {
  const scrollX = new Animated.Value(0);
  return (
    <>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showHorizontalScrollIndicator={false}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
          useNativeDriver: false,
        })}>
        {menu.map((item, index) => (
          <View key={`menu-${index}`} style={styles.foodContainer}>
            <View style={styles.foodItem}>
              {/* Food Image */}
              <Image
                source={item.photo}
                resizeMode="cover"
                style={styles.foodImage}
              />

              {/* Quantity */}
              <View style={styles.foodQuantity}>
                <TouchableOpacity style={styles.minusButton}>
                  <Text style={{...FONTS.body1}}>-</Text>
                </TouchableOpacity>

                <View style={styles.quantityText}>
                  <Text style={{...FONTS.h2}}>5</Text>
                </View>

                <TouchableOpacity style={styles.plusButton}>
                  <Text style={{...FONTS.body1}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Name And Description */}
            <View style={styles.nameAndDescription}>
              <Text style={styles.name}>
                {item.name} - ${item.price.toFixed(2)}
              </Text>
              <Text style={{...FONTS.body3}}>{item.description}</Text>
            </View>

            {/* Calories */}
            <View style={styles.caloriesContainer}>
              <Image source={icons.fire} style={styles.caloriesIcon} />
              <Text style={{...FONTS.body3, color: COLORS.darkgray}}>
                {item.calories.toFixed(2)} cal
              </Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
      <Dots items={menu} scrollX={scrollX} />
    </>
  );
};

const styles = StyleSheet.create({
  foodContainer: {
    alignItems: 'center',
  },
  foodItem: {
    height: SIZES.height * 0.35,
  },
  foodImage: {
    width: SIZES.width,
    height: '100%',
  },
  foodQuantity: {
    position: 'absolute',
    bottom: -20,
    width: SIZES.width,
    height: 50,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  minusButton: {
    width: 50,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  quantityText: {
    width: 50,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusButton: {
    width: 50,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  nameAndDescription: {
    width: SIZES.width,
    alignItems: 'center',
    marginTop: 15,
    paddingHorizontal: SIZES.padding * 2,
  },
  name: {
    marginVertical: 10,
    textAlign: 'center',
    ...FONTS.h2,
  },
  caloriesContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  caloriesIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default FoodInfo;
