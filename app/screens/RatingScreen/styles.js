import {StyleSheet} from 'react-native';
import Colors from '../../constants/Сolors';

const styles = StyleSheet.create({
  appBarHeader: {
    borderBottomWidth: 1,
    borderBottomColor: '#003143',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  appBarHeaderText: {
    color: Colors.black,
    fontSize: 17,
  },
  screen: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
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
  legend: {
    marginTop: 35,
    fontSize: 18,
    lineHeight: 21,
    fontWeight: '600',
  },
  completeButton: {
    marginTop: 20,
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blue,
    borderRadius: 8,
  },
  completeButtonText: {
    color: Colors.black,
  },
  buttonStyle: {
    alignItems: 'center',
    marginLeft: 5,
    marginTop: 10,
    padding: 10,
    borderRadius: 20,
  },
});

export default styles;
