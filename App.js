import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {ToastProvider} from 'react-native-toast-notifications';
import Entrypoint from './app/Entrypoint';
import AuthState from './app/context/auth/AuthState';
import DetectorState from './app/context/detector/DetectorState';
import BalanceState from './app/context/balance/BalanceState';

const App = () => {
  return (
    <ToastProvider placement="top" offsetTop={40}>
      <AuthState>
        <DetectorState>
          <BalanceState>
            <PaperProvider>
              <Entrypoint />
            </PaperProvider>
          </BalanceState>
        </DetectorState>
      </AuthState>
    </ToastProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
