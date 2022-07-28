import {StyleSheet} from 'react-native';
import Colors from '../../constants/Сolors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 16,
    marginLeft: 20,
    marginRight: 20,
  },
  container: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
  haveAnAccountText: {
    fontSize: 12,
    lineHeight: 16,
    color: Colors.black,
  },
  logInSignUpButton: {
    color: Colors.blue,
    fontSize: 12,
    textDecorationLine: 'underline',
    lineHeight: 16,
  },
  titleContainer: {
    marginTop: 25,
  },
  title: {
    fontSize: 28,
    lineHeight: 35,
    alignSelf: 'center',
    color: Colors.black,
  },
  blueColor: {
    color: Colors.blue,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderRadius: 8,
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    color: Colors.white,
    backgroundColor: Colors.black,
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
});

export default styles;
