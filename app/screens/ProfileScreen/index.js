import React, {Fragment} from 'react';
import {View, Pressable, Text, SafeAreaView, ScrollView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Appbar} from 'react-native-paper';
import ShevronLeft from '../../assets/chevron-left';
import MainStyle from '../../utils/MainStyle';
import styles from './styles';

export default function ProfileScreen({navigation}) {
  return (
    <Fragment>
      {/*loading_detector && <CustomModal loading={loading_detector} />*/}

      <Appbar.Header style={MainStyle.appBarThreeItems}>
        <Pressable
          style={{alignSelf: 'center'}}
          onPress={() => navigation.goBack()}>
          <ShevronLeft />
        </Pressable>
        <View style={MainStyle.appBarThreeDevider}>
          <Text style={MainStyle.textSize}>Профиль</Text>
        </View>
      </Appbar.Header>
      <KeyboardAwareScrollView>
        <SafeAreaView style={styles.screen}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Text style={styles.legend}>Фамилия</Text>

            <Text style={styles.legend}>Имя</Text>

            <Text style={styles.legend}>Отчество</Text>

            <Text style={styles.legend}>Индекс</Text>

            <Text style={styles.legend}>Адрес</Text>

            <Text style={styles.legend}>Номер телефона</Text>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
}
