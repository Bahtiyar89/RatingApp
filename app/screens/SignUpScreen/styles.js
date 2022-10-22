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
    fontSize: 36.79,
    lineHeight: 43.47,
    alignSelf: 'center',
    color: '#FFFFFF',
    marginTop: 138,
    fontWeight: '900',
    fontStyle: 'italic',
  },
  blueColor: {
    color: Colors.blue,
  },
  input: {
    fontSize: 13,
    height: 40,
    width: '100%',
    color: Colors.white,
    backgroundColor: Colors.black,
  },
  completeButton: {
    marginTop: 26,
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 8,
  },

  completeButtonText: {
    color: Colors.black,
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 22,
  },
  buttonStyle: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 17,
    textAlign: 'center',
    lineHeight: 22,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#FFFFFF',
    borderRadius: 10,
    paddingTop: 14,
    paddingBottom: 14,
  },
  input2: {
    fontSize: 13,
    height: 40,
    borderRadius: 10,
    width: '100%',
    color: '#FFFFFF30%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  legend2: {
    fontSize: 14,
    lineHeight: 24,
    color: '#FFFFFF',
    fontWeight: '400',
    lineHeight: 13,
    marginBottom: 6,
    marginTop: 15,
    flex: 1,
  },
  bottomTitle2: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 17,
    color: '#FFFFFF',
  },
});

export default styles;
