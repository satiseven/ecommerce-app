import { NativeBaseProvider } from 'native-base';
import HomeScreens from './src/Screens/HomeScreens';
import LoginScreen from './src/Screens/LoginScreen';

export default function App() {
  return (
  <NativeBaseProvider>
    <LoginScreen />
  </NativeBaseProvider>

)}
