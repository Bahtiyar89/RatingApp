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
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  legend: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.black,
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
    backgroundColor: '#DDDDDD',
    marginTop: 10,
    padding: 10,
    width: '100%',
    borderRadius: 20,
  },
});

export default styles;
