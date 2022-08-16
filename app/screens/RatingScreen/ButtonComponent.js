import React, {Fragment} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function ButtonComponent(props) {
  const {id, setmodal, setId, setItemName} = props;
  return (
    <Fragment>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          setmodal();
          setId();
          setItemName();
        }}>
        <Text>{id}</Text>
      </TouchableOpacity>
    </Fragment>
  );
}
