import {StyleSheet} from 'react-native';
import Colors from '../../constants/Сolors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    fontSize: 33,
    lineHeight: 40,
    alignSelf: 'center',
    color: '#6248FF',
    marginTop: 60,
    fontWeight: '900',
    fontStyle: 'italic',
  },
  balance: {
    fontSize: 32,
    lineHeight: 40,
    alignSelf: 'center',
    color: Colors.blacker,
    marginTop: 21,
    fontWeight: '700',
  },
  currentBalance: {
    fontSize: 18,
    alignSelf: 'center',
    color: Colors.blackerSlow,
    fontWeight: '500',
  },
  crypto: {
    marginTop: 21,
    fontSize: 22,
    lineHeight: 26,
    alignSelf: 'flex-start',
    color: Colors.blacker,
    fontWeight: '700',
  },
  crypto: {
    marginTop: 21,
    fontSize: 22,
    lineHeight: 26,
    alignSelf: 'flex-start',
    color: Colors.blacker,
    fontWeight: '700',
  },
  rateText: {
    marginTop: 21,
    fontSize: 22,
    lineHeight: 26,
    alignSelf: 'flex-start',
    color: Colors.blacker,
    fontWeight: '700',
  },
});

export default styles;
