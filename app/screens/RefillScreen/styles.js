import {StyleSheet} from 'react-native';
import Colors from '../../constants/Сolors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  currentBalance: {
    marginTop: 30,
    fontSize: 18,
    alignSelf: 'center',
    color: Colors.blackerSlow,
    fontWeight: '500',
  },
  balance: {
    marginTop: 8,
    fontSize: 32,
    lineHeight: 40,
    alignSelf: 'center',
    color: Colors.black,
    fontWeight: '700',
  },
});

export default styles;
