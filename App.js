import React from 'react';
import { NativeBaseProvider } from "native-base";
import { store, persistor } from './src/redux/Store';
import { Provider } from 'react-redux';
import Router from './src/navigation/Router/index';

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Router />
      </NativeBaseProvider>
    </Provider>
  )
}

export default App;
