// App.js
import React, {useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Header from './src/components/header';
import BottomDrawer from './src/components/common/BottomDrawer';
import {DrawerProvider, DrawerContext} from './src/context';
import Ticker from './src/components/ticker';
import Actions from './src/components/actions';
import Chart from './src/components/chart';

const App = () => {
  const isDarkMode = true;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };

  return (
    <DrawerProvider>
      <SafeAreaView style={[styles.safeArea, backgroundStyle]}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Header />
          <Chart width={500} height={200} color="rgba(149, 131, 255, 1)" showIntervals={true}/>
          <Actions />
          <Ticker />
        </ScrollView>
        <DrawerContext.Consumer>
          {({isDrawerVisible, toggleDrawer, drawerContent}) => (
            <BottomDrawer
              visible={isDrawerVisible}
              toggleDrawer={toggleDrawer}
              title={drawerContent.title}
              content={drawerContent.content}
            />
          )}
        </DrawerContext.Consumer>
      </SafeAreaView>
    </DrawerProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
