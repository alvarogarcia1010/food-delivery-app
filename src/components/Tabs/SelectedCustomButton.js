import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import Svg, { Path } from 'react-native-svg';
import { COLORS } from '../../constants';

const SelectedCustomButton = ({onPress, children}) => {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.customView}></View>
        <Svg width={75} height={61} viewBox="0 0 75 61">
          <Path
            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
            fill={COLORS.white}
          />
        </Svg>
        <View style={styles.customView}></View>
      </View>

      <TouchableOpacity style={styles.selectedButton} onPress={onPress}>
        {children}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1, 
    alignItems: 'center'
  },
  container: {
    flexDirection: 'row', 
    position: 'absolute', 
    top: 0
  },
  customView: {
    flex: 1, 
    backgroundColor: COLORS.white
  },
  selectedButton: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.white
  },
})

export default SelectedCustomButton;
