import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import {styles} from './src/theme/appTheme';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView style={styles.container}>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
