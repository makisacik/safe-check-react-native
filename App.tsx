/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from './src/screens/LoginScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import HomeScreen from './src/screens/HomeScreen';
import ContactsScreen from './src/screens/ContactsScreen';

type Screen = 'Login' | 'Welcome' | 'Home' | 'Contacts';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [currentScreen, setCurrentScreen] = useState<Screen>('Login');

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Login':
        return <LoginScreen navigation={{ navigate: navigateTo }} />;
      case 'Welcome':
        return <WelcomeScreen navigation={{ navigate: navigateTo }} />;
      case 'Home':
        return <HomeScreen navigation={{ navigate: navigateTo }} />;
      case 'Contacts':
        return (
          <ContactsScreen
            navigation={{
              navigate: navigateTo,
              goBack: () => navigateTo('Home'),
            }}
          />
        );
      default:
        return <LoginScreen navigation={{ navigate: navigateTo }} />;
    }
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {renderScreen()}
    </SafeAreaProvider>
  );
}

export default App;
