import React, {Fragment} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function ButtonComponent(props) {
  const {id, setmodal, setId, setItemName, itemName} = props;

  return (
    <Fragment>
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {backgroundColor: itemName === id ? '#6248FF' : '#DDDDDD'},
        ]}
        onPress={() => {
          setmodal();
          setId();
          setItemName();
        }}>
        <Text style={[{color: itemName === id ? '#FFFFFF' : '#8E8E93'}]}>
          {id}
        </Text>
      </TouchableOpacity>
    </Fragment>
  );
}
