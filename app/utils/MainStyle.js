import {StyleSheet} from 'react-native';
import Colors from '../constants/Сolors';

const styles = StyleSheet.create({
  gradientHeader: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  appBarThreeItems: {
    paddingVertical: 16,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  appBarThreeDevider: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lastItem: {
    textTransform: 'uppercase',
    color: Colors.blue,
  },
  textSize: {
    fontSize: 18,
    textAlign: 'center',
    width: '100%',
  },
});

export default styles;
