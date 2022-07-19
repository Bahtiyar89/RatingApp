import React, {
  Fragment,
  useState,
  useContext,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  Pressable,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {
  Appbar,
  Card,
  Title,
  Paragraph,
  Button,
  Modal,
  Portal,
} from 'react-native-paper';

import CustomModal from '../../components/CustomLoading';

export default function CartModal({ navigation, visible, hideModal }) {
  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 20,
  };
  const [replenish, seTreplenish] = useState('');
  const [send, seTsend] = useState('');

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}>
        <Text>cart modal:</Text>
      </Modal>
    </Portal>
  );
}
