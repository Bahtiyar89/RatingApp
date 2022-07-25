import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {ToastProvider} from 'react-native-toast-notifications';
import Entrypoint from './app/Entrypoint';
import AuthState from './app/context/auth/AuthState';
import TransactionState from './app/context/transaction/TransactionState';
import BalanceState from './app/context/balance/BalanceState';

const App = () => {
  return (
    <ToastProvider placement="top" offsetTop={40}>
      <AuthState>
        <TransactionState>
          <BalanceState>
            <PaperProvider>
              <Entrypoint />
            </PaperProvider>
          </BalanceState>
        </TransactionState>
      </AuthState>
    </ToastProvider>
  );
};

export default App;
