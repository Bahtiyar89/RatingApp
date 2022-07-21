import {StyleSheet} from 'react-native';
import Colors from '../../constants/Сolors';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 25,
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
  },
  homeButton: {
    height: 88,
  },
  buttonWithBorders: {
    borderColor: Colors.black,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  text: {
    color: Colors.defaultBlack,
    fontSize: 16,
  },
  imageWrapper: {
    width: 31,
    height: 31,
    borderRadius: 50,
    overflow: 'hidden',
    marginRight: 7,
  },
});

export default styles;
