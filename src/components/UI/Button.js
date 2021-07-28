import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';

const Button = ({label, color, onPress}) => {
  return (
    <TouchableOpacity
      style={{...styles.button, backgroundColor: COLORS[color]}}
      onPress={onPress}
    >
      <Text style={{...FONTS.h4, color: COLORS.white}}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 50,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default Button;
