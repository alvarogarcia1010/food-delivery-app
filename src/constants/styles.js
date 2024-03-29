import { StyleSheet } from 'react-native';
import { COLORS } from './index'

export default StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    backgroundColor: COLORS.lightGray4
  },
  shadow: {
    shadowColor: COLORS.black,
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 1
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});