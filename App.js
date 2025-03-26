import 'react-native-gesture-handler';
import React from 'react';
import { AuthProvider } from './src/context/AuthProvider';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
