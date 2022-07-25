import {StyleSheet} from 'react-native';
import Colors from '../constants/Сolors';

const styles = StyleSheet.create({
  appBarThreeItems: {
    paddingVertical: 16,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: '#003143',
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
  },
});

export default styles;
