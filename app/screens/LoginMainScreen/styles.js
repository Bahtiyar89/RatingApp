import {StyleSheet} from 'react-native';
import Colors from '../../constants/Сolors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },

  titleContainer: {
    marginTop: 25,
    marginBottom: 30,
  },
  title: {
    fontSize: 36.79,
    lineHeight: 43.47,
    alignSelf: 'center',
    color: '#FFFFFF',
    marginTop: 138,
    fontWeight: '900',
    fontStyle: 'italic',
  },

  completeButton: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
  completeButton2: {
    marginTop: 12,
    marginBottom: 37,
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderColor: Colors.white,
    borderWidth: 1,
  },

  completeButtonText: {
    color: Colors.defaultBlack,
    fontWeight: '600',
    fontSize: 17,
  },
  loginText: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 17,
  },
});

export default styles;
