import React, { useContext, useEffect, useState } from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DataProvider, DataContext } from './src/hook/useData';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './src/screen/Home';
import DataScreen from './src/screen/DataScreen';
import Details from './src/screen/Details';
import searchResult from './src/screen/searchResult';
const Drawer = createDrawerNavigator();

function AppStarting() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        headerShown: true,
      }}
        initialRouteName='Home'
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Search Drama" component={DataScreen} />
        <Drawer.Screen name="Search Result" options={{
          drawerLabel: () => null,
          title: null,
          drawerIcon: () => null
        }} component={searchResult} />
        <Drawer.Screen name="Details" component={Details} options={{
          drawerLabel: () => null,
          title: null,
          drawerIcon: () => null
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <DataProvider>
      <AppStarting />
    </DataProvider>
  );
}