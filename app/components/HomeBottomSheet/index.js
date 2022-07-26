import React, {forwardRef, memo, useContext} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
//import auth from '@react-native-firebase/auth';
//import {useDispatch} from 'react-redux';
//import {clearState} from '../../store/user/actions';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import AuthContext from '../../context/auth/AuthContext';

import SignOutIcon from '../../assets/signoutIcon';
import Colors from '../../constants/Сolors';
import styles from './styles';

const HomeBottomSheet = forwardRef(({image, navigation}, ref) => {
  const authContext = useContext(AuthContext);
  const {signOut} = authContext;

  const closeBottomSheet = () => {
    ref.current.close();
  };
  const handleProfileScreen = () => {
    navigation.navigate('ProfileScreen');
    closeBottomSheet();
  };

  const handleHelp = () => {
    navigation.navigate('TransactionScreen');
    closeBottomSheet();
  };

  // const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut();
  };
  return (
    <BottomSheet
      dragIconStyle={{width: 98}}
      ref={ref}
      backgroundColor={Colors.defaultBlackTrans}
      sheetBackgroundColor={Colors.white}
      radius={50}
      hasDraggableIcon
      height={247}
      dragIconColor={Colors.blue}>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, styles.homeButton]}
          onPress={handleProfileScreen}>
          <View style={styles.imageWrapper}>{image}</View>
          <Text style={styles.text}>View Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleHelp}
          style={[styles.button, styles.buttonWithBorders]}>
          <Image
            source={require('../../assets/transactionData.png')} //Change your icon image here
            style={{height: 25, width: 25}}
          />
          <Text style={styles.text2}>История транзакций</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <SignOutIcon />
          <Text style={styles.text}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
});

export default memo(HomeBottomSheet);
