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
  legend: {
    fontSize: 14,
    lineHeight: 24,
    color: '#FFFFFF',
    fontWeight: '400',
    lineHeight: 13,
    marginBottom: 6,
    marginTop: 15,
  },
  input: {
    fontSize: 13,
    height: 40,
    borderRadius: 10,
    width: '100%',
    color: '#FFFFFF30%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  completeButton: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 8,
  },
  completeButtonText: {
    color: Colors.defaultBlack,
    fontWeight: '600',
    fontSize: 17,
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
