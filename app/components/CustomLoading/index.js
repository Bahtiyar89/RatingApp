import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

export default function CustomLoading({loading}) {
  if (loading) {
    return (
      <View style={styles.absolute}>
        <Text style={{fontWeight: '900'}}>Загружается в фоновом режиме...</Text>
      </View>
    );
  } else {
    return <View />;
  }
}
