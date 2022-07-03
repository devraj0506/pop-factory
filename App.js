import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Admin from './Components/Admin/Admin.jsx'
import Login from './Components/Login.jsx'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
    <View style={styles.container}>
      
      <Login />
      <StatusBar style="auto" />
    </View>
    
    <NavigationContainer>
    <Stack.Navigator>
    <Stavk.screen name="Admin" component={Admin} />
    </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
