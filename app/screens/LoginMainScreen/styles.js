import {StyleSheet} from 'react-native';
import Colors from '../../constants/Сolors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  container: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
  logInSignUpButton: {
    color: Colors.blue,
    fontSize: 12,
    textDecorationLine: 'underline',
    lineHeight: 16,
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
  blueColor: {
    color: Colors.blue,
  },
  message: {
    marginBottom: 30,
    fontSize: 12,
    lineHeight: 16,
    alignSelf: 'center',
    color: Colors.black,
  },
  forgotPasswordButton: {
    marginTop: 8,
    marginLeft: 12,
    marginBottom: 16,
  },
  forgotPasswordButtonText: {
    fontSize: 12,
    textDecorationLine: 'underline',
    color: Colors.black,
  },
  inputContainer: {
    height: 80,
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  haveAnAccountText: {
    fontSize: 12,
    lineHeight: 16,
    color: Colors.black,
  },
  legend: {
    fontSize: 14,
    lineHeight: 24,
    color: '#FFFFFF',
    fontWeight: '400',
    lineHeight: 13,
    marginBottom: 6,
    marginTop: 15,
  },
  error: {
    fontSize: 14,
    lineHeight: 16,
    color: Colors.red,
  },
  input: {
    fontSize: 13,
    height: 40,
    borderRadius: 10,
    width: '100%',
    color: '#FFFFFF30%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },

  inputError: {
    fontSize: 16,
    height: 48,
    borderRadius: 8,
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    color: Colors.white,
    backgroundColor: Colors.red,
  },

  inputEmail: {
    fontSize: 16,
    height: 48,
    borderRadius: 8,
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 6,
    color: Colors.white,
    backgroundColor: Colors.black,
  },

  searchSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    borderWidth: 0,
    borderRadius: 10,
    paddingLeft: 5,
    backgroundColor: Colors.black,
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  togglePassWrapper: {
    position: 'absolute',
    right: 12,
  },
  togglePassText: {
    color: Colors.white,
    textDecorationLine: 'underline',
    fontSize: 16,
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
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
  completeInactive: {
    backgroundColor: Colors.disabled,
  },
  completeButtonText: {
    color: Colors.black,
    fontWeight: '600',
    fontSize: 17,
  },
  separate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 28,
  },
  separateLine: {
    flex: 1,
    borderStyle: 'dashed',
    borderWidth: 0.7,
    borderColor: Colors.white,
  },
  separateText: {
    flex: 0.2,
    textAlign: 'center',
    color: Colors.darkGrey,
  },

  socialMediaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    width: '48%',
  },
  socialMediaButtonText: {
    fontSize: 16,
    color: Colors.black,
  },
  google: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: Colors.white,
  },
  googleIcon: {
    marginRight: 10,
  },
  aploadKey: {
    textAlign: 'center',
    color: '#000',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 13,
    color: '#FFFFFF',
    marginBottom: 274,
  },
  bottomTitle: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 17,
    color: '#FFFFFF',
  },
  bottomTitle2: {
    paddingLeft: 5,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 17,
    color: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
});

export default styles;
