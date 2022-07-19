import {StyleSheet} from 'react-native';
import Colors from '../../constants/Сolors';

const styles = StyleSheet.create({
  shadowView: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.blackTrans,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    width: 320,
    height: 152,
    backgroundColor: Colors.black,
    borderRadius: 8,
    padding: 16,
  },
});

export default styles;
