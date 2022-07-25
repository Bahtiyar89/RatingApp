/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const CustomHeader = props => {
  const {text, textColor, alignText} = props;
  return (
    <Text style={[{textAlign: alignText, color: textColor}, styles.text]}>
      {text}
    </Text>
  );
};

export default CustomHeader;
