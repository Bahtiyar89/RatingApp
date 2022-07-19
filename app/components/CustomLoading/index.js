import React, {Fragment} from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './style';
export default function CustomModal({loading}) {
  return (
    <Fragment>
      <View style={styles.absolute}>
        <View style={styles.shadowView}>
          <View style={styles.modal}>
            <ActivityIndicator
              animating={loading}
              size="large"
              style={{opacity: 1}}
              color="#999999"
            />
          </View>
        </View>
      </View>
    </Fragment>
  );
}
